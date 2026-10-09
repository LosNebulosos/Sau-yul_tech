/**
 * ========================================================================================
 * SAU YUL-TECH - COLLAR EMISOR ESP32 (MAX30205 + MAX30105 -> ESP-NOW)
 * MODO 2: TRANSMISOR DE LARGO ALCANCE DE BAJO CONSUMO
 * ========================================================================================
 *
 * ARQUITECTURA:
 *   Sensor MAX30205 (I2C: 0x4F) + MAX30105 -> ESP32 Collar -> ESP-NOW -> Gateway Receptor
 *
 * CARACTERÍSTICAS TÉCNICAS:
 * - Driver I2C nativo para sensor de temperatura corporal MAX30205 (Dirección 0x4F)
 * - Verificación de presencia I2C y diagnóstico de bus en el arranque
 * - Cero valores inventados: Si el sensor falla, se envía explícitamente bandera de error
 * - Driver óptico para sensor MAX30105 en bus I2C secundario (Wire1)
 * - Transmisión binaria estructurada por protocolo ESP-NOW hacia el Gateway
 * ========================================================================================
 */

#include <Wire.h>
#include <esp_now.h>
#include <WiFi.h>
#include <esp_wifi.h>
#include <MAX30105.h>

// ========================================================================================
// 1. CONFIGURACIÓN DE HARDWARE & PINES I2C
// ========================================================================================
// Pines I2C para Sensor de Temperatura MAX30205
#if defined(CONFIG_IDF_TARGET_ESP32S3)
const int PIN_TEMP_SDA = 8;
const int PIN_TEMP_SCL = 6;
const int PIN_OPT_SDA  = 4;
const int PIN_OPT_SCL  = 5;
#elif defined(CONFIG_IDF_TARGET_ESP32C3)
const int PIN_TEMP_SDA = 4;
const int PIN_TEMP_SCL = 5;
const int PIN_OPT_SDA  = 6;
const int PIN_OPT_SCL  = 7;
#else
const int PIN_TEMP_SDA = 21;
const int PIN_TEMP_SCL = 22;
const int PIN_OPT_SDA  = 16;
const int PIN_OPT_SCL  = 17;
#endif

// Dirección I2C del sensor de temperatura clínica MAX30205
const uint8_t MAX30205_ADDRESS   = 0x4F;
const uint8_t MAX30205_REG_TEMP  = 0x00;
const uint8_t MAX30205_REG_CONF  = 0x01;

MAX30105 sensorCardiaco;
bool max30205Disponible = false;
bool max30105Disponible = false;

// ========================================================================================
// 2. ESTRUCTURA DE TELEMETRÍA ESP-NOW
// ========================================================================================
typedef struct struct_message {
    uint8_t id;             // Identificador numérico del collar (1, 2, 3...)
    uint8_t sensor_valido;  // 1 = lectura real válida, 0 = fallo de sensor
    float temperatura;      // Temperatura real en °C (o 0.0 si inválido)
    int32_t ir;             // Canal Infrarrojo MAX30105
    int32_t red;            // Canal Rojo MAX30105
    char nombre[16];        // Identificador (ej: "Collar_01")
    char estado[24];        // "NORMAL", "ALERTA", "ERROR_SENSOR"
} struct_message;

struct_message datosAEnviar;

// Dirección MAC del Gateway Receptor (Configurar con la MAC de su ESP32 Gateway)
uint8_t direccionGateway[] = {0x3C, 0xDC, 0x75, 0x6B, 0xCE, 0x34};
esp_now_peer_info_t peerInfo;

int contadorExitos = 0;
int contadorErrores = 0;

// Callback de estado de transmisión ESP-NOW
void OnDataSent(const uint8_t *mac_addr, esp_now_send_status_t status) {
    if (status == ESP_NOW_SEND_SUCCESS) {
        contadorExitos++;
        Serial.println("[ESP-NOW] Paquete entregado con éxito al Gateway receptor");
    } else {
        contadorErrores++;
        Serial.println("[ESP-NOW] Error de entrega: Gateway fuera de cobertura o apagado");
    }
}

// ========================================================================================
// 3. DRIVER Y LECTURA DEL SENSOR MAX30205
// ========================================================================================

bool inicializarMAX30205() {
    Wire.beginTransmission(MAX30205_ADDRESS);
    uint8_t error = Wire.endTransmission();

    if (error == 0) {
        // Configurar en modo continuo (registro 0x01 = 0x00)
        Wire.beginTransmission(MAX30205_ADDRESS);
        Wire.write(MAX30205_REG_CONF);
        Wire.write(0x00);
        Wire.endTransmission();

        Serial.printf("[MAX30205] Sensor detectado en dirección I2C 0x%02X\n", MAX30205_ADDRESS);
        return true;
    } else {
        Serial.printf("[MAX30205] ERROR: Sensor no responde en dirección 0x%02X (Error I2C: %d)\n", MAX30205_ADDRESS, error);
        return false;
    }
}

bool leerTemperaturaMAX30205(float &tempSalida) {
    Wire.beginTransmission(MAX30205_ADDRESS);
    Wire.write(MAX30205_REG_TEMP);
    if (Wire.endTransmission(false) != 0) {
        tempSalida = 0.0f;
        return false;
    }

    uint8_t bytes = Wire.requestFrom((uint8_t)MAX30205_ADDRESS, (uint8_t)2);
    if (bytes != 2) {
        tempSalida = 0.0f;
        return false;
    }

    uint8_t msb = Wire.read();
    uint8_t lsb = Wire.read();
    int16_t raw = (int16_t)((msb << 8) | lsb);
    float temp = (float)raw * 0.00390625f;

    // Validación de límites físicos del sensor (-10°C a 65°C)
    if (isnan(temp) || temp < -10.0f || temp > 65.0f) {
        tempSalida = 0.0f;
        return false;
    }

    tempSalida = temp;
    return true;
}

// ========================================================================================
// 4. SETUP & INICIALIZACIÓN
// ========================================================================================

void setup() {
    Serial.begin(115200);
    delay(1000);

    Serial.println("\n=================================================================");
    Serial.println("  SAU YUL-TECH - COLLAR EMISOR ESP-NOW (MAX30205 + MAX30105)");
    Serial.println("=================================================================");

    // 1. Configurar WiFi en modo Estación (requerido para ESP-NOW)
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();

    // 2. Inicializar ESP-NOW
    if (esp_now_init() != ESP_OK) {
        Serial.println("[CRÍTICO] Falló la inicialización de ESP-NOW. Reiniciando...");
        delay(2000);
        ESP.restart();
        return;
    }

    esp_now_register_send_cb(OnDataSent);

    // 3. Registrar Gateway Receptor como Peer
    memset(&peerInfo, 0, sizeof(peerInfo));
    memcpy(peerInfo.peer_addr, direccionGateway, 6);
    peerInfo.channel = 0;
    peerInfo.encrypt = false;

    if (esp_now_add_peer(&peerInfo) != ESP_OK) {
        Serial.println("[ALERTA] No se pudo registrar el Gateway Receptor como peer");
    } else {
        Serial.println("[OK] Gateway Receptor registrado en la tabla de peers ESP-NOW");
    }

    // 4. Inicializar I2C para MAX30205 (Wire principal)
    Wire.begin(PIN_TEMP_SDA, PIN_TEMP_SCL);
    Wire.setClock(100000);
    max30205Disponible = inicializarMAX30205();

    // 5. Inicializar I2C para MAX30105 (Wire1 secundario)
    Wire1.begin(PIN_OPT_SDA, PIN_OPT_SCL, 100000);
    if (sensorCardiaco.begin(Wire1, I2C_SPEED_FAST)) {
        sensorCardiaco.setup(255, 4, 2, 200, 411, 4096);
        max30105Disponible = true;
        Serial.println("[MAX30105] Sensor óptico inicializado correctamente en Wire1");
    } else {
        max30105Disponible = false;
        Serial.println("[MAX30105] Sensor óptico no detectado en Wire1 (opcional)");
    }

    // Identidad del collar
    datosAEnviar.id = 1;
    strncpy(datosAEnviar.nombre, "Collar_01", sizeof(datosAEnviar.nombre) - 1);
}

// ========================================================================================
// 5. LOOP DE MUESTREO Y TRANSMISIÓN
// ========================================================================================

void loop() {
    float tempReal = 0.0f;
    bool exitoTemp = leerTemperaturaMAX30205(tempReal);

    datosAEnviar.sensor_valido = exitoTemp ? 1 : 0;
    datosAEnviar.temperatura = exitoTemp ? tempReal : 0.0f;

    if (exitoTemp) {
        if (tempReal > 39.5f) {
            strncpy(datosAEnviar.estado, "ALERTA_TERMICA", sizeof(datosAEnviar.estado) - 1);
        } else {
            strncpy(datosAEnviar.estado, "NORMAL", sizeof(datosAEnviar.estado) - 1);
        }
    } else {
        strncpy(datosAEnviar.estado, "ERROR_SENSOR", sizeof(datosAEnviar.estado) - 1);
    }

    if (max30105Disponible) {
        datosAEnviar.ir = (int32_t)sensorCardiaco.getIR();
        datosAEnviar.red = (int32_t)sensorCardiaco.getRed();
    } else {
        datosAEnviar.ir = 0;
        datosAEnviar.red = 0;
    }

    // Transmitir paquete al Gateway receptor
    esp_err_t res = esp_now_send(direccionGateway, (uint8_t*)&datosAEnviar, sizeof(datosAEnviar));

    if (res == ESP_OK) {
        if (exitoTemp) {
            Serial.printf("[TX ESP-NOW] %s -> Temp MAX30205: %.2f °C | IR: %d | RED: %d\n",
                          datosAEnviar.nombre, datosAEnviar.temperatura, datosAEnviar.ir, datosAEnviar.red);
        } else {
            Serial.printf("[TX ESP-NOW] %s -> [FALLO SENSOR MAX30205] | IR: %d | RED: %d\n",
                          datosAEnviar.nombre, datosAEnviar.ir, datosAEnviar.red);
        }
    } else {
        Serial.printf("[TX ESP-NOW] Error al ejecutar esp_now_send (Código: %d)\n", res);
    }

    delay(3000); // Muestreo cada 3 segundos
}

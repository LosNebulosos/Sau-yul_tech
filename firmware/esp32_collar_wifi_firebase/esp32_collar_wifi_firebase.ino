/**
 * ========================================================================================
 * SAU YUL-TECH - FIRMWARE COLLAR BOVINO (ESP32 / ESP32-S3 / ESP32-C3)
 * MODO 1: CONEXIÓN DIRECTA WI-FI + SENSOR DE TEMPERATURA MAX30205 + FIREBASE RTDB
 * ========================================================================================
 *
 * ARQUITECTURA:
 *   Sensor MAX30205 (I2C: 0x4F) -> ESP32 -> Wi-Fi (Modo STA) -> Firebase RTDB (REST)
 *
 * CARACTERÍSTICAS TÉCNICAS:
 * - Driver I2C nativo para sensor de temperatura corporal MAX30205 (Dirección 0x4F)
 * - Conversión precisa de 16 bits en complemento a dos (Resolución: 0.00390625 °C)
 * - Detección y diagnóstico de bus I2C (sin lecturas ficticias ni números aleatorios)
 * - Manejo robusto de errores de desconexión o fallo del sensor (envío de estado explícito)
 * - Conexión Wi-Fi en modo Estación (WIFI_STA) con reconexión automática NO bloqueante
 * - Sincronización horaria real mediante Network Time Protocol (NTP)
 * - Envío HTTP REST seguro a Firebase Realtime Database (/Dispositivos_Collares/Collar_X)
 * - Mensajes de diagnóstico en consola Serial (115200 baudios)
 * ========================================================================================
 */

#include <Wire.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <time.h>

// ========================================================================================
// 1. CONFIGURACIÓN DE RED WI-FI & FIREBASE (Ajustar con credenciales reales)
// ========================================================================================
// NOTA: Ingrese los datos de su red Wi-Fi local
const char* WIFI_SSID     = "TU_WIFI_SSID";         // Configurar SSID real
const char* WIFI_PASSWORD = "TU_WIFI_PASSWORD";     // Configurar Clave real

// Configuración de Firebase Realtime Database
const char* FIREBASE_HOST = "https://datosbase111-default-rtdb.firebaseio.com/"; // URL de la base de datos
const char* FIREBASE_AUTH = "iFy4c5w94E07070879dKcDxoJPLnqgceFCy2zr6U";        // Secret / Auth Token

// Identificador del Dispositivo / Collar
const char* COLLAR_ID   = "Collar_01";
const char* RAZA_BOVINO = "Bovino";
const char* COLOR_PELO  = "No especificado";

// ========================================================================================
// 2. CONFIGURACIÓN DE HARDWARE & PINES I2C
// ========================================================================================
// Pines I2C (Pines por defecto en ESP32: SDA=21, SCL=22; en ESP32-S3/C3 ajustar según diseño)
#if defined(CONFIG_IDF_TARGET_ESP32S3)
const int PIN_I2C_SDA = 8;
const int PIN_I2C_SCL = 6;
#elif defined(CONFIG_IDF_TARGET_ESP32C3)
const int PIN_I2C_SDA = 4;
const int PIN_I2C_SCL = 5;
#else
const int PIN_I2C_SDA = 21;
const int PIN_I2C_SCL = 22;
#endif

// Dirección I2C del sensor de temperatura clínica MAX30205
// (0x4F cuando A0, A1, A2 están conectados a VDD)
const uint8_t MAX30205_ADDRESS   = 0x4F;
const uint8_t MAX30205_REG_TEMP  = 0x00; // Registro de Temperatura (2 bytes)
const uint8_t MAX30205_REG_CONF  = 0x01; // Registro de Configuración (1 byte)
const uint8_t MAX30205_REG_THYST = 0x02; // Registro THYST (2 bytes)
const uint8_t MAX30205_REG_TOS   = 0x03; // Registro TOS (2 bytes)

// Configuración de sincronización NTP
const char* NTP_SERVER         = "pool.ntp.org";
const long  GMT_OFFSET_SEC     = -21600; // GMT-6 (Centroamérica / Managua)
const int   DAYLIGHT_OFFSET_SEC= 0;

// Intervalo de muestreo y envío a Firebase (en milisegundos)
const unsigned long INTERVALO_ENVIO_MS = 10000; // Cada 10 segundos
unsigned long ultimaLecturaMs = 0;

// Intervalo de reintento de conexión Wi-Fi (no bloqueante)
const unsigned long INTERVALO_RECONEXION_WIFI_MS = 15000;
unsigned long ultimoIntentoWiFiMs = 0;

// ========================================================================================
// 3. ESTRUCTURA DE DATOS TELEMÉTRICOS
// ========================================================================================
struct TelemetriaCollar {
    float temperatura;       // Temperatura leída en °C (o NAN si hay error)
    bool sensorValido;       // true si la lectura física es correcta
    int rssiWiFi;            // Calidad de señal Wi-Fi (dBm)
    unsigned long timestamp; // Timestamp Epoch (segundos)
    char fechaHora[32];      // Cadena formateada YYYY-MM-DD HH:MM:SS
    char estado[32];         // "NORMAL", "ALERTA_TERMICA", "ERROR_SENSOR"
};

TelemetriaCollar telemetriaActual;

// ========================================================================================
// 4. DRIVER I2C PARA SENSOR MAX30205
// ========================================================================================

/**
 * Inicializa y verifica la presencia física del sensor MAX30205 en el bus I2C
 */
bool inicializarMAX30205() {
    Wire.beginTransmission(MAX30205_ADDRESS);
    uint8_t error = Wire.endTransmission();

    if (error == 0) {
        // Configurar el sensor en modo de conversión continua (registro 0x01 = 0x00)
        Wire.beginTransmission(MAX30205_ADDRESS);
        Wire.write(MAX30205_REG_CONF);
        Wire.write(0x00); // 0x00: Modo continuo, comparador normal
        Wire.endTransmission();

        Serial.printf("[MAX30205] Sensor detectado y configurado en dirección I2C 0x%02X\n", MAX30205_ADDRESS);
        return true;
    } else {
        Serial.printf("[MAX30205] ERROR: Sensor no responde en dirección 0x%02X (Código I2C: %d)\n", MAX30205_ADDRESS, error);
        Serial.println("[MAX30205] Verifique: 1) Cableado SDA/SCL, 2) Alimentación 3.3V, 3) Resistencias Pull-up.");
        return false;
    }
}

/**
 * Realiza la lectura real del sensor MAX30205.
 * Retorna true si la lectura fue exitosa y dentro de límites técnicos, o false en caso de error.
 * NUNCA inventa valores nominales ni números aleatorios.
 */
bool leerTemperaturaMAX30205(float &tempResultado) {
    // 1. Apuntar al registro de temperatura (0x00)
    Wire.beginTransmission(MAX30205_ADDRESS);
    Wire.write(MAX30205_REG_TEMP);
    uint8_t errTx = Wire.endTransmission(false); // Repeated Start

    if (errTx != 0) {
        Serial.printf("[MAX30205] Error al solicitar registro de temperatura (I2C err: %d)\n", errTx);
        tempResultado = NAN;
        return false;
    }

    // 2. Solicitar 2 bytes de datos (MSB y LSB)
    uint8_t bytesRecibidos = Wire.requestFrom((uint8_t)MAX30205_ADDRESS, (uint8_t)2);
    if (bytesRecibidos != 2) {
        Serial.printf("[MAX30205] Error: Se esperaban 2 bytes, recibidos: %d\n", bytesRecibidos);
        tempResultado = NAN;
        return false;
    }

    uint8_t msb = Wire.read();
    uint8_t lsb = Wire.read();

    // 3. Conversión de complemento a dos de 16 bits
    // El MAX30205 entrega la temperatura en formato de 16 bits con resolución de 0.00390625 °C (1/256 °C)
    int16_t rawTemp = (int16_t)((msb << 8) | lsb);
    float temperaturaCalculada = (float)rawTemp * 0.00390625f;

    // 4. Validación técnica de límites físicos del sensor
    // Rango operativo del sensor: -40 °C a +125 °C. Rango de alta precisión clínica: 0 °C a +50 °C.
    // Valores fuera de -10 °C a 65 °C indican una falla de conexión física en el ganado.
    if (isnan(temperaturaCalculada) || temperaturaCalculada < -10.0f || temperaturaCalculada > 65.0f) {
        Serial.printf("[MAX30205] Lectura física fuera de rango técnico válido: %.2f °C\n", temperaturaCalculada);
        tempResultado = NAN;
        return false;
    }

    tempResultado = temperaturaCalculada;
    return true;
}

// ========================================================================================
// 5. GESTIÓN DE WI-FI NO BLOQUEANTE & NTP
// ========================================================================================

void iniciarConexionWiFi() {
    Serial.println("\n[WiFi] Configurando modo Estación (WIFI_STA)...");
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(100);

    Serial.printf("[WiFi] Conectando a red: \"%s\"...\n", WIFI_SSID);
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

    unsigned long inicioConexion = millis();
    while (WiFi.status() != WL_CONNECTED && (millis() - inicioConexion < 8000)) {
        delay(400);
        Serial.print(".");
    }

    if (WiFi.status() == WL_CONNECTED) {
        Serial.println("\n[WiFi] ¡Conexión establecida exitosamente!");
        Serial.printf("[WiFi] Dirección IP: %s | RSSI: %d dBm\n", WiFi.localIP().toString().c_str(), WiFi.RSSI());

        // Iniciar cliente NTP para fecha y hora real
        configTime(GMT_OFFSET_SEC, DAYLIGHT_OFFSET_SEC, NTP_SERVER);
        Serial.println("[NTP] Sincronizando hora con servidor pool.ntp.org...");
    } else {
        Serial.println("\n[WiFi] No se pudo conectar de forma inmediata. El sistema continuará leyendo sensores localmente.");
    }
}

void verificarReconexionWiFi() {
    if (WiFi.status() != WL_CONNECTED) {
        if (millis() - ultimoIntentoWiFiMs > INTERVALO_RECONEXION_WIFI_MS) {
            ultimoIntentoWiFiMs = millis();
            Serial.println("[WiFi] Conexión perdida. Intentando reconectar a la red...");
            WiFi.reconnect();
        }
    }
}

void obtenerFechaHoraActual(char* buffer, size_t maxLen, unsigned long &epochOut) {
    struct tm timeinfo;
    time_t now;
    time(&now);
    epochOut = (unsigned long)now;

    if (getLocalTime(&timeinfo, 100)) {
        strftime(buffer, maxLen, "%Y-%m-%d %H:%M:%S", &timeinfo);
    } else {
        snprintf(buffer, maxLen, "Sin sincronizar (NTP)");
    }
}

// ========================================================================================
// 6. ENVÍO DE TELEMETRÍA A FIREBASE REALTIME DATABASE
// ========================================================================================

bool enviarTelemetriaFirebase(const TelemetriaCollar &datos) {
    if (WiFi.status() != WL_CONNECTED) {
        Serial.println("[Firebase] No se puede enviar datos: Wi-Fi no conectado.");
        return false;
    }

    HTTPClient http;
    String url = String(FIREBASE_HOST) + "Dispositivos_Collares/" + String(COLLAR_ID) + ".json";
    if (strlen(FIREBASE_AUTH) > 0) {
        url += "?auth=" + String(FIREBASE_AUTH);
    }

    Serial.println("[Firebase] Conectando con Firebase Realtime Database...");
    http.begin(url);
    http.addHeader("Content-Type", "application/json");

    // Construcción del JSON con datos reales verificados
    String payload = "{";
    payload += "\"id\":\"" + String(COLLAR_ID) + "\",";
    payload += "\"raza\":\"" + String(RAZA_BOVINO) + "\",";
    payload += "\"color\":\"" + String(COLOR_PELO) + "\",";

    if (datos.sensorValido) {
        payload += "\"temperatura\":" + String(datos.temperatura, 2) + ",";
    } else {
        payload += "\"temperatura\":null,";
    }

    payload += "\"sensor_valido\":" + String(datos.sensorValido ? "true" : "false") + ",";
    payload += "\"estado\":\"" + String(datos.estado) + "\",";
    payload += "\"rssi_wifi\":" + String(datos.rssiWiFi) + ",";
    payload += "\"timestamp\":" + String(datos.timestamp) + ",";
    payload += "\"hora\":\"" + String(datos.fechaHora) + "\",";
    payload += "\"ultimaLectura\":\"" + String(datos.fechaHora) + "\"";
    payload += "}";

    int codigoHttp = http.PUT(payload);

    if (codigoHttp == 200 || codigoHttp == 204) {
        Serial.printf("[Firebase] Datos enviados exitosamente. Código HTTP: %d\n", codigoHttp);
        http.end();
        return true;
    } else {
        Serial.printf("[Firebase] Error al enviar datos. Código HTTP: %d | Mensaje: %s\n",
                      codigoHttp, http.errorToString(codigoHttp).c_str());
        http.end();
        return false;
    }
}

// ========================================================================================
// 7. SETUP & LOOP PRINCIPAL
// ========================================================================================

void setup() {
    Serial.begin(115200);
    delay(1000);

    Serial.println("\n=================================================================");
    Serial.println("  SAU YUL-TECH - COLLAR TELEMÉTRICO ESP32 (MAX30205 + FIREBASE)");
    Serial.println("=================================================================");

    // 1. Inicializar bus I2C para el sensor de temperatura
    Serial.printf("[I2C] Inicializando bus en SDA=%d, SCL=%d...\n", PIN_I2C_SDA, PIN_I2C_SCL);
    Wire.begin(PIN_I2C_SDA, PIN_I2C_SCL);
    Wire.setClock(100000); // 100 kHz estándar

    // 2. Inicializar sensor MAX30205
    inicializarMAX30205();

    // 3. Iniciar conexión Wi-Fi
    iniciarConexionWiFi();

    Serial.println("[SISTEMA] Inicialización completada. Entrando en bucle de telemetría...");
}

void loop() {
    // 1. Mantener supervisión de conexión Wi-Fi
    verificarReconexionWiFi();

    // 2. Muestreo periódico de sensores
    if (millis() - ultimaLecturaMs >= INTERVALO_ENVIO_MS) {
        ultimaLecturaMs = millis();

        float tempLeida = 0.0f;
        bool exitoLectura = leerTemperaturaMAX30205(tempLeida);

        telemetriaActual.sensorValido = exitoLectura;
        telemetriaActual.temperatura = tempLeida;
        telemetriaActual.rssiWiFi = (WiFi.status() == WL_CONNECTED) ? WiFi.RSSI() : 0;

        obtenerFechaHoraActual(telemetriaActual.fechaHora, sizeof(telemetriaActual.fechaHora), telemetriaActual.timestamp);

        if (exitoLectura) {
            // Clasificación técnica del estado de lectura
            if (tempLeida > 39.5f) {
                strncpy(telemetriaActual.estado, "ALERTA_TERMICA", sizeof(telemetriaActual.estado));
            } else if (tempLeida < 37.0f) {
                strncpy(telemetriaActual.estado, "HIPOTERMIA_OBSERVACION", sizeof(telemetriaActual.estado));
            } else {
                strncpy(telemetriaActual.estado, "NORMAL", sizeof(telemetriaActual.estado));
            }

            Serial.printf("[TELEMETRÍA] %s -> Temperatura MAX30205: %.2f °C | Estado: %s | WiFi RSSI: %d dBm\n",
                          COLLAR_ID, tempLeida, telemetriaActual.estado, telemetriaActual.rssiWiFi);
        } else {
            strncpy(telemetriaActual.estado, "ERROR_SENSOR_MAX30205", sizeof(telemetriaActual.estado));
            Serial.printf("[TELEMETRÍA] %s -> ERROR: No se pudo obtener lectura del sensor MAX30205.\n", COLLAR_ID);
        }

        // 3. Enviar datos a Firebase si hay enlace Wi-Fi
        if (WiFi.status() == WL_CONNECTED) {
            enviarTelemetriaFirebase(telemetriaActual);
        }
    }

    delay(20);
}

/**
 * ========================================================================================
 * SAU YUL-TECH - GATEWAY RECEPTOR ESP32 (ESP-NOW -> WI-FI -> FIREBASE RTDB)
 * ========================================================================================
 *
 * ARQUITECTURA:
 *   Collar Emisor (ESP-NOW) -> ESP32 Gateway -> Wi-Fi (Modo STA) -> Firebase Realtime DB
 *
 * CARACTERÍSTICAS TÉCNICAS:
 * - Recepción de paquetes ESP-NOW de múltiples collares emisores en tiempo real
 * - Compatibilidad dual con ESP-IDF v4 (Core 2.x) y ESP-IDF v5 (Core 3.x)
 * - Conexión Wi-Fi a la red del establecimiento con reconexión automática NO bloqueante
 * - Sincronización horaria con servidores NTP reales (pool.ntp.org)
 * - Envío HTTP REST limpio a Firebase Realtime Database (/Dispositivos_Collares/Collar_X)
 * - Cero datos sintéticos: Respeta exactamente las mediciones recibidas del sensor MAX30205
 * ========================================================================================
 */

#include <WiFi.h>
#include <esp_now.h>
#include <esp_wifi.h>
#include <esp_idf_version.h>
#include <HTTPClient.h>
#include <time.h>

// ========================================================================================
// 1. CONFIGURACIÓN DE RED WI-FI & FIREBASE (Ajustar con credenciales de su red)
// ========================================================================================
const char* WIFI_SSID     = "TU_WIFI_SSID";         // Configurar SSID real
const char* WIFI_PASSWORD = "TU_WIFI_PASSWORD";     // Configurar Clave real

// Configuración de Firebase Realtime Database
const char* FIREBASE_HOST = "https://datosbase111-default-rtdb.firebaseio.com/";
const char* FIREBASE_AUTH = "iFy4c5w94E07070879dKcDxoJPLnqgceFCy2zr6U";

// Configuración de Servidor NTP para estampas de tiempo reales
const char* NTP_SERVER          = "pool.ntp.org";
const long  GMT_OFFSET_SEC      = -21600; // GMT-6 (Centroamérica / Managua)
const int   DAYLIGHT_OFFSET_SEC = 0;

// ========================================================================================
// 2. ESTRUCTURA DE TELEMETRÍA (Debe ser IDÉNTICA a la del Collar Emisor)
// ========================================================================================
typedef struct struct_message {
    uint8_t id;             // ID numérico del collar
    uint8_t sensor_valido;  // 1 = lectura válida, 0 = fallo
    float temperatura;      // Temperatura en °C
    int32_t ir;             // Sensor óptico Infrarrojo
    int32_t red;            // Sensor óptico Rojo
    char nombre[16];        // Identificador del collar
    char estado[24];        // Estado operativo
} struct_message;

struct_message datosRecibidos;
volatile bool nuevoDatoPendiente = false;

unsigned long contadorRecibidos = 0;
unsigned long contadorEnviados = 0;

const unsigned long INTERVALO_RECONEXION_MS = 15000;
unsigned long ultimoIntentoReconexionMs = 0;

// ========================================================================================
// 3. CALLBACK DE RECEPCIÓN ESP-NOW
// ========================================================================================
#if defined(ESP_IDF_VERSION) && (ESP_IDF_VERSION >= ESP_IDF_VERSION_VAL(5, 0, 0))
void OnDataRecv(const esp_now_recv_info_t *info, const uint8_t *incomingData, int len) {
#else
void OnDataRecv(const uint8_t *mac, const uint8_t *incomingData, int len) {
#endif
    if (len == sizeof(struct_message)) {
        memcpy(&datosRecibidos, incomingData, sizeof(struct_message));
        nuevoDatoPendiente = true;
        contadorRecibidos++;

        if (datosRecibidos.sensor_valido == 1) {
            Serial.printf("[RX ESP-NOW] Paquete recibido de %s (#%d) -> Temp: %.2f °C | IR: %d | RED: %d\n",
                          datosRecibidos.nombre, datosRecibidos.id, datosRecibidos.temperatura,
                          datosRecibidos.ir, datosRecibidos.red);
        } else {
            Serial.printf("[RX ESP-NOW] Paquete recibido de %s (#%d) -> [ERROR SENSOR MAX30205]\n",
                          datosRecibidos.nombre, datosRecibidos.id);
        }
    } else {
        Serial.printf("[RX ESP-NOW] Longitud inválida recibida: %d bytes (esperado: %d)\n", len, (int)sizeof(struct_message));
    }
}

// ========================================================================================
// 4. FUNCIONES DE TIEMPO Y SINCRONIZACIÓN FIREBASE
// ========================================================================================

void obtenerHoraNTP(char* buffer, size_t maxLen, long &epochOut) {
    struct tm timeinfo;
    time_t now;
    time(&now);
    epochOut = (long)now;

    if (getLocalTime(&timeinfo, 100)) {
        strftime(buffer, maxLen, "%Y-%m-%d %H:%M:%S", &timeinfo);
    } else {
        snprintf(buffer, maxLen, "Sin sincronizar (NTP)");
    }
}

bool enviarAFirebase(const struct_message &datos) {
    if (WiFi.status() != WL_CONNECTED) {
        Serial.println("[Firebase] Error: Wi-Fi no conectado. Omitiendo sincronización.");
        return false;
    }

    HTTPClient http;
    String collarIdStr = (strlen(datos.nombre) > 0) ? String(datos.nombre) : ("Collar_" + String(datos.id));
    String url = String(FIREBASE_HOST) + "Dispositivos_Collares/" + collarIdStr + ".json";
    if (strlen(FIREBASE_AUTH) > 0) {
        url += "?auth=" + String(FIREBASE_AUTH);
    }

    Serial.println("[Firebase] Conectando con Firebase Realtime Database...");
    http.begin(url);
    http.addHeader("Content-Type", "application/json");

    char fechaStr[32];
    long epochSec = 0;
    obtenerHoraNTP(fechaStr, sizeof(fechaStr), epochSec);

    String payload = "{";
    payload += "\"id\":\"" + collarIdStr + "\",";

    if (datos.sensor_valido == 1) {
        payload += "\"temperatura\":" + String(datos.temperatura, 2) + ",";
    } else {
        payload += "\"temperatura\":null,";
    }

    payload += "\"sensor_valido\":" + String(datos.sensor_valido == 1 ? "true" : "false") + ",";
    payload += "\"ir\":" + String(datos.ir) + ",";
    payload += "\"rojo\":" + String(datos.red) + ",";
    payload += "\"estado\":\"" + String(datos.estado) + "\",";
    payload += "\"timestamp\":" + String(epochSec) + ",";
    payload += "\"hora\":\"" + String(fechaStr) + "\",";
    payload += "\"ultimaLectura\":\"" + String(fechaStr) + "\"";
    payload += "}";

    int codigoHttp = http.PUT(payload);

    if (codigoHttp == 200 || codigoHttp == 204) {
        contadorEnviados++;
        Serial.printf("[Firebase] Datos de %s sincronizados exitosamente (Código HTTP: %d)\n", collarIdStr.c_str(), codigoHttp);
        http.end();
        return true;
    } else {
        Serial.printf("[Firebase] Error al sincronizar %s. Código HTTP: %d | Mensaje: %s\n",
                      collarIdStr.c_str(), codigoHttp, http.errorToString(codigoHttp).c_str());
        http.end();
        return false;
    }
}

// ========================================================================================
// 5. SETUP & INICIALIZACIÓN
// ========================================================================================

void setup() {
    Serial.begin(115200);
    delay(1000);

    Serial.println("\n=================================================================");
    Serial.println("  SAU YUL-TECH - GATEWAY RECEPTOR ESP32 (ESP-NOW -> FIREBASE)");
    Serial.println("=================================================================");

    // 1. Configurar WiFi en modo Dual (AP_STA permite escuchar ESP-NOW y conectar a router WiFi)
    WiFi.mode(WIFI_AP_STA);
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

    Serial.printf("[WiFi] Conectando a la red: \"%s\"...\n", WIFI_SSID);

    unsigned long inicioWiFi = millis();
    while (WiFi.status() != WL_CONNECTED && (millis() - inicioWiFi < 8000)) {
        delay(400);
        Serial.print(".");
    }

    if (WiFi.status() == WL_CONNECTED) {
        Serial.println("\n[WiFi] ¡Conectado exitosamente!");
        Serial.printf("[WiFi] IP Asignada: %s | RSSI: %d dBm\n", WiFi.localIP().toString().c_str(), WiFi.RSSI());

        // Iniciar sincronización de hora NTP
        configTime(GMT_OFFSET_SEC, DAYLIGHT_OFFSET_SEC, NTP_SERVER);
        Serial.println("[NTP] Sincronizando hora con servidor pool.ntp.org...");
    } else {
        Serial.println("\n[WiFi] Enlace Wi-Fi no disponible de momento. El Gateway recibirá tramas ESP-NOW localmente.");
    }

    // 2. Inicializar ESP-NOW
    if (esp_now_init() != ESP_OK) {
        Serial.println("[CRÍTICO] Error al inicializar ESP-NOW en Gateway. Reiniciando...");
        delay(2000);
        ESP.restart();
        return;
    }

    esp_now_register_recv_cb(OnDataRecv);
    Serial.println("[OK] Gateway listo para recibir paquetes de telemetría de los collares.");
}

// ========================================================================================
// 6. LOOP PRINCIPAL
// ========================================================================================

void loop() {
    // 1. Procesar paquetes recibidos
    if (nuevoDatoPendiente) {
        nuevoDatoPendiente = false;
        enviarAFirebase(datosRecibidos);
    }

    // 2. Reconexión Wi-Fi automática no bloqueante
    if (WiFi.status() != WL_CONNECTED && strlen(WIFI_SSID) > 0) {
        if (millis() - ultimoIntentoReconexionMs > INTERVALO_RECONEXION_MS) {
            ultimoIntentoReconexionMs = millis();
            Serial.println("[WiFi] Conexión perdida. Intentando reconectar...");
            WiFi.reconnect();
        }
    }

    delay(20);
}

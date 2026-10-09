# Arquitectura Técnica Oficial - Sau Yul-Tech

Plataforma de telemetría pecuaria biométrica IoT, cartografía satelital y Eco-Mercado agropecuario.

---

## 1. Flujo de Datos y Arquitectura de Comunicaciones

```
+--------------------------+
|  Collar Emisor (ESP32)   |
|  - Sensor MAX30205 (Temp)|
|  - Sensor MAX30105 (Ópt) |
+--------------------------+
             |
             | [Protocolo Inalámbrico ESP-NOW (2.4 GHz)]
             v
+--------------------------+
|  Gateway Receptor (ESP32)|
|  - Sincronización NTP    |
|  - Conexión WiFi Finca   |
+--------------------------+
             |
             | [HTTPS REST PUT / JSON Payload]
             v
+-------------------------------------------------------------+
|  Firebase Realtime Database (Nube)                          |
|  URL: https://datosbase111-default-rtdb.firebaseio.com/    |
|  Nodo: /Dispositivos_Collares/Collar_X.json                 |
+-------------------------------------------------------------+
             ^
             | [HTTPS Polling / REST Sync]
             v
+-------------------------------------------------------------+
|  Servidor Backend Node.js / Plataforma Web Frontend         |
|  - Visualización de Telemetría Real (Temp, IR, Red)         |
|  - Cartografía Satelital HD y Delimitación de Sedes         |
|  - Gestión de Hato, Traspasos y Eco-Mercado de Biomasa      |
+-------------------------------------------------------------+
```

---

## 2. Sensores Físicos Integrados en el Collar
- **MAX30205**: Sensor digital de temperatura corporal bovina de grado clínico (±0.1°C de precisión, I2C).
- **MAX30105**: Sensor óptico de reflectancia infrarroja (IR) y roja (RED) para monitorización fotopletismográfica y ritmo circadiano.

---

## 3. Estructura de Datos en Firebase RTDB
Nodo: `/Dispositivos_Collares/Collar_1.json`
```json
{
  "id": 1,
  "nombre": "Collar_01",
  "descripcion": "Bovino_Lechero",
  "temperatura": 38.45,
  "ir": 124500,
  "rojo": 118200,
  "timestamp": 1723821600,
  "hora": "2026-08-16 13:30:00"
}
```

---

## 4. Despliegue en Firebase Hosting
- **Proyecto Firebase**: `sou-youl-tech`
- **Sitio Hosting**: `souyoultech`
- **Comando de despliegue**:
  ```bash
  firebase deploy --only hosting:souyoultech
  ```

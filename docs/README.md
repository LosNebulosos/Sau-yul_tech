# 🌱 Sau Yul-Tech | Tecnología · Innovación · Conexión

Plataforma integrada de monitoreo biométrico pecuario vía IoT (ESP-NOW / LoRa / WiFi), cartografía satelital HD, delimitación de geocercas en hectáreas y Eco-Mercado digital de biomasa agrícola con PWA multi-dispositivo y sincronización en tiempo real con **Firebase Realtime Database**.

---

## 🚀 Características Implementadas y Corregidas

- **🔥 Sincronización en Tiempo Real con Firebase RTDB**:
  - Conexión oficial configurada con `https://datosbase111-default-rtdb.firebaseio.com`.
  - Nodos sincronizados: `/Dispositivos_Collares`, `/Fincas`, `/Alertas`, `/Mercado_Biomasa`, `/Estado_General`.
  - Lectura y escritura automática desde los collares y gateways ESP32 hacia la nube.
- **🛰️ Cartografía Satelital HD & Google Maps**:
  - Capa predeterminada **Satelital HD (Esri World Imagery)** 100% libre de marcas de agua, con máxima definición de potreros y caminos.
  - Conmutador para alternar con **Google Maps Oficial**.
  - Marcadores interactivos para cada una de las vacas del hato con código de colores según estado de salud y perímetro.
  - Cálculo automático del área de la finca en hectáreas (ej. `Radio: 2.0 km (~1,257 ha)`).
- **🏡 Filtro de Ganado por Finca**:
  - Selector desplegable para filtrar los animales por finca específica o ver el hato consolidado de todas las propiedades.
- **🔒 Seguridad de Credenciales**:
  - Formularios de autenticación con campos limpios (`autocomplete="off"`), sin credenciales visibles en el código HTML y con limpieza automática tras cada inicio de sesión.
- **🚨 Detección y Notificación de Fugas**:
  - Alerta inmediata si un animal cruza el perímetro con botón de **WhatsApp** para notificar al ganadero con coordenadas GPS exactas.
- **🌾 Eco-Mercado de Biomasa y Residuos**:
  - Compra y venta de subproductos agrícolas clasificados con contacto directo vía WhatsApp.

---

## 💻 Firmware ESP32 Corregido y Optimizado

Los códigos se encuentran disponibles y listos para compilar en la carpeta `firmware/`:

1. **Collar Inteligente Emisor (MAX30205 + MAX30105 + ESP-NOW)**:
   - Archivo: [`firmware/esp32_collar_emisor_sensor/esp32_collar_emisor_sensor.ino`](file:///C:/Users/TECNOMAX/.gemini/antigravity/scratch/bovineintel-souyultech/firmware/esp32_collar_emisor_sensor/esp32_collar_emisor_sensor.ino)
   - *Sensores:* MAX30205 (temperatura corporal bovina) y MAX30105 (ritmo cardíaco / oxigenación).
   - *Transmisión:* Paquetes binarios optimizados vía ESP-NOW al Gateway central.
   - *Correcciones:* Eliminación de desbordamientos de memoria, corrección de condición en `setup()` y supresión de trampas de reinicio.

2. **Gateway Receptor & Sincronización Firebase RTDB (ESP-NOW + WiFi + HTTP)**:
   - Archivo: [`firmware/esp32_gateway_receptor_firebase/esp32_gateway_receptor_firebase.ino`](file:///C:/Users/TECNOMAX/.gemini/antigravity/scratch/bovineintel-souyultech/firmware/esp32_gateway_receptor_firebase/esp32_gateway_receptor_firebase.ino)
   - *Conectividad:* Recibe tramas ESP-NOW y actualiza el nodo `/Dispositivos_Collares/Collar_X.json` en Firebase.
   - *Correcciones:* Puntero estático seguro (evita *Null Pointer Panic*), orden correcto de parámetros en `WiFi.begin(ssid, password)` y reconexión automática en caso de pérdida de señal.

---

## 🔑 Parámetros de Firebase Realtime Database

- **Base de Datos URL:** `https://datosbase111-default-rtdb.firebaseio.com`
- **Clave Secreta de Autenticación (Auth Token):** Configurar en variable de entorno `FIREBASE_AUTH` en archivo `.env` (No exponer en repositorios ni cliente).

---

## 📦 Ejecución

### Opción 1: Ejecutar con doble clic
Haz doble clic sobre el archivo:
👉 `iniciar_servidor.bat`

### Opción 2: Desde terminal
```bash
cd backend
node server.js
```
*Disponible en:* `http://localhost:3000`

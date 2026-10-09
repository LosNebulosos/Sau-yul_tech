#!/usr/bin/env bash
# ==============================================================================
# Script de Despliegue Automatizado en Azure Virtual Machine (Ubuntu / Debian)
# Servidor Web: Nginx
# Proyecto: BovineIntel & Eco-Mercado Sou Yul-Tech
# ==============================================================================

set -e

echo "🚀 [1/5] Actualizando sistema e instalando Nginx y Git..."
sudo apt update -y
sudo apt install -y nginx git ufw

echo "📁 [2/5] Configurando directorio raíz de la aplicación web..."
WEB_ROOT="/var/www/ecomercado"
sudo mkdir -p "$WEB_ROOT"

# Si el script se ejecuta dentro de la carpeta del proyecto clonado:
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
sudo cp -r "$SCRIPT_DIR/index.html" "$WEB_ROOT/"
sudo cp -r "$SCRIPT_DIR/styles.css" "$WEB_ROOT/"
sudo cp -r "$SCRIPT_DIR/script.js" "$WEB_ROOT/"
sudo cp -r "$SCRIPT_DIR/manifest.json" "$WEB_ROOT/"
sudo cp -r "$SCRIPT_DIR/sw.js" "$WEB_ROOT/"
sudo cp -r "$SCRIPT_DIR/logo.png" "$WEB_ROOT/"
if [ -d "$SCRIPT_DIR/img" ]; then sudo cp -r "$SCRIPT_DIR/img" "$WEB_ROOT/"; fi
if [ -d "$SCRIPT_DIR/icons" ]; then sudo cp -r "$SCRIPT_DIR/icons" "$WEB_ROOT/"; fi
if [ -d "$SCRIPT_DIR/Cartas Sau Youl-Tech" ]; then sudo cp -r "$SCRIPT_DIR/Cartas Sau Youl-Tech" "$WEB_ROOT/"; fi

echo "🔒 [3/5] Asignando permisos a www-data..."
sudo chown -R www-data:www-data "$WEB_ROOT"
sudo chmod -R 755 "$WEB_ROOT"

echo "⚙️ [4/5] Configurando Nginx para Single Page Application (SPA)..."
NGINX_CONF_PATH="/etc/nginx/sites-available/ecomercado"

sudo bash -c "cat > $NGINX_CONF_PATH" <<'EOF'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;

    root /var/www/ecomercado;
    index index.html;

    # Compresión Gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/javascript application/javascript application/json application/xml image/svg+xml;

    # Encabezados de Seguridad
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Enrutamiento SPA
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Desactivar caché para el Service Worker e index.html
    location ~* (sw\.js|manifest\.json|index\.html)$ {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires "0";
    }

    # Caché estática
    location ~* \.(?:css|js|jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc|woff2|woff|ttf)$ {
        expires 1y;
        access_log off;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    error_page 404 /index.html;
}
EOF

# Habilitar sitio y deshabilitar default
sudo ln -sf "$NGINX_CONF_PATH" /etc/nginx/sites-enabled/ecomercado
if [ -f /etc/nginx/sites-enabled/default ]; then
    sudo rm -f /etc/nginx/sites-enabled/default
fi

echo "🛡️ [5/5] Probando configuración y reiniciando Nginx..."
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx

# Permitir tráfico HTTP/HTTPS en el Firewall UFW si está activo
sudo ufw allow 'Nginx Full' || true

echo "✅ [Listo] Eco-Mercado desplegado y activo en Azure con Nginx."
echo "👉 Accede a través de la IP Pública o DNS de tu Máquina Virtual en el puerto 80."

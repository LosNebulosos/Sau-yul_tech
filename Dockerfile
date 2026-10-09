# ==============================================================================
# Dockerfile para Despliegue de Eco-Mercado en Azure con Nginx
# ==============================================================================
FROM nginx:alpine

LABEL maintainer="Comercializadora Sau Youl-Tech S.A."
LABEL description="BovineIntel & Eco-Mercado SPA servido por Nginx en Azure"

# Eliminar la configuración por defecto de Nginx
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copiar la configuración personalizada de Nginx para SPA y Azure
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Establecer directorio raíz de la web
WORKDIR /usr/share/nginx/html

# Copiar archivos fuente principales de la aplicación
COPY index.html ./
COPY styles.css ./
COPY script.js ./
COPY manifest.json ./
COPY sw.js ./
COPY logo.png ./
COPY _redirects ./

# Copiar carpetas de recursos gráficos y documentos oficiales
COPY img/ ./img/
COPY icons/ ./icons/
COPY "Cartas Sau Youl-Tech/" "./Cartas Sau Youl-Tech/"

# Puerto HTTP estándar (Azure App Service / Containers escucha en el 80)
EXPOSE 80

# Iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]

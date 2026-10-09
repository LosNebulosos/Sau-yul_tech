@echo off
title Sau Yul-Tech - Servidor Central
color 0A
echo =======================================================
echo     SAU YUL-TECH - TECNOLOGIA * INNOVACION * CONEXION
echo     Iniciando Servidor Backend y Plataforma Web...
echo =======================================================
echo.

cd /d "%~dp0\backend"

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js no esta instalado en este equipo.
    echo Por favor descarga e instala Node.js desde: https://nodejs.org
    echo.
    echo Mientras tanto, puedes usar la plataforma abriendo directamente:
    echo frontend\public\index.html en tu navegador (Modo Local).
    echo.
    pause
    exit /b
)

echo [OK] Node.js detectado correctamente.
echo [INFO] Iniciando servidor en http://localhost:3000 ...
echo [INFO] Presiona Ctrl + C para detener el servidor.
echo.

start http://localhost:3000
node server.js

pause

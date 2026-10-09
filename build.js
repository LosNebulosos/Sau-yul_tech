/**
 * Sau Yul-Tech - Universal Netlify / Vercel / GitHub Actions Build Script
 * Garantiza que todos los directorios de despliegue posibles (dist, public, frontend/public)
 * existan y contengan todos los activos listos para servir en Netlify.
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 [Build] Iniciando preparación y empaquetado para Netlify...');

const rootDir = __dirname;
const targetDirs = [
  path.join(rootDir, 'dist'),
  path.join(rootDir, 'public'),
  path.join(rootDir, 'frontend', 'public')
];

// Archivos estáticos esenciales
const essentialFiles = [
  'index.html',
  'styles.css',
  'script.js',
  'manifest.json',
  'sw.js',
    '_redirects',
  '_headers'
];

// Directorios de recursos
const resourceDirs = ['img', 'Cartas Sau Youl-Tech'];

// 1. Asegurar directorios destino
targetDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 [Build] Creado directorio: ${dir}`);
  }
});

// 2. Asegurar netlify/functions y función API
const netlifyFuncDir = path.join(rootDir, 'netlify', 'functions');
if (!fs.existsSync(netlifyFuncDir)) {
  fs.mkdirSync(netlifyFuncDir, { recursive: true });
  console.log(`📁 [Build] Creado directorio de funciones: ${netlifyFuncDir}`);
}

// 3. Encontrar la fuente principal de los archivos
const candidateSources = [
  rootDir,
  path.join(rootDir, 'public'),
  path.join(rootDir, 'dist'),
  path.join(rootDir, 'frontend', 'public')
];

let sourceDir = rootDir;
for (const cand of candidateSources) {
  if (fs.existsSync(path.join(cand, 'index.html')) && fs.existsSync(path.join(cand, 'script.js'))) {
    sourceDir = cand;
    break;
  }
}

console.log(`🔍 [Build] Directorio fuente principal de activos: ${sourceDir}`);

// 4. Copiar archivos y carpetas a todos los destinos
targetDirs.forEach(destDir => {
  essentialFiles.forEach(file => {
    let srcFile = null;
    for (const cand of [sourceDir, ...candidateSources]) {
      const p = path.join(cand, file);
      if (fs.existsSync(p)) {
        srcFile = p;
        break;
      }
    }

    if (srcFile) {
      const destFile = path.join(destDir, file);
      try {
        fs.copyFileSync(srcFile, destFile);
      } catch (err) {
        console.warn(`⚠️ [Build] No se pudo copiar ${file}:`, err.message);
      }
    }
  });

  resourceDirs.forEach(subDir => {
    let srcSubDir = null;
    for (const cand of [sourceDir, ...candidateSources]) {
      const p = path.join(cand, subDir);
      if (fs.existsSync(p)) {
        srcSubDir = p;
        break;
      }
    }

    if (srcSubDir) {
      const destSubDir = path.join(destDir, subDir);
      copyRecursiveSync(srcSubDir, destSubDir);
    }
  });
});

function copyRecursiveSync(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursiveSync(srcPath, destPath);
    } else {
      try {
        fs.copyFileSync(srcPath, destPath);
      } catch (err) {
        console.warn(`⚠️ [Build] Error al copiar ${srcPath}:`, err.message);
      }
    }
  }
}

console.log('✅ [Build] Todos los directorios de publicación (dist, public, frontend/public) están listos y sincronizados para Netlify.');

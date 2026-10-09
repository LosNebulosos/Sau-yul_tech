/**
 * Sau Yul-Tech - Service Worker (PWA Offline & Asset Caching)
 * Versión 4: Caché optimizado y resolución directa de imágenes Google Drive
 */

const CACHE_NAME = 'sauyultech-pwa-v2026-v35-squarish-cards';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  '/logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS).catch(err => {
        console.warn('[PWA] Precarga parcial completada:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[PWA] Eliminando caché antigua:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const reqUrl = event.request.url;
  const url = new URL(reqUrl);

  // 1. Ignorar llamadas de API backend
  if (url.pathname.startsWith('/api/')) {
    return;
  }

  // 2. Interceptar Google Drive uc?export=view y servir vía Google CDN lh3
  if (reqUrl.includes('drive.google.com/uc') && reqUrl.includes('id=')) {
    const match = reqUrl.match(/[?&]id=([a-zA-Z0-9_\-]+)/);
    if (match) {
      event.respondWith(
        fetch('https://lh3.googleusercontent.com/d/' + match[1], { mode: 'cors' })
          .catch(() => fetch(event.request))
      );
      return;
    }
  }

  // 3. Activos estáticos locales: Network First para garantizar frescura
  if (url.origin === location.origin) {
    event.respondWith(
      fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return networkResponse;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  // 4. CDNs externos: Cache First con fallback a red
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(networkResponse => {
        if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return networkResponse;
      });
    })
  );
});

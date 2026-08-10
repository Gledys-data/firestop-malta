// Firestop Selector · Malta — Service Worker minimo
// Su unico proposito es cumplir el requisito de Chrome de tener un
// service worker con un manejador de "fetch" para permitir instalar
// la app como PWA. No hace cache agresivo para evitar mostrar
// contenido desactualizado a los usuarios.

const CACHE_NAME = 'firestop-selector-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Manejador de fetch obligatorio para que Chrome considere la app instalable.
// Estrategia "network-first": intenta la red primero, y si falla (sin
// conexion), devuelve la copia en cache si existe.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

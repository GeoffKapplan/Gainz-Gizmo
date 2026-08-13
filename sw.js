// Minimal service worker -- just enough to make the app installable as a PWA.
// It doesn't cache anything special; the app already saves its data via
// localStorage, so there's no offline data to manage here.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass every request straight through to the network.
  event.respondWith(fetch(event.request));
});

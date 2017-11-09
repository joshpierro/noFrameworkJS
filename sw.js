var cacheName = 'inner-sanctum';
var dataCacheName = 'inner-sanctum-v1';
var filesToCache = [
    '/',
    '/index.html',
    '/favicon.ico',
    '/scripts/app.js',
    '/styles/styles.css',
    '/libs/material-light/material.js',
    '/libs/material-light/material.css',
    '/images/ic_add_white_24px.svg',
    '/images/ic_refresh_white_24px.svg'
];

self.addEventListener('install', function(e) {
  //  console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
          //  console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

//ensures that service worker updates cache whenever any of the app shell files change
self.addEventListener('activate', function(e) {
   // console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName) {
                    //console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

//request interceptor
/*
self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});*/

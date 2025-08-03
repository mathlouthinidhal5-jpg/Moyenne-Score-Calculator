const CACHE_NAME = 'bac-pwa-cache-v1';
const FILES_TO_CACHE = [
  'index.html',
  'IndexWebStyle.css',
  'ScriptMoyTech.js',
  'offline.html',
  'MoytechWeb.html',
  'ScoretechWeb.html',
  'MoyEcoWeb.html',
  'ScoreEcoWeb.html',
  'MoyLettreWeb.html',
  'ScoreLettreWeb.html',
  'MoyMathWeb.html',
  'ScoreMathWeb.html',
  'MoyScienceWeb.html',
  'ScoreScienceWeb.html',
  'MoyInfoWeb.html',
  'ScoreInfoWeb.html',
  'MoySportWeb.html',
  'ScoreSportWeb.html',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

// عند التثبيت: تخزين الملفات
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// عند التفعيل: تنظيف الكاش القديم
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// عند الطلب: جلب من الكاش أو من الإنترنت
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request).then((response) => {
        return response || caches.match('offline.html');
      });
    })
  );
});
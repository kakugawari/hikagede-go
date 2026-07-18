/* ひかげでゴー! Service Worker
   オフラインでも遊べるように、必要なファイルをキャッシュします。
   ゲームを更新したら CACHE の数字(v1→v2…)を上げてください。 */
const CACHE = 'hikage-de-go-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './favicon-32.png',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

// インストール時に一式をキャッシュ
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// 古いキャッシュを掃除
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// キャッシュ優先、なければネットから取得
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).catch(() => caches.match('./index.html')))
  );
});

var CACHE_NAME="2022-06-28 00:45",urlsToCache=["/kanji-siritori/","/kanji-siritori/2/","/kanji-siritori/index.js","/kanji-siritori/2.json","/kanji-siritori/3.json","/kanji-siritori/favicon/favicon.svg","https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"];self.addEventListener("install",function(a){a.waitUntil(caches.open(CACHE_NAME).then(function(a){return a.addAll(urlsToCache)}))}),self.addEventListener("fetch",function(a){a.respondWith(caches.match(a.request).then(function(b){return b||fetch(a.request)}))}),self.addEventListener("activate",function(a){var b=[CACHE_NAME];a.waitUntil(caches.keys().then(function(a){return Promise.all(a.map(function(a){if(b.indexOf(a)===-1)return caches.delete(a)}))}))})
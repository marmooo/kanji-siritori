const CACHE_NAME="2025-04-06 01:35",urlsToCache=["/kanji-siritori/","/kanji-siritori/index.js","/kanji-siritori/2.json","/kanji-siritori/3.json","/kanji-siritori/favicon/favicon.svg"];self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(e=>e.addAll(urlsToCache)))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.filter(e=>e!==CACHE_NAME).map(e=>caches.delete(e)))))})
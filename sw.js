// ===============================
// 🚀 CTET ULTRA SMART SERVICE WORKER
// AUTO CACHE + AUTO UPDATE
// ===============================

// Change version on update
const VERSION = "ctet-ultra-v1";

const STATIC_CACHE = "static-" + VERSION;
const DYNAMIC_CACHE = "dynamic-" + VERSION;


// ===============================
// INSTALL
// ===============================

self.addEventListener("install", event => {

console.log("🚀 Installing SW:", VERSION);

event.waitUntil(

caches.open(STATIC_CACHE)
.then(cache => {

return cache.addAll([
"./",
"./index.html",
"./offline.html",
"./manifest.json"
]);

})

);

self.skipWaiting();

});


// ===============================
// ACTIVATE
// ===============================

self.addEventListener("activate", event => {

console.log("⚡ Activating SW");

event.waitUntil(

caches.keys().then(keys => {

return Promise.all(

keys.map(key => {

if(
key !== STATIC_CACHE &&
key !== DYNAMIC_CACHE
){

console.log("🗑 Removing old cache:", key);
return caches.delete(key);

}

})

);

})

);

self.clients.claim();

});


// ===============================
// FETCH STRATEGY
// ===============================

self.addEventListener("fetch", event => {

const req = event.request;
const url = new URL(req.url);


// ❌ Skip Firebase / external APIs
if(

url.hostname.includes("firebase") ||
url.hostname.includes("googleapis") ||
url.hostname.includes("gstatic")

){

event.respondWith(fetch(req));
return;

}


// ===========================
// HTML → Network First
// ===========================

if(req.mode === "navigate"){

event.respondWith(

fetch(req)

.then(res => {

const copy = res.clone();

caches.open(DYNAMIC_CACHE)
.then(cache => cache.put(req, copy));

return res;

})

.catch(() => {

return caches.match(req)
.then(res => res || caches.match("./offline.html"));

})

);

return;

}


// ===========================
// STATIC → Cache First
// ===========================

event.respondWith(

caches.match(req)

.then(cached => {

if(cached) return cached;

return fetch(req)

.then(res => {

const copy = res.clone();

caches.open(DYNAMIC_CACHE)
.then(cache => cache.put(req, copy));

return res;

})

.catch(() => {

if(req.destination === "document"){
return caches.match("./offline.html");
}

});

})

);

});


// ===============================
// FORCE UPDATE SUPPORT
// ===============================

self.addEventListener("message", event => {

if(event.data === "skipWaiting"){
self.skipWaiting();
}

});


console.log("🔥 CTET ULTRA SW RUNNING:", VERSION);
'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "197074e67b9b4804fec4ba2fb59c2404",
"assets/AssetManifest.bin.json": "762f92b88c704c97f42565a1712a2816",
"assets/AssetManifest.json": "1e71fdf75a0931098b0b52ad4f2dab0b",
"assets/assets/fonts/Cinzel-Bold.ttf": "227ba336c7ec6f74bb6a18b79a160698",
"assets/assets/fonts/Cinzel-ExtraBold.ttf": "a0e1f1a63d4e3589fdb9e5fddd74b712",
"assets/assets/fonts/Cinzel-Regular.ttf": "36e3287473aad3878156ae4983ffb79a",
"assets/assets/fonts/Comfortaa-Bold.ttf": "281df342e6f73c20ebc6526f130e00b3",
"assets/assets/fonts/Comfortaa-Regular.ttf": "53f695dbfc6f703f86ed88bddde527b6",
"assets/assets/fonts/Montserrat-Bold.ttf": "c4bd22ebfc4d76f100ebefd2cf916227",
"assets/assets/fonts/Montserrat-Regular.ttf": "430be0dd245faf1cc788fac6680c2d71",
"assets/assets/fonts/PlayfairDisplay-Regular.ttf": "bc2b9f6ee5dd33f4d9865a90cc5adaf1",
"assets/assets/fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/icons/logo_qes.png": "ddd9513bc6706248b5e596888613857c",
"assets/assets/images/app_logo.png": "6682eac0a1d5d56fb3fd39b7608b2829",
"assets/assets/images/arrow.gif": "9672242e640153bf103a6036426caff5",
"assets/assets/images/azolik_sert.png": "6f9799f0cf1218bf347c15a42285c844",
"assets/assets/images/error.gif": "9b6676bde88262d50a7b2b2620bf8768",
"assets/assets/images/formula_1.png": "9c0e5e634089239a8e69b9d3d2e3ee4e",
"assets/assets/images/formula_2.png": "c1eb9d287acb78468639b5f6bcb529f4",
"assets/assets/images/formula_3.png": "b2b8c647738891ad78057f157e2b5130",
"assets/assets/images/formula_4.png": "dd80fe89caef49c1f73c7ac8c3323541",
"assets/assets/images/formula_5.png": "1a16899d4a5b2e7b5d36653ff8a481b1",
"assets/assets/images/formula_6.png": "9a5fdbe57160b686798804e9fd534195",
"assets/assets/images/formula_7.png": "b235636c48f8b439222956f4ff4ba9b3",
"assets/assets/images/guvohnoma.png": "f00d56a16fd609ffad76e876606c148d",
"assets/assets/images/litsenzia.png": "438dd91a4cc6f1b0f1aeb3f972facb18",
"assets/assets/images/login_walpaper.png": "a1dc6125d0e24e881c1983a75af8afed",
"assets/assets/images/norma_chas.png": "9c04df54f200d6b4532c3d77d42b7c45",
"assets/assets/images/norma_chas_2.png": "602ccae89934ad79d4306f26018c7543",
"assets/assets/images/PNFL.png": "4541add495390daa455a624cf4915acb",
"assets/assets/images/sertifikat.png": "ad4be2e4f944cd92ef79aef6e6b0c306",
"assets/assets/images/sugurta.png": "9fdb49f39a635d4a00433d902aa47f30",
"assets/assets/images/telegram.png": "76c88ae4d44e66322fdaddff3e0b5d84",
"assets/assets/images/user_avatar.png": "34e6d27d8b24d2372454bfe83395e4b3",
"assets/assets/images/user_avatar_girl.png": "bcce1a77656375c96fb08ac441553fe1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b00e38f8f263844265c4efcf3f0760ec",
"assets/NOTICES": "79d24e0d3e70f2f72837ab0b4c0d6603",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "98d0e23217fd0b3b9ef19609f284085c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "84c4f5218404d983b3b8e58a2b2fb234",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6db023cf12c45322fe6c60085d6af6ad",
"/": "6db023cf12c45322fe6c60085d6af6ad",
"main.dart.js": "f215598b617b627f56cda670aa047d85",
"manifest.json": "65171e0d00034e8cabb4260af8cdd838",
"version.json": "7ed165580df57b0b218a52b4a295c3ea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

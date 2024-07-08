'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "59521d5057fce0dac2927b91bdb0fcd8",
"version.json": "ada5e3f8340b19c28e54805cf5f83d2d",
"index.html": "a453991945a9867fa2c8afae51bd93d8",
"/": "a453991945a9867fa2c8afae51bd93d8",
"main.dart.js": "4b6329d0199343e2bfdd2b9ced698fad",
"sqlite3.wasm": "f08450f1d5a088a01cec0eb541c3aeca",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"sqflite_sw.js": "f4f3b782ae888099d16cee0da293c85e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "76c88d10e02ddb303a70f6f7b50430a5",
".git/config": "81660e143063ec3e319038a79b76f8fe",
".git/objects/92/50453c4c5a7f3d24d98b94ac3e4fdea795da72": "91e72027320b5586728ed595b2e8ad15",
".git/objects/50/12da38bc7bdd9aa376e3f3cec2d00c430a2924": "5bf1b5b3fc8627ad3406ef3bd94d7630",
".git/objects/6f/8344ee1248b67172f69a1db2d2cc070d84dd03": "1ff99374ea0e37345b02a00c2cf14baf",
".git/objects/32/eb7e20e49ef69e4a68ea60ede80100c9559e53": "d3023c8ef1ea68a7f113dfc0fc9d965a",
".git/objects/56/f96bf41de6c951f3dec5e8fc0ea3d461b8193a": "a03a3db4ec8a1587a7f052528a99f3ae",
".git/objects/51/9f0c6c3fb35f1e61f316db5e0cadd105165c02": "0e2a8f1a95593c2b7cbb6a0a618cd2fd",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/34/63fa57ee34bd6ba6c2d07320c381539a53d840": "52506d7093ba60965eab8d30e4e222ea",
".git/objects/5f/5c9aa9bc3be2f16c6a7f3dc672410e6f436399": "9cd3a92a9c90a79df1d57c120db58ac4",
".git/objects/02/599228aece964a94ef42b44dbaa050813c372c": "bd846bc1c2179c92876e25b17f8413d3",
".git/objects/b5/884ebdcbad16acc3ae5c4eb1dbb07bf0024288": "6e5fd9b3a5c30f95907f5aae61879963",
".git/objects/ad/1f2b67ef05366080601db106fd9f36104304c9": "c3430e5b7a365c01345b0e5a68473c2d",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/0457b266f8ee720aca5f0462553d77d86ddbac": "ac6203edd57a476df4ea29c6455c2125",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/537242e608d6a75826dca8ad13a75228793ff1": "9366c395e0ca9075adf2f89bd9914131",
".git/objects/e2/58ae33cecab7d6c82c942de89bba2c214daea0": "27a590772092b754923044ae6d097020",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/2260b901947c671983a4e1c5c0aa806021f13f": "79f1d8838fc8fceae5d192c5cd101109",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f6710c5167ba78e58688fa874c90febb11662f": "ea94327eba6360a7f255a802b871a532",
".git/objects/f2/e84d50e2cc973b32bd3c6e5afb581771088872": "5131ee5829209fec2495a64de96a62ef",
".git/objects/fb/3356f4a6fd20ed4b77563ca7de88a035525e40": "11ccc2ccfdc0183965b6c7cd0b427be6",
".git/objects/ec/bb5e11787d4fedd15f9b318b409866bdf23a9a": "7a43a5d33725c9150faf46d0755936c2",
".git/objects/4e/a22673d1c5780e216fd14a6b3ccaff5c3c253d": "cfaabb2cda45ab51b9933dadcd84491d",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/92a6c1712ee46aad65df49643178e8be821711": "43f65912a7be930238609cd82e18b4cb",
".git/objects/7c/4936f528c8155cbe17b87b3c12c916ecd44750": "35561a86521214e68132bb7bceb2f6ab",
".git/objects/16/bb9d09cda8395068712509c21c32b8e9a8a6ee": "b14e6382d07bbcaf4ff76a00f18bc3a6",
".git/objects/42/01535c0b7e5c177630c528f388ee2cda05d8d4": "fa1d301aaaf81335bb887117ef697a99",
".git/objects/42/266bcca40cccb6401f3c0385eda3124c209e08": "12de6b3f18f3206fcfc3a709eb53917e",
".git/objects/42/e2a8b6c7c2402286bdc937b456cdef172b655b": "0188aeb4bf5e9bee6d69e90c893d4f5d",
".git/objects/89/0efe9f4b1857b83e9466307a2f9195cd5e8123": "309776b6fdcb0590d859445b92ad8586",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/b7d3e15cd651fc59d9fe0c0100cab474ae0da0": "4e9b48162cec8ddfc2ab1f65b717aa59",
".git/objects/87/0f24896f7927e86ca7990ad445aadc55fb9cf0": "bd6f8da569b29d5b967ea9bfdd9b09d5",
".git/objects/74/86e94ea0b576dd663469c7c18e03e6b9914926": "4ed3ea966df720c3dcd56d3b85a938f7",
".git/objects/8f/dd06c84407a05fbba2aa2b3fb8dba8e27a874c": "d3e1fe5ee6463f9e57df1edc5248b869",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/7254c2ecd3d913b6623566ef391ab48cefa05e": "36b01c43e0fcca9712f6660f83f6b175",
".git/objects/21/aae049e10361353d84c9c300c3591e6d2edb7d": "1c6ebb96fd91e8b5cfb190c8d745a65c",
".git/objects/21/bdf4c75d3fe6a99aaaca10b97a49bd116bd3f9": "bd257bd9d69b45d8220e108026803c7f",
".git/objects/4d/53b931d6ad08936c001dc343e8982cdf875357": "36dc837009bcedf439b53b470bcd0387",
".git/objects/4d/af89eae81e0aaa30d2b3cd0904bbfce2ac2e80": "aec12071f69572066adc773eb2e4b992",
".git/objects/2a/d553fe872d826f5a46d14871ccf5c08cae10ab": "00a04a5c172fee792841e3919303335d",
".git/objects/43/551f36219061bc3b478fd4a0c1beaeb4718489": "b109aa6d6c8cb120b17af68cb93b3d37",
".git/objects/88/cf4cc63739719ed403618b3a9ef75f2ee9eb3f": "573efd6e47eec5d40d2d997826437a21",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/378deb0b12884ad9d4e94c159d578a0620adf1": "215d805c2acdd176532f3fa47397ba2b",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/91/482360cab0502b2bcf8a56d23bdc3b1ff15c53": "e67ed61d0bba3ebce0caf2eb0d856ebe",
".git/objects/62/e0541a7fd18d83f8620b904143e3f8cc2a3d87": "12aa764714c7e8c4db3eb998a1d1c73d",
".git/objects/64/84da14a2c6da7f60a680ec7886b93ff3a18eed": "5245d1e100a0aca74380f2faedfdfd30",
".git/objects/bf/d725dce593502beb28f2648cd4a96172a95890": "687e1162c8df483b4b6fbc3c247e0832",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b6/a43a70870b7afaa577ba203a0c4dc8c1cf170c": "4c356f2bc5d94d0dcc87d16b01dd928f",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d2/334cbf428322d3aa16ba11bed2d498e9160edd": "3eb8755e93f9b890bcc5aecf4ed06e20",
".git/objects/d2/7b232831b75843ffc162cd482d7a8690030e91": "c895e256427177c5d60bc2835d20c3b7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/824529b5796a65f0923d04f477ebbcb46ddf7d": "68c4c4f90ded272414d54f1cecea81a8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/b2d0ed50e50bbd3391879a8ccf55e30226540c": "0b3038a91506d66738ca2962a1b285d5",
".git/objects/ea/32e497b9f054dc778041db19d72db25430f99f": "a912a757a6ca357cdd2971c731624449",
".git/objects/e6/2cc0bbc052429dfca92c514c9265cefb7d5cb1": "bccbda849ca4c8250ee7747030a519cb",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/fa/8b57f0a3b0c729b803d9fa39eff2a181e71cd1": "239d206a663bfacfda706629fc7fc696",
".git/objects/e0/2363f81ef78ff3f2f310c9ae0cbb1fc8c35bf1": "21c6e1ccc014ef1f9b554e448872b085",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/f1a5c2a66344dbad9e51a83341949f9dd309eb": "4fe5417952f71641c2a416ea4076b808",
".git/objects/83/b534d7afde5b592b04ef08703fa5699d947649": "2415ad7b5bbd52bea7e38604ebf76172",
".git/objects/70/eee625dedaf76971133d1cd878835cc83686ec": "75391f6519cd59c196292ff175c132ee",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/fcb7d9660b874182433b4a5c4c4856d72872fa": "c265b4e23dad0f571b184dfb2bf17fac",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/fc85ef2f59b5c27aaedefb7bc7bd3a89205293": "5c65f6e431a5f420622652389a8034d3",
".git/objects/40/f37b6742038c45d1fb63a5126c7ead4fd9d90d": "5d4764edd3a3f0e21b284669990e905e",
".git/objects/2b/875ba373811e904dbcb99e2c6d18120c90bc68": "5de90089588af21521c6e99d61019e9d",
".git/objects/78/29c736b9f37733565b0517bf6b22213580fd10": "3e534b4ff08f90a8936d7ef31bcfc0c2",
".git/objects/7f/0c872ad4c8553f7c732a1dd3189d76f95e1be5": "1bd63a7ad58f966240b49816afe032a6",
".git/objects/14/3cf7c420c185ac7f06751a18a4b669d07787ed": "7d9d35c05d48a304c6e2fac89ebc2015",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "418f84d68984c2b2ff9325f280bafd65",
".git/logs/refs/heads/main": "6c0008ced9cf446f2c93e48a4c92506d",
".git/logs/refs/remotes/origin/main": "83555dd6f1505633a60a9c92a0bad275",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1a9cae842a9da668506dd7eea262de25",
".git/refs/remotes/origin/main": "1a9cae842a9da668506dd7eea262de25",
".git/index": "7b7e619d12cbda50f3515fdf8fd1aaa6",
".git/COMMIT_EDITMSG": "093eb9b948ed06c5bae3b0973f990a47",
".git/FETCH_HEAD": "5389926080c2acf432ed7138b87bc47c",
"assets/AssetManifest.json": "aa7cf6167f28c3d064ee780bc2c66b27",
"assets/NOTICES": "3ec276d16d2e3de0a41eeb2207431fe3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "861ba267701c7ed785fa2185dd12a48e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "790fc2eda0bff3ee808f82f4b35e5909",
"assets/fonts/MaterialIcons-Regular.otf": "9136802ae02cae56d2ac9acb25adc305",
"assets/assets/images/pagibig_fund_logo.png": "939cfcf3801288c6997a5f8ddc614255",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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

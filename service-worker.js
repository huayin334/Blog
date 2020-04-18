/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fa143f46d23f39657e968597f2b26ef7"
  },
  {
    "url": "about/index.html",
    "revision": "4b3ff70416194901f718280d51f114e5"
  },
  {
    "url": "assets/css/0.styles.75cd68a9.css",
    "revision": "9c2f12356a0c1113b5b59fc99a0af8a5"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.8d6a8453.js",
    "revision": "3f213671eadaecd35a84d0d895a43128"
  },
  {
    "url": "assets/js/10.8b192d8c.js",
    "revision": "3a750d83b3a6748329ef2d24cd05e40b"
  },
  {
    "url": "assets/js/11.67d5f1f2.js",
    "revision": "94b856df68e2b7df1e3f905451fce035"
  },
  {
    "url": "assets/js/12.d6900c3e.js",
    "revision": "8ba4fa49c34a45e0c912eb6c4f19a722"
  },
  {
    "url": "assets/js/13.a91c4871.js",
    "revision": "26b0eb825ab73eb45ae77b5e68561271"
  },
  {
    "url": "assets/js/14.1c8496a3.js",
    "revision": "713cea8cd03024c9435bfe4abdbe2a43"
  },
  {
    "url": "assets/js/15.81adcd46.js",
    "revision": "0f511c7855ffdc3f6135fd1085bb2cb5"
  },
  {
    "url": "assets/js/16.7d505ae3.js",
    "revision": "ee765f3f2ba75553a18261b48346a86a"
  },
  {
    "url": "assets/js/3.7f413519.js",
    "revision": "795dd8f2e5dc9e245e3435b0b7f49e3c"
  },
  {
    "url": "assets/js/4.283f30bf.js",
    "revision": "a6b48a85ac4ceed49726df110bf5d9a4"
  },
  {
    "url": "assets/js/5.c78e7fad.js",
    "revision": "a0e49497dd2f614fc861fadd0c06e28a"
  },
  {
    "url": "assets/js/6.55350a82.js",
    "revision": "14bca9626ce387c373c4c990ad6adf69"
  },
  {
    "url": "assets/js/7.e1d87362.js",
    "revision": "1d0fe78fb5a688d66a12dcdc6ec48fe2"
  },
  {
    "url": "assets/js/8.acdc8614.js",
    "revision": "97724071cd67d0873ff6533c1702e2ac"
  },
  {
    "url": "assets/js/9.e07078cc.js",
    "revision": "38c3d739dd9492d4aeb3b432c132a71d"
  },
  {
    "url": "assets/js/app.b22e8cc9.js",
    "revision": "be76829b68f950087c3180ebac47f2c8"
  },
  {
    "url": "categories/index.html",
    "revision": "2184785c561c265df877b521a99497a1"
  },
  {
    "url": "categories/markdown/index.html",
    "revision": "b0a1bf691dc7befd9643681f9f8b28c4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "cf4de1f8d1fb37c6a4e52e9b7cbb22ff"
  },
  {
    "url": "head1.png",
    "revision": "7d4e3c020ee2e60093d40506c99dc09b"
  },
  {
    "url": "head2.png",
    "revision": "fee2a218b075e5e09f4bd9d9e8450e1a"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/LatteAndCat.svg",
    "revision": "8e2d868e240a4e9b1520fd83ad4b3ad3"
  },
  {
    "url": "index.html",
    "revision": "e63ce2185344692fadf9d71f2bc32391"
  },
  {
    "url": "pg1.png",
    "revision": "f22a3387c8632b8037a2fb8579ef0ac9"
  },
  {
    "url": "tag/index.html",
    "revision": "1da8f80e1f7c3698580b199f29bb7abb"
  },
  {
    "url": "tags/js/index.html",
    "revision": "bca6a70a3438bd294e0017db5f9e2115"
  },
  {
    "url": "tags/markdown/index.html",
    "revision": "956493bf3140cc456aeb9db82d17e74c"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "cc6ca136950b925877a2a41837d798ae"
  },
  {
    "url": "timeline/index.html",
    "revision": "24ec16b4e6ff07803df0a88032eaee82"
  },
  {
    "url": "views/markdown/markdown语法.html",
    "revision": "8d25f2b53206c10114ba0fbd727bc074"
  },
  {
    "url": "views/前端/2020/localStorage变动监听.html",
    "revision": "c73780d09b91d15c4f01f1063b201c4b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

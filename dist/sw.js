if(!self.define){let s,e={};const n=(n,o)=>(n=new URL(n+".js",o).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(o,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let l={};const c=s=>n(s,r),t={module:{uri:r},exports:l,require:c};e[r]=Promise.all(o.map((s=>t[s]||c(s)))).then((s=>(i(...s),l)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/bootmark.633eb89b.js",revision:null},{url:"assets/comments.9a0528ee.js",revision:null},{url:"assets/dots-vertical.174987ab.js",revision:null},{url:"assets/index.47006d28.js",revision:null},{url:"assets/index.4ebd837f.css",revision:null},{url:"assets/ModalChatComponent.2e1ab106.js",revision:null},{url:"assets/PostsComponent.10b91d5a.css",revision:null},{url:"assets/PostsComponent.a5c35ea1.js",revision:null},{url:"assets/PostsDiscoverScaleComponent.0df049a1.js",revision:null},{url:"assets/ProductDetailComponent.1b5b72a5.js",revision:null},{url:"assets/ProductScaleComponent.e7833c74.js",revision:null},{url:"assets/ProductsComponent.2e4dd622.css",revision:null},{url:"assets/ProductsComponent.743b5b30.js",revision:null},{url:"assets/ReelsComponent.aff19c24.css",revision:null},{url:"assets/ReelsComponent.c6c6dee7.js",revision:null},{url:"assets/SearchUserComponent.3e006064.js",revision:null},{url:"assets/send.cd6999bd.js",revision:null},{url:"css/input.css",revision:"74f2485b56c151243f7fa414873fe5fc"},{url:"index.html",revision:"8cc9f0d49d1f5bbbfba82744dd802653"},{url:"output.css",revision:"2e189fc4fc791f2792ecfd25d1c38dd1"},{url:"registerSW.js",revision:"18c2f360a5f3fc52ef926a0e0b4c6432"},{url:"icons/icon_48x48.png",revision:"ebd8dfcfadfef0f03de077c69697e1da"},{url:"icons/icon_72x72.png",revision:"3054f3462b9bb18326b298a0725c1843"},{url:"icons/icon_96x96.png",revision:"0c855ca954aa3b8cdc69c1d55643d93f"},{url:"icons/icon_144x144.png",revision:"1f29ff01a041f9754c3d2bd9836744a9"},{url:"icons/icon_192x192.png",revision:"e4f0fbacb65e57baf3cc76372fbcf99e"},{url:"manifest.webmanifest",revision:"0fbca2e08cfe94fc3bf7d76208e28375"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));

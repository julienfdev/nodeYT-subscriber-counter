(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({contact:"contact"}[t]||t)+"."+{contact:"f85ee158"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={contact:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({contact:"contact"}[t]||t)+"."+{contact:"214dd4f5"}[t]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],f.parentNode.removeChild(f),n(s)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/nodeYT-subscriber-counter/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var f=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"22d7":function(t,e,n){t.exports=n.p+"img/howto-2.d3725dab.jpg"},"2f9c":function(t,e,n){"use strict";var a=n("7df7"),r=n.n(a);r.a},"399a":function(t,e,n){"use strict";var a=n("446e"),r=n.n(a);r.a},"446e":function(t,e,n){},5249:function(t,e,n){t.exports=n.p+"img/howto-4.013137a0.jpg"},"53a1":function(t,e,n){t.exports=n.p+"img/pp.d394222a.svg"},"56cd":function(t,e,n){t.exports=n.p+"img/soft-0.41a24788.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container-fluid bg-primary",attrs:{id:"navbarContainer"}},[n("Navbar")],1),n("div",{staticClass:"bg-desaturate"},[n("router-view")],1)])},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"nav"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[n("router-link",{staticClass:"navbar-brand pt-2 pb-1 px-3",attrs:{to:"/"}},[t._v("NodeYT")]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home "),n("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/howto"}},[t._v("How-To")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact")])],1)])])],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],c={},l=c,u=(n("7407"),n("2877")),p=Object(u["a"])(l,s,i,!1,null,"0d096eda",null),f=p.exports,d={name:"App",components:{Navbar:f}},g=d,m=(n("5c0b"),Object(u["a"])(g,r,o,!1,null,null,null)),v=m.exports,b=n("a18c"),h=n("2f62");a["a"].use(h["a"]);var y=new h["a"].Store({state:{carousel:{home:["howto-3.jpg","bom.jpg","howto-6.jpg"]}},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:b["a"],store:y,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"65f3":function(t,e,n){t.exports=n.p+"img/howto-3.b06c6fcf.jpg"},"733f":function(t,e,n){},7407:function(t,e,n){"use strict";var a=n("733f"),r=n.n(a);r.a},"79f1":function(t,e,n){t.exports=n.p+"img/bom.5f0602e5.jpg"},"7df7":function(t,e,n){},"7f48":function(t,e,n){t.exports=n.p+"img/soft-1.3ea3b532.jpg"},"8ac2":function(t,e,n){t.exports=n.p+"img/howto-6.be0a37dc.jpg"},"8e06":function(t,e,n){t.exports=n.p+"img/howto-5.05f7cd65.jpg"},9621:function(t,e,n){t.exports=n.p+"img/soft-3.02766e15.jpg"},"9c0c":function(t,e,n){},a18c:function(t,e,n){"use strict";n("d3b7");var a=n("2b0e"),r=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid pt-1 pt-lg-2 px-1"},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"row d-flex mt-4 mb-0 mb-lg-4 justify-content-center justify-content-lg-between"},[n("Card",{attrs:{image:"card-0.jpg",routerLink:"https://www.arduino.cc/",internal:!1},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Arduino IDE")]},proxy:!0},{key:"text",fn:function(){return[t._v(" The whole software is written in C++ Arduino language. Arduino IDE is an awesome way to develop IoT and other electronics projects! ")]},proxy:!0},{key:"button",fn:function(){return[t._v("Discover Arduino!")]},proxy:!0}])}),n("Card",{attrs:{image:"cc-by.png",routerLink:"https://creativecommons.org/licenses/by/4.0/",internal:!1},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Open-Source Project")]},proxy:!0},{key:"text",fn:function(){return[t._v(" You're free to redistribute, modify and even sell NodeYT, as long as you're giving credit to this page and the original project ")]},proxy:!0},{key:"button",fn:function(){return[t._v("Read the License")]},proxy:!0}])}),n("Card",{attrs:{image:"howto-4.jpg",routerLink:"/howto",internal:!0},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Beginner friendly")]},proxy:!0},{key:"text",fn:function(){return[t._v(" The Readme file and the How-To page provide extensive instructions on how to prepare, configure and build the Node YT, what are you waiting for ? ")]},proxy:!0},{key:"button",fn:function(){return[t._v("Get to the instructions!")]},proxy:!0}])})],1),n("div",{staticClass:"row my-2"},[n("Carousel",{attrs:{keyCarousel:"home"}})],1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jumbotron row mb-2"},[a("div",{staticClass:"smoked p-1 p-lg-3 shadow"},[a("h1",{staticClass:"display-4"},[t._v("Node YT")]),a("p",{staticClass:"lead"},[t._v("The Open-Source YouTube subscribers counter")]),a("hr",{staticClass:"my-4"}),a("div",{staticClass:"d-flex flex-column"},[a("p",[t._v("Node YT is a compact, friendly and cheap subscribers counter. It is based on the ESP8266 NodeMCU development board and a 8x32 MAX7219 LED Matrix")]),a("p",[t._v("It is easy to build and doesn't require much skills, if you want a cheap and fancy YouTube subscribers counter, you've come to the right place!")]),a("p",[t._v(" If you're happy with what you've seen and wish to help me buy a coffee, please feel free to donate even the smallest amount you can afford using my "),a("a",{attrs:{href:"https://paypal.me/foxhoundulm",target:"_blank"}},[t._v("PayPal.me")]),t._v(" account : "),a("a",{attrs:{href:"https://paypal.me/foxhoundulm",target:"_blank"}},[a("img",{attrs:{src:n("53a1"),alt:"PayPal button"}})])]),a("div",[a("hr")]),a("a",{staticClass:"btn btn-primary btn-lg align-self-center",attrs:{href:"https://github.com/julienfdev/nodeYT-subscriber-counter",role:"button"}},[t._v("Clone the Repo!")])])])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-4 mb-lg-0 col-12 col-sm-8 col-md-6 col-lg-4 px-0 px-lg-3"},[n("div",{staticClass:"card d-flex flex-column"},[n("img",{staticClass:"card-img-top",attrs:{src:t.imagePath,alt:"Card image cap"}}),n("div",{staticClass:"card-body d-flex flex-column"},[n("h5",{staticClass:"card-title"},[t._t("title",[t._v("Card title")])],2),n("p",{staticClass:"card-text"},[t._t("text",[t._v("Card text")])],2),n("div",{staticClass:"d-flex mt-auto flex-column align-items-center"},[t.internal?n("router-link",{staticClass:"btn btn-primary",attrs:{to:t.routerLink}},[t._t("button",[t._v("Button")])],2):t._e(),t.internal?t._e():n("a",{staticClass:"btn btn-primary",attrs:{href:t.routerLink}},[t._t("button",[t._v("Button")])],2)],1)])])])},c=[],l={name:"Card",props:{image:{required:!0,type:String},internal:{type:Boolean,default:!1},routerLink:{type:String,required:!0}},computed:{imagePath:function(){return n("bb6e")("./".concat(this.image))}}},u=l,p=(n("2f9c"),n("2877")),f=Object(p["a"])(u,i,c,!1,null,"00e71588",null),d=f.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col p-0"},[n("div",{staticClass:"carousel slide",attrs:{"data-ride":"carousel",id:"carousel-1"}},[n("div",{staticClass:"carousel-inner rounded shadow-sm"},t._l(t.carousel[t.keyCarousel],(function(e,a){return n("div",{key:a,staticClass:"carousel-item",class:{active:0===a}},[n("img",{staticClass:"w-100 d-block",attrs:{src:t.getImgSrc(t.carousel[t.keyCarousel][a]),alt:"Slide Image"}})])})),0),t._m(0),n("ol",{staticClass:"carousel-indicators"},t._l(t.carousel[t.keyCarousel],(function(t,e){return n("li",{key:e,class:{active:0===e},attrs:{"data-target":"#carousel-1","data-slide-to":e}})})),0)])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{staticClass:"carousel-control-prev",attrs:{href:"#carousel-1","data-slide":"prev"}},[n("span",{staticClass:"carousel-control-prev-icon"}),n("span",{staticClass:"sr-only"},[t._v("Previous")])]),n("a",{staticClass:"carousel-control-next",attrs:{href:"#carousel-1","data-slide":"next"}},[n("span",{staticClass:"carousel-control-next-icon"}),n("span",{staticClass:"sr-only"},[t._v("Next")])])])}],v=n("5530"),b=n("2f62"),h={name:"Carousel",props:{keyCarousel:{type:String,required:!0}},computed:Object(v["a"])({},Object(b["b"])(["carousel"])),mounted:function(){},methods:{getImgSrc:function(t){return n("bb6e")("./".concat(t))}}},y=h,C=Object(p["a"])(y,g,m,!1,null,"36df087d",null),_=C.exports,w={name:"Home",components:{Card:d,Carousel:_}},x=w,j=(n("399a"),Object(p["a"])(x,o,s,!1,null,"5fd699cb",null)),k=j.exports;a["a"].use(r["a"]);var T=[{path:"/",name:"Home",component:k},{path:"/contact",name:"Contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}},{path:"/howto",name:"HowTo",component:function(){return n.e("contact").then(n.bind(null,"5515"))}}],O=new r["a"]({routes:T});O.afterEach((function(){window.scroll(0,0),window.$("#navbarNav").collapse("hide")}));e["a"]=O},b5f3:function(t,e,n){t.exports=n.p+"img/soft-2.c622b702.jpg"},bb6e:function(t,e,n){var a={"./bom.jpg":"79f1","./card-0.jpg":"f56f","./cc-by.png":"f0ab","./gif/buttonSpinner.gif":"d956","./gif/spinner.gif":"d85a","./howto-0.jpg":"d8ec","./howto-1.jpg":"cf12","./howto-2.jpg":"22d7","./howto-3.jpg":"65f3","./howto-4.jpg":"5249","./howto-5.jpg":"8e06","./howto-6.jpg":"8ac2","./jumbo-0.jpg":"fc7d","./soft-0.jpg":"56cd","./soft-1.jpg":"7f48","./soft-2.jpg":"b5f3","./soft-3.jpg":"9621"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="bb6e"},cf12:function(t,e,n){t.exports=n.p+"img/howto-1.9da7182d.jpg"},d85a:function(t,e,n){t.exports=n.p+"img/spinner.845b3c8d.gif"},d8ec:function(t,e,n){t.exports=n.p+"img/howto-0.f9461eb2.jpg"},d956:function(t,e,n){t.exports=n.p+"img/buttonSpinner.5fe0e55f.gif"},f0ab:function(t,e,n){t.exports=n.p+"img/cc-by.729ac44f.png"},f56f:function(t,e,n){t.exports=n.p+"img/card-0.86d80428.jpg"},fc7d:function(t,e,n){t.exports=n.p+"img/jumbo-0.101f57c4.jpg"}});
//# sourceMappingURL=app.e87bf815.js.map
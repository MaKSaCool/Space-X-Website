// @prepros-append vidbg.js
// @prepros-append rellax.min.js
// @prepros-append aos.js
// @prepros-append script.js

var vidbg=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";var n="#?[".concat("a-f\\d","]{3}[").concat("a-f\\d","]?"),o="#?[".concat("a-f\\d","]{6}([").concat("a-f\\d","]{2})?"),i=new RegExp("[^#".concat("a-f\\d","]"),"gi"),a=new RegExp("^".concat(n,"$|^").concat(o,"$"),"i");e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e||i.test(e)||!a.test(e))throw new TypeError("Expected a valid hex string");var r=1;8===(e=e.replace(/^#/,"")).length&&(r=parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),4===e.length&&(r=parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16),o=n>>16,l=n>>8&255,c=255&n;return"array"===t.format?[o,l,c,r]:{red:o,green:l,blue:c,alpha:r}}},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}
/*!
 * vidbg.js v2.0.1 (https://github.com/blakewilson/vidbg)
 * vidbg.js By Blake Wilson
 * @license Licensed Under MIT (https://github.com/blakewilson/vidbg/blob/master/LICENSE)
 */var s=function(){function e(t,r,n){var l=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"createContainer",(function(){l.containerEl=document.createElement("div"),l.containerEl.className="vidbg-container",l.createPoster(),l.el.appendChild(l.containerEl)})),c(this,"createOverlay",(function(){if(l.overlayEl=document.createElement("div"),l.overlayEl.className="vidbg-overlay",l.options.overlay){var e=a(o()(l.options.overlayColor,{format:"array"}),3),t=[e[0],e[1],e[2],l.options.overlayAlpha];l.overlayEl.style.backgroundColor="rgba(".concat(t.join(", "),")")}l.containerEl.appendChild(l.overlayEl)})),c(this,"createPoster",(function(){l.options.poster&&(l.containerEl.style.backgroundImage="url(".concat(l.options.poster,")"))})),c(this,"createVideo",(function(){for(var e in l.videoEl=document.createElement("video"),l.videoEl.addEventListener("playing",l.onPlayEvent),l.attributes)l.videoEl[e]=l.attributes[e];if(l.options.mp4){var t=document.createElement("source");t.src=l.options.mp4,t.type="video/mp4",l.videoEl.appendChild(t)}if(l.options.webm){var r=document.createElement("source");r.src=l.options.webm,r.type="video/webm",l.videoEl.appendChild(r)}l.containerEl.appendChild(l.videoEl);var n=l.videoEl.play();void 0!==n&&n.catch((function(e){console.error(e),console.error("Autoplay is not supported"),l.removeVideo()}))})),c(this,"onPlayEvent",(function(e){l.resize(),l.videoEl.style.opacity=1})),c(this,"removeVideo",(function(){l.videoEl.remove()})),c(this,"getVideo",(function(){return l.videoEl})),c(this,"destroy",(function(){l.containerEl.remove()})),c(this,"resize",(function(){var e=l.containerEl.offsetWidth,t=l.containerEl.offsetHeight;e/l.videoEl.videoWidth>t/l.videoEl.videoHeight?(l.videoEl.style.width="".concat(e,"px"),l.videoEl.style.height="auto"):(l.videoEl.style.width="auto",l.videoEl.style.height="".concat(t,"px"))})),!t)return console.error("Please provide a selector"),!1;if(this.el=document.querySelector(t),!this.el)return console.error('The selector you specified, "'.concat(t,'", does not exist!')),!1;this.options=i({},{mp4:null,webm:null,poster:null,overlay:!1,overlayColor:"#000",overlayAlpha:.3},r);if(this.attributes=i({},{controls:!1,loop:!0,muted:!0,playsInline:!0},n),!this.options.mp4&&!this.options.webm)return console.error("Please provide an mp4, webm, or both."),!1;this.init()}var t,r,n;return t=e,(r=[{key:"init",value:function(){this.el.style.position="relative",this.el.style.zIndex=1,this.createContainer(),this.createVideo(),this.createOverlay(),window.addEventListener("resize",this.resize)}}])&&l(t.prototype,r),n&&l(t,n),e}();t.default=s}]).default;
(function(q,g){"function"===typeof define&&define.amd?define([],g):"object"===typeof module&&module.exports?module.exports=g():q.Rellax=g()})("undefined"!==typeof window?window:global,function(){var q=function(g,u){function C(){if(3===a.options.breakpoints.length&&Array.isArray(a.options.breakpoints)){var f=!0,c=!0,b;a.options.breakpoints.forEach(function(a){"number"!==typeof a&&(c=!1);null!==b&&a<b&&(f=!1);b=a});if(f&&c)return}a.options.breakpoints=[576,768,1201];console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}
var a=Object.create(q.prototype),l=0,v=0,m=0,n=0,d=[],w=!0,A=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(a){return setTimeout(a,1E3/60)},p=null,x=!1;try{var k=Object.defineProperty({},"passive",{get:function(){x=!0}});window.addEventListener("testPassive",null,k);window.removeEventListener("testPassive",null,k)}catch(f){}var D=window.cancelAnimationFrame||window.mozCancelAnimationFrame||
clearTimeout,E=window.transformProp||function(){var a=document.createElement("div");if(null===a.style.transform){var c=["Webkit","Moz","ms"],b;for(b in c)if(void 0!==a.style[c[b]+"Transform"])return c[b]+"Transform"}return"transform"}();a.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}};u&&Object.keys(u).forEach(function(d){a.options[d]=
u[d]});u&&u.breakpoints&&C();g||(g=".rellax");k="string"===typeof g?document.querySelectorAll(g):[g];if(0<k.length){a.elems=k;if(a.options.wrapper&&!a.options.wrapper.nodeType)if(k=document.querySelector(a.options.wrapper))a.options.wrapper=k;else{console.warn("Rellax: The wrapper you're trying to use doesn't exist.");return}var F,B=function(){for(var f=0;f<d.length;f++)a.elems[f].style.cssText=d[f].style;d=[];v=window.innerHeight;n=window.innerWidth;f=a.options.breakpoints;F=n<f[0]?"xs":n>=f[0]&&n<
f[1]?"sm":n>=f[1]&&n<f[2]?"md":"lg";H();for(f=0;f<a.elems.length;f++){var c=void 0,b=a.elems[f],e=b.getAttribute("data-rellax-percentage"),y=b.getAttribute("data-rellax-speed"),t=b.getAttribute("data-rellax-xs-speed"),g=b.getAttribute("data-rellax-mobile-speed"),h=b.getAttribute("data-rellax-tablet-speed"),k=b.getAttribute("data-rellax-desktop-speed"),l=b.getAttribute("data-rellax-vertical-speed"),m=b.getAttribute("data-rellax-horizontal-speed"),p=b.getAttribute("data-rellax-vertical-scroll-axis"),
q=b.getAttribute("data-rellax-horizontal-scroll-axis"),u=b.getAttribute("data-rellax-zindex")||0,x=b.getAttribute("data-rellax-min"),A=b.getAttribute("data-rellax-max"),C=b.getAttribute("data-rellax-min-x"),D=b.getAttribute("data-rellax-max-x"),E=b.getAttribute("data-rellax-min-y"),L=b.getAttribute("data-rellax-max-y"),r=!0;t||g||h||k?c={xs:t,sm:g,md:h,lg:k}:r=!1;t=a.options.wrapper?a.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;a.options.relativeToWrapper&&
(t=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-a.options.wrapper.offsetTop);var z=a.options.vertical?e||a.options.center?t:0:0,I=a.options.horizontal?e||a.options.center?a.options.wrapper?a.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0:0;t=z+b.getBoundingClientRect().top;g=b.clientHeight||b.offsetHeight||b.scrollHeight;h=I+b.getBoundingClientRect().left;k=b.clientWidth||b.offsetWidth||b.scrollWidth;
z=e?e:(z-t+v)/(g+v);e=e?e:(I-h+n)/(k+n);a.options.center&&(z=e=.5);c=r&&null!==c[F]?Number(c[F]):y?y:a.options.speed;l=l?l:a.options.verticalSpeed;m=m?m:a.options.horizontalSpeed;p=p?p:a.options.verticalScrollAxis;q=q?q:a.options.horizontalScrollAxis;y=J(e,z,c,l,m);b=b.style.cssText;r="";if(e=/transform\s*:/i.exec(b))r=b.slice(e.index),r=(e=r.indexOf(";"))?" "+r.slice(11,e).replace(/\s/g,""):" "+r.slice(11).replace(/\s/g,"");d.push({baseX:y.x,baseY:y.y,top:t,left:h,height:g,width:k,speed:c,verticalSpeed:l,
horizontalSpeed:m,verticalScrollAxis:p,horizontalScrollAxis:q,style:b,transform:r,zindex:u,min:x,max:A,minX:C,maxX:D,minY:E,maxY:L})}K();w&&(window.addEventListener("resize",B),w=!1,G())},H=function(){var d=l,c=m;l=a.options.wrapper?a.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;m=a.options.wrapper?a.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset;
a.options.relativeToWrapper&&(l=((document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset)-a.options.wrapper.offsetTop);return d!=l&&a.options.vertical||c!=m&&a.options.horizontal?!0:!1},J=function(d,c,b,e,g){var f={};d=100*(g?g:b)*(1-d);c=100*(e?e:b)*(1-c);f.x=a.options.round?Math.round(d):Math.round(100*d)/100;f.y=a.options.round?Math.round(c):Math.round(100*c)/100;return f},h=function(){window.removeEventListener("resize",h);window.removeEventListener("orientationchange",
h);(a.options.wrapper?a.options.wrapper:window).removeEventListener("scroll",h);(a.options.wrapper?a.options.wrapper:document).removeEventListener("touchmove",h);p=A(G)},G=function(){H()&&!1===w?(K(),p=A(G)):(p=null,window.addEventListener("resize",h),window.addEventListener("orientationchange",h),(a.options.wrapper?a.options.wrapper:window).addEventListener("scroll",h,x?{passive:!0}:!1),(a.options.wrapper?a.options.wrapper:document).addEventListener("touchmove",h,x?{passive:!0}:!1))},K=function(){for(var f,
c=0;c<a.elems.length;c++){var b=d[c].verticalScrollAxis.toLowerCase(),e=d[c].horizontalScrollAxis.toLowerCase();f=-1!=b.indexOf("x")?l:0;b=-1!=b.indexOf("y")?l:0;var g=-1!=e.indexOf("x")?m:0;e=-1!=e.indexOf("y")?m:0;f=J((f+g-d[c].left+n)/(d[c].width+n),(b+e-d[c].top+v)/(d[c].height+v),d[c].speed,d[c].verticalSpeed,d[c].horizontalSpeed);e=f.y-d[c].baseY;b=f.x-d[c].baseX;null!==d[c].min&&(a.options.vertical&&!a.options.horizontal&&(e=e<=d[c].min?d[c].min:e),a.options.horizontal&&!a.options.vertical&&
(b=b<=d[c].min?d[c].min:b));null!=d[c].minY&&(e=e<=d[c].minY?d[c].minY:e);null!=d[c].minX&&(b=b<=d[c].minX?d[c].minX:b);null!==d[c].max&&(a.options.vertical&&!a.options.horizontal&&(e=e>=d[c].max?d[c].max:e),a.options.horizontal&&!a.options.vertical&&(b=b>=d[c].max?d[c].max:b));null!=d[c].maxY&&(e=e>=d[c].maxY?d[c].maxY:e);null!=d[c].maxX&&(b=b>=d[c].maxX?d[c].maxX:b);a.elems[c].style[E]="translate3d("+(a.options.horizontal?b:"0")+"px,"+(a.options.vertical?e:"0")+"px,"+d[c].zindex+"px) "+d[c].transform}a.options.callback(f)};
a.destroy=function(){for(var f=0;f<a.elems.length;f++)a.elems[f].style.cssText=d[f].style;w||(window.removeEventListener("resize",B),w=!0);D(p);p=null};B();a.refresh=B;return a}console.warn("Rellax: The elements you're trying to select don't exist.")};return q});

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?_():(document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,f.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||(0,d.default)("[data-aos]",O),w)};e.exports={init:z,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=window.document,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=new r(o);i=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&i()})}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){};t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});
var instance = new vidbg('.video', {
    mp4: '/video/world.mp4', // URL or relative path to MP4 video
    webm: '/video/world.webm', // URL or relative path to webm video
    poster: '/img/world.jpg', // URL or relative path to fallback image
    overlay: false, // Boolean to display the overlay or not
});

var rellax = new Rellax('.rocket-picture');

 AOS.init();
// if (document.body.clientWidth < 768 ) {
//     rellax.destroy();
// }

System.register([],(function(t,e){"use strict";return{execute:function(){function e(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function o(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?e(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var i;t({a:ot,b:function(t,e,n){var r,i,a=z.getDocument(t),f=a.defaultView||a.parentWindow,l=z.getWindowScrollLeft(f),u=z.getWindowScrollTop(f),c=z.viewportWidth(f),s=z.viewportHeight(f);r="pageX"in e?e.pageX:l+e.clientX,i="pageY"in e?e.pageY:u+e.clientY;var p={left:r,top:i,width:0,height:0},d=r>=0&&r<=l+c&&i>=0&&i<=u+s,h=[n.points[0],"cc"];return et(t,p,o(o({},n),{},{points:h}),d)}});var a={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function f(){if(void 0!==i)return i;i="";var t=document.createElement("p").style;for(var e in a)e+"Transform"in t&&(i=e);return i}function l(){return f()?"".concat(f(),"TransitionProperty"):"transitionProperty"}function u(){return f()?"".concat(f(),"Transform"):"transform"}function c(t,e){var o=l();o&&(t.style[o]=e,"transitionProperty"!==o&&(t.style.transitionProperty=e))}function s(t,e){var o=u();o&&(t.style[o]=e,"transform"!==o&&(t.style.transform=e))}var p,d=/matrix\((.*)\)/,h=/matrix3d\((.*)\)/;function g(t){var e=t.style.display;t.style.display="none",t.offsetHeight,t.style.display=e}function v(t,e,o){var r=o;if("object"!==n(e))return void 0!==r?("number"==typeof r&&(r="".concat(r,"px")),void(t.style[e]=r)):p(t,e);for(var i in e)e.hasOwnProperty(i)&&v(t,i,e[i])}function m(t,e){var o=t["page".concat(e?"Y":"X","Offset")],n="scroll".concat(e?"Top":"Left");if("number"!=typeof o){var r=t.document;"number"!=typeof(o=r.documentElement[n])&&(o=r.body[n])}return o}function y(t){return m(t)}function w(t){return m(t,!0)}function b(t){var e=function(t){var e,o,n,r=t.ownerDocument,i=r.body,a=r&&r.documentElement;return e=t.getBoundingClientRect(),o=Math.floor(e.left),n=Math.floor(e.top),{left:o-=a.clientLeft||i.clientLeft||0,top:n-=a.clientTop||i.clientTop||0}}(t),o=t.ownerDocument,n=o.defaultView||o.parentWindow;return e.left+=y(n),e.top+=w(n),e}function x(t){return null!=t&&t==t.window}function W(t){return x(t)?t.document:9===t.nodeType?t:t.ownerDocument}var O=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),P=/^(top|right|bottom|left)$/,S="currentStyle",j="runtimeStyle",T="left";function M(t,e){return"left"===t?e.useCssRight?"right":t:e.useCssBottom?"bottom":t}function C(t){return"left"===t?"right":"right"===t?"left":"top"===t?"bottom":"bottom"===t?"top":void 0}function D(t,e,o){"static"===v(t,"position")&&(t.style.position="relative");var n=-999,r=-999,i=M("left",o),a=M("top",o),f=C(i),u=C(a);"left"!==i&&(n=999),"top"!==a&&(r=999);var s,p="",d=b(t);("left"in e||"top"in e)&&(p=(s=t).style.transitionProperty||s.style[l()]||"",c(t,"none")),"left"in e&&(t.style[f]="",t.style[i]="".concat(n,"px")),"top"in e&&(t.style[u]="",t.style[a]="".concat(r,"px")),g(t);var h=b(t),m={};for(var y in e)if(e.hasOwnProperty(y)){var w=M(y,o),x="left"===y?n:r,W=d[y]-h[y];m[w]=w===y?x+W:x-W}v(t,m),g(t),("left"in e||"top"in e)&&c(t,p);var O={};for(var P in e)if(e.hasOwnProperty(P)){var S=M(P,o),j=e[P]-d[P];O[S]=P===S?m[S]+j:m[S]-j}v(t,O)}function H(t,e){var o=b(t),n=function(t){var e=window.getComputedStyle(t,null),o=e.getPropertyValue("transform")||e.getPropertyValue(u());if(o&&"none"!==o){var n=o.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(n[12]||n[4],0),y:parseFloat(n[13]||n[5],0)}}return{x:0,y:0}}(t),r={x:n.x,y:n.y};"left"in e&&(r.x=n.x+e.left-o.left),"top"in e&&(r.y=n.y+e.top-o.top),function(t,e){var o=window.getComputedStyle(t,null),n=o.getPropertyValue("transform")||o.getPropertyValue(u());if(n&&"none"!==n){var r,i=n.match(d);i?((r=(i=i[1]).split(",").map((function(t){return parseFloat(t,10)})))[4]=e.x,r[5]=e.y,s(t,"matrix(".concat(r.join(","),")"))):((r=n.match(h)[1].split(",").map((function(t){return parseFloat(t,10)})))[12]=e.x,r[13]=e.y,s(t,"matrix3d(".concat(r.join(","),")")))}else s(t,"translateX(".concat(e.x,"px) translateY(").concat(e.y,"px) translateZ(0)"))}(t,r)}function V(t,e){for(var o=0;o<t.length;o++)e(t[o])}function X(t){return"border-box"===p(t,"boxSizing")}"undefined"!=typeof window&&(p=window.getComputedStyle?function(t,e,o){var n=o,r="",i=W(t);return(n=n||i.defaultView.getComputedStyle(t,null))&&(r=n.getPropertyValue(e)||n[e]),r}:function(t,e){var o=t[S]&&t[S][e];if(O.test(o)&&!P.test(e)){var n=t.style,r=n[T],i=t[j][T];t[j][T]=t[S][T],n[T]="fontSize"===e?"1em":o||0,o=n.pixelLeft+"px",n[T]=r,t[j][T]=i}return""===o?"auto":o});var Y=["margin","border","padding"];function E(t,e,o){var n,r,i,a=0;for(r=0;r<e.length;r++)if(n=e[r])for(i=0;i<o.length;i++){var f=void 0;f="border"===n?"".concat(n).concat(o[i],"Width"):n+o[i],a+=parseFloat(p(t,f))||0}return a}var L={getParent:function(t){var e=t;do{e=11===e.nodeType&&e.host?e.host:e.parentNode}while(e&&1!==e.nodeType&&9!==e.nodeType);return e}};function B(t,e,o){var n=o;if(x(t))return"width"===e?L.viewportWidth(t):L.viewportHeight(t);if(9===t.nodeType)return"width"===e?L.docWidth(t):L.docHeight(t);var r="width"===e?["Left","Right"]:["Top","Bottom"],i="width"===e?Math.floor(t.getBoundingClientRect().width):Math.floor(t.getBoundingClientRect().height),a=X(t),f=0;(null==i||i<=0)&&(i=void 0,(null==(f=p(t,e))||Number(f)<0)&&(f=t.style[e]||0),f=Math.floor(parseFloat(f))||0),void 0===n&&(n=a?1:-1);var l=void 0!==i||a,u=i||f;return-1===n?l?u-E(t,["border","padding"],r):f:l?1===n?u:u+(2===n?-E(t,["border"],r):E(t,["margin"],r)):f+E(t,Y.slice(n),r)}V(["Width","Height"],(function(t){L["doc".concat(t)]=function(e){var o=e.document;return Math.max(o.documentElement["scroll".concat(t)],o.body["scroll".concat(t)],L["viewport".concat(t)](o))},L["viewport".concat(t)]=function(e){var o="client".concat(t),n=e.document,r=n.body,i=n.documentElement[o];return"CSS1Compat"===n.compatMode&&i||r&&r[o]||i}}));var F={position:"absolute",visibility:"hidden",display:"block"};function R(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];var n,r=e[0];return 0!==r.offsetWidth?n=B.apply(void 0,e):function(t,e,o){var n,r={},i=t.style;for(n in e)e.hasOwnProperty(n)&&(r[n]=i[n],i[n]=e[n]);for(n in o.call(t),e)e.hasOwnProperty(n)&&(i[n]=r[n])}(r,F,(function(){n=B.apply(void 0,e)})),n}function k(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);return t}V(["width","height"],(function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);L["outer".concat(e)]=function(e,o){return e&&R(e,t,o?0:1)};var o="width"===t?["Left","Right"]:["Top","Bottom"];L[t]=function(e,n){var r=n;return void 0!==r?e?(X(e)&&(r+=E(e,["padding","border"],o)),v(e,t,r)):void 0:e&&R(e,t,-1)}}));var z={getWindow:function(t){if(t&&t.document&&t.setTimeout)return t;var e=t.ownerDocument||t;return e.defaultView||e.parentWindow},getDocument:W,offset:function(t,e,o){if(void 0===e)return b(t);!function(t,e,o){if(o.ignoreShake){var n=b(t),r=n.left.toFixed(0),i=n.top.toFixed(0),a=e.left.toFixed(0),f=e.top.toFixed(0);if(r===a&&i===f)return}o.useCssRight||o.useCssBottom?D(t,e,o):o.useCssTransform&&u()in document.body.style?H(t,e):D(t,e,o)}(t,e,o||{})},isWindow:x,each:V,css:v,clone:function(t){var e,o={};for(e in t)t.hasOwnProperty(e)&&(o[e]=t[e]);if(t.overflow)for(e in t)t.hasOwnProperty(e)&&(o.overflow[e]=t.overflow[e]);return o},mix:k,getWindowScrollLeft:function(t){return y(t)},getWindowScrollTop:function(t){return w(t)},merge:function(){for(var t={},e=0;e<arguments.length;e++)z.mix(t,e<0||arguments.length<=e?void 0:arguments[e]);return t},viewportWidth:0,viewportHeight:0};k(z,L);var A=z.getParent;function _(t){if(z.isWindow(t)||9===t.nodeType)return null;var e,o=z.getDocument(t).body,n=z.css(t,"position");if("fixed"!==n&&"absolute"!==n)return"html"===t.nodeName.toLowerCase()?null:A(t);for(e=A(t);e&&e!==o&&9!==e.nodeType;e=A(e))if("static"!==(n=z.css(e,"position")))return e;return null}var I=z.getParent;function N(t,e){for(var o={left:0,right:1/0,top:0,bottom:1/0},n=_(t),r=z.getDocument(t),i=r.defaultView||r.parentWindow,a=r.body,f=r.documentElement;n;){if(-1!==navigator.userAgent.indexOf("MSIE")&&0===n.clientWidth||n===a||n===f||"visible"===z.css(n,"overflow")){if(n===a||n===f)break}else{var l=z.offset(n);l.left+=n.clientLeft,l.top+=n.clientTop,o.top=Math.max(o.top,l.top),o.right=Math.min(o.right,l.left+n.clientWidth),o.bottom=Math.min(o.bottom,l.top+n.clientHeight),o.left=Math.max(o.left,l.left)}n=_(n)}var u=null;z.isWindow(t)||9===t.nodeType||(u=t.style.position,"absolute"===z.css(t,"position")&&(t.style.position="fixed"));var c=z.getWindowScrollLeft(i),s=z.getWindowScrollTop(i),p=z.viewportWidth(i),d=z.viewportHeight(i),h=f.scrollWidth,g=f.scrollHeight,v=window.getComputedStyle(a);if("hidden"===v.overflowX&&(h=i.innerWidth),"hidden"===v.overflowY&&(g=i.innerHeight),t.style&&(t.style.position=u),e||function(t){if(z.isWindow(t)||9===t.nodeType)return!1;var e=z.getDocument(t),o=e.body,n=null;for(n=I(t);n&&n!==o&&n!==e;n=I(n))if("fixed"===z.css(n,"position"))return!0;return!1}(t))o.left=Math.max(o.left,c),o.top=Math.max(o.top,s),o.right=Math.min(o.right,c+p),o.bottom=Math.min(o.bottom,s+d);else{var m=Math.max(h,c+p);o.right=Math.min(o.right,m);var y=Math.max(g,s+d);o.bottom=Math.min(o.bottom,y)}return o.top>=0&&o.left>=0&&o.bottom>o.top&&o.right>o.left?o:null}function $(t){var e,o,n;if(z.isWindow(t)||9===t.nodeType){var r=z.getWindow(t);e={left:z.getWindowScrollLeft(r),top:z.getWindowScrollTop(r)},o=z.viewportWidth(r),n=z.viewportHeight(r)}else e=z.offset(t),o=z.outerWidth(t),n=z.outerHeight(t);return e.width=o,e.height=n,e}function U(t,e){var o=e.charAt(0),n=e.charAt(1),r=t.width,i=t.height,a=t.left,f=t.top;return"c"===o?f+=i/2:"b"===o&&(f+=i),"c"===n?a+=r/2:"r"===n&&(a+=r),{left:a,top:f}}function Z(t,e,o,n,r){var i=U(e,o[1]),a=U(t,o[0]),f=[a.left-i.left,a.top-i.top];return{left:Math.round(t.left-f[0]+n[0]-r[0]),top:Math.round(t.top-f[1]+n[1]-r[1])}}function q(t,e,o){return t.left<o.left||t.left+e.width>o.right}function G(t,e,o){return t.top<o.top||t.top+e.height>o.bottom}function J(t,e,o){var n=[];return z.each(t,(function(t){n.push(t.replace(e,(function(t){return o[t]})))})),n}function K(t,e){return t[e]=-t[e],t}function Q(t,e){return(/%$/.test(t)?parseInt(t.substring(0,t.length-1),10)/100*e:parseInt(t,10))||0}function tt(t,e){t[0]=Q(t[0],e.width),t[1]=Q(t[1],e.height)}function et(t,e,o,n){var r=o.points,i=o.offset||[0,0],a=o.targetOffset||[0,0],f=o.overflow,l=o.source||t;i=[].concat(i),a=[].concat(a);var u={},c=0,s=N(l,!(!(f=f||{})||!f.alwaysByViewport)),p=$(l);tt(i,p),tt(a,e);var d=Z(p,e,r,i,a),h=z.merge(p,d);if(s&&(f.adjustX||f.adjustY)&&n){if(f.adjustX&&q(d,p,s)){var g=J(r,/[lr]/gi,{l:"r",r:"l"}),v=K(i,0),m=K(a,0);(function(t,e,o){return t.left>o.right||t.left+e.width<o.left})(Z(p,e,g,v,m),p,s)||(c=1,r=g,i=v,a=m)}if(f.adjustY&&G(d,p,s)){var y=J(r,/[tb]/gi,{t:"b",b:"t"}),w=K(i,1),b=K(a,1);(function(t,e,o){return t.top>o.bottom||t.top+e.height<o.top})(Z(p,e,y,w,b),p,s)||(c=1,r=y,i=w,a=b)}c&&(d=Z(p,e,r,i,a),z.mix(h,d));var x=q(d,p,s),W=G(d,p,s);if(x||W){var O=r;x&&(O=J(r,/[lr]/gi,{l:"r",r:"l"})),W&&(O=J(r,/[tb]/gi,{t:"b",b:"t"})),r=O,i=o.offset||[0,0],a=o.targetOffset||[0,0]}u.adjustX=f.adjustX&&x,u.adjustY=f.adjustY&&W,(u.adjustX||u.adjustY)&&(h=function(t,e,o,n){var r=z.clone(t),i={width:e.width,height:e.height};return n.adjustX&&r.left<o.left&&(r.left=o.left),n.resizeWidth&&r.left>=o.left&&r.left+i.width>o.right&&(i.width-=r.left+i.width-o.right),n.adjustX&&r.left+i.width>o.right&&(r.left=Math.max(o.right-i.width,o.left)),n.adjustY&&r.top<o.top&&(r.top=o.top),n.resizeHeight&&r.top>=o.top&&r.top+i.height>o.bottom&&(i.height-=r.top+i.height-o.bottom),n.adjustY&&r.top+i.height>o.bottom&&(r.top=Math.max(o.bottom-i.height,o.top)),z.mix(r,i)}(d,p,s,u))}return h.width!==p.width&&z.css(l,"width",z.width(l)+h.width-p.width),h.height!==p.height&&z.css(l,"height",z.height(l)+h.height-p.height),z.offset(l,{left:h.left,top:h.top},{useCssRight:o.useCssRight,useCssBottom:o.useCssBottom,useCssTransform:o.useCssTransform,ignoreShake:o.ignoreShake}),{points:r,offset:i,targetOffset:a,overflow:u}}function ot(t,e,o){var n=o.target||e,r=$(n),i=!function(t,e){var o=N(t,e),n=$(t);return!o||n.left+n.width<=o.left||n.top+n.height<=o.top||n.left>=o.right||n.top>=o.bottom}(n,o.overflow&&o.overflow.alwaysByViewport);return et(t,r,o,i)}ot.__getOffsetParent=_,ot.__getVisibleRectForElement=N}}}));

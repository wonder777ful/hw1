!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,u,i=[],c=!0,l=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw a}}return i}}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,u=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw u}}}}function n(e,t){if(e){if("string"==typeof e)return a(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}System.register(["./@vue-legacy-0CbnfKPE.js"],(function(n,a){"use strict";var u,i,c,l,f,s,v,h,p,d,m,g;return{setters:[function(e){u=e.s,i=e.u,c=e.a0,l=e.n,f=e.d,s=e.a,v=e.i,h=e.j,p=e.h,d=e.p,m=e.r,g=e.w}],execute:function(){n({a:function(e){return v(Be)},b:function(e){var t=function(e){var t=window,r=t.history,n=t.location,a={value:ue(e,n)},o={value:r.state};o.value||u(a.value,{back:null,current:a.value,forward:null,position:r.length-1,replaced:!0,scroll:null},!0);function u(t,a,u){var i=e.indexOf("#"),c=i>-1?(n.host&&document.querySelector("base")?e:e.slice(i))+t:oe()+e+t;try{r[u?"replaceState":"pushState"](a,"",c),o.value=a}catch(l){console.error(l),n[u?"replace":"assign"](c)}}function i(e,t){u(e,b({},r.state,ie(o.value.back,e,o.value.forward,!0),t,{position:o.value.position}),!0),a.value=e}function c(e,t){var n=b({},o.value,r.state,{forward:e,scroll:re()});u(n.current,n,!0),u(e,b({},ie(a.value,e,null),{position:n.position+1},t),!1),a.value=e}return{location:a,state:o,push:c,replace:i}}(e=function(e){if(!e)if(a){var t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";"/"!==e[0]&&"#"!==e[0]&&(e="/"+e);return D(e)}(e)),n=function(e,t,n,a){var o=[],u=[],i=null,c=function(r){var u=r.state,c=ue(e,location),l=n.value,f=t.value,s=0;if(u){if(n.value=c,t.value=u,i&&i===l)return void(i=null);s=f?u.position-f.position:0}else a(c);o.forEach((function(e){e(n.value,l,{delta:s,type:Q.pop,direction:s?s>0?Y.forward:Y.back:Y.unknown})}))};function l(){i=n.value}function f(e){o.push(e);var t=function(){var t=o.indexOf(e);t>-1&&o.splice(t,1)};return u.push(t),t}function s(){var e=window.history;e.state&&e.replaceState(b({},e.state,{scroll:re()}),"")}function v(){var e,t=r(u);try{for(t.s();!(e=t.n()).done;){(0,e.value)()}}catch(n){t.e(n)}finally{t.f()}u=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",s,{passive:!0}),{pauseListeners:l,listen:f,destroy:v}}(e,t.state,t.location,t.replace);var o=b({location:"",base:e,go:function(e){!(arguments.length>1&&void 0!==arguments[1])||arguments[1]||n.pauseListeners(),history.go(e)},createHref:te.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:function(){return t.location.value}}),Object.defineProperty(o,"state",{enumerable:!0,get:function(){return t.state.value}}),o},c:function(t){var n=function(e,t){var n=[],a=new Map;function o(e){return a.get(e)}function u(e,n,a){var o=!a,c=ke(e);c.aliasOf=a&&a.record;var f,s,v=xe(t,e),h=[c];if("alias"in e){var p,d=r("string"==typeof e.alias?[e.alias]:e.alias);try{for(d.s();!(p=d.n()).done;){var m=p.value;h.push(ke(b({},c,{components:a?a.record.components:c.components,path:m,aliasOf:a?a.record:c})))}}catch(P){d.e(P)}finally{d.f()}}for(var g=0,y=h;g<y.length;g++){var w=y[g],O=w.path;if(n&&"/"!==O[0]){var R=n.record.path,k="/"===R[R.length-1]?"":"/";w.path=n.record.path+(O&&k+O)}if(f=Oe(w,n,v),a?a.alias.push(f):((s=s||f)!==f&&s.alias.push(f),o&&e.name&&!je(f)&&i(e.name)),Ce(f)&&l(f),c.children)for(var S=c.children,j=0;j<S.length;j++)u(S[j],f,a&&a.children[j]);a=a||f}return s?function(){i(s)}:E}function i(e){if(ce(e)){var t=a.get(e);t&&(a.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(i),t.alias.forEach(i))}else{var r=n.indexOf(e);r>-1&&(n.splice(r,1),e.record.name&&a.delete(e.record.name),e.children.forEach(i),e.alias.forEach(i))}}function c(){return n}function l(e){var t=function(e,t){var r=0,n=t.length;for(;r!==n;){var a=r+n>>1;ye(e,t[a])<0?n=a:r=a+1}var o=function(e){var t=e;for(;t=t.parent;)if(Ce(t)&&0===ye(e,t))return t;return}(e);o&&(n=t.lastIndexOf(o,n-1));return n}(e,n);n.splice(t,0,e),e.record.name&&!je(e)&&a.set(e.record.name,e)}function f(e,t){var r,o,u,i={};if("name"in e&&e.name){if(!(r=a.get(e.name)))throw ve(1,{location:e});u=r.record.name,i=b(Re(t.params,r.keys.filter((function(e){return!e.optional})).concat(r.parent?r.parent.keys.filter((function(e){return e.optional})):[]).map((function(e){return e.name}))),e.params&&Re(e.params,r.keys.map((function(e){return e.name})))),o=r.stringify(i)}else if(null!=e.path)o=e.path,(r=n.find((function(e){return e.re.test(o)})))&&(i=r.parse(o),u=r.record.name);else{if(!(r=t.name?a.get(t.name):n.find((function(e){return e.re.test(t.path)}))))throw ve(1,{location:e,currentLocation:t});u=r.record.name,i=b({},t.params,e.params),o=r.stringify(i)}for(var c=[],l=r;l;)c.unshift(l.record),l=l.parent;return{name:u,path:o,params:i,matched:c,meta:Pe(c)}}function s(){n.length=0,a.clear()}return t=xe({strict:!1,end:!0,sensitive:!1},t),e.forEach((function(e){return u(e)})),{addRoute:u,resolve:f,removeRoute:i,clearRoutes:s,getRoutes:c,getRecordMatcher:o}}(t.routes,t),f=t.parseQuery||Ae,s=t.stringifyQuery||qe,v=t.history,h=_e(),p=_e(),d=_e(),m=u(J),g=J;a&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");var y,R=w.bind(null,(function(e){return""+e})),k=w.bind(null,W),S=w.bind(null,U);function j(e,t){if(t=b({},t||m.value),"string"==typeof e){var r=V(f,e,t.path),a=n.resolve({path:r.path},t),o=v.createHref(r.fullPath);return b(r,a,{params:S(a.params),hash:U(r.hash),redirectedFrom:void 0,href:o})}var u;if(null!=e.path)u=b({},e,{path:V(f,e.path,t.path).path});else{var i=b({},e.params);for(var c in i)null==i[c]&&delete i[c];u=b({},e,{params:k(i)}),t.params=k(t.params)}var l=n.resolve(u,t),h=e.hash||"";l.params=R(S(l.params));var p,d,g,y,w=(p=s,d=b({},e,{hash:(y=h,G(y).replace(M,"{").replace(T,"}").replace(q,"^")),path:l.path}),g=d.query?p(d.query):"",d.path+(g&&"?")+g+(d.hash||"")),E=v.createHref(w);return b({fullPath:w,hash:h,query:s===qe?Ie(e.query):e.query||{}},l,{redirectedFrom:void 0,href:E})}function P(e){return"string"==typeof e?V(f,e,m.value.path):b({},e)}function x(e,t){if(g!==e)return ve(8,{from:t,to:e})}function C(e){return I(e)}function A(e){var t=e.matched[e.matched.length-1];if(t&&t.redirect){var r=t.redirect,n="function"==typeof r?r(e):r;return"string"==typeof n&&((n=n.includes("?")||n.includes("#")?n=P(n):{path:n}).params={}),b({query:e.query,hash:e.hash,params:null!=n.path?{}:e.params},n)}}function I(e,t){var r=g=j(e),n=m.value,a=e.state,u=e.force,i=!0===e.replace,c=A(r);if(c)return I(b(P(c),{state:"object"===o(c)?b({},a,c.state):a,force:u,replace:i}),t||r);var l,f,v,h,p,d,y=r;return y.redirectedFrom=t,!u&&(f=s,h=r,p=(v=n).matched.length-1,d=h.matched.length-1,p>-1&&p===d&&z(v.matched[p],h.matched[d])&&K(v.params,h.params)&&f(v.query)===f(h.query)&&v.hash===h.hash)&&(l=ve(16,{to:y,from:n}),ee(n,n,!0,!1)),(l?Promise.resolve(l):_(y,n)).catch((function(e){return he(e)?he(e,2)?e:Z(e):Y(e,y,n)})).then((function(e){if(e){if(he(e,2))return I(b({replace:i},P(e.to),{state:"object"===o(e.to)?b({},a,e.to.state):a,force:u}),t||y)}else e=D(y,n,!0,i,a);return $(y,n,e),e}))}function L(e,t){var r=x(e,t);return r?Promise.reject(r):Promise.resolve()}function B(e){var t=ue.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function _(t,n){var a,o=function(e,t){for(var r=[],n=[],a=[],o=Math.max(t.matched.length,e.matched.length),u=function(){var o=t.matched[i];o&&(e.matched.find((function(e){return z(e,o)}))?n.push(o):r.push(o));var u=e.matched[i];u&&(t.matched.find((function(e){return z(e,u)}))||a.push(u))},i=0;i<o;i++)u();return[r,n,a]}(t,n),u=e(o,3),i=u[0],c=u[1],l=u[2];a=Ue(i.reverse(),"beforeRouteLeave",t,n);var f,s=r(i);try{for(s.s();!(f=s.n()).done;){f.value.leaveGuards.forEach((function(e){a.push(We(e,t,n))}))}}catch(d){s.e(d)}finally{s.f()}var v=L.bind(null,t,n);return a.push(v),le(a).then((function(){a=[];var e,o=r(h.list());try{for(o.s();!(e=o.n()).done;){var u=e.value;a.push(We(u,t,n))}}catch(d){o.e(d)}finally{o.f()}return a.push(v),le(a)})).then((function(){a=Ue(c,"beforeRouteUpdate",t,n);var e,o=r(c);try{for(o.s();!(e=o.n()).done;){e.value.updateGuards.forEach((function(e){a.push(We(e,t,n))}))}}catch(d){o.e(d)}finally{o.f()}return a.push(v),le(a)})).then((function(){a=[];var e,o=r(l);try{for(o.s();!(e=o.n()).done;){var u=e.value;if(u.beforeEnter)if(O(u.beforeEnter)){var i,c=r(u.beforeEnter);try{for(c.s();!(i=c.n()).done;){var f=i.value;a.push(We(f,t,n))}}catch(d){c.e(d)}finally{c.f()}}else a.push(We(u.beforeEnter,t,n))}}catch(d){o.e(d)}finally{o.f()}return a.push(v),le(a)})).then((function(){return t.matched.forEach((function(e){return e.enterCallbacks={}})),(a=Ue(l,"beforeRouteEnter",t,n,B)).push(v),le(a)})).then((function(){a=[];var e,o=r(p.list());try{for(o.s();!(e=o.n()).done;){var u=e.value;a.push(We(u,t,n))}}catch(d){o.e(d)}finally{o.f()}return a.push(v),le(a)})).catch((function(e){return he(e,8)?e:Promise.reject(e)}))}function $(e,t,r){d.list().forEach((function(n){return B((function(){return n(e,t,r)}))}))}function D(e,t,r,n,o){var u=x(e,t);if(u)return u;var i=t===J,c=a?history.state:{};r&&(n||i?v.replace(e.fullPath,b({scroll:i&&c&&c.scroll},o)):v.push(e.fullPath,o)),m.value=e,ee(e,t,r,i),Z()}function F(){y||(y=v.listen((function(e,t,r){if(ie.listening){var n=j(e),o=A(n);if(o)I(b(o,{replace:!0,force:!0}),n).catch(E);else{g=n;var u,i,c=m.value;a&&(u=ne(c.fullPath,r.delta),i=re(),ae.set(u,i)),_(n,c).catch((function(e){return he(e,12)?e:he(e,2)?(I(b(P(e.to),{force:!0}),n).then((function(e){he(e,20)&&!r.delta&&r.type===Q.pop&&v.go(-1,!1)})).catch(E),Promise.reject()):(r.delta&&v.go(-r.delta,!1),Y(e,n,c))})).then((function(e){(e=e||D(n,c,!1))&&(r.delta&&!he(e,8)?v.go(-r.delta,!1):r.type===Q.pop&&he(e,20)&&v.go(-1,!1)),$(n,c,e)})).catch(E)}}})))}var H,N=_e(),X=_e();function Y(e,t,r){Z(e);var n=X.list();return n.length?n.forEach((function(n){return n(e,t,r)})):console.error(e),Promise.reject(e)}function Z(t){return H||(H=!t,F(),N.list().forEach((function(r){var n=e(r,2),a=n[0],o=n[1];return t?o(t):a()})),N.reset()),t}function ee(e,r,n,o){var u=t.scrollBehavior;if(!a||!u)return Promise.resolve();var i,c,f=!n&&(i=ne(e.fullPath,0),c=ae.get(i),ae.delete(i),c)||(o||!n)&&history.state&&history.state.scroll||null;return l().then((function(){return u(e,r,f)})).then((function(e){return e&&function(e){var t;if("el"in e){var r=e.el,n="string"==typeof r&&r.startsWith("#"),a="string"==typeof r?n?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!a)return;t=function(e,t){var r=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-r.left-(t.left||0),top:n.top-r.top-(t.top||0)}}(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}(e)})).catch((function(t){return Y(t,e,r)}))}var te,oe=function(e){return v.go(e)},ue=new Set,ie={currentRoute:m,listening:!0,addRoute:function(e,t){var r,a;return ce(e)?(r=n.getRecordMatcher(e),a=t):a=e,n.addRoute(a,r)},removeRoute:function(e){var t=n.getRecordMatcher(e);t&&n.removeRoute(t)},clearRoutes:n.clearRoutes,hasRoute:function(e){return!!n.getRecordMatcher(e)},getRoutes:function(){return n.getRoutes().map((function(e){return e.record}))},resolve:j,options:t,push:C,replace:function(e){return C(b(P(e),{replace:!0}))},go:oe,back:function(){return oe(-1)},forward:function(){return oe(1)},beforeEach:h.add,beforeResolve:p.add,afterEach:d.add,onError:X.add,isReady:function(){return H&&m.value!==J?Promise.resolve():new Promise((function(e,t){N.add([e,t])}))},install:function(e){e.component("RouterLink",De),e.component("RouterView",Ke),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:function(){return i(m)}}),a&&!te&&m.value===J&&(te=!0,C(v.location).catch((function(e){})));var t={},r=function(e){Object.defineProperty(t,e,{get:function(){return m.value[e]},enumerable:!0})};for(var n in J)r(n);e.provide(Te,this),e.provide(Be,c(t)),e.provide(Ge,m);var o=e.unmount;ue.add(e),e.unmount=function(){ue.delete(e),ue.size<1&&(g=J,y&&y(),y=null,m.value=J,te=!1,H=!1),o()}}};function le(e){return e.reduce((function(e,t){return e.then((function(){return B(t)}))}),Promise.resolve())}return ie},u:function(){return v(Te)}});
/*!
        * vue-router v4.5.0
        * (c) 2024 Eduardo San Martin Morote
        * @license MIT
        */
var a="undefined"!=typeof document;function y(e){return"object"===o(e)||"displayName"in e||"props"in e||"__vccOpts"in e}var b=Object.assign;function w(e,t){var r={};for(var n in t){var a=t[n];r[n]=O(a)?a.map(e):e(a)}return r}var E=function(){},O=Array.isArray,R=/#/g,k=/&/g,S=/\//g,j=/=/g,P=/\?/g,x=/\+/g,C=/%5B/g,A=/%5D/g,q=/%5E/g,I=/%60/g,M=/%7B/g,L=/%7C/g,T=/%7D/g,B=/%20/g;function G(e){return encodeURI(""+e).replace(L,"|").replace(C,"[").replace(A,"]")}function _(e){return G(e).replace(x,"%2B").replace(B,"+").replace(R,"%23").replace(k,"%26").replace(I,"`").replace(M,"{").replace(T,"}").replace(q,"^")}function W(e){return null==e?"":function(e){return G(e).replace(R,"%23").replace(P,"%3F")}(e).replace(S,"%2F")}function U(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}var $=/\/$/,D=function(e){return e.replace($,"")};function V(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",a={},o="",u="",i=t.indexOf("#"),c=t.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(r=t.slice(0,c),a=e(o=t.slice(c+1,i>-1?i:t.length))),i>-1&&(r=r||t.slice(0,i),u=t.slice(i,t.length)),{fullPath:(r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;var r=t.split("/"),n=e.split("/"),a=n[n.length-1];".."!==a&&"."!==a||n.push("");var o,u,i=r.length-1;for(o=0;o<n.length;o++)if("."!==(u=n[o])){if(".."!==u)break;i>1&&i--}return r.slice(0,i).join("/")+"/"+n.slice(o).join("/")}(null!=r?r:t,n))+(o&&"?")+o+u,path:r,query:a,hash:U(u)}}function F(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function K(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var r in e)if(!H(e[r],t[r]))return!1;return!0}function H(e,t){return O(e)?N(e,t):O(t)?N(t,e):e===t}function N(e,t){return O(t)?e.length===t.length&&e.every((function(e,r){return e===t[r]})):1===e.length&&e[0]===t}var Q,X,Y,Z,J={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};(X=Q||(Q={})).pop="pop",X.push="push",(Z=Y||(Y={})).back="back",Z.forward="forward",Z.unknown="";var ee=/^[^#]+#/;function te(e,t){return e.replace(ee,"#")+t}var re=function(){return{left:window.scrollX,top:window.scrollY}};function ne(e,t){return(history.state?history.state.position-t:-1)+e}var ae=new Map;var oe=function(){return location.protocol+"//"+location.host};function ue(e,t){var r=t.pathname,n=t.search,a=t.hash,o=e.indexOf("#");if(o>-1){var u=a.includes(e.slice(o))?e.slice(o).length:1,i=a.slice(u);return"/"!==i[0]&&(i="/"+i),F(i,"")}return F(r,e)+n+a}function ie(e,t,r){var n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return{back:e,current:t,forward:r,replaced:arguments.length>3&&void 0!==arguments[3]&&arguments[3],position:window.history.length,scroll:n?re():null}}function ce(e){return"string"==typeof e||"symbol"===o(e)}var le,fe,se=Symbol("");function ve(e,r){return b(new Error,t({type:e},se,!0),r)}function he(e,t){return e instanceof Error&&se in e&&(null==t||!!(e.type&t))}(fe=le||(le={}))[fe.aborted=4]="aborted",fe[fe.cancelled=8]="cancelled",fe[fe.duplicated=16]="duplicated";var pe="[^/]+?",de={sensitive:!1,strict:!1,start:!0,end:!0},me=/[.+*?^${}()[\]/\\]/g;function ge(e,t){for(var r=0;r<e.length&&r<t.length;){var n=t[r]-e[r];if(n)return n;r++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function ye(e,t){for(var r=0,n=e.score,a=t.score;r<n.length&&r<a.length;){var o=ge(n[r],a[r]);if(o)return o;r++}if(1===Math.abs(a.length-n.length)){if(be(n))return 1;if(be(a))return-1}return a.length-n.length}function be(e){var t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var we={type:0,value:""},Ee=/[a-zA-Z0-9_]/;function Oe(e,t,n){var a=function(e,t){var n,a=b({},de,t),o=[],u=a.start?"^":"",i=[],c=r(e);try{for(c.s();!(n=c.n()).done;){var l=n.value,f=l.length?[]:[90];a.strict&&!l.length&&(u+="/");for(var s=0;s<l.length;s++){var v=l[s],h=40+(a.sensitive?.25:0);if(0===v.type)s||(u+="/"),u+=v.value.replace(me,"\\$&"),h+=40;else if(1===v.type){var p=v.value,d=v.repeatable,m=v.optional,g=v.regexp;i.push({name:p,repeatable:d,optional:m});var y=g||pe;if(y!==pe){h+=10;try{new RegExp("(".concat(y,")"))}catch(k){throw new Error('Invalid custom RegExp for param "'.concat(p,'" (').concat(y,"): ")+k.message)}}var w=d?"((?:".concat(y,")(?:/(?:").concat(y,"))*)"):"(".concat(y,")");s||(w=m&&l.length<2?"(?:/".concat(w,")"):"/"+w),m&&(w+="?"),u+=w,h+=20,m&&(h+=-8),d&&(h+=-20),".*"===y&&(h+=-50)}f.push(h)}o.push(f)}}catch(k){c.e(k)}finally{c.f()}if(a.strict&&a.end){var E=o.length-1;o[E][o[E].length-1]+=.7000000000000001}a.strict||(u+="/?"),a.end?u+="$":a.strict&&!u.endsWith("/")&&(u+="(?:/|$)");var R=new RegExp(u,a.sensitive?"":"i");return{re:R,score:o,keys:i,parse:function(e){var t=e.match(R),r={};if(!t)return null;for(var n=1;n<t.length;n++){var a=t[n]||"",o=i[n-1];r[o.name]=a&&o.repeatable?a.split("/"):a}return r},stringify:function(t){var n,a="",o=!1,u=r(e);try{for(u.s();!(n=u.n()).done;){var i=n.value;o&&a.endsWith("/")||(a+="/"),o=!1;var c,l=r(i);try{for(l.s();!(c=l.n()).done;){var f=c.value;if(0===f.type)a+=f.value;else if(1===f.type){var s=f.value,v=f.repeatable,h=f.optional,p=s in t?t[s]:"";if(O(p)&&!v)throw new Error('Provided param "'.concat(s,'" is an array but it is not repeatable (* or + modifiers)'));var d=O(p)?p.join("/"):p;if(!d){if(!h)throw new Error('Missing required param "'.concat(s,'"'));i.length<2&&(a.endsWith("/")?a=a.slice(0,-1):o=!0)}a+=d}}}catch(k){l.e(k)}finally{l.f()}}}catch(k){u.e(k)}finally{u.f()}return a||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[we]];if(!e.startsWith("/"))throw new Error('Invalid path "'.concat(e,'"'));function t(e){throw new Error("ERR (".concat(n,')/"').concat(l,'": ').concat(e))}var r,n=0,a=n,o=[];function u(){r&&o.push(r),r=[]}var i,c=0,l="",f="";function s(){l&&(0===n?r.push({type:0,value:l}):1===n||2===n||3===n?(r.length>1&&("*"===i||"+"===i)&&t("A repeatable param (".concat(l,") must be alone in its segment. eg: '/:ids+.")),r.push({type:1,value:l,regexp:f,repeatable:"*"===i||"+"===i,optional:"*"===i||"?"===i})):t("Invalid state to consume buffer"),l="")}function v(){l+=i}for(;c<e.length;)if("\\"!==(i=e[c++])||2===n)switch(n){case 0:"/"===i?(l&&s(),u()):":"===i?(s(),n=1):v();break;case 4:v(),n=a;break;case 1:"("===i?n=2:Ee.test(i)?v():(s(),n=0,"*"!==i&&"?"!==i&&"+"!==i&&c--);break;case 2:")"===i?"\\"==f[f.length-1]?f=f.slice(0,-1)+i:n=3:f+=i;break;case 3:s(),n=0,"*"!==i&&"?"!==i&&"+"!==i&&c--,f="";break;default:t("Unknown state")}else a=n,n=4;return 2===n&&t('Unfinished custom RegExp for param "'.concat(l,'"')),s(),u(),o}(e.path),n),o=b(a,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Re(e,t){var n,a={},o=r(t);try{for(o.s();!(n=o.n()).done;){var u=n.value;u in e&&(a[u]=e[u])}}catch(i){o.e(i)}finally{o.f()}return a}function ke(e){var t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Se(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Se(e){var t={},r=e.props||!1;if("component"in e)t.default=r;else for(var n in e.components)t[n]="object"===o(r)?r[n]:r;return t}function je(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pe(e){return e.reduce((function(e,t){return b(e,t.meta)}),{})}function xe(e,t){var r={};for(var n in e)r[n]=n in t?t[n]:e[n];return r}function Ce(e){var t=e.record;return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ae(e){var t={};if(""===e||"?"===e)return t;for(var r=("?"===e[0]?e.slice(1):e).split("&"),n=0;n<r.length;++n){var a=r[n].replace(x," "),o=a.indexOf("="),u=U(o<0?a:a.slice(0,o)),i=o<0?null:U(a.slice(o+1));if(u in t){var c=t[u];O(c)||(c=t[u]=[c]),c.push(i)}else t[u]=i}return t}function qe(e){var t="",r=function(r){var n=e[r];if(r=_(r).replace(j,"%3D"),null==n)return void 0!==n&&(t+=(t.length?"&":"")+r),1;(O(n)?n.map((function(e){return e&&_(e)})):[n&&_(n)]).forEach((function(e){void 0!==e&&(t+=(t.length?"&":"")+r,null!=e&&(t+="="+e))}))};for(var n in e)r(n);return t}function Ie(e){var t={};for(var r in e){var n=e[r];void 0!==n&&(t[r]=O(n)?n.map((function(e){return null==e?null:""+e})):null==n?n:""+n)}return t}var Me=Symbol(""),Le=Symbol(""),Te=Symbol(""),Be=Symbol(""),Ge=Symbol("");function _e(){var e=[];return{add:function(t){return e.push(t),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}},list:function(){return e.slice()},reset:function(){e=[]}}}function We(e,t,r,n,a){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e){return e()},i=n&&(n.enterCallbacks[a]=n.enterCallbacks[a]||[]);return function(){return new Promise((function(c,l){var f=function(e){var u;!1===e?l(ve(4,{from:r,to:t})):e instanceof Error?l(e):"string"==typeof(u=e)||u&&"object"===o(u)?l(ve(2,{from:t,to:e})):(i&&n.enterCallbacks[a]===i&&"function"==typeof e&&i.push(e),c())},s=u((function(){return e.call(n&&n.instances[a],t,r,f)})),v=Promise.resolve(s);e.length<3&&(v=v.then(f)),v.catch((function(e){return l(e)}))}))}}function Ue(e,t,n,a){var o,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(e){return e()},i=[],c=r(e);try{var l=function(){var e=o.value,r=function(r){var o=e.components[r];if("beforeRouteEnter"!==t&&!e.instances[r])return 1;if(y(o)){var c=(o.__vccOpts||o)[t];c&&i.push(We(c,n,a,e,r,u))}else{var l=o();i.push((function(){return l.then((function(o){if(!o)throw new Error("Couldn't resolve component \"".concat(r,'" at "').concat(e.path,'"'));var i,c=(i=o).__esModule||"Module"===i[Symbol.toStringTag]||i.default&&y(i.default)?o.default:o;e.mods[r]=o,e.components[r]=c;var l=(c.__vccOpts||c)[t];return l&&We(l,n,a,e,r,u)()}))}))}};for(var c in e.components)r(c)};for(c.s();!(o=c.n()).done;)l()}catch(f){c.e(f)}finally{c.f()}return i}function $e(e){var t=v(Te),r=v(Be),n=h((function(){var r=i(e.to);return t.resolve(r)})),a=h((function(){var e=n.value.matched,t=e.length,a=e[t-1],o=r.matched;if(!a||!o.length)return-1;var u=o.findIndex(z.bind(null,a));if(u>-1)return u;var i=Ve(e[t-2]);return t>1&&Ve(a)===i&&o[o.length-1].path!==i?o.findIndex(z.bind(null,e[t-2])):u})),o=h((function(){return a.value>-1&&function(e,t){var r,n=function(){var r=t[a],n=e[a];if("string"==typeof r){if(r!==n)return{v:!1}}else if(!O(n)||n.length!==r.length||r.some((function(e,t){return e!==n[t]})))return{v:!1}};for(var a in t)if(r=n())return r.v;return!0}(r.params,n.value.params)})),u=h((function(){return a.value>-1&&a.value===r.matched.length-1&&K(r.params,n.value.params)}));return{route:n,href:h((function(){return n.value.href})),isActive:o,isExactActive:u,navigate:function(){if(function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})){var r=t[i(e.replace)?"replace":"push"](i(e.to)).catch(E);return e.viewTransition&&"undefined"!=typeof document&&"startViewTransition"in document&&document.startViewTransition((function(){return r})),r}return Promise.resolve()}}}var De=f({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$e,setup:function(e,r){var n=r.slots,a=s($e(e)),o=v(Te).options,u=h((function(){return t(t({},Fe(e.activeClass,o.linkActiveClass,"router-link-active"),a.isActive),Fe(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active"),a.isExactActive)}));return function(){var t,r=n.default&&(1===(t=n.default(a)).length?t[0]:t);return e.custom?r:p("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:u.value},r)}}});function Ve(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}var Fe=function(e,t,r){return null!=e?e:null!=t?t:r};function ze(e,t){if(!e)return null;var r=e(t);return 1===r.length?r[0]:r}var Ke=f({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup:function(t,r){var n=r.attrs,a=r.slots,o=v(Ge),u=h((function(){return t.route||o.value})),c=v(Le,0),l=h((function(){for(var e,t=i(c),r=u.value.matched;(e=r[t])&&!e.components;)t++;return t})),f=h((function(){return u.value.matched[l.value]}));d(Le,h((function(){return l.value+1}))),d(Me,f),d(Ge,u);var s=m();return g((function(){return[s.value,f.value,t.name]}),(function(t,r){var n=e(t,3),a=n[0],o=n[1],u=n[2],i=e(r,3),c=i[0],l=i[1];i[2];o&&(o.instances[u]=a,l&&l!==o&&a&&a===c&&(o.leaveGuards.size||(o.leaveGuards=l.leaveGuards),o.updateGuards.size||(o.updateGuards=l.updateGuards))),!a||!o||l&&z(o,l)&&c||(o.enterCallbacks[u]||[]).forEach((function(e){return e(a)}))}),{flush:"post"}),function(){var e=u.value,r=t.name,o=f.value,i=o&&o.components[r];if(!i)return ze(a.default,{Component:i,route:e});var c=o.props[r],l=c?!0===c?e.params:"function"==typeof c?c(e):c:null,v=p(i,b({},l,n,{onVnodeUnmounted:function(e){e.component.isUnmounted&&(o.instances[r]=null)},ref:s}));return ze(a.default,{Component:v,route:e})||v}}})}}}))}();

(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(t,e,n){},120:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(79),i=n.n(o),c=(n(99),n(6)),l=n(17),u=n(185),f=n(189),s=n(188),h=n(184),m=n(186),p=n(187),d=n(183),v=n(190),y=n(81),g=n.n(y),E=n(116),b=n(179),w=n(74),L=(n(121),n(80)),x=n(31);w.a.initializeApp({apiKey:"AIzaSyCSy5NUF7LaygnnEVkn5AwL2kSF3B_OrA8",authDomain:"allotment-69f1f.firebaseapp.com",projectId:"allotment-69f1f",storageBucket:"allotment-69f1f.appspot.com",messagingSenderId:"919008954878",appId:"1:919008954878:web:ed3ecbf512a1626e2658af",measurementId:"G-HCML5X2MS4"});var O=w.a.firestore(),j=Object(L.a)({apiKey:"AIzaSyCSy5NUF7LaygnnEVkn5AwL2kSF3B_OrA8",authDomain:"allotment-69f1f.firebaseapp.com",projectId:"allotment-69f1f",storageBucket:"allotment-69f1f.appspot.com",messagingSenderId:"919008954878",appId:"1:919008954878:web:ed3ecbf512a1626e2658af",measurementId:"G-HCML5X2MS4"}),S=Object(x.i)(j);function k(t){var e=t.data,n=e.id,o=e.name,i=Object(r.useState)(null),c=Object(l.a)(i,2),u=c[0],f=c[1],h=Boolean(u),m=function(){f(null)},d=Object(r.useState)(""),y=Object(l.a)(d,2),w=y[0],L=y[1];return a.a.createElement(p.a,{key:n,className:o},a.a.createElement(s.a,null,n),a.a.createElement(s.a,null,o),a.a.createElement(s.a,null,a.a.createElement("input",{type:"text",value:w,onChange:function(t){L(t.target.value)}})),a.a.createElement(s.a,null,a.a.createElement(v.a,{size:"small","aria-label":"display more actions",onClick:function(t){f(t.currentTarget)}},a.a.createElement(g.a,null)),a.a.createElement(E.a,{id:"basic-menu",anchorEl:u,open:h,onClose:m,MenuListProps:{"aria-labelledby":"basic-button"}},a.a.createElement(b.a,{onClick:m},"Edit"),a.a.createElement(b.a,{onClick:function(){return function(t){Object(x.a)(Object(x.b)(S,"gastusin",t)),m()}(n)}},"Delete"))))}var F=function(t){var e=t.data;return a.a.createElement(h.a,{component:d.a},a.a.createElement(u.a,null,a.a.createElement(m.a,null,a.a.createElement(p.a,null,a.a.createElement(s.a,null,"ID"),a.a.createElement(s.a,null,"Name"),a.a.createElement(s.a,null,"Cost"),a.a.createElement(s.a,null))),a.a.createElement(f.a,null,e&&e.map(function(t,e){return a.a.createElement(k,{data:t})}))))},I=n(108),_=n(182),C=n(181),N=n(177);function A(){A=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(F){l=function(t,e,n){return t[e]=n}}function u(t,e,n,a){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new j(a||[]);return r(i,"_invoke",{value:w(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(F){return{type:"throw",arg:F}}}t.wrap=u;var s={};function h(){}function m(){}function p(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(S([])));y&&y!==e&&n.call(y,o)&&(d=y);var g=p.prototype=h.prototype=Object.create(d);function E(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var a;r(this,"_invoke",{value:function(r,o){function i(){return new e(function(a,i){!function r(a,o,i,c){var l=f(t[a],t,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(s).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,c)})}c(l.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function w(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=f(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),s;var a=f(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,s;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=p,r(g,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:m,configurable:!0}),m.displayName=l(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},E(b.prototype),l(b.prototype,i,function(){return this}),t.AsyncIterator=b,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(g),l(g,c,"Generator"),l(g,o,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var G=O.collection("gastusin").withConverter({toFirestore:function(t){return{name:t.name}},fromFirestore:function(t,e){var n=t.data(e);return{id:t.id,name:n.name}}}),P=G.orderBy("name").limit(69),T=function(){var t=Object(r.useState)(""),e=Object(l.a)(t,2),n=e[0],o=e[1],i=function(){var t=Object(c.a)(A().mark(function t(e){return A().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,G.add({name:n});case 3:o("");case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,a.a.createElement(C.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"}},a.a.createElement(C.a,{component:"form",onSubmit:i,sx:{mt:1}},a.a.createElement(N.a,{fullWidth:!0,id:"field-gastos-name",label:"Gastusin",variant:"outlined",value:n,onChange:function(t){return o(t.target.value)}}),a.a.createElement(_.a,{sx:{mt:3,mb:2},fullWidth:!0,type:"submit",disabled:!n,variant:"contained",color:"secondary"},"Add"))))},B=function(){var t=Object(I.a)(P),e=Object(l.a)(t,3),n=e[0];e[1],e[2];return console.log(n),a.a.createElement(a.a.Fragment,null,a.a.createElement(T,null),a.a.createElement(F,{data:n}))};n(114);var D=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Allotment"),a.a.createElement(B,null))},M=function(t){t&&t instanceof Function&&n.e(1).then(n.bind(null,176)).then(function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),o(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(D,null))),M()},92:function(t,e,n){t.exports=n(120)},99:function(t,e,n){}},[[92,3,2]]]);
//# sourceMappingURL=main.8c6316ce.chunk.js.map
/*! For license information please see main.3334cae9.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[2],{42:function(t,e,n){"use strict";(function(t){var r=n(8),o=n.n(r),i=n(24);function a(){return s.call(this),null}function s(){var e,r,o,i,a,s,c,u,l,p,d,h,g,f,m,w,v,b,y,x,k,L,O,j,T,S,E,R,q,P,M,W,A,C,N,_,B,F,U,I,D,X,z,H,G,J,V,$,K=[].slice,Q={}.hasOwnProperty,Y=function(t,e){function n(){this.constructor=t}for(var r in e)Q.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},Z=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};for(k={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},q=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},M=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,x=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==M&&(M=function(t){return setTimeout(t,50)},x=function(t){return clearTimeout(t)}),A=function(t){var e,n;return e=q(),(n=function(){var r;return(r=q()-e)>=33?(e=q(),t(r,(function(){return M(n)}))):setTimeout(n,33-r)})()},W=function(){var t,e,n;return n=arguments[0],e=arguments[1],t=3<=arguments.length?K.call(arguments,2):[],"function"==typeof n[e]?n[e].apply(n,t):n[e]},L=function(){var t,e,n,r,o,i,a;for(e=arguments[0],i=0,a=(r=2<=arguments.length?K.call(arguments,1):[]).length;a>i;i++)if(n=r[i])for(t in n)Q.call(n,t)&&(o=n[t],null!=e[t]&&"object"==typeof e[t]&&null!=o&&"object"==typeof o?L(e[t],o):e[t]=o);return e},v=function(t){var e,n,r,o,i;for(n=e=0,o=0,i=t.length;i>o;o++)r=t[o],n+=Math.abs(r),e++;return n/e},j=function(t,e){var n,r,o;if(null==t&&(t="options"),null==e&&(e=!0),o=document.querySelector("[data-pace-"+t+"]")){if(n=o.getAttribute("data-pace-"+t),!e)return n;try{return JSON.parse(n)}catch(s){return r=s,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",r):void 0}}},c=function(){function t(){}return t.prototype.on=function(t,e,n,r){var o;return null==r&&(r=!1),null==this.bindings&&(this.bindings={}),null==(o=this.bindings)[t]&&(o[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:r})},t.prototype.once=function(t,e,n){return this.on(t,e,n,!0)},t.prototype.off=function(t,e){var n,r,o;if(null!=(null!=(r=this.bindings)?r[t]:void 0)){if(null==e)return delete this.bindings[t];for(n=0,o=[];n<this.bindings[t].length;)o.push(this.bindings[t][n].handler===e?this.bindings[t].splice(n,1):n++);return o}},t.prototype.trigger=function(){var t,e,n,r,o,i,a,s,c;if(n=arguments[0],t=2<=arguments.length?K.call(arguments,1):[],null!=(a=this.bindings)?a[n]:void 0){for(o=0,c=[];o<this.bindings[n].length;)r=(s=this.bindings[n][o]).handler,e=s.ctx,i=s.once,r.apply(null!=e?e:this,t),c.push(i?this.bindings[n].splice(o,1):o++);return c}},t}(),p=window.Pace||{},window.Pace=p,L(p,c.prototype),P=p.options=L({},k,window.paceOptions,j()),z=0,G=(V=["ajax","document","eventLag","elements"]).length;G>z;z++)!0===P[B=V[z]]&&(P[B]=k[B]);l=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return Y(e,t),e}(Error),r=function(){function t(){this.progress=0}return t.prototype.getElement=function(){var t;if(null==this.el){if(!(t=document.querySelector(P.target)))throw new l;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=t.firstChild?t.insertBefore(this.el,t.firstChild):t.appendChild(this.el)}return this.el},t.prototype.finish=function(){var t;return(t=this.getElement()).className=t.className.replace("pace-active",""),t.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},t.prototype.update=function(t){return this.progress=t,this.render()},t.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(t){l=t}return this.el=void 0},t.prototype.render=function(){var t,e,n,r,o,i,a;if(null==document.querySelector(P.target))return!1;for(t=this.getElement(),r="translate3d("+this.progress+"%, 0, 0)",o=0,i=(a=["webkitTransform","msTransform","transform"]).length;i>o;o++)e=a[o],t.children[0].style[e]=r;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(t.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),this.progress>=100?n="99":(n=this.progress<10?"0":"",n+=0|this.progress),t.children[0].setAttribute("data-progress",""+n)),this.lastRenderedProgress=this.progress},t.prototype.done=function(){return this.progress>=100},t}(),u=function(){function t(){this.bindings={}}return t.prototype.trigger=function(t,e){var n,r,o,i,a;if(null!=this.bindings[t]){for(a=[],r=0,o=(i=this.bindings[t]).length;o>r;r++)n=i[r],a.push(n.call(this,e));return a}},t.prototype.on=function(t,e){var n;return null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push(e)},t}(),X=window.XMLHttpRequest,D=window.XDomainRequest,I=window.WebSocket,O=function(t,e){var n,r,o;for(n in o=[],e.prototype)try{r=e.prototype[n],o.push(null==t[n]&&"function"!=typeof r?t[n]=r:void 0)}catch(c){c}return o},E=[],p.ignore=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?K.call(arguments,1):[],E.unshift("ignore"),n=e.apply(null,t),E.shift(),n},p.track=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?K.call(arguments,1):[],E.unshift("track"),n=e.apply(null,t),E.shift(),n},_=function(t){var e;if(null==t&&(t="GET"),"track"===E[0])return"force";if(!E.length&&P.ajax){if("socket"===t&&P.ajax.trackWebSockets)return!0;if(e=t.toUpperCase(),Z.call(P.ajax.trackMethods,e)>=0)return!0}return!1},d=function(t){function e(){var t,n=this;e.__super__.constructor.apply(this,arguments),t=function(t){var e;return e=t.open,t.open=function(r,o){return _(r)&&n.trigger("request",{type:r,url:o,request:t}),e.apply(t,arguments)}},window.XMLHttpRequest=function(e){var n;return n=new X(e),t(n),n};try{O(window.XMLHttpRequest,X)}catch(i){}if(null!=D){window.XDomainRequest=function(){var e;return e=new D,t(e),e};try{O(window.XDomainRequest,D)}catch(i){}}if(null!=I&&P.ajax.trackWebSockets){window.WebSocket=function(t,e){var r;return r=null!=e?new I(t,e):new I(t),_("socket")&&n.trigger("request",{type:"socket",url:t,protocols:e,request:r}),r};try{O(window.WebSocket,I)}catch(i){}}}return Y(e,t),e}(u),H=null,N=function(t){var e,n,r,o;for(n=0,r=(o=P.ajax.ignoreURLs).length;r>n;n++)if("string"==typeof(e=o[n])){if(-1!==t.indexOf(e))return!0}else if(e.test(t))return!0;return!1},(T=function(){return null==H&&(H=new d),H})().on("request",(function(t){var n,r,o,i,a;return i=t.type,o=t.request,a=t.url,N(a)||p.running||!1===P.restartOnRequestAfter&&"force"!==_(i)?void 0:(r=arguments,"boolean"==typeof(n=P.restartOnRequestAfter||0)&&(n=0),setTimeout((function(){var t,n,a,s,c;if("socket"===i?o.readyState<2:0<(a=o.readyState)&&4>a){for(p.restart(),c=[],t=0,n=(s=p.sources).length;n>t;t++){if((B=s[t])instanceof e){B.watch.apply(B,r);break}c.push(void 0)}return c}}),n))})),e=function(){function t(){var t=this;this.elements=[],T().on("request",(function(){return t.watch.apply(t,arguments)}))}return t.prototype.watch=function(t){var e,n,r,o;return r=t.type,e=t.request,o=t.url,N(o)?void 0:(n="socket"===r?new f(e):new m(e),this.elements.push(n))},t}(),m=function(t){var e,n,r,o,i,a=this;if(this.progress=0,null!=window.ProgressEvent)for(t.addEventListener("progress",(function(t){return a.progress=t.lengthComputable?100*t.loaded/t.total:a.progress+(100-a.progress)/2}),!1),n=0,r=(i=["load","abort","timeout","error"]).length;r>n;n++)e=i[n],t.addEventListener(e,(function(){return a.progress=100}),!1);else o=t.onreadystatechange,t.onreadystatechange=function(){var e;return 0===(e=t.readyState)||4===e?a.progress=100:3===t.readyState&&(a.progress=50),"function"==typeof o?o.apply(null,arguments):void 0}},f=function(t){var e,n,r,o,i=this;for(this.progress=0,n=0,r=(o=["error","open"]).length;r>n;n++)e=o[n],t.addEventListener(e,(function(){return i.progress=100}),!1)},i=function(t){var e,n,r,o;for(null==t&&(t={}),this.elements=[],null==t.selectors&&(t.selectors=[]),n=0,r=(o=t.selectors).length;r>n;n++)e=o[n],this.elements.push(new a(e))},a=function(){function t(t){this.selector=t,this.progress=0,this.check()}return t.prototype.check=function(){var t=this;return document.querySelector(this.selector)?this.done():setTimeout((function(){return t.check()}),P.elements.checkInterval)},t.prototype.done=function(){return this.progress=100},t}(),o=function(){function t(){var t,e,n=this;this.progress=null!=(e=this.states[document.readyState])?e:100,t=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof t?t.apply(null,arguments):void 0}}return t.prototype.states={loading:0,interactive:50,complete:100},t}(),s=function(){var t,e,n,r,o,i=this;this.progress=0,t=0,o=[],r=0,n=q(),e=setInterval((function(){var a;return a=q()-n-50,n=q(),o.push(a),o.length>P.eventLag.sampleCount&&o.shift(),t=v(o),++r>=P.eventLag.minSamples&&t<P.eventLag.lagThreshold?(i.progress=100,clearInterval(e)):i.progress=3/(t+3)*100}),50)},g=function(){function t(t){this.source=t,this.last=this.sinceLastUpdate=0,this.rate=P.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=W(this.source,"progress"))}return t.prototype.tick=function(t,e){var n;return null==e&&(e=W(this.source,"progress")),e>=100&&(this.done=!0),e===this.last?this.sinceLastUpdate+=t:(this.sinceLastUpdate&&(this.rate=(e-this.last)/this.sinceLastUpdate),this.catchup=(e-this.progress)/P.catchupTime,this.sinceLastUpdate=0,this.last=e),e>this.progress&&(this.progress+=this.catchup*t),n=1-Math.pow(this.progress/100,P.easeFactor),this.progress+=n*this.rate*t,this.progress=Math.min(this.lastProgress+P.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},t}(),F=null,C=null,b=null,U=null,w=null,y=null,p.running=!1,S=function(){return P.restartOnPushState?p.restart():void 0},null!=window.history.pushState&&(J=window.history.pushState,window.history.pushState=function(){return S(),J.apply(window.history,arguments)}),null!=window.history.replaceState&&($=window.history.replaceState,window.history.replaceState=function(){return S(),$.apply(window.history,arguments)}),h={ajax:e,elements:i,document:o,eventLag:s},(R=function(){var t,e,n,o,i,a,s,c;for(p.sources=F=[],e=0,o=(a=["ajax","elements","document","eventLag"]).length;o>e;e++)!1!==P[t=a[e]]&&F.push(new h[t](P[t]));for(n=0,i=(c=null!=(s=P.extraSources)?s:[]).length;i>n;n++)B=c[n],F.push(new B(P));return p.bar=b=new r,C=[],U=new g})(),p.stop=function(){return p.trigger("stop"),p.running=!1,b.destroy(),y=!0,null!=w&&("function"==typeof x&&x(w),w=null),R()},p.restart=function(){return p.trigger("restart"),p.stop(),p.start()},p.go=function(){var t;return p.running=!0,b.render(),t=q(),y=!1,w=A((function(e,n){var r,o,i,a,s,c,u,l,d,h,f,m,w,v,x;for(100-b.progress,o=h=0,i=!0,c=f=0,w=F.length;w>f;c=++f)for(B=F[c],d=null!=C[c]?C[c]:C[c]=[],u=m=0,v=(s=null!=(x=B.elements)?x:[B]).length;v>m;u=++m)a=s[u],i&=(l=null!=d[u]?d[u]:d[u]=new g(a)).done,l.done||(o++,h+=l.tick(e));return r=h/o,b.update(U.tick(e,r)),b.done()||i||y?(b.update(100),p.trigger("done"),setTimeout((function(){return b.finish(),p.running=!1,p.trigger("hide")}),Math.max(P.ghostTime,Math.max(P.minTime-(q()-t),0)))):n()}))},p.start=function(t){L(P,t),p.running=!0;try{b.render()}catch(r){l=r}return document.querySelector(".pace")?(p.trigger("start"),p.go()):setTimeout(p.start,50)},"function"==typeof define&&n(55)?define((function(){return p})):"object"==typeof exports?t.exports=p:P.startOnPageLoad&&p.start()}a.propTypes={color:o.a.string.isRequired},e.a=Object(i.a)({"@global":{".pace":{pointerEvents:"none",userSelect:"none"},".pace-inactive":{display:"none"},".pace .pace-progress":{background:function(t){return t.color||null},position:"fixed",zIndex:2e3,top:0,right:"100%",width:"100%",height:3}}})(a),window.paceOptions={ajax:{trackMethods:["GET","POST"]}}}).call(this,n(52)(t))},46:function(t,e,n){t.exports=n(57)},57:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(27),a=n.n(i),s=n(73),c=n(74),u=n(28),l=n(2),p=n(3),d=n(44),h=n(76),g="rgba(0, 0, 0, 0.13)",f=Object(d.a)({palette:{primary:{main:"#9ea029"},secondary:{main:"#8f76e2"},common:{black:"#343a40",darkBlack:"rgb(36, 40, 44)"},warning:{light:"rgba(253, 200, 69, .3)",main:"rgba(253, 200, 69, .5)",dark:"rgba(253, 200, 69, .7)"},tonalOffset:.2,background:{default:"#f5f5f5"},spacing:8},breakpoints:{values:{xl:1920,lg:1280,md:960,sm:600,xs:0}},border:{borderColor:g,borderWidth:2},overrides:{MuiExpansionPanel:{root:{position:"static"}},MuiTableCell:{root:Object(p.a)({paddingLeft:16,paddingRight:16,borderBottom:"".concat(2,"px solid ").concat(g)},"@media (max-width:  ".concat(600,"px)"),{paddingLeft:8,paddingRight:8})},MuiDivider:{root:{backgroundColor:g,height:2}},MuiPrivateNotchedOutline:{root:{borderWidth:2}},MuiListItem:{divider:{borderBottom:"".concat(2,"px solid ").concat(g)}},MuiDialog:{paper:{width:"100%",maxWidth:430,marginLeft:8,marginRight:8}},MuiTooltip:{tooltip:{backgroundColor:"rgb(36, 40, 44)"}},MuiExpansionPanelDetails:{root:Object(p.a)({},"@media (max-width:  ".concat(600,"px)"),{paddingLeft:8,paddingRight:8})}},typography:{useNextVariants:!0}}),m=Object(h.a)(f),w=n(24);var v=Object(w.a)((function(t){var e,n,r,o,i;return{"@global":{"*:focus":{outline:0},".text-white":{color:t.palette.common.white},".listItemLeftPadding":(e={paddingTop:"".concat(t.spacing(1.75),"px !important"),paddingBottom:"".concat(t.spacing(1.75),"px !important"),paddingLeft:"".concat(t.spacing(4),"px !important")},Object(p.a)(e,t.breakpoints.down("sm"),{paddingLeft:"".concat(t.spacing(4),"px !important")}),Object(p.a)(e,"@media (max-width:  420px)",{paddingLeft:"".concat(t.spacing(1),"px !important")}),e),".container":(n={width:"100%",paddingRight:t.spacing(4),paddingLeft:t.spacing(4),marginRight:"auto",marginLeft:"auto"},Object(p.a)(n,t.breakpoints.up("sm"),{maxWidth:540}),Object(p.a)(n,t.breakpoints.up("md"),{maxWidth:720}),Object(p.a)(n,t.breakpoints.up("lg"),{maxWidth:1170}),n),".row":{display:"flex",flexWrap:"wrap",marginRight:-t.spacing(2),marginLeft:-t.spacing(2)},".container-fluid":{width:"100%",paddingRight:t.spacing(2),paddingLeft:t.spacing(2),marginRight:"auto",marginLeft:"auto",maxWidth:1370},".lg-mg-top":(r={marginTop:"".concat(t.spacing(20),"px !important")},Object(p.a)(r,t.breakpoints.down("md"),{marginTop:"".concat(t.spacing(18),"px !important")}),Object(p.a)(r,t.breakpoints.down("sm"),{marginTop:"".concat(t.spacing(16),"px !important")}),Object(p.a)(r,t.breakpoints.down("xs"),{marginTop:"".concat(t.spacing(14),"px !important")}),r),".lg-mg-bottom":(o={marginBottom:"".concat(t.spacing(20),"px !important")},Object(p.a)(o,t.breakpoints.down("md"),{marginBottom:"".concat(t.spacing(18),"px !important")}),Object(p.a)(o,t.breakpoints.down("sm"),{marginBottom:"".concat(t.spacing(16),"px !important")}),Object(p.a)(o,t.breakpoints.down("xs"),{marginBottom:"".concat(t.spacing(14),"px !important")}),o),".lg-p-top":(i={paddingTop:"".concat(t.spacing(20),"px !important")},Object(p.a)(i,t.breakpoints.down("md"),{paddingTop:"".concat(t.spacing(18),"px !important")}),Object(p.a)(i,t.breakpoints.down("sm"),{paddingTop:"".concat(t.spacing(16),"px !important")}),Object(p.a)(i,t.breakpoints.down("xs"),{paddingTop:"".concat(t.spacing(14),"px !important")}),i)}}}),{withTheme:!0})((function(){return null})),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var x=n(42),k=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(6),n.e(8)]).then(n.bind(null,678))})),L=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7),n.e(10)]).then(n.bind(null,679))}));!function(t){if("serviceWorker"in navigator){if(new URL("/homeslice-ref",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/homeslice-ref","/service-worker.js");b?(!function(t,e){fetch(t).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):y(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):y(e,t)}))}}();var O=function(){return o.a.createElement(u.a,null,o.a.createElement(s.a,{theme:m},o.a.createElement(c.a,null),o.a.createElement(v,null),o.a.createElement(x.a,{color:m.palette.primary.light}),o.a.createElement(r.Suspense,{fallback:o.a.createElement(r.Fragment,null)},o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/c"},o.a.createElement(k,null)),o.a.createElement(l.a,null,o.a.createElement(L,null))))))};a.a.render(o.a.createElement(O,null),document.getElementById("root"))}},[[46,3,5]]]);
//# sourceMappingURL=main.3334cae9.chunk.js.map
(function(e){function t(t){for(var r,c,s=t[0],a=t[1],u=t[2],l=0,d=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);A&&A(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},i=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6c44055d","chunk-2d0c9189":"4312ce11","chunk-2d0cf391":"1c4b4848","chunk-2d0da8f3":"f59eb4b6","chunk-2d22523a":"c0744dc4"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=c(e);var u=new Error;i=function(t){a.onerror=a.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/versou/",s.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var A=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0a2d":function(e,t,n){"use strict";n("f244")},1597:function(e,t,n){},1858:function(e,t,n){"use strict";n("c843")},"1e14":function(e,t,n){"use strict";n("1597")},"29f3":function(e,t,n){"use strict";n("b088")},"472f":function(e,t,n){},4799:function(e,t,n){"use strict";n("472f")},b088:function(e,t,n){},c843:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r=n("7a23");function o(e,t,n,o,i,c){const s=Object(r["A"])("Header"),a=Object(r["A"])("router-view");return Object(r["s"])(),Object(r["d"])(r["a"],null,[Object(r["h"])(s,{class:"header"}),Object(r["h"])(a)],64)}const i=Object(r["F"])("data-v-51f2c682");Object(r["w"])("data-v-51f2c682");const c={class:"header"},s={class:"settings"},a={class:"actions"},u={class:"menu"};Object(r["t"])();const l=i((e,t,n,o,i,l)=>{const A=Object(r["A"])("Menu"),d=Object(r["A"])("Notification");return Object(r["s"])(),Object(r["d"])("div",c,[Object(r["h"])("div",s,[Object(r["h"])("button",{onClick:t[1]||(t[1]=(...t)=>e.buttonSettings&&e.buttonSettings(...t))}," ! ")]),Object(r["h"])("div",a,[Object(r["h"])("button",{onClick:t[2]||(t[2]=(...t)=>e.buttonActions&&e.buttonActions(...t))}," > ")]),Object(r["h"])("div",u,[Object(r["h"])("button",{onClick:t[3]||(t[3]=(...t)=>e.buttonMenu&&e.buttonMenu(...t))}," ? ")]),Object(r["h"])(A,{items:e.list,onClick:e.menuSelection},null,8,["items","onClick"]),Object(r["h"])(d)])});var A=n("9ab4");const d=Object(r["x"])({openMenu:"",notificationSettings:{hardware:!0,vibrate:!0},notification:{title:"",message:"",type:"info",active:!1},geolocSettings:{refreshTime:3e4,highPrecision:!0,isRecording:!1},currentPath:{name:"",path:[],startTime:0,pauseDuration:0},mapSettings:{layer:"openStreetMap",iconPosition:"trekker"}});var b=d,p=n("ce1f");const f=Object(r["F"])("data-v-38068c38"),g=f((e,t,n,o,i,c)=>(Object(r["s"])(),Object(r["d"])("div",{class:["menu",{hidden:e.isEmpty}]},[(Object(r["s"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(e.items,t=>(Object(r["s"])(),Object(r["d"])("div",{key:t.id,class:["menu__item",{disabled:!!t.disabled}],onClick:n=>e.onClick(t)},Object(r["C"])(t.label),11,["onClick"]))),128))],2)));let h=class extends p["b"]{constructor(){super(...arguments),this.items=[]}get isEmpty(){return 0===this.items.length}onClick(e){e.disabled||("function"===typeof e.callback&&e.callback(),this.$emit("click",e.id))}};h=Object(A["a"])([Object(p["a"])({props:{items:{type:Array,required:!0}}})],h);var m=h;n("1858");m.render=g,m.__scopeId="data-v-38068c38";var O=m;const j=Object(r["F"])("data-v-6ecd2727");Object(r["w"])("data-v-6ecd2727");const y={key:0};Object(r["t"])();const v=j((e,t,n,o,i,c)=>(Object(r["s"])(),Object(r["d"])("div",{class:["notification",{hidden:!e.isActive,info:"info"===e.type,success:"success"===e.type,warning:"warning"===e.type,error:"error"===e.type}],onClick:t[1]||(t[1]=(...t)=>e.onClick&&e.onClick(...t))},[e.title?(Object(r["s"])(),Object(r["d"])("header",y,Object(r["C"])(e.title),1)):Object(r["e"])("",!0),Object(r["g"])(" "+Object(r["C"])(e.message),1)],2)));let w=class extends p["b"]{constructor(){super(...arguments),this.time=Date.now()}get isActive(){return b.notification.active}get title(){return b.notification.title}get message(){return b.notification.message}get type(){return b.notification.type}onClick(){b.notification.active=!1}};w=Object(A["a"])([Object(p["a"])({props:{}})],w);var P=w;n("1e14");P.render=v,P.__scopeId="data-v-6ecd2727";var L=P;const S=new Map([[" ","/"],["-","/"],["_","/"],["**SOS**","...---..."],["**OVER**","-.-"],["**ROGER**",".-."],["**STARTMESSAGE**",".-.-"],["**ENDMESSAGE**",".-.-."],["**WAIT**",".-..."],["**BREAK**","-...-"],["**ERROR**","........"],["**SLOW**","....-.."],["**REPEAT**","..--.."],["**CORRECT**","-.-."],["**NEGATIVE**","-."],["A",".-"],["B","-..."],["C","-.-."],["D","-.."],["E","."],["F","..-."],["G","--."],["H","...."],["I",".."],["J",".---"],["K","-.-"],["L",".-.."],["M","--"],["N","-."],["O","---"],["P",".--."],["Q","--.-"],["R",".-."],["S","..."],["T","-"],["U","..-"],["V","...-"],["W",".--"],["X","-..-"],["Y","-.--"],["Z","--.."],["0","-----"],["1",".----"],["2","..---"],["3","...--"],["4","....-"],["5","....."],["6","-...."],["7","--..."],["8","---.."],["9","----."]]);var C=function(e){const t=e.toUpperCase().split(/(\*{2}\w+\*{2})/),n=t.map(e=>S.get(e)||"/").join(" ").replace(/^[ /]+|[ /]+$/g,"").replace(/ +/g," ").replace(/( *\/+ *)+/g,"/");return n};function k(e,t=100){const n=t/4,r=t/4,o=3*t/4,i=3*t/4,c=new Map([[".",r],["-",o],[" ",n],["/",i]]),s=Array.from(e).map(e=>c.get(e)||0);return s}const M=b.notificationSettings;let R=0;function E(e="**WAIT**"){if(!M.vibrate||!e)return!1;const t=C(e),n=k(t);return navigator.vibrate(n)}async function B(){const e=await Notification.requestPermission();return"denied"===e&&(M.hardware=!1),e}async function T(e,t={}){if(!M.hardware)return;const{title:n="",vibrationMessage:r=""}=t;if("granted"!==Notification.permission){const e=await B();if("denied"===e)return}E(r);const o=n?"Versou: "+n:"Versou";return new Notification(o,{body:e})}var z=function(e,t={}){const{important:n=!1,vibrationMessage:r,type:o="info",delay:i=5e3,title:c=""}=t;n?T(e,t):r&&E(r),clearTimeout(R),b.notification={title:c,message:e,type:o,active:!0},R=setTimeout(()=>{b.notification.active=!1},i)};let I=0,V=0,G=0;const x=3,D=console,W="Vous devez autoriser la géolocalisation pour enregistrer votre position.",Y="Une erreur est survenue pour récupérer les coordonées.",H="Nouvel essai ...";function N(e,t){const n=b.currentPath,r=Date.now();D.log("timestamp",t,"Date.now()",r);const o=r-n.startTime-n.pauseDuration,i={...e,relativeTime:o};n.path.push(i)}function U(e){const t=b.geolocSettings,n="number"===typeof e?e:t.refreshTime;V=setTimeout(X,n)}function Q(e){const t=e.coords;G=0;const n=e=>"number"===typeof e?e:NaN;N({lat:t.latitude,lng:t.longitude,accuracy:t.accuracy,alt:n(t.altitude),altAccuracy:n(t.altitudeAccuracy),heading:n(t.heading),speed:n(t.speed)},e.timestamp),U()}function K(e){const t=b.geolocSettings;let n,r;const o=()=>{G++,G>=x?(J(),n=Y,r=e.message):(z(H,{title:Y,type:"warning",important:!1,delay:1e4}),U(10))};switch(e.code){case e.PERMISSION_DENIED:J(),n=W,r=e.message;break;case e.POSITION_UNAVAILABLE:0===G&&t.highPrecision&&(t.highPrecision=!1),o();break;case e.TIMEOUT:o();break;default:J(),n=Y,r=e.message}r&&z(r,{title:n,type:"error",important:!0,vibrationMessage:"**ERROR**",delay:15e3})}function X(){const e=b.geolocSettings;clearTimeout(V);const t={enableHighAccuracy:e.highPrecision};navigator.geolocation.getCurrentPosition(Q,K,t)}function J(){clearTimeout(V),0===I&&(I=Date.now())}function Z(){b.currentPath={name:"",path:[],startTime:Date.now(),pauseDuration:0},clearTimeout(V),b.geolocSettings.isRecording=!0,X()}const F="Démarrer la randonée",q="Configuration";let _=class extends p["b"]{get settingsList(){const e=[];return e.push({label:F,id:"start",disabled:this.isRecording}),e}get menuList(){const e=[];return e.push({label:q,id:"settings"}),e}get isRecording(){return b.geolocSettings.isRecording}get list(){const e=b.openMenu,t=this.settingsList,n=this.menuList;return"settings"===e?t:"menu"===e?n:[]}buttonSettings(){b.openMenu="settings"}buttonActions(){Z()}buttonMenu(){b.openMenu="menu"}menuSelection(e){switch(e){case"start":Z();break;case"settings":z("Not implemented yet",{type:"error"});break}}};_=Object(A["a"])([Object(p["a"])({components:{Menu:O,Notification:L}})],_);var $=_;n("29f3");$.render=l,$.__scopeId="data-v-51f2c682";var ee=$,te={components:{Header:ee}};n("4799");te.render=o;var ne=te,re=n("6c02");const oe={class:"home"};function ie(e,t,n,o,i,c){const s=Object(r["A"])("Leaflet");return Object(r["s"])(),Object(r["d"])("div",oe,[Object(r["h"])(s)])}const ce=Object(r["F"])("data-v-3e0105d2");Object(r["w"])("data-v-3e0105d2");const se={class:"leaflet-map-container"},ae={class:"leaflet-map",ref:"leaflet"},ue={key:0,class:"actions"};Object(r["t"])();const le=ce((e,t,n,o,i,c)=>{const s=Object(r["A"])("LTileLayer"),a=Object(r["A"])("LIcon"),u=Object(r["A"])("LTooltip"),l=Object(r["A"])("LMarker"),A=Object(r["A"])("LPolyline"),d=Object(r["A"])("LMap");return Object(r["s"])(),Object(r["d"])("div",se,[Object(r["h"])("div",ae,[Object(r["h"])(d,{class:"leaflet-map",zoom:e.zoom,"onUpdate:zoom":t[1]||(t[1]=t=>e.zoom=t),center:e.center,"onUpdate:center":t[2]||(t[2]=t=>e.center=t),onDragend:e.onmove},{default:ce(()=>["satellite"===e.layerName?(Object(r["s"])(),Object(r["d"])(s,{key:0,url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'",attribution:"Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"})):(Object(r["s"])(),Object(r["d"])(s,{key:1,url:e.layer.url,maxZoom:e.layer.maxZoom,attribution:e.layer.attribution},null,8,["url","maxZoom","attribution"])),e.currentPosition?(Object(r["s"])(),Object(r["d"])(l,{key:2,"lat-lng":e.currentPosition},{default:ce(()=>[Object(r["h"])(a,{"icon-url":e.currentPositionIcon},null,8,["icon-url"]),Object(r["h"])(u,null,{default:ce(()=>[Object(r["g"])(Object(r["C"])(e.textPosition),1)]),_:1})]),_:1},8,["lat-lng"])):Object(r["e"])("",!0),Object(r["h"])(A,{"lat-lngs":e.currentPath,color:"green"},null,8,["lat-lngs"])]),_:1},8,["zoom","center","onDragend"])],512),e.canCenter?(Object(r["s"])(),Object(r["d"])("div",ue,[Object(r["h"])("button",{onClick:t[3]||(t[3]=(...t)=>e.recenter&&e.recenter(...t)),title:e.textCenterTitle},Object(r["C"])(e.textCenter),9,["title"])])):Object(r["e"])("",!0)])}),Ae=new Map;Ae.set("openStreetMap",{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});const de=new Map;de.set("trekker","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"),de.set("trekkerWithoutBorder","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");var be=n("5afd");n("6cc5");const pe="Votre position actuelle",fe="Recentrer et suivre votre position",ge="Recentrer",{LMap:he,LIcon:me,LTileLayer:Oe,LMarker:je,LControlLayers:ye,LTooltip:ve,LPopup:we,LPolyline:Pe,LPolygon:Le,LRectangle:Se}=be;let Ce=class extends p["b"]{constructor(){super(...arguments),this.center=[46.5,2.4],this.zoom=6,this.followCenter=!0}get textPosition(){return pe}get textCenter(){return ge}get texCenterTitle(){return fe}get currentPositionIcon(){const e=b.mapSettings.iconPosition,t=de.get(e);if(t)return"data:image/png;base64,"+t}get layerName(){return b.mapSettings.layer}get layer(){const e=this.layerName;let t=Ae.get(e);return t||(t=Ae.get("openStreetMap")),t}get recordedPath(){return b.currentPath.path}get currentPath(){const e=this.recordedPath;return e.map(e=>[e.lat,e.lng])}get currentPosition(){const e=this.currentPath,t=e.length;if(!t)return;const n=t-1;return e[n]}get canCenter(){return!this.followCenter&&!!this.currentPosition}onmove(){this.followCenter=!1}setSize(){const e=this.$refs.leaflet,t=e.parentElement;if(!t)return;const n=t.getBoundingClientRect(),r=n.height;e.style.height=r+"px"}recenter(){this.followCenter=!0,this.currentPosition&&(this.center=this.currentPosition)}log(e){const t=console;t.log(e)}mounted(){this.setSize(),this.wlistener||(this.wlistener=()=>this.setSize(),window.addEventListener("resize",this.wlistener))}destroyed(){this.wlistener&&window.removeEventListener("resize",this.wlistener)}};Ce=Object(A["a"])([Object(p["a"])({components:{LMap:he,LIcon:me,LTileLayer:Oe,LMarker:je,LControlLayers:ye,LTooltip:ve,LPopup:we,LPolyline:Pe,LPolygon:Le,LRectangle:Se},watch:{currentPosition(){this.followCenter&&(this.center=this.currentPosition)}}})],Ce);var ke=Ce;n("0a2d");ke.render=le,ke.__scopeId="data-v-3e0105d2";var Me=ke;let Re=class extends p["b"]{};Re=Object(A["a"])([Object(p["a"])({components:{Leaflet:Me}})],Re);var Ee=Re;Ee.render=ie;var Be=Ee;const Te=[{path:"/",name:"Home",component:Be},{path:"/about",name:"About",component:()=>n.e("about").then(n.bind(null,"f820"))},{path:"/:catchAll(.*)",redirect:"/"}],ze=Object(re["a"])({history:Object(re["b"])("/versou/"),routes:Te});var Ie=ze;Object(r["c"])(ne).use(Ie).mount("#app")},f244:function(e,t,n){}});
//# sourceMappingURL=app.d78e1305.js.map
(function(e){function t(t){for(var r,o,a=t[0],s=t[1],u=t[2],l=0,A=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&A.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(A.length)A.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},c={app:0},i=[];function a(e){return s.p+"js/"+({about:"about",geloc:"geloc"}[e]||e)+"."+{about:"fb8b4cbd","chunk-2d0c9189":"4312ce11","chunk-2d0cf391":"1c4b4848","chunk-2d0da8f3":"f59eb4b6","chunk-2d22523a":"c0744dc4",geloc:"44fb1d96"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={geloc:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",geloc:"geloc"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d0c9189":"31d6cfe0","chunk-2d0cf391":"31d6cfe0","chunk-2d0da8f3":"31d6cfe0","chunk-2d22523a":"31d6cfe0",geloc:"a135c9fe"}[e]+".css",c=s.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var u=i[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===c))return t()}var A=document.getElementsByTagName("style");for(a=0;a<A.length;a++){u=A[a],l=u.getAttribute("data-href");if(l===r||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(e);var A=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;A.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",A.name="ChunkLoadError",A.type=r,A.request=o,n[1](A)}c[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/versou/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var A=0;A<u.length;A++)t(u[A]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"084e":function(e,t,n){"use strict";var r=n("7a23");const o=Object(r["x"])({openMenu:"",notificationSettings:{hardware:!0,vibrate:!0},notification:{title:"",message:"",type:"info",active:!1},geolocSettings:{refreshTime:3e4,highPrecision:!0,isRecording:!1},currentPath:{name:"",path:[],startTime:0,pauseDuration:0},mapSettings:{layer:"Openstreetmap",iconPosition:"trekker"}});t["a"]=o},"0cb0":function(e,t,n){},1597:function(e,t,n){},"1e14":function(e,t,n){"use strict";n("1597")},"20d4":function(e,t,n){},2697:function(e,t,n){"use strict";n("0cb0")},4477:function(e,t,n){},"472f":function(e,t,n){},4799:function(e,t,n){"use strict";n("472f")},6879:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));const r=new Map;r.set("Openstreetmap",{url:"https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",maxZoom:20,attribution:'&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),r.set("satellite",{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"});const o=new Map;function c(e){return"base64"===e?"data:image/png;base64,":""}o.set("none",{label:"Aucun",url:"",type:"url"}),o.set("trekker",{label:"Trekker",url:"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",type:"base64"}),o.set("trekkerWithoutBorder",{label:"Trekker2",url:"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",type:"base64"}),o.set("mapPointer",{label:"Pointeur",url:"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",type:"base64"})},"835f":function(e,t,n){"use strict";n("4477")},a77d:function(e,t,n){"use strict";var r=n("084e");const o=new Map([[" ","/"],["-","/"],["_","/"],["**SOS**","...---..."],["**OVER**","-.-"],["**ROGER**",".-."],["**STARTMESSAGE**",".-.-"],["**ENDMESSAGE**",".-.-."],["**WAIT**",".-..."],["**BREAK**","-...-"],["**ERROR**","........"],["**SLOW**","....-.."],["**REPEAT**","..--.."],["**CORRECT**","-.-."],["**NEGATIVE**","-."],["A",".-"],["B","-..."],["C","-.-."],["D","-.."],["E","."],["F","..-."],["G","--."],["H","...."],["I",".."],["J",".---"],["K","-.-"],["L",".-.."],["M","--"],["N","-."],["O","---"],["P",".--."],["Q","--.-"],["R",".-."],["S","..."],["T","-"],["U","..-"],["V","...-"],["W",".--"],["X","-..-"],["Y","-.--"],["Z","--.."],["0","-----"],["1",".----"],["2","..---"],["3","...--"],["4","....-"],["5","....."],["6","-...."],["7","--..."],["8","---.."],["9","----."]]);var c=function(e){const t=e.toUpperCase().split(/(\*{2}\w+\*{2})/),n=t.map(e=>o.get(e)||"/").join(" ").replace(/^[ /]+|[ /]+$/g,"").replace(/ +/g," ").replace(/( *\/+ *)+/g,"/");return n};function i(e,t=100){const n=t/4,r=t/4,o=3*t/4,c=3*t/4,i=new Map([[".",r],["-",o],[" ",n],["/",c]]),a=Array.from(e).map(e=>i.get(e)||0);return a}const a=r["a"].notificationSettings;let s=0;function u(e="**WAIT**"){if(!a.vibrate||!e)return!1;const t=c(e),n=i(t);return navigator.vibrate(n)}async function l(){const e=await Notification.requestPermission();return"denied"===e&&(a.hardware=!1),e}async function A(e,t={}){if(!a.hardware)return;const{title:n="",vibrationMessage:r=""}=t;if("granted"!==Notification.permission){const e=await l();if("denied"===e)return}u(r);const o=n?"Versou: "+n:"Versou";return new Notification(o,{body:e})}t["a"]=function(e,t={}){const{important:n=!1,vibrationMessage:o,type:c="info",delay:i=5e3,title:a=""}=t;n?A(e,t):o&&u(o),clearTimeout(s),r["a"].notification={title:a,message:e,type:c,active:!0},s=setTimeout(()=>{r["a"].notification.active=!1},i)}},cd49:function(e,t,n){"use strict";n.r(t);var r=n("7a23");function o(e,t,n,o,c,i){const a=Object(r["A"])("Header"),s=Object(r["A"])("router-view");return Object(r["s"])(),Object(r["d"])(r["a"],null,[Object(r["h"])(a,{class:"header"}),Object(r["h"])(s)],64)}const c=Object(r["H"])("data-v-d05be314");Object(r["w"])("data-v-d05be314");const i={class:"header"},a={class:"menuActions"},s={class:"actions"},u={class:"settings"};Object(r["t"])();const l=c((e,t,n,o,c,l)=>{const A=Object(r["A"])("Menu"),d=Object(r["A"])("Notification");return Object(r["s"])(),Object(r["d"])("div",i,[Object(r["h"])("div",a,[Object(r["h"])("button",{onClick:t[1]||(t[1]=(...t)=>e.buttonMenuActions&&e.buttonMenuActions(...t))}," ! ")]),Object(r["h"])("div",s,[Object(r["h"])("button",{onClick:t[2]||(t[2]=(...t)=>e.buttonActions&&e.buttonActions(...t))}," > ")]),Object(r["h"])("div",u,[Object(r["h"])("button",{onClick:t[3]||(t[3]=(...t)=>e.buttonSettings&&e.buttonSettings(...t))}," ? ")]),Object(r["h"])(A,{items:e.list,position:e.menuPosition,class:"header-menu",onClick:e.menuSelection},null,8,["items","position","onClick"]),Object(r["h"])(d)])});var A=n("9ab4"),d=n("084e"),p=n("ce1f");const b=Object(r["H"])("data-v-304994d9"),f=b((e,t,n,o,c,i)=>(Object(r["s"])(),Object(r["d"])("div",{class:["menu",[{hidden:e.isEmpty},e.position]]},[(Object(r["s"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(e.items,t=>(Object(r["s"])(),Object(r["d"])("div",{key:t.id,class:["menu__item",{disabled:!!t.disabled}],onClick:Object(r["G"])(n=>e.onClick(t),["prevent","stop"])},Object(r["D"])(t.label),11,["onClick"]))),128))],2)));let g=class extends p["b"]{constructor(){super(...arguments),this.items=[]}get isEmpty(){return 0===this.items.length}onClick(e){e.disabled||("function"===typeof e.callback&&e.callback(),this.$emit("click",e.id))}};g=Object(A["a"])([Object(p["a"])({props:{items:{type:Array,required:!0},position:{type:String,default:"center"}},emits:["click"]})],g);var m=g;n("2697");m.render=f,m.__scopeId="data-v-304994d9";var h=m;const j=Object(r["H"])("data-v-6ecd2727");Object(r["w"])("data-v-6ecd2727");const O={key:0};Object(r["t"])();const y=j((e,t,n,o,c,i)=>(Object(r["s"])(),Object(r["d"])("div",{class:["notification",{hidden:!e.isActive,info:"info"===e.type,success:"success"===e.type,warning:"warning"===e.type,error:"error"===e.type}],onClick:t[1]||(t[1]=(...t)=>e.onClick&&e.onClick(...t))},[e.title?(Object(r["s"])(),Object(r["d"])("header",O,Object(r["D"])(e.title),1)):Object(r["e"])("",!0),Object(r["g"])(" "+Object(r["D"])(e.message),1)],2)));let v=class extends p["b"]{constructor(){super(...arguments),this.time=Date.now()}get isActive(){return d["a"].notification.active}get title(){return d["a"].notification.title}get message(){return d["a"].notification.message}get type(){return d["a"].notification.type}onClick(){d["a"].notification.active=!1}};v=Object(A["a"])([Object(p["a"])({props:{}})],v);var P=v;n("1e14");P.render=y,P.__scopeId="data-v-6ecd2727";var w=P,S=n("a77d");let L=0,C=0,k=0;const T=3,B=console,E="Vous devez autoriser la géolocalisation pour enregistrer votre position.",z="Une erreur est survenue pour récupérer les coordonées.",R="Nouvel essai ...";function M(e,t){const n=d["a"].currentPath,r=Date.now();B.log("timestamp",t,"Date.now()",r);const o=r-n.startTime-n.pauseDuration,c={...e,relativeTime:o};n.path.push(c)}function V(e){const t=d["a"].geolocSettings,n="number"===typeof e?e:t.refreshTime;C=setTimeout(G,n)}function D(e){const t=e.coords;k=0;const n=e=>"number"===typeof e?e:NaN;M({lat:t.latitude,lng:t.longitude,accuracy:t.accuracy,alt:n(t.altitude),altAccuracy:n(t.altitudeAccuracy),heading:n(t.heading),speed:n(t.speed)},e.timestamp),V()}function U(e){const t=d["a"].geolocSettings;let n,r;const o=()=>{k++,k>=T?(Y(),n=z,r=e.message):(Object(S["a"])(R,{title:z,type:"warning",important:!1,delay:1e4}),V(10))};switch(e.code){case e.PERMISSION_DENIED:Y(),n=E,r=e.message;break;case e.POSITION_UNAVAILABLE:0===k&&t.highPrecision&&(t.highPrecision=!1),o();break;case e.TIMEOUT:o();break;default:Y(),n=z,r=e.message}r&&Object(S["a"])(r,{title:n,type:"error",important:!0,vibrationMessage:"**ERROR**",delay:15e3})}function G(){const e=d["a"].geolocSettings;clearTimeout(C);const t={enableHighAccuracy:e.highPrecision};navigator.geolocation.getCurrentPosition(D,U,t)}function Y(){clearTimeout(C),0===L&&(L=Date.now())}function X(){const e=d["a"].currentPath;if(0===L)return;clearTimeout(C);const t=Date.now()-L;e.pauseDuration+=t,L=0,k=0,G()}function W(){0===L?Y():X()}function H(){d["a"].currentPath={name:"",path:[],startTime:Date.now(),pauseDuration:0},clearTimeout(C),d["a"].geolocSettings.isRecording=!0,G()}const I="Démarrer la randonée",x="Configuration",K="Charger une rando";let N=class extends p["b"]{get menuActionsList(){const e=[];return e.push({label:I,id:"start",disabled:this.isRecording}),e}get menuList(){const e=[];return e.push({label:x,id:"menuActions"},{label:K,id:"loadTrek"}),e}get menuPosition(){const e=d["a"].openMenu;return"settings"===e?"right":"menuActions"===e?"left":"center"}get isRecording(){return d["a"].geolocSettings.isRecording}get list(){const e=d["a"].openMenu,t=this.menuActionsList,n=this.menuList;return"menuActions"===e?t:"settings"===e?n:[]}buttonMenuActions(){"menuActions"===d["a"].openMenu?d["a"].openMenu="":d["a"].openMenu="menuActions"}buttonActions(){d["a"].openMenu="",this.isRecording?W():H()}buttonSettings(){"settings"===d["a"].openMenu?d["a"].openMenu="":d["a"].openMenu="settings"}menuSelection(e){if("string"===typeof e)switch(d["a"].openMenu="",e){case"start":H();break;case"menuActions":this.$router.push("geolocsettings");break;default:Object(S["a"])(`L'action "${e}" n'est pas implémentée`,{type:"error"})}}};N=Object(A["a"])([Object(p["a"])({components:{Menu:h,Notification:w}})],N);var Q=N;n("d69d");Q.render=l,Q.__scopeId="data-v-d05be314";var J=Q,Z={components:{Header:J}};n("4799");Z.render=o;var q=Z,F=n("6c02");const _={class:"home"};function $(e,t,n,o,c,i){const a=Object(r["A"])("Leaflet");return Object(r["s"])(),Object(r["d"])("div",_,[Object(r["h"])(a)])}const ee=Object(r["H"])("data-v-4f7f9904");Object(r["w"])("data-v-4f7f9904");const te={class:"leaflet-map-container"},ne={class:"leaflet-map",ref:"leaflet"},re={key:0,class:"actions"};Object(r["t"])();const oe=ee((e,t,n,o,c,i)=>{const a=Object(r["A"])("LTileLayer"),s=Object(r["A"])("LPopup"),u=Object(r["A"])("LCircle"),l=Object(r["A"])("LIcon"),A=Object(r["A"])("LTooltip"),d=Object(r["A"])("LMarker"),p=Object(r["A"])("LPolyline"),b=Object(r["A"])("LMap");return Object(r["s"])(),Object(r["d"])("div",te,[Object(r["h"])("div",ne,[Object(r["h"])(b,{class:"leaflet-map",zoom:e.zoom,"onUpdate:zoom":t[1]||(t[1]=t=>e.zoom=t),center:e.center,"onUpdate:center":t[2]||(t[2]=t=>e.center=t),onDragend:e.onmove},{default:ee(()=>["satellite"===e.layerName?(Object(r["s"])(),Object(r["d"])(a,{key:0,url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'",attribution:"Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"})):(Object(r["s"])(),Object(r["d"])(a,{key:1,url:e.layer.url,maxZoom:e.layer.maxZoom,attribution:e.layer.attribution},null,8,["url","maxZoom","attribution"])),e.currentPosition&&e.currentPositionAccuracy>e.AccuracyThreshold?(Object(r["s"])(),Object(r["d"])(u,{key:2,"lat-lng":e.currentPosition,radius:e.currentPositionAccuracy,color:"red",fill:"",fillColor:"purple"},{default:ee(()=>[Object(r["h"])(s,null,{default:ee(()=>[Object(r["g"])(Object(r["D"])(e.text.accuracy.replace(/%s/,e.currentPositionAccuracy)),1)]),_:1})]),_:1},8,["lat-lng","radius"])):Object(r["e"])("",!0),e.currentPosition?(Object(r["s"])(),Object(r["d"])(d,{key:3,"lat-lng":e.currentPosition},{default:ee(()=>[Object(r["h"])(l,{"icon-url":e.currentPositionIcon},null,8,["icon-url"]),Object(r["h"])(A,null,{default:ee(()=>[Object(r["g"])(Object(r["D"])(e.text.position),1)]),_:1})]),_:1},8,["lat-lng"])):Object(r["e"])("",!0),Object(r["h"])(p,{"lat-lngs":e.currentPath,color:"green"},null,8,["lat-lngs"])]),_:1},8,["zoom","center","onDragend"])],512),e.canCenter?(Object(r["s"])(),Object(r["d"])("div",re,[Object(r["h"])("button",{onClick:t[3]||(t[3]=(...t)=>e.recenter&&e.recenter(...t)),title:e.text.centerTitle},Object(r["D"])(e.text.center),9,["title"])])):Object(r["e"])("",!0)])});var ce=n("6879"),ie=n("5afd");n("6cc5");const ae="Votre position actuelle",se="Recentrer et suivre votre position",ue="Recentrer",le="La précision de votre position est à %sm près.",{LMap:Ae,LIcon:de,LTileLayer:pe,LMarker:be,LControlLayers:fe,LTooltip:ge,LPopup:me,LPolyline:he,LPolygon:je,LRectangle:Oe,LCircle:ye}=ie;let ve=class extends p["b"]{constructor(){super(...arguments),this.center=[46.5,2.4],this.zoom=6,this.followCenter=!0,this.AccuracyThreshold=15}get text(){return{accuracy:le,position:ae,center:ue,centerTitle:se}}get currentPositionIcon(){const e=d["a"].mapSettings.iconPosition,t=ce["b"].get(e);if(!t)return;const n=Object(ce["a"])(t.type);return`${n}${t.url}`}get layerName(){return d["a"].mapSettings.layer}get layer(){const e=this.layerName;let t=ce["c"].get(e);return t||(t=ce["c"].get("Openstreetmap")),t}get recordedPath(){return d["a"].currentPath.path}get currentPath(){const e=this.recordedPath;return e.map(e=>[e.lat,e.lng])}get currentPosition(){const e=this.currentPath,t=e.length;if(!t)return;const n=t-1;return e[n]}get currentPositionAccuracy(){const e=this.recordedPath,t=e.length;return 0===t?0:e[t-1].accuracy||0}get canCenter(){return!this.followCenter&&!!this.currentPosition}onmove(){this.followCenter=!1}setSize(){const e=this.$refs.leaflet,t=e.parentElement;if(!t)return;const n=t.getBoundingClientRect(),r=n.height;e.style.height=r+"px"}recenter(){this.followCenter=!0,this.currentPosition&&(this.center=this.currentPosition)}mounted(){this.setSize(),this.wlistener||(this.wlistener=()=>this.setSize(),window.addEventListener("resize",this.wlistener)),this.recenter()}destroyed(){this.wlistener&&window.removeEventListener("resize",this.wlistener)}};ve=Object(A["a"])([Object(p["a"])({components:{LMap:Ae,LIcon:de,LTileLayer:pe,LMarker:be,LControlLayers:fe,LTooltip:ge,LPopup:me,LPolyline:he,LPolygon:je,LRectangle:Oe,LCircle:ye},watch:{currentPosition(){this.followCenter&&(this.center=this.currentPosition)}}})],ve);var Pe=ve;n("835f");Pe.render=oe,Pe.__scopeId="data-v-4f7f9904";var we=Pe;let Se=class extends p["b"]{};Se=Object(A["a"])([Object(p["a"])({components:{Leaflet:we}})],Se);var Le=Se;Le.render=$;var Ce=Le;const ke=[{path:"/",name:"Home",component:Ce},{path:"/about",name:"About",component:()=>n.e("about").then(n.bind(null,"f820"))},{path:"/geolocsettings",name:"GeolocSettings",component:()=>n.e("geloc").then(n.bind(null,"7da8"))},{path:"/:catchAll(.*)",redirect:"/"}],Te=Object(F["a"])({history:Object(F["b"])("/versou/"),routes:ke});var Be=Te;Object(r["c"])(q).use(Be).mount("#app")},d69d:function(e,t,n){"use strict";n("20d4")}});
//# sourceMappingURL=app.ac0ccfbc.js.map
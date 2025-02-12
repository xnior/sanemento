import{a as z,b as Ee,c as Te,d as y,j as we,n as Re,p as V,r as Me}from"./chunk-TU2NGQX2.js";import{$a as ge,A as se,D as oe,Da as ae,Ea as F,Fa as ce,Ga as D,Ia as B,Ja as le,Ma as A,Na as T,Oa as w,Pa as de,Qa as ue,Ra as he,Sa as fe,Ta as pe,Ua as me,V as p,Va as ye,Wa as E,X as m,Za as O,_ as L,a as _,aa as d,b as ne,fa as ie,mc as ve,n as re,r as M,va as b,wa as j}from"./chunk-KAO45LUE.js";var X=class{};var R=class r{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let s=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(s,o)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof r?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new r;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof r?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,e);let s=(t.op==="a"?this.headers.get(e):void 0)||[];s.push(...n),this.headers.set(e,s);break;case"d":let o=t.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let i=this.headers.get(e);if(!i)return;i=i.filter(c=>o.indexOf(c)===-1),i.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,i)}break}}addHeaderEntry(t,e){let n=t.toLowerCase();this.maybeSetNormalizedName(t,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(t,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),s=t.toLowerCase();this.headers.set(s,n),this.maybeSetNormalizedName(t,s)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var G=class{encodeKey(t){return be(t)}encodeValue(t){return be(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function We(r,t){let e=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(s=>{let o=s.indexOf("="),[i,c]=o==-1?[t.decodeKey(s),""]:[t.decodeKey(s.slice(0,o)),t.decodeValue(s.slice(o+1))],a=e.get(i)||[];a.push(c),e.set(i,a)}),e}var Ze=/%(\d[a-f0-9])/gi,Ye={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function be(r){return encodeURIComponent(r).replace(Ze,(t,e)=>Ye[e]??t)}function k(r){return`${r}`}var v=class r{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new G,t.fromString){if(t.fromObject)throw new p(2805,!1);this.map=We(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let n=t.fromObject[e],s=Array.isArray(n)?n.map(k):[k(n)];this.map.set(e,s)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(n=>{let s=t[n];Array.isArray(s)?s.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:s,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new r({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(k(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],s=n.indexOf(k(t.value));s!==-1&&n.splice(s,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var J=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function Ke(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function De(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function Ae(r){return typeof Blob<"u"&&r instanceof Blob}function Oe(r){return typeof FormData<"u"&&r instanceof FormData}function qe(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}var He="X-Request-URL",Pe="text/plain",Se="application/json",Xt=`${Se}, ${Pe}, */*`,P=class r{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(t,e,n,s){this.url=e,this.method=t.toUpperCase();let o;if(Ke(this.method)||s?(this.body=n!==void 0?n:null,o=s):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new R,this.context??=new J,!this.params)this.params=new v,this.urlWithParams=e;else{let i=this.params.toString();if(i.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),a=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+a+i}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||De(this.body)||Ae(this.body)||Oe(this.body)||qe(this.body)?this.body:this.body instanceof v?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Oe(this.body)?null:Ae(this.body)?this.body.type||null:De(this.body)?null:typeof this.body=="string"?Pe:this.body instanceof v?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Se:null}clone(t={}){let e=t.method||this.method,n=t.url||this.url,s=t.responseType||this.responseType,o=t.transferCache??this.transferCache,i=t.body!==void 0?t.body:this.body,c=t.withCredentials??this.withCredentials,a=t.reportProgress??this.reportProgress,l=t.headers||this.headers,u=t.params||this.params,g=t.context??this.context;return t.setHeaders!==void 0&&(l=Object.keys(t.setHeaders).reduce((h,f)=>h.set(f,t.setHeaders[f]),l)),t.setParams&&(u=Object.keys(t.setParams).reduce((h,f)=>h.set(f,t.setParams[f]),u)),new r(e,n,i,{params:u,headers:l,context:g,reportProgress:a,responseType:s,withCredentials:c,transferCache:o})}},Ie=function(r){return r[r.Sent=0]="Sent",r[r.UploadProgress=1]="UploadProgress",r[r.ResponseHeader=2]="ResponseHeader",r[r.DownloadProgress=3]="DownloadProgress",r[r.Response=4]="Response",r[r.User=5]="User",r}(Ie||{}),W=class{headers;status;statusText;url;ok;type;constructor(t,e=200,n="OK"){this.headers=t.headers||new R,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}};var Z=class r extends W{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=Ie.Response;clone(t={}){return new r({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}};function $(r,t){return{body:t,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials,transferCache:r.transferCache}}var Gt=(()=>{class r{handler;constructor(e){this.handler=e}request(e,n,s={}){let o;if(e instanceof P)o=e;else{let a;s.headers instanceof R?a=s.headers:a=new R(s.headers);let l;s.params&&(s.params instanceof v?l=s.params:l=new v({fromObject:s.params})),o=new P(e,n,s.body!==void 0?s.body:null,{headers:a,context:s.context,params:l,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let i=re(o).pipe(oe(a=>this.handler.handle(a)));if(e instanceof P||s.observe==="events")return i;let c=i.pipe(se(a=>a instanceof Z));switch(s.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(M(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new p(2806,!1);return a.body}));case"blob":return c.pipe(M(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new p(2807,!1);return a.body}));case"text":return c.pipe(M(a=>{if(a.body!==null&&typeof a.body!="string")throw new p(2808,!1);return a.body}));case"json":default:return c.pipe(M(a=>a.body))}case"response":return c;default:throw new p(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new v().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,s={}){return this.request("PATCH",e,$(s,n))}post(e,n,s={}){return this.request("POST",e,$(s,n))}put(e,n,s={}){return this.request("PUT",e,$(s,n))}static \u0275fac=function(n){return new(n||r)(d(X))};static \u0275prov=m({token:r,factory:r.\u0275fac})}return r})();var Jt=RegExp(`^${He}:`,"m");var K=class extends Te{supportsDOMEvents=!0},q=class r extends K{static makeCurrent(){Ee(new r)}onAndCancel(t,e,n,s){return t.addEventListener(e,n,s),()=>{t.removeEventListener(e,n,s)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=et();return e==null?null:tt(e)}resetBaseElement(){S=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return we(document.cookie,t)}},S=null;function et(){return S=S||document.querySelector("base"),S?S.getAttribute("href"):null}function tt(r){return new URL(r,document.baseURI).pathname}var nt=(()=>{class r{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||r)};static \u0275prov=m({token:r,factory:r.\u0275fac})}return r})(),H=new L(""),xe=(()=>{class r{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(s=>{s.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,s,o){return this._findPluginFor(n).addEventListener(e,n,s,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new p(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||r)(d(H),d(b))};static \u0275prov=m({token:r,factory:r.\u0275fac})}return r})(),x=class{_doc;constructor(t){this._doc=t}manager},C="ng-app-id";function Ne(r){for(let t of r)t.remove()}function _e(r,t){let e=t.createElement("style");return e.textContent=r,e}function rt(r,t,e,n){let s=r.head?.querySelectorAll(`style[${C}="${t}"],link[${C}="${t}"]`);if(s)for(let o of s)o.removeAttribute(C),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Q(r,t){let e=t.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",r),e}var Ue=(()=>{class r{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,n,s,o={}){this.doc=e,this.appId=n,this.nonce=s,this.isServer=V(o),rt(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let s of e)this.addUsage(s,this.inline,_e);n?.forEach(s=>this.addUsage(s,this.external,Q))}removeStyles(e,n){for(let s of e)this.removeUsage(s,this.inline);n?.forEach(s=>this.removeUsage(s,this.external))}addUsage(e,n,s){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(i=>this.addElement(i,s(e,this.doc)))})}removeUsage(e,n){let s=n.get(e);s&&(s.usage--,s.usage<=0&&(Ne(s.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Ne(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:s}]of this.inline)s.push(this.addElement(e,_e(n,this.doc)));for(let[n,{elements:s}]of this.external)s.push(this.addElement(e,Q(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(C,this.appId),e.appendChild(n)}static \u0275fac=function(n){return new(n||r)(d(y),d(F),d(B,8),d(D))};static \u0275prov=m({token:r,factory:r.\u0275fac})}return r})(),Y={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},te=/%COMP%/g;var je="%COMP%",st=`_nghost-${je}`,ot=`_ngcontent-${je}`,it=!0,at=new L("",{providedIn:"root",factory:()=>it});function ct(r){return ot.replace(te,r)}function lt(r){return st.replace(te,r)}function Fe(r,t){return t.map(e=>e.replace(te,r))}var Le=(()=>{class r{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,s,o,i,c,a,l=null,u=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=i,this.platformId=c,this.ngZone=a,this.nonce=l,this.tracingService=u,this.platformIsServer=V(c),this.defaultRenderer=new I(e,i,a,this.platformIsServer,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===A.ShadowDom&&(n=ne(_({},n),{encapsulation:A.Emulated}));let s=this.getOrCreateRenderer(e,n);return s instanceof U?s.applyToHost(e):s instanceof N&&s.applyStyles(),s}getOrCreateRenderer(e,n){let s=this.rendererByCompId,o=s.get(n.id);if(!o){let i=this.doc,c=this.ngZone,a=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,g=this.platformIsServer,h=this.tracingService;switch(n.encapsulation){case A.Emulated:o=new U(a,l,n,this.appId,u,i,c,g,h);break;case A.ShadowDom:return new ee(a,l,e,n,i,c,this.nonce,g,h);default:o=new N(a,l,n,u,i,c,g,h);break}s.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||r)(d(xe),d(Ue),d(F),d(at),d(y),d(D),d(b),d(B),d(le,8))};static \u0275prov=m({token:r,factory:r.\u0275fac})}return r})(),I=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,n,s,o){this.eventManager=t,this.doc=e,this.ngZone=n,this.platformIsServer=s,this.tracingService=o}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(Y[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(ke(t)?t.content:t).appendChild(e)}insertBefore(t,e,n){t&&(ke(t)?t.content:t).insertBefore(e,n)}removeChild(t,e){e.remove()}selectRootElement(t,e){let n=typeof t=="string"?this.doc.querySelector(t):t;if(!n)throw new p(-5104,!1);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,s){if(s){e=s+":"+e;let o=Y[s];o?t.setAttributeNS(o,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){let s=Y[n];s?t.removeAttributeNS(s,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,s){s&(O.DashCase|O.Important)?t.style.setProperty(e,n,s&O.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&O.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t!=null&&(t[e]=n)}setValue(t,e){t.nodeValue=e}listen(t,e,n,s){if(typeof t=="string"&&(t=z().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${e}`);let o=this.decoratePreventDefault(n);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(o=this.tracingService.wrapEventListener(t,e,o)),this.eventManager.addEventListener(t,e,o,s)}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(e)):t(e))===!1&&e.preventDefault()}}};function ke(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var ee=class extends I{sharedStylesHost;hostEl;shadowRoot;constructor(t,e,n,s,o,i,c,a,l){super(t,o,i,a,l),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=s.styles;u=Fe(s.id,u);for(let h of u){let f=document.createElement("style");c&&f.setAttribute("nonce",c),f.textContent=h,this.shadowRoot.appendChild(f)}let g=s.getExternalStyles?.();if(g)for(let h of g){let f=Q(h,o);c&&f.setAttribute("nonce",c),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},N=class extends I{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,n,s,o,i,c,a,l){super(t,o,i,c,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=s;let u=n.styles;this.styles=l?Fe(l,u):u,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},U=class extends N{contentAttr;hostAttr;constructor(t,e,n,s,o,i,c,a,l){let u=s+"-"+n.id;super(t,e,n,o,i,c,a,l,u),this.contentAttr=ct(u),this.hostAttr=lt(u)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}},dt=(()=>{class r extends x{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,s,o){return e.addEventListener(n,s,o),()=>this.removeEventListener(e,n,s,o)}removeEventListener(e,n,s,o){return e.removeEventListener(n,s,o)}static \u0275fac=function(n){return new(n||r)(d(y))};static \u0275prov=m({token:r,factory:r.\u0275fac})}return r})(),Ce=["alt","control","meta","shift"],ut={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ht={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},ft=(()=>{class r extends x{constructor(e){super(e)}supports(e){return r.parseEventName(e)!=null}addEventListener(e,n,s,o){let i=r.parseEventName(n),c=r.eventCallback(i.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>z().onAndCancel(e,i.domEventName,c,o))}static parseEventName(e){let n=e.toLowerCase().split("."),s=n.shift();if(n.length===0||!(s==="keydown"||s==="keyup"))return null;let o=r._normalizeKey(n.pop()),i="",c=n.indexOf("code");if(c>-1&&(n.splice(c,1),i="code."),Ce.forEach(l=>{let u=n.indexOf(l);u>-1&&(n.splice(u,1),i+=l+".")}),i+=o,n.length!=0||o.length===0)return null;let a={};return a.domEventName=s,a.fullKey=i,a}static matchEventFullKeyCode(e,n){let s=ut[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(s=e.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),Ce.forEach(i=>{if(i!==s){let c=ht[i];c(e)&&(o+=i+".")}}),o+=s,o===n)}static eventCallback(e,n,s){return o=>{r.matchEventFullKeyCode(o,e)&&s.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||r)(d(y))};static \u0275prov=m({token:r,factory:r.\u0275fac})}return r})();function wn(r,t){return ve(_({rootComponent:r},pt(t)))}function pt(r){return{appProviders:[...Et,...r?.providers??[]],platformProviders:vt}}function mt(){q.makeCurrent()}function yt(){return new j}function gt(){return ae(document),document}var vt=[{provide:D,useValue:Re},{provide:ce,useValue:mt,multi:!0},{provide:y,useFactory:gt,deps:[]}];var Et=[{provide:ie,useValue:"root"},{provide:j,useFactory:yt,deps:[]},{provide:H,useClass:dt,multi:!0,deps:[y]},{provide:H,useClass:ft,multi:!0,deps:[y]},Le,Ue,xe,{provide:ge,useExisting:Le},{provide:Me,useClass:nt,deps:[]},[]];var Rn=(()=>{class r{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||r)(d(y))};static \u0275prov=m({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Tt=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275prov=m({token:r,factory:function(n){let s=null;return n?s=new(n||r):s=d(wt),s},providedIn:"root"})}return r})(),wt=(()=>{class r extends Tt{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case E.NONE:return n;case E.HTML:return w(n,"HTML")?T(n):ye(this._doc,String(n)).toString();case E.STYLE:return w(n,"Style")?T(n):n;case E.SCRIPT:if(w(n,"Script"))return T(n);throw new p(5200,!1);case E.URL:return w(n,"URL")?T(n):me(String(n));case E.RESOURCE_URL:if(w(n,"ResourceURL"))return T(n);throw new p(5201,!1);default:throw new p(5202,!1)}}bypassSecurityTrustHtml(e){return de(e)}bypassSecurityTrustStyle(e){return ue(e)}bypassSecurityTrustScript(e){return he(e)}bypassSecurityTrustUrl(e){return fe(e)}bypassSecurityTrustResourceUrl(e){return pe(e)}static \u0275fac=function(n){return new(n||r)(d(y))};static \u0275prov=m({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();export{Gt as a,Le as b,wn as c,Rn as d,Tt as e};

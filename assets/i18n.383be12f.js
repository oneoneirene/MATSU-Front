import{h as H,F as je,i as pt,o as kt,a as St,r as J,c as B,w as ve,g as He,b as Mt,d as Fe,T as pe,e as wt}from"./index.0ec09a40.js";/*!
  * @intlify/shared v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Ct=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",P=e=>Ct?Symbol(e):e,Ot=(e,t,n)=>It({l:e,k:t,s:n}),It=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),w=e=>typeof e=="number"&&isFinite(e),Lt=e=>fe(e)==="[object Date]",X=e=>fe(e)==="[object RegExp]",ne=e=>y(e)&&Object.keys(e).length===0;function Tt(e,t){typeof console!="undefined"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const T=Object.assign;function ke(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const Et=Object.prototype.hasOwnProperty;function $e(e,t){return Et.call(e,t)}const C=Array.isArray,I=e=>typeof e=="function",g=e=>typeof e=="string",M=e=>typeof e=="boolean",L=e=>e!==null&&typeof e=="object",Ue=Object.prototype.toString,fe=e=>Ue.call(e),y=e=>fe(e)==="[object Object]",Wt=e=>e==null?"":C(e)||y(e)&&e.toString===Ue?JSON.stringify(e,null,2):String(e);/*!
  * @intlify/message-resolver v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const At=Object.prototype.hasOwnProperty;function Nt(e,t){return At.call(e,t)}const Q=e=>e!==null&&typeof e=="object",R=[];R[0]={w:[0],i:[3,0],["["]:[4],o:[7]};R[1]={w:[1],["."]:[2],["["]:[4],o:[7]};R[2]={w:[2],i:[3,0],[0]:[3,0]};R[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};R[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};R[5]={["'"]:[4,0],o:8,l:[5,0]};R[6]={['"']:[4,0],o:8,l:[6,0]};const Pt=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Rt(e){return Pt.test(e)}function Dt(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function xt(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function jt(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:Rt(t)?Dt(t):"*"+t}function Ht(e){const t=[];let n=-1,a=0,r=0,l,s,c,u,m,_,h;const b=[];b[0]=()=>{s===void 0?s=c:s+=c},b[1]=()=>{s!==void 0&&(t.push(s),s=void 0)},b[2]=()=>{b[0](),r++},b[3]=()=>{if(r>0)r--,a=4,b[0]();else{if(r=0,s===void 0||(s=jt(s),s===!1))return!1;b[1]()}};function F(){const p=e[n+1];if(a===5&&p==="'"||a===6&&p==='"')return n++,c="\\"+p,b[0](),!0}for(;a!==null;)if(n++,l=e[n],!(l==="\\"&&F())){if(u=xt(l),h=R[a],m=h[u]||h.l||8,m===8||(a=m[0],m[1]!==void 0&&(_=b[m[1]],_&&(c=l,_()===!1))))return;if(a===7)return t}}const Se=new Map;function ee(e,t){if(!Q(e))return null;let n=Se.get(t);if(n||(n=Ht(t),n&&Se.set(t,n)),!n)return null;const a=n.length;let r=e,l=0;for(;l<a;){const s=r[n[l]];if(s===void 0)return null;r=s,l++}return r}function le(e){if(!Q(e))return e;for(const t in e)if(!!Nt(e,t))if(!t.includes("."))Q(e[t])&&le(e[t]);else{const n=t.split("."),a=n.length-1;let r=e;for(let l=0;l<a;l++)n[l]in r||(r[n[l]]={}),r=r[n[l]];r[n[a]]=e[t],delete e[t],Q(r[n[a]])&&le(r[n[a]])}return e}/*!
  * @intlify/runtime v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const $t=e=>e,Ut=e=>"",Vt="text",Jt=e=>e.length===0?"":e.join(""),Bt=Wt;function Me(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function Gt(e){const t=w(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(w(e.named.count)||w(e.named.n))?w(e.named.count)?e.named.count:w(e.named.n)?e.named.n:t:t}function Yt(e,t){t.count||(t.count=e),t.n||(t.n=e)}function zt(e={}){const t=e.locale,n=Gt(e),a=L(e.pluralRules)&&g(t)&&I(e.pluralRules[t])?e.pluralRules[t]:Me,r=L(e.pluralRules)&&g(t)&&I(e.pluralRules[t])?Me:void 0,l=d=>d[a(n,d.length,r)],s=e.list||[],c=d=>s[d],u=e.named||{};w(e.pluralIndex)&&Yt(n,u);const m=d=>u[d];function _(d){const v=I(e.messages)?e.messages(d):L(e.messages)?e.messages[d]:!1;return v||(e.parent?e.parent.message(d):Ut)}const h=d=>e.modifiers?e.modifiers[d]:$t,b=y(e.processor)&&I(e.processor.normalize)?e.processor.normalize:Jt,F=y(e.processor)&&I(e.processor.interpolate)?e.processor.interpolate:Bt,p=y(e.processor)&&g(e.processor.type)?e.processor.type:Vt,k={list:c,named:m,plural:l,linked:(d,v)=>{const E=_(d)(k);return g(v)?h(v)(E):E},message:_,type:p,interpolate:F,normalize:b};return k}/*!
  * @intlify/message-compiler v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */function Ve(e,t,n={}){const{domain:a,messages:r,args:l}=n,s=e,c=new SyntaxError(String(s));return c.code=e,t&&(c.location=t),c.domain=a,c}/*!
  * @intlify/devtools-if v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Kt={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * @intlify/core-base v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */let qt=null;Kt.FunctionTranslate;function Zt(e){return t=>qt}const Qt="9.1.10",ae=-1,we="";function Xt(){return{upper:e=>g(e)?e.toUpperCase():e,lower:e=>g(e)?e.toLowerCase():e,capitalize:e=>g(e)?`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`:e}}let en,Ce=0;function tn(e={}){const t=g(e.version)?e.version:Qt,n=g(e.locale)?e.locale:"en-US",a=C(e.fallbackLocale)||y(e.fallbackLocale)||g(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:n,r=y(e.messages)?e.messages:{[n]:{}},l=y(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},s=y(e.numberFormats)?e.numberFormats:{[n]:{}},c=T({},e.modifiers||{},Xt()),u=e.pluralRules||{},m=I(e.missing)?e.missing:null,_=M(e.missingWarn)||X(e.missingWarn)?e.missingWarn:!0,h=M(e.fallbackWarn)||X(e.fallbackWarn)?e.fallbackWarn:!0,b=!!e.fallbackFormat,F=!!e.unresolving,p=I(e.postTranslation)?e.postTranslation:null,k=y(e.processor)?e.processor:null,d=M(e.warnHtmlMessage)?e.warnHtmlMessage:!0,v=!!e.escapeParameter,E=I(e.messageCompiler)?e.messageCompiler:en,S=I(e.onWarn)?e.onWarn:Tt,f=e,W=L(f.__datetimeFormatters)?f.__datetimeFormatters:new Map,$=L(f.__numberFormatters)?f.__numberFormatters:new Map,U=L(f.__meta)?f.__meta:{};return Ce++,{version:t,cid:Ce,locale:n,fallbackLocale:a,messages:r,datetimeFormats:l,numberFormats:s,modifiers:c,pluralRules:u,missing:m,missingWarn:_,fallbackWarn:h,fallbackFormat:b,unresolving:F,postTranslation:p,processor:k,warnHtmlMessage:d,escapeParameter:v,messageCompiler:E,onWarn:S,__datetimeFormatters:W,__numberFormatters:$,__meta:U}}function ge(e,t,n,a,r){const{missing:l,onWarn:s}=e;if(l!==null){const c=l(e,n,t,r);return g(c)?c:t}else return t}function Y(e,t,n){const a=e;a.__localeChainCache||(a.__localeChainCache=new Map);let r=a.__localeChainCache.get(n);if(!r){r=[];let l=[n];for(;C(l);)l=Oe(r,l,t);const s=C(t)?t:y(t)?t.default?t.default:null:t;l=g(s)?[s]:s,C(l)&&Oe(r,l,!1),a.__localeChainCache.set(n,r)}return r}function Oe(e,t,n){let a=!0;for(let r=0;r<t.length&&M(a);r++){const l=t[r];g(l)&&(a=nn(e,t[r],n))}return a}function nn(e,t,n){let a;const r=t.split("-");do{const l=r.join("-");a=an(e,l,n),r.splice(-1,1)}while(r.length&&a===!0);return a}function an(e,t,n){let a=!1;if(!e.includes(t)&&(a=!0,t)){a=t[t.length-1]!=="!";const r=t.replace(/!/g,"");e.push(r),(C(n)||y(n))&&n[r]&&(a=n[r])}return a}function G(e,t,n){const a=e;a.__localeChainCache=new Map,Y(e,n,t)}function j(e){return Ve(e,null,void 0)}const Ie=()=>"",D=e=>I(e);function Le(e,...t){const{fallbackFormat:n,postTranslation:a,unresolving:r,fallbackLocale:l,messages:s}=e,[c,u]=se(...t),m=M(u.missingWarn)?u.missingWarn:e.missingWarn,_=M(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn,h=M(u.escapeParameter)?u.escapeParameter:e.escapeParameter,b=!!u.resolvedMessage,F=g(u.default)||M(u.default)?M(u.default)?c:u.default:n?c:"",p=n||F!=="",k=g(u.locale)?u.locale:e.locale;h&&rn(u);let[d,v,E]=b?[c,k,s[k]||{}]:ln(e,c,k,l,_,m),S=c;if(!b&&!(g(d)||D(d))&&p&&(d=F,S=d),!b&&(!(g(d)||D(d))||!g(v)))return r?ae:c;let f=!1;const W=()=>{f=!0},$=D(d)?d:Je(e,c,v,d,S,W);if(f)return d;const U=cn(e,v,E,u),z=zt(U),K=sn(e,$,z);return a?a(K):K}function rn(e){C(e.list)?e.list=e.list.map(t=>g(t)?ke(t):t):L(e.named)&&Object.keys(e.named).forEach(t=>{g(e.named[t])&&(e.named[t]=ke(e.named[t]))})}function ln(e,t,n,a,r,l){const{messages:s,onWarn:c}=e,u=Y(e,a,n);let m={},_,h=null;const b="translate";for(let F=0;F<u.length&&(_=u[F],m=s[_]||{},(h=ee(m,t))===null&&(h=m[t]),!(g(h)||I(h)));F++){const p=ge(e,t,_,l,b);p!==t&&(h=p)}return[h,_,m]}function Je(e,t,n,a,r,l){const{messageCompiler:s,warnHtmlMessage:c}=e;if(D(a)){const m=a;return m.locale=m.locale||n,m.key=m.key||t,m}const u=s(a,on(e,n,r,a,c,l));return u.locale=n,u.key=t,u.source=a,u}function sn(e,t,n){return t(n)}function se(...e){const[t,n,a]=e,r={};if(!g(t)&&!w(t)&&!D(t))throw j(14);const l=w(t)?String(t):(D(t),t);return w(n)?r.plural=n:g(n)?r.default=n:y(n)&&!ne(n)?r.named=n:C(n)&&(r.list=n),w(a)?r.plural=a:g(a)?r.default=a:y(a)&&T(r,a),[l,r]}function on(e,t,n,a,r,l){return{warnHtmlMessage:r,onError:s=>{throw l&&l(s),s},onCacheKey:s=>Ot(t,n,s)}}function cn(e,t,n,a){const{modifiers:r,pluralRules:l}=e,c={locale:t,modifiers:r,pluralRules:l,messages:u=>{const m=ee(n,u);if(g(m)){let _=!1;const b=Je(e,u,t,m,u,()=>{_=!0});return _?Ie:b}else return D(m)?m:Ie}};return e.processor&&(c.processor=e.processor),a.list&&(c.list=a.list),a.named&&(c.named=a.named),w(a.plural)&&(c.pluralIndex=a.plural),c}function Te(e,...t){const{datetimeFormats:n,unresolving:a,fallbackLocale:r,onWarn:l}=e,{__datetimeFormatters:s}=e,[c,u,m,_]=oe(...t),h=M(m.missingWarn)?m.missingWarn:e.missingWarn;M(m.fallbackWarn)?m.fallbackWarn:e.fallbackWarn;const b=!!m.part,F=g(m.locale)?m.locale:e.locale,p=Y(e,r,F);if(!g(c)||c==="")return new Intl.DateTimeFormat(F).format(u);let k={},d,v=null;const E="datetime format";for(let W=0;W<p.length&&(d=p[W],k=n[d]||{},v=k[c],!y(v));W++)ge(e,c,d,h,E);if(!y(v)||!g(d))return a?ae:c;let S=`${d}__${c}`;ne(_)||(S=`${S}__${JSON.stringify(_)}`);let f=s.get(S);return f||(f=new Intl.DateTimeFormat(d,T({},v,_)),s.set(S,f)),b?f.formatToParts(u):f.format(u)}function oe(...e){const[t,n,a,r]=e;let l={},s={},c;if(g(t)){if(!/\d{4}-\d{2}-\d{2}(T.*)?/.test(t))throw j(16);c=new Date(t);try{c.toISOString()}catch{throw j(16)}}else if(Lt(t)){if(isNaN(t.getTime()))throw j(15);c=t}else if(w(t))c=t;else throw j(14);return g(n)?l.key=n:y(n)&&(l=n),g(a)?l.locale=a:y(a)&&(s=a),y(r)&&(s=r),[l.key||"",c,l,s]}function Ee(e,t,n){const a=e;for(const r in n){const l=`${t}__${r}`;!a.__datetimeFormatters.has(l)||a.__datetimeFormatters.delete(l)}}function We(e,...t){const{numberFormats:n,unresolving:a,fallbackLocale:r,onWarn:l}=e,{__numberFormatters:s}=e,[c,u,m,_]=ce(...t),h=M(m.missingWarn)?m.missingWarn:e.missingWarn;M(m.fallbackWarn)?m.fallbackWarn:e.fallbackWarn;const b=!!m.part,F=g(m.locale)?m.locale:e.locale,p=Y(e,r,F);if(!g(c)||c==="")return new Intl.NumberFormat(F).format(u);let k={},d,v=null;const E="number format";for(let W=0;W<p.length&&(d=p[W],k=n[d]||{},v=k[c],!y(v));W++)ge(e,c,d,h,E);if(!y(v)||!g(d))return a?ae:c;let S=`${d}__${c}`;ne(_)||(S=`${S}__${JSON.stringify(_)}`);let f=s.get(S);return f||(f=new Intl.NumberFormat(d,T({},v,_)),s.set(S,f)),b?f.formatToParts(u):f.format(u)}function ce(...e){const[t,n,a,r]=e;let l={},s={};if(!w(t))throw j(14);const c=t;return g(n)?l.key=n:y(n)&&(l=n),g(a)?l.locale=a:y(a)&&(s=a),y(r)&&(s=r),[l.key||"",c,l,s]}function Ae(e,t,n){const a=e;for(const r in n){const l=`${t}__${r}`;!a.__numberFormatters.has(l)||a.__numberFormatters.delete(l)}}/*!
  * vue-i18n v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const un="9.1.10";function A(e,...t){return Ve(e,null,void 0)}const ie=P("__transrateVNode"),ue=P("__datetimeParts"),me=P("__numberParts");P("__enableEmitter");P("__disableEmitter");const mn=P("__setPluralRules");P("__intlifyMeta");const Be=P("__injectWithOption");let Ne=0;function Pe(e){return(t,n,a,r)=>e(n,a,He()||void 0,r)}function Ge(e,t){const{messages:n,__i18n:a}=t,r=y(n)?n:C(a)?{}:{[e]:{}};if(C(a)&&a.forEach(({locale:l,resource:s})=>{l?(r[l]=r[l]||{},te(s,r[l])):te(s,r)}),t.flatJson)for(const l in r)$e(r,l)&&le(r[l]);return r}const Z=e=>!L(e)||C(e);function te(e,t){if(Z(e)||Z(t))throw A(20);for(const n in e)$e(e,n)&&(Z(e[n])||Z(t[n])?t[n]=e[n]:te(e[n],t[n]))}function Ye(e={}){const{__root:t}=e,n=t===void 0;let a=M(e.inheritLocale)?e.inheritLocale:!0;const r=J(t&&a?t.locale.value:g(e.locale)?e.locale:"en-US"),l=J(t&&a?t.fallbackLocale.value:g(e.fallbackLocale)||C(e.fallbackLocale)||y(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:r.value),s=J(Ge(r.value,e)),c=J(y(e.datetimeFormats)?e.datetimeFormats:{[r.value]:{}}),u=J(y(e.numberFormats)?e.numberFormats:{[r.value]:{}});let m=t?t.missingWarn:M(e.missingWarn)||X(e.missingWarn)?e.missingWarn:!0,_=t?t.fallbackWarn:M(e.fallbackWarn)||X(e.fallbackWarn)?e.fallbackWarn:!0,h=t?t.fallbackRoot:M(e.fallbackRoot)?e.fallbackRoot:!0,b=!!e.fallbackFormat,F=I(e.missing)?e.missing:null,p=I(e.missing)?Pe(e.missing):null,k=I(e.postTranslation)?e.postTranslation:null,d=M(e.warnHtmlMessage)?e.warnHtmlMessage:!0,v=!!e.escapeParameter;const E=t?t.modifiers:y(e.modifiers)?e.modifiers:{};let S=e.pluralRules||t&&t.pluralRules,f;function W(){return tn({version:un,locale:r.value,fallbackLocale:l.value,messages:s.value,datetimeFormats:c.value,numberFormats:u.value,modifiers:E,pluralRules:S,missing:p===null?void 0:p,missingWarn:m,fallbackWarn:_,fallbackFormat:b,unresolving:!0,postTranslation:k===null?void 0:k,warnHtmlMessage:d,escapeParameter:v,__datetimeFormatters:y(f)?f.__datetimeFormatters:void 0,__numberFormatters:y(f)?f.__numberFormatters:void 0,__v_emitter:y(f)?f.__v_emitter:void 0,__meta:{framework:"vue"}})}f=W(),G(f,r.value,l.value);function $(){return[r.value,l.value,s.value,c.value,u.value]}const U=B({get:()=>r.value,set:o=>{r.value=o,f.locale=r.value}}),z=B({get:()=>l.value,set:o=>{l.value=o,f.fallbackLocale=l.value,G(f,r.value,o)}}),K=B(()=>s.value),be=B(()=>c.value),Ke=B(()=>u.value);function qe(){return I(k)?k:null}function Ze(o){k=o,f.postTranslation=o}function Qe(){return F}function Xe(o){o!==null&&(p=Pe(o)),F=o,f.missing=p}function x(o,i,N,O,re,q){$();let V;if(V=o(f),w(V)&&V===ae){const[Ft,En]=i();return t&&h?O(t):re(Ft)}else{if(q(V))return V;throw A(14)}}function ye(...o){return x(i=>Le(i,...o),()=>se(...o),"translate",i=>i.t(...o),i=>i,i=>g(i))}function et(...o){const[i,N,O]=o;if(O&&!L(O))throw A(15);return ye(i,N,T({resolvedMessage:!0},O||{}))}function tt(...o){return x(i=>Te(i,...o),()=>oe(...o),"datetime format",i=>i.d(...o),()=>we,i=>g(i))}function nt(...o){return x(i=>We(i,...o),()=>ce(...o),"number format",i=>i.n(...o),()=>we,i=>g(i))}function at(o){return o.map(i=>g(i)?Fe(pe,null,i,0):i)}const rt={normalize:at,interpolate:o=>o,type:"vnode"};function lt(...o){return x(i=>{let N;const O=i;try{O.processor=rt,N=Le(O,...o)}finally{O.processor=null}return N},()=>se(...o),"translate",i=>i[ie](...o),i=>[Fe(pe,null,i,0)],i=>C(i))}function st(...o){return x(i=>We(i,...o),()=>ce(...o),"number format",i=>i[me](...o),()=>[],i=>g(i)||C(i))}function ot(...o){return x(i=>Te(i,...o),()=>oe(...o),"datetime format",i=>i[ue](...o),()=>[],i=>g(i)||C(i))}function ct(o){S=o,f.pluralRules=S}function it(o,i){const N=g(i)?i:r.value,O=he(N);return ee(O,o)!==null}function ut(o){let i=null;const N=Y(f,l.value,r.value);for(let O=0;O<N.length;O++){const re=s.value[N[O]]||{},q=ee(re,o);if(q!=null){i=q;break}}return i}function mt(o){const i=ut(o);return i!=null?i:t?t.tm(o)||{}:{}}function he(o){return s.value[o]||{}}function ft(o,i){s.value[o]=i,f.messages=s.value}function gt(o,i){s.value[o]=s.value[o]||{},te(i,s.value[o]),f.messages=s.value}function dt(o){return c.value[o]||{}}function _t(o,i){c.value[o]=i,f.datetimeFormats=c.value,Ee(f,o,i)}function bt(o,i){c.value[o]=T(c.value[o]||{},i),f.datetimeFormats=c.value,Ee(f,o,i)}function yt(o){return u.value[o]||{}}function ht(o,i){u.value[o]=i,f.numberFormats=u.value,Ae(f,o,i)}function vt(o,i){u.value[o]=T(u.value[o]||{},i),f.numberFormats=u.value,Ae(f,o,i)}return Ne++,t&&(ve(t.locale,o=>{a&&(r.value=o,f.locale=o,G(f,r.value,l.value))}),ve(t.fallbackLocale,o=>{a&&(l.value=o,f.fallbackLocale=o,G(f,r.value,l.value))})),{id:Ne,locale:U,fallbackLocale:z,get inheritLocale(){return a},set inheritLocale(o){a=o,o&&t&&(r.value=t.locale.value,l.value=t.fallbackLocale.value,G(f,r.value,l.value))},get availableLocales(){return Object.keys(s.value).sort()},messages:K,datetimeFormats:be,numberFormats:Ke,get modifiers(){return E},get pluralRules(){return S||{}},get isGlobal(){return n},get missingWarn(){return m},set missingWarn(o){m=o,f.missingWarn=m},get fallbackWarn(){return _},set fallbackWarn(o){_=o,f.fallbackWarn=_},get fallbackRoot(){return h},set fallbackRoot(o){h=o},get fallbackFormat(){return b},set fallbackFormat(o){b=o,f.fallbackFormat=b},get warnHtmlMessage(){return d},set warnHtmlMessage(o){d=o,f.warnHtmlMessage=o},get escapeParameter(){return v},set escapeParameter(o){v=o,f.escapeParameter=o},t:ye,rt:et,d:tt,n:nt,te:it,tm:mt,getLocaleMessage:he,setLocaleMessage:ft,mergeLocaleMessage:gt,getDateTimeFormat:dt,setDateTimeFormat:_t,mergeDateTimeFormat:bt,getNumberFormat:yt,setNumberFormat:ht,mergeNumberFormat:vt,getPostTranslationHandler:qe,setPostTranslationHandler:Ze,getMissingHandler:Qe,setMissingHandler:Xe,[ie]:lt,[me]:st,[ue]:ot,[mn]:ct,[Be]:e.__injectWithOption}}const de={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}},Re={name:"i18n-t",props:T({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>w(e)||!isNaN(e)}},de),setup(e,t){const{slots:n,attrs:a}=t,r=e.i18n||_e({useScope:e.scope,__useComponent:!0}),l=Object.keys(n).filter(s=>s!=="_");return()=>{const s={};e.locale&&(s.locale=e.locale),e.plural!==void 0&&(s.plural=g(e.plural)?+e.plural:e.plural);const c=fn(t,l),u=r[ie](e.keypath,c,s),m=T({},a);return g(e.tag)?H(e.tag,m,u):L(e.tag)?H(e.tag,m,u):H(je,m,u)}}};function fn({slots:e},t){return t.length===1&&t[0]==="default"?e.default?e.default():[]:t.reduce((n,a)=>{const r=e[a];return r&&(n[a]=r()),n},{})}function ze(e,t,n,a){const{slots:r,attrs:l}=t;return()=>{const s={part:!0};let c={};e.locale&&(s.locale=e.locale),g(e.format)?s.key=e.format:L(e.format)&&(g(e.format.key)&&(s.key=e.format.key),c=Object.keys(e.format).reduce((h,b)=>n.includes(b)?T({},h,{[b]:e.format[b]}):h,{}));const u=a(e.value,s,c);let m=[s.key];C(u)?m=u.map((h,b)=>{const F=r[h.type];return F?F({[h.type]:h.value,index:b,parts:u}):[h.value]}):g(u)&&(m=[u]);const _=T({},l);return g(e.tag)?H(e.tag,_,m):L(e.tag)?H(e.tag,_,m):H(je,_,m)}}const gn=["localeMatcher","style","unit","unitDisplay","currency","currencyDisplay","useGrouping","numberingSystem","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","notation","formatMatcher"],De={name:"i18n-n",props:T({value:{type:Number,required:!0},format:{type:[String,Object]}},de),setup(e,t){const n=e.i18n||_e({useScope:"parent",__useComponent:!0});return ze(e,t,gn,(...a)=>n[me](...a))}},dn=["dateStyle","timeStyle","fractionalSecondDigits","calendar","dayPeriod","numberingSystem","localeMatcher","timeZone","hour12","hourCycle","formatMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName"],xe={name:"i18n-d",props:T({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},de),setup(e,t){const n=e.i18n||_e({useScope:"parent",__useComponent:!0});return ze(e,t,dn,(...a)=>n[ue](...a))}};function _n(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const a=n.__getInstance(t);return a!=null?a.__composer:e.global.__composer}}function bn(e){const t=(n,{instance:a,value:r,modifiers:l})=>{if(!a||!a.$)throw A(22);const s=_n(e,a.$),c=yn(r);n.textContent=s.t(...hn(c))};return{beforeMount:t,beforeUpdate:t}}function yn(e){if(g(e))return{path:e};if(y(e)){if(!("path"in e))throw A(19,"path");return e}else throw A(20)}function hn(e){const{path:t,locale:n,args:a,choice:r,plural:l}=e,s={},c=a||{};return g(n)&&(s.locale=n),w(r)&&(s.plural=r),w(l)&&(s.plural=l),[t,c,s]}function vn(e,t,...n){const a=y(n[0])?n[0]:{},r=!!a.useI18nComponentName;(M(a.globalInstall)?a.globalInstall:!0)&&(e.component(r?"i18n":Re.name,Re),e.component(De.name,De),e.component(xe.name,xe)),e.directive("t",bn(t))}function Fn(e={}){const t=!!e.globalInjection,n=new Map,a=Ye(e),r=P(""),l={get mode(){return"composition"},async install(s,...c){s.__VUE_I18N_SYMBOL__=r,s.provide(s.__VUE_I18N_SYMBOL__,l),t&&wn(s,l.global),vn(s,l,...c)},get global(){return a},__instances:n,__getInstance(s){return n.get(s)||null},__setInstance(s,c){n.set(s,c)},__deleteInstance(s){n.delete(s)}};return l}function _e(e={}){const t=He();if(t==null)throw A(16);if(!t.appContext.app.__VUE_I18N_SYMBOL__)throw A(17);const n=pt(t.appContext.app.__VUE_I18N_SYMBOL__);if(!n)throw A(22);const a=n.mode==="composition"?n.global:n.global.__composer,r=ne(e)?"__i18n"in t.type?"local":"global":e.useScope?e.useScope:"local";if(r==="global"){let c=L(e.messages)?e.messages:{};"__i18nGlobal"in t.type&&(c=Ge(a.locale.value,{messages:c,__i18n:t.type.__i18nGlobal}));const u=Object.keys(c);if(u.length&&u.forEach(m=>{a.mergeLocaleMessage(m,c[m])}),L(e.datetimeFormats)){const m=Object.keys(e.datetimeFormats);m.length&&m.forEach(_=>{a.mergeDateTimeFormat(_,e.datetimeFormats[_])})}if(L(e.numberFormats)){const m=Object.keys(e.numberFormats);m.length&&m.forEach(_=>{a.mergeNumberFormat(_,e.numberFormats[_])})}return a}if(r==="parent"){let c=pn(n,t,e.__useComponent);return c==null&&(c=a),c}if(n.mode==="legacy")throw A(18);const l=n;let s=l.__getInstance(t);if(s==null){const c=t.type,u=T({},e);c.__i18n&&(u.__i18n=c.__i18n),a&&(u.__root=a),s=Ye(u),kn(l,t),l.__setInstance(t,s)}return s}function pn(e,t,n=!1){let a=null;const r=t.root;let l=t.parent;for(;l!=null;){const s=e;if(e.mode==="composition")a=s.__getInstance(l);else{const c=s.__getInstance(l);c!=null&&(a=c.__composer),n&&a&&!a[Be]&&(a=null)}if(a!=null||r===l)break;l=l.parent}return a}function kn(e,t,n){kt(()=>{},t),St(()=>{e.__deleteInstance(t)},t)}const Sn=["locale","fallbackLocale","availableLocales"],Mn=["t","rt","d","n","tm"];function wn(e,t){const n=Object.create(null);Sn.forEach(a=>{const r=Object.getOwnPropertyDescriptor(t,a);if(!r)throw A(22);const l=Mt(r.value)?{get(){return r.value.value},set(s){r.value.value=s}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,a,l)}),e.config.globalProperties.$i18n=n,Mn.forEach(a=>{const r=Object.getOwnPropertyDescriptor(t,a);if(!r||!r.value)throw A(22);Object.defineProperty(e.config.globalProperties,`$${a}`,r)})}var Cn={failed:"Action failed",success:"Action was successful",information:"information",Announcement:"Announcement",Matsu:"Matsu",Transportation:"Transportation",Accommodation:"Accommodation",Travel:"Travel",Education:"Education",Account:"Account",Index:"Index",LogIn:"LogIn",SignIn:"SignIn",Restaurant:"Restaurant",Hotel:"Hotel",FamousProduct:"Famous Product",New:"New Announcement",Community:"Community News",Activities:"Activities",Recruitment:"Recruitment",Media:"Media",Airline:"Airline",Vessel:"Vessel",Bus:"Bus",Attractions:"Attractions",Experience:"Experience",Elementary:"Elementary",ElementaryN:"Elementary and Junior High School",SeniorHighSchool:"Senior High School",Others:"Others",MyAc:"My Account",Myposts:"My Posts",MyLikes:"My Likes",DongJyu:"DongJyu",RenAi:"RenAi",TangChi:"TangChi",ChungCheng:"ChungCheng",JieShou:"JieShou",JinCheng:"JinCheng",DongYin:"DongYin",ChungShan:"ChungShan",MatsuH:"Matsu",Resources:"Resources"},On={failed:"\u5931\u6557",success:"\u6210\u529F",information:"\u516C\u544A\u8CC7\u8A0A",Announcement:"\u516C\u544A\u8CC7\u8A0A",Matsu:"\u99AC\u7956\u8CC7\u8A0A\u7DB2",Transportation:"\u4EA4\u901A\u8CC7\u8A0A",Accommodation:"\u98DF\u5BBF\u8CC7\u8A0A",Travel:"\u65C5\u904A\u8CC7\u8A0A",Education:"\u6559\u80B2\u8CC7\u8A0A",Account:"\u6703\u54E1\u5C08\u5340",Index:"\u9996\u9801",LogIn:"\u767B\u5165",SignIn:"\u8A3B\u518A",Restaurant:"\u7F8E\u98DF\u9910\u5EF3",Hotel:"\u4F4F\u5BBF\u8CC7\u8A0A",FamousProduct:"\u99AC\u7956\u7279\u7522",New:"\u6700\u65B0\u516C\u544A",Community:"\u793E\u5340\u516C\u544A",Activities:"\u6D3B\u52D5\u8CC7\u8A0A",Recruitment:"\u5FB5\u624D\u8A0A\u606F",Media:"\u5F71\u97F3\u63A8\u85A6",Airline:"\u98DB\u6A5F\u822A\u73ED",Vessel:"\u8239\u904B\u8CC7\u8A0A",Bus:"\u516C\u8ECA\u6642\u523B\u8868",Attractions:"\u666F\u9EDE\u4ECB\u7D39",Experience:"\u5FC3\u5F97\u5206\u4EAB",Elementary:"\u570B\u5C0F",ElementaryN:"\u570B\u4E2D\u5C0F",SeniorHighSchool:"\u9AD8\u4E2D",Others:"\u5176\u4ED6",MyAc:"\u500B\u4EBA\u8CC7\u6599\u7BA1\u7406",Myposts:"\u8CBC\u6587\u7BA1\u7406",MyLikes:"\u6211\u7684\u6536\u85CF",DongJyu:"\u6771\u8392\u570B\u5C0F",RenAi:"\u4EC1\u611B\u570B\u5C0F",TangChi:"\u5858\u5C90\u570B\u5C0F",ChungCheng:"\u4E2D\u6B63\u570B\u4E2D\u5C0F",JieShou:"\u4ECB\u58FD\u570B\u4E2D\u5C0F",JinCheng:"\u656C\u6046\u570B\u4E2D\u5C0F",DongYin:"\u6771\u5F15\u570B\u4E2D\u5C0F",ChungShan:"\u4E2D\u5C71\u570B\u4E2D",MatsuH:"\u99AC\u7956\u9AD8\u4E2D",Resources:"\u8CC7\u6E90\u4E2D\u5FC3"},In={"en-US":Cn,"zh-TW":On},An=wt(({app:e})=>{const t=Fn({locale:"en-US",globalInjection:!0,messages:In});e.use(t)});export{An as default};

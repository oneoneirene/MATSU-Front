import{r as C,n as l,q as f,H as w,aN as z,aZ as s,av as D,s as F,G as R,aM as N,ae as K,C as L,a_ as M,D as h}from"./index.46c58dce.js";function G(a,v){const e=C(null),c=l(()=>a.disable!==!0?null:f("span",{ref:e,class:"no-outline",tabindex:-1}));function m(u){const n=v.value;u!==void 0&&u.type.indexOf("key")===0?n!==null&&document.activeElement!==n&&n.contains(document.activeElement)===!0&&n.focus():e.value!==null&&(u===void 0||n!==null&&n.contains(u.target)===!0)&&e.value.focus()}return{refocusTargetEl:c,refocusTarget:m}}var H={xs:30,sm:35,md:40,lg:50,xl:60};const J={...R,...N,...K,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:a=>a==="tf"||a==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Q=["update:modelValue"];function U(a,v){const{props:e,slots:c,emit:m,proxy:u}=L(),{$q:n}=u,q=w(e,n),p=C(null),{refocusTargetEl:k,refocusTarget:I}=G(e,p),S=z(e,H),i=l(()=>e.val!==void 0&&Array.isArray(e.modelValue)),g=l(()=>{const t=s(e.val);return i.value===!0?e.modelValue.findIndex(o=>s(o)===t):-1}),r=l(()=>i.value===!0?g.value>-1:s(e.modelValue)===s(e.trueValue)),d=l(()=>i.value===!0?g.value===-1:s(e.modelValue)===s(e.falseValue)),V=l(()=>r.value===!1&&d.value===!1),y=l(()=>e.disable===!0?-1:e.tabindex||0),$=l(()=>`q-${a} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(q.value===!0?` q-${a}--dark`:"")+(e.dense===!0?` q-${a}--dense`:"")+(e.leftLabel===!0?" reverse":"")),_=l(()=>{const t=r.value===!0?"truthy":d.value===!0?"falsy":"indet",o=e.color!==void 0&&(e.keepColor===!0||(a==="toggle"?r.value===!0:d.value!==!0))?` text-${e.color}`:"";return`q-${a}__inner relative-position non-selectable q-${a}__inner--${t}${o}`}),O=l(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{"^checked":r.value===!0?"checked":void 0,name:e.name,value:i.value===!0?e.val:e.trueValue}),t}),T=M(O),A=l(()=>{const t={tabindex:y.value,role:"checkbox","aria-label":e.label,"aria-checked":V.value===!0?"mixed":r.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function b(t){t!==void 0&&(h(t),I(t)),e.disable!==!0&&m("update:modelValue",B(),t)}function B(){if(i.value===!0){if(r.value===!0){const t=e.modelValue.slice();return t.splice(g.value,1),t}return e.modelValue.concat([e.val])}if(r.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(d.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function E(t){(t.keyCode===13||t.keyCode===32)&&h(t)}function P(t){(t.keyCode===13||t.keyCode===32)&&b(t)}const j=v(r,V);return Object.assign(u,{toggle:b}),()=>{const t=j();e.disable!==!0&&T(t,"unshift",` q-${a}__native absolute q-ma-none q-pa-none`);const o=[f("div",{class:_.value,style:S.value},t)];k.value!==null&&o.push(k.value);const x=e.label!==void 0?D(c.default,[e.label]):F(c.default);return x!==void 0&&o.push(f("div",{class:`q-${a}__label q-anchor--skip`},x)),f("div",{ref:p,class:$.value,...A.value,onClick:b,onKeydown:E,onKeyup:P},o)}}export{Q as a,U as b,J as u};

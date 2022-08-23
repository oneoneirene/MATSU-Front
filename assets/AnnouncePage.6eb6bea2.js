import{u as U,a as Y,Q as I}from"./QImg.a6e7cac5.js";import{Q as C}from"./QCardSection.cde0411a.js";import{q as k,m as F,aa as $,ab as D,n as A,ae as M,b0 as W,l as E,av as J,a_ as G,h as V,r as O,o as b,a as S,a0 as j,a1 as q,g as o,d as n,w as c,Q as X,M as T,S as z,a5 as Q,Y as m,i as R,U as K,b1 as Z,e as L}from"./index.46c58dce.js";import{Q as ee}from"./QCardActions.1140220b.js";import{Q as N}from"./QSeparator.be76e938.js";import{Q as P}from"./QCard.d8ffe6e1.js";const te=k("div",{class:"q-space"});var ae=F({name:"QSpace",setup(){return()=>te}}),oe=F({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(t,{slots:u,emit:h}){let f=!1,v,g,p,_,l,x;function s(){v&&v(),v=null,f=!1,clearTimeout(p),clearTimeout(_),g!==void 0&&g.removeEventListener("transitionend",l),l=null}function r(e,a,d){e.style.overflowY="hidden",a!==void 0&&(e.style.height=`${a}px`),e.style.transition=`height ${t.duration}ms cubic-bezier(.25, .8, .50, 1)`,f=!0,v=d}function w(e,a){e.style.overflowY=null,e.style.height=null,e.style.transition=null,s(),a!==x&&h(a)}function B(e,a){let d=0;g=e,f===!0?(s(),d=e.offsetHeight===e.scrollHeight?0:void 0):x="hide",r(e,d,a),p=setTimeout(()=>{e.style.height=`${e.scrollHeight}px`,l=y=>{(Object(y)!==y||y.target===e)&&w(e,"show")},e.addEventListener("transitionend",l),_=setTimeout(l,t.duration*1.1)},100)}function i(e,a){let d;g=e,f===!0?s():(x="show",d=e.scrollHeight),r(e,d,a),p=setTimeout(()=>{e.style.height=0,l=y=>{(Object(y)!==y||y.target===e)&&w(e,"hide")},e.addEventListener("transitionend",l),_=setTimeout(l,t.duration*1.1)},100)}return $(()=>{f===!0&&s()}),()=>k(D,{css:!1,appear:t.appear,onEnter:B,onLeave:i},u.default)}}),H=F({name:"QVideo",props:{...U,src:{type:String,required:!0},title:String,fetchpriority:{type:String,default:"auto"},loading:{type:String,default:"eager"},referrerpolicy:{type:String,default:"strict-origin-when-cross-origin"}},setup(t){const u=Y(t),h=A(()=>"q-video"+(t.ratio!==void 0?" q-video--responsive":""));return()=>k("div",{class:h.value,style:u.value},[k("iframe",{src:t.src,title:t.title,fetchpriority:t.fetchpriority,loading:t.loading,referrerpolicy:t.referrerpolicy,frameborder:"0",allowfullscreen:!0})])}}),le=F({name:"QBtnToggle",props:{...M,modelValue:{required:!0},options:{type:Array,required:!0,validator:t=>t.every(u=>("label"in u||"icon"in u||"slot"in u)&&"value"in u)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(t,{slots:u,emit:h}){const f=A(()=>t.options.find(s=>s.value===t.modelValue)!==void 0),v=A(()=>({type:"hidden",name:t.name,value:t.modelValue})),g=G(v),p=A(()=>t.options.map((s,r)=>{const{attrs:w,value:B,slot:i,...e}=s;return{slot:i,props:{key:r,onClick(a){_(B,s,a)},"aria-pressed":B===t.modelValue?"true":"false",...w,...e,outline:t.outline,flat:t.flat,rounded:t.rounded,push:t.push,unelevated:t.unelevated,dense:t.dense,disable:t.disable===!0||e.disable===!0,color:B===t.modelValue?l(e,"toggleColor"):l(e,"color"),textColor:B===t.modelValue?l(e,"toggleTextColor"):l(e,"textColor"),noCaps:l(e,"noCaps")===!0,noWrap:l(e,"noWrap")===!0,size:l(e,"size"),padding:l(e,"padding"),ripple:l(e,"ripple"),stack:l(e,"stack")===!0,stretch:l(e,"stretch")===!0}}}));function _(s,r,w){t.readonly!==!0&&(t.modelValue===s?t.clearable===!0&&(h("update:modelValue",null,null),h("clear")):h("update:modelValue",s,r),h("click",w))}function l(s,r){return s[r]===void 0?t[r]:s[r]}function x(){const s=p.value.map(r=>k(E,r.props,r.slot!==void 0?u[r.slot]:void 0));return t.name!==void 0&&t.disable!==!0&&f.value===!0&&g(s,"push"),J(u.default,s)}return()=>k(W,{class:"q-btn-toggle",outline:t.outline,flat:t.flat,rounded:t.rounded,push:t.push,stretch:t.stretch,unelevated:t.unelevated,glossy:t.glossy,spread:t.spread},x)}});const ne={class:"q-pa-md"},ie=o("h5",{style:{"text-align":"center"}},"\u6700\u65B0\u6D88\u606F",-1),se=o("div",{class:"col-2"},null,-1),re={class:"col-8"},de={id:"caption",class:"absolute-right text-subtitle1 text-center"},ue=o("br",null,null,-1),ce=o("br",null,null,-1),me=o("div",{class:"col-2"},null,-1),he=o("h5",{style:{"text-align":"center"}},"\u6D3B\u52D5\u8CC7\u8A0A",-1),ge={class:"q-pa-md row justify-center items-center q-gutter-md"},fe={class:"text-h5 q-mt-sm q-mb-xs"},_e={class:"text-caption text-grey"},ve=o("h5",{style:{"text-align":"center"}},"\u793E\u5340\u516C\u544A",-1),be={class:"q-col-gutter-md q-ma-md row items-start"},ye={id:"communitycp",class:"absolute-bottom text-subtitle1 text-center"},pe=o("br",null,null,-1),xe=o("h5",{style:{"text-align":"center"}},"\u5FB5\u624D\u8A0A\u606F",-1),we={class:"row justify-center items-center"},Be={class:"text-h6"},Se={class:"text-subtitle2"},Qe={class:"text-subtitle2"},Ve=o("h5",{style:{"text-align":"center"}},"\u5F71\u97F3\u63A8\u85A6",-1),ke={id:"youtube",class:"q-gutter-md"},Ce={class:"row justify-center"},Fe={__name:"AnnouncePage",setup(t){const u=V([]),h=V([]),f=V([]),v=V([]),g=O("style"),p="orem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",_=O(!1),l=V([]),x=V({_id:"",name:l,submitting:!1,job:"",jobtitle:""});return console.log(x.name),console.log(l),(async()=>{try{const{data:i}=await T.get("/info");f.push(...i.result),console.log(i)}catch{z.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(async()=>{try{const{data:i}=await T.get("/job");u.push(...i.result),console.log(i)}catch{z.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(async()=>{try{const{data:i}=await T.get("/act");h.push(...i.result),console.log(i)}catch{z.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(async()=>{try{const{data:i}=await T.get("/community");v.push(...i.result),console.log(i)}catch{z.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(i,e)=>(b(),S("div",ne,[ie,(b(!0),S(j,null,q(f,(a,d)=>(b(),S("div",{class:"q-col-gutter-md q-ma-xs row items-start",key:d},[se,o("div",re,[n(I,{src:a.image,height:"300px"},{default:c(()=>[o("div",de,[Q(" by "+m(a.name)+" ",1),ue,Q(" "+m(a.title)+" ",1),ce,Q(" "+m(a.description),1)])]),_:2},1032,["src"])]),me]))),128)),he,o("div",ge,[(b(!0),S(j,null,q(h,(a,d)=>(b(),R(P,{class:"my-card",flat:"",bordered:"",key:d},{default:c(()=>[n(I,{src:a.image,ratio:4/4},null,8,["src"]),n(C,null,{default:c(()=>[o("div",fe,m(a.name),1),o("div",_e,m(a.description),1)]),_:2},1024),n(ee,null,{default:c(()=>[n(E,{flat:"",color:"dark",label:"Share"}),n(E,{flat:"",color:"primary",label:"Book"}),n(ae),n(E,{color:"grey",round:"",flat:"",dense:"",icon:_.value?"keyboard_arrow_up":"keyboard_arrow_down",onClick:e[0]||(e[0]=y=>_.value=!_.value)},null,8,["icon"])]),_:1}),n(oe,null,{default:c(()=>[K(o("div",null,[n(N),n(C,{class:"text-subitle2"},{default:c(()=>[Q(m(p))]),_:1})],512),[[Z,_.value]])]),_:1})]),_:2},1024))),128))]),ve,o("div",be,[(b(!0),S(j,null,q(v,(a,d)=>(b(),S("div",{class:"col-4",key:d},[n(I,{src:a.image,ratio:16/9},{default:c(()=>[o("div",ye,[Q(m(a.description)+" ",1),pe,Q(" by "+m(a.name),1)])]),_:2},1032,["src"])]))),128))]),xe,o("div",we,[(b(!0),S(j,null,q(u,(a,d)=>(b(),R(P,{dark:"",bordered:"",id:"jobcard",class:"bg-grey-8 col-3",key:d},{default:c(()=>[n(C,null,{default:c(()=>[o("div",Be,m(a.jobtitle),1),o("div",Se,m(a.name),1)]),_:2},1024),n(N,{dark:"",inset:""}),n(C,null,{default:c(()=>[Q(m(a.job)+" ",1),o("div",Qe,m(a.phone),1)]),_:2},1024)]),_:2},1024))),128))]),Ve,o("div",ke,[n(X,{animated:"",modelValue:g.value,"onUpdate:modelValue":e[1]||(e[1]=a=>g.value=a),infinite:""},{default:c(()=>[n(L,{name:"soft-jazz"},{default:c(()=>[n(H,{class:"absolute-full",src:"https://www.youtube.com/embed/bmdpTjkAD1Q"})]),_:1}),n(L,{name:"Rihanna"},{default:c(()=>[n(H,{class:"absolute-full",src:"https://www.youtube.com/embed/jesgAzwmXSI"})]),_:1}),n(L,{name:"ibiza"},{default:c(()=>[n(H,{class:"absolute-full",src:"https://www.youtube.com/embed/58BH6nlJ34Y"})]),_:1})]),_:1},8,["modelValue"]),o("div",Ce,[n(le,{glossy:"",modelValue:g.value,"onUpdate:modelValue":e[2]||(e[2]=a=>g.value=a),options:[{label:"Soft Jazz",value:"soft-jazz"},{label:"Rihanna",value:"Rihanna"},{label:"Ibiza Mix",value:"ibiza"}]},null,8,["modelValue"])])])]))}};export{Fe as default};

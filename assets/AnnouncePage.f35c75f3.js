import{m as I,ap as N,q as k,a$ as P,b0 as M,b1 as U,n as A,ab as W,b2 as Y,l as L,at as J,aZ as X,h as V,r as R,o as v,a as Q,a2 as C,a3 as j,g as o,d as n,w as c,Q as G,M as q,S as T,a7 as y,X as m,R as D,i as H,V as Z,b3 as K,e as E}from"./index.7a37b41c.js";import{Q as z}from"./QCardSection.5116af49.js";import{Q as ee}from"./QSpace.e19e57ac.js";import{Q as te}from"./QCardActions.042e263e.js";import{Q as O}from"./QSeparator.d51f9910.js";import{Q as $}from"./QCard.9ff0117e.js";var ae=I({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(t,{slots:u,emit:h}){let f=!1,b,g,x,_,l,w;function s(){b&&b(),b=null,f=!1,clearTimeout(x),clearTimeout(_),g!==void 0&&g.removeEventListener("transitionend",l),l=null}function r(e,a,d){e.style.overflowY="hidden",a!==void 0&&(e.style.height=`${a}px`),e.style.transition=`height ${t.duration}ms cubic-bezier(.25, .8, .50, 1)`,f=!0,b=d}function B(e,a){e.style.overflowY=null,e.style.height=null,e.style.transition=null,s(),a!==w&&h(a)}function S(e,a){let d=0;g=e,f===!0?(s(),d=e.offsetHeight===e.scrollHeight?0:void 0):w="hide",r(e,d,a),x=setTimeout(()=>{e.style.height=`${e.scrollHeight}px`,l=p=>{(Object(p)!==p||p.target===e)&&B(e,"show")},e.addEventListener("transitionend",l),_=setTimeout(l,t.duration*1.1)},100)}function i(e,a){let d;g=e,f===!0?s():(w="show",d=e.scrollHeight),r(e,d,a),x=setTimeout(()=>{e.style.height=0,l=p=>{(Object(p)!==p||p.target===e)&&B(e,"hide")},e.addEventListener("transitionend",l),_=setTimeout(l,t.duration*1.1)},100)}return N(()=>{f===!0&&s()}),()=>k(P,{css:!1,appear:t.appear,onEnter:S,onLeave:i},u.default)}}),F=I({name:"QVideo",props:{...M,src:{type:String,required:!0},title:String,fetchpriority:{type:String,default:"auto"},loading:{type:String,default:"eager"},referrerpolicy:{type:String,default:"strict-origin-when-cross-origin"}},setup(t){const u=U(t),h=A(()=>"q-video"+(t.ratio!==void 0?" q-video--responsive":""));return()=>k("div",{class:h.value,style:u.value},[k("iframe",{src:t.src,title:t.title,fetchpriority:t.fetchpriority,loading:t.loading,referrerpolicy:t.referrerpolicy,frameborder:"0",allowfullscreen:!0})])}}),oe=I({name:"QBtnToggle",props:{...W,modelValue:{required:!0},options:{type:Array,required:!0,validator:t=>t.every(u=>("label"in u||"icon"in u||"slot"in u)&&"value"in u)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(t,{slots:u,emit:h}){const f=A(()=>t.options.find(s=>s.value===t.modelValue)!==void 0),b=A(()=>({type:"hidden",name:t.name,value:t.modelValue})),g=X(b),x=A(()=>t.options.map((s,r)=>{const{attrs:B,value:S,slot:i,...e}=s;return{slot:i,props:{key:r,onClick(a){_(S,s,a)},"aria-pressed":S===t.modelValue?"true":"false",...B,...e,outline:t.outline,flat:t.flat,rounded:t.rounded,push:t.push,unelevated:t.unelevated,dense:t.dense,disable:t.disable===!0||e.disable===!0,color:S===t.modelValue?l(e,"toggleColor"):l(e,"color"),textColor:S===t.modelValue?l(e,"toggleTextColor"):l(e,"textColor"),noCaps:l(e,"noCaps")===!0,noWrap:l(e,"noWrap")===!0,size:l(e,"size"),padding:l(e,"padding"),ripple:l(e,"ripple"),stack:l(e,"stack")===!0,stretch:l(e,"stretch")===!0}}}));function _(s,r,B){t.readonly!==!0&&(t.modelValue===s?t.clearable===!0&&(h("update:modelValue",null,null),h("clear")):h("update:modelValue",s,r),h("click",B))}function l(s,r){return s[r]===void 0?t[r]:s[r]}function w(){const s=x.value.map(r=>k(L,r.props,r.slot!==void 0?u[r.slot]:void 0));return t.name!==void 0&&t.disable!==!0&&f.value===!0&&g(s,"push"),J(u.default,s)}return()=>k(Y,{class:"q-btn-toggle",outline:t.outline,flat:t.flat,rounded:t.rounded,push:t.push,stretch:t.stretch,unelevated:t.unelevated,glossy:t.glossy,spread:t.spread},w)}});const le={class:"q-pa-md"},ne=o("h5",{style:{"text-align":"center"}},"\u6700\u65B0\u6D88\u606F",-1),ie=o("div",{class:"col-2"},null,-1),se={class:"col-8"},re={id:"caption",class:"absolute-right text-subtitle1 text-center"},de=o("br",null,null,-1),ue=o("br",null,null,-1),ce=o("div",{class:"col-2"},null,-1),me=o("h5",{style:{"text-align":"center"}},"\u6D3B\u52D5\u8CC7\u8A0A",-1),he={class:"q-pa-md row justify-center items-center q-gutter-md"},ge={class:"text-h5 q-mt-sm q-mb-xs"},fe={class:"text-caption text-grey"},_e=o("br",null,null,-1),be=o("h5",{style:{"text-align":"center"}},"\u793E\u5340\u516C\u544A",-1),ve={class:"q-col-gutter-md q-ma-md row items-start"},ye={id:"communitycp",class:"absolute-bottom text-subtitle1 text-center"},pe=o("br",null,null,-1),xe=o("h5",{style:{"text-align":"center"}},"\u5FB5\u624D\u8A0A\u606F",-1),we={class:"row justify-center items-center"},Be={class:"text-h6"},Se={class:"text-subtitle2"},Qe={class:"text-subtitle2"},Ve=o("h5",{style:{"text-align":"center"}},"\u5F71\u97F3\u63A8\u85A6",-1),ke={id:"youtube",class:"q-gutter-md"},Ce={class:"row justify-center"},De={__name:"AnnouncePage",setup(t){const u=V([]),h=V([]),f=V([]),b=V([]),g=R("style"),x="orem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",_=R(!1),l=V([]),w=V({_id:"",name:l,submitting:!1,job:"",jobtitle:""});return console.log(w.name),console.log(l),(async()=>{try{const{data:i}=await q.get("/info");f.push(...i.result),console.log(i)}catch{T.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(async()=>{try{const{data:i}=await q.get("/job");u.push(...i.result),console.log(i)}catch{T.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(async()=>{try{const{data:i}=await q.get("/act");h.push(...i.result),console.log(i)}catch{T.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(async()=>{try{const{data:i}=await q.get("/community");b.push(...i.result),console.log(i)}catch{T.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(i,e)=>(v(),Q("div",le,[ne,(v(!0),Q(C,null,j(f,(a,d)=>(v(),Q("div",{class:"q-col-gutter-md q-ma-xs row items-start",key:d},[ie,o("div",se,[n(D,{src:a.image,height:"300px"},{default:c(()=>[o("div",re,[y(" by "+m(a.name)+" ",1),de,y(" "+m(a.title)+" ",1),ue,y(" "+m(a.description),1)])]),_:2},1032,["src"])]),ce]))),128)),me,o("div",he,[(v(!0),Q(C,null,j(h,(a,d)=>(v(),H($,{class:"my-card",flat:"",bordered:"",key:d},{default:c(()=>[n(D,{src:a.image,ratio:4/4},null,8,["src"]),n(z,null,{default:c(()=>[o("div",ge,m(a.name),1),o("div",fe,[y(m(a.description)+" ",1),_e,y(m(new Date(a.startDay).toLocaleDateString()),1)])]),_:2},1024),n(te,null,{default:c(()=>[n(L,{flat:"",color:"dark",label:"Share"}),n(L,{flat:"",color:"primary",label:"Book"}),n(ee),n(L,{color:"grey",round:"",flat:"",dense:"",icon:_.value?"keyboard_arrow_up":"keyboard_arrow_down",onClick:e[0]||(e[0]=p=>_.value=!_.value)},null,8,["icon"])]),_:1}),n(ae,null,{default:c(()=>[Z(o("div",null,[n(O),n(z,{class:"text-subitle2"},{default:c(()=>[y(m(x))]),_:1})],512),[[K,_.value]])]),_:1})]),_:2},1024))),128))]),be,o("div",ve,[(v(!0),Q(C,null,j(b,(a,d)=>(v(),Q("div",{class:"col-4",key:d},[n(D,{src:a.image,ratio:16/9},{default:c(()=>[o("div",ye,[y(m(a.description)+" ",1),pe,y(" by "+m(a.name),1)])]),_:2},1032,["src"])]))),128))]),xe,o("div",we,[(v(!0),Q(C,null,j(u,(a,d)=>(v(),H($,{dark:"",bordered:"",id:"jobcard",class:"bg-grey-8 col-3",key:d},{default:c(()=>[n(z,null,{default:c(()=>[o("div",Be,m(a.jobtitle),1),o("div",Se,m(a.name),1)]),_:2},1024),n(O,{dark:"",inset:""}),n(z,null,{default:c(()=>[y(m(a.job)+" ",1),o("div",Qe,m(a.phone),1)]),_:2},1024)]),_:2},1024))),128))]),Ve,o("div",ke,[n(G,{animated:"",modelValue:g.value,"onUpdate:modelValue":e[1]||(e[1]=a=>g.value=a),infinite:""},{default:c(()=>[n(E,{name:"soft-jazz"},{default:c(()=>[n(F,{class:"absolute-full",src:"https://www.youtube.com/embed/bmdpTjkAD1Q"})]),_:1}),n(E,{name:"Rihanna"},{default:c(()=>[n(F,{class:"absolute-full",src:"https://www.youtube.com/embed/jesgAzwmXSI"})]),_:1}),n(E,{name:"ibiza"},{default:c(()=>[n(F,{class:"absolute-full",src:"https://www.youtube.com/embed/58BH6nlJ34Y"})]),_:1})]),_:1},8,["modelValue"]),o("div",Ce,[n(oe,{glossy:"",modelValue:g.value,"onUpdate:modelValue":e[2]||(e[2]=a=>g.value=a),options:[{label:"Soft Jazz",value:"soft-jazz"},{label:"Rihanna",value:"Rihanna"},{label:"Ibiza Mix",value:"ibiza"}]},null,8,["modelValue"])])])]))}};export{De as default};
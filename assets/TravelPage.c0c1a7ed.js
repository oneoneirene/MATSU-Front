import{i as y,r as m,u as Q,o as d,a as g,d as a,e as t,w as o,Q as C,F as h,a3 as k,O as q,S as b,a_ as x,m as i,g as n,j as V,f as j,Y as u,a7 as S,Z as B}from"./index.de7da131.js";import{Q as $}from"./QToggle.d845b200.js";import{Q as f}from"./QCardSection.8fc282b6.js";import{Q as T}from"./QCardActions.26466f72.js";import{Q as F}from"./QCard.40289e02.js";import"./use-checkbox.ed62b90f.js";const N={class:"q-pa-md"},P=a("h5",{style:{"text-align":"center"}},"\u666F\u9EDE\u4ECB\u7D39",-1),U={class:"q-pa-md"},A=a("div",{id:"caption",class:"custom-caption"},[a("div",{class:"text-h2 text-white"},"First stop"),a("div",{class:"text-subtitle1 text-white"},"Mountains")],-1),D=a("h5",{style:{"text-align":"center"}},"\u5FC3\u5F97\u5206\u4EAB",-1),E={class:"q-pa-md row justify-center items-center q-gutter-md"},I={class:"text-h6"},L={class:"text-subtitle2"},R={__name:"TravelPage",props:["exp"],setup(M){const c=y([]),p=m(1),l=m(!1),_=Q(),{addCollection:v}=_;return(async()=>{try{const{data:r}=await q.get("/exp");c.push(...r.result),console.log(r)}catch{b.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(r,s)=>(d(),g(h,null,[a("div",N,[P,a("div",U,[t(C,{swipeable:"",animated:"",modelValue:p.value,"onUpdate:modelValue":s[3]||(s[3]=e=>p.value=e),autoplay:l.value,ref:"carousel",infinite:"",id:"attractions"},{control:o(()=>[t(x,{position:"top-right",offset:[18,18],class:"text-white rounded-borders",style:{background:"rgba(0, 0, 0, .3)",padding:"4px 8px"}},{default:o(()=>[t($,{dense:"",dark:"",color:"orange",modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=e=>l.value=e),label:"Auto Play"},null,8,["modelValue"])]),_:1}),t(x,{position:"bottom-right",offset:[18,18],class:"q-gutter-xs"},{default:o(()=>[t(i,{push:"",round:"",dense:"",color:"blue","text-color":"white",icon:"arrow_left",onClick:s[1]||(s[1]=e=>r.$refs.carousel.previous())}),t(i,{push:"",round:"",dense:"",color:"blue","text-color":"white",icon:"arrow_right",onClick:s[2]||(s[2]=e=>r.$refs.carousel.next())})]),_:1})]),default:o(()=>[t(n,{name:1,"img-src":"https://cdn.quasar.dev/img/mountains.jpg"},{default:o(()=>[A]),_:1}),t(n,{name:2,"img-src":"https://cdn.quasar.dev/img/parallax1.jpg"}),t(n,{name:3,"img-src":"https://cdn.quasar.dev/img/parallax2.jpg"}),t(n,{name:4,"img-src":"https://cdn.quasar.dev/img/quasar.jpg"})]),_:1},8,["modelValue","autoplay"])])]),D,a("div",E,[(d(!0),g(h,null,k(c,(e,w)=>(d(),V(F,{class:"expcard",key:w},{default:o(()=>[t(j,{src:e.image,ratio:5/4},null,8,["src"]),t(f,null,{default:o(()=>[a("div",I,u(e.title),1),a("div",L,u(e.name),1)]),_:2},1024),t(f,{class:"q-pt-none"},{default:o(()=>[S(u(e.description),1)]),_:2},1024),t(T,{align:"right"},{default:o(()=>[t(i,{flat:"",round:"",color:"red",icon:"favorite",onClick:Y=>B(v)({exp:e._id,quantity:1})},null,8,["onClick"]),t(i,{flat:"",round:"",color:"teal",icon:"bookmark"}),t(i,{flat:"",round:"",color:"primary",icon:"share"})]),_:2},1024)]),_:2},1024))),128))])],64))}};export{R as default};

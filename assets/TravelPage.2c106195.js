import{h as _,r as m,o as d,a as g,g as o,d as t,w as s,Q as w,$ as h,a0 as y,K as Q,S as q,aZ as x,m as i,e as l,i as C,O as b,X as u,a4 as k}from"./index.0cce9599.js";import{Q as V}from"./QToggle.6dd6c438.js";import{Q as f}from"./QCardSection.90289d9c.js";import{Q as $}from"./QCardActions.1f0a1084.js";import{Q as j}from"./QCard.3b01aac7.js";import"./use-checkbox.73140a2a.js";const B={class:"q-pa-md"},S=o("h5",{style:{"text-align":"center"}},"\u666F\u9EDE\u4ECB\u7D39",-1),T={class:"q-pa-md"},N=o("div",{id:"caption",class:"custom-caption"},[o("div",{class:"text-h2 text-white"},"First stop"),o("div",{class:"text-subtitle1 text-white"},"Mountains")],-1),P=o("h5",{style:{"text-align":"center"}},"\u5FC3\u5F97\u5206\u4EAB",-1),A={class:"q-pa-md row justify-center items-center q-gutter-md"},F={class:"text-h6"},U={class:"text-subtitle2"},z={__name:"TravelPage",setup(D){const c=_([]),p=m(1),n=m(!1);return(async()=>{try{const{data:r}=await Q.get("/exp");c.push(...r.result),console.log(r)}catch{q.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(r,e)=>(d(),g(h,null,[o("div",B,[S,o("div",T,[t(w,{swipeable:"",animated:"",modelValue:p.value,"onUpdate:modelValue":e[3]||(e[3]=a=>p.value=a),autoplay:n.value,ref:"carousel",infinite:"",id:"attractions"},{control:s(()=>[t(x,{position:"top-right",offset:[18,18],class:"text-white rounded-borders",style:{background:"rgba(0, 0, 0, .3)",padding:"4px 8px"}},{default:s(()=>[t(V,{dense:"",dark:"",color:"orange",modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=a=>n.value=a),label:"Auto Play"},null,8,["modelValue"])]),_:1}),t(x,{position:"bottom-right",offset:[18,18],class:"q-gutter-xs"},{default:s(()=>[t(i,{push:"",round:"",dense:"",color:"blue","text-color":"white",icon:"arrow_left",onClick:e[1]||(e[1]=a=>r.$refs.carousel.previous())}),t(i,{push:"",round:"",dense:"",color:"blue","text-color":"white",icon:"arrow_right",onClick:e[2]||(e[2]=a=>r.$refs.carousel.next())})]),_:1})]),default:s(()=>[t(l,{name:1,"img-src":"https://cdn.quasar.dev/img/mountains.jpg"},{default:s(()=>[N]),_:1}),t(l,{name:2,"img-src":"https://cdn.quasar.dev/img/parallax1.jpg"}),t(l,{name:3,"img-src":"https://cdn.quasar.dev/img/parallax2.jpg"}),t(l,{name:4,"img-src":"https://cdn.quasar.dev/img/quasar.jpg"})]),_:1},8,["modelValue","autoplay"])])]),P,o("div",A,[(d(!0),g(h,null,y(c,(a,v)=>(d(),C(j,{class:"expcard",key:v},{default:s(()=>[t(b,{src:a.image,ratio:5/4},null,8,["src"]),t(f,null,{default:s(()=>[o("div",F,u(a.title),1),o("div",U,u(a.name),1)]),_:2},1024),t(f,{class:"q-pt-none"},{default:s(()=>[k(u(a.description),1)]),_:2},1024),t($,{align:"right"},{default:s(()=>[t(i,{flat:"",round:"",color:"red",icon:"favorite",onClick:e[4]||(e[4]=I=>r.addCollection({product:r.product._id,quantity:1}))}),t(i,{flat:"",round:"",color:"teal",icon:"bookmark"}),t(i,{flat:"",round:"",color:"primary",icon:"share"})]),_:1})]),_:2},1024))),128))])],64))}};export{z as default};

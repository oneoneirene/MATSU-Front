import{k as y,r as n,o as d,l as _,w as a,R as D,S as u,d as s,a as k,a3 as C,e as t,f as S,t as r,h as m,F as V,Y as p,W as B,V as q,a8 as h}from"./index.e1bbbb1d.js";import{Q as g}from"./QCardSection.e833669d.js";import{Q as v}from"./QCardActions.327f3112.js";import{Q as w}from"./QCard.491b0cfe.js";import{Q as A}from"./QAvatar.e767731c.js";import{Q as P}from"./QPage.22be49d5.js";const b={class:"q-pa-md row justify-center items-center q-gutter-md"},L={class:"text-h6"},$={class:"text-h6"},F={class:"text-h6"},N={class:"text-h6"},j={class:"text-h6"},E={class:"text-h6"},I={class:"q-ml-sm text-center q-ml-md"},K={__name:"PostmanagePage",props:["article"],setup(R){const i=y([]);n(1),n(!1);const c=n(!1),f=async()=>{try{const{data:o}=await D.get("/article");i.push(...o.result),console.log(o)}catch{u.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}};f();const x=async o=>{try{await q.delete("/article/"+o),await u.fire({icon:"success",title:"\u6210\u529F",text:"\u6295\u7A3F\u522A\u9664\u6210\u529F"}),f()}catch{u.fire({icon:"error",title:"\u6295\u7A3F\u522A\u9664\u5931\u6557",text:"\u6295\u7A3F\u522A\u9664\u5931\u6557"})}};return(o,l)=>(d(),_(P,null,{default:a(()=>[s("div",b,[(d(!0),k(V,null,C(i,(e,Q)=>(d(),_(w,{class:"card col-4",key:Q},{default:a(()=>[t(S,{src:e.image,ratio:4/3},null,8,["src"]),t(g,null,{default:a(()=>[s("div",L,"\u5206\u985E\uFF1A"+r(e.category),1),s("div",$,"\u6A19\u984C\uFF1A"+r(e.title),1),s("div",F,"\u6295\u7A3F\u4EBA\uFF1A"+r(e.name),1),s("div",N,"\u958B\u59CB\u65E5\u671F\uFF1A"+r(new Date(e.startDay).toLocaleDateString()),1),s("div",j,"\u7D50\u675F\u65E5\u671F\uFF1A"+r(new Date(e.endDay).toLocaleDateString()),1),s("div",E,"\u5167\u5BB9\uFF1A"+r(e.description),1)]),_:2},1024),t(v,{align:"right"},{default:a(()=>[t(m,{flat:"",round:"",color:"teal",onClick:l[0]||(l[0]=U=>c.value=!0),icon:"mdi-delete"})]),_:1})]),_:2},1024))),128))]),t(B,{modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=e=>c.value=e),persistent:""},{default:a(()=>[t(w,null,{default:a(()=>[t(g,{class:"row items-center"},{default:a(()=>[t(A,{icon:"mdi-account-arrow-right",color:"blue","text-color":"white"}),s("span",I,r(o.$t("Delete"))+" ?",1)]),_:1}),t(v,{align:"right"},{default:a(()=>[p(t(m,{flat:"",color:"blue",icon:"mdi-check-circle",onClick:l[1]||(l[1]=e=>x(i._id))},null,512),[[h]]),p(t(m,{flat:"",color:"blue",icon:"mdi-close-circle"},null,512),[[h]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{K as default};
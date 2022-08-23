import{r as d,h as Q,o as h,a as _,d as a,w as r,N as p,S as c,l as v,V as y,m,P as x,W as V,g as C,X as k,T as f,a7 as g}from"./index.0cce9599.js";import{Q as q}from"./QCardSection.90289d9c.js";import{Q as A}from"./QCardActions.1f0a1084.js";import{Q as S}from"./QCard.3b01aac7.js";import{Q as B,a as D}from"./QTable.e8c48d28.js";import"./QSeparator.3117d6dd.js";import"./use-checkbox.73140a2a.js";const N={class:"q-pa-md"},T={class:"q-ml-sm text-center q-ml-md"},j={__name:"MemberPage",setup(E){const s=d(""),i=d(!1),o=Q([]),b=[{name:"name",required:!0,label:"Name",align:"left",field:e=>e.name,sortable:!0},{name:"account",align:"center",label:"account",field:e=>e.account,sortable:!0},{name:"email",label:"email",field:e=>e.email,required:!0,sortable:!0},{name:"actions",label:"\u529F\u80FD"}],w=async e=>{try{await p.delete("/users/"+e),await c.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"}),u()}catch(t){c.fire({icon:"error",title:"\u522A\u9664\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message})}},u=async()=>{try{const{data:e}=await p.get("/users/all");o.splice(0,o.length),o.push(...e.result),console.log(o)}catch(e){console.log(e),c.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}};return u(),(e,t)=>(h(),_("div",N,[a(B,{title:"Treats",rows:o,columns:b,filter:s.value,"row-key":"name","binary-state-sort":""},{"top-right":r(()=>[a(v,{borderless:"",dense:"",debounce:"300",modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l),placeholder:"Search"},{append:r(()=>[a(y,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-actions":r(l=>[a(D,{props:l},{default:r(()=>[a(m,{icon:"delete",color:"blue",onClick:t[1]||(t[1]=n=>i.value=!0)}),a(x,{modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=n=>i.value=n),persistent:""},{default:r(()=>[a(S,null,{default:r(()=>[a(q,{class:"row items-center"},{default:r(()=>[a(V,{icon:"mdi-account-arrow-right",color:"primary","text-color":"white"}),C("span",T,k(e.$t("Delete"))+" ?",1)]),_:1}),a(A,{align:"right"},{default:r(()=>[f(a(m,{flat:"",color:"primary",icon:"mdi-check-circle",onClick:n=>w(l.row._id)},null,8,["onClick"]),[[g]]),f(a(m,{flat:"",color:"primary",icon:"mdi-close-circle"},null,512),[[g]])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1032,["props"])]),_:1},8,["rows","filter"])]))}};export{j as default};

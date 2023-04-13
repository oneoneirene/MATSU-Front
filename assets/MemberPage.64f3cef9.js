import{r as d,k as w,o as h,a as _,e as a,w as r,V as p,S as c,n as v,a0 as y,h as m,W as x,d as V,t as k,Y as f,a8 as g}from"./index.e1bbbb1d.js";import{Q as C}from"./QAvatar.e767731c.js";import{Q as q}from"./QCardSection.e833669d.js";import{Q as A}from"./QCardActions.327f3112.js";import{Q as S}from"./QCard.491b0cfe.js";import{Q as B,a as D}from"./QTable.d2e7ef42.js";import"./QSeparator.b39f5bd9.js";import"./use-checkbox.9122f026.js";const E={class:"q-pa-md"},N={class:"q-ml-sm text-center q-ml-md"},z={__name:"MemberPage",setup(T){const s=d(""),i=d(!1),o=w([]),b=[{name:"name",required:!0,label:"Name",align:"left",field:e=>e.name,sortable:!0},{name:"account",align:"center",label:"account",field:e=>e.account,sortable:!0},{name:"email",label:"email",field:e=>e.email,required:!0,sortable:!0},{name:"actions",label:"\u529F\u80FD"}],Q=async e=>{try{await p.delete("/users/"+e),await c.fire({icon:"success",title:"\u6210\u529F",text:"\u522A\u9664\u6210\u529F"}),u()}catch(t){c.fire({icon:"error",title:"\u522A\u9664\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message})}},u=async()=>{try{const{data:e}=await p.get("/users/all");o.splice(0,o.length),o.push(...e.result),console.log(o)}catch(e){console.log(e),c.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}};return u(),(e,t)=>(h(),_("div",E,[a(B,{title:"Treats",rows:o,columns:b,filter:s.value,"row-key":"name","binary-state-sort":""},{"top-right":r(()=>[a(v,{borderless:"",dense:"",debounce:"300",modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l),placeholder:"Search"},{append:r(()=>[a(y,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-actions":r(l=>[a(D,{props:l},{default:r(()=>[a(m,{icon:"delete",color:"blue",onClick:t[1]||(t[1]=n=>i.value=!0)}),a(x,{modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=n=>i.value=n),persistent:""},{default:r(()=>[a(S,null,{default:r(()=>[a(q,{class:"row items-center"},{default:r(()=>[a(C,{icon:"mdi-account-arrow-right",color:"primary","text-color":"white"}),V("span",N,k(e.$t("Delete"))+" ?",1)]),_:1}),a(A,{align:"right"},{default:r(()=>[f(a(m,{flat:"",color:"primary",icon:"mdi-check-circle",onClick:n=>Q(l.row._id)},null,8,["onClick"]),[[g]]),f(a(m,{flat:"",color:"primary",icon:"mdi-close-circle"},null,512),[[g]])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),_:2},1032,["props"])]),_:1},8,["rows","filter"])]))}};export{z as default};
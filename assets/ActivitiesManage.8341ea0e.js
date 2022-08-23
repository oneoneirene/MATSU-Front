import{h as A,r as v,O as L,o as u,i as m,w as s,P as V,S as c,g as n,d as l,l as r,j as T,k as p,U as f,R as D,W as z,X as x,Y as C,Z as P,$ as j,a as M,a1 as O,a7 as R,a2 as I,a3 as W,a4 as X,a5 as Y,a6 as Z,a0 as G,a8 as g}from"./index.f38dcf1d.js";import{Q as H}from"./QFile.93d9ff44.js";import{Q as U}from"./QToggle.c40482e4.js";import{Q as y}from"./QCard.ab8717a3.js";import{Q as J}from"./QForm.07d105f5.js";import{a as B,b as K,Q as ee}from"./QTable.f59dd677.js";import{Q as $}from"./QCardSection.6c03ad38.js";import{Q as E}from"./QCardActions.1e0dc808.js";import{Q as le}from"./QSeparator.e2d079fa.js";import{Q as te}from"./QPage.65ff2066.js";import"./use-checkbox.a9df4f7d.js";const ae={class:"row bg-blue",style:{height:"100px"}},oe={class:"row"},se={flat:"",class:"col",col:"10"},ie={class:"row"},ne={class:"col",col:"6"},de={class:"col",col:"6"},re={class:"row"},ue={class:"col",col:"6"},me={class:"col",col:"6"},ce={class:"row"},pe={class:"col",col:"12"},fe={class:"row"},ge={class:"col",col:"6"},ye={class:"q-pa-md"},be=["src"],ve={class:"q-ml-sm text-center q-ml-md"},Ve=["src"],xe={class:"flex",style:{"justify-content":"space-around"}},_e={class:"q-ml-sm text-center q-ml-md"},Be={__name:"ActivitiesManage",setup(we){const d=A([]),_=v(""),q=v([]),w=v(!1),h=v(!1),F=[{name:"image",label:"image"},{name:"name",required:!0,label:"Name",field:o=>o.name,sortable:!0},{name:"startDay",field:o=>o.startDay,label:"Start Day",sortable:!0},{name:"endDay",label:"End Day",field:o=>o.endDay,sortable:!0},{name:"edit",label:"Edit"}],t=A({_id:"",name:"",sell:!1,image:null,description:"",idx:-1,dialog:!1,valid:!1,submitting:!1,startDay:"",endDay:""}),Q=o=>{t._id=o;const e=o===""?-1:d.findIndex(b=>b._id===o);e>-1?(t.name=d[e].name,t.sell=d[e].sell,t.description=d[e].description,t.startDay=d[e].startDay.toLocalString(),t.endDay=d[e].endDay):(t.name="",t.sell=!1,t.description="",t.startDay="",t.endDay=""),t.image=null,t.idx=e,t.dialog=!0,t.valid=!1,t.submitting=!1},N=async()=>{t.submitting=!0;const o=new FormData;for(const e in t)["_id","idx","dialog","valid","submitting"].includes(e)||o.append(e,t[e]);console.log(o);try{if(t._id.length===0){const{data:e}=await V.post("/act/",o);d.push(e.result),c.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:e}=await V.patch("/act/"+t._id,o);console.log("1234"),d[t.idx]=e.result,c.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"}),k()}t.dialog=!1}catch(e){c.fire({icon:"success",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}t.submitting=!1},S=async o=>{try{await V.delete("/act/"+o),await c.fire({icon:"success",title:"\u6210\u529F",text:"\u6D3B\u52D5\u522A\u9664\u6210\u529F"}),k()}catch{c.fire({icon:"error",title:"\u6D3B\u52D5\u522A\u9664\u5931\u6557",text:"\u6D3B\u52D5\u522A\u9664\u5931\u6557"})}},k=async()=>{try{const{data:o}=await V.get("/act/all");d.splice(0,d.length),d.push(...o.result)}catch(o){console.log(o),c.fire({icon:"error",title:"\u5931\u6557",text:o.isAxiosError?o.response.data.message:o.message})}};return console.log(d),k(),(o,e)=>{const b=L("q-card-action");return u(),m(te,{id:"adminItinerary"},{default:s(()=>[n("div",ae,[l(r,{flat:"",fab:"",round:"","bg-blue":"",color:"white",icon:"mdi-plus",style:{width:"70px",height:"70px","margin-top":"15px","border-radius":"50%"},onClick:e[0]||(e[0]=a=>Q(""))}),l(D,{seamless:"",modelValue:t.dialog,"onUpdate:modelValue":e[8]||(e[8]=a=>t.dialog=a),persistent:""},{default:s(()=>[l(y,{id:"dialog"},{default:s(()=>[l(J,{modelValue:t.valid,"onUpdate:modelValue":e[7]||(e[7]=a=>t.valid=a),onSubmit:T(N,["prevent"])},{default:s(()=>[l(y,{flat:""},{default:s(()=>[n("div",oe,[n("div",se,[l(p,{rounded:"",flat:"",primary:"",standout:"",modelValue:t.name,"onUpdate:modelValue":e[1]||(e[1]=a=>t.name=a),label:o.$t("\u6D3B\u52D5\u540D\u7A31"),class:"q-ma-md"},null,8,["modelValue","label"])])]),n("div",ie,[n("div",ne,[l(p,{rounded:"",flat:"",primary:"",standout:"",modelValue:t.startDay,"onUpdate:modelValue":e[2]||(e[2]=a=>t.startDay=a),label:o.$t("\u958B\u59CB\u65E5\u671F"),class:"q-ma-md",style:{"box-shadow":"none"}},null,8,["modelValue","label"])]),n("div",de,[l(p,{rounded:"",flat:"",primary:"",standout:"",modelValue:t.endDay,"onUpdate:modelValue":e[3]||(e[3]=a=>t.endDay=a),label:o.$t("\u7D50\u675F\u65E5\u671F"),class:"q-ma-md",style:{"box-shadow":"none"}},null,8,["modelValue","label"])])]),n("div",re,[n("div",ue,[n("div",me,[l(H,{modelValue:t.image,"onUpdate:modelValue":e[4]||(e[4]=a=>t.image=a),rounded:"",standout:"",counter:"",label:o.$t("\u6D3B\u52D5\u5716\u7247")},null,8,["modelValue","label"])])])]),n("div",ce,[n("div",pe,[l(p,{modelValue:t.description,"onUpdate:modelValue":e[5]||(e[5]=a=>t.description=a),rounded:"",standout:"",label:"\u6D3B\u52D5\u8A73\u60C5",autogrow:"",type:"textarea"},null,8,["modelValue"])])]),n("div",fe,[n("div",ge,[l(U,{"false-value":!1,label:`On the Shelf - ${t.sell}`,"true-value":!0,color:"green","toggle-indeterminate":"false",modelValue:t.sell,"onUpdate:modelValue":e[6]||(e[6]=a=>t.sell=a)},null,8,["label","modelValue"])])]),l(b,{class:"text-center"},{default:s(()=>[f(l(r,{type:"sumbit",label:o.$t("submit"),color:"primary",loading:t.submitting},null,8,["label","loading"]),[[g]])]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),n("div",ye,[l(ee,{grid:o.$q.screen.lt.md,title:o.$t("\u6D3B\u52D5\u8CC7\u8A0A"),rows:d,columns:F,"row-key":"name",filter:_.value,selection:"multiple",selected:q.value,"onUpdate:selected":e[14]||(e[14]=a=>q.value=a)},{"top-right":s(()=>[l(p,{borderless:"",dense:"",debounce:"300",modelValue:_.value,"onUpdate:modelValue":e[9]||(e[9]=a=>_.value=a),placeholder:"Search"},{append:s(()=>[l(z,{name:"search"})]),_:1},8,["modelValue"])]),"header-selection":s(a=>[(u(),m(U,{modelValue:a.selected,"onUpdate:modelValue":i=>a.selected=i,key:d.sell},null,8,["modelValue","onUpdate:modelValue"]))]),"body-selection":s(a=>[(u(),m(U,{modelValue:a.selected,"onUpdate:modelValue":i=>a.selected=i,key:d.sell},null,8,["modelValue","onUpdate:modelValue"]))]),"body-cell-image":s(a=>[l(B,{style:{"text-align":"right"}},{default:s(()=>[l(x,null,{default:s(()=>[n("img",{src:a.row.image,alt:""},null,8,be)]),_:2},1024)]),_:2},1024)]),"body-cell-edit":s(a=>[l(B,{style:{"text-align":"right"}},{default:s(()=>[l(r,{round:"",class:"bg-accent",style:{width:"50px",height:"50px"},onClick:i=>Q(a.row._id),icon:"mdi-circle-edit-outline"},null,8,["onClick"]),l(r,{round:"",class:"bg-red",style:{width:"50px",height:"50px"},onClick:e[10]||(e[10]=i=>w.value=!0),icon:"mdi-delete"})]),_:2},1024),l(D,{modelValue:w.value,"onUpdate:modelValue":e[11]||(e[11]=i=>w.value=i),persistent:""},{default:s(()=>[l(y,null,{default:s(()=>[l($,{class:"row items-center"},{default:s(()=>[l(x,{icon:"mdi-account-arrow-right",color:"primary","text-color":"white"}),n("span",ve,C(o.$t("Delete"))+" ?",1)]),_:1}),l(E,{align:"right"},{default:s(()=>[f(l(r,{flat:"",color:"primary",icon:"mdi-check-circle",onClick:i=>S(a.row._id)},null,8,["onClick"]),[[g]]),f(l(r,{flat:"",color:"primary",icon:"mdi-close-circle"},null,512),[[g]])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),item:s(a=>[n("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:P(a.selected?"transform: scale(0.95);":"")},[l(y,{class:j(a.selected?"bg-grey-2":"")},{default:s(()=>[l($,null,{default:s(()=>[l(K,{dense:"",modelValue:a.selected,"onUpdate:modelValue":i=>a.selected=i,label:a.row.name},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024),l(le),(u(!0),M(G,null,O(a.cols,i=>(u(),m(R,{key:i.name},{default:s(()=>[l(I,{class:"text-center"},{default:s(()=>[l(W,{class:"text-center q-mx-auto"},{default:s(()=>[l(I,null,{default:s(()=>[i.name!=="image"?(u(),m(X,{key:0,caption:"",class:"text-center q-mx-auto"},{default:s(()=>[Y(C(i.value),1)]),_:2},1024)):i.name=="image"?(u(),m(x,{key:1,square:"",size:"200px",class:"text-center q-mx-auto"},{default:s(()=>[n("img",{src:a.row[i.name],alt:""},null,8,Ve)]),_:2},1024)):Z("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),l(b,{class:"q-mx-auto text-center"},{default:s(()=>[n("div",xe,[l(r,{rounded:"",class:"text-center bg-red",onClick:e[12]||(e[12]=i=>h.value=!0),icon:"mdi-delete",style:{width:"50px",height:"50px"}}),l(r,{rounded:"",class:"text-center bg-accent",onClick:i=>Q(a.row._id),icon:"mdi-circle-edit-outline",style:{width:"50px",height:"50px"}},null,8,["onClick"])])]),_:2},1024)]),_:2},1032,["class"]),l(D,{modelValue:h.value,"onUpdate:modelValue":e[13]||(e[13]=i=>h.value=i),persistent:""},{default:s(()=>[l(y,null,{default:s(()=>[l($,{class:"row items-center"},{default:s(()=>[l(x,{icon:"mdi-account-arrow-right",color:"primary","text-color":"white"}),n("span",_e,C(o.$t("Delete"))+" ?",1)]),_:1}),l(E,{align:"right"},{default:s(()=>[f(l(r,{flat:"",color:"primary",icon:"mdi-check-circle",onClick:i=>S(a.row._id)},null,8,["onClick"]),[[g]]),f(l(r,{flat:"",color:"primary",icon:"mdi-close-circle"},null,512),[[g]])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])],4)]),_:1},8,["grid","title","rows","filter","selected"])])]),_:1})}}};export{Be as default};

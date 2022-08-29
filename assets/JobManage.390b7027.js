import{i as S,r as V,T as J,o as u,j as c,w as s,U as x,S as p,d as n,e as t,m as r,k as N,l as m,X as f,V as D,$ as T,t as C,a0 as z,a1 as L,a as P,a2 as M,a7 as X,a3 as I,a4 as Y,a5 as G,a6 as H,Y as K,F as O,a8 as b}from"./index.07b69943.js";import{Q as q}from"./QToggle.7d42b098.js";import{Q as g}from"./QCard.0faac5b1.js";import{Q as R}from"./QForm.6dd955da.js";import{Q as v}from"./QAvatar.39d19618.js";import{a as A,b as W,Q as Z}from"./QTable.1bdaecd0.js";import{Q as U}from"./QCardSection.1c96db3a.js";import{Q as B}from"./QCardActions.8d58cc5e.js";import{Q as ee}from"./QSeparator.b8fcfd91.js";import{Q as le}from"./QPage.cdafcf2a.js";import"./use-checkbox.d26f6c95.js";const te={class:"row bg-blue",style:{height:"100px"}},ae={class:"row"},oe={flat:"",class:"col",col:"10"},se={class:"col",col:"10"},ie={class:"row"},ne={class:"col",col:"6"},de={class:"col",col:"6"},re={class:"row"},ue={class:"col",col:"10"},me={class:"row"},ce={class:"col",col:"10"},pe={class:"row"},fe={class:"col",col:"6"},be={class:"q-pa-md"},ge=["src"],ye={class:"q-ml-sm text-center q-ml-md"},Ve=["src"],xe={class:"flex",style:{"justify-content":"space-around"}},ve={class:"q-ml-sm text-center q-ml-md"},Ie={__name:"JobManage",setup(we){const d=S([]),w=V(""),$=V([]),h=V(!1),_=V(!1),E=[{name:"name",required:!0,label:"Name",field:o=>o.name,sortable:!0},{name:"Jobtitle",field:o=>o.jobtitle,label:"Jobtitle",sortable:!0},{name:"startDay",field:o=>o.startDay,label:"Start Day",sortable:!0},{name:"endDay",label:"End Day",field:o=>o.endDay,sortable:!0},{name:"edit",label:"Edit"}],l=S({_id:"",name:"",sell:!1,image:null,idx:-1,dialog:!1,valid:!1,submitting:!1,startDay:"",endDay:"",Jobtitle:"",Job:"",phone:""}),Q=o=>{l._id=o;const e=o===""?-1:d.findIndex(y=>y._id===o);e>-1?(l.name=d[e].name,l.sell=d[e].sell,l.startDay=d[e].startDay,l.endDay=d[e].endDay,l.job=d[e].job,l.jobtitle=d[e].jobtitle,l.phone=d[e].phone):(l.name="",l.sell=!1,l.startDay="",l.endDay="",l.job="",l.jobtitle="",l.phone=""),l.image=null,l.idx=e,l.dialog=!0,l.valid=!1,l.submitting=!1},F=async()=>{l.submitting=!0;const o=new FormData;for(const e in l)["_id","idx","dialog","valid","submitting"].includes(e)||o.append(e,l[e]);console.log(o);try{if(l._id.length===0){const{data:e}=await x.post("/job",o);d.push(e.result),p.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:e}=await x.patch("/job/"+l._id,o);console.log("1234"),d[l.idx]=e.result,p.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"}),k()}l.dialog=!1}catch(e){p.fire({icon:"success",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}l.submitting=!1},j=async o=>{try{await x.delete("/job/"+o),await p.fire({icon:"success",title:"\u6210\u529F",text:"\u884C\u7A0B\u522A\u9664\u6210\u529F"}),k()}catch{p.fire({icon:"error",title:"\u884C\u7A0B\u522A\u9664\u5931\u6557",text:"\u884C\u7A0B\u522A\u9664\u5931\u6557"})}},k=async()=>{try{const{data:o}=await x.get("/job/all");d.splice(0,d.length),d.push(...o.result)}catch(o){console.log(o),p.fire({icon:"error",title:"\u5931\u6557",text:o.isAxiosError?o.response.data.message:o.message})}};return console.log(d),k(),(o,e)=>{const y=J("q-card-action");return u(),c(le,{id:"adminItinerary"},{default:s(()=>[n("div",te,[t(r,{flat:"",fab:"",color:"white",icon:"mdi-plus",style:{width:"70px",height:"70px","margin-top":"15px","border-radius":"50%"},onClick:e[0]||(e[0]=a=>Q(""))}),t(D,{seamless:"",modelValue:l.dialog,"onUpdate:modelValue":e[9]||(e[9]=a=>l.dialog=a),persistent:""},{default:s(()=>[t(g,{id:"dialog"},{default:s(()=>[t(R,{modelValue:l.valid,"onUpdate:modelValue":e[8]||(e[8]=a=>l.valid=a),onSubmit:N(F,["prevent"])},{default:s(()=>[t(g,{flat:""},{default:s(()=>[n("div",ae,[n("div",oe,[t(m,{rounded:"",flat:"",primary:"",standout:"",modelValue:l.name,"onUpdate:modelValue":e[1]||(e[1]=a=>l.name=a),label:o.$t("\u767C\u6587\u8005"),class:"q-ma-md"},null,8,["modelValue","label"])]),n("div",se,[t(m,{rounded:"",flat:"",primary:"",standout:"",modelValue:l.jobtitle,"onUpdate:modelValue":e[2]||(e[2]=a=>l.jobtitle=a),label:o.$t("\u5DE5\u4F5C\u540D\u7A31"),class:"q-ma-md",style:{"box-shadow":"none"}},null,8,["modelValue","label"])])]),n("div",ie,[n("div",ne,[t(m,{rounded:"",flat:"",primary:"",standout:"",modelValue:l.startDay,"onUpdate:modelValue":e[3]||(e[3]=a=>l.startDay=a),label:o.$t("\u958B\u59CB\u65E5\u671F"),class:"q-ma-md",style:{"box-shadow":"none"}},null,8,["modelValue","label"])]),n("div",de,[t(m,{rounded:"",flat:"",primary:"",standout:"",modelValue:l.endDay,"onUpdate:modelValue":e[4]||(e[4]=a=>l.endDay=a),label:o.$t("\u622A\u6B62\u65E5\u671F"),class:"q-ma-md",style:{"box-shadow":"none"}},null,8,["modelValue","label"])])]),n("div",re,[n("div",ue,[t(m,{modelValue:l.job,"onUpdate:modelValue":e[5]||(e[5]=a=>l.job=a),rounded:"",standout:"",label:"\u5DE5\u4F5C\u8A73\u60C5",autogrow:"",type:"textarea",class:"q-ma-md"},null,8,["modelValue"])])]),n("div",me,[n("div",ce,[t(m,{modelValue:l.phone,"onUpdate:modelValue":e[6]||(e[6]=a=>l.phone=a),rounded:"",standout:"",label:"\u9023\u7D61\u96FB\u8A71",autogrow:"",type:"textarea",class:"q-ma-md"},null,8,["modelValue"])])]),n("div",pe,[n("div",fe,[t(q,{"false-value":!1,label:`\u8CBC\u6587\u986F\u793A - ${l.sell}`,"true-value":!0,color:"green","toggle-indeterminate":"false",modelValue:l.sell,"onUpdate:modelValue":e[7]||(e[7]=a=>l.sell=a)},null,8,["label","modelValue"])])]),t(y,{class:"text-center"},{default:s(()=>[f(t(r,{type:"sumbit",label:o.$t("submit"),color:"primary",loading:l.submitting},null,8,["label","loading"]),[[b]])]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),n("div",be,[t(Z,{grid:o.$q.screen.lt.md,title:o.$t("\u5FB5\u624D\u8CC7\u8A0A"),rows:d,columns:E,"row-key":"name",filter:w.value,selection:"multiple",selected:$.value,"onUpdate:selected":e[15]||(e[15]=a=>$.value=a)},{"top-right":s(()=>[t(m,{borderless:"",dense:"",debounce:"300",modelValue:w.value,"onUpdate:modelValue":e[10]||(e[10]=a=>w.value=a),placeholder:"Search"},{append:s(()=>[t(T,{name:"search"})]),_:1},8,["modelValue"])]),"header-selection":s(a=>[(u(),c(q,{modelValue:a.selected,"onUpdate:modelValue":i=>a.selected=i,key:d.sell},null,8,["modelValue","onUpdate:modelValue"]))]),"body-selection":s(a=>[(u(),c(q,{modelValue:a.selected,"onUpdate:modelValue":i=>a.selected=i,key:d.sell},null,8,["modelValue","onUpdate:modelValue"]))]),"body-cell-image":s(a=>[t(A,{style:{"text-align":"right"}},{default:s(()=>[t(v,null,{default:s(()=>[n("img",{src:a.row.image,alt:""},null,8,ge)]),_:2},1024)]),_:2},1024)]),"body-cell-edit":s(a=>[t(A,{style:{"text-align":"right"}},{default:s(()=>[t(r,{round:"",class:"bg-blue",style:{width:"50px",height:"50px"},onClick:i=>Q(a.row._id),icon:"mdi-circle-edit-outline"},null,8,["onClick"]),t(r,{round:"",class:"bg-pink-2",style:{width:"50px",height:"50px"},onClick:e[11]||(e[11]=i=>h.value=!0),icon:"mdi-delete"})]),_:2},1024),t(D,{modelValue:h.value,"onUpdate:modelValue":e[12]||(e[12]=i=>h.value=i),persistent:""},{default:s(()=>[t(g,null,{default:s(()=>[t(U,{class:"row items-center"},{default:s(()=>[t(v,{icon:"mdi-account-arrow-right",color:"primary","text-color":"white"}),n("span",ye,C(o.$t("Delete"))+" ?",1)]),_:1}),t(B,{align:"right"},{default:s(()=>[f(t(r,{flat:"",color:"primary",icon:"mdi-check-circle",onClick:i=>j(a.row._id)},null,8,["onClick"]),[[b]]),f(t(r,{flat:"",color:"primary",icon:"mdi-close-circle"},null,512),[[b]])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),item:s(a=>[n("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:z(a.selected?"transform: scale(0.95);":"")},[t(g,{class:L(a.selected?"bg-grey-2":"")},{default:s(()=>[t(U,null,{default:s(()=>[t(W,{dense:"",modelValue:a.selected,"onUpdate:modelValue":i=>a.selected=i,label:a.row.name},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024),t(ee),(u(!0),P(O,null,M(a.cols,i=>(u(),c(X,{key:i.name},{default:s(()=>[t(I,{class:"text-center"},{default:s(()=>[t(Y,{class:"text-center q-mx-auto"},{default:s(()=>[t(I,null,{default:s(()=>[i.name!=="image"?(u(),c(G,{key:0,caption:"",class:"text-center q-mx-auto"},{default:s(()=>[H(C(i.value),1)]),_:2},1024)):i.name=="image"?(u(),c(v,{key:1,square:"",size:"200px",class:"text-center q-mx-auto"},{default:s(()=>[n("img",{src:a.row[i.name],alt:""},null,8,Ve)]),_:2},1024)):K("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),t(y,{class:"q-mx-auto text-center"},{default:s(()=>[n("div",xe,[t(r,{rounded:"",class:"text-center bg-pink-2",onClick:e[13]||(e[13]=i=>_.value=!0),icon:"mdi-delete",style:{width:"50px",height:"50px"}}),t(r,{rounded:"",class:"text-center bg-blue",onClick:i=>Q(a.row._id),icon:"mdi-circle-edit-outline",style:{width:"50px",height:"50px"}},null,8,["onClick"])])]),_:2},1024)]),_:2},1032,["class"]),t(D,{modelValue:_.value,"onUpdate:modelValue":e[14]||(e[14]=i=>_.value=i),persistent:""},{default:s(()=>[t(g,null,{default:s(()=>[t(U,{class:"row items-center"},{default:s(()=>[t(v,{icon:"mdi-account-arrow-right",color:"primary","text-color":"white"}),n("span",ve,C(o.$t("Delete"))+" ?",1)]),_:1}),t(B,{align:"right"},{default:s(()=>[f(t(r,{flat:"",color:"primary",icon:"mdi-check-circle",onClick:i=>j(a.row._id)},null,8,["onClick"]),[[b]]),f(t(r,{flat:"",color:"primary",icon:"mdi-close-circle"},null,512),[[b]])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])],4)]),_:1},8,["grid","title","rows","filter","selected"])])]),_:1})}}};export{Ie as default};

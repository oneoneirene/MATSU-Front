import{N as oe,r as m,h as Y,O as se,o as c,a as B,d as a,l as d,w as s,P as y,S as p,g as n,R as ne,T as h,j as F,k as u,U as ie,V as f,W as de,X as re,i as V,Y as _,Z as S,$ as ue,a0 as me,a1 as ce,a2 as pe,a3 as M,a4 as fe,a5 as ge,a6 as be,a7 as ye,a8 as Ve,a9 as g}from"./index.23952c9c.js";import{Q as A}from"./QFile.56641a38.js";import{Q as v}from"./QCardSection.a2e72ed5.js";import{Q as I}from"./QCardActions.29e03611.js";import{Q as U}from"./QForm.818e681d.js";import{Q as b}from"./QCard.76dbfe53.js";import{Q as ve,a as z,b as xe,c as E}from"./QTabPanels.4b7a04d8.js";import{Q}from"./QToggle.20fa39fc.js";import{Q as Z,a as T,b as we}from"./QTable.e30965f7.js";import{Q as he}from"./QSeparator.5b69ca88.js";import{Q as _e}from"./QSplitter.c6df352f.js";import"./use-checkbox.05d1c8f3.js";const Ue={id:"q-app"},Qe={class:"img",style:{margin:"auto"}},qe=n("div",{class:"text-h4 q-mb-md text-center",style:{"margin-top":"10px"}},"\u500B\u4EBA\u8CC7\u6599\u7BA1\u7406",-1),ke={class:"q-pa-md",style:{"max-width":"300",margin:"auto"}},De=n("span",null,"ID",-1),Ce=n("span",null,"\u5E33\u865F",-1),$e=n("span",null,"\u6703\u54E1\u66B1\u7A31",-1),Se=n("span",null,"\u96FB\u5B50\u4FE1\u7BB1",-1),Ae=n("div",{class:"text-h4 q-mb-md text-center"},"\u8CBC\u6587\u7BA1\u7406",-1),Ie={class:"row bg-blue",style:{height:"100px"}},ze={class:"row"},Ee={flat:"",class:"col",col:"10"},Te={class:"row"},Re={class:"col",col:"6"},Ne={class:"col",col:"6"},Le={class:"col",col:"12"},Pe={class:"row"},Ye={class:"col",col:"12"},Be={class:"row"},Fe={class:"col",col:"12"},Me={class:"row"},Ze={class:"col",col:"6"},je={class:"q-pa-md"},Ke=["src"],Oe={class:"q-ml-sm text-center q-ml-md"},Ge=["src"],We={class:"flex",style:{"justify-content":"space-around"}},He={class:"q-ml-sm text-center q-ml-md"},Je=n("div",{class:"text-h4 q-mb-md text-center"},"\u6536\u85CF\u7684\u6587\u7AE0",-1),Xe={class:"q-pa-md"},pl={__name:"UserPage",setup(el){const r=[],q=oe(),x=m("mails"),R=m(20),N=m(null),j=m(""),K=()=>{console.log("handleUpload is triggered"),N.value&&(j.value=URL.createObjectURL(N.value))},O=m(null),G=m(null),W=m(null),H=m(null),k=m(!1),t=Y({_id:"",account:"",email:"",name:"",image:null,submitting:!1,post:"",category:"",title:"",description:"",idx:-1,dialog:!1,valid:!1,startDay:"",endDay:"",sell:!1});console.log(t.name);const D=Y({account:[e=>!!e||"\u5E33\u865F\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5E33\u865F\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5E33\u865F\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],password:[e=>!!e||"\u5BC6\u78BC\u5FC5\u586B",e=>e.length>=4&&e.length<=15||"\u5BC6\u78BC\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5BC6\u78BC\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],email:[e=>!!e||"Required",e=>/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(e)||"Wrong"],name:[e=>!!e||"\u540D\u7A31\u5FC5\u586B",e=>e.length>=2&&e.length<=7||"\u9577\u5EA6\u70BA 2 \u5230 7 \u500B\u5B57"]}),J=()=>{k.value!==!0?q.notify({color:"red-5",textColor:"white",icon:"warning",message:"You need to accept the license and terms first"}):q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Submitted"})},X=()=>{t.account.value=null,t.name.value=null,t._id.value=null,t.email.value=null,O.value.resetValidation(),G.value.resetValidation(),W.value.resetValidation(),H.value.resetValidation()},ee=[{name:"image",label:"Image"},{name:"name",required:!0,label:"Name",field:e=>e.name,sortable:!0},{name:"title",label:"Title",field:e=>e.title,sortable:!0},{name:"startDay",field:e=>e.startDay,label:"Start Day",sortable:!0},{name:"endDay",label:"End Day",field:e=>e.endDay,sortable:!0},{name:"edit",label:"Edit"}],C=e=>{t._id=e;const l=e===""?-1:r.findIndex(w=>w._id===e);l>-1?(t.name=r[l].name,t.sell=r[l].sell,t.description=r[l].description,t.title=r[l].title,t.startDay=r[l].startDay,t.endDay=r[l].endDay):(t.name="",t.sell=!1,t.description="",t.startDay="",t.endDay="",t.title=""),t.image=null,t.idx=l,t.dialog=!0,t.valid=!1,t.submitting=!1},L=async()=>{t.submitting=!0;const e=new FormData;for(const l in t)["_id","idx","dialog","valid","submitting"].includes(l)||e.append(l,t[l]);console.log(e);try{if(t._id.length===0){const{data:l}=await y.post("/exp/",e);r.push(l.result),p.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:l}=await y.patch("/exp/"+t._id,e);console.log("1234"),r[t.idx]=l.result,p.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"}),$()}t.dialog=!1}catch(l){p.fire({icon:"success",title:"\u5931\u6557",text:l.isAxiosError?l.response.data.message:l.message})}t.submitting=!1},P=async e=>{try{await y.delete("/exp/"+e),await p.fire({icon:"success",title:"\u6210\u529F",text:"\u6D3B\u52D5\u522A\u9664\u6210\u529F"}),$()}catch{p.fire({icon:"error",title:"\u6D3B\u52D5\u522A\u9664\u5931\u6557",text:"\u6D3B\u52D5\u522A\u9664\u5931\u6557"})}},le=[{name:"names2",required:!0,label:"\u6587\u7AE0\u5206\u985E",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"calories",align:"center",label:"\u6587\u7AE0\u6A19\u984C",field:"calories",sortable:!0},{name:"fat",label:"\u56DE\u8986",field:"fat",sortable:!0},{name:"actions",label:"\u529F\u80FD",field:"actions"}],ae=[{name:"Frozen Yogurt",calories:159,fat:6},{name:"Ice cream sandwich",calories:237,fat:9},{name:"Eclair",calories:262,fat:16},{name:"Cupcake",calories:305,fat:3.7},{name:"Gingerbread",calories:356,fat:16},{name:"Jelly bean",calories:375,fat:0},{name:"Lollipop",calories:392,fat:.2},{name:"Honeycomb",calories:408,fat:3.2},{name:"Donut",calories:452,fat:25},{name:"KitKat",calories:518,fat:26}],$=async()=>{try{const{data:e}=await y.get("/users");console.log(e.result),t._id=e.result._id,t.account=e.result.account,t.email=e.result.email,t.name=e.result.name,t.image=e.result.image}catch(e){console.log(e),p.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}};$();const te=async()=>{try{const{data:e}=await y.get("/exp/all");r.splice(0,r.length),r.push(...e.result)}catch(e){console.log(e),p.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}};return console.log(r),te(),(e,l)=>{const w=se("q-card-action");return c(),B("div",null,[a(d,{round:"",color:"primary",icon:"shopping_cart"}),a(d,{round:"",color:"secondary",icon:"navigation"}),a(d,{round:"",color:"amber",glossy:"","text-color":"black",icon:"layers_clear"}),a(_e,{modelValue:R.value,"onUpdate:modelValue":l[29]||(l[29]=o=>R.value=o),style:{height:"1000px"}},{before:s(()=>[a(ve,{modelValue:x.value,"onUpdate:modelValue":l[6]||(l[6]=o=>x.value=o),vertical:"",class:"text-teal"},{default:s(()=>[n("div",Ue,[a(U,null,{default:s(()=>[n("div",Qe,[a(ne,{src:t.image,"spinner-color":"white",style:{height:"300px"}},null,8,["src"])]),n("div",null,[a(A,{modelValue:t.image,"onUpdate:modelValue":[l[0]||(l[0]=o=>t.image=o),l[1]||(l[1]=o=>K())],"show-size":"",label:"\u9078\u64C7\u5716\u7247",filled:"",style:{"max-width":"400px",margin:"auto"}},null,8,["modelValue"])]),a(h,{modelValue:t.dialog,"onUpdate:modelValue":l[5]||(l[5]=o=>t.dialog=o),persistent:""},{default:s(()=>[a(b,{style:{"min-width":"350px"}},{default:s(()=>[a(U,{onSubmit:F(L,["prevent"])},{default:s(()=>[a(v,null,{default:s(()=>[a(A,{modelValue:t.image,"onUpdate:modelValue":l[2]||(l[2]=o=>t.image=o),label:"IMAGE"},null,8,["modelValue"])]),_:1}),a(v,{class:"q-pt-none"},{default:s(()=>[a(u,{dense:"",modelValue:t.name,"onUpdate:modelValue":l[3]||(l[3]=o=>t.name=o),label:"NAME",autofocus:"",onKeyup:l[4]||(l[4]=ie(o=>e.prompt=!1,["enter"]))},null,8,["modelValue"])]),_:1}),a(I,{align:"right",class:"text-primary"},{default:s(()=>[f(a(d,{flat:"",label:"Cancel"},null,512),[[g]]),f(a(d,{flat:"",type:"submit",label:"SUBMIT"},null,512),[[g]])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),a(z,{name:"mails",icon:"mail",label:"\u4FEE\u6539\u500B\u4EBA\u8CC7\u6599"}),a(z,{name:"alarms",icon:"alarm",label:"\u8CBC\u6587\u7BA1\u7406"}),a(z,{name:"movies",icon:"movie",label:"\u6211\u6536\u85CF\u7684\u6587\u7AE0"})]),_:1},8,["modelValue"])]),after:s(()=>[a(xe,{modelValue:x.value,"onUpdate:modelValue":l[28]||(l[28]=o=>x.value=o),animated:"",swipeable:"",vertical:"","transition-prev":"jump-up","transition-next":"jump-up"},{default:s(()=>[a(E,{name:"mails"},{default:s(()=>[qe,n("div",ke,[a(U,{onSubmit:J,onReset:X,class:"q-gutter-md"},{default:s(()=>[De,a(u,{readonly:"",filled:"",modelValue:t._id,"onUpdate:modelValue":l[7]||(l[7]=o=>t._id=o),label:"Your ID *"},null,8,["modelValue"]),Ce,a(u,{readonly:"",filled:"",modelValue:t.account,"onUpdate:modelValue":l[8]||(l[8]=o=>t.account=o),label:"Your Account *","lazy-rules":"",maxlength:"20",rules:D.account},null,8,["modelValue","rules"]),$e,a(u,{filled:"",readonly:"",type:"text",modelValue:t.name,"onUpdate:modelValue":l[9]||(l[9]=o=>t.name=o),label:"Your Name *","lazy-rules":"",rules:D.name},null,8,["modelValue","rules"]),Se,a(u,{readonly:"",filled:"",type:"text",modelValue:t.email,"onUpdate:modelValue":l[10]||(l[10]=o=>t.email=o),label:"Your Email *","lazy-rules":"",rules:D.email},null,8,["modelValue","rules"]),a(Q,{modelValue:k.value,"onUpdate:modelValue":l[11]||(l[11]=o=>k.value=o),label:"I accept the license and terms"},null,8,["modelValue"]),n("div",null,[a(d,{label:"\u4FEE\u6539",type:"submit",color:"primary"}),a(d,{label:"\u91CD\u7F6E",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1})])]),_:1}),a(E,{name:"alarms"},{default:s(()=>[Ae,n("div",Ie,[a(d,{flat:"",fab:"",round:"","bg-blue":"",color:"white",icon:"mdi-plus",style:{width:"70px",height:"70px","margin-top":"15px","border-radius":"50%"},onClick:l[12]||(l[12]=o=>C(""))}),a(h,{seamless:"",modelValue:t.dialog,"onUpdate:modelValue":l[21]||(l[21]=o=>t.dialog=o),persistent:""},{default:s(()=>[a(b,{id:"dialog"},{default:s(()=>[a(U,{modelValue:t.valid,"onUpdate:modelValue":l[20]||(l[20]=o=>t.valid=o),onSubmit:F(L,["prevent"])},{default:s(()=>[a(b,{flat:""},{default:s(()=>[n("div",ze,[n("div",Ee,[a(u,{rounded:"",flat:"",primary:"",standout:"",modelValue:t.name,"onUpdate:modelValue":l[13]||(l[13]=o=>t.name=o),label:e.$t("\u767C\u6587\u8005\u540D\u7A31"),class:"q-ma-md"},null,8,["modelValue","label"])])]),n("div",Te,[n("div",Re,[a(u,{rounded:"",flat:"",primary:"",standout:"",modelValue:t.startDay,"onUpdate:modelValue":l[14]||(l[14]=o=>t.startDay=o),label:e.$t("\u958B\u59CB\u65E5\u671F"),class:"q-ma-md",style:{"box-shadow":"none"}},null,8,["modelValue","label"])]),n("div",Ne,[a(u,{rounded:"",flat:"",primary:"",standout:"",modelValue:t.endDay,"onUpdate:modelValue":l[15]||(l[15]=o=>t.endDay=o),label:e.$t("\u7D50\u675F\u65E5\u671F"),class:"q-ma-md",style:{"box-shadow":"none"}},null,8,["modelValue","label"])])]),n("div",Le,[a(u,{rounded:"",flat:"",primary:"",standout:"",modelValue:t.title,"onUpdate:modelValue":l[16]||(l[16]=o=>t.title=o),label:e.$t("\u6A19\u984C"),class:"q-ma-md",style:{"box-shadow":"none"}},null,8,["modelValue","label"])]),n("div",Pe,[n("div",Ye,[a(u,{modelValue:t.description,"onUpdate:modelValue":l[17]||(l[17]=o=>t.description=o),class:"q-ma-md",style:{"box-shadow":"none"},rounded:"",standout:"",label:"\u64B0\u5BEB\u5FC3\u5F97",autogrow:"",type:"textarea"},null,8,["modelValue"])])]),n("div",Be,[n("div",Fe,[a(A,{modelValue:t.image,"onUpdate:modelValue":l[18]||(l[18]=o=>t.image=o),rounded:"",standout:"",counter:"",class:"q-ma-md",style:{"box-shadow":"none"},label:e.$t("\u5FC3\u5F97\u5716\u7247")},null,8,["modelValue","label"])])]),n("div",Me,[n("div",Ze,[a(Q,{"false-value":!1,label:`On the Shelf - ${t.sell}`,"true-value":!0,color:"green","toggle-indeterminate":"false",modelValue:t.sell,"onUpdate:modelValue":l[19]||(l[19]=o=>t.sell=o)},null,8,["label","modelValue"])])]),a(w,{class:"text-center"},{default:s(()=>[f(a(d,{type:"sumbit",label:e.$t("submit"),color:"primary",loading:t.submitting},null,8,["label","loading"]),[[g]])]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),n("div",je,[a(Z,{grid:de(q).screen.lt.md,title:e.$t("\u793E\u5340\u516C\u544A"),rows:r,columns:ee,"row-key":"name",filter:e.filter,selection:"multiple",selected:e.selected,"onUpdate:selected":l[27]||(l[27]=o=>e.selected=o)},{"top-right":s(()=>[a(u,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":l[22]||(l[22]=o=>e.filter=o),placeholder:"Search"},{append:s(()=>[a(re,{name:"search"})]),_:1},8,["modelValue"])]),"header-selection":s(o=>[(c(),V(Q,{modelValue:o.selected,"onUpdate:modelValue":i=>o.selected=i,key:r.sell},null,8,["modelValue","onUpdate:modelValue"]))]),"body-selection":s(o=>[(c(),V(Q,{modelValue:o.selected,"onUpdate:modelValue":i=>o.selected=i,key:r.sell},null,8,["modelValue","onUpdate:modelValue"]))]),"body-cell-image":s(o=>[a(T,{style:{"text-align":"right"}},{default:s(()=>[a(_,null,{default:s(()=>[n("img",{src:o.row.image,alt:""},null,8,Ke)]),_:2},1024)]),_:2},1024)]),"body-cell-edit":s(o=>[a(T,{style:{"text-align":"right"}},{default:s(()=>[a(d,{round:"",class:"bg-accent",style:{width:"50px",height:"50px"},onClick:i=>C(o.row._id),icon:"mdi-circle-edit-outline"},null,8,["onClick"]),a(d,{round:"",class:"bg-red",style:{width:"50px",height:"50px"},onClick:l[23]||(l[23]=i=>e.confirm=!0),icon:"mdi-delete"})]),_:2},1024),a(h,{modelValue:e.confirm,"onUpdate:modelValue":l[24]||(l[24]=i=>e.confirm=i),persistent:""},{default:s(()=>[a(b,null,{default:s(()=>[a(v,{class:"row items-center"},{default:s(()=>[a(_,{icon:"mdi-account-arrow-right",color:"primary","text-color":"white"}),n("span",Oe,S(e.$t("Delete"))+" ?",1)]),_:1}),a(I,{align:"right"},{default:s(()=>[f(a(d,{flat:"",color:"primary",icon:"mdi-check-circle",onClick:i=>P(o.row._id)},null,8,["onClick"]),[[g]]),f(a(d,{flat:"",color:"primary",icon:"mdi-close-circle"},null,512),[[g]])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),item:s(o=>[n("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:ue(o.selected?"transform: scale(0.95);":"")},[a(b,{class:me(o.selected?"bg-grey-2":"")},{default:s(()=>[a(v,null,{default:s(()=>[a(we,{dense:"",modelValue:o.selected,"onUpdate:modelValue":i=>o.selected=i,label:o.row.name},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024),a(he),(c(!0),B(ce,null,pe(o.cols,i=>(c(),V(Ve,{key:i.name},{default:s(()=>[a(M,{class:"text-center"},{default:s(()=>[a(fe,{class:"text-center q-mx-auto"},{default:s(()=>[a(M,null,{default:s(()=>[i.name!=="image"?(c(),V(ge,{key:0,caption:"",class:"text-center q-mx-auto"},{default:s(()=>[be(S(i.value),1)]),_:2},1024)):i.name=="image"?(c(),V(_,{key:1,square:"",size:"200px",class:"text-center q-mx-auto"},{default:s(()=>[n("img",{src:o.row[i.name],alt:""},null,8,Ge)]),_:2},1024)):ye("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),a(w,{class:"q-mx-auto text-center"},{default:s(()=>[n("div",We,[a(d,{rounded:"",class:"text-center bg-red",onClick:l[25]||(l[25]=i=>e.confirmSm=!0),icon:"mdi-delete",style:{width:"50px",height:"50px"}}),a(d,{rounded:"",class:"text-center bg-accent",onClick:i=>C(o.row._id),icon:"mdi-circle-edit-outline",style:{width:"50px",height:"50px"}},null,8,["onClick"])])]),_:2},1024)]),_:2},1032,["class"]),a(h,{modelValue:e.confirmSm,"onUpdate:modelValue":l[26]||(l[26]=i=>e.confirmSm=i),persistent:""},{default:s(()=>[a(b,null,{default:s(()=>[a(v,{class:"row items-center"},{default:s(()=>[a(_,{icon:"mdi-account-arrow-right",color:"primary","text-color":"white"}),n("span",He,S(e.$t("Delete"))+" ?",1)]),_:1}),a(I,{align:"right"},{default:s(()=>[f(a(d,{flat:"",color:"primary",icon:"mdi-check-circle",onClick:i=>P(o.row._id)},null,8,["onClick"]),[[g]]),f(a(d,{flat:"",color:"primary",icon:"mdi-close-circle"},null,512),[[g]])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])],4)]),_:1},8,["grid","title","filter","selected"])])]),_:1}),a(E,{name:"movies"},{default:s(()=>[Je,n("div",Xe,[a(Z,{title:"My Likes",rows:ae,columns:le,"row-key":"name2"},{"body-cell-actions":s(o=>[a(T,{props:o},{default:s(()=>[a(d,{icon:"mdi-heart",onClick:i=>e.onEdit(o.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1})])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}};export{pl as default};

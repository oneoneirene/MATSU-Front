import{Q as oe}from"./QImg.eeeeeaf4.js";import{Q as S}from"./QFile.93d9ff44.js";import{N as se,r as u,h as Y,O as ne,o as c,a as B,d as t,w as s,P as y,S as p,g as n,l as r,R as _,j as F,k as m,T as ie,U as f,V as de,W as re,i as V,X as U,Y as A,Z as me,$ as ue,a0 as ce,a1 as pe,a2 as M,a3 as fe,a4 as ge,a5 as be,a6 as ye,a7 as Ve,a8 as g}from"./index.f38dcf1d.js";import{Q as v}from"./QCardSection.6c03ad38.js";import{Q as I}from"./QCardActions.1e0dc808.js";import{Q}from"./QForm.07d105f5.js";import{Q as b}from"./QCard.ab8717a3.js";import{Q as ve,a as z,b as xe,c as E}from"./QTabPanels.e257e3d6.js";import{Q as q}from"./QToggle.c40482e4.js";import{Q as Z,a as T,b as we}from"./QTable.f59dd677.js";import{Q as he}from"./QSeparator.e2d079fa.js";import{Q as _e}from"./QSplitter.dbc420aa.js";import"./use-checkbox.a9df4f7d.js";const Ue={id:"q-app"},Qe={class:"img",style:{margin:"auto"}},qe=n("div",{class:"text-h4 q-mb-md text-center",style:{"margin-top":"10px"}},"\u500B\u4EBA\u8CC7\u6599\u7BA1\u7406",-1),ke={class:"q-pa-md",style:{"max-width":"300",margin:"auto"}},Ce=n("span",null,"ID",-1),De=n("span",null,"\u5E33\u865F",-1),$e=n("span",null,"\u6703\u54E1\u66B1\u7A31",-1),Se=n("span",null,"\u96FB\u5B50\u4FE1\u7BB1",-1),Ae=n("div",{class:"text-h4 q-mb-md text-center"},"\u8CBC\u6587\u7BA1\u7406",-1),Ie={class:"row bg-blue",style:{height:"100px"}},ze={class:"row"},Ee={flat:"",class:"col",col:"10"},Te={class:"row"},Re={class:"col",col:"6"},Ne={class:"col",col:"6"},Le={class:"col",col:"12"},Pe={class:"row"},Ye={class:"col",col:"12"},Be={class:"row"},Fe={class:"col",col:"12"},Me={class:"row"},Ze={class:"col",col:"6"},je={class:"q-pa-md"},Ke=["src"],Oe={class:"q-ml-sm text-center q-ml-md"},Ge=["src"],We={class:"flex",style:{"justify-content":"space-around"}},He={class:"q-ml-sm text-center q-ml-md"},Je=n("div",{class:"text-h4 q-mb-md text-center"},"\u6536\u85CF\u7684\u6587\u7AE0",-1),Xe={class:"q-pa-md"},fl={__name:"UserPage",setup(el){const d=[],k=se(),x=u("mails"),R=u(20),N=u(null),j=u(""),K=()=>{console.log("handleUpload is triggered"),N.value&&(j.value=URL.createObjectURL(N.value))},O=u(null),G=u(null),W=u(null),H=u(null),C=u(!1),a=Y({_id:"",account:"",email:"",name:"",image:null,submitting:!1,post:"",category:"",title:"",description:"",idx:-1,dialog:!1,valid:!1,startDay:"",endDay:"",sell:!1});console.log(a.name);const D=Y({account:[e=>!!e||"\u5E33\u865F\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5E33\u865F\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5E33\u865F\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],password:[e=>!!e||"\u5BC6\u78BC\u5FC5\u586B",e=>e.length>=4&&e.length<=15||"\u5BC6\u78BC\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5BC6\u78BC\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],email:[e=>!!e||"Required",e=>/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(e)||"Wrong"],name:[e=>!!e||"\u540D\u7A31\u5FC5\u586B",e=>e.length>=2&&e.length<=7||"\u9577\u5EA6\u70BA 2 \u5230 7 \u500B\u5B57"]}),J=()=>{C.value!==!0?k.notify({color:"red-5",textColor:"white",icon:"warning",message:"You need to accept the license and terms first"}):k.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Submitted"})},X=()=>{a.account.value=null,a.name.value=null,a._id.value=null,a.email.value=null,O.value.resetValidation(),G.value.resetValidation(),W.value.resetValidation(),H.value.resetValidation()},ee=[{name:"image",label:"Image"},{name:"name",required:!0,label:"Name",field:e=>e.name,sortable:!0},{name:"title",label:"Title",field:e=>e.title,sortable:!0},{name:"startDay",field:e=>e.startDay,label:"Start Day",sortable:!0},{name:"endDay",label:"End Day",field:e=>e.endDay,sortable:!0},{name:"edit",label:"Edit"}],w=e=>{a._id=e;const l=e===""?-1:d.findIndex(h=>h._id===e);l>-1?(a.name=d[l].name,a.sell=d[l].sell,a.description=d[l].description,a.title=d[l].title,a.startDay=d[l].startDay,a.endDay=d[l].endDay):(a.name="",a.sell=!1,a.description="",a.startDay="",a.endDay="",a.title=""),a.image=null,a.idx=l,a.dialog=!0,a.valid=!1,a.submitting=!1},L=async()=>{a.submitting=!0;const e=new FormData;for(const l in a)["_id","idx","dialog","valid","submitting"].includes(l)||e.append(l,a[l]);console.log(e);try{if(a._id.length===0){const{data:l}=await y.post("/exp/",e);d.push(l.result),p.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:l}=await y.patch("/exp/"+a._id,e);console.log("1234"),d[a.idx]=l.result,p.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"}),$()}a.dialog=!1}catch(l){p.fire({icon:"success",title:"\u5931\u6557",text:l.isAxiosError?l.response.data.message:l.message})}a.submitting=!1},P=async e=>{try{await y.delete("/exp/"+e),await p.fire({icon:"success",title:"\u6210\u529F",text:"\u6D3B\u52D5\u522A\u9664\u6210\u529F"}),$()}catch{p.fire({icon:"error",title:"\u6D3B\u52D5\u522A\u9664\u5931\u6557",text:"\u6D3B\u52D5\u522A\u9664\u5931\u6557"})}},le=[{name:"names2",required:!0,label:"\u6587\u7AE0\u5206\u985E",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"calories",align:"center",label:"\u6587\u7AE0\u6A19\u984C",field:"calories",sortable:!0},{name:"fat",label:"\u56DE\u8986",field:"fat",sortable:!0},{name:"actions",label:"\u529F\u80FD",field:"actions"}],te=[{name:"Frozen Yogurt",calories:159,fat:6},{name:"Ice cream sandwich",calories:237,fat:9},{name:"Eclair",calories:262,fat:16},{name:"Cupcake",calories:305,fat:3.7},{name:"Gingerbread",calories:356,fat:16},{name:"Jelly bean",calories:375,fat:0},{name:"Lollipop",calories:392,fat:.2},{name:"Honeycomb",calories:408,fat:3.2},{name:"Donut",calories:452,fat:25},{name:"KitKat",calories:518,fat:26}],$=async()=>{try{const{data:e}=await y.get("/users");console.log(e.result),a._id=e.result._id,a.account=e.result.account,a.email=e.result.email,a.name=e.result.name,a.image=e.result.image}catch(e){console.log(e),p.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}};$();const ae=async()=>{try{const{data:e}=await y.get("/exp/all");d.splice(0,d.length),d.push(...e.result)}catch(e){console.log(e),p.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError?e.response.data.message:e.message})}};return console.log(d),ae(),(e,l)=>{const h=ne("q-card-action");return c(),B("div",null,[t(_e,{modelValue:R.value,"onUpdate:modelValue":l[30]||(l[30]=o=>R.value=o),style:{height:"1000px"}},{before:s(()=>[t(ve,{modelValue:x.value,"onUpdate:modelValue":l[7]||(l[7]=o=>x.value=o),vertical:"",class:"text-teal"},{default:s(()=>[n("div",Ue,[t(Q,null,{default:s(()=>[n("div",Qe,[t(oe,{src:a.image,"spinner-color":"white",style:{height:"300px"}},null,8,["src"])]),n("div",null,[t(S,{modelValue:a.image,"onUpdate:modelValue":[l[0]||(l[0]=o=>a.image=o),l[1]||(l[1]=o=>K())],"show-size":"",label:"\u9078\u64C7\u5716\u7247",filled:"",style:{"max-width":"400px",margin:"auto"}},null,8,["modelValue"]),t(r,{flat:"",fab:"","bg-blue":"",icon:"mdi-plus",style:{width:"70px",height:"70px","margin-top":"15px","border-radius":"50%"},onClick:l[2]||(l[2]=o=>w("form._id"))})]),t(_,{modelValue:a.dialog,"onUpdate:modelValue":l[6]||(l[6]=o=>a.dialog=o),persistent:""},{default:s(()=>[t(b,{style:{"min-width":"350px"}},{default:s(()=>[t(Q,{onSubmit:F(L,["prevent"])},{default:s(()=>[t(v,null,{default:s(()=>[t(S,{modelValue:a.image,"onUpdate:modelValue":l[3]||(l[3]=o=>a.image=o),label:"IMAGE"},null,8,["modelValue"])]),_:1}),t(v,{class:"q-pt-none"},{default:s(()=>[t(m,{dense:"",modelValue:a.name,"onUpdate:modelValue":l[4]||(l[4]=o=>a.name=o),label:"NAME",autofocus:"",onKeyup:l[5]||(l[5]=ie(o=>e.prompt=!1,["enter"]))},null,8,["modelValue"])]),_:1}),t(I,{align:"right",class:"text-primary"},{default:s(()=>[f(t(r,{flat:"",label:"Cancel"},null,512),[[g]]),f(t(r,{flat:"",type:"submit",label:"SUBMIT"},null,512),[[g]])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),t(z,{name:"mails",icon:"mail",label:"\u4FEE\u6539\u500B\u4EBA\u8CC7\u6599"}),t(z,{name:"alarms",icon:"alarm",label:"\u8CBC\u6587\u7BA1\u7406"}),t(z,{name:"movies",icon:"movie",label:"\u6211\u6536\u85CF\u7684\u6587\u7AE0"})]),_:1},8,["modelValue"])]),after:s(()=>[t(xe,{modelValue:x.value,"onUpdate:modelValue":l[29]||(l[29]=o=>x.value=o),animated:"",swipeable:"",vertical:"","transition-prev":"jump-up","transition-next":"jump-up"},{default:s(()=>[t(E,{name:"mails"},{default:s(()=>[qe,n("div",ke,[t(Q,{onSubmit:J,onReset:X,class:"q-gutter-md"},{default:s(()=>[Ce,t(m,{readonly:"",filled:"",modelValue:a._id,"onUpdate:modelValue":l[8]||(l[8]=o=>a._id=o),label:"Your ID *"},null,8,["modelValue"]),De,t(m,{readonly:"",filled:"",modelValue:a.account,"onUpdate:modelValue":l[9]||(l[9]=o=>a.account=o),label:"Your Account *","lazy-rules":"",maxlength:"20",rules:D.account},null,8,["modelValue","rules"]),$e,t(m,{filled:"",readonly:"",type:"text",modelValue:a.name,"onUpdate:modelValue":l[10]||(l[10]=o=>a.name=o),label:"Your Name *","lazy-rules":"",rules:D.name},null,8,["modelValue","rules"]),Se,t(m,{readonly:"",filled:"",type:"text",modelValue:a.email,"onUpdate:modelValue":l[11]||(l[11]=o=>a.email=o),label:"Your Email *","lazy-rules":"",rules:D.email},null,8,["modelValue","rules"]),t(q,{modelValue:C.value,"onUpdate:modelValue":l[12]||(l[12]=o=>C.value=o),label:"I accept the license and terms"},null,8,["modelValue"]),n("div",null,[t(r,{label:"\u4FEE\u6539",type:"submit",color:"primary"}),t(r,{label:"\u91CD\u7F6E",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1})])]),_:1}),t(E,{name:"alarms"},{default:s(()=>[Ae,n("div",Ie,[t(r,{flat:"",fab:"",round:"","bg-blue":"",color:"white",icon:"mdi-plus",style:{width:"70px",height:"70px","margin-top":"15px","border-radius":"50%"},onClick:l[13]||(l[13]=o=>w(""))}),t(_,{seamless:"",modelValue:a.dialog,"onUpdate:modelValue":l[22]||(l[22]=o=>a.dialog=o),persistent:""},{default:s(()=>[t(b,{id:"dialog"},{default:s(()=>[t(Q,{modelValue:a.valid,"onUpdate:modelValue":l[21]||(l[21]=o=>a.valid=o),onSubmit:F(L,["prevent"])},{default:s(()=>[t(b,{flat:""},{default:s(()=>[n("div",ze,[n("div",Ee,[t(m,{rounded:"",flat:"",primary:"",standout:"",modelValue:a.name,"onUpdate:modelValue":l[14]||(l[14]=o=>a.name=o),label:e.$t("\u767C\u6587\u8005\u540D\u7A31"),class:"q-ma-md"},null,8,["modelValue","label"])])]),n("div",Te,[n("div",Re,[t(m,{rounded:"",flat:"",primary:"",standout:"",modelValue:a.startDay,"onUpdate:modelValue":l[15]||(l[15]=o=>a.startDay=o),label:e.$t("\u958B\u59CB\u65E5\u671F"),class:"q-ma-md",style:{"box-shadow":"none"}},null,8,["modelValue","label"])]),n("div",Ne,[t(m,{rounded:"",flat:"",primary:"",standout:"",modelValue:a.endDay,"onUpdate:modelValue":l[16]||(l[16]=o=>a.endDay=o),label:e.$t("\u7D50\u675F\u65E5\u671F"),class:"q-ma-md",style:{"box-shadow":"none"}},null,8,["modelValue","label"])])]),n("div",Le,[t(m,{rounded:"",flat:"",primary:"",standout:"",modelValue:a.title,"onUpdate:modelValue":l[17]||(l[17]=o=>a.title=o),label:e.$t("\u6A19\u984C"),class:"q-ma-md",style:{"box-shadow":"none"}},null,8,["modelValue","label"])]),n("div",Pe,[n("div",Ye,[t(m,{modelValue:a.description,"onUpdate:modelValue":l[18]||(l[18]=o=>a.description=o),class:"q-ma-md",style:{"box-shadow":"none"},rounded:"",standout:"",label:"\u64B0\u5BEB\u5FC3\u5F97",autogrow:"",type:"textarea"},null,8,["modelValue"])])]),n("div",Be,[n("div",Fe,[t(S,{modelValue:a.image,"onUpdate:modelValue":l[19]||(l[19]=o=>a.image=o),rounded:"",standout:"",counter:"",class:"q-ma-md",style:{"box-shadow":"none"},label:e.$t("\u5FC3\u5F97\u5716\u7247")},null,8,["modelValue","label"])])]),n("div",Me,[n("div",Ze,[t(q,{"false-value":!1,label:`On the Shelf - ${a.sell}`,"true-value":!0,color:"green","toggle-indeterminate":"false",modelValue:a.sell,"onUpdate:modelValue":l[20]||(l[20]=o=>a.sell=o)},null,8,["label","modelValue"])])]),t(h,{class:"text-center"},{default:s(()=>[f(t(r,{type:"sumbit",label:e.$t("submit"),color:"primary",loading:a.submitting},null,8,["label","loading"]),[[g]])]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),n("div",je,[t(Z,{grid:de(k).screen.lt.md,title:e.$t("\u793E\u5340\u516C\u544A"),rows:d,columns:ee,"row-key":"name",filter:e.filter,selection:"multiple",selected:e.selected,"onUpdate:selected":l[28]||(l[28]=o=>e.selected=o)},{"top-right":s(()=>[t(m,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":l[23]||(l[23]=o=>e.filter=o),placeholder:"Search"},{append:s(()=>[t(re,{name:"search"})]),_:1},8,["modelValue"])]),"header-selection":s(o=>[(c(),V(q,{modelValue:o.selected,"onUpdate:modelValue":i=>o.selected=i,key:d.sell},null,8,["modelValue","onUpdate:modelValue"]))]),"body-selection":s(o=>[(c(),V(q,{modelValue:o.selected,"onUpdate:modelValue":i=>o.selected=i,key:d.sell},null,8,["modelValue","onUpdate:modelValue"]))]),"body-cell-image":s(o=>[t(T,{style:{"text-align":"right"}},{default:s(()=>[t(U,null,{default:s(()=>[n("img",{src:o.row.image,alt:""},null,8,Ke)]),_:2},1024)]),_:2},1024)]),"body-cell-edit":s(o=>[t(T,{style:{"text-align":"right"}},{default:s(()=>[t(r,{round:"",class:"bg-accent",style:{width:"50px",height:"50px"},onClick:i=>w(o.row._id),icon:"mdi-circle-edit-outline"},null,8,["onClick"]),t(r,{round:"",class:"bg-red",style:{width:"50px",height:"50px"},onClick:l[24]||(l[24]=i=>e.confirm=!0),icon:"mdi-delete"})]),_:2},1024),t(_,{modelValue:e.confirm,"onUpdate:modelValue":l[25]||(l[25]=i=>e.confirm=i),persistent:""},{default:s(()=>[t(b,null,{default:s(()=>[t(v,{class:"row items-center"},{default:s(()=>[t(U,{icon:"mdi-account-arrow-right",color:"primary","text-color":"white"}),n("span",Oe,A(e.$t("Delete"))+" ?",1)]),_:1}),t(I,{align:"right"},{default:s(()=>[f(t(r,{flat:"",color:"primary",icon:"mdi-check-circle",onClick:i=>P(o.row._id)},null,8,["onClick"]),[[g]]),f(t(r,{flat:"",color:"primary",icon:"mdi-close-circle"},null,512),[[g]])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])]),item:s(o=>[n("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:me(o.selected?"transform: scale(0.95);":"")},[t(b,{class:ue(o.selected?"bg-grey-2":"")},{default:s(()=>[t(v,null,{default:s(()=>[t(we,{dense:"",modelValue:o.selected,"onUpdate:modelValue":i=>o.selected=i,label:o.row.name},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024),t(he),(c(!0),B(ce,null,pe(o.cols,i=>(c(),V(Ve,{key:i.name},{default:s(()=>[t(M,{class:"text-center"},{default:s(()=>[t(fe,{class:"text-center q-mx-auto"},{default:s(()=>[t(M,null,{default:s(()=>[i.name!=="image"?(c(),V(ge,{key:0,caption:"",class:"text-center q-mx-auto"},{default:s(()=>[be(A(i.value),1)]),_:2},1024)):i.name=="image"?(c(),V(U,{key:1,square:"",size:"200px",class:"text-center q-mx-auto"},{default:s(()=>[n("img",{src:o.row[i.name],alt:""},null,8,Ge)]),_:2},1024)):ye("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),t(h,{class:"q-mx-auto text-center"},{default:s(()=>[n("div",We,[t(r,{rounded:"",class:"text-center bg-red",onClick:l[26]||(l[26]=i=>e.confirmSm=!0),icon:"mdi-delete",style:{width:"50px",height:"50px"}}),t(r,{rounded:"",class:"text-center bg-accent",onClick:i=>w(o.row._id),icon:"mdi-circle-edit-outline",style:{width:"50px",height:"50px"}},null,8,["onClick"])])]),_:2},1024)]),_:2},1032,["class"]),t(_,{modelValue:e.confirmSm,"onUpdate:modelValue":l[27]||(l[27]=i=>e.confirmSm=i),persistent:""},{default:s(()=>[t(b,null,{default:s(()=>[t(v,{class:"row items-center"},{default:s(()=>[t(U,{icon:"mdi-account-arrow-right",color:"primary","text-color":"white"}),n("span",He,A(e.$t("Delete"))+" ?",1)]),_:1}),t(I,{align:"right"},{default:s(()=>[f(t(r,{flat:"",color:"primary",icon:"mdi-check-circle",onClick:i=>P(o.row._id)},null,8,["onClick"]),[[g]]),f(t(r,{flat:"",color:"primary",icon:"mdi-close-circle"},null,512),[[g]])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue"])],4)]),_:1},8,["grid","title","filter","selected"])])]),_:1}),t(E,{name:"movies"},{default:s(()=>[Je,n("div",Xe,[t(Z,{title:"My Likes",rows:te,columns:le,"row-key":"name2"},{"body-cell-actions":s(o=>[t(T,{props:o},{default:s(()=>[t(r,{icon:"mdi-heart",onClick:i=>e.onEdit(o.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1})])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}};export{fl as default};

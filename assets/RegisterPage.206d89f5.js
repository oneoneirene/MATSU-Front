import{O as x,r as m,i as c,o as V,j as q,w as o,d as r,e as l,k as y,l as i,m as p,t as Q,P as v,S as f}from"./index.e7026902.js";import{Q as g}from"./QCardSection.27738e50.js";import{Q as h}from"./QCardActions.60531d59.js";import{Q as _}from"./QForm.b22dc177.js";import{Q as z}from"./QCard.70e21533.js";import{Q as A}from"./QPage.a81fd263.js";const S={class:"column"},$=r("div",{class:"row"},[r("h5",{class:"text-h5 text-white q-my-md"},"Matsu")],-1),U={class:"row"},Z={class:"text-grey-6"},E={__name:"RegisterPage",setup(B){const w=x(),u=m(!1),d=m(!1),t=c({email:"",account:"",password:""}),n=c({email:[e=>!!e||"Required",e=>/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(e)||"Wrong"],account:[e=>!!e||"\u5E33\u865F\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5E33\u865F\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5E33\u865F\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],password:[e=>!!e||"\u5BC6\u78BC\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5BC6\u78BC\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5BC6\u78BC\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],name:[e=>!!e||"\u540D\u7A31\u5FC5\u586B",e=>e.length>=2&&e.length<=7||"\u9577\u5EA6\u70BA 2 \u5230 7 \u500B\u5B57"]}),b=async()=>{d.value=!0;try{await v.post("/users",t),await f.fire({icon:"success",title:"\u6210\u529F",text:"\u8A3B\u518A\u6210\u529F"}),w.push("/")}catch(e){f.fire({icon:"error",title:"\u5931\u6557",text:e.isAxiosError&&e.response.data?e.response.data.message:"\u767C\u751F\u932F\u8AA4"})}d.value=!1};return(e,a)=>(V(),q(A,{class:"window-height window-width row justify-center"},{default:o(()=>[r("div",S,[$,r("div",U,[l(z,{square:"",bordered:"",class:"q-pa-lg shadow-1",style:{width:"500px",color:"##064984",top:"100px"}},{default:o(()=>[l(_,{class:"q-gutter-md",modelValue:u.value,"onUpdate:modelValue":a[4]||(a[4]=s=>u.value=s),onSubmit:y(b,["prevent"])},{default:o(()=>[l(g,null,{default:o(()=>[l(i,{square:"",filled:"",clearable:"",hint:"\u8ACB\u8F38\u5165E-mail","hide-hint":"",modelValue:t.email,"onUpdate:modelValue":a[0]||(a[0]=s=>t.email=s),type:"email",label:"\u4FE1\u7BB1",maxlength:"25",rules:n.email},null,8,["modelValue","rules"]),l(i,{square:"",filled:"",clearable:"",hint:"\u8ACB\u8F38\u5165\u540D\u7A31","hide-hint":"",modelValue:t.name,"onUpdate:modelValue":a[1]||(a[1]=s=>t.name=s),type:"name",label:"\u540D\u7A31",maxlength:"7",rules:n.name},null,8,["modelValue","rules"]),l(i,{square:"",filled:"",clearable:"",hint:"\u8ACB\u8F38\u51651-15\u500B\u5B57\u5143","hide-hint":"",modelValue:t.account,"onUpdate:modelValue":a[2]||(a[2]=s=>t.account=s),type:"acccount",label:"\u5E33\u865F",maxlength:"15",rules:n.account},null,8,["modelValue","rules"]),l(i,{square:"",filled:"",clearable:"",modelValue:t.password,"onUpdate:modelValue":a[3]||(a[3]=s=>t.password=s),type:"password",label:"\u5BC6\u78BC",maxlength:"15",rules:n.password},null,8,["modelValue","rules"])]),_:1}),l(h,{class:"q-px-md",style:{"margin-top":"-15px"}},{default:o(()=>[l(p,{unelevated:"",color:"accent",size:"lg",class:"full-width",label:e.$t("SignIn"),type:"submit",loading:d.value},null,8,["label","loading"])]),_:1})]),_:1},8,["modelValue","onSubmit"]),l(h,{class:"q-px-md q-ma-none"},{default:o(()=>[l(p,{unelevated:"",color:"accent",size:"lg",class:"full-width",label:e.$t("LogIn")},null,8,["label"])]),_:1}),l(g,{class:"text-center q-px-md q-pb-none"},{default:o(()=>[r("p",Z,Q(e.$t("Hint2")),1)]),_:1})]),_:1})])])]),_:1}))}};export{E as default};
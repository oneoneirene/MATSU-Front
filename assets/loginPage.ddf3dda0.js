import{u as _,r as i,i as u,o as x,j as b,w as l,d as s,e as t,k as Q,l as c,m}from"./index.de7da131.js";import{Q as p}from"./QCardSection.8fc282b6.js";import{Q as f}from"./QCardActions.26466f72.js";import{Q as V}from"./QForm.14d20536.js";import{Q as q}from"./QCard.40289e02.js";import{Q as v}from"./QPage.1243c3c6.js";const y={class:"column"},z=s("div",{class:"row"},[s("h5",{class:"text-h5 text-white q-my-md"},"Matsu")],-1),C={class:"row"},A=s("div",{class:"icon",style:{"text-align":"center"}},[s("i",{class:"fa-solid fa-circle-user",style:{"font-size":"80px"}})],-1),B=s("p",{class:"text-grey-6"},"Not reigistered? Created an Account",-1),R={__name:"loginPage",setup(S){const g=_(),w=i(!1),d=i(!1),o=u({account:"",password:""}),n=u({account:[e=>!!e||"\u5E33\u865F\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5E33\u865F\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5E33\u865F\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"],password:[e=>!!e||"\u5BC6\u78BC\u5FC5\u586B",e=>e.length>=4&&e.length<=20||"\u5BC6\u78BC\u9577\u5EA6\u70BA 4 \u5230 20 \u500B\u5B57",e=>/^[a-zA-Z0-9]+$/.test(e)||"\u5BC6\u78BC\u53EA\u80FD\u7531\u82F1\u6578\u5B57\u7D44\u6210"]}),h=()=>{g.login(o)};return(e,a)=>(x(),b(v,{class:"window-height window-width row justify-center"},{default:l(()=>[s("div",y,[z,s("div",C,[t(q,{square:"",bordered:"",class:"q-pa-lg shadow-1",style:{width:"500px",color:"#7cade7",top:"100px"}},{default:l(()=>[t(V,{class:"q-gutter-md",modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=r=>d.value=r),onSubmit:Q(h,["prevent"])},{default:l(()=>[A,t(p,null,{default:l(()=>[t(c,{square:"",filled:"",clearable:"",hint:"\u8ACB\u8F38\u51651-20\u500B\u5B57\u5143","hide-hint":"",modelValue:o.account,"onUpdate:modelValue":a[0]||(a[0]=r=>o.account=r),type:"acccount",label:"\u5E33\u865F",maxlength:"20",rules:n.account},null,8,["modelValue","rules"]),t(c,{square:"",filled:"",clearable:"",modelValue:o.password,"onUpdate:modelValue":a[1]||(a[1]=r=>o.password=r),type:"password",label:"\u5BC6\u78BC",maxlength:"20",rules:n.password},null,8,["modelValue","rules"])]),_:1}),t(f,{class:"q-px-md",style:{"margin-top":"-15px"}},{default:l(()=>[t(m,{unelevated:"",color:"blue",size:"lg",class:"full-width",label:"Login",type:"submit",loading:w.value},null,8,["loading"])]),_:1})]),_:1},8,["modelValue","onSubmit"]),t(f,{class:"q-px-md"},{default:l(()=>[t(m,{unelevated:"",to:"/Register",color:"blue",size:"lg",class:"full-width",label:"Register"})]),_:1}),t(p,{class:"text-center q-px-md q-pb-none"},{default:l(()=>[B]),_:1})]),_:1})])])]),_:1}))}};export{R as default};

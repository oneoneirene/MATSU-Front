import{q as i,aE as s,aF as u,s as a,v as t,a0 as d,aG as v}from"./index.d1f8f4aa.js";var f=i({name:"QAvatar",props:{...s,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:o}){const n=u(e),r=a(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),l=a(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const c=e.icon!==void 0?[t(d,{name:e.icon})]:void 0;return t("div",{class:r.value,style:n.value},[t("div",{class:"q-avatar__content row flex-center overflow-hidden",style:l.value},v(o.default,c))])}}});export{f as Q};

import{i as b,r as h,u as C,o as d,a as _,d as t,t as n,e,w as s,Q,F as m,a2 as q,P as k,S as V,a_ as w,m as r,g as l,j as D,f as S,a6 as g,Z as P}from"./index.e7026902.js";import{Q as $}from"./QToggle.1683d5e2.js";import{Q as x}from"./QCardSection.27738e50.js";import{Q as j}from"./QCardActions.60531d59.js";import{Q as z}from"./QCard.70e21533.js";import"./use-checkbox.282dbc1f.js";const A={class:"q-pa-md"},B={class:"text-weight-bold",style:{"text-align":"center"}},L={class:"q-pa-md"},T=t("div",{id:"caption",class:"custom-caption"},[t("div",{class:"text-h3 text-white"},"\u82B9\u58C1\u6751"),t("div",{class:"text-h6 text-white"},"Qinbi Village")],-1),E=t("div",{id:"caption",class:"custom-caption"},[t("div",{class:"text-h3 text-white"},"\u516B\u516B\u5751\u9053"),t("div",{class:"text-h6 text-white"},"Tunnel 88")],-1),F=t("div",{id:"caption",class:"custom-caption"},[t("div",{class:"text-h3 text-white"},"\u99AC\u7956\u9152\u5EE0"),t("div",{class:"text-h6 text-white"},"Matsu Liquor Factory Industry")],-1),N=t("div",{id:"caption",class:"custom-caption"},[t("div",{class:"text-h3 text-white"},"\u6771\u5F15\u5CF6\u71C8\u5854"),t("div",{class:"text-h6 text-white"},"Dongquan Lighthouse")],-1),U=t("div",{id:"caption",class:"custom-caption"},[t("div",{class:"text-h3 text-white"},"\u6230\u722D\u548C\u5E73\u7D00\u5FF5\u516C\u5712\u4E3B\u984C\u9928"),t("div",{class:"text-h6 text-white"},"War and Peace Memorial Park Exhibition Center")],-1),I={style:{"text-align":"center"},class:"text-weight-bold"},M={class:"q-pa-md row justify-center items-center q-gutter-md"},G={class:"text-h6 text-weight-bold"},J={class:"text-subtitle2"},et={__name:"TravelPage",props:["exp"],setup(W){const p=b([]),u=h(1),c=h(!1),f=C(),{addCollection:v}=f;return(async()=>{try{const{data:i}=await k.get("/exp");p.push(...i.result),console.log(i)}catch{V.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(i,o)=>(d(),_(m,null,[t("div",A,[t("h5",B,n(i.$t("Attractions")),1),t("div",L,[e(Q,{swipeable:"",animated:"",modelValue:u.value,"onUpdate:modelValue":o[3]||(o[3]=a=>u.value=a),autoplay:c.value,ref:"carousel",infinite:"",id:"attractions"},{control:s(()=>[e(w,{position:"top-right",offset:[18,18],class:"text-white rounded-borders",style:{background:"rgba(0, 0, 0, .3)",padding:"4px 8px"}},{default:s(()=>[e($,{dense:"",dark:"",color:"orange",modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=a=>c.value=a),label:"Auto Play"},null,8,["modelValue"])]),_:1}),e(w,{position:"bottom-right",offset:[18,18],class:"q-gutter-xs"},{default:s(()=>[e(r,{push:"",round:"",dense:"",color:"blue","text-color":"white",icon:"arrow_left",onClick:o[1]||(o[1]=a=>i.$refs.carousel.previous())}),e(r,{push:"",round:"",dense:"",color:"blue","text-color":"white",icon:"arrow_right",onClick:o[2]||(o[2]=a=>i.$refs.carousel.next())})]),_:1})]),default:s(()=>[e(l,{name:1,"img-src":"https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_C100_395_7.jpg&sizetype=3"},{default:s(()=>[T]),_:1}),e(l,{name:2,"img-src":"https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_10447_8.JPG&sizetype=3"},{default:s(()=>[E]),_:1}),e(l,{name:3,"img-src":"https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_C100_398_19.jpg&sizetype=3"},{default:s(()=>[F]),_:1}),e(l,{name:4,"img-src":"https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_A12-00213_9.jpg&sizetype=3"},{default:s(()=>[N]),_:1}),e(l,{name:5,"img-src":"https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_A12-00340_11.jpg&sizetype=3"},{default:s(()=>[U]),_:1})]),_:1},8,["modelValue","autoplay"])])]),t("h5",I,n(i.$t("Experience")),1),t("div",M,[(d(!0),_(m,null,q(p,(a,y)=>(d(),D(z,{class:"expcard",key:y},{default:s(()=>[e(S,{src:a.image,ratio:5/4},null,8,["src"]),e(x,null,{default:s(()=>[t("div",G,n(a.title),1),t("div",J,n(a.name),1),g(" "+n(new Date(a.startDay).toLocaleDateString())+" \uFF0D "+n(new Date(a.endDay).toLocaleDateString()),1)]),_:2},1024),e(x,{class:"q-pt-none"},{default:s(()=>[g(n(a.description),1)]),_:2},1024),e(j,{align:"right"},{default:s(()=>[e(r,{flat:"",round:"",color:"red",icon:"favorite",onClick:H=>P(v)({exp:a._id,quantity:1})},null,8,["onClick"]),e(r,{flat:"",round:"",color:"teal",icon:"bookmark"})]),_:2},1024)]),_:2},1024))),128))])],64))}};export{et as default};

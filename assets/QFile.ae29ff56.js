import{q as w,a9 as B,aa as K,ab as G,ac as T,ad as U,ae as H,r as y,af as J,ag as M,ah as W,s as i,ai as h,aj as X,v as s,ak as Y,G as Z,al as ee,am as te}from"./index.d1f8f4aa.js";var le=w({name:"QFile",inheritAttrs:!1,props:{...B,...K,...G,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...T,...U],setup(e,{slots:r,emit:C,attrs:x}){const{proxy:V}=Z(),u=H(),o=y(null),m=y(!1),S=J(e),{pickFiles:A,onDragover:j,onDragleave:p,processFiles:q,getDndNode:I}=M({editable:u.editable,dnd:m,getFileInput:z,addFilesToQueue:F}),P=W(e),a=i(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),v=i(()=>h(a.value)),k=i(()=>a.value.map(t=>t.name).join(", ")),g=i(()=>X(a.value.reduce((t,l)=>t+l.size,0))),N=i(()=>({totalSize:g.value,filesNumber:a.value.length,maxFiles:e.maxFiles})),O=i(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:S.value,...x,id:u.targetUid.value,disabled:u.editable.value!==!0})),_=i(()=>"q-file q-field--auto-height"+(m.value===!0?" q-file--dnd":"")),b=i(()=>e.multiple===!0&&e.append===!0);function c(t){const l=a.value.slice();l.splice(t,1),f(l)}function D(t){const l=a.value.findIndex(t);l>-1&&c(l)}function f(t){C("update:modelValue",e.multiple===!0?t:t[0])}function L(t){t.keyCode===13&&ee(t)}function Q(t){(t.keyCode===13||t.keyCode===32)&&A(t)}function z(){return o.value}function F(t,l){const n=q(t,l,a.value,b.value);n!==void 0&&((e.multiple===!0?e.modelValue&&n.every($=>a.value.includes($)):e.modelValue===n[0])||f(b.value===!0?a.value.concat(n):n))}function d(){return[s("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function E(){if(r.file!==void 0)return a.value.length===0?d():a.value.map((l,n)=>r.file({index:n,file:l,ref:this}));if(r.selected!==void 0)return a.value.length===0?d():r.selected({files:a.value,ref:this});if(e.useChips===!0)return a.value.length===0?d():a.value.map((l,n)=>s(te,{key:"file-"+n,removable:u.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{c(n)}},()=>s("span",{class:"ellipsis",textContent:l.name})));const t=e.displayValue!==void 0?e.displayValue:k.value;return t.length>0?[s("div",{class:e.inputClass,style:e.inputStyle,textContent:t})]:d()}function R(){const t={ref:o,...O.value,...P.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:F};return e.multiple===!0&&(t.multiple=!0),s("input",t)}return Object.assign(u,{fieldClass:_,emitValue:f,hasValue:v,inputRef:o,innerValue:a,floatingLabel:i(()=>v.value===!0||h(e.displayValue)),computedCounter:i(()=>{if(e.counterLabel!==void 0)return e.counterLabel(N.value);const t=e.maxFiles;return`${a.value.length}${t!==void 0?" / "+t:""} (${g.value})`}),getControlChild:()=>I("file"),getControl:()=>{const t={ref:u.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return u.editable.value===!0&&Object.assign(t,{onDragover:j,onDragleave:p,onKeydown:L,onKeyup:Q}),s("div",t,[R()].concat(E()))}}),Object.assign(V,{removeAtIndex:c,removeFile:D,getNativeElement:()=>o.value}),Y(u)}});export{le as Q};

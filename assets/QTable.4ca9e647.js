import{q as D,s as u,v as a,x as Q,G as z,a0 as be,aH as ct,K as me,L as Se,aI as dt,r as H,aJ as vt,ax as A,aK as ft,aL as Be,aM as gt,E as bt,D as mt,C as St,ao as ht,a7 as yt,as as Ve,aE as _t,aF as wt,aN as ge,aO as Oe,aP as qt,I as De,aQ as $e,aR as Ct,aS as Pt,aT as kt,aU as xt,aV as N,aW as Rt,h as Z}from"./index.d1f8f4aa.js";import{Q as Tt}from"./QSeparator.8ac68046.js";import{u as Bt,a as Ot,b as Ft}from"./use-checkbox.4709b13e.js";var il=D({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const n=z(),f=u(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return a("td",{class:f.value},Q(l.default));const i=n.vnode.key,g=(e.props.colsMap!==void 0?e.props.colsMap[i]:null)||e.props.col;if(g===void 0)return;const{row:s}=e.props;return a("td",{class:f.value+g.__tdClass(s),style:g.__tdStyle(s)},Q(l.default))}}});const Lt=a("div",{key:"svg",class:"q-checkbox__bg absolute"},[a("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24","aria-hidden":"true"},[a("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),a("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var fe=D({name:"QCheckbox",props:Bt,emits:Ot,setup(e){function l(n,f){const i=u(()=>(n.value===!0?e.checkedIcon:f.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>i.value!==null?[a("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[a(be,{class:"q-checkbox__icon",name:i.value})])]:[Lt]}return Ft("checkbox",l)}}),Mt=D({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:n}){const f=z(),{proxy:{$q:i}}=f,g=s=>{n("click",s)};return()=>{if(e.props===void 0)return a("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:g},Q(l.default));let s,v;const c=f.vnode.key;if(c){if(s=e.props.colsMap[c],s===void 0)return}else s=e.props.col;if(s.sortable===!0){const r=s.align==="right"?"unshift":"push";v=ct(l.default,[]),v[r](a(be,{class:s.__iconClass,name:i.iconSet.table.arrowUp}))}else v=Q(l.default);const h={class:s.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:s.headerStyle,onClick:r=>{s.sortable===!0&&e.props.sort(s),g(r)}};return a("th",h,v)}}});const Vt=["horizontal","vertical","cell","none"];var Dt=D({name:"QMarkupTable",props:{...me,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Vt.includes(e)}},setup(e,{slots:l}){const n=z(),f=Se(e,n.proxy.$q),i=u(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(f.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>a("div",{class:i.value},[a("table",{class:"q-table"},Q(l.default))])}});function je(e,l){return a("div",e,[a("table",{class:"q-table"},l)])}const $t={list:yt,table:Dt},jt=["list","table","__qtable"];var Et=D({name:"QVirtualScroll",props:{...dt,type:{type:String,default:"list",validator:e=>jt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:n}){let f;const i=H(null),g=u(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:s,localResetVirtualScroll:v,padVirtualScroll:c,onVirtualScrollEvt:h}=vt({virtualScrollLength:g,getVirtualScrollTarget:C,getVirtualScrollEl:q}),r=u(()=>{if(g.value===0)return[];const O=(F,x)=>({index:s.value.from+x,item:F});return e.itemsFn===void 0?e.items.slice(s.value.from,s.value.to).map(O):e.itemsFn(s.value.from,s.value.to-s.value.from).map(O)}),S=u(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=u(()=>e.scrollTarget!==void 0?{}:{tabindex:0});A(g,()=>{v()}),A(()=>e.scrollTarget,()=>{_(),y()});function q(){return i.value.$el||i.value}function C(){return f}function y(){f=ft(q(),e.scrollTarget),f.addEventListener("scroll",h,Be.passive)}function _(){f!==void 0&&(f.removeEventListener("scroll",h,Be.passive),f=void 0)}function B(){let O=c(e.type==="list"?"div":"tbody",r.value.map(l.default));return l.before!==void 0&&(O=l.before().concat(O)),Ve(l.after,O)}return gt(()=>{v()}),bt(()=>{y()}),mt(()=>{y()}),St(()=>{_()}),ht(()=>{_()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?je({ref:i,class:"q-table__middle "+S.value},B()):a($t[e.type],{...n,ref:i,class:[n.class,S.value],...w.value},B)}}});const At={xs:2,sm:4,md:6,lg:10,xl:14};function Fe(e,l,n){return{transform:l===!0?`translateX(${n.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Nt=D({name:"QLinearProgress",props:{...me,..._t,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:n}=z(),f=Se(e,n.$q),i=wt(e,At),g=u(()=>e.indeterminate===!0||e.query===!0),s=u(()=>e.reverse!==e.query),v=u(()=>({...i.value!==null?i.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),c=u(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),h=u(()=>Fe(e.buffer!==void 0?e.buffer:1,s.value,n.$q)),r=u(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${f.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),S=u(()=>Fe(g.value===!0?1:e.value,s.value,n.$q)),w=u(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${g.value===!0?"in":""}determinate`),q=u(()=>({width:`${e.value*100}%`})),C=u(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const y=[a("div",{class:r.value,style:h.value}),a("div",{class:w.value,style:S.value})];return e.stripe===!0&&g.value===!1&&y.push(a("div",{class:C.value,style:q.value})),a("div",{class:c.value,style:v.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ve(l.default,y))}}});function Qt(e,l){return new Date(e)-new Date(l)}const Ht={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function zt(e,l,n,f){const i=u(()=>{const{sortBy:v}=l.value;return v&&n.value.find(c=>c.name===v)||null}),g=u(()=>e.sortMethod!==void 0?e.sortMethod:(v,c,h)=>{const r=n.value.find(q=>q.name===c);if(r===void 0||r.field===void 0)return v;const S=h===!0?-1:1,w=typeof r.field=="function"?q=>r.field(q):q=>q[r.field];return v.sort((q,C)=>{let y=w(q),_=w(C);return y==null?-1*S:_==null?1*S:r.sort!==void 0?r.sort(y,_,q,C)*S:ge(y)===!0&&ge(_)===!0?(y-_)*S:Oe(y)===!0&&Oe(_)===!0?Qt(y,_)*S:typeof y=="boolean"&&typeof _=="boolean"?(y-_)*S:([y,_]=[y,_].map(B=>(B+"").toLocaleString().toLowerCase()),y<_?-1*S:y===_?0:S)})});function s(v){let c=e.columnSortOrder;if(qt(v)===!0)v.sortOrder&&(c=v.sortOrder),v=v.name;else{const S=n.value.find(w=>w.name===v);S!==void 0&&S.sortOrder&&(c=S.sortOrder)}let{sortBy:h,descending:r}=l.value;h!==v?(h=v,r=c==="da"):e.binaryStateSort===!0?r=!r:r===!0?c==="ad"?h=null:r=!1:c==="ad"?r=!0:h=null,f({sortBy:h,descending:r,page:1})}return{columnToSort:i,computedSortMethod:g,sort:s}}const It={filter:[String,Object],filterMethod:Function};function Ut(e,l){const n=u(()=>e.filterMethod!==void 0?e.filterMethod:(f,i,g,s)=>{const v=i?i.toLowerCase():"";return f.filter(c=>g.some(h=>{const r=s(h,c)+"";return(r==="undefined"||r==="null"?"":r.toLowerCase()).indexOf(v)!==-1}))});return A(()=>e.filter,()=>{De(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:n}}function Wt(e,l){for(const n in l)if(l[n]!==e[n])return!1;return!0}function Le(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const pt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Kt(e,l){const{props:n,emit:f}=e,i=H(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:n.rowsPerPageOptions.length>0?n.rowsPerPageOptions[0]:5},n.pagination)),g=u(()=>{const r=n["onUpdate:pagination"]!==void 0?{...i.value,...n.pagination}:i.value;return Le(r)}),s=u(()=>g.value.rowsNumber!==void 0);function v(r){c({pagination:r,filter:n.filter})}function c(r={}){De(()=>{f("request",{pagination:r.pagination||g.value,filter:r.filter||n.filter,getCellValue:l})})}function h(r,S){const w=Le({...g.value,...r});if(Wt(g.value,w)===!0){s.value===!0&&S===!0&&v(w);return}if(s.value===!0){v(w);return}n.pagination!==void 0&&n["onUpdate:pagination"]!==void 0?f("update:pagination",w):i.value=w}return{innerPagination:i,computedPagination:g,isServerSide:s,requestServerInteraction:c,setPagination:h}}function Gt(e,l,n,f,i,g){const{props:s,emit:v,proxy:{$q:c}}=e,h=u(()=>f.value===!0?n.value.rowsNumber||0:g.value),r=u(()=>{const{page:x,rowsPerPage:R}=n.value;return(x-1)*R}),S=u(()=>{const{page:x,rowsPerPage:R}=n.value;return x*R}),w=u(()=>n.value.page===1),q=u(()=>n.value.rowsPerPage===0?1:Math.max(1,Math.ceil(h.value/n.value.rowsPerPage))),C=u(()=>S.value===0?!0:n.value.page>=q.value),y=u(()=>(s.rowsPerPageOptions.includes(l.value.rowsPerPage)?s.rowsPerPageOptions:[l.value.rowsPerPage].concat(s.rowsPerPageOptions)).map(R=>({label:R===0?c.lang.table.allRows:""+R,value:R})));A(q,(x,R)=>{if(x===R)return;const I=n.value.page;x&&!I?i({page:1}):x<I&&i({page:x})});function _(){i({page:1})}function B(){const{page:x}=n.value;x>1&&i({page:x-1})}function O(){const{page:x,rowsPerPage:R}=n.value;S.value>0&&x*R<h.value&&i({page:x+1})}function F(){i({page:q.value})}return s["onUpdate:pagination"]!==void 0&&v("update:pagination",{...n.value}),{firstRowIndex:r,lastRowIndex:S,isFirstPage:w,isLastPage:C,pagesNumber:q,computedRowsPerPageOptions:y,computedRowsNumber:h,firstPage:_,prevPage:B,nextPage:O,lastPage:F}}const Jt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Xt=["update:selected","selection"];function Yt(e,l,n,f){const i=u(()=>{const C={};return e.selected.map(f.value).forEach(y=>{C[y]=!0}),C}),g=u(()=>e.selection!=="none"),s=u(()=>e.selection==="single"),v=u(()=>e.selection==="multiple"),c=u(()=>n.value.length>0&&n.value.every(C=>i.value[f.value(C)]===!0)),h=u(()=>c.value!==!0&&n.value.some(C=>i.value[f.value(C)]===!0)),r=u(()=>e.selected.length);function S(C){return i.value[C]===!0}function w(){l("update:selected",[])}function q(C,y,_,B){l("selection",{rows:y,added:_,keys:C,evt:B});const O=s.value===!0?_===!0?y:[]:_===!0?e.selected.concat(y):e.selected.filter(F=>C.includes(f.value(F))===!1);l("update:selected",O)}return{hasSelectionMode:g,singleSelection:s,multipleSelection:v,allRowsSelected:c,someRowsSelected:h,rowsSelectedNumber:r,isRowSelected:S,clearSelection:w,updateSelection:q}}function Me(e){return Array.isArray(e)?e.slice():[]}const Zt={expanded:Array},el=["update:expanded"];function tl(e,l){const n=H(Me(e.expanded));A(()=>e.expanded,s=>{n.value=Me(s)});function f(s){return n.value.includes(s)}function i(s){e.expanded!==void 0?l("update:expanded",s):n.value=s}function g(s,v){const c=n.value.slice(),h=c.indexOf(s);v===!0?h===-1&&(c.push(s),i(c)):h!==-1&&(c.splice(h,1),i(c))}return{isRowExpanded:f,setExpanded:i,updateExpanded:g}}const ll={visibleColumns:Array};function al(e,l,n){const f=u(()=>{if(e.columns!==void 0)return e.columns;const v=e.rows[0];return v!==void 0?Object.keys(v).map(c=>({name:c,label:c.toUpperCase(),field:c,align:ge(v[c])?"right":"left",sortable:!0})):[]}),i=u(()=>{const{sortBy:v,descending:c}=l.value;return(e.visibleColumns!==void 0?f.value.filter(r=>r.required===!0||e.visibleColumns.includes(r.name)===!0):f.value).map(r=>{const S=r.align||"right",w=`text-${S}`;return{...r,align:S,__iconClass:`q-table__sort-icon q-table__sort-icon--${S}`,__thClass:w+(r.headerClasses!==void 0?" "+r.headerClasses:"")+(r.sortable===!0?" sortable":"")+(r.name===v?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:r.style!==void 0?typeof r.style!="function"?()=>r.style:r.style:()=>null,__tdClass:r.classes!==void 0?typeof r.classes!="function"?()=>w+" "+r.classes:q=>w+" "+r.classes(q):()=>w}})}),g=u(()=>{const v={};return i.value.forEach(c=>{v[c.name]=c}),v}),s=u(()=>e.tableColspan!==void 0?e.tableColspan:i.value.length+(n.value===!0?1:0));return{colList:f,computedCols:i,computedColsMap:g,computedColspan:s}}const ee="q-table__bottom row items-center",Ee={};$e.forEach(e=>{Ee[e]={}});var sl=D({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Ee,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...me,...Ct,...ll,...It,...pt,...Zt,...Jt,...Ht},emits:["request","virtual-scroll",...Pt,...el,...Xt],setup(e,{slots:l,emit:n}){const f=z(),{proxy:{$q:i}}=f,g=Se(e,i),{inFullscreen:s,toggleFullscreen:v}=kt(),c=u(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),h=H(null),r=H(null),S=u(()=>e.grid!==!0&&e.virtualScroll===!0),w=u(()=>" q-table__card"+(g.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=u(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(g.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(s.value===!0?" fullscreen scroll":"")),C=u(()=>q.value+(e.loading===!0?" q-table--loading":""));A(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{S.value===!0&&r.value!==null&&r.value.reset()});const{innerPagination:y,computedPagination:_,isServerSide:B,requestServerInteraction:O,setPagination:F}=Kt(f,j),{computedFilterMethod:x}=Ut(e,F),{isRowExpanded:R,setExpanded:I,updateExpanded:Ae}=tl(e,n),te=u(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:o,descending:d}=_.value;return e.filter&&(t=x.value(t,e.filter,L.value,j)),Ie.value!==null&&(t=Ue.value(e.rows===t?t.slice():t,o,d)),t}),he=u(()=>te.value.length),V=u(()=>{let t=te.value;if(B.value===!0)return t;const{rowsPerPage:o}=_.value;return o!==0&&(W.value===0&&e.rows!==t?t.length>p.value&&(t=t.slice(0,p.value)):t=t.slice(W.value,p.value)),t}),{hasSelectionMode:$,singleSelection:Ne,multipleSelection:ye,allRowsSelected:Qe,someRowsSelected:_e,rowsSelectedNumber:le,isRowSelected:ae,clearSelection:He,updateSelection:U}=Yt(e,n,V,c),{colList:ze,computedCols:L,computedColsMap:we,computedColspan:qe}=al(e,_,$),{columnToSort:Ie,computedSortMethod:Ue,sort:ne}=zt(e,_,ze,F),{firstRowIndex:W,lastRowIndex:p,isFirstPage:re,isLastPage:oe,pagesNumber:K,computedRowsPerPageOptions:We,computedRowsNumber:G,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce}=Gt(f,y,_,B,F,he),pe=u(()=>V.value.length===0),Ke=u(()=>{const t={};return $e.forEach(o=>{t[o]=e[o]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Ge(){S.value===!0&&r.value.reset()}function Je(){if(e.grid===!0)return st();const t=e.hideHeader!==!0?Re:null;if(S.value===!0){const d=l["top-row"],b=l["bottom-row"],m={default:k=>Pe(k.item,l.body,k.index)};if(d!==void 0){const k=a("tbody",d({cols:L.value}));m.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(m.before=t);return b!==void 0&&(m.after=()=>a("tbody",b({cols:L.value}))),a(Et,{ref:r,class:e.tableClass,style:e.tableStyle,...Ke.value,scrollTarget:e.virtualScrollTarget,items:V.value,type:"__qtable",tableColspan:qe.value,onVirtualScroll:Ye},m)}const o=[Ze()];return t!==null&&o.unshift(t()),je({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},o)}function Xe(t,o){if(r.value!==null){r.value.scrollTo(t,o);return}t=parseInt(t,10);const d=h.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(d!==null){const b=h.value.querySelector(".q-table__middle.scroll"),{offsetTop:m}=d,k=m<b.scrollTop?"decrease":"increase";b.scrollTop=m,n("virtual-scroll",{index:t,from:0,to:y.value.rowsPerPage-1,direction:k})}}function Ye(t){n("virtual-scroll",t)}function Ce(){return[a(Nt,{class:"q-table__linear-progress",color:e.color,dark:g.value,indeterminate:!0,trackColor:"transparent"})]}function Pe(t,o,d){const b=c.value(t),m=ae(b);if(o!==void 0)return o(ke({key:b,row:t,pageIndex:d,__trClass:m?"selected":""}));const k=l["body-cell"],P=L.value.map(T=>{const X=l[`body-cell-${T.name}`],Y=X!==void 0?X:k;return Y!==void 0?Y(et({key:b,row:t,pageIndex:d,col:T})):a("td",{class:T.__tdClass(t),style:T.__tdStyle(t)},j(T,t))});if($.value===!0){const T=l["body-selection"],X=T!==void 0?T(tt({key:b,row:t,pageIndex:d})):[a(fe,{modelValue:m,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(Y,ut)=>{U([b],[t],Y,ut)}})];P.unshift(a("td",{class:"q-table--col-auto-width"},X))}const M={key:b,class:{selected:m}};return e.onRowClick!==void 0&&(M.class["cursor-pointer"]=!0,M.onClick=T=>{n("RowClick",T,t,d)}),e.onRowDblclick!==void 0&&(M.class["cursor-pointer"]=!0,M.onDblclick=T=>{n("RowDblclick",T,t,d)}),e.onRowContextmenu!==void 0&&(M.class["cursor-pointer"]=!0,M.onContextmenu=T=>{n("RowContextmenu",T,t,d)}),a("tr",M,P)}function Ze(){const t=l.body,o=l["top-row"],d=l["bottom-row"];let b=V.value.map((m,k)=>Pe(m,t,k));return o!==void 0&&(b=o({cols:L.value}).concat(b)),d!==void 0&&(b=b.concat(d({cols:L.value}))),a("tbody",b)}function ke(t){return de(t),t.cols=t.cols.map(o=>{const d={...o};return N(d,"value",()=>j(o,t.row)),d}),t}function et(t){return de(t),N(t,"value",()=>j(t.col,t.row)),t}function tt(t){return de(t),t}function de(t){Object.assign(t,{cols:L.value,colsMap:we.value,sort:ne,rowIndex:W.value+t.pageIndex,color:e.color,dark:g.value,dense:e.dense}),$.value===!0&&N(t,"selected",()=>ae(t.key),(o,d)=>{U([t.key],[t.row],o,d)}),N(t,"expand",()=>R(t.key),o=>{Ae(t.key,o)})}function j(t,o){const d=typeof t.field=="function"?t.field(o):o[t.field];return t.format!==void 0?t.format(d,o):d}const E=u(()=>({pagination:_.value,pagesNumber:K.value,isFirstPage:re.value,isLastPage:oe.value,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce,inFullscreen:s.value,toggleFullscreen:v}));function lt(){const t=l.top,o=l["top-left"],d=l["top-right"],b=l["top-selection"],m=$.value===!0&&b!==void 0&&le.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return a("div",{class:k},[t(E.value)]);let P;if(m===!0?P=b(E.value).slice():(P=[],o!==void 0?P.push(a("div",{class:"q-table-control"},[o(E.value)])):e.title&&P.push(a("div",{class:"q-table__control"},[a("div",{class:["q-table__title",e.titleClass]},e.title)]))),d!==void 0&&(P.push(a("div",{class:"q-table__separator col"})),P.push(a("div",{class:"q-table__control"},[d(E.value)]))),P.length!==0)return a("div",{class:k},P)}const xe=u(()=>_e.value===!0?null:Qe.value);function Re(){const t=at();return e.loading===!0&&l.loading===void 0&&t.push(a("tr",{class:"q-table__progress"},[a("th",{class:"relative-position",colspan:qe.value},Ce())])),a("thead",t)}function at(){const t=l.header,o=l["header-cell"];if(t!==void 0)return t(ve({header:!0})).slice();const d=L.value.map(b=>{const m=l[`header-cell-${b.name}`],k=m!==void 0?m:o,P=ve({col:b});return k!==void 0?k(P):a(Mt,{key:b.name,props:P},()=>b.label)});if(Ne.value===!0&&e.grid!==!0)d.unshift(a("th",{class:"q-table--col-auto-width"}," "));else if(ye.value===!0){const b=l["header-selection"],m=b!==void 0?b(ve({})):[a(fe,{color:e.color,modelValue:xe.value,dark:g.value,dense:e.dense,"onUpdate:modelValue":Te})];d.unshift(a("th",{class:"q-table--col-auto-width"},m))}return[a("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},d)]}function ve(t){return Object.assign(t,{cols:L.value,sort:ne,colsMap:we.value,color:e.color,dark:g.value,dense:e.dense}),ye.value===!0&&N(t,"selected",()=>xe.value,Te),t}function Te(t){_e.value===!0&&(t=!1),U(V.value.map(c.value),V.value,t)}const J=u(()=>{const t=[e.iconFirstPage||i.iconSet.table.firstPage,e.iconPrevPage||i.iconSet.table.prevPage,e.iconNextPage||i.iconSet.table.nextPage,e.iconLastPage||i.iconSet.table.lastPage];return i.lang.rtl===!0?t.reverse():t});function nt(){if(e.hideBottom===!0)return;if(pe.value===!0){if(e.hideNoData===!0)return;const d=e.loading===!0?e.loadingLabel||i.lang.table.loading:e.filter?e.noResultsLabel||i.lang.table.noResults:e.noDataLabel||i.lang.table.noData,b=l["no-data"],m=b!==void 0?[b({message:d,icon:i.iconSet.table.warning,filter:e.filter})]:[a(be,{class:"q-table__bottom-nodata-icon",name:i.iconSet.table.warning}),d];return a("div",{class:ee+" q-table__bottom--nodata"},m)}const t=l.bottom;if(t!==void 0)return a("div",{class:ee},[t(E.value)]);const o=e.hideSelectedBanner!==!0&&$.value===!0&&le.value>0?[a("div",{class:"q-table__control"},[a("div",[(e.selectedRowsLabel||i.lang.table.selectedRecords)(le.value)])])]:[];if(e.hidePagination!==!0)return a("div",{class:ee+" justify-end"},ot(o));if(o.length>0)return a("div",{class:ee},o)}function rt(t){F({page:1,rowsPerPage:t.value})}function ot(t){let o;const{rowsPerPage:d}=_.value,b=e.paginationLabel||i.lang.table.pagination,m=l.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(a("div",{class:"q-table__separator col"})),k===!0&&t.push(a("div",{class:"q-table__control"},[a("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||i.lang.table.recordsPerPage]),a(Rt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:d,options:We.value,displayValue:d===0?i.lang.table.allRows:d,dark:g.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":rt})])),m!==void 0)o=m(E.value);else if(o=[a("span",d!==0?{class:"q-table__bottom-item"}:{},[d?b(W.value+1,Math.min(p.value,G.value),G.value):b(1,he.value,G.value)])],d!==0&&K.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),K.value>2&&o.push(a(Z,{key:"pgFirst",...P,icon:J.value[0],disable:re.value,onClick:ie})),o.push(a(Z,{key:"pgPrev",...P,icon:J.value[1],disable:re.value,onClick:se}),a(Z,{key:"pgNext",...P,icon:J.value[2],disable:oe.value,onClick:ue})),K.value>2&&o.push(a(Z,{key:"pgLast",...P,icon:J.value[3],disable:oe.value,onClick:ce}))}return t.push(a("div",{class:"q-table__control"},o)),t}function it(){const t=e.gridHeader===!0?[a("table",{class:"q-table"},[Re()])]:e.loading===!0&&l.loading===void 0?Ce():void 0;return a("div",{class:"q-table__middle"},t)}function st(){const t=l.item!==void 0?l.item:o=>{const d=o.cols.map(m=>a("div",{class:"q-table__grid-item-row"},[a("div",{class:"q-table__grid-item-title"},[m.label]),a("div",{class:"q-table__grid-item-value"},[m.value])]));if($.value===!0){const m=l["body-selection"],k=m!==void 0?m(o):[a(fe,{modelValue:o.selected,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(P,M)=>{U([o.key],[o.row],P,M)}})];d.unshift(a("div",{class:"q-table__grid-item-row"},k),a(Tt,{dark:g.value}))}const b={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(b.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(b.onClick=m=>{n("RowClick",m,o.row,o.pageIndex)}),e.onRowDblclick!==void 0&&(b.onDblclick=m=>{n("RowDblclick",m,o.row,o.pageIndex)})),a("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(o.selected===!0?" q-table__grid-item--selected":"")},[a("div",b,d)])};return a("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},V.value.map((o,d)=>t(ke({key:c.value(o),row:o,pageIndex:d}))))}return Object.assign(f.proxy,{requestServerInteraction:O,setPagination:F,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce,isRowSelected:ae,clearSelection:He,isRowExpanded:R,setExpanded:I,sort:ne,resetVirtualScroll:Ge,scrollTo:Xe,getCellValue:j}),xt(f.proxy,{filteredSortedRows:()=>te.value,computedRows:()=>V.value,computedRowsNumber:()=>G.value}),()=>{const t=[lt()],o={ref:h,class:C.value};return e.grid===!0?t.push(it()):Object.assign(o,{class:[o.class,e.cardClass],style:e.cardStyle}),t.push(Je(),nt()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),a("div",o,t)}}});export{sl as Q,il as a,fe as b};

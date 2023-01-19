import{r as l,j as o,aC as re,ay as U,b3 as oe,aD as ie,cA as ae,V as H,X as ce,a1 as ue,aN as le,a as C,P as de,cB as me,a8 as pe,cC as fe,cD as he,cE as ye,aR as ge,bk as Te,a2 as V,I as x,aw as N,ao as Ie,bR as Le,an as _,am as F,az as be,F as Re,bb as Se,cF as Pe,au as $,K as Ce,Q as ve,T as _e,bf as O,cG as Ee,cH as De,cI as Fe,cJ as je,b9 as M,A as we,cK as xe,cp as Oe,cq as Ae,bd as Ne,cL as $e,cM as Me,bV as k,bX as ke,cN as qe,bM as Be,bg as We,bs as Ue,cO as He,cP as Ve,cQ as Ge,bN as Ke}from"./desk-eb7b3548-d6978590.js";import{useDeskTool as Xe,useDeskToolSetting as q,Delay as Ye}from"./index-66ec8894-f92799d3.js";import{P as ze}from"./PaneItem-59fdbcf0-0b73b286.js";import"./index-c6bfde51.js";const B=100,A=2e3,G={by:[{field:"_updatedAt",direction:"desc"}]},Qe={};function Je(e,s){return e._id?V(e._id):"item-".concat(s)}function Ze(e){return Fe(e).map(s=>({...s.draft||s.published,hasPublished:!!s.published,hasDraft:!!s.draft}))}const et=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function tt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=e.match(et);if(!n)return null;const t=(n[1]||n[2]).trim().replace(/^["']|["']$/g,"");if(t[0]==="$"){const a=t.slice(1),c=s[a];return typeof c=="string"?c:null}return t}function nt(e){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(e.trim())}function st(e){return e.map(s=>[rt(s),(s.direction||"").toLowerCase()].map(n=>n.trim()).filter(Boolean).join(" ")).join(",")}function rt(e){return e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field}function ot(e,s){const n=e.by.map(t=>{if(t.mapWith)return t;const a=it(s,t.field);return a?ct(a,"datetime")?{...t,mapWith:"dateTime"}:a.jsonType==="string"?{...t,mapWith:"lower"}:t:t});return n.every((t,a)=>t===e.by[a])?e:{...e,by:n}}function it(e,s){const n=pe(s);let t=e;for(const a of n){if(!t)return;if(typeof a=="string"){t=at(t,a);continue}if(!(fe(a)||he(a))||t.jsonType!=="array")return;const[r,i]=t.of||[];if(i||!r)return;if(!ye(r)){t=r;continue}const[f,h]=r.to||[];if(h||!f)return;t=f}return t}function at(e,s){if(!("fields"in e))return;const n=e.fields.find(t=>t.name===s);return n?n.type:void 0}function ct(e,s){let n=e.type;for(;n;){if(n.name===s||!n.type&&n.jsonType===s)return!0;n=n.type}return!1}function ut(e){const{childItemId:s,error:n,filterIsSimpleTypeContraint:t,fullList:a,isActive:c,isLoading:r,items:i,layout:f,onListChange:h,onRetry:u,showIcons:y}=e,R=H(),{collapsed:b}=ge(),{collapsed:L,index:g}=Te(),[S,P]=l.useState(!1);l.useEffect(()=>{if(L)return;const d=setTimeout(()=>{P(!0)},0);return()=>{clearTimeout(d)}},[L]);const T=l.useCallback(d=>{const I=V(d._id),m=s===I;return o(ze,{icon:y===!1?!1:void 0,id:I,pressed:!c&&m,selected:c&&m,layout:f,schemaType:R.get(d._type),value:d})},[s,c,f,R,y]),p=l.useMemo(()=>{if(!S)return null;if(n)return o(x,{align:"center",direction:"column",height:"fill",justify:"center",children:o(N,{width:1,children:C(Ie,{paddingX:4,paddingY:5,space:4,children:[o(Le,{as:"h3",children:"Could not fetch list items"}),C(_,{as:"p",children:["Error: ",o("code",{children:n.message})]}),u&&o(F,{children:o(U,{icon:be,onClick:u,text:"Retry",tone:"primary"})})]})})});if(i===null)return o(x,{align:"center",direction:"column",height:"fill",justify:"center",children:o(Ye,{ms:300,children:C(Re,{children:[o(Se,{muted:!0}),o(F,{marginTop:3,children:o(_,{align:"center",muted:!0,size:1,children:"Loading documents…"})})]})})});if(!r&&i.length===0)return o(x,{align:"center",direction:"column",height:"fill",justify:"center",children:o(N,{width:1,children:o(F,{paddingX:4,paddingY:5,children:o(_,{align:"center",muted:!0,size:2,children:t?"No documents of this type":"No matching documents"})})})});const d=a&&i.length===A;return C(F,{padding:2,children:[i.length>0&&o(Pe,{gap:1,getItemKey:Je,items:i,renderItem:T,onChange:h},"".concat(g,"-").concat(L)),r&&o($,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:o(_,{align:"center",muted:!0,size:1,children:"Loading…"})}),d&&o($,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:C(_,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",A," documents"]})})]})},[n,t,a,h,r,i,u,T,S,L,g]);return o(Ce,{overflow:b?void 0:"auto",children:p})}const K=l.memo(e=>{let{index:s,initialValueTemplates:n=[],menuItems:t=[],menuItemGroups:a=[],setLayout:c,setSortOrder:r,title:i}=e;const{features:f}=Xe(),h=l.useMemo(()=>({setLayout:u=>{let{layout:y}=u;c(y)},setSortOrder:u=>{r(u)}}),[c,r]);return o(re,{backButton:f.backButton&&s>0&&o(U,{as:oe,"data-as":"a",icon:ie,mode:"bleed"}),title:i,actions:o(ae,{initialValueTemplateItems:n,actionHandlers:h,menuItemGroups:a,menuItems:t})})});K.displayName="DocumentListPaneHeader";const lt={result:null,error:!1},dt=e=>({result:{documents:e},loading:!1,error:!1}),mt=e=>({result:null,loading:!1,error:e}),pt=function(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=new je,t=n.next.bind(n);return e.pipe(M(r=>({client:r.client,query:r.query,params:r.params})),we(xe),Oe(1),Ae()).pipe(Ne(r=>{const i=$e(r.client,r.query,r.params,s).pipe(M(dt),Me());return k(O({loading:!0}).pipe(ke(400),qe(i)),i)})).pipe(Be(lt),We((r,i)=>Ue(O(mt(r)),k(He(window,"online"),n).pipe(Ve(1),Ge(i)))),Ke((r,i)=>({...r,...i,onRetry:t})))};function ft(e){var s;const{apiVersion:n,filter:t,params:a,sortOrder:c}=e,r=ve(_e),[i,f]=l.useState(!1),h=l.useRef(i),[u,y]=l.useState(null),R=(u==null?void 0:u.error)||null,b=(u==null?void 0:u.loading)||u===null,L=u==null?void 0:u.onRetry,g=(s=u==null?void 0:u.result)==null?void 0:s.documents,S=l.useMemo(()=>g?Ze(g):null,[g]),P=l.useMemo(()=>{const p=c==null?void 0:c.extendedProjection,d=["_id","_type"],I=d.join(","),m=(c==null?void 0:c.by)||[],v=i?A:B,E=m.length>0?m:G.by,D=st(E);if(p){const j=d.concat(p).join(",");return["*[".concat(t,"] {").concat(j,"}"),"order(".concat(D,") [0...").concat(v,"]"),"{".concat(I,"}")].join("|")}return"*[".concat(t,"]|order(").concat(D,")[0...").concat(v,"]{").concat(I,"}")},[t,i,c]),T=l.useCallback(p=>{let{toIndex:d}=p;b||h.current||d>=B/2&&(f(!0),h.current=!0)},[b]);return l.useEffect(()=>{const p=i?m=>Boolean(m.result):()=>!0;y(m=>m?{...m,loading:!0}:null);const I=pt(O({client:r,query:P,params:a}),{apiVersion:n,tag:"desk.document-list"}).pipe(Ee(p)).subscribe(y);return()=>I.unsubscribe()},[n,r,i,P,a]),l.useEffect(()=>{y(null),f(!1),h.current=!1},[t,a,c,n]),{error:R,fullList:i,handleListChange:T,isLoading:b,items:S,onRetry:L}}const W=[];function ht(e){const s=l.useRef(e);return De(s.current,e)||(s.current=e),s.current}const Lt=l.memo(function(s){const{childItemId:n,index:t,isActive:a,isSelected:c,pane:r,paneKey:i}=s,f=H(),{name:h}=ce(),{defaultLayout:u="default",displayOptions:y,initialValueTemplates:R=W,menuItems:b,menuItemGroups:L,options:g,title:S}=r,{apiVersion:P,defaultOrdering:T=W,filter:p}=g,d=ht(g.params||Qe),I=r.source,m=l.useMemo(()=>tt(p,d),[p,d]),v=(y==null?void 0:y.showIcons)!==!1,[E,D]=q(m,"layout",u),j=l.useMemo(()=>(T==null?void 0:T.length)>0?{by:T}:G,[T]),[w,X]=q(m,"sortOrder",j),Y=m&&w?ot(w,f.get(m)):w,z=ue(Y),Q=nt(p),{error:J,fullList:Z,handleListChange:ee,isLoading:te,items:ne,onRetry:se}=ft({filter:p,params:d,sortOrder:z,apiVersion:P});return o(le,{name:I||h,children:C(de,{currentMaxWidth:350,id:i,maxWidth:640,minWidth:320,selected:c,children:[me,o(K,{index:t,initialValueTemplates:R,menuItems:b,menuItemGroups:L,setLayout:D,setSortOrder:X,title:S}),o(ut,{childItemId:n,error:J,filterIsSimpleTypeContraint:Q,fullList:Z,isActive:a,isLoading:te,items:ne,layout:E,onListChange:ee,onRetry:se,showIcons:v})]})})});export{Lt as default};
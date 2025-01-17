import D from"./Cirh32Ew.js";import{a as B,j as z,o as u,s as h,Q as j,R as G,w as q,D as S,E as I,F as E,b as x,T as M,f as K,U as J,V as R,g as d,l as H,W,X,y as Y,z as N,A as Z,B as ee,C as L,p as _,n as $,c as w,t as O,G as ae,Y as ie,i as te,q as b,N as T,d as P,e as re,x as ne}from"./Douj4D2a.js";import{i as V,d as le}from"./DY7prswQ.js";import{u as se}from"./DiTOhUcE.js";import{u as oe}from"./DMvi0swz.js";const U={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},de=e=>Object.keys(U).reduce((i,r)=>(e[r]!==void 0&&(i[r]=e[r]),i),{}),ue={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},ce=z({props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1,default:null}}});function ge(e,l,i,r,n,a){const t=D;return u(),h(t,j(G(e.$props)),null,16)}const A=B(ce,[["render",ge]]),fe=z({inheritAttrs:!1,props:{...U,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:[Boolean,String],default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function l(r,n){const a=le(r,n).reduce((t,c)=>(c.type==="added"&&t.push(c.key),t),[]);return V(r,n,{excludeKeys:t=>a.includes(t)})}function i(r,n,{isActive:a,isExactActive:t}){if(e.exactQuery==="partial"){if(!l(r.query,n.query))return e.inactiveClass}else if(e.exactQuery===!0&&!V(r.query,n.query))return e.inactiveClass;return e.exactHash&&r.hash!==n.hash?e.inactiveClass:e.exact&&t||!e.exact&&a?e.activeClass:e.inactiveClass}return{resolveLinkClass:i}}}),be=["href","aria-disabled","role","rel","target","tabindex","onClick"];function ye(e,l,i,r,n,a){const t=K;return e.to?(u(),h(t,I({key:1},e.$props,{custom:""}),{default:q(({route:c,href:y,target:p,rel:m,navigate:k,isActive:v,isExactActive:s,isExternal:o})=>[x("a",I(e.$attrs,{href:e.disabled?void 0:y,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:m,target:p,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(c,e._.provides[M]||e.$route,{isActive:v,isExactActive:s}),tabindex:e.disabled?-1:void 0,onClick:g=>!o&&!e.disabled&&k(g)}),[S(e.$slots,"default",j(G({isActive:e.active!==void 0?e.active:e.exact?s:v})))],16,be)]),_:3},16)):(u(),h(E(e.as),I({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:q(()=>[S(e.$slots,"default",j(G({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const Q=B(fe,[["render",ye]]);function ve({ui:e,props:l}){const i=X();if(J("ButtonGroupContextConsumer",!0),R("ButtonGroupContextConsumer",!1))return{size:d(()=>l.size),rounded:d(()=>e.value.rounded)};let n=i.parent,a;for(;n&&!a;){if(n.type.name==="ButtonGroup"){a=R(`group-${n.uid}`);break}n=n.parent}const t=d(()=>a==null?void 0:a.value.children.indexOf(i));return H(()=>{a==null||a.value.register(i)}),W(()=>{a==null||a.value.unregister(i)}),{size:d(()=>a!=null&&a.value?(a==null?void 0:a.value.size)??e.value.default.size:l.size),rounded:d(()=>!a||t.value===-1?e.value.rounded:a.value.children.length===1?a.value.ui.rounded:t.value===0?a.value.rounded.start:t.value===a.value.children.length-1?a.value.rounded.end:"rounded-none")}}const f=Y(N.ui.strategy,N.ui.button,ue),he=z({components:{UIcon:A,ULink:Q},inheritAttrs:!1,props:{...U,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>f.default.size,validator(e){return Object.keys(f.size).includes(e)}},color:{type:String,default:()=>f.default.color,validator(e){return[...N.ui.colors,...Object.keys(f.color)].includes(e)}},variant:{type:String,default:()=>f.default.variant,validator(e){return[...Object.keys(f.variant),...Object.values(f.color).flatMap(l=>Object.keys(l))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>f.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:l}){const{ui:i,attrs:r}=se("button",Z(e,"ui"),f),{size:n,rounded:a}=ve({ui:i,props:e}),t=d(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),c=d(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),y=d(()=>e.square||!l.default&&!e.label),p=d(()=>{var C,F;const g=((F=(C=i.value.color)==null?void 0:C[e.color])==null?void 0:F[e.variant])||i.value.variant[e.variant];return ee(L(i.value.base,i.value.font,a.value,i.value.size[n.value],i.value.gap[n.value],e.padded&&i.value[y.value?"square":"padding"][n.value],g==null?void 0:g.replaceAll("{color}",e.color),e.block?i.value.block:i.value.inline),e.class)}),m=d(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),k=d(()=>e.loading&&!t.value?e.loadingIcon:e.trailingIcon||e.icon),v=d(()=>L(i.value.icon.base,i.value.icon.size[n.value],e.loading&&i.value.icon.loading)),s=d(()=>L(i.value.icon.base,i.value.icon.size[n.value],e.loading&&!t.value&&i.value.icon.loading)),o=d(()=>de(e));return{ui:i,attrs:r,isLeading:t,isTrailing:c,isSquare:y,buttonClass:p,leadingIconName:m,trailingIconName:k,leadingIconClass:v,trailingIconClass:s,linkProps:o}}});function pe(e,l,i,r,n,a){const t=A,c=Q;return u(),h(c,I({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:q(()=>[S(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(u(),h(t,{key:0,name:e.leadingIconName,class:_(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):$("",!0)]),S(e.$slots,"default",{},()=>[e.label?(u(),w("span",{key:0,class:_([e.truncate?e.ui.truncate:""])},O(e.label),3)):$("",!0)]),S(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(u(),h(t,{key:0,name:e.trailingIconName,class:_(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):$("",!0)])]),_:3},16,["type","disabled","class"])}const me=B(he,[["render",pe]]),ke={class:"auth-container"},xe={key:0,class:"error-message",role:"alert","aria-live":"polite"},we={class:"button-text"},Se={class:"auth-success"},qe=z({__name:"GithubLogin",setup(e){const l=ae(),i=ie(),{showToast:r}=ne(),{isAuthenticated:n,error:a,loading:t,initiateLogin:c,handleCallback:y,logout:p}=oe();te(a,s=>{s&&r({title:"Authentication Error",message:s,type:"error"})});const m=async()=>{const s=l.query.code,o=l.query.state;if(s&&o)try{await y(s,o),r({title:"Success",message:"Successfully authenticated with GitHub",type:"success"}),await i.replace({path:l.path,query:{}})}catch(g){console.error("Failed to handle authentication callback:",g),r({title:"Authentication Failed",message:"Unable to complete authentication. Please try again.",type:"error"})}},k=async()=>{try{await c()}catch(s){console.error("Login error:",s),r({title:"Login Failed",message:"Unable to start login process. Please try again.",type:"error"})}},v=async()=>{try{await p(),r({title:"Success",message:"Successfully logged out",type:"success"})}catch(s){console.error("Logout error:",s),r({title:"Logout Failed",message:"Unable to complete logout. Please try again.",type:"error"})}};return H(()=>{const s=l.query.code,o=l.query.state;s&&o&&m()}),(s,o)=>{const g=me,C=A;return u(),w("div",ke,[b(a)?(u(),w("div",xe,O(b(a)),1)):$("",!0),b(n)?(u(),w(T,{key:2},[x("div",Se,[P(C,{name:"i-heroicons-check-circle",class:"success-icon","aria-hidden":"true"}),o[1]||(o[1]=x("span",null,"Successfully authenticated with GitHub",-1))]),P(g,{onClick:v,color:"gray",variant:"soft",class:"logout-button",disabled:b(t)},{default:q(()=>o[2]||(o[2]=[re(" Sign Out ")])),_:1},8,["disabled"])],64)):(u(),w(T,{key:1},[P(g,{loading:b(t),disabled:b(t),onClick:k,icon:"i-simple-icons-github",size:"lg",color:"black",class:"auth-button"},{default:q(()=>[x("span",we,O(b(t)?"Signing in...":"Sign in with GitHub"),1)]),_:1},8,["loading","disabled"]),o[0]||(o[0]=x("p",{class:"auth-help"}," Sign in to edit and contribute to the documentation ",-1))],64))])}}}),Le=B(qe,[["__scopeId","data-v-6efab08a"]]);export{Le as default};

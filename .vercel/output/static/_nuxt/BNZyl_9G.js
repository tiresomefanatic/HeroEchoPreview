import{_ as M,a as T}from"./CVqQRPZ3.js";import z from"./DDGZSJqP.js";import{g as K,r as f,h as J,i as C,j as Q,k as E,l as W,m as X,o as r,c as i,d as c,w as h,n as _,H as Y,b as p,p as $,q as P,t as Z,s as ee,v as te,a as ne}from"./DpbXZn14.js";import{u as ae}from"./DES18ZVy.js";import{u as oe,q as y}from"./pUVNo6NO.js";import q from"./7tTpqkYT.js";import"./B3THjRu3.js";import"./Hi6R_XZp.js";import"./Bco5xEST.js";import"./CrcsxJmM.js";import"./C5M32JAv.js";import"./BZt92CSo.js";import"./Dym_awWQ.js";import"./BmlbPuZL.js";import"./BFj9DYUF.js";import"./DY7prswQ.js";import"./DWItlvEX.js";const se=window.setInterval,re={class:"page-wrapper"},ie={key:0},ce={class:"mobile-menu-wrapper"},le={key:0,class:"sidebar"},ue={key:0,class:"content-header"},de={key:0,class:"editor-container"},me={key:1,class:"prose-content"},he=K({__name:"[...slug]",async setup(pe){let v,k;const{getRawContent:B,saveFileContent:N,isLoggedIn:g,currentBranch:o}=ae(),{showToast:d}=te(),x=f(!1),n=f(!1),w=f(""),A=f(null),b=J().params.slug||[],a=Array.isArray(b)?b.join("/"):b,S=C(()=>a!==""),R=C(()=>`${a}-${Date.now()}`),{data:D}=([v,k]=Q(()=>oe(`content-${a}`,()=>a?y().where({_path:`/${a}`}).findOne():y().where({_path:"/"}).findOne(),{immediate:!0,server:!0})),v=await v,k(),v),l=C(()=>a?`content/${a}.md`:"content/index.md"),O=async()=>{var e;try{const t=await fetch(`https://api.github.com/repos/tiresomefanatic/test-nuxt/commits?path=${l.value}&sha=${o.value}`,{headers:{Accept:"application/vnd.github.v3+json"}});if(!t.ok)throw new Error("Failed to fetch commit info");const m=(e=(await t.json())[0])==null?void 0:e.sha;return m!==A.value?(console.log("New commit detected, refreshing content..."),A.value=m,!0):!1}catch(t){return console.error("Error checking content freshness:",t),!0}},s=async(e=!1)=>{var t;x.value=!0;try{if(e||await O()){console.log(`Fetching fresh content at ${new Date().toISOString()}`),console.log(`Branch: ${o.value}, Path: ${l.value}`);const m=await B("tiresomefanatic","test-nuxt",l.value,o.value);w.value=m;{const I=(t=ee().$content)==null?void 0:t.storage;I&&await I.clearAll();const G=await(a?y().where({_path:`/${a}`}):y().where({_path:"/"})).findOne();D.value=G}}}catch(u){console.error("Content loading error:",u),d({title:"Error",message:`Failed to load content from branch: ${o.value}`,type:"error"})}finally{x.value=!1}},F=async()=>{document.visibilityState==="visible"&&!n.value&&await s()},j=async()=>{if(!g.value){d({title:"Authentication Required",message:"Please sign in with GitHub to edit content",type:"warning"});return}n.value=!0,await s(!0)},L=e=>{w.value=e},V=async e=>{if(!e||!g.value){d({title:"Error",message:"Please sign in to save changes",type:"error"});return}try{if(await N("tiresomefanatic","test-nuxt",l.value,e,`Update ${l.value}`,o.value))d({title:"Success",message:`Content saved successfully to branch: ${o.value}`,type:"success"}),await s(!0),n.value=!1;else throw new Error(`Failed to save to branch: ${o.value}`)}catch(t){console.error("Error saving content:",t),d({title:"Error",message:`Failed to save to branch: ${o.value}`,type:"error"})}},H=e=>{d({title:"Editor Error",message:e.message,type:"error"})},U=async()=>{await s(!0),n.value=!1};return E(n,async(e,t)=>{e&&!t&&await s(!0)}),E(o,async(e,t)=>{e!==t&&await s(!0)}),E(l,async(e,t)=>{e!==t&&await s(!0)}),W(()=>{{s(!0),document.addEventListener("visibilitychange",F);const e=se(async()=>{n.value||await s()},3e4);X(()=>{clearInterval(e),document.removeEventListener("visibilitychange",F)})}}),(e,t)=>{const u=T,m=z;return r(),i("div",re,[c(u,null,{default:h(()=>[_(D)?(r(),i("div",ie,[c(Y),p("div",{class:P(["content-area",{"editing-mode":n.value}])},[p("div",ce,[c(q)]),!n.value&&S.value?(r(),i("aside",le,[c(q)])):$("",!0),p("div",{class:P(["main-content",{"with-sidebar":!n.value&&S.value}])},[_(g)?(r(),i("div",ue,[c(u,null,{default:h(()=>[n.value?(r(),i("button",{key:1,onClick:U,class:"edit-button"}," Exit ")):(r(),i("button",{key:0,onClick:j,class:"edit-button"}," Edit "))]),_:1})])):$("",!0),c(u,null,{default:h(()=>[n.value?(r(),i("div",de,[c(M,{content:w.value,filePath:l.value,"onUpdate:content":L,onSave:V,onError:H},null,8,["content","filePath"])])):(r(),i("div",me,[(r(),i("div",{key:R.value},[c(m,{path:_(a),head:!1},{empty:h(()=>t[0]||(t[0]=[p("p",null,"No content found.",-1)])),"not-found":h(()=>[p("p",null,"Content not found. Path: "+Z(_(a)),1)]),_:1},8,["path"])]))]))]),_:1})],2)],2)])):$("",!0)]),_:1})])}}}),Ne=ne(he,[["__scopeId","data-v-6b7a7128"]]);export{Ne as default};

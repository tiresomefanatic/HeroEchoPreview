import{j as S,r as u,o as a,c,b as t,e as x,n as v,p as _,J as m,ac as b,N as h,O as g,t as l,a as A}from"./Douj4D2a.js";const D={class:"dialog-wrapper"},L={key:1,class:"dialog"},N={class:"tabs"},$={class:"tab-list"},B={class:"tab-content"},F={class:"content-grid"},T=["onClick"],V={class:"content-title"},O={class:"content-description"},j={class:"tab-content"},z={class:"content-grid"},E=["onClick"],J={class:"content-title"},W={class:"content-description"},q=S({__name:"AddContentDialog",props:{onInsertComponent:{type:Function},onInsertSection:{type:Function}},setup(C){const r=C,e=u(!1),i=u("components"),k=[{id:"colorwheel",name:"Color Wheel",description:"Insert a color wheel component"}],f=[{id:"split-with-image",name:"Split with Image",description:"Left title, right content with image and text"},{id:"split-with-list",name:"Split with List",description:"Left title, right content with image and bullet points"}],w=o=>{r.onInsertComponent(o),e.value=!1},I=o=>{r.onInsertSection(o),e.value=!1},d=()=>{e.value=!e.value},p=o=>{i.value=o};return(o,s)=>(a(),c("div",D,[t("button",{onClick:d,class:"add-button"},s[2]||(s[2]=[t("span",{class:"plus-icon"},"+",-1),x(" Add ")])),e.value?(a(),c("div",{key:0,class:"dialog-overlay",onClick:d})):v("",!0),e.value?(a(),c("div",L,[t("div",{class:"dialog-header"},[s[3]||(s[3]=t("h2",{class:"dialog-title"},"Add Content",-1)),t("button",{class:"close-button",onClick:d},"×")]),t("div",N,[t("div",$,[t("button",{class:_(["tab-button",{active:i.value==="components"}]),onClick:s[0]||(s[0]=n=>p("components"))}," Components ",2),t("button",{class:_(["tab-button",{active:i.value==="sections"}]),onClick:s[1]||(s[1]=n=>p("sections"))}," Sections ",2)]),m(t("div",B,[t("div",F,[(a(),c(h,null,g(k,n=>t("button",{key:n.id,class:"content-button",onClick:y=>w(n.id)},[t("span",V,l(n.name),1),t("span",O,l(n.description),1)],8,T)),64))])],512),[[b,i.value==="components"]]),m(t("div",j,[t("div",z,[(a(),c(h,null,g(f,n=>t("button",{key:n.id,class:"content-button",onClick:y=>I(n.id)},[t("span",J,l(n.name),1),t("span",W,l(n.description),1)],8,E)),64))])],512),[[b,i.value==="sections"]])])])):v("",!0)]))}}),H=A(q,[["__scopeId","data-v-b53b07ac"]]);export{H as default};

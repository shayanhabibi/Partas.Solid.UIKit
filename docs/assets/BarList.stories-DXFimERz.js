import{m as f,s as B,t as g,q as T,i as l,c as y,d as _,D as j,l as P,F as R,n as D,w as E,v as I}from"./iframe-BHVPMPJn.js";import{j as $,k as U}from"./Util-DXwscfZV.js";import{a as V,b as M,i as k,m as A}from"./Array-CbDDtYGA.js";import{L as C}from"./Utils-CAhjhIiz.js";var z=g("<div data-slot=bar-list>"),N=g('<div class="row flex w-full justify-between space-x-6"><div class=grow><div></div></div><div class="flex items-center">'),q=g("<a rel=noreferrer class=hover:underline>"),H=g("<p>");function K(s){return U(s)}function F(s){s=f({valueFormatter:K,sortOrder:"descending"},s);const[n,L]=B(s,["sortOrder","data","class","valueFormatter"]),p=()=>{switch(n.sortOrder){case"descending":return M(e=>e.value|0,n.data,{Compare:(e,c)=>$(e,c)|0});case"none":return n.data;default:return V(e=>e.value|0,n.data,{Compare:(e,c)=>$(e,c)|0})}};return(()=>{var m=z();return T(m,f({get class(){return C(["flex flex-col space-y-1.5",n.class])},get ariaSort(){return n.sortOrder}},L),!1,!0),l(m,y(R,{get each(){return p()},children:(e,c)=>{let b,h;return(()=>{var S=N(),x=S.firstChild,v=x.firstChild,w=x.nextSibling;return l(v,(()=>{var a=_(()=>!!e.icon);return()=>a()?y(j,{get component(){return e.icon()},class:"mr-2 size-5 flex-none"}):void 0})(),null),l(v,(()=>{var a=_(()=>!!e.href);return()=>a()?(()=>{var r=q();return l(r,()=>e.name),P(t=>{var o=e.href,O=e.target??"_blank";return o!==t.e&&D(r,"href",t.e=o),O!==t.t&&D(r,"target",t.t=O),t},{e:void 0,t:void 0}),r})():(()=>{var r=H();return l(r,()=>e.name),r})()})(),null),l(w,()=>n.valueFormatter(e.value)),P(a=>{var r=C(["flex h-8 items-center rounded-md bg-secondary px-2"]),t=`${k(c(),(b=A(o=>o.value|0,p()),h=Math.max(...b),A(o=>o.value===0?0:Math.max(o.value/h*100,2),p())))}%`;return r!==a.e&&E(v,a.e=r),t!==a.t&&I(v,"width",a.t=t),a},{e:void 0,t:void 0}),S})()}})),m})()}const X=[{value:324,name:"Instagram"},{value:174,name:"X"},{value:1237,name:"Youtube"}],Y={args:{data:X},argTypes:{data:{control:{type:"object"},table:{type:{summary:`Array of DeclaredType
  ({ FullName = "Partas.Solid.UI.Bar"
     Path =
      SourcePath
        "C:/Users/shaya/RiderProjects/Partas.Solid.UIKit/Partas.Solid.UI/Components/BarList.fs" },
   [])`}}},valueFormatter:{control:{type:!1},table:{type:{summary:"function"}}},sortOrder:{control:{type:"radio"},options:["descending","none","ascending"],table:{type:{summary:"[<StringEnum>]"}}}},render:s=>y(F,f(s,{"bool:n$":!1})),component:F},d={args:{}},i={args:{sortOrder:"ascending"}},u={args:{sortOrder:"descending"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    sortOrder: "ascending"
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    sortOrder: "descending"
  }
}`,...u.parameters?.docs?.source}}};const Z=["Default","Ascending","Descending"],ee=Object.freeze(Object.defineProperty({__proto__:null,Ascending:i,Default:d,Descending:u,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{ee as B,d as D};

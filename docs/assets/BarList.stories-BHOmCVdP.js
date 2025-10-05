import{m as f,s as w,t as g,y as T,i as l,c as y,g as _,D as j,v as P,F as E,w as D,E as R,B as I}from"./iframe-mHl6JQ-c.js";import{a as $,i as U}from"./Util-jMr-gVD5.js";import{s as V,a as M,i as z,m as A}from"./Array-DTFxpKaG.js";import{L as C}from"./Utils-CYryE0IK.js";var N=g("<div data-slot=bar-list>"),k=g('<div class="row flex w-full justify-between space-x-6"><div class=grow><div></div></div><div class="flex items-center">'),H=g("<a rel=noreferrer class=hover:underline>"),K=g("<p>");function X(s){return U(s)}function B(s){s=f({valueFormatter:X,sortOrder:"descending"},s);const[n,F]=w(s,["sortOrder","data","class","valueFormatter"]),p=()=>{switch(n.sortOrder){case"descending":return M(e=>e.value|0,n.data,{Compare:(e,c)=>$(e,c)|0});case"none":return n.data;default:return V(e=>e.value|0,n.data,{Compare:(e,c)=>$(e,c)|0})}};return(()=>{var m=N();return T(m,f({get class(){return C(["flex flex-col space-y-1.5",n.class])},get ariaSort(){return n.sortOrder}},F),!1,!0),l(m,y(E,{get each(){return p()},children:(e,c)=>{let h,S;return(()=>{var b=k(),x=b.firstChild,v=x.firstChild,L=x.nextSibling;return l(v,(()=>{var a=_(()=>!!e.icon);return()=>a()?y(j,{get component(){return e.icon()},class:"mr-2 size-5 flex-none"}):void 0})(),null),l(v,(()=>{var a=_(()=>!!e.href);return()=>a()?(()=>{var r=H();return l(r,()=>e.name),P(t=>{var o=e.href,O=e.target??"_blank";return o!==t.e&&D(r,"href",t.e=o),O!==t.t&&D(r,"target",t.t=O),t},{e:void 0,t:void 0}),r})():(()=>{var r=K();return l(r,()=>e.name),r})()})(),null),l(L,()=>n.valueFormatter(e.value)),P(a=>{var r=C(["flex h-8 items-center rounded-md bg-secondary px-2"]),t=`${z(c(),(h=A(o=>o.value|0,p()),S=Math.max(...h),A(o=>o.value===0?0:Math.max(o.value/S*100,2),p())))}%`;return r!==a.e&&R(v,a.e=r),t!==a.t&&I(v,"width",a.t=t),a},{e:void 0,t:void 0}),b})()}})),m})()}const Y=[{value:324,name:"Instagram"},{value:174,name:"X"},{value:1237,name:"Youtube"}],Z={args:{data:Y},argTypes:{data:{control:{type:"object"},table:{type:{summary:`Array of DeclaredType
  ({ FullName = "Partas.Solid.UI.Bar"
     Path =
      SourcePath
        "C:/Users/shaya/RiderProjects/Partas.Solid.UIKit/Partas.Solid.UI/Components/BarList.fs" },
   [])`}}},valueFormatter:{control:{type:!1},table:{type:{summary:"function"}}},sortOrder:{control:{type:"radio"},options:["descending","none","ascending"],table:{type:{summary:"[<StringEnum>]"}}}},render:s=>y(B,f(s,{"bool:n$":!1})),component:B},d={args:{}},i={args:{sortOrder:"ascending"}},u={args:{sortOrder:"descending"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    sortOrder: "ascending"
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    sortOrder: "descending"
  }
}`,...u.parameters?.docs?.source}}};const q=["Default","Ascending","Descending"],ee=Object.freeze(Object.defineProperty({__proto__:null,Ascending:i,Default:d,Descending:u,__namedExportsOrder:q,default:Z},Symbol.toStringTag,{value:"Module"}));export{ee as B,d as D};

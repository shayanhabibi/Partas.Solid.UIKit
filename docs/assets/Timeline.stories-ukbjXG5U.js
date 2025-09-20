import{m as o,s as c,t as u,j as s,c as a,i as p,F as g,l as T,v as A,p as d,n as _}from"./iframe-DpV9HfhM.js";import{L as S}from"./Utils-BwHSRaIp.js";import"./preload-helper-D9Z9MdNV.js";var v;(function(t){t[t.AllowHexSpecifier=512]="AllowHexSpecifier"})(v||(v={}));function z(t){return t===-2147483648?t:-t}var y=u("<div>"),P=u('<div class="mb-1 text-base font-semibold leading-none">'),$=u("<p>"),I=u("<li>"),R=u("<ul>");function L(t){const[e,l]=c(t,["bulletSize","lineSize","isActive","class"]),i=()=>e.bulletSize,r=()=>e.lineSize;return(()=>{var n=y();return _(n,"ariahidden",!0),d(n,o({get class(){return S(["absolute top-0 flex items-center justify-center rounded-full border bg-background",e.isActive&&"border-primary",e.class])},get style(){return{width:`${i()}px`,height:`${i()}px`,left:`${~~(z(i())/2)-~~(r()/2)}px`,"border-width":`${r()}px`}}},l),!1,!1),n})()}function x(t){const[e,l]=c(t,["children"]);return(()=>{var i=P();return s(i,()=>e.children),i})()}function E(t){const[e,l]=c(t,["class","children"]);return(()=>{var i=$();return d(i,o({get class(){return S(["text-sm text-muted-foreground",e.class])}},l),!1,!0),s(i,()=>e.children),i})()}function O(t){const[e,l]=c(t,["lineSize","isLast","isActive","class","bulletSize","isActiveBullet","bullet","title","description"]),i=e.lineSize;return(()=>{var r=I();return A(r,"border-left-width",`${i}px`),d(r,o({get class(){return S(["relative border-l pb-8 pl-8",e.isLast&&"border-l-transparent pb-0",e.isActive&&!e.isLast&&"border-l-primary",e.class])}},l),!1,!0),s(r,a(L,{get lineSize(){return e.lineSize},get bulletSize(){return e.bulletSize},get isActive(){return e.isActiveBullet},get children(){return e.bullet}}),null),s(r,a(x,{get children(){return e.title}}),null),s(r,(()=>{var n=p(()=>!!e.description);return()=>n()?a(E,{get children(){return e.description}}):void 0})(),null),r})()}function C(t){return`${~~(t/2)}px`}function h(t){t=o({bulletSize:16,lineSize:2},t);const[e,l]=c(t,["bulletSize","items","activeItem","lineSize"]);return(()=>{var i=R();return s(i,a(g,{get each(){return e.items},children:(r,n)=>{let b,f;return a(O,{get title(){return r.title},get description(){return r.description},get bullet(){return r.bullet},get isLast(){return b=(f=e.items,f.length-1|0),n()===b},get isActive(){return p(()=>e.activeItem===-1)()?!1:e.activeItem>=n()+1},get isActiveBullet(){return p(()=>e.activeItem===-1)()?!1:e.activeItem>=n()},get bulletSize(){return e.bulletSize},get lineSize(){return e.lineSize}})}})),T(r=>A(i,"padding-left",C(e.bulletSize))),i})()}const U={args:{},argTypes:{activeItem:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},bulletSize:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},items:{control:{type:"object"},table:{type:{summary:`Array of DeclaredType
  ({ FullName = "Partas.Solid.UI.TimelineModule.Item"
     Path =
      SourcePath
        "C:/Users/shaya/RiderProjects/Partas.Solid.UIKit/Partas.Solid.UI/Components/Timeline.fs" },
   [])`}}},lineSize:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}}},render:t=>a(h,o(t,{"bool:n$":!1})),component:h},m={args:{activeItem:1,items:[{title:"Event #1",description:"This is the first event of the timeline."},{title:"Event #2",description:"This is the second event of the timeline."},{title:"Event #3",description:"This is the third event of the timeline."}]}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    activeItem: 1,
    items: [{
      title: "Event #1",
      description: "This is the first event of the timeline."
    }, {
      title: "Event #2",
      description: "This is the second event of the timeline."
    }, {
      title: "Event #3",
      description: "This is the third event of the timeline."
    }]
  }
}`,...m.parameters?.docs?.source}}};const j=["Default"];export{m as Default,j as __namedExportsOrder,U as default};

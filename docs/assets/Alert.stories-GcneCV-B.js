import{c as l,m as i,s as u,t as g,q as f}from"./iframe-CSkHCzVC.js";import{d as v}from"./Option-C1D3-SyF.js";import{P as _}from"./FLVHQV4A-Dza2M8WJ.js";import{_ as A}from"./5WXHJDCZ-DghNgBBa.js";import{L as d}from"./Utils-Bukfxs-o.js";var S={};A(S,{Alert:()=>x,Root:()=>p});function p(r){return l(_,i({as:"div",role:"alert"},r))}var x=p,y=g("<div data-slot=alert-title>"),b=g("<div data-slot=alert-description>");function P(r){const e=v(r,"default");return"relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current "+(e==="destructive"?"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90":e==="success"?"border-success-foreground/30 text-success-foreground dark:border-success-foreground [&>svg]:text-current bg-success/20":"bg-card text-card-foreground")}function m(r){const[e,t]=u(r,["variant","class"]);return l(p,i({get class(){return d([P(e.variant),e.class])},"data-slot":"alert"},t,{"bool:n$":!1}))}function T(r){const[e,t]=u(r,["class"]);return(()=>{var s=y();return f(s,i({get class(){return d(["col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",e.class])}},t),!1,!1),s})()}function D(r){const[e,t]=u(r,["class"]);return(()=>{var s=b();return f(s,i({get class(){return d(["text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",e.class])}},t),!1,!1),s})()}const R={args:{},argTypes:{variant:{control:{type:"radio"},description:"Style variant of the alert.",options:["success","destructive","default"],table:{defaultValue:{summary:"Alert.Variant.Default"},type:{summary:"[<StringEnum>]"}}}},render:r=>l(m,i(r,{"bool:n$":!1,get children(){return[l(T,{children:"Title"}),l(D,{children:"Alert description"})]}})),component:m},a={args:{variant:"default"}},o={args:{variant:"default"}},c={args:{variant:"destructive"}},n={args:{variant:"success"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive"
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success"
  }
}`,...n.parameters?.docs?.source}}};const h=["Primary","Default","Destructive","Success"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Destructive:c,Primary:a,Success:n,__namedExportsOrder:h,default:R},Symbol.toStringTag,{value:"Module"}));export{j as A};

import{c as l,m as u,s as i,t as g,n as v}from"./iframe-CQhh2Qu5.js";import{d as f}from"./Option-BhX2R0kg.js";import{P as A}from"./FLVHQV4A-C8oehw7Q.js";import{_}from"./5WXHJDCZ-DghNgBBa.js";import{L as d}from"./Utils-CX15CBuI.js";var S={};_(S,{Alert:()=>b,Root:()=>p});function p(r){return l(A,u({as:"div",role:"alert"},r))}var b=p,x=g("<h5>"),P=g("<div>");function T(r){const e=f(r,"default");return`relative w-full rounded-lg border p-4\r
        [&>svg+div]:translate-y-[-3px]\r
        [&>svg]:absolute [&>svg]:left-4\r
        [&>svg]:top-4 [&>svg]:text-foreground\r
        [&>svg~*]:pl-7 `+(e==="destructive"?"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive":e==="success"?"border-success-foreground/50 text-success-foreground dark:border-success-foreground [&>svg]:text-success-foreground bg-success/30":"bg-background text-foreground")}function m(r){const[e,t]=i(r,["variant","class"]);return l(p,u({get class(){return d([T(e.variant),e.class])}},t,{"bool:n$":!1}))}function y(r){const[e,t]=i(r,["class"]);return(()=>{var s=x();return v(s,u({get class(){return d(["mb-1 font-medium leading-none tracking-tight",e.class])}},t),!1,!1),s})()}function D(r){const[e,t]=i(r,["class"]);return(()=>{var s=P();return v(s,u({get class(){return d(["text-sm [&_p]:leading-relaxed",e.class])}},t),!1,!1),s})()}const R={args:{},argTypes:{variant:{control:{type:"radio"},description:"Style variant of the alert.",options:["success","destructive","default"],table:{defaultValue:{summary:"Alert.Variant.Default"},type:{summary:"[<StringEnum>]"}}}},render:r=>l(m,u(r,{"bool:n$":!1,get children(){return[l(y,{children:"Title"}),l(D,{children:"Alert description"})]}})),component:m},a={args:{variant:"default"}},o={args:{variant:"default"}},n={args:{variant:"destructive"}},c={args:{variant:"success"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive"
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success"
  }
}`,...c.parameters?.docs?.source}}};const O=["Primary","Default","Destructive","Success"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Destructive:n,Primary:a,Success:c,__namedExportsOrder:O,default:R},Symbol.toStringTag,{value:"Module"}));export{k as A};

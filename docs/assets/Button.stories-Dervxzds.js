import{B as a}from"./Button-CG4TBRte.js";import{c as o,m as s}from"./iframe-Scq7yoar.js";const n={args:{disabled:!1},argTypes:{disabled:{control:{type:"boolean"},table:{type:{summary:"bool"}}},size:{control:{type:"radio"},description:"Predefined size styles of the button.",options:["small","default","icon","large"],table:{defaultValue:{summary:"default"},type:{summary:"[<StringEnum>]"}}},variant:{control:{type:"radio"},description:"Sets the style of the button.",options:["outline","ghost","link","destructive","secondary","default"],table:{defaultValue:{summary:"default"},type:{summary:"[<StringEnum>]"}}}},render:r=>o(a,s(r,{"bool:n$":!1,children:"Button"})),component:a},e={args:{variant:"default",size:"default"}},t={args:{variant:"destructive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "default"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive"
  }
}`,...t.parameters?.docs?.source}}};const l=["Default","Destructive"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Destructive:t,__namedExportsOrder:l,default:n},Symbol.toStringTag,{value:"Module"}));export{d as B,e as D};

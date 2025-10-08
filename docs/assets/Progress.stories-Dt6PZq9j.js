import{c as t,m as l,t as m,i as s}from"./iframe-DHSEN8D7.js";import{P as n,a as u,b as p}from"./Progress-CM-Itb8Y.js";var c=m('<div class="flex justify-between">');const i={args:{maxValue:10,minValue:0,value:3},argTypes:{variant:{control:{type:"select"},options:["primary","neutral","warning","error","success","default"],table:{type:{summary:"[<StringEnum>]"}}},getValueLabel:{control:{type:!1},table:{type:{summary:"function"}}},indeterminate:{control:{type:"boolean"},table:{type:{summary:"bool"}}},maxValue:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},minValue:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},value:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}}},render:o=>t(n,l({class:"w-[300px] space-y-1",getValueLabel:e=>`${e.value} of ${e.max} tasks completed.`},o,{"bool:n$":!1,get children(){var e=c();return s(e,t(u,{children:"Processing..."}),null),s(e,t(p,{}),null),e}})),component:n},a={args:{value:4}},r={args:{value:3,indeterminate:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 4
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    indeterminate: true
  }
}`,...r.parameters?.docs?.source}}};const y=["Default","Indeterminate"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Indeterminate:r,__namedExportsOrder:y,default:i},Symbol.toStringTag,{value:"Module"}));export{a as D,g as P};

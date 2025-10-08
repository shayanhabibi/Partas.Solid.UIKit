import{A as t}from"./AvatarStack-B3au3mLt.js";import{c as n,m as i}from"./iframe-DHSEN8D7.js";const m={args:{},argTypes:{animate:{control:{type:"boolean"},description:"Whether to animate the avatars on hover.",table:{defaultValue:{summary:"false"},type:{summary:"bool"}}},items:{control:{type:"object"},description:`The array of items which are able to interface with IAvatarStackItem,
 whereby they provide members with access to an initials member and
 a src member.`,table:{type:{summary:`Array of GenericParam
  ("T", false,
   [CoercesTo
      (DeclaredType
         ({ FullName = "Partas.Solid.UI.IAvatarStackItem"
            Path =
             SourcePath
               "C:/Users/shaya/RiderProjects/Partas.Solid.UIKit/Partas.Solid.UI/Kit/AvatarStack.fs" },
          []))])`}}},size:{control:{type:"number",max:2147483647,min:-2147483648,step:1},description:"The size of the avatars.",table:{defaultValue:{summary:"40"},type:{summary:"int32"}}}},render:r=>{const a=(s,o)=>({avatar:o,initials:s});return n(t,i({get items(){return[a("SH","https://github.com/shayanhabibi.png"),a("SH","https://github.com/shayanhabibi.png"),a("SH","https://github.com/shayanhabibi.png"),a("SH","https://github.com/shayanhabibi.png")]}},r,{"bool:n$":!1}))},component:t},e={args:{animate:!0,size:32}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    animate: true,
    size: 32
  }
}`,...e.parameters?.docs?.source}}};const c=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:c,default:m},Symbol.toStringTag,{value:"Module"}));export{e as D,h as S};

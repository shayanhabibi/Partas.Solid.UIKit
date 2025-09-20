import{m as l,s as A,b as z,t as P,p as w,i as b,c as s,l as T,F as k,w as x,v as c}from"./iframe-BM9GGKTp.js";import{L as g}from"./Utils-D0o1erub.js";import{A as I,a as _,b as C}from"./Avatar-DSuHhLD7.js";import"./preload-helper-PPVm8Dsz.js";import"./FLVHQV4A-_6vtjyov.js";import"./5WXHJDCZ-DghNgBBa.js";var y=P("<div>");function f(r){r=l({animate:!1,size:40,items:[]},r);const[e,n]=A(r,["items","animate","class","size"]),o=z(()=>e.items);return(()=>{var m=y();return w(m,l({get class(){return g(["-space-x-1 flex items-center",e.animate&&"hover:space-x-0 [&>*]:transition-all",e.class])}},n),!1,!0),b(m,s(k,{get each(){return o()},children:(h,S)=>(()=>{var t=y();return b(t,s(I,{get style(){return{width:e.size,height:e.size}},get children(){return[s(_,{get src(){return h.avatar}}),s(C,{get children(){return h.initials}})]}})),T(a=>{var d=g(["shrink-0 overflow-hidden rounded-full",'[&_[data-slot="avatar"]]:size-full',e.class]),u=e.size,p=e.size,v=S()?`radial-gradient(circle ${e.size/2}px at -${e.size/4+e.size/10}px 50%, transparent 99%, white 100%)`:"";return d!==a.e&&x(t,a.e=d),u!==a.t&&c(t,"width",a.t=u),p!==a.a&&c(t,"height",a.a=p),v!==a.o&&c(t,"mask-image",a.o=v),a},{e:void 0,t:void 0,a:void 0,o:void 0}),t})()})),m})()}const E={args:{},argTypes:{animate:{control:{type:"boolean"},description:"Whether to animate the avatars on hover.",table:{defaultValue:{summary:"false"},type:{summary:"bool"}}},items:{control:{type:"object"},description:`The array of items which are able to interface with IAvatarStackItem,
 whereby they provide members with access to an initials member and
 a src member.`,table:{type:{summary:`Array of GenericParam
  ("T", false,
   [CoercesTo
      (DeclaredType
         ({ FullName = "Partas.Solid.UIKit.IAvatarStackItem"
            Path =
             SourcePath
               "C:/Users/shaya/RiderProjects/Partas.Solid.UIKit/Partas.Solid.UI/Kit/AvatarStack.fs" },
          []))])`}}},size:{control:{type:"number",max:2147483647,min:-2147483648,step:1},description:"The size of the avatars.",table:{defaultValue:{summary:"40"},type:{summary:"int32"}}}},render:r=>{const e=(n,o)=>({avatar:o,initials:n});return s(f,l({get items(){return[e("SH","https://github.com/shayanhabibi.png"),e("SH","https://github.com/shayanhabibi.png"),e("SH","https://github.com/shayanhabibi.png"),e("SH","https://github.com/shayanhabibi.png")]}},r,{"bool:n$":!1}))},component:f},i={args:{animate:!0,size:40}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    animate: true,
    size: 40
  }
}`,...i.parameters?.docs?.source}}};const K=["Animated"];export{i as Animated,K as __namedExportsOrder,E as default};

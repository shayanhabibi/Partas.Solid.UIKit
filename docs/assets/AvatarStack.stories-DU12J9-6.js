import{m as c,s as z,b as A,t as P,q as T,i as v,c as s,l as _,F as w,w as k,v as m}from"./iframe-Ss2HFUgg.js";import{L as g}from"./Utils-Bv7TLaDt.js";import{A as x,a as I,b as D}from"./Avatar-DFB-1Q0d.js";var f=P("<div>");function y(r){r=c({animate:!1,size:40,items:[]},r);const[e,n]=z(r,["items","animate","class","size"]),o=A(()=>e.items);return(()=>{var l=f();return T(l,c({get class(){return g(["-space-x-1 flex items-center",e.animate&&"hover:space-x-0 [&>*]:transition-all",e.class])}},n),!1,!0),v(l,s(w,{get each(){return o()},children:(h,S)=>(()=>{var t=f();return v(t,s(x,{get style(){return{width:e.size,height:e.size}},get children(){return[s(I,{get src(){return h.avatar}}),s(D,{get children(){return h.initials}})]}})),_(a=>{var u=g(["shrink-0 overflow-hidden rounded-full",'[&_[data-slot="avatar"]]:size-full',e.class]),d=e.size,p=e.size,b=S()?`radial-gradient(circle ${e.size/2}px at -${e.size/4+e.size/10}px 50%, transparent 99%, white 100%)`:"";return u!==a.e&&k(t,a.e=u),d!==a.t&&m(t,"width",a.t=d),p!==a.a&&m(t,"height",a.a=p),b!==a.o&&m(t,"mask-image",a.o=b),a},{e:void 0,t:void 0,a:void 0,o:void 0}),t})()})),l})()}const C={args:{},argTypes:{animate:{control:{type:"boolean"},description:"Whether to animate the avatars on hover.",table:{defaultValue:{summary:"false"},type:{summary:"bool"}}},items:{control:{type:"object"},description:`The array of items which are able to interface with IAvatarStackItem,
 whereby they provide members with access to an initials member and
 a src member.`,table:{type:{summary:`Array of GenericParam
  ("T", false,
   [CoercesTo
      (DeclaredType
         ({ FullName = "Partas.Solid.UI.IAvatarStackItem"
            Path =
             SourcePath
               "C:/Users/shaya/RiderProjects/Partas.Solid.UIKit/Partas.Solid.UI/Kit/AvatarStack.fs" },
          []))])`}}},size:{control:{type:"number",max:2147483647,min:-2147483648,step:1},description:"The size of the avatars.",table:{defaultValue:{summary:"40"},type:{summary:"int32"}}}},render:r=>{const e=(n,o)=>({avatar:o,initials:n});return s(y,c({get items(){return[e("SH","https://github.com/shayanhabibi.png"),e("SH","https://github.com/shayanhabibi.png"),e("SH","https://github.com/shayanhabibi.png"),e("SH","https://github.com/shayanhabibi.png")]}},r,{"bool:n$":!1}))},component:y},i={args:{animate:!0,size:32}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    animate: true,
    size: 32
  }
}`,...i.parameters?.docs?.source}}};const H=["Default"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:H,default:C},Symbol.toStringTag,{value:"Module"}));export{i as D,F as S};

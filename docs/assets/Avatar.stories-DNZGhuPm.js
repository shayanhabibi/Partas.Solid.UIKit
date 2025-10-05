import{A as n,a as o,b as s}from"./Avatar-My-GAJZF.js";import{c as a,m as c}from"./iframe-mHl6JQ-c.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,g={args:{onLoadingStatusChange:l()},argTypes:{fallbackDelay:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},onLoadingStatusChange:{control:{type:!1},table:{type:{summary:"function"}}}},render:r=>a(n,c(r,{"bool:n$":!1,get children(){return[a(o,{}),a(s,{children:"SH"})]}})),component:n},e={args:{onLoadingStatusChange:(()=>{const r=l();return m=>{r(m)}})()}},t={render:r=>a(n,c(r,{"bool:n$":!1,get children(){return[a(o,{src:"https://github.com/shayanhabibi.png"}),a(s,{children:"SH"})]}}))};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    onLoadingStatusChange: (() => {
      const clo = fn();
      return arg => {
        clo(arg);
      };
    })()
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => <Avatar {...PARTAS_RENDER_BUILDER} bool:n$={false}>\r
            <AvatarImage src="https://github.com/shayanhabibi.png" />\r
            <AvatarFallback>\r
                SH\r
            </AvatarFallback>\r
        </Avatar>
}`,...t.parameters?.docs?.source}}};const p=["Default","Image"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Image:t,__namedExportsOrder:p,default:g},Symbol.toStringTag,{value:"Module"}));export{d as A,e as D,t as I};

import{c as a,m as l,t as c,i as t}from"./iframe-Clet01EE.js";import{B as i}from"./Button-Cjsk4tww.js";import{L as s}from"./Label-DVsRgSdG.js";var d=c("<div>");const m={args:{},argTypes:{},render:n=>[a(i,{variant:"secondary",size:"icon",disabled:!0,children:"I"}),a(s,l(n,{"bool:n$":!1,children:"A Label using the Label Component"}))],component:s},e={args:{}},r={render:n=>(()=>{var o=d();return t(o,a(i,{variant:"secondary",size:"icon",disabled:!0,class:"peer",children:"I"}),null),t(o,a(s,l(n,{"bool:n$":!1,children:"A Label using the Label Component"})),null),o})()};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => <div>\r
            <Button variant="secondary" size="icon" disabled={true} class="peer">\r
                I\r
            </Button>\r
            <Label {...PARTAS_RENDER_BUILDER} bool:n$={false}>\r
                A Label using the Label Component\r
            </Label>\r
        </div>
}`,...r.parameters?.docs?.source}}};const p=["Default","Disabled"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Disabled:r,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{g as L};

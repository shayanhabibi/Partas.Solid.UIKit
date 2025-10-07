import{t as c,i as m,c as s,m as p,F as d}from"./iframe-BHVPMPJn.js";import{S as n}from"./Spinner-HOZcp6o5.js";var u=c('<div class="grid grid-cols-4 gap-4">');const g={args:{color:"var(--color-primary)",size:24},argTypes:{absoluteStrokeWidth:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},color:{control:{type:"color"},table:{type:{summary:"string"}}},size:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},strokeWidth:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},variant:{control:{type:"inline-radio"},options:["circle","pinWheel","circleFilled","ellipsis","ring","bars","infinite","default"],table:{type:{summary:"[<StringEnum>]"}}}},component:n},r={args:{}},e={args:{color:"var(--color-blue-500)"}},a={args:{strokeWidth:3}},o={render:i=>(()=>{var t=u();return m(t,s(d,{each:["default","bars","circle","circleFilled","ellipsis","infinite","pinWheel","ring"],children:(l,y)=>s(n,p({variant:l},i,{"bool:n$":!1}))})),t})()};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "var(--color-blue-500)"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    strokeWidth: 3
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => <div class="grid grid-cols-4 gap-4">\r
            <For each={["default", "bars", "circle", "circleFilled", "ellipsis", "infinite", "pinWheel", "ring"]}>\r
                {(item, _arg_1) => <Spinner_1 variant={item} {...PARTAS_RENDER_BUILDER} bool:n$={false} />}\r
            </For>\r
        </div>
}`,...o.parameters?.docs?.source}}};const b=["Default","CustomColor","StrokeWidth","Variants"],f=Object.freeze(Object.defineProperty({__proto__:null,CustomColor:e,Default:r,StrokeWidth:a,Variants:o,__namedExportsOrder:b,default:g},Symbol.toStringTag,{value:"Module"}));export{r as D,f as S};

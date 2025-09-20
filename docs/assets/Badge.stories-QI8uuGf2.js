import{c as n,m as i,t as c,i as d,F as m}from"./iframe-Scq7yoar.js";import{B as t}from"./Badge-B19SsEEW.js";import"./preload-helper-D9Z9MdNV.js";import"./Option-CYzlgCrd.js";import"./Util-1esvhydp.js";import"./Utils-C86-96S-.js";import"./Icon-D-0SR8k2.js";var p=c('<div class="flex flex-col gap-4">'),g=c('<div class="flex gap-2">');const h={args:{variant:"default"},argTypes:{round:{control:{type:"boolean"},table:{defaultValue:{summary:"false"},type:{summary:"bool"}}},variant:{control:{type:"select"},description:"Style the badge.",options:["secondary","outline","success","warning","error","default"],table:{defaultValue:{summary:"default"},type:{summary:"[<StringEnum>]"}}}},render:l=>n(t,i(l,{"bool:n$":!1,children:"Badge"})),component:t},r={args:{variant:"default"}},e={args:{round:!0}},a={render:l=>(()=>{var u=p();return d(u,n(m,{each:["default","secondary","outline","warning","error"],children:(o,f)=>(()=>{var s=g();return d(s,n(t,{variant:o,children:o}),null),d(s,n(t,{variant:o,round:!0,children:"Rounded"}),null),s})()})),u})()};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    round: true
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => <div class="flex flex-col gap-4">\r
            <For each={["default", "secondary", "outline", "warning", "error"]}>\r
                {(item, _arg_1) => <div class="flex gap-2">\r
                    <Badge variant={item}>\r
                        {item}\r
                    </Badge>\r
                    <Badge variant={item} round={true}>\r
                        Rounded\r
                    </Badge>\r
                </div>}\r
            </For>\r
        </div>
}`,...a.parameters?.docs?.source}}};const S=["Default","Rounded","Variants"];export{r as Default,e as Rounded,a as Variants,S as __namedExportsOrder,h as default};

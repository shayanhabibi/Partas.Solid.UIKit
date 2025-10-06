import{c as n,m as i,t as c,i as d,F as m}from"./iframe-Ss2HFUgg.js";import{B as t}from"./Badge-C0rInFJe.js";var p=c('<div class="flex flex-col gap-4">'),g=c('<div class="flex gap-2">');const f={args:{variant:"default"},argTypes:{round:{control:{type:"boolean"},table:{defaultValue:{summary:"false"},type:{summary:"bool"}}},variant:{control:{type:"select"},description:"Style the badge.",options:["default","secondary","outline","success","warning","error"],table:{defaultValue:{summary:"default"},type:{summary:"[<StringEnum>]"}}}},render:l=>n(t,i(l,{"bool:n$":!1,children:"Badge"})),component:t},e={args:{variant:"default"}},r={args:{round:!0}},a={render:l=>(()=>{var u=p();return d(u,n(m,{each:["default","secondary","outline","warning","error"],children:(o,_)=>(()=>{var s=g();return d(s,n(t,{variant:o,children:o}),null),d(s,n(t,{variant:o,round:!0,children:"Rounded"}),null),s})()})),u})()};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    round: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const v=["Default","Rounded","Variants"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Rounded:r,Variants:a,__namedExportsOrder:v,default:f},Symbol.toStringTag,{value:"Module"}));export{B,e as D};

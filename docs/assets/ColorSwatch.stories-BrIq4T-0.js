import{c as n,m as i,t as p,i as m}from"./iframe-CQhh2Qu5.js";import{C as o}from"./ColorSwatch-BKC1WkQP.js";import"./preload-helper-PPVm8Dsz.js";import"./Option-BhX2R0kg.js";import"./Util-E2-mHI_n.js";import"./LR7LBJN3-BEwATGKl.js";import"./index-DW9tDSAV.js";import"./index-sxjzjzXW.js";import"./FLVHQV4A-C8oehw7Q.js";import"./combineProps-BDGDEaHG.js";import"./Utils-CX15CBuI.js";var c=p("<div>The color<!>Text is here to save the day");const P={args:{parseCssVar:"--primary",size:"default"},argTypes:{value:{control:{type:"object"},table:{type:{summary:"Color",detail:"C:/Users/shaya/RiderProjects/Partas.Solid.UIKit/Partas.Solid.UI/fable_modules/Partas.Solid.Kobalte.0.4.1/Program.fs"}}},colorName:{control:{type:"text"},table:{type:{summary:"string"}}},translations:{control:{type:"object"},table:{type:{summary:"any"}}},animatePing:{control:{type:"boolean"},description:"Creates a shadow copy of the swatch which pings behind the actual swatch.\n Primarily to be used in combination with the `ColorSwatch.Size.Diamond` size.",table:{defaultValue:{summary:"false"},type:{summary:"bool"}}},parseCssVar:{control:{type:"text"},description:"The css variable value is retrieved from the DOM and parsed as a string\n before being handed to the value prop. `parseValue` and `value`\n take precedence.",table:{type:{summary:"string"}}},parseValue:{control:{type:"color"},description:`The string value is parsed and then handed to the value prop.
 Value prop takes precedence though.`,table:{type:{summary:"string"}}},size:{control:{type:"radio"},description:"Size variant of the component.",options:["diamond","default","large","small"],table:{defaultValue:{summary:"ColorSwatch.Size.Default"},type:{summary:"[<StringEnum>]"}}}},render:r=>n(o,i(r,{"bool:n$":!1})),component:o},e={args:{}},a={args:{size:"small"},render:r=>(()=>{var t=c(),l=t.firstChild,s=l.nextSibling;return s.nextSibling,m(t,n(o,i(r,{"bool:n$":!1})),s),t})()};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small"
  },
  render: PARTAS_RENDER_BUILDER => <div>\r
            The color\r
            <ColorSwatch {...PARTAS_RENDER_BUILDER} bool:n$={false} />\r
            Text is here to save the day\r
        </div>
}`,...a.parameters?.docs?.source}}};const w=["Default","WithLabel"];export{e as Default,a as WithLabel,w as __namedExportsOrder,P as default};

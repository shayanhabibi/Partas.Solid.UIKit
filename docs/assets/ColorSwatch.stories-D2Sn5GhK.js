import{c as n,m as l,t as c,i as d}from"./iframe-BHVPMPJn.js";import{C as o}from"./ColorSwatch-cnD84e1I.js";var p=c("<div>The color<!>Text is here to save the day");const m={args:{parseCssVar:"--primary",size:"default"},argTypes:{animatePing:{control:{type:"boolean"},description:"Creates a shadow copy of the swatch which pings behind the actual swatch.\n Primarily to be used in combination with the `ColorSwatch.Size.Diamond` size.",table:{defaultValue:{summary:"false"},type:{summary:"bool"}}},parseCssVar:{control:{type:"text"},description:"The css variable value is retrieved from the DOM and parsed as a string\n before being handed to the value prop. `parseValue` and `value`\n take precedence.",table:{type:{summary:"string"}}},parseValue:{control:{type:"color"},description:`The string value is parsed and then handed to the value prop.
 Value prop takes precedence though.`,table:{type:{summary:"string"}}},size:{control:{type:"radio"},description:"Size variant of the component.",options:["diamond","default","large","small"],table:{defaultValue:{summary:"ColorSwatch.Size.Default"},type:{summary:"[<StringEnum>]"}}},colorName:{control:{type:"text"},description:`A localized accessible name for the color.
 By default, a description is generated from the color value,
 but this can be overridden if you have a more specific color
 name (e.g. Pantone colors).`,table:{type:{summary:"string"}}},translations:{control:{type:"object"},description:"The localized strings of the component.",table:{type:{summary:"any"}}},value:{control:{type:"object"},description:"The color value to display in the swatch.",table:{type:{summary:"Color",detail:"C:/Users/shaya/RiderProjects/Partas.Solid.UIKit/Partas.Solid.UI/fable_modules/Partas.Solid.Kobalte.0.4.7/Program.fs"}}}},render:t=>n(o,l(t,{"bool:n$":!1})),component:o},e={args:{}},a={args:{size:"small"},render:t=>(()=>{var r=p(),i=r.firstChild,s=i.nextSibling;return s.nextSibling,d(r,n(o,l(t,{"bool:n$":!1})),s),r})()};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const u=["Default","WithLabel"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,WithLabel:a,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{b as C,e as D};

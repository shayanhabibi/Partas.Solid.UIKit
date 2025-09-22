import{c as e,m as c,t as p,i as o,F as u}from"./iframe-Clet01EE.js";import{B as s}from"./Button-Cjsk4tww.js";import{L as m}from"./Label-DVsRgSdG.js";import{S as f}from"./Separator-B-sBsgKT.js";import{I as y}from"./Icon-Bfk8cl3A.js";var g=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]],v=t=>e(y,c(t,{iconNode:g,name:"aperture"})),_=v,h=p('<div class="flex justify-between gap-4">'),b=p('<div class="flex flex-col gap-2 items-center">');const S={args:{disabled:!1},argTypes:{disabled:{control:{type:"boolean"},table:{type:{summary:"bool"}}},size:{control:{type:"radio"},description:"Predefined size styles of the button.",options:["small","default","icon","large"],table:{defaultValue:{summary:"default"},type:{summary:"[<StringEnum>]"}}},variant:{control:{type:"radio"},description:"Sets the style of the button.",options:["outline","ghost","link","destructive","secondary","default"],table:{defaultValue:{summary:"default"},type:{summary:"[<StringEnum>]"}}}},render:t=>e(s,c(t,{"bool:n$":!1,children:"Button"})),component:s},r={args:{variant:"default",size:"default"}},a={render:t=>(()=>{var i=h();return o(i,e(u,{each:["icon","small","default","large"],children:(l,x)=>(()=>{var n=b();return o(n,e(m,{children:l}),null),o(n,e(f,{}),null),o(n,e(u,{each:["default","secondary","outline","destructive","ghost","link"],children:(d,B)=>e(s,{size:l,variant:d,get children(){return l==="icon"?e(_,{}):d}})}),null),n})()})),i})()};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "default"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => <div class="flex justify-between gap-4">\r
            <For each={["icon", "small", "default", "large"]}>\r
                {(size, _arg_1) => <div class="flex flex-col gap-2 items-center">\r
                    <Label>\r
                        {size}\r
                    </Label>\r
                    <Separator />\r
                    <For each={["default", "secondary", "outline", "destructive", "ghost", "link"]}>\r
                        {(variant, _arg_2) => <Button size={size} variant={variant}>\r
                            {size === "icon" ? <Aperture /> : variant}\r
                        </Button>}\r
                    </For>\r
                </div>}\r
            </For>\r
        </div>
}`,...a.parameters?.docs?.source}}};const k=["Default","Variants"],F=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Variants:a,__namedExportsOrder:k,default:S},Symbol.toStringTag,{value:"Module"}));export{F as B,r as D};

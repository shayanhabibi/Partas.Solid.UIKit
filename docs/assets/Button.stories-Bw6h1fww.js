import{c as e,m as o,t as b,i as a,F as g}from"./iframe-BLvaHOrW.js";import{B as l}from"./Button-CjiiobU-.js";import{x as p}from"./x-BUrLKQu7.js";import{K as m}from"./Kbd-B0eJO_gC.js";import{L as h}from"./Label-CT7n78zp.js";import{S as y}from"./Separator-DfnYslN2.js";import{I as _}from"./Icon-BmtgjGtw.js";var S=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]],B=n=>e(_,o(n,{iconNode:S,name:"aperture"})),D=B,R=[["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z",key:"1l7kg2"}],["path",{d:"M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z",key:"1mmzpi"}]],k=n=>e(_,o(n,{iconNode:R,name:"lamp"})),x=k,v=b('<div class="flex flex-col space-y-2 place-items-center">'),E=b('<div class="flex justify-between gap-4">'),$=b('<div class="flex flex-col gap-2 items-center">');const A={args:{disabled:!1},argTypes:{size:{control:{type:"select"},description:"Predefined size styles of the button.",options:["small","default","iconSmall","iconLarge","icon","large"],table:{defaultValue:{summary:"default"},type:{summary:"[<StringEnum>]"}}},variant:{control:{type:"radio"},description:"Sets the style of the button.",options:["outline","ghost","link","destructive","secondary","default"],table:{defaultValue:{summary:"default"},type:{summary:"[<StringEnum>]"}}},disabled:{control:{type:"boolean"},description:"Whether the button is disabled.",table:{type:{summary:"bool"}}}},render:n=>e(l,o(n,{"bool:n$":!1,children:"Button"})),component:l},s={args:{variant:"default",size:"default"}},c={render:n=>{const t=n;return(()=>{var r=v();return a(r,e(l,o(t,{"bool:n$":!1,get children(){return[e(p,{}),"Discard"]}})),null),a(r,e(l,o(t,{"bool:n$":!1,get children(){return e(p,{})}})),null),r})()}},d={render:n=>{const t=n;return(()=>{var r=v();return a(r,e(l,o(t,{"bool:n$":!1,get children(){return[e(m,{children:"Ctrl D"}),"Discard"]}})),null),a(r,e(l,o(t,{"bool:n$":!1,get children(){return["Save",e(m,{class:"bg-background/20 border-none text-background",children:"S"})]}})),null),a(r,e(l,o({variant:"secondary"},t,{"bool:n$":!1,get children(){return[e(m,{children:"Ctrl D"}),"Discard"]}})),null),a(r,e(l,o({variant:"destructive"},t,{"bool:n$":!1,get children(){return["Save",e(m,{class:"bg-background/20 border-none text-background",children:"S"})]}})),null),r})()}},i={render:n=>(()=>{var t=E();return a(t,e(g,{each:["icon","iconSmall","iconLarge","small","default","large"],children:(r,I)=>(()=>{var u=$();return a(u,e(h,{children:r}),null),a(u,e(y,{}),null),a(u,e(g,{each:["default","secondary","outline","destructive","ghost","link"],children:(f,K)=>e(l,{size:r,variant:f,get children(){return r==="icon"?e(D,{}):r==="iconSmall"?e(p,{}):r==="iconLarge"?e(x,{}):f}})}),null),u})()})),t})()};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "default"
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => {
    const btn_5 = PARTAS_RENDER_BUILDER;
    return <div class="flex flex-col space-y-2 place-items-center">\r
                <Button {...btn_5} bool:n$={false}>\r
                    <X />\r
                    Discard\r
                </Button>\r
                <Button {...btn_5} bool:n$={false}>\r
                    <X />\r
                </Button>\r
            </div>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_2 => {
    const btn_6 = PARTAS_RENDER_BUILDER_2;
    return <div class="flex flex-col space-y-2 place-items-center">\r
                <Button {...btn_6} bool:n$={false}>\r
                    <Kbd>\r
                        Ctrl\r
                        D\r
                    </Kbd>\r
                    Discard\r
                </Button>\r
                <Button {...btn_6} bool:n$={false}>\r
                    Save\r
                    <Kbd class="bg-background/20 border-none text-background">\r
                        S\r
                    </Kbd>\r
                </Button>\r
                <Button variant="secondary" {...btn_6} bool:n$={false}>\r
                    <Kbd>\r
                        Ctrl\r
                        D\r
                    </Kbd>\r
                    Discard\r
                </Button>\r
                <Button variant="destructive" {...btn_6} bool:n$={false}>\r
                    Save\r
                    <Kbd class="bg-background/20 border-none text-background">\r
                        S\r
                    </Kbd>\r
                </Button>\r
            </div>;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_3 => <div class="flex justify-between gap-4">\r
            <For each={["icon", "iconSmall", "iconLarge", "small", "default", "large"]}>\r
                {(size, _arg_1) => <div class="flex flex-col gap-2 items-center">\r
                    <Label>\r
                        {size}\r
                    </Label>\r
                    <Separator />\r
                    <For each={["default", "secondary", "outline", "destructive", "ghost", "link"]}>\r
                        {(variant, _arg_2) => <Button size={size} variant={variant}>\r
                            {size === "icon" ? <Aperture /> : size === "iconSmall" ? <X /> : size === "iconLarge" ? <Lamp /> : variant}\r
                        </Button>}\r
                    </For>\r
                </div>}\r
            </For>\r
        </div>
}`,...i.parameters?.docs?.source}}};const L=["Default","IconOnlyAndWithIcon","WithKbd","Variants"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:s,IconOnlyAndWithIcon:c,Variants:i,WithKbd:d,__namedExportsOrder:L,default:A},Symbol.toStringTag,{value:"Module"}));export{w as B,s as D};

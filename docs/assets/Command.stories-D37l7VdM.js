import{c as e,m as t,s as f,F as b,t as g,b as o,d as E,i as I}from"./iframe-CQhh2Qu5.js";import{b as y,a as C,c as _,d as S,e as h,g as s,C as x,h as N}from"./Command-QvSLc7O3.js";import{I as m}from"./Icon-BiJbdnQ6.js";import{B as R}from"./Button-BlX5k0od.js";var M=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],D=r=>e(m,t(r,{iconNode:M,name:"calendar"})),L=D,O=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],P=r=>e(m,t(r,{iconNode:O,name:"smile"})),T=P,A=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],$=r=>e(m,t(r,{iconNode:A,name:"rocket"})),B=$,z=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],j=r=>e(m,t(r,{iconNode:z,name:"user"})),G=j,U=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],w=r=>e(m,t(r,{iconNode:U,name:"mail"})),F=w,V=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],q=r=>e(m,t(r,{iconNode:V,name:"settings"})),H=q,K=g("<span>Group"),v=g("<span>"),Y=g("<span>Suggestions"),J=g("<span>Settings");const{fn:Q}=__STORYBOOK_MODULE_TEST__,W={args:{onValueChange:Q()},argTypes:{label:{control:{type:"text"},table:{type:{summary:"string"}}},shouldFilter:{control:{type:"boolean"},table:{type:{summary:"bool"}}},defaultValue:{control:{type:"text"},table:{type:{summary:"string"}}},value:{control:{type:"text"},table:{type:{summary:"string"}}},onValueChange:{control:{type:!1},table:{type:{summary:"function"}}},loop:{control:{type:"boolean"},table:{type:{summary:"bool"}}},disablePointerSelection:{control:{type:"boolean"},table:{type:{summary:"bool"}}},filter:{control:{type:"object"},table:{type:{summary:"Tuple ( String, String, Option (Array (String, MutableArray), false) )"}}}},render:r=>{const n=f(r,["children"]);return e(y,t(r,{"bool:n$":!1,get children(){return[e(C,{}),e(_,{get children(){return[e(S,{}),e(h,{get heading(){return K()},get children(){return e(b,{get each(){return n[0].children},children:(a,l)=>e(s,{children:a})})}})]}})]}}))},component:y},d={args:{label:"Label",shouldFilter:!0,loop:!1,disablePointerSelection:!1}},i={render:r=>{const n=(l,c)=>e(s,{get children(){return[e(c,{class:"mr-2 size-4"}),(()=>{var u=v();return I(u,l),u})()]}}),a=(l,c,u)=>e(s,{get children(){return[e(c,{class:"mr-2 size-4"}),(()=>{var k=v();return I(k,l),k})(),e(N,{children:u})]}});return e(y,{class:"rounded-lg border shadow-md",get children(){return[e(C,{placeholder:"Type a command or search..."}),e(_,{get children(){return[e(S,{children:"No results found"}),e(h,{get heading(){return Y()},get children(){return[o(()=>n("Calendar",L)),o(()=>n("Search Emoji",T)),o(()=>n("Launch",B))]}}),e(h,{get heading(){return J()},get children(){return[o(()=>a("Profile",G,"Ctrl P")),o(()=>a("Mail",F,"Ctrl B")),o(()=>a("Settings",H,"Ctrl S"))]}})]}})]}})}},p={render:r=>{const n=E(!1),a=n[1];return[e(R,{onClick:l=>{a(c=>!c)},children:"Click me!"}),e(x,{get open(){return n[0]()},onOpenChange:a,get children(){return[e(C,{placeholder:"Type a command or search..."}),e(_,{get children(){return[e(S,{children:"No results found"}),e(h,{heading:"Suggestions",get children(){return[e(s,{children:"Calendar"}),e(s,{children:"Search Emoji"}),e(s,{children:"Calculator"})]}})]}})]}})]}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    shouldFilter: true,
    loop: false,
    disablePointerSelection: false
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => {
    const makeItem = (value_2, _MyIcon) => <CommandItems>\r
                <_MyIcon class="mr-2 size-4" />\r
                <span>\r
                    {value_2}\r
                </span>\r
            </CommandItems>;
    const makeItemShortcut = (value_3, _IconValue, shortcut) => <CommandItems>\r
                <_IconValue class="mr-2 size-4" />\r
                <span>\r
                    {value_3}\r
                </span>\r
                <CommandShortcuts>\r
                    {shortcut}\r
                </CommandShortcuts>\r
            </CommandItems>;
    return <Command class="rounded-lg border shadow-md">\r
                <CommandInputs placeholder="Type a command or search..." />\r
                <CommandLists>\r
                    <CommandEmptys>\r
                        No results found\r
                    </CommandEmptys>\r
                    <CommandGroups heading={<span>\r
                            Suggestions\r
                        </span>}>\r
                        {makeItem("Calendar", Calendar)}\r
                        {makeItem("Search Emoji", Smile)}\r
                        {makeItem("Launch", Rocket)}\r
                    </CommandGroups>\r
                    <CommandGroups heading={<span>\r
                            Settings\r
                        </span>}>\r
                        {makeItemShortcut("Profile", User, "Ctrl P")}\r
                        {makeItemShortcut("Mail", Mail, "Ctrl B")}\r
                        {makeItemShortcut("Settings", Settings, "Ctrl S")}\r
                    </CommandGroups>\r
                </CommandLists>\r
            </Command>;
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER_2 => {
    const patternInput_1 = createSignal(false);
    const setOpen = patternInput_1[1];
    return <>\r
                <Button onClick={_arg_2 => {
        setOpen(value_5 => !value_5);
      }}>\r
                    Click me!\r
                </Button>\r
                <CommandDialog open={patternInput_1[0]()} onOpenChange={setOpen}>\r
                    <CommandInputs placeholder="Type a command or search..." />\r
                    <CommandLists>\r
                        <CommandEmptys>\r
                            No results found\r
                        </CommandEmptys>\r
                        <CommandGroups heading="Suggestions">\r
                            <CommandItems>\r
                                Calendar\r
                            </CommandItems>\r
                            <CommandItems>\r
                                Search Emoji\r
                            </CommandItems>\r
                            <CommandItems>\r
                                Calculator\r
                            </CommandItems>\r
                        </CommandGroups>\r
                    </CommandLists>\r
                </CommandDialog>\r
            </>;
  }
}`,...p.parameters?.docs?.source}}};const X=["Default","Example","DialogExample"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:d,DialogExample:p,Example:i,__namedExportsOrder:X,default:W},Symbol.toStringTag,{value:"Module"}));export{ae as C,p as D,i as E};

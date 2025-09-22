import{c as e,m as s,s as b,F as v,t as g,b as t,d as E,i as f}from"./iframe-rVoFtZu9.js";import{b as y,a as C,c as _,d as S,e as h,g as o,C as x,h as R}from"./Command-C7QfnMXi.js";import{c as D}from"./calendar-C_0gRfh5.js";import{I as u}from"./Icon-b_5I2J3_.js";import{B as N}from"./Button-Di0Pgs7I.js";var L=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],M=r=>e(u,s(r,{iconNode:L,name:"smile"})),O=M,P=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],T=r=>e(u,s(r,{iconNode:P,name:"rocket"})),A=T,B=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],$=r=>e(u,s(r,{iconNode:B,name:"user"})),z=$,j=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],G=r=>e(u,s(r,{iconNode:j,name:"mail"})),U=G,F=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],V=r=>e(u,s(r,{iconNode:F,name:"settings"})),w=V,q=g("<span>Group"),k=g("<span>"),H=g("<span>Suggestions"),K=g("<span>Settings");const{fn:Y}=__STORYBOOK_MODULE_TEST__,J={args:{onValueChange:Y()},argTypes:{label:{control:{type:"text"},table:{type:{summary:"string"}}},shouldFilter:{control:{type:"boolean"},table:{type:{summary:"bool"}}},defaultValue:{control:{type:"text"},table:{type:{summary:"string"}}},value:{control:{type:"text"},table:{type:{summary:"string"}}},onValueChange:{control:{type:!1},table:{type:{summary:"function"}}},loop:{control:{type:"boolean"},table:{type:{summary:"bool"}}},disablePointerSelection:{control:{type:"boolean"},table:{type:{summary:"bool"}}},filter:{control:{type:"object"},table:{type:{summary:"Tuple ( String, String, Option (Array (String, MutableArray), false) )"}}}},render:r=>{const n=b(r,["children"]);return e(y,s(r,{"bool:n$":!1,get children(){return[e(C,{}),e(_,{get children(){return[e(S,{}),e(h,{get heading(){return q()},get children(){return e(v,{get each(){return n[0].children},children:(a,m)=>e(o,{children:a})})}})]}})]}}))},component:y},c={args:{label:"Label",shouldFilter:!0,loop:!1,disablePointerSelection:!1}},d={render:r=>{const n=(m,l)=>e(o,{get children(){return[e(l,{class:"mr-2 size-4"}),(()=>{var p=k();return f(p,m),p})()]}}),a=(m,l,p)=>e(o,{get children(){return[e(l,{class:"mr-2 size-4"}),(()=>{var I=k();return f(I,m),I})(),e(R,{children:p})]}});return e(y,{class:"rounded-lg border shadow-md",get children(){return[e(C,{placeholder:"Type a command or search..."}),e(_,{get children(){return[e(S,{children:"No results found"}),e(h,{get heading(){return H()},get children(){return[t(()=>n("Calendar",D)),t(()=>n("Search Emoji",O)),t(()=>n("Launch",A))]}}),e(h,{get heading(){return K()},get children(){return[t(()=>a("Profile",z,"Ctrl P")),t(()=>a("Mail",U,"Ctrl B")),t(()=>a("Settings",w,"Ctrl S"))]}})]}})]}})}},i={render:r=>{const n=E(!1),a=n[1];return[e(N,{onClick:m=>{a(l=>!l)},children:"Click me!"}),e(x,{get open(){return n[0]()},onOpenChange:a,get children(){return[e(C,{placeholder:"Type a command or search..."}),e(_,{get children(){return[e(S,{children:"No results found"}),e(h,{heading:"Suggestions",get children(){return[e(o,{children:"Calendar"}),e(o,{children:"Search Emoji"}),e(o,{children:"Calculator"})]}})]}})]}})]}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    shouldFilter: true,
    loop: false,
    disablePointerSelection: false
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Q=["Default","Example","DialogExample"],ne=Object.freeze(Object.defineProperty({__proto__:null,Default:c,DialogExample:i,Example:d,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{ne as C,i as D,d as E};

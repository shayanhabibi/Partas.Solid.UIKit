import{c as e,m as p,s as k,d as t,t as g,a as E,F as v,i as I}from"./iframe-BLvaHOrW.js";import{b as h,a as C,c as y,d as _,e as i,g as o,C as R,h as x}from"./Command-BtjDjY8m.js";import{c as D}from"./calendar-Ct2uZJad.js";import{I as S}from"./Icon-BmtgjGtw.js";import{m as L,s as O}from"./settings-CurjhxxB.js";import{B as P}from"./Button-CjiiobU-.js";var T=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],M=r=>e(S,p(r,{iconNode:T,name:"smile"})),N=M,A=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],B=r=>e(S,p(r,{iconNode:A,name:"rocket"})),j=B,$=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],z=r=>e(S,p(r,{iconNode:$,name:"user"})),G=z,U=g("<span>Group"),b=g("<span>"),F=g("<span>Suggestions"),V=g("<span>Settings");const{fn:w}=__STORYBOOK_MODULE_TEST__,H={args:{onValueChange:w()},argTypes:{label:{control:{type:"text"},table:{type:{summary:"string"}}},shouldFilter:{control:{type:"boolean"},table:{type:{summary:"bool"}}},defaultValue:{control:{type:"text"},table:{type:{summary:"string"}}},value:{control:{type:"text"},table:{type:{summary:"string"}}},onValueChange:{control:{type:!1},table:{type:{summary:"function"}}},loop:{control:{type:"boolean"},table:{type:{summary:"bool"}}},disablePointerSelection:{control:{type:"boolean"},table:{type:{summary:"bool"}}},filter:{control:{type:"object"},table:{type:{summary:"Tuple ( String, String, Option (Array (String, MutableArray), false) )"}}}},render:r=>{const n=k(r,["children"]);return e(h,p(r,{"bool:n$":!1,get children(){return[e(C,{}),e(y,{get children(){return[e(_,{}),e(i,{get heading(){return U()},get children(){return e(v,{get each(){return n[0].children},children:(a,s)=>e(o,{children:a})})}})]}})]}}))},component:h},l={args:{label:"Label",shouldFilter:!0,loop:!1,disablePointerSelection:!1}},c={render:r=>{const n=(s,m)=>e(o,{get children(){return[e(m,{class:"mr-2 size-4"}),(()=>{var u=b();return I(u,s),u})()]}}),a=(s,m,u)=>e(o,{get children(){return[e(m,{class:"mr-2 size-4"}),(()=>{var f=b();return I(f,s),f})(),e(x,{children:u})]}});return e(h,{class:"rounded-lg border shadow-md",get children(){return[e(C,{placeholder:"Type a command or search..."}),e(y,{get children(){return[e(_,{children:"No results found"}),e(i,{get heading(){return F()},get children(){return[t(()=>n("Calendar",D)),t(()=>n("Search Emoji",N)),t(()=>n("Launch",j))]}}),e(i,{get heading(){return V()},get children(){return[t(()=>a("Profile",G,"Ctrl P")),t(()=>a("Mail",L,"Ctrl B")),t(()=>a("Settings",O,"Ctrl S"))]}})]}})]}})}},d={render:r=>{const n=E(!1),a=n[1];return[e(P,{onClick:s=>{a(m=>!m)},children:"Click me!"}),e(R,{get open(){return n[0]()},onOpenChange:a,get children(){return[e(C,{placeholder:"Type a command or search..."}),e(y,{get children(){return[e(_,{children:"No results found"}),e(i,{heading:"Suggestions",get children(){return[e(o,{children:"Calendar"}),e(o,{children:"Search Emoji"}),e(o,{children:"Calculator"})]}})]}})]}})]}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    shouldFilter: true,
    loop: false,
    disablePointerSelection: false
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const q=["Default","Example","DialogExample"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:l,DialogExample:d,Example:c,__namedExportsOrder:q,default:H},Symbol.toStringTag,{value:"Module"}));export{Z as C,d as D,c as E};

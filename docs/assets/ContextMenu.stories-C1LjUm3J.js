import{c as e,m as b,a as u,t as m}from"./iframe-BHVPMPJn.js";import{C as p,a as M,b as c,c as g,d as t,e as l,f as y,g as S,h as I,i as s,j as x,k as f,l as _,m as R,n as h}from"./ContextMenu-CYdXM-OF.js";var P=m("<span>Commit"),v=m("<span>Push"),k=m("<span>Update Project");const{fn:G}=__STORYBOOK_MODULE_TEST__,T={args:{onOpenChange:G()},argTypes:{arrowPadding:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},detachedPadding:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},fitViewport:{control:{type:"boolean"},table:{type:{summary:"bool"}}},flip:{control:{type:"boolean"},table:{type:{summary:"bool"}}},forceMount:{control:{type:"boolean"},table:{type:{summary:"bool"}}},gutter:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},hideWhenDetached:{control:{type:"boolean"},table:{type:{summary:"bool"}}},id:{control:{type:"text"},table:{type:{summary:"string"}}},modal:{control:{type:"boolean"},table:{type:{summary:"bool"}}},onOpenChange:{control:{type:!1},table:{type:{summary:"function"}}},overflowPadding:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},overlap:{control:{type:"boolean"},table:{type:{summary:"bool"}}},placement:{control:{type:"select"},options:["top left","top right","bottom","bottom left","bottom right","left","right","top"],table:{type:{summary:"[<StringEnum>]"}}},preventScroll:{control:{type:"boolean"},table:{type:{summary:"bool"}}},sameWidth:{control:{type:"boolean"},table:{type:{summary:"bool"}}},shift:{control:{type:"number",max:2147483647,min:-2147483648,step:1},table:{type:{summary:"int32"}}},slide:{control:{type:"boolean"},table:{type:{summary:"bool"}}}},render:a=>e(p,b(a,{"bool:n$":!1,get children(){return[e(M,{class:"flex h-[150px] w-[300px] items-center justify-center rounded-mdborder border-dashed text-sm",children:"Right Click Here"}),e(c,{get children(){return e(g,{get children(){return e(t,{children:"Item"})}})}})]}})),component:p},r={args:{}},o={render:a=>{const i=u(!0),d=u(!1),C=u("main");return e(p,b(a,{"bool:n$":!1,get children(){return[e(M,{class:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here."}),e(c,{get children(){return e(g,{class:"w-48",get children(){return[e(t,{disabled:!1,get children(){return[P(),e(l,{children:"Ctrl+K"})]}}),e(t,{disabled:!1,get children(){return[v(),e(l,{children:"Shift+Ctrl+K"})]}}),e(t,{disabled:!0,get children(){return[k(),e(l,{children:"Ctrl+T"})]}}),e(y,{overlap:!0,get children(){return[e(S,{children:"GitHub"}),e(c,{get children(){return e(I,{get children(){return[e(t,{children:"Create Pull Request..."}),e(t,{children:"View Pull Requests"}),e(t,{children:"Sync Fork"}),e(s,{}),e(t,{children:"Open on GitHub"})]}})}})]}}),e(s,{}),e(x,{get checked(){return i[0]()},onChange:n=>{i[1](n)},children:"Show Git Log"}),e(x,{get checked(){return d[0]()},onChange:n=>{d[1](n)},children:"Show History"}),e(s,{}),e(f,{get children(){return[e(_,{children:"Branches"}),e(R,{get value(){return C[0]()},onChange:n=>{C[1](n)},get children(){return[e(h,{value:"main",children:"main"}),e(h,{value:"develop",children:"develop"})]}})]}})]}})}})]}}))}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: PARTAS_RENDER_BUILDER => {
    const patternInput = createSignal(true);
    const patternInput_1 = createSignal(false);
    const patternInput_2 = createSignal("main");
    return <ContextMenu {...PARTAS_RENDER_BUILDER} bool:n$={false}>\r
                <ContextMenuTrigger class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">\r
                    Right click here.\r
                </ContextMenuTrigger>\r
                <ContextMenuPortal>\r
                    <ContextMenuContent class="w-48">\r
                        <ContextMenuItem disabled={false}>\r
                            <span>\r
                                Commit\r
                            </span>\r
                            <ContextMenuShortcut>\r
                                Ctrl+K\r
                            </ContextMenuShortcut>\r
                        </ContextMenuItem>\r
                        <ContextMenuItem disabled={false}>\r
                            <span>\r
                                Push\r
                            </span>\r
                            <ContextMenuShortcut>\r
                                Shift+Ctrl+K\r
                            </ContextMenuShortcut>\r
                        </ContextMenuItem>\r
                        <ContextMenuItem disabled={true}>\r
                            <span>\r
                                Update Project\r
                            </span>\r
                            <ContextMenuShortcut>\r
                                Ctrl+T\r
                            </ContextMenuShortcut>\r
                        </ContextMenuItem>\r
                        <ContextMenuSub overlap={true}>\r
                            <ContextMenuSubTrigger>\r
                                GitHub\r
                            </ContextMenuSubTrigger>\r
                            <ContextMenuPortal>\r
                                <ContextMenuSubContent>\r
                                    <ContextMenuItem>\r
                                        Create Pull Request...\r
                                    </ContextMenuItem>\r
                                    <ContextMenuItem>\r
                                        View Pull Requests\r
                                    </ContextMenuItem>\r
                                    <ContextMenuItem>\r
                                        Sync Fork\r
                                    </ContextMenuItem>\r
                                    <ContextMenuSeparator />\r
                                    <ContextMenuItem>\r
                                        Open on GitHub\r
                                    </ContextMenuItem>\r
                                </ContextMenuSubContent>\r
                            </ContextMenuPortal>\r
                        </ContextMenuSub>\r
                        <ContextMenuSeparator />\r
                        <ContextMenuCheckboxItem checked={patternInput[0]()} onChange={arg => {
            patternInput[1](arg);
          }}>\r
                            Show Git Log\r
                        </ContextMenuCheckboxItem>\r
                        <ContextMenuCheckboxItem checked={patternInput_1[0]()} onChange={arg_1 => {
            patternInput_1[1](arg_1);
          }}>\r
                            Show History\r
                        </ContextMenuCheckboxItem>\r
                        <ContextMenuSeparator />\r
                        <ContextMenuGroup>\r
                            <ContextMenuGroupLabel>\r
                                Branches\r
                            </ContextMenuGroupLabel>\r
                            <ContextMenuRadioGroup value={patternInput_2[0]()} onChange={arg_2 => {
              patternInput_2[1](arg_2);
            }}>\r
                                <ContextMenuRadioItem value="main">\r
                                    main\r
                                </ContextMenuRadioItem>\r
                                <ContextMenuRadioItem value="develop">\r
                                    develop\r
                                </ContextMenuRadioItem>\r
                            </ContextMenuRadioGroup>\r
                        </ContextMenuGroup>\r
                    </ContextMenuContent>\r
                </ContextMenuPortal>\r
            </ContextMenu>;
  }
}`,...o.parameters?.docs?.source}}};const w=["Default","Example"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Example:o,__namedExportsOrder:w,default:T},Symbol.toStringTag,{value:"Module"}));export{j as C,o as E};

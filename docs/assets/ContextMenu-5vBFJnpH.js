import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-BtM1hK2q.js";import{M as x,T as u,b as a,c as C,A as n}from"./blocks-CMsyRgwU.js";import{C as r,E as i}from"./ContextMenu.stories-C56ZRbeB.js";import{C as c}from"./ContextMenuTrigger.stories-CgAmJRMJ.js";import{C as p}from"./ContextMenuPortal.stories-CFUdQp-i.js";import{C as l}from"./ContextMenuSub.stories-5SBvZSmh.js";import{C as h}from"./ContextMenuGroup.stories-HOKb_ugs.js";import{C as d}from"./ContextMenuRadioGroup.stories-DZCgHb67.js";import{C as M}from"./ContextMenuContent.stories-B1uhc_HE.js";import{C as f}from"./ContextMenuItem.stories--MXiO9Vl.js";import{C as S}from"./ContextMenuShortcut.stories-BvvhL05x.js";import{C as j}from"./ContextMenuSeparator.stories-UAGVGRIq.js";import{C as g}from"./ContextMenuSubTrigger.stories-R-GrhQ0w.js";import{C as b}from"./ContextMenuSubContent.stories-hJ6ikQsj.js";import{C as k}from"./ContextMenuCheckboxItem.stories-wqf3422_.js";import{C as I}from"./ContextMenuGroupLabel.stories-BV2D7OCc.js";import{C as G}from"./ContextMenuRadioItem.stories-rUtpeqHW.js";import"./iframe-rVoFtZu9.js";import"./preload-helper-PPVm8Dsz.js";import"./ContextMenu-TPXVHZ8-.js";import"./LEK3K6R3-CeHdKinc.js";import"./2CTBMVJ4-CSCl13rC.js";import"./LR7LBJN3-Cn4krSpU.js";import"./index-Riw0p3ms.js";import"./FLVHQV4A-Gi-kDcar.js";import"./index-kLgwDL5l.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-TjBUJP2H.js";import"./combineProps-CsPhi8Vl.js";import"./N3GAC5SS-C-lFNpaU.js";import"./QZDH5R5B-BbgjLotW.js";import"./FN6EICGO-g7b9VqP4.js";import"./eventListener-1Z1e74AA.js";import"./SOM3K36D-CmiAbsf-.js";import"./FBCYWU27-BYVai17-.js";import"./3VFJM5NZ-yJJf6KC2.js";import"./JHMNWOLY-CA4xM7tJ.js";import"./E53DB7BS-COn9pcus.js";import"./UKTBL2JL-CAvLOfBE.js";import"./OYES4GOP-BdaYfyQY.js";import"./5WXHJDCZ-DghNgBBa.js";import"./VI7QYH27-DJzrevhS.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-BzeBVIIH.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-B_WfTB_e.js";import"./index-Dla5E_GO.js";import"./T4C3DMHT-B-M-1OJG.js";import"./Utils-DvLkKxqJ.js";import"./chevron-right-2r8GrgYN.js";import"./Icon-b_5I2J3_.js";import"./check-DCPDolhG.js";import"./circle-CmFkFTda.js";function s(o){const e={code:"code",h2:"h2",h3:"h3",pre:"pre",...m(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:r}),`
`,t.jsx(u,{}),`
`,t.jsx(a,{of:i,sourceState:"none",layout:"centered"}),`
`,t.jsx(C,{of:i}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-fsharp",children:`let showGitLog,setShowGitLog = createSignal true\r
let showHistory,setShowHistory = createSignal false\r
let branch,setBranch = createSignal "main"\r
ContextMenu() {\r
    ContextMenuTrigger(class' = "flex h-[150px] w-[300px] items-center justify-center \\\r
                       rounded-md border border-dashed text-sm")\r
        { "Right click here." }\r
    ContextMenuPortal() {\r
        ContextMenuContent(class' = "w-48") {\r
            let inline makeContextItem (value: string) (shortcut: string) disabled =\r
                ContextMenuItem(disabled = disabled) {\r
                    span() { value }\r
                    ContextMenuShortcut() { shortcut }\r
                }\r
            makeContextItem "Commit" "Ctrl+K" false\r
            makeContextItem "Push" "Shift+Ctrl+K" false\r
            makeContextItem "Update Project" "Ctrl+T" true\r
            ContextMenuSub(overlap=true) {\r
                ContextMenuSubTrigger() { "GitHub" }\r
                ContextMenuPortal() {\r
                    ContextMenuSubContent() {\r
                        let inline makeContextItem (value: string) =\r
                            ContextMenuItem() { value }\r
                        makeContextItem "Create Pull Request..."\r
                        makeContextItem "View Pull Requests"\r
                        makeContextItem "Sync Fork"\r
                        ContextMenuSeparator()\r
                        makeContextItem "Open on GitHub"\r
                    }\r
                }\r
            }\r
            ContextMenuSeparator()\r
            let inline makeCheckbox\r
                (value: string)\r
                (accessor: Accessor<bool>)\r
                (setter: Setter<bool>) =\r
                ContextMenuCheckboxItem(checked'=accessor(), onChange=unbox setter) { value }\r
            makeCheckbox "Show Git Log" showGitLog setShowGitLog\r
            makeCheckbox "Show History" showHistory setShowHistory\r
            ContextMenuSeparator()\r
            ContextMenuGroup() {\r
                ContextMenuGroupLabel() { "Branches" }\r
                ContextMenuRadioGroup(value = branch(), onChange = unbox setBranch) {\r
                    ContextMenuRadioItem(value = "main") { "main" }\r
                    ContextMenuRadioItem(value = "develop") { "develop" }\r
                }\r
            }\r
        }\r
    }\r
}
`})}),`
`,t.jsx(e.h2,{id:"components",children:"Components"}),`
`,t.jsx(e.h3,{id:"contextmenu",children:"ContextMenu"}),`
`,t.jsx(n,{of:r}),`
`,t.jsx(e.h3,{id:"contextmenutrigger",children:"ContextMenuTrigger"}),`
`,t.jsx(n,{of:c}),`
`,t.jsx(e.h3,{id:"contextmenuportal",children:"ContextMenuPortal"}),`
`,t.jsx(n,{of:p}),`
`,t.jsx(e.h3,{id:"contextmenusub",children:"ContextMenuSub"}),`
`,t.jsx(n,{of:l}),`
`,t.jsx(e.h3,{id:"contextmenugroup",children:"ContextMenuGroup"}),`
`,t.jsx(n,{of:h}),`
`,t.jsx(e.h3,{id:"contextmenuradiogroup",children:"ContextMenuRadioGroup"}),`
`,t.jsx(n,{of:d}),`
`,t.jsx(e.h3,{id:"contextmenucontent",children:"ContextMenuContent"}),`
`,t.jsx(n,{of:M}),`
`,t.jsx(e.h3,{id:"contextmenuitem",children:"ContextMenuItem"}),`
`,t.jsx(n,{of:f}),`
`,t.jsx(e.h3,{id:"contextmenushortcut",children:"ContextMenuShortcut"}),`
`,t.jsx(n,{of:S}),`
`,t.jsx(e.h3,{id:"contextmenuseparator",children:"ContextMenuSeparator"}),`
`,t.jsx(n,{of:j}),`
`,t.jsx(e.h3,{id:"contextmenusubtrigger",children:"ContextMenuSubTrigger"}),`
`,t.jsx(n,{of:g}),`
`,t.jsx(e.h3,{id:"contextmenusubcontent",children:"ContextMenuSubContent"}),`
`,t.jsx(n,{of:b}),`
`,t.jsx(e.h3,{id:"contextmenucheckboxitem",children:"ContextMenuCheckboxItem"}),`
`,t.jsx(n,{of:k}),`
`,t.jsx(e.h3,{id:"contextmenugrouplabel",children:"ContextMenuGroupLabel"}),`
`,t.jsx(n,{of:I}),`
`,t.jsx(e.h3,{id:"contextmenuradioitem",children:"ContextMenuRadioItem"}),`
`,t.jsx(n,{of:G})]})}function wt(o={}){const{wrapper:e}={...m(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(s,{...o})}):s(o)}export{wt as default};

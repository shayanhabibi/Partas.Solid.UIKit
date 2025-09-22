import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-DysMKXKv.js";import{M as x,T as u,b as a,c as C,A as n}from"./blocks-J5siV4uj.js";import{C as r,E as i}from"./ContextMenu.stories-e8A08QoM.js";import{C as c}from"./ContextMenuTrigger.stories-DBdCiKv7.js";import{C as p}from"./ContextMenuPortal.stories-UADjPkor.js";import{C as l}from"./ContextMenuSub.stories-bKuxzGGH.js";import{C as h}from"./ContextMenuGroup.stories-DUPcGdBS.js";import{C as d}from"./ContextMenuRadioGroup.stories-DI1dZvIz.js";import{C as M}from"./ContextMenuContent.stories-BkqdZh3q.js";import{C as f}from"./ContextMenuItem.stories-9HYPSEy0.js";import{C as S}from"./ContextMenuShortcut.stories-Du2-fnIZ.js";import{C as j}from"./ContextMenuSeparator.stories-CcA0pOan.js";import{C as g}from"./ContextMenuSubTrigger.stories-DydpRPLX.js";import{C as b}from"./ContextMenuSubContent.stories-D2IFWYJP.js";import{C as k}from"./ContextMenuCheckboxItem.stories-sYhp-Wvi.js";import{C as I}from"./ContextMenuGroupLabel.stories-B5qweFmw.js";import{C as G}from"./ContextMenuRadioItem.stories-BIKz0Jw-.js";import"./iframe-Clet01EE.js";import"./preload-helper-PPVm8Dsz.js";import"./ContextMenu-BpIrV_8s.js";import"./LEK3K6R3--g0FN9qo.js";import"./2CTBMVJ4-DyOk4EnN.js";import"./LR7LBJN3-qrjvAUg4.js";import"./index-xPNqmJU7.js";import"./FLVHQV4A-BgLTf8G_.js";import"./index-CNxaL1Ec.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-BgurTJCO.js";import"./combineProps-Bn1VjxOg.js";import"./N3GAC5SS-wWDK6RCs.js";import"./QZDH5R5B-PBS_kkPt.js";import"./FN6EICGO-C03Mjb-S.js";import"./eventListener-D3LYkR5K.js";import"./SOM3K36D-B1PoOVhK.js";import"./FBCYWU27-CO4xBNMq.js";import"./3VFJM5NZ-wQTIoC1l.js";import"./JHMNWOLY-B85oOwU1.js";import"./E53DB7BS-EmVpB0gT.js";import"./UKTBL2JL-XTYDUvYT.js";import"./OYES4GOP-B6Aa_edP.js";import"./5WXHJDCZ-DghNgBBa.js";import"./VI7QYH27-C64q1LVW.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-D60S8ox6.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-B_WfTB_e.js";import"./index-CPkKRnTR.js";import"./T4C3DMHT-BNt2rCFy.js";import"./Utils-cFOJcEDI.js";import"./chevron-right-R90tHh1_.js";import"./Icon-Bfk8cl3A.js";import"./check-CU5kgQI-.js";import"./circle-DU_Ny4ru.js";function s(o){const e={code:"code",h2:"h2",h3:"h3",pre:"pre",...m(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:r}),`
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

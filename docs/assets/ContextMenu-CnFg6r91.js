import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-DD6hQIwJ.js";import{M as x,T as u,b as a,c as C,A as n}from"./blocks-Cb4awOOM.js";import{C as r,E as i}from"./ContextMenu.stories-Di8iTzr1.js";import{C as c}from"./ContextMenuTrigger.stories-BDglkiXO.js";import{C as p}from"./ContextMenuPortal.stories-9dKILYpC.js";import{C as l}from"./ContextMenuSub.stories-hFeml2oN.js";import{C as h}from"./ContextMenuGroup.stories-nIm04IAW.js";import{C as d}from"./ContextMenuRadioGroup.stories-Da2Hf0EO.js";import{C as M}from"./ContextMenuContent.stories-Bli1v628.js";import{C as f}from"./ContextMenuItem.stories-wmP8r6CA.js";import{C as S}from"./ContextMenuShortcut.stories-f1zHnueF.js";import{C as j}from"./ContextMenuSeparator.stories-DBSnHRY3.js";import{C as g}from"./ContextMenuSubTrigger.stories-C896nNtO.js";import{C as b}from"./ContextMenuSubContent.stories-DeOVE19Q.js";import{C as k}from"./ContextMenuCheckboxItem.stories-WPOpzAR7.js";import{C as I}from"./ContextMenuGroupLabel.stories-BbNx_wse.js";import{C as G}from"./ContextMenuRadioItem.stories-CtMO2PPO.js";import"./iframe-CSkHCzVC.js";import"./preload-helper-PPVm8Dsz.js";import"./ContextMenu-D5PNrmNI.js";import"./LEK3K6R3-DaQPiUO2.js";import"./2CTBMVJ4-CEwVK2sr.js";import"./LR7LBJN3-DTrf9afT.js";import"./index-BqxmMzY1.js";import"./FLVHQV4A-Dza2M8WJ.js";import"./index-BtT_u8Hx.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-Bs2ALodi.js";import"./combineProps-DXHHMuGc.js";import"./N3GAC5SS-uPbU4n_o.js";import"./QZDH5R5B-Bdcb4p2a.js";import"./FN6EICGO-DxliCwKo.js";import"./eventListener-C81Bj2cO.js";import"./SOM3K36D-CJY3ItaN.js";import"./FBCYWU27-Duvn9742.js";import"./3VFJM5NZ-Cpt1Stcw.js";import"./JHMNWOLY-BqZJcmiH.js";import"./E53DB7BS-V5IT78uP.js";import"./UKTBL2JL-dEE4KpjY.js";import"./OYES4GOP-DI3jAQSI.js";import"./5WXHJDCZ-DghNgBBa.js";import"./VI7QYH27-DhPnUvMP.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-DRsflZo7.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-DLcXBA1H.js";import"./T4C3DMHT-D3N_uRlw.js";import"./Utils-Bukfxs-o.js";import"./chevron-right-B15AO5Kg.js";import"./Icon-CbvvIQH_.js";import"./check-Bbvt8ljy.js";import"./circle-BlJvfjmd.js";function s(o){const e={code:"code",h2:"h2",h3:"h3",pre:"pre",...m(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:r}),`
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

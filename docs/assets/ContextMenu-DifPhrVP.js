import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-Bpxy8yXn.js";import{M as x,T as u,b as a,c as C,A as n}from"./blocks-Deqp30Cn.js";import{C as r,E as i}from"./ContextMenu.stories-Bjx2YlJL.js";import{C as c}from"./ContextMenuTrigger.stories-wWLysKfz.js";import{C as p}from"./ContextMenuPortal.stories-DVHu8tZ9.js";import{C as l}from"./ContextMenuSub.stories-Cpw3x0Lk.js";import{C as h}from"./ContextMenuGroup.stories-D7Hy_Po-.js";import{C as d}from"./ContextMenuRadioGroup.stories-CycGKDPR.js";import{C as M}from"./ContextMenuContent.stories-INskEBiE.js";import{C as f}from"./ContextMenuItem.stories-BGRvbUn_.js";import{C as S}from"./ContextMenuShortcut.stories-BVC39Dd_.js";import{C as j}from"./ContextMenuSeparator.stories-DDgQhryj.js";import{C as g}from"./ContextMenuSubTrigger.stories-CpjnuU0M.js";import{C as b}from"./ContextMenuSubContent.stories-n6XkfS3X.js";import{C as k}from"./ContextMenuCheckboxItem.stories-BOi_oFu6.js";import{C as I}from"./ContextMenuGroupLabel.stories-CUP0rKVW.js";import{C as G}from"./ContextMenuRadioItem.stories-CrUO4js2.js";import"./iframe-CYoISbNW.js";import"./preload-helper-PPVm8Dsz.js";import"./ContextMenu-pvgI64Pc.js";import"./LEK3K6R3-BE2R2Qwh.js";import"./2CTBMVJ4-IBFzaLOl.js";import"./LR7LBJN3-Bhxu4Q7a.js";import"./index-_wS-z7e_.js";import"./FLVHQV4A-DrEHBAB-.js";import"./index-CNJVeY88.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-aQTIg_kX.js";import"./combineProps-C6tzB3Qj.js";import"./N3GAC5SS-hyboePSp.js";import"./QZDH5R5B-C9YQOWCj.js";import"./FN6EICGO-CSkRKGds.js";import"./eventListener-CKPbckrh.js";import"./SOM3K36D-ubC32QYa.js";import"./FBCYWU27-CTp0ggIZ.js";import"./3VFJM5NZ-mcdoqugV.js";import"./JHMNWOLY-C-_W0a1e.js";import"./E53DB7BS-Ct6W5Aep.js";import"./UKTBL2JL-BSclCzBH.js";import"./OYES4GOP-mVubA_43.js";import"./5WXHJDCZ-DghNgBBa.js";import"./VI7QYH27-o4jp_KKx.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-Z-x0zc1J.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-B_WfTB_e.js";import"./index-bM4TQhDa.js";import"./T4C3DMHT-BavTfRtR.js";import"./Utils-zL6guu6T.js";import"./chevron-right-HUhCEwza.js";import"./Icon-DTwW8kzS.js";import"./check-yC_GvZJC.js";import"./circle-T8PGYPRH.js";function s(o){const e={code:"code",h2:"h2",h3:"h3",pre:"pre",...m(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:r}),`
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

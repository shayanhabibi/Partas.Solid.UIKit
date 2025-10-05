import{j as t,M as x,T as u,d as a,e as C,A as n}from"./iframe-mHl6JQ-c.js";import{useMDXComponents as m}from"./index-B7Otj1x9.js";import{C as r,E as i}from"./ContextMenu.stories-JusOy81y.js";import{C as c}from"./ContextMenuTrigger.stories-BxHOrdqe.js";import{C as p}from"./ContextMenuPortal.stories-BZaSISJt.js";import{C as l}from"./ContextMenuSub.stories-DfVsT8Cs.js";import{C as h}from"./ContextMenuGroup.stories-Ch9PE2-p.js";import{C as d}from"./ContextMenuRadioGroup.stories-CIZXfIe-.js";import{C as M}from"./ContextMenuContent.stories-CqM1PV6v.js";import{C as f}from"./ContextMenuItem.stories-B4h-KsPe.js";import{C as S}from"./ContextMenuShortcut.stories-CGXBB173.js";import{C as j}from"./ContextMenuSeparator.stories-D6aPSCj6.js";import{C as g}from"./ContextMenuSubTrigger.stories-Co9GA18h.js";import{C as b}from"./ContextMenuSubContent.stories-2qQjcc21.js";import{C as k}from"./ContextMenuCheckboxItem.stories-1bV_a9MP.js";import{C as I}from"./ContextMenuGroupLabel.stories-DNUGHS-1.js";import{C as G}from"./ContextMenuRadioItem.stories-BLrSd0CH.js";import"./preload-helper-PPVm8Dsz.js";import"./ContextMenu-bPfiuGUj.js";import"./LEK3K6R3-DZ-uB7O0.js";import"./2CTBMVJ4-Bz4Kyx6Y.js";import"./LR7LBJN3-CEDhmev5.js";import"./index-D4JJ8pSH.js";import"./FLVHQV4A-DzmScvHC.js";import"./index-DaBFbvzD.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-ncGqb3xy.js";import"./combineProps-D0kUtwZR.js";import"./N3GAC5SS-CbGPk0SO.js";import"./QZDH5R5B-V0vxofr3.js";import"./FN6EICGO-DRMqXH9r.js";import"./Utils-CYryE0IK.js";import"./SOM3K36D-COoHUAx7.js";import"./FBCYWU27-DahZvSGj.js";import"./3VFJM5NZ-onnisp7d.js";import"./JHMNWOLY-DQaPMaMc.js";import"./E53DB7BS-D596icfy.js";import"./UKTBL2JL-CJMXQYms.js";import"./OYES4GOP-kZMWaLji.js";import"./5WXHJDCZ-DghNgBBa.js";import"./VI7QYH27-D7QbR8Gl.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-BorqGR4b.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-QgBfygXE.js";import"./T4C3DMHT-BR2Y6qlV.js";import"./chevron-right-CwV1VI-8.js";import"./Icon-CONeZlkT.js";import"./check-zuZDMFDm.js";import"./circle-DIc1hEOx.js";function s(o){const e={code:"code",h2:"h2",h3:"h3",pre:"pre",...m(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:r}),`
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
`,t.jsx(n,{of:G})]})}function kt(o={}){const{wrapper:e}={...m(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(s,{...o})}):s(o)}export{kt as default};

import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-w4y-2JRw.js";import{M as x,T as u,b as a,c as C,A as n}from"./blocks-BfNHLvBY.js";import{C as r,E as i}from"./ContextMenu.stories-C6Ik4sAd.js";import{C as c}from"./ContextMenuTrigger.stories-CwejTEEw.js";import{C as p}from"./ContextMenuPortal.stories-e3CTaSBn.js";import{C as l}from"./ContextMenuSub.stories-BqDpBDMR.js";import{C as h}from"./ContextMenuGroup.stories-hbgwzjlT.js";import{C as d}from"./ContextMenuRadioGroup.stories-ZOfhE6Id.js";import{C as M}from"./ContextMenuContent.stories-9Fwstt5H.js";import{C as f}from"./ContextMenuItem.stories-Cdn0JT0h.js";import{C as S}from"./ContextMenuShortcut.stories-Bu-rkpUV.js";import{C as j}from"./ContextMenuSeparator.stories-BAOH28vo.js";import{C as g}from"./ContextMenuSubTrigger.stories-BB7xS_3v.js";import{C as b}from"./ContextMenuSubContent.stories-VBHgyRJ-.js";import{C as k}from"./ContextMenuCheckboxItem.stories-BT5z26OW.js";import{C as I}from"./ContextMenuGroupLabel.stories-C9lPf6yH.js";import{C as G}from"./ContextMenuRadioItem.stories-DsjjZRI-.js";import"./iframe-CQhh2Qu5.js";import"./preload-helper-PPVm8Dsz.js";import"./ContextMenu-5HTeYG2q.js";import"./LEK3K6R3-DoQ-1qCu.js";import"./2CTBMVJ4-D8UquEmR.js";import"./LR7LBJN3-BEwATGKl.js";import"./index-DW9tDSAV.js";import"./FLVHQV4A-C8oehw7Q.js";import"./index-sxjzjzXW.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-DFznmYTA.js";import"./combineProps-BDGDEaHG.js";import"./N3GAC5SS-C-OnqaN9.js";import"./QZDH5R5B-C0TQ2bTZ.js";import"./FN6EICGO-B6Cr9H-k.js";import"./eventListener-K9Lba18Q.js";import"./SOM3K36D-DW8fMhc_.js";import"./FBCYWU27-ClUBcuEn.js";import"./3VFJM5NZ-BZdkV51Z.js";import"./JHMNWOLY-CrfHPxcN.js";import"./E53DB7BS-CVyxcjvy.js";import"./UKTBL2JL-DWXUg-P2.js";import"./OYES4GOP-DTqiBsTD.js";import"./5WXHJDCZ-DghNgBBa.js";import"./VI7QYH27-BXj65VY7.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-DNbZ_U_3.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-C8veUlZR.js";import"./index-BeAt9i6J.js";import"./T4C3DMHT-eS7TZ8Ak.js";import"./Utils-CX15CBuI.js";import"./chevron-right-CiJnV58v.js";import"./Icon-BiJbdnQ6.js";import"./check-BIsC9o7Y.js";import"./circle-BpRPdjQi.js";function s(o){const e={code:"code",h2:"h2",h3:"h3",pre:"pre",...m(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:r}),`
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

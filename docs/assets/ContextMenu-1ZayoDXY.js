import{G as e,H as u,T as d,K as m,L as c,O as t}from"./iframe-BHVPMPJn.js";import{useMDXComponents as p}from"./index-CB5oDCs8.js";import{C as s,E as a}from"./ContextMenu.stories-C1LjUm3J.js";import{C as x}from"./ContextMenuTrigger.stories-Brk5gQz5.js";import{C as l}from"./ContextMenuPortal.stories-TdrK6zUQ.js";import{C}from"./ContextMenuSub.stories-CIhDHcX7.js";import{C as b}from"./ContextMenuGroup.stories-CW2Y19VD.js";import{C as h}from"./ContextMenuRadioGroup.stories-BWXGgpBX.js";import{C as g}from"./ContextMenuContent.stories-BmX8mjfG.js";import{C as f}from"./ContextMenuItem.stories-Ctbd2QvL.js";import{C as M}from"./ContextMenuShortcut.stories-CIbp-M2J.js";import{C as S}from"./ContextMenuSeparator.stories-D8B1KMhS.js";import{C as v}from"./ContextMenuSubTrigger.stories-DfhGRZwd.js";import{C as y}from"./ContextMenuSubContent.stories-BOzzlcw6.js";import{C as j}from"./ContextMenuCheckboxItem.stories-CYxZjCJy.js";import{C as k}from"./ContextMenuGroupLabel.stories-cvELZk5K.js";import{C as I}from"./ContextMenuRadioItem.stories-MW3VVK3Y.js";import"./preload-helper-PPVm8Dsz.js";import"./ContextMenu-CYdXM-OF.js";import"./LEK3K6R3-C1RJIUI6.js";import"./2CTBMVJ4-DtmKwrBD.js";import"./LR7LBJN3-Ddt3mnWg.js";import"./index-DzweoC3U.js";import"./FLVHQV4A-C_-euiFy.js";import"./index-DeTOQkeb.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-BWY3wABR.js";import"./combineProps-C_bsadWN.js";import"./N3GAC5SS-C1DyDo7m.js";import"./QZDH5R5B-BZBDFFES.js";import"./FN6EICGO-BXZAkfGN.js";import"./Utils-CAhjhIiz.js";import"./SOM3K36D-B0WlF5qk.js";import"./FBCYWU27-RI55FxO7.js";import"./3VFJM5NZ-Cb4P0J_t.js";import"./JHMNWOLY-DdZhD2t0.js";import"./E53DB7BS-BWjGcyhp.js";import"./UKTBL2JL-BmAvJ-mx.js";import"./OYES4GOP-B_JtkMZ5.js";import"./5WXHJDCZ-DghNgBBa.js";import"./VI7QYH27-BunYCgaO.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-C_rqj1ej.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-CdhZt3CN.js";import"./T4C3DMHT-DJspcnHs.js";import"./chevron-right-C-MrCkqN.js";import"./Icon-DcpizePo.js";import"./check-K22Y-rl-.js";import"./circle-C1Afm31Z.js";const T=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
\r
[<Erase>]\r
type ContextMenu() =\r
    inherit Kobalte.ContextMenu()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.ContextMenu(gutter = 4).dataSlot("context-menu").spread props\r
    \r
[<Erase>]\r
type ContextMenuTrigger() =\r
    inherit ContextMenu.Trigger()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        ContextMenu.Trigger().dataSlot("context-menu-trigger").spread props\r
[<Erase>]\r
type ContextMenuPortal() =\r
    inherit ContextMenu.Portal()\r
    [<SolidTypeComponent>]\r
    member props.constructor = ContextMenu.Portal().dataSlot("context-menu-portal").spread props\r
    \r
[<Erase>]\r
type ContextMenuSub() =\r
    inherit ContextMenu.Sub()\r
    [<SolidTypeComponent>]\r
    member props.constructor = ContextMenu.Sub().dataSlot("context-menu-sub").spread props\r
    \r
[<Erase>]\r
type ContextMenuGroup() =\r
    inherit ContextMenu.Group()\r
    [<SolidTypeComponent>]\r
    member props.constructor = ContextMenu.Group().dataSlot("context-menu-group").spread props\r
    \r
[<Erase>]\r
type ContextMenuRadioGroup() =\r
    inherit ContextMenu.RadioGroup()\r
    [<SolidTypeComponent>]\r
    member props.constructor = ContextMenu.RadioGroup().dataSlot("context-menu-radio-group").spread props\r
    \r
[<Erase>]\r
type ContextMenuContent() =\r
    inherit ContextMenu.Content()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.ContextMenu.Portal() {\r
            Kobalte.ContextMenu.Content(class'= Lib.cn [|\r
                "bg-popover text-popover-foreground data-[expanded]:animate-in \\\r
                data-[closed]:animate-out data-[closed]:fade-out-0 \\\r
                data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 \\\r
                data-[expanded]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 \\\r
                data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 \\\r
                data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--kb-popper-content-available-height) \\\r
                min-w-[8rem] origin-(--kb-popper-content-transform-origin) \\\r
                overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md"\r
                // "[not(has-data-[inset])]:pl-1"\r
                props.class'\r
            |]).dataSlot("context-menu-content").spread(props)\r
            }\r
[<Erase>]\r
module ContextMenuItem =\r
    [<StringEnum>]\r
    type Variant =\r
        | Default\r
        | Destructive\r
[<Erase>]\r
type ContextMenuItem() =\r
    inherit ContextMenu.Item()\r
    [<Erase>]\r
    member val variant: ContextMenuItem.Variant = JS.undefined with get,set\r
    [<Erase>]\r
    member val inset: bool = JS.undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        props.variant <- ContextMenuItem.Variant.Default\r
        props.inset <- true\r
        Kobalte.ContextMenu.Item(\r
            class' = Lib.cn [|\r
                "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive \\\r
                data-[variant=destructive]:focus:bg-destructive/10 \\\r
                dark:data-[variant=destructive]:focus:bg-destructive/20 \\\r
                data-[variant=destructive]:focus:text-destructive \\\r
                data-[variant=destructive]:*:[svg]:!text-destructive \\\r
                [&_svg:not([class*='text-'])]:text-muted-foreground relative \\\r
                flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 \\\r
                text-sm outline-hidden select-none data-[disabled]:pointer-events-none \\\r
                data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none \\\r
                [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"\r
                props.class'\r
            |]) .data("inset", unbox props.inset)\r
                .data("variant", string props.variant)\r
                .dataSlot("context-menu-item")\r
                .spread(props)\r
[<Erase>]\r
type ContextMenuShortcut() =\r
    inherit span()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        span(class'= Lib.cn [| "ml-auto text-xs tracking-widest text-muted-foreground"; props.class' |])\r
            .dataSlot("context-menu-shortcut")\r
            .spread(props)\r
[<Erase>]\r
type ContextMenuSeparator() =\r
    inherit ContextMenu.Separator()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.ContextMenu.Separator(\r
            class' = Lib.cn [|\r
                "-mx-1 my-1 h-px bg-border"\r
                props.class'\r
            |]\r
        )   .dataSlot("context-menu-separator")\r
            .spread(props)\r
[<Erase>]\r
type ContextMenuSubTrigger() =\r
    inherit ContextMenu.SubTrigger()\r
    [<Erase>]\r
    member val inset: bool = JS.undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        props.inset <- true\r
        Kobalte.ContextMenu.SubTrigger(class'= Lib.cn [|\r
            "focus:bg-accent focus:text-accent-foreground data-[expanded]:bg-accent \\\r
            data-[expanded]:text-accent-foreground \\\r
            [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default \\\r
            items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none \\\r
            data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 \\\r
            [&_svg:not([class*='size-'])]:size-4"\r
            props.class'\r
        |]) .data("inset", unbox props.inset)\r
            .dataSlot("context-menu-sub-trigger")\r
            .spread(props) {\r
            props.children\r
            Lucide.Lucide.ChevronRight(class'="ml-auto", strokeWidth = 2)\r
        }\r
[<Erase>]\r
type ContextMenuSubContent() =\r
    inherit ContextMenu.SubContent()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.ContextMenu.SubContent(class'= Lib.cn [|\r
            "bg-popover text-popover-foreground data-[expanded]:animate-in \\\r
            data-[closed]:animate-out data-[closed]:fade-out-0 \\\r
            data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 \\\r
            data-[expanded]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 \\\r
            data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 \\\r
            data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] \\\r
            origin-(--kb-popper-content-transform-origin) overflow-hidden \\\r
            rounded-md border p-1 shadow-lg"\r
            props.class'\r
        |]) .dataSlot("context-menu-sub-content")\r
            .spread(props)\r
[<Erase>]\r
type ContextMenuCheckboxItem() =\r
    inherit ContextMenu.CheckboxItem()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.ContextMenu.CheckboxItem(class'= Lib.cn [|\r
            "focus:bg-accent focus:text-accent-foreground relative flex \\\r
            cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 \\\r
            text-sm outline-hidden select-none data-[disabled]:pointer-events-none \\\r
            data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 \\\r
            [&_svg:not([class*='size-'])]:size-4"\r
            props.class'\r
        |]) .dataSlot("context-menu-checkbox-item")\r
            .spread(props) {\r
            span(class'= "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center") {\r
                Kobalte.ContextMenu.ItemIndicator() {\r
                    Lucide.Lucide.Check(class'="size-4", strokeWidth = 2)\r
                }\r
            }\r
            props.children\r
        }\r
[<Erase>]\r
type ContextMenuGroupLabel() =\r
    inherit ContextMenu.GroupLabel()\r
    [<Erase>]\r
    member val inset: bool = JS.undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.ContextMenu.GroupLabel(class' = Lib.cn [|\r
            "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8"; props.class'\r
        |]) .data("inset", unbox props.inset)\r
            .dataSlot("context-menu-group-label")\r
            .spread(props)\r
[<Erase>]\r
type ContextMenuRadioItem() =\r
    inherit ContextMenu.RadioItem()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.ContextMenu.RadioItem(class'= Lib.cn [|\r
            "focus:bg-accent focus:text-accent-foreground relative flex \\\r
            cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 \\\r
            text-sm outline-hidden select-none data-[disabled]:pointer-events-none \\\r
            data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 \\\r
            [&_svg:not([class*='size-'])]:size-4"\r
            props.class'\r
        |]) .dataSlot("context-menu-radio-item")\r
            .spread(props) {\r
            span(class'="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center") {\r
                Kobalte.ContextMenu.ItemIndicator() {\r
                    Lucide.Lucide.Circle(class'="size-2 fill-current", strokeWidth = 2)\r
                }\r
            }\r
            props.children\r
        }\r
\r
\r
`;function i(r){const n={code:"code",h2:"h2",h3:"h3",pre:"pre",...p(),...r.components},{SourceCode:o}=n;return o||w("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(u,{of:s}),`
`,e.jsx(d,{}),`
`,e.jsx(m,{of:a,sourceState:"none",layout:"centered"}),`
`,e.jsx(c,{of:a}),`
`,e.jsx(o,{code:T}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-fsharp",children:`let showGitLog,setShowGitLog = createSignal true\r
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
`,e.jsx(n.h2,{id:"components",children:"Components"}),`
`,e.jsx(n.h3,{id:"contextmenu",children:"ContextMenu"}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(n.h3,{id:"contextmenutrigger",children:"ContextMenuTrigger"}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h3,{id:"contextmenuportal",children:"ContextMenuPortal"}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(n.h3,{id:"contextmenusub",children:"ContextMenuSub"}),`
`,e.jsx(t,{of:C}),`
`,e.jsx(n.h3,{id:"contextmenugroup",children:"ContextMenuGroup"}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(n.h3,{id:"contextmenuradiogroup",children:"ContextMenuRadioGroup"}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h3,{id:"contextmenucontent",children:"ContextMenuContent"}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(n.h3,{id:"contextmenuitem",children:"ContextMenuItem"}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(n.h3,{id:"contextmenushortcut",children:"ContextMenuShortcut"}),`
`,e.jsx(t,{of:M}),`
`,e.jsx(n.h3,{id:"contextmenuseparator",children:"ContextMenuSeparator"}),`
`,e.jsx(t,{of:S}),`
`,e.jsx(n.h3,{id:"contextmenusubtrigger",children:"ContextMenuSubTrigger"}),`
`,e.jsx(t,{of:v}),`
`,e.jsx(n.h3,{id:"contextmenusubcontent",children:"ContextMenuSubContent"}),`
`,e.jsx(t,{of:y}),`
`,e.jsx(n.h3,{id:"contextmenucheckboxitem",children:"ContextMenuCheckboxItem"}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.h3,{id:"contextmenugrouplabel",children:"ContextMenuGroupLabel"}),`
`,e.jsx(t,{of:k}),`
`,e.jsx(n.h3,{id:"contextmenuradioitem",children:"ContextMenuRadioItem"}),`
`,e.jsx(t,{of:I})]})}function Ie(r={}){const{wrapper:n}={...p(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}function w(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Ie as default};

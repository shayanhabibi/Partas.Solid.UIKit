import{G as n,H as i,T as a,K as u,L as m,O as o}from"./iframe-Ss2HFUgg.js";import{useMDXComponents as s}from"./index--e61kTGT.js";import{D as p,a as c}from"./DropdownMenu.stories-Cz9tF7IU.js";import{D as l}from"./DropdownMenuTrigger.stories-Cx9weZ4R.js";import{D as w}from"./DropdownMenuPortal.stories-g1cMO7y4.js";import{D as b}from"./DropdownMenuSub.stories-BOBmDjDO.js";import{D as h}from"./DropdownMenuSubContent.stories-Yb8kFJhr.js";import{D as f}from"./DropdownMenuGroup.stories-DFZeG3Xi.js";import{D}from"./DropdownMenuRadioGroup.stories-Ce4EcjoY.js";import{D as x}from"./DropdownMenuContent.stories-DPcbRO75.js";import{D as g}from"./DropdownMenuItem.stories-B8z5mEl3.js";import{D as M}from"./DropdownMenuShortcut.stories-CGavTrsp.js";import{D as S}from"./DropdownMenuLabel.stories-Bhy8F7-U.js";import{D as v}from"./DropdownMenuSeparator.stories-D2JO5oLI.js";import{D as y}from"./DropdownMenuSubTrigger.stories-nuCcSpkP.js";import{D as j}from"./DropdownMenuCheckboxItem.stories-BYsnCrMT.js";import{D as C}from"./DropdownMenuGroupLabel.stories-e5331W6g.js";import{D as T}from"./DropdownMenuRadioItem.stories-C-5qPN2J.js";import"./preload-helper-PPVm8Dsz.js";import"./DropdownMenu-Af5os5fb.js";import"./LEK3K6R3-CGlCZOjW.js";import"./2CTBMVJ4-BJBOPr5i.js";import"./LR7LBJN3-RceSjpmp.js";import"./index-axew2xP3.js";import"./FLVHQV4A-DhRRNmDB.js";import"./index-DsOqkTmx.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-Da4i2tMy.js";import"./combineProps-Dc0BZltT.js";import"./N3GAC5SS-Cpp7-odw.js";import"./QZDH5R5B-BWDH-QCD.js";import"./FN6EICGO-DOeDID0N.js";import"./Utils-Bv7TLaDt.js";import"./SOM3K36D-DE1P6_or.js";import"./FBCYWU27-CflOAPjT.js";import"./3VFJM5NZ-sgbSJPuq.js";import"./JHMNWOLY-GWqRWAK3.js";import"./E53DB7BS-B46G7qd5.js";import"./UKTBL2JL-DisnMsyh.js";import"./OYES4GOP-BvTDlBrO.js";import"./5WXHJDCZ-DghNgBBa.js";import"./VI7QYH27-eJSdAdpK.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-D8XsDJNg.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-Dwv4USTq.js";import"./T4C3DMHT-BxeliJxY.js";import"./chevron-right-DAtHR2GY.js";import"./Icon-DzzAe45T.js";import"./check-CTSO4oyu.js";import"./circle-BZ9_H_wJ.js";const I=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
open Partas.Solid.Polymorphism\r
\r
[<Erase>]\r
type DropdownMenuTrigger() =\r
    inherit DropdownMenu.Trigger()\r
    interface Polymorph\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
       DropdownMenu.Trigger()\r
           .dataSlot("dropdown-menu-trigger")\r
           .spread props\r
    \r
[<Erase>]\r
type DropdownMenuPortal() =\r
    inherit DropdownMenu.Portal()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        DropdownMenu.Portal()\r
            .dataSlot("dropdown-menu-portal")\r
            .spread props\r
    \r
[<Erase>]\r
type DropdownMenuSub() =\r
    inherit DropdownMenu.Sub()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        DropdownMenu.Sub()\r
            .dataSlot("dropdown-menu-sub")\r
            .spread props\r
[<Erase>]\r
type DropdownMenuSubContent() =\r
    inherit DropdownMenu.SubContent()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        DropdownMenu.SubContent(\r
            class' = Lib.cn [|\r
                "bg-popover text-popover-foreground \\\r
                data-[state=open]:animate-in data-[state=closed]:animate-out \\\r
                data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 \\\r
                data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 \\\r
                data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 \\\r
                data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 \\\r
                z-50 min-w-[8rem] origin-(--kb-popper-content-transform-origin) \\\r
                overflow-hidden rounded-md border p-1 shadow-lg"\r
                props.class'\r
            |]\r
        )   .dataSlot("dropdown-menu-sub-content")\r
            .spread props\r
    \r
[<Erase>]\r
type DropdownMenuGroup() =\r
    inherit DropdownMenu.Group()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        DropdownMenu.Group()\r
            .dataSlot("dropdown-menu-group")\r
            .spread props\r
    \r
[<Erase>]\r
type DropdownMenuRadioGroup() =\r
    inherit DropdownMenu.RadioGroup()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        DropdownMenu.RadioGroup()\r
            .dataSlot("dropdown-menu-radio-group")\r
            .spread props\r
    \r
[<Erase>]\r
type DropdownMenu() =\r
    inherit Kobalte.DropdownMenu()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.DropdownMenu(gutter = 4)\r
            .dataSlot("dropdown-menu")\r
            .spread props\r
    \r
[<Erase>]\r
type DropdownMenuContent() =\r
    inherit DropdownMenu.Content()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        DropdownMenuPortal() {\r
            DropdownMenu.Content(class' = Lib.cn [|\r
                "bg-popover text-popover-foreground data-[state=open]:animate-content-show \\\r
                data-[closed]:animate-content-hide data-[closed]:fade-out-0 \\\r
                data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 \\\r
                data-[expanded]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 \\\r
                data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 \\\r
                data-[side=top]:slide-in-from-bottom-2 z-50 \\\r
                max-h-(--kb-popper-content-available-height) min-w-[8rem] \\\r
                origin-(--kb-popper-content-transform-origin) overflow-x-hidden \\\r
                overflow-y-auto rounded-md border p-1 shadow-md"\r
                props.class'\r
            |]) .dataSlot("dropdown-menu-content")\r
                .spread(props)\r
        }\r
[<Erase>]\r
module DropdownMenuItem =\r
    type Variant = ContextMenuItem.Variant\r
[<Erase>]\r
type DropdownMenuItem() =\r
    inherit DropdownMenu.Item()\r
    [<Erase>]\r
    member val variant: DropdownMenuItem.Variant = JS.undefined with get,set\r
    [<Erase>]\r
    member val inset: bool = JS.undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        props.variant <- DropdownMenuItem.Variant.Default\r
        DropdownMenu.Item(class'= Lib.cn [|\r
            "focus:bg-accent focus:text-accent-foreground \\\r
            data-[variant=destructive]:text-destructive \\\r
            data-[variant=destructive]:focus:bg-destructive/10 \\\r
            dark:data-[variant=destructive]:focus:bg-destructive/20 \\\r
            data-[variant=destructive]:focus:text-destructive \\\r
            data-[variant=destructive]:*:[svg]:!text-destructive \\\r
            [&_svg:not([class*='text-'])]:text-muted-foreground relative \\\r
            flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm \\\r
            outline-hidden select-none data-[disabled]:pointer-events-none \\\r
            data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none \\\r
            [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"\r
            props.class'\r
        |]) .data("variant", string props.variant)\r
            .data("inset", unbox props.inset)\r
            .dataSlot("dropdown-menu-item")\r
            .spread(props)\r
[<Erase>]\r
type DropdownMenuShortcut() =\r
    inherit span()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        span(class'= Lib.cn [|\r
            "ml-auto text-xs tracking-widest text-muted-foreground"; props.class'\r
        |]) .dataSlot("dropdown-menu-shortcut")\r
            .spread(props)\r
[<Erase>]\r
type DropdownMenuLabel() =\r
    inherit div()\r
    [<Erase>]\r
    member val inset : bool = jsNative with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class'= Lib.cn [|\r
            "px-2 py-1.5 text-sm font-medium"\r
            "data-[inset]:pl-8"\r
        |]) .data("inset", unbox props.inset)\r
            .dataSlot("dropdown-menu-label")\r
            .spread(props)\r
[<Erase>]\r
type DropdownMenuSeparator() =\r
    inherit DropdownMenu.Separator()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        DropdownMenu.Separator(class'= Lib.cn [|\r
            "-mx-1 my-1 h-px bg-border"\r
            props.class'\r
        |]) .dataSlot("dropdown-menu-separator")\r
            .spread(props)\r
\r
\r
[<Erase>]\r
type DropdownMenuSubTrigger() =\r
    inherit DropdownMenu.SubTrigger()\r
    interface Polymorph\r
    [<Erase>]\r
    member val inset: bool = JS.undefined with get,set\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        DropdownMenu.SubTrigger(class' = Lib.cn [|\r
            "focus:bg-accent focus:text-accent-foreground \\\r
            data-[state=open]:bg-accent data-[state=open]:text-accent-foreground \\\r
            [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default \\\r
            items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden \\\r
            select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 \\\r
            [&_svg:not([class*='size-'])]:size-4"\r
            props.class'\r
        |]) .dataSlot("dropdown-menu-sub-trigger")\r
            .spread(props) {\r
            props.children\r
            Lucide.Lucide.ChevronRight(strokeWidth = 2, class' = "size-4 ml-auto")\r
        }\r
\r
[<Erase>]\r
type DropdownMenuCheckboxItem() =\r
    inherit DropdownMenu.CheckboxItem()\r
    interface Polymorph\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        DropdownMenu.CheckboxItem(\r
            class' = Lib.cn [|\r
                "focus:bg-accent focus:text-accent-foreground relative flex \\\r
                cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 \\\r
                text-sm outline-hidden select-none data-[disabled]:pointer-events-none \\\r
                data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 \\\r
                [&_svg:not([class*='size-'])]:size-4"\r
                props.class'\r
            |]\r
        )   .dataSlot("dropdown-menu-checkbox-item")\r
            .spread props {\r
            span(class' = "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center") {\r
                DropdownMenu.ItemIndicator() {\r
                    Lucide.Lucide.Check(class' = "size-4", strokeWidth = 2)\r
                }\r
            }\r
            props.children\r
        }\r
\r
[<Erase>]\r
type DropdownMenuGroupLabel() =\r
    inherit DropdownMenu.GroupLabel()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        DropdownMenu.GroupLabel(class' = Lib.cn [|\r
            "px-2 py-1.5 text-sm font-semibold" ; props.class'\r
        |]) .dataSlot("dropdown-menu-group-label")\r
            .spread props\r
    \r
\r
[<Erase>]\r
type DropdownMenuRadioItem() =\r
    inherit DropdownMenu.RadioItem()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        DropdownMenu.RadioItem(\r
            class' = Lib.cn [|\r
                "focus:bg-accent focus:text-accent-foreground relative flex \\\r
                cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 \\\r
                text-sm outline-hidden select-none data-[disabled]:pointer-events-none \\\r
                data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 \\\r
                [&_svg:not([class*='size-'])]:size-4"\r
                props.class'\r
            |]) .dataSlot("dropdown-menu-radio-item")\r
                .spread props {\r
            span(class' = "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center") {\r
                DropdownMenu.ItemIndicator() {\r
                    Lucide.Lucide.Circle(class' = "size-2 fill-current", strokeWidth = 2)\r
                }\r
            }\r
            props.children\r
        }\r
`;function d(e){const r={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...e.components},{SourceCode:t}=r;return t||L("SourceCode"),n.jsxs(n.Fragment,{children:[n.jsx(i,{of:p}),`
`,n.jsx(a,{}),`
`,n.jsx(r.h2,{id:"simple-example",children:"Simple Example"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-fsharp",children:`DropdownMenu().spread props {\r
    DropdownMenuTrigger() {\r
        "Open"\r
    }\r
    DropdownMenuContent() {\r
        DropdownMenuLabel() {\r
            "My Account"\r
        }\r
        DropdownMenuSeparator()\r
        DropdownMenuItem() { "Profile" }\r
        DropdownMenuItem() { "Billing" }\r
        DropdownMenuItem() { "Team" }\r
        DropdownMenuItem() { "Subscription" }\r
    }\r
}
`})}),`
`,n.jsx(u,{of:c,sourceState:"none",layout:"centered",withToolbar:!0}),`
`,n.jsx(m,{}),`
`,n.jsx(t,{code:I}),`
`,n.jsxs(r.blockquote,{children:[`
`,n.jsx(r.p,{children:"A more comprehensive example would look identical to the 'ContextMenu' examples."}),`
`]}),`
`,n.jsx(r.h2,{id:"components",children:"Components"}),`
`,n.jsx(r.h3,{id:"dropdownmenu",children:"DropdownMenu"}),`
`,n.jsx(o,{of:p}),`
`,n.jsx(r.h3,{id:"dropdownmenutrigger",children:"DropdownMenuTrigger"}),`
`,n.jsx(o,{of:l}),`
`,n.jsx(r.h3,{id:"dropdownmenuportal",children:"DropdownMenuPortal"}),`
`,n.jsx(o,{of:w}),`
`,n.jsx(r.h3,{id:"dropdownmenusub",children:"DropdownMenuSub"}),`
`,n.jsx(o,{of:b}),`
`,n.jsx(r.h3,{id:"dropdownmenusubcontent",children:"DropdownMenuSubContent"}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(r.h3,{id:"dropdownmenugroup",children:"DropdownMenuGroup"}),`
`,n.jsx(o,{of:f}),`
`,n.jsx(r.h3,{id:"dropdownmenuradiogroup",children:"DropdownMenuRadioGroup"}),`
`,n.jsx(o,{of:D}),`
`,n.jsx(r.h3,{id:"dropdownmenucontent",children:"DropdownMenuContent"}),`
`,n.jsx(o,{of:x}),`
`,n.jsx(r.h3,{id:"dropdownmenuitem",children:"DropdownMenuItem"}),`
`,n.jsx(o,{of:g}),`
`,n.jsx(r.h3,{id:"dropdownmenushortcut",children:"DropdownMenuShortcut"}),`
`,n.jsx(o,{of:M}),`
`,n.jsx(r.h3,{id:"dropdownmenulabel",children:"DropdownMenuLabel"}),`
`,n.jsx(o,{of:S}),`
`,n.jsx(r.h3,{id:"dropdownmenuseparator",children:"DropdownMenuSeparator"}),`
`,n.jsx(o,{of:v}),`
`,n.jsx(r.h3,{id:"dropdownmenusubtrigger",children:"DropdownMenuSubTrigger"}),`
`,n.jsx(o,{of:y}),`
`,n.jsx(r.h3,{id:"dropdownmenucheckboxitem",children:"DropdownMenuCheckboxItem"}),`
`,n.jsx(o,{of:j}),`
`,n.jsx(r.h3,{id:"dropdownmenugrouplabel",children:"DropdownMenuGroupLabel"}),`
`,n.jsx(o,{of:C}),`
`,n.jsx(r.h3,{id:"dropdownmenuradioitem",children:"DropdownMenuRadioItem"}),`
`,n.jsx(o,{of:T})]})}function Ln(e={}){const{wrapper:r}={...s(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(d,{...e})}):d(e)}function L(e,r){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Ln as default};

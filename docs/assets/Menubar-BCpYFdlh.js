import{G as r,H as p,T as d,K as u,L as m,O as n}from"./iframe-Ss2HFUgg.js";import{useMDXComponents as i}from"./index--e61kTGT.js";import{M as a,D as b}from"./Menubar.stories-BijjiySq.js";import{M as c}from"./MenubarGroup.stories-n1r4Zpmn.js";import{M as l}from"./MenubarPortal.stories-BMGh63J7.js";import{M}from"./MenubarSub.stories-Ca0HZowP.js";import{M as f}from"./MenubarRadioGroup.stories-DGUUDve0.js";import{M as x}from"./MenubarMenu.stories-ocJlq1Z2.js";import{M as h}from"./MenubarTrigger.stories-0w_UDcET.js";import{M as g}from"./MenubarContent.stories-BrQIBiuM.js";import{M as S}from"./MenubarSubTrigger.stories-D54n4mCD.js";import{M as v}from"./MenubarSubContent.stories-BcZ1uFZ-.js";import{M as y}from"./MenubarItem.stories-DOZcRe2Q.js";import{M as j}from"./MenubarCheckboxItem.stories-Dy7CuzOU.js";import{M as C}from"./MenubarRadioItem.stories-DCo13cCv.js";import{M as T}from"./MenubarItemLabel.stories-B5RG9ATd.js";import{M as L}from"./MenubarGroupLabel.stories-DrV1YafS.js";import{M as I}from"./MenubarSeparator.stories-B6iaeAkh.js";import"./preload-helper-PPVm8Dsz.js";import"./Menubar-DAEyu_82.js";import"./BOXQKWL5-CWP_9nyA.js";import"./LEK3K6R3-CGlCZOjW.js";import"./2CTBMVJ4-BJBOPr5i.js";import"./LR7LBJN3-RceSjpmp.js";import"./index-axew2xP3.js";import"./FLVHQV4A-DhRRNmDB.js";import"./index-DsOqkTmx.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-Da4i2tMy.js";import"./combineProps-Dc0BZltT.js";import"./N3GAC5SS-Cpp7-odw.js";import"./QZDH5R5B-BWDH-QCD.js";import"./FN6EICGO-DOeDID0N.js";import"./Utils-Bv7TLaDt.js";import"./SOM3K36D-DE1P6_or.js";import"./FBCYWU27-CflOAPjT.js";import"./3VFJM5NZ-sgbSJPuq.js";import"./JHMNWOLY-GWqRWAK3.js";import"./E53DB7BS-B46G7qd5.js";import"./UKTBL2JL-DisnMsyh.js";import"./OYES4GOP-BvTDlBrO.js";import"./5WXHJDCZ-DghNgBBa.js";import"./VI7QYH27-eJSdAdpK.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-D8XsDJNg.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-Dwv4USTq.js";import"./T4C3DMHT-BxeliJxY.js";import"./chevron-right-DAtHR2GY.js";import"./Icon-DzzAe45T.js";import"./check-CTSO4oyu.js";import"./circle-BZ9_H_wJ.js";const E=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
\r
[<Erase>]\r
type MenubarGroup() =\r
    inherit Menubar.Group()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Menubar.Group()\r
            .dataSlot("menubar-group")\r
            .spread props\r
    \r
[<Erase>]\r
type MenubarPortal() =\r
    inherit Menubar.Portal()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Menubar.Portal()\r
            .dataSlot("menubar-portal")\r
            .spread props\r
    \r
[<Erase>]\r
type MenubarSub() =\r
    inherit Menubar.Sub()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Menubar.Sub()\r
            .dataSlot("menubar-sub")\r
            .spread props\r
    \r
[<Erase>]\r
type MenubarRadioGroup() =\r
    inherit Menubar.RadioGroup()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Menubar.RadioGroup()\r
            .dataSlot("menubar-radio-group")\r
            .spread props\r
    \r
[<Erase>]\r
type Menubar() =\r
    inherit Kobalte.Menubar()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Menubar(class'= Lib.cn [|\r
            "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs"\r
            props.class'\r
        |]) .dataSlot("menubar")\r
            .spread props\r
\r
[<Erase>]\r
type MenubarMenu() =\r
    inherit Kobalte.Menubar.Menu()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Menubar.Menu(gutter = 8)\r
            .dataSlot("menubar-menu")\r
            .spread props\r
\r
[<Erase>]\r
type MenubarTrigger() =\r
    inherit Menubar.Trigger()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Menubar.Trigger(class' = Lib.cn [|\r
            "focus:bg-accent focus:text-accent-foreground \\\r
            data-[expanded]:bg-accent data-[expanded]:text-accent-foreground \\\r
            flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden \\\r
            select-none"\r
            props.class'\r
        |]) .dataSlot("menubar-trigger")\r
            .spread props\r
[<Erase>]\r
type MenubarContent() =\r
    inherit Menubar.Content()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        MenubarPortal() {\r
            Menubar.Content(class' = Lib.cn [|\r
                "bg-popover text-popover-foreground data-[expanded]:animate-content-show \\\r
                data-[closed]:fade-out-0 data-[expanded]:fade-in-0 \\\r
                data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 \\\r
                data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 \\\r
                data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 \\\r
                z-50 min-w-[12rem] origin-(--kb-popper-content-transform-origin) \\\r
                overflow-hidden rounded-md border p-1 shadow-md"\r
                // "z-50 min-w-48 origin-[var(--kb-menu-content-transform-origin)] animate-content-hide\r
                // overflow-hidden rounded-md border bg-popover\r
                // p-1 text-popover-foreground shadow-md data-[expanded]:animate-content-show"\r
                props.class'\r
            |]) .dataSlot("menubar-content")\r
                .spread props\r
        }\r
[<Erase>]\r
type MenubarSubTrigger() =\r
    inherit Menubar.SubTrigger()\r
    [<Erase>]\r
    member val inset: bool = jsNative with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Menubar.SubTrigger(class'=Lib.cn [|\r
            "focus:bg-accent focus:text-accent-foreground data-[expanded]:bg-accent \\\r
            data-[expanded]:text-accent-foreground flex cursor-default items-center \\\r
            rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8"\r
            props.class'\r
        |]) .data("inset", unbox props.inset)\r
            .dataSlot("menubar-sub-trigger")\r
            .spread(props) {\r
            props.children\r
            Lucide.Lucide.ChevronRight(class' = "ml-auto size-4", strokeWidth = 2)\r
        }\r
[<Erase>]\r
type MenubarSubContent() =\r
    inherit Menubar.SubContent()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        MenubarPortal() {\r
            Menubar.SubContent(class' = Lib.cn [|\r
                "bg-popover text-popover-foreground data-[expanded]:animate-in \\\r
                data-[closed]:animate-out data-[closed]:fade-out-0 \\\r
                data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 \\\r
                data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 \\\r
                data-[side=left]:slide-in-from-right-2 \\\r
                data-[side=right]:slide-in-from-left-2 \\\r
                data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] \\\r
                origin-(--kb-popper-content-transform-origin) overflow-hidden \\\r
                rounded-md border p-1 shadow-lg"\r
                props.class'\r
            |]) .dataSlot("menubar-sub-content")\r
                .spread(props)\r
        }\r
[<Erase>]\r
module MenubarItem =\r
    type Variant = ContextMenuItem.Variant\r
[<Erase>]\r
type MenubarItem() =\r
    inherit Menubar.Item()\r
    [<Erase>]\r
    member val variant: MenubarItem.Variant = JS.undefined with get,set\r
    [<Erase>]\r
    member val inset: bool = jsNative with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        props.variant <- MenubarItem.Variant.Default\r
        Menubar.Item(class' = Lib.cn [|\r
            "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive \\\r
            data-[variant=destructive]:focus:bg-destructive/10 \\\r
            dark:data-[variant=destructive]:focus:bg-destructive/20 \\\r
            data-[variant=destructive]:focus:text-destructive \\\r
            data-[variant=destructive]:*:[svg]:!text-destructive \\\r
            [&_svg:not([class*='text-'])]:text-muted-foreground relative flex \\\r
            cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm \\\r
            outline-hidden select-none data-[disabled]:pointer-events-none \\\r
            data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none \\\r
            [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"\r
            props.class'\r
        |]) .data("inset", unbox props.inset)\r
            .data("variant", string props.variant)\r
            .dataSlot("menubar-item")\r
            .spread(props)\r
[<Erase>]\r
type MenubarCheckboxItem() =\r
    inherit Menubar.CheckboxItem()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Menubar.CheckboxItem(class'= Lib.cn [|\r
            "focus:bg-accent focus:text-accent-foreground relative flex \\\r
            cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 \\\r
            text-sm outline-hidden select-none data-[disabled]:pointer-events-none \\\r
            data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 \\\r
            [&_svg:not([class*='size-'])]:size-4"\r
            props.class'\r
        |]) .dataSlot("menubar-checkbox-item")\r
            .spread(props) {\r
            span(class'="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center") {\r
                Menubar.ItemIndicator() {\r
                    Lucide.Lucide.Check(class'="size-4",strokeWidth = 2)\r
                }\r
            }\r
            props.children\r
        }\r
[<Erase>]\r
type MenubarRadioItem() =\r
    inherit Menubar.RadioItem()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Menubar.RadioItem(class' = Lib.cn [|\r
            "focus:bg-accent focus:text-accent-foreground relative flex cursor-default \\\r
            items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden \\\r
            select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 \\\r
            [&_svg]:pointer-events-none [&_svg]:shrink-0 \\\r
            [&_svg:not([class*='size-'])]:size-4"\r
            props.class'\r
        |]) .dataSlot("menubar-radio-item")\r
            .spread(props) {\r
            span(class'="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center") {\r
                Lucide.Lucide.Circle(class'="size-2 fill-current", strokeWidth=2)\r
            }\r
            props.children\r
        }\r
[<Erase>]\r
type MenubarItemLabel() =\r
    inherit Menubar.ItemLabel()\r
    [<Erase>]\r
    member val inset: bool = jsNative with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Menubar.ItemLabel(class'=Lib.cn [|\r
            "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8"\r
            props.class'\r
        |]) .data("inset", unbox props.inset)\r
            .dataSlot("menubar-item-label")\r
            .spread(props)\r
[<Erase>]\r
type MenubarGroupLabel() =\r
    inherit Menubar.GroupLabel()\r
    [<Erase>]\r
    member val inset: bool = jsNative with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Menubar.GroupLabel(class' = Lib.cn [|\r
            "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8"\r
            props.class'\r
        |]) .data("inset", unbox props.inset)\r
            .dataSlot("menubar-group-label")\r
            .spread(props)\r
[<Erase>]\r
type MenubarSeparator() =\r
    inherit Menubar.Separator()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Menubar.Separator(class' = Lib.cn [|\r
            "-mx-1 my-1 h-px bg-border"; props.class'\r
        |]) .dataSlot("menubar-separator")\r
            .spread(props)\r
[<Erase>]\r
type MenubarShortcut() =\r
    inherit span()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        span(class' = Lib.cn [|\r
            "ml-auto text-xs tracking-widest text-muted-foreground"\r
            props.class'\r
        |]) .dataSlot("menubar-shortcut")\r
            .spread props\r
\r
`;function s(t){const e={h2:"h2",h3:"h3",...i(),...t.components},{SourceCode:o}=e;return o||w("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:a}),`
`,r.jsx(d,{}),`
`,r.jsx(u,{of:b,sourceState:"none",withToolbar:!0}),`
`,r.jsx(m,{}),`
`,r.jsx(o,{code:E}),`
`,r.jsx(e.h2,{id:"components",children:"Components"}),`
`,r.jsx(e.h3,{id:"menubar",children:"Menubar"}),`
`,r.jsx(n,{of:a}),`
`,r.jsx(e.h3,{id:"menubargroup",children:"MenubarGroup"}),`
`,r.jsx(n,{of:c}),`
`,r.jsx(e.h3,{id:"menubarportal",children:"MenubarPortal"}),`
`,r.jsx(n,{of:l}),`
`,r.jsx(e.h3,{id:"menubarsub",children:"MenubarSub"}),`
`,r.jsx(n,{of:M}),`
`,r.jsx(e.h3,{id:"menubarradiogroup",children:"MenubarRadioGroup"}),`
`,r.jsx(n,{of:f}),`
`,r.jsx(e.h3,{id:"menubarmenu",children:"MenubarMenu"}),`
`,r.jsx(n,{of:x}),`
`,r.jsx(e.h3,{id:"menubartrigger",children:"MenubarTrigger"}),`
`,r.jsx(n,{of:h}),`
`,r.jsx(e.h3,{id:"menubarcontent",children:"MenubarContent"}),`
`,r.jsx(n,{of:g}),`
`,r.jsx(e.h3,{id:"menubarsubtrigger",children:"MenubarSubTrigger"}),`
`,r.jsx(n,{of:S}),`
`,r.jsx(e.h3,{id:"menubarsubcontent",children:"MenubarSubContent"}),`
`,r.jsx(n,{of:v}),`
`,r.jsx(e.h3,{id:"menubaritem",children:"MenubarItem"}),`
`,r.jsx(n,{of:y}),`
`,r.jsx(e.h3,{id:"menubarcheckboxitem",children:"MenubarCheckboxItem"}),`
`,r.jsx(n,{of:j}),`
`,r.jsx(e.h3,{id:"menubarradioitem",children:"MenubarRadioItem"}),`
`,r.jsx(n,{of:C}),`
`,r.jsx(e.h3,{id:"menubaritemlabel",children:"MenubarItemLabel"}),`
`,r.jsx(n,{of:T}),`
`,r.jsx(e.h3,{id:"menubargrouplabel",children:"MenubarGroupLabel"}),`
`,r.jsx(n,{of:L}),`
`,r.jsx(e.h3,{id:"menubarseparator",children:"MenubarSeparator"}),`
`,r.jsx(n,{of:I})]})}function wr(t={}){const{wrapper:e}={...i(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(s,{...t})}):s(t)}function w(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{wr as default};

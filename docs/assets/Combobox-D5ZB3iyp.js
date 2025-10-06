import{G as o,H as C,T as u,K as h,L as f,O as e}from"./iframe-Ss2HFUgg.js";import{useMDXComponents as x}from"./index--e61kTGT.js";import{M as g,D as S}from"./Combobox.stories-B51A9chk.js";import{I as m}from"./ComboboxItem.stories-D78IlYQv.js";import{I as i}from"./ComboboxItemLabel.stories-DHwu8DPk.js";import{I as s}from"./ComboboxItemIndicator.stories-CEMDF0zD.js";import{S as p}from"./ComboboxSection.stories-DdSn2BvT.js";import{C as a}from"./ComboboxControl.stories-BYN6ZjPq.js";import{I as b}from"./ComboboxInput.stories-CAb96Dei.js";import{T as c}from"./ComboboxTrigger.stories-BQTs3jOL.js";import{C as l}from"./ComboboxContent.stories-BAvkR7i1.js";import"./preload-helper-PPVm8Dsz.js";import"./Combobox-BGb85EZ6.js";import"./2I3Q5YLM-BthBBhIr.js";import"./QZDH5R5B-BWDH-QCD.js";import"./index-DsOqkTmx.js";import"./index-axew2xP3.js";import"./LR7LBJN3-RceSjpmp.js";import"./FN6EICGO-DOeDID0N.js";import"./Utils-Bv7TLaDt.js";import"./ZZYKR3VO-B31dcm3B.js";import"./OYES4GOP-BvTDlBrO.js";import"./FLVHQV4A-DhRRNmDB.js";import"./index-Da4i2tMy.js";import"./JNCCF6MP-4sxnBYeu.js";import"./N3GAC5SS-Cpp7-odw.js";import"./5WXHJDCZ-DghNgBBa.js";import"./2CTBMVJ4-BJBOPr5i.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./combineProps-Dc0BZltT.js";import"./FBCYWU27-CflOAPjT.js";import"./3VFJM5NZ-sgbSJPuq.js";import"./JHMNWOLY-GWqRWAK3.js";import"./E53DB7BS-B46G7qd5.js";import"./NGHEENNE-CpMefcT9.js";import"./index-D8XsDJNg.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-Dwv4USTq.js";import"./UKTBL2JL-DisnMsyh.js";import"./check-CTSO4oyu.js";import"./Icon-DzzAe45T.js";const I=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
open Fable.Core.JsInterop\r
\r
[<Erase>]\r
type Combobox<'Value>() =\r
    inherit Kobalte.Combobox<'Value>()\r
    // member val options: 'T[] = jsNative with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Combobox()\r
            .dataSlot("combobox")\r
            .spread props\r
[<Erase>]\r
type ComboboxItemLabel() =\r
    inherit Combobox.ItemLabel()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Combobox.ItemLabel()\r
            .dataSlot("combobox-item-label")\r
            .spread props\r
        \r
[<Erase>]\r
type ComboboxHiddenSelect() =\r
    inherit Combobox.HiddenSelect()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Combobox.HiddenSelect().spread props\r
[<Erase>]\r
type ComboboxItem<'Value>() =\r
    inherit Combobox.Item<'Value>()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        let class_ = fun () -> Lib.cn [|\r
            "relative flex cursor-default select-none items-center\r
            justify-between rounded-sm px-2 py-1.5 text-sm outline-none\r
            data-[disabled]:pointer-events-none data-[highlighted]:bg-accent\r
            data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50"\r
            props.class'\r
        |]\r
        Combobox.Item<'Value>()\r
            .dataSlot("combobox-item")\r
            .attr("class", class_())\r
            .spread props\r
[<Erase>]\r
type ComboboxItemIndicator() =\r
    inherit Combobox.ItemIndicator()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Combobox.ItemIndicator()\r
            .dataSlot("combobox-item-indicator")\r
            .spread(props) {\r
             props.children &&= Lucide.Lucide.Check(class' = "size-4", strokeWidth = 2) \r
        }\r
[<Erase>]\r
type ComboboxSection() =\r
    inherit Combobox.Section()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Combobox.Section(class'= Lib.cn [|\r
            "overflow-hidden p-1 px-2 py-1.5 text-xs font-medium text-muted-foreground"\r
            props.class'\r
        |]) .dataSlot("combobox-section")\r
            .spread(props)\r
[<Erase>]\r
type ComboboxControl<'Value>() =\r
    inherit Combobox.Control<'Value>()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        let class_ = fun () -> Lib.cn [|\r
            "flex h-10 items-center rounded-md border px-3"\r
            props.class'\r
        |]\r
        Combobox.Control<'Value>()\r
            .dataSlot("combobox-control")\r
            .attr("class", class_())\r
            .spread(props)\r
type ComboboxControl = ComboboxControl<obj>\r
[<Erase>]\r
type ComboboxInput() =\r
    inherit Combobox.Input()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Combobox.Input(class' = Lib.cn [|\r
            "flex size-full rounded-md bg-transparent py-3\r
            text-sm outline-none placeholder:text-muted-foreground\r
            disabled:cursor-not-allowed disabled:opacity-50"\r
            props.class'\r
        |]) .dataSlot("combobox-control")\r
            .spread(props)\r
    \r
[<Erase>]\r
type ComboboxTrigger() =\r
    inherit Combobox.Trigger()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Combobox.Trigger(class' = Lib.cn [| "size-4 opacity-50" ; props.class' |])\r
            .dataSlot("combobox-trigger")\r
            .spread(props) {\r
            Combobox.Icon() {\r
                props.children ??= unbox (Lucide.Lucide.ArrowUpDown(class'="size-4"))\r
            }\r
        }\r
    \r
[<Erase>]\r
type ComboboxContent() =\r
    inherit Combobox.Content()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Combobox.Portal() {\r
            Combobox.Content(class' = Lib.cn [|\r
                "relative z-50 min-w-32 overflow-hidden\r
                rounded-md border bg-popover\r
                text-popover-foreground shadow-md animate-in fade-in-80"\r
                props.class'\r
            |]) .dataSlot("combobox-content")\r
                .spread(props) {\r
                Combobox.Listbox(class'="m-0 p-1")\r
            }\r
        }\r
`;function d(n){const r={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...x(),...n.components},{SourceCode:t}=r;return t||y("SourceCode"),o.jsxs(o.Fragment,{children:[o.jsx(C,{of:g}),`
`,o.jsx(u,{}),`
`,o.jsx(r.p,{children:`The usage of a combobox is a bit more involved; however, it is a powerful construct\r
that is quick to get going when you get the hang of its composition.`}),`
`,o.jsx(r.h4,{id:"minimal-example",children:"Minimal Example"}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-fsharp",children:`Combobox<string>(\r
    itemComponent = ( fun (itemProps: Kobalte.ItemComponentProps<string>) ->\r
        ComboboxItem(item = itemProps.item) {\r
            ComboboxItemLabel() {\r
                itemProps.item.rawValue\r
            }\r
            ComboboxItemIndicator()\r
        }\r
        )\r
    ).spread props {\r
    ComboboxControl() { yield fun _ -> Fragment() {\r
        ComboboxInput()\r
        ComboboxTrigger()\r
    } }\r
    ComboboxContent()\r
}
`})}),`
`,o.jsx(h,{of:S,layout:"center",sourceState:"none",withToolbar:!0}),`
`,o.jsx(f,{}),`
`,o.jsx(t,{code:I}),`
`,o.jsx(r.h3,{id:"comboboxitem",children:"ComboboxItem"}),`
`,o.jsx(e,{of:m,meta:m}),`
`,o.jsx(r.h3,{id:"comboboxitemlabel",children:"ComboboxItemLabel"}),`
`,o.jsx(e,{of:i,meta:i}),`
`,o.jsx(r.h3,{id:"comboboxitemindicator",children:"ComboboxItemIndicator"}),`
`,o.jsx(e,{of:s,meta:s}),`
`,o.jsx(r.h3,{id:"comboboxsection",children:"ComboboxSection"}),`
`,o.jsx(e,{of:p,meta:p}),`
`,o.jsx(r.h3,{id:"comboboxcontrol",children:"ComboboxControl"}),`
`,o.jsx(e,{of:a,meta:a}),`
`,o.jsx(r.h3,{id:"comboboxinput",children:"ComboboxInput"}),`
`,o.jsx(e,{of:b,meta:b}),`
`,o.jsx(r.h3,{id:"comboboxtrigger",children:"ComboboxTrigger"}),`
`,o.jsx(e,{of:c,meta:c}),`
`,o.jsx(r.h3,{id:"comboboxcontent",children:"ComboboxContent"}),`
`,o.jsx(e,{of:l,meta:l})]})}function co(n={}){const{wrapper:r}={...x(),...n.components};return r?o.jsx(r,{...n,children:o.jsx(d,{...n})}):d(n)}function y(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{co as default};

import{H as o,I as C,T as u,L as h,N as f,Q as e}from"./iframe-DHSEN8D7.js";import{useMDXComponents as x}from"./index-e4aCb-2o.js";import{M as g,D as S}from"./Combobox.stories-DkPL2Ny-.js";import{I as m}from"./ComboboxItem.stories-C-En8kTo.js";import{I as i}from"./ComboboxItemLabel.stories-DEQ072sT.js";import{I as s}from"./ComboboxItemIndicator.stories-BZ06zwpL.js";import{S as p}from"./ComboboxSection.stories-B9lsS53y.js";import{C as a}from"./ComboboxControl.stories-CXO8oFX3.js";import{I as b}from"./ComboboxInput.stories-rYjGlwx4.js";import{T as c}from"./ComboboxTrigger.stories-BvBiJ-fT.js";import{C as l}from"./ComboboxContent.stories-BMiPn29R.js";import"./preload-helper-PPVm8Dsz.js";import"./Combobox-Cn1ZV3UT.js";import"./2I3Q5YLM-Cxvo6qWJ.js";import"./QZDH5R5B-C5rmEo9L.js";import"./index-CX5o166x.js";import"./index-SvhdUoxj.js";import"./LR7LBJN3-B1LX4Q8m.js";import"./FN6EICGO-CNc9l087.js";import"./Utils-CzREY3kc.js";import"./ZZYKR3VO-sS--fHny.js";import"./OYES4GOP-D4sXc2ip.js";import"./FLVHQV4A-VgAG7mUH.js";import"./index-1c5Tq1Kt.js";import"./JNCCF6MP-4sxnBYeu.js";import"./N3GAC5SS-EuMAo5Zl.js";import"./5WXHJDCZ-DghNgBBa.js";import"./2CTBMVJ4-Db2FGNLe.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./combineProps-ChBwTExo.js";import"./FBCYWU27-BRaomcyy.js";import"./3VFJM5NZ-DDmjFnWc.js";import"./JHMNWOLY-BX05bB8i.js";import"./E53DB7BS-C475FHrG.js";import"./NGHEENNE-Dj0dKL4v.js";import"./index-B53RNSLG.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-ptAOXcxb.js";import"./UKTBL2JL-D9vX2QTQ.js";import"./check-B6yQMYMS.js";import"./Icon-By-Qgdq5.js";const I=`\uFEFFnamespace Partas.Solid.UI\r
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

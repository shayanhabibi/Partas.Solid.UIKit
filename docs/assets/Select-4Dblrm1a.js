import{G as e,H as i,T as p,K as c,L as d,O as t}from"./iframe-BLvaHOrW.js";import{useMDXComponents as l}from"./index-DMt2PYli.js";import{S as a,D as m}from"./Select.stories-B7m3QlTo.js";import{S as u}from"./SelectValue.stories-DQC5r_y_.js";import{S}from"./SelectHiddenSelect.stories-Dz8mqakm.js";import{S as b}from"./SelectTrigger.stories-BimBrZrb.js";import{S as f}from"./SelectContent.stories-DlNUBNXm.js";import{S as g}from"./SelectItem.stories-Ddw-_z-J.js";import{S as h}from"./SelectLabel.stories-LfAASGQu.js";import{S as x}from"./SelectDescription.stories-DjAHnPxL.js";import{S as v}from"./SelectErrorMessage.stories-DosnBIMs.js";import"./preload-helper-PPVm8Dsz.js";import"./Select-Czz5SEqg.js";import"./2I3Q5YLM-BbFKOSx0.js";import"./QZDH5R5B-B67Wfj3u.js";import"./index-TpYiyspx.js";import"./index-C2xVdcqa.js";import"./LR7LBJN3-DXU4Tgxl.js";import"./FN6EICGO-DozerlcD.js";import"./Utils-BEjpZvS7.js";import"./ZZYKR3VO-CUrFF4yS.js";import"./OYES4GOP-DJL3U5Gx.js";import"./FLVHQV4A-ByRBKILc.js";import"./index-BbcR3rHk.js";import"./JNCCF6MP-4sxnBYeu.js";import"./N3GAC5SS-BuWycjLR.js";import"./5WXHJDCZ-DghNgBBa.js";import"./2CTBMVJ4-B0PPoY8r.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./combineProps-TuyxsfEg.js";import"./FBCYWU27-BMpJGD58.js";import"./3VFJM5NZ-Df8-87fx.js";import"./JHMNWOLY-CsDzS1Uk.js";import"./E53DB7BS-DgMsdUV6.js";import"./UKTBL2JL-mrSn-dg4.js";import"./NGHEENNE-Cx8CCgiw.js";import"./index-BAQLNUOo.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-D5LuZuuz.js";import"./Icon-BmtgjGtw.js";import"./check-CGkZo0Og.js";import"./Option-B9lMbA8r.js";import"./Util-jMr-gVD5.js";const y=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Browser.Types\r
open Partas.Solid\r
open Partas.Solid.Lucide\r
open Partas.Solid.Kobalte\r
open Partas.Solid.Polymorphism\r
open Fable.Core\r
open Partas.Solid.Aria\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
\r
[<Erase>]\r
type Select<'T>() =\r
    inherit Kobalte.Select<'T>()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Select()\r
            .dataSlot("select")\r
            .spread props\r
type Select = Select<obj>\r
\r
[<Erase>]\r
type SelectValue<'T>() =\r
    inherit Select.Value<'T>()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Select.Value()\r
            .dataSlot("select-value")\r
            .spread props\r
type SelectValue = SelectValue<obj>\r
[<Erase>]\r
type SelectHiddenSelect() =\r
    inherit Select.HiddenSelect()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Select.HiddenSelect()\r
            .dataSlot("select-hidden")\r
            .spread props\r
    \r
[<Erase>]\r
module SelectTrigger =\r
    [<StringEnum>]\r
    type Size =\r
        | Small\r
        | Default\r
[<Erase>]\r
type SelectTrigger() =\r
    inherit Select.Trigger()\r
    [<Erase>]\r
    member val size: SelectTrigger.Size = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        props.size <- SelectTrigger.Size.Default\r
        Select.Trigger(class'= Lib.cn [|\r
            "border-input data-[placeholder]:text-muted-foreground \\\r
            [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring \\\r
            focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 \\\r
            dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive \\\r
            dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center \\\r
            justify-between gap-2 rounded-md border bg-transparent px-3 py-2 \\\r
            text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] \\\r
            outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed \\\r
            disabled:opacity-50 data-[size=default]:h-9 data-[size=small]:h-8 \\\r
            *:data-[slot=select-value]:line-clamp-1 \\\r
            *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center \\\r
            *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none \\\r
            [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"\r
            // "flex h-10 w-full items-center justify-between rounded-md\r
            // border border-input bg-transparent px-3 py-2 text-sm\r
            // ring-offset-background placeholder:text-muted-foreground\r
            // focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2\r
            // disabled:cursor-not-allowed disabled:opacity-50"\r
            props.class'\r
        |]) .data("size", string props.size)\r
            .dataSlot("select-trigger")\r
            .spread(props) {\r
            props.children\r
            Select.Icon().as'(ChevronsUpDown(class' = "size-4 opacity-50"))\r
        }\r
[<Erase>]\r
type SelectContent() =\r
    inherit Select.Content()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Select.Portal().dataSlot("select-portal") {\r
            Select.Content(class' = Lib.cn [|\r
                "bg-popover text-popover-foreground data-[expanded]:animate-in \\\r
                data-[closed]:animate-out data-[closed]:fade-out-0 \\\r
                data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 \\\r
                data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 \\\r
                data-[side=left]:slide-in-from-right-2 \\\r
                data-[side=right]:slide-in-from-left-2 \\\r
                data-[side=top]:slide-in-from-bottom-2 relative z-50 \\\r
                max-h-(--kb-popper-content-available-height) min-w-[8rem] \\\r
                origin-(--kb-popper-content-transform-origin) overflow-x-hidden \\\r
                overflow-y-auto rounded-md border shadow-md"\r
                // "relative z-50 min-w-32 overflow-hidden rounded-md border\r
                // bg-popover text-popover-foreground shadow-md animate-in fade-in-80"\r
                props.class'\r
            |]) .dataSlot("select-content")\r
                .spread(props) {\r
                Select.Listbox(class' = "m-0 p-1")\r
            }\r
        }\r
[<Erase>]\r
type SelectItem() =\r
    inherit Select.Item()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Select.Item(class' = Lib.cn [|\r
            "focus:bg-accent focus:text-accent-foreground \\\r
            [&_svg:not([class*='text-'])]:text-muted-foreground relative flex \\\r
            w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 \\\r
            pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none \\\r
            data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 \\\r
            [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex \\\r
            *:[span]:last:items-center *:[span]:last:gap-2"\r
            props.class'\r
        |]) .dataSlot("select-item")\r
            .spread(props) {\r
            span(class' = "absolute right-2 flex size-3.5 items-center justify-center") {\r
                Select.ItemIndicator()\r
                    .dataSlot("select-indicator") {\r
                    Check(class'="size-4", strokeWidth = 2)\r
                }\r
            }\r
            Select.ItemLabel().dataSlot("select-label") { props.children }\r
        }\r
\r
[<Erase>]\r
module SelectLabel =\r
    [<RequireQualifiedAccess; StringEnum>]\r
    type Variant =\r
        | Label\r
        | Description\r
        | Error\r
\r
[<Erase>]\r
type SelectLabel() =\r
    inherit Select.Label()\r
    static member variants (?variant: SelectLabel.Variant): string =\r
        let variant = defaultArg variant SelectLabel.Variant.Label\r
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed\r
        peer-disabled:opacity-70 " +\r
        match variant with\r
        | SelectLabel.Variant.Label -> "data-[invalid]:text-destructive"\r
        | SelectLabel.Variant.Description -> "font-normal text-muted-foreground"\r
        | SelectLabel.Variant.Error -> "text-xs text-destructive"\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Select.Label(class' = Lib.cn [|\r
            SelectLabel.variants()\r
            props.class'\r
        |]).spread props\r
\r
[<Erase>]\r
type SelectDescription() =\r
    inherit Select.Description()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Select.Description(class' = Lib.cn [|\r
            SelectLabel.variants(SelectLabel.Variant.Description)\r
            props.class'\r
        |]).spread props\r
\r
[<Erase>]\r
type SelectErrorMessage() =\r
    inherit Select.ErrorMessage()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Select.ErrorMessage(class' = Lib.cn [|\r
            SelectLabel.variants(SelectLabel.Variant.Error)\r
            props.class'\r
        |]).spread props\r
\r
[<AutoOpen; Erase>]\r
module SelectModularForms =\r
    [<Erase; RequireQualifiedAccess>]\r
    module ModularForms =\r
        type private DV = DefaultValueAttribute\r
        \r
        open Fable.Core.JsInterop\r
        open System\r
        type Select<'T> = Kobalte.Select<'T>\r
\r
        [<Erase>]\r
        type SelectForm<'T when 'T: equality>() =\r
            inherit Select<'T>()\r
            [<DV>] val mutable label: string\r
            [<DV>] val mutable error: string\r
            [<DV>] val mutable private ref: Element\r
            [<DV>] val mutable onInput: (InputEvent -> unit)\r
            [<DV>] val mutable onBlur: (FocusEvent -> unit)\r
            [<DV>] val mutable mapOptionValue: ('T -> obj)\r
            [<DV>] val mutable mapOptionText: ('T -> string)\r
            [<SolidTypeComponent>]\r
            member props.constructor =\r
                let getValue, setValue = createSignal<'T>(Unchecked.defaultof<'T>)\r
                createEffect(fun () ->\r
                    setValue(props.options |> Array.tryFind( fun opt -> props.value = opt) |> unbox)\r
                )\r
                let rootProps, selectProps = splitProps(props, [|\r
                    "name"\r
                    "placeholder"\r
                    "options"\r
                    "required"\r
                    "disabled"\r
                |], [|\r
                    "onInput"\r
                    "onChange"\r
                    "onBlur"\r
                    "ref"\r
                    "placeholder"\r
                |])\r
                \r
                Kobalte.Select(\r
                    multiple = false\r
                    ,value = getValue()\r
                    ,onChange = !!setValue\r
                    ,optionValue = !!props.mapOptionValue\r
                    ,optionTextValue = !!props.mapOptionText\r
                    ,validationState = if !!props.error then ValidationState.Invalid else ValidationState.Valid\r
                    ,itemComponent = (fun comp ->\r
                        SelectItem(item = comp.item) { comp.item.textValue })\r
                ).spread(rootProps) {\r
                    Show(when' = !!props.label) {\r
                        SelectLabel() { props.label }\r
                    }\r
                    SelectHiddenSelect().spread selectProps\r
                    SelectTrigger() {\r
                        SelectValue<'T>() {\r
                            yield fun state ->\r
                                if isNullOrUndefined props.mapOptionText then\r
                                    state.selectedOption() |> unbox<HtmlElement>\r
                                else\r
                                    state.selectedOption() |> props.mapOptionText |> unbox<HtmlElement>\r
                        }\r
                    }\r
                    SelectContent()\r
                    SelectErrorMessage() { props.error }\r
                }\r
`;function s(n){const r={h2:"h2",h3:"h3",...l(),...n.components},{SourceCode:o}=r;return o||T("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(p,{}),`
`,e.jsx(c,{of:m}),`
`,e.jsx(d,{}),`
`,e.jsx(o,{code:y}),`
`,e.jsx(r.h2,{id:"components",children:"Components"}),`
`,e.jsx(r.h3,{id:"select",children:"Select"}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(r.h3,{id:"selectvalue",children:"SelectValue"}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(r.h3,{id:"selecthiddenselect",children:"SelectHiddenSelect"}),`
`,e.jsx(t,{of:S}),`
`,e.jsx(r.h3,{id:"selecttrigger",children:"SelectTrigger"}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(r.h3,{id:"selectcontent",children:"SelectContent"}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(r.h3,{id:"selectitem",children:"SelectItem"}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(r.h3,{id:"selectlabel",children:"SelectLabel"}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(r.h3,{id:"selectdescription",children:"SelectDescription"}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(r.h3,{id:"selecterrormessage",children:"SelectErrorMessage"}),`
`,e.jsx(t,{of:v})]})}function ue(n={}){const{wrapper:r}={...l(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}function T(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ue as default};

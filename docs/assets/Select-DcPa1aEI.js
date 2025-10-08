import{H as e,I as p,T as c,L as l,N as d,Q as t}from"./iframe-DHSEN8D7.js";import{useMDXComponents as s}from"./index-e4aCb-2o.js";import{S as a,D as m,V as u}from"./Select.stories-C1TXfaRI.js";import{S}from"./SelectValue.stories-Boh5xaKD.js";import{S as b}from"./SelectHiddenSelect.stories-0c_RdP0h.js";import{S as f}from"./SelectTrigger.stories-BqgaJzh1.js";import{S as h}from"./SelectContent.stories-BqNujDiI.js";import{S as g}from"./SelectItem.stories-BJwvZQD7.js";import{S as x}from"./SelectLabel.stories-CXXd7mWH.js";import{S as v}from"./SelectDescription.stories-DOZ5QvS0.js";import{S as y}from"./SelectErrorMessage.stories-CJNdA6gY.js";import"./preload-helper-PPVm8Dsz.js";import"./Seq-ByxJMUaL.js";import"./Util-DXwscfZV.js";import"./Types-CqbaJdUC.js";import"./Option-DlNMNgAB.js";import"./FSharp.Core-D1Pte0FF.js";import"./String-DLdTzCOk.js";import"./Array-C0Iq9Aiw.js";import"./List-CXqaB21e.js";import"./Select-DMBgPApH.js";import"./2I3Q5YLM-Cxvo6qWJ.js";import"./QZDH5R5B-C5rmEo9L.js";import"./index-CX5o166x.js";import"./index-SvhdUoxj.js";import"./LR7LBJN3-B1LX4Q8m.js";import"./FN6EICGO-CNc9l087.js";import"./Utils-CzREY3kc.js";import"./ZZYKR3VO-sS--fHny.js";import"./OYES4GOP-D4sXc2ip.js";import"./FLVHQV4A-VgAG7mUH.js";import"./index-1c5Tq1Kt.js";import"./JNCCF6MP-4sxnBYeu.js";import"./N3GAC5SS-EuMAo5Zl.js";import"./5WXHJDCZ-DghNgBBa.js";import"./2CTBMVJ4-Db2FGNLe.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./combineProps-ChBwTExo.js";import"./FBCYWU27-BRaomcyy.js";import"./3VFJM5NZ-DDmjFnWc.js";import"./JHMNWOLY-BX05bB8i.js";import"./E53DB7BS-C475FHrG.js";import"./UKTBL2JL-D9vX2QTQ.js";import"./NGHEENNE-Dj0dKL4v.js";import"./index-B53RNSLG.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-ptAOXcxb.js";import"./Icon-By-Qgdq5.js";import"./check-B6yQMYMS.js";const V=`\uFEFFnamespace Partas.Solid.UI\r
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
            Select.Icon().as'(Lucide.ChevronsUpDown(class' = "size-4 opacity-50"))\r
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
                if unbox props.children then\r
                    props.children\r
                else\r
                    Select.Listbox(class' = "m-0 p-1")\r
            }\r
        }\r
[<Erase>]\r
type SelectItem() =\r
    inherit Select.Item()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Select.Item(\r
            class' = Lib.cn [|\r
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
                    Lucide.Check(class'="size-4", strokeWidth = 2)\r
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
`,w=`\uFEFFmodule Partas.Solid.UI.stories.Components.Select.Selectstories\r
\r
open Browser.Types\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Partas.Solid.UI\r
open Partas.Solid.Style\r
open Partas.Solid.Storybook\r
open Partas.Solid.TanStack.Virtual\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
open System\r
\r
type IOptionValue =\r
    abstract value: string\r
    abstract label: string\r
    abstract disabled: bool\r
[<SolidComponent>]\r
let private VirtualisationEx () =\r
    let options: IOptionValue[] = [|\r
        for i in 0..100_000 do\r
            {| value = string i; label = $"Value #{i}"; disabled = false |}\r
            |> unbox<IOptionValue>\r
    |]\r
    let listboxRef,setListboxRef = createSignal<Element>(undefined)\r
    let virtualizer =\r
        createVirtualizer<IOptionValue>(\r
            count = options.Length,\r
            getScrollElement = fun () -> listboxRef() |> unbox<HtmlElement> |> Some\r
            ,getItemKey = fun i -> !^options[int i].value\r
            ,estimateSize = fun _ -> 32\r
            ,overscan = 5\r
            )\r
    Select<IOptionValue>(\r
        virtualized = true,\r
        options = options,\r
        optionValue = (_.value >> (!^)),\r
        optionTextValue = _.label,\r
        optionDisabled = _.disabled) {\r
        SelectTrigger(class' = "w-[180px]") {\r
            SelectValue<IOptionValue>() { yield fun state ->\r
                span() { state.selectedOption().label } }\r
        }\r
        SelectContent() {\r
            Select.Listbox<IOptionValue>(\r
                    scrollToItem = fun key ->\r
                        virtualizer.scrollToIndex.Invoke(options |> Array.findIndex(_.value >> (=) key))\r
                    )\r
                .ref(setListboxRef)\r
                .style'([\r
                    Style.width "100%"\r
                    Style.height "200px"\r
                    Style.overflow Overflow.Auto\r
                ])  { yield fun items ->\r
                     div().style'([\r
                         Style.height $"{virtualizer.getTotalSize()}px"\r
                         Style.width "100%"\r
                         Style.position Position.Relative\r
                     ]) {\r
                         For(each = virtualizer.getVirtualItems.Invoke()) { yield fun virtualRow _ ->\r
                             let item = items().getItem(!!virtualRow.key)\r
                             if item.IsSome then\r
                                 let value = item.Value\r
                                 SelectItem(item = value).style'([\r
                                     Style.position Position.Absolute\r
                                     Style.top "0"\r
                                     Style.left "0"\r
                                     Style.width "100%"\r
                                     Style.height $"{virtualRow.size}px"\r
                                     Style.transform $"translateY({virtualRow.start}px)"\r
                                 ]) {\r
                                     value.rawValue.label\r
                                 }\r
                             else undefined\r
                         }\r
                     }\r
                     }\r
        }\r
    }\r
    \r
[<PartasStorybook>]\r
let private meta = storybook<Select> {\r
    cases (fun props ->\r
        match props.validationState with\r
        | Valid -> failwith "todo"\r
        | Invalid when props.validationState = Valid -> failwith "todo"\r
        | _ -> ()\r
        match props.placement with\r
        | KobaltePlacement.Top -> failwith "todo"\r
        | KobaltePlacement.TopLeft -> failwith "todo"\r
        | KobaltePlacement.TopRight -> failwith "todo"\r
        | KobaltePlacement.Bottom -> failwith "todo"\r
        | KobaltePlacement.BottomLeft -> failwith "todo"\r
        | KobaltePlacement.BottomRight -> failwith "todo"\r
        | KobaltePlacement.Left -> failwith "todo"\r
        | KobaltePlacement.Right when props.placement = KobaltePlacement.Top -> failwith "todo"\r
        | _ -> ()\r
        match props.selectionBehavior with\r
        | Toggle -> failwith "todo"\r
        | Replace when props.selectionBehavior = SelectionBehavior.Toggle -> failwith "todo"\r
        | _ -> ()\r
        )\r
    render (fun props ->\r
        Select(\r
            itemComponent = fun props -> SelectItem(item = props.item) { unbox<string> props.item.rawValue }\r
            ).spread props {\r
            SelectTrigger(class' = "w-[180px]") {\r
                SelectValue<string>() {\r
                    yield fun state ->\r
                        span() { state.selectedOption() }\r
                }\r
            }\r
            SelectContent()\r
        })\r
    render "VirtualisationExample" (ignore >> VirtualisationEx)\r
    args "Default" (fun props ->\r
        props.placeholder <- unbox "Select a fruit..."\r
        props.options <- [| "Apple"; "Banana"; "Blueberry"; "Grapes"; "Pineapple" |])\r
        \r
}\r
`;function i(n){const r={h2:"h2",h3:"h3",p:"p",strong:"strong",...s(),...n.components},{SourceCode:o}=r;return o||T("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(p,{of:a}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(d,{}),`
`,e.jsx(r.h3,{id:"virtualisation",children:"Virtualisation"}),`
`,e.jsxs(r.p,{children:["An example using ",e.jsx(r.strong,{children:"TanStack.Virtual"})," to virtualise 100_000 items:"]}),`
`,e.jsx(l,{of:u}),`
`,e.jsx(o,{code:V}),`
`,e.jsx(r.h3,{id:"example-code",children:"Example Code"}),`
`,e.jsx(o,{code:w}),`
`,e.jsx(r.h2,{id:"components",children:"Components"}),`
`,e.jsx(r.h3,{id:"select",children:"Select"}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(r.h3,{id:"selectvalue",children:"SelectValue"}),`
`,e.jsx(t,{of:S}),`
`,e.jsx(r.h3,{id:"selecthiddenselect",children:"SelectHiddenSelect"}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(r.h3,{id:"selecttrigger",children:"SelectTrigger"}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(r.h3,{id:"selectcontent",children:"SelectContent"}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(r.h3,{id:"selectitem",children:"SelectItem"}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(r.h3,{id:"selectlabel",children:"SelectLabel"}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(r.h3,{id:"selectdescription",children:"SelectDescription"}),`
`,e.jsx(t,{of:v}),`
`,e.jsx(r.h3,{id:"selecterrormessage",children:"SelectErrorMessage"}),`
`,e.jsx(t,{of:y})]})}function ye(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}function T(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ye as default};

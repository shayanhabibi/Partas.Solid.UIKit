import{G as r,H as s,T as l,K as d,L as u,O as n}from"./iframe-Ss2HFUgg.js";import{useMDXComponents as p}from"./index--e61kTGT.js";import{R as i,D as m}from"./RadioGroup.stories-gZxa6o40.js";import{R as c}from"./RadioGroupItem.stories-UalghBSx.js";import{R as b}from"./RadioGroupItemLabel.stories-DMdydivX.js";import"./preload-helper-PPVm8Dsz.js";import"./RadioGroup-BwKZr9s3.js";import"./FQAGELOF-DsZ1DuW_.js";import"./ZZYKR3VO-B31dcm3B.js";import"./OYES4GOP-BvTDlBrO.js";import"./index-DsOqkTmx.js";import"./FLVHQV4A-DhRRNmDB.js";import"./index-Da4i2tMy.js";import"./index-axew2xP3.js";import"./JNCCF6MP-4sxnBYeu.js";import"./FN6EICGO-DOeDID0N.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-Dwv4USTq.js";import"./U42ECMND-BDjyePcW.js";import"./combineProps-Dc0BZltT.js";import"./Utils-Bv7TLaDt.js";import"./circle-BZ9_H_wJ.js";import"./Icon-DzzAe45T.js";const f=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Lucide\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
\r
[<Erase>]\r
type RadioGroup() =\r
    inherit Kobalte.RadioGroup()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        Kobalte.RadioGroup(class' = Lib.cn [|\r
            "grid gap-3"; props.class'\r
        |])\r
            .dataSlot("radio-group")\r
            .spread(props)\r
\r
[<Erase>]\r
type private RadioGroupItemControl() =\r
    inherit RadioGroup.ItemControl()\r
    [<SolidTypeComponentAttribute>]\r
    member private props.__ =\r
        RadioGroup.ItemControl(\r
            class' = "aspect-square size-4 rounded-full border border-primary\r
            text-primary ring-offset-background focus:outline-none\r
            focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2\r
            disabled:cursor-not-allowed disabled:opacity-50").spread props\r
\r
[<Erase>]\r
type private RadioGroupItemIndicator() =\r
    inherit RadioGroup.ItemIndicator()\r
    [<SolidTypeComponent>]\r
    member private props.__ =\r
        RadioGroup.ItemIndicator(class' = "flex h-full items-center justify-center").spread props\r
\r
[<Erase>]\r
type private RadioGroupItem_() =\r
    inherit RadioGroup.Item()\r
    [<SolidTypeComponent>]\r
    member private props.__ =\r
        RadioGroup.Item(class' = Lib.cn [|\r
            "flex items-center space-x-2"\r
            props.class'\r
        |]).spread(props)\r
\r
[<Erase>]\r
type RadioGroupItem() =\r
    inherit RadioGroup.Item()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        RadioGroup.Item(class' = Lib.cn [|\r
            "flex items-center space-x-2"\r
            props.class'\r
        |]) .dataSlot("radio-group-item")\r
            .spread(props) {\r
            RadioGroup.ItemInput()\r
            RadioGroup.ItemControl(class' =\r
                "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 \\\r
                aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 \\\r
                aria-invalid:border-destructive dark:bg-input/30 aspect-square \\\r
                data-[invalid]:ring-destructive/20 dark:data-[invalid]:ring-destructive/40 \\\r
                data-[invalid]:border-destructive \\\r
                size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] \\\r
                outline-none focus-visible:ring-[3px] data-[disabled]:cursor-not-allowed \\\r
                data-[disabled]:opacity-50"\r
                ) {\r
                RadioGroup.ItemIndicator(class' = "flex h-full items-center justify-center")\r
                    .dataSlot("radio-group-indicator")\r
                    { Circle(class' = "size-2.5 fill-current text-current") }\r
            }\r
            props.children\r
        }\r
[<Erase>]\r
type RadioGroupItemLabel() =\r
    inherit RadioGroup.ItemLabel()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        RadioGroup.ItemLabel(class' = Lib.cn [|\r
            "text-sm font-medium leading-none\r
            peer-disabled:cursor-not-allowed peer-disabled:opacity-70"\r
            props.class'\r
        |]).dataSlot("radio-group-label").spread(props)\r
\r
\r
[<Erase; AutoOpen>]\r
module RadioGroupModularForms =\r
    [<Erase; RequireQualifiedAccess>]\r
    module ModularForms =\r
        type private DV = DefaultValueAttribute\r
        \r
        open Fable.Core.JsInterop\r
        open Browser.Types\r
        \r
        [<Erase>]\r
        type RadioGroupForm() =\r
            inherit RadioGroup()\r
            [<DV>] val mutable name: string\r
            [<DV>] val mutable label: string\r
            [<DV>] val mutable value: string\r
            [<DV>] val mutable options: {|label:string; value:string|}[]\r
            [<DV>] val mutable error: string\r
            [<DV>] val mutable required: bool\r
            [<DV>] val mutable disabled: bool\r
            [<DV>] val mutable ref: Element\r
            [<DV>] val mutable onInput: (InputEvent -> unit)\r
            [<DV>] val mutable onChange: (Event -> unit)\r
            [<DV>] val mutable onBlur: (FocusEvent -> unit)\r
            [<SolidTypeComponent>]\r
            member props.__ =\r
                RadioGroup(\r
                    name = props.name\r
                    ,value = props.value\r
                    ,required = props.required\r
                    ,disabled = props.disabled\r
                    ,validationState = if !!props.error then ValidationState.Invalid else ValidationState.Valid\r
                ) {\r
                    Show(when' = !!props.label) {\r
                        Label() { props.label }\r
                    }\r
                    div() {\r
                        For(each = props.options) {\r
                            yield fun item _ ->\r
                                RadioGroupItem_(value = item.value) {\r
                                    RadioGroup.ItemInput(\r
                                        onInput = props.onInput\r
                                        ,onChange = props.onChange\r
                                        ,onBlur = props.onBlur\r
                                    ).ref(props.ref)\r
                                    RadioGroupItemControl() {\r
                                        RadioGroupItemIndicator() { Circle(class' = "size-2.5 fill-current text-current") }\r
                                    }\r
                                    RadioGroupItemLabel() { item.label }\r
                                }\r
                        }\r
                    }\r
                    RadioGroup.ErrorMessage() { props.error }\r
                }\r
`;function a(o){const e={h2:"h2",h3:"h3",...p(),...o.components},{SourceCode:t}=e;return t||v("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(s,{of:i}),`
`,r.jsx(l,{}),`
`,r.jsx(d,{of:m,layout:"centered",withToolbar:!0,sourceState:"none"}),`
`,r.jsx(u,{}),`
`,r.jsx(t,{code:f}),`
`,r.jsx(e.h2,{id:"components",children:"Components"}),`
`,r.jsx(e.h3,{id:"radiogroup",children:"RadioGroup"}),`
`,r.jsx(n,{of:i}),`
`,r.jsx(e.h3,{id:"radiogroupitem",children:"RadioGroupItem"}),`
`,r.jsx(n,{of:c}),`
`,r.jsx(e.h3,{id:"radiogroupitemlabel",children:"RadioGroupItemLabel"}),`
`,r.jsx(n,{of:b})]})}function B(o={}){const{wrapper:e}={...p(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(a,{...o})}):a(o)}function v(o,e){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{B as default};

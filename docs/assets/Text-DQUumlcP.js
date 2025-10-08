import{H as r,I as s,T as p,L as d,N as u,Q as t}from"./iframe-DHSEN8D7.js";import{useMDXComponents as l}from"./index-e4aCb-2o.js";import{T as i,D as x}from"./Text.stories-B8au9hgK.js";import{T as m}from"./TextFieldInput.stories-G45o132v.js";import{T as c}from"./TextFieldTextArea.stories-DW7IS8vN.js";import{T as b}from"./TextFieldLabel.stories-Be_cQ03u.js";import{T}from"./TextFieldDescription.stories-Cdk-eQ-z.js";import{T as f}from"./TextFieldErrorMessage.stories-DFpK2cNj.js";import"./preload-helper-PPVm8Dsz.js";import"./Text-nkWEn69A.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./MKJEDDFV-EnaCE2Sw.js";import"./NGHEENNE-Dj0dKL4v.js";import"./ZZYKR3VO-sS--fHny.js";import"./OYES4GOP-D4sXc2ip.js";import"./index-CX5o166x.js";import"./FLVHQV4A-VgAG7mUH.js";import"./index-1c5Tq1Kt.js";import"./index-SvhdUoxj.js";import"./JNCCF6MP-4sxnBYeu.js";import"./FN6EICGO-CNc9l087.js";import"./5WXHJDCZ-DghNgBBa.js";import"./Utils-CzREY3kc.js";const h=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Browser.Types\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
\r
module TextField =\r
    [<StringEnum(CaseRules.KebabCase)>]\r
    type Type =\r
        | Button\r
        | Checkbox\r
        | Color\r
        | Date\r
        | DatetimeLocal\r
        | Email\r
        | File\r
        | Hidden\r
        | Image\r
        | Month\r
        | Number\r
        | Password\r
        | Radio\r
        | Range\r
        | Reset\r
        | Search\r
        | Submit\r
        | Tel\r
        | Text\r
        | Time\r
        | Url\r
        | Week\r
        \r
[<Erase>]\r
type TextField() =\r
    inherit Kobalte.TextField()\r
    static member variants(?variant: string): string =\r
        let variant = defaultArg variant "label"\r
        //tw\r
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group-disabled:opacity-70 group-disabled:cursor-not-allowed " +\r
        match variant with\r
        | "description" -> "font-normal text-muted-foreground"\r
        | "error" -> "text-xs text-destructive"\r
        | _ -> "data-[invalid]:text-destructive"\r
    [<SolidTypeComponentAttribute>]\r
    member props.construc =\r
        Kobalte.TextField(class' = Lib.cn [|\r
            "group flex flex-col gap-1"; props.class'\r
        |]) .dataSlot("text-field")\r
            .spread props\r
\r
[<Erase>]\r
type TextFieldInput() =\r
    inherit TextField.Input()\r
    member val type': TextField.Type = unbox null with get,set\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        props.type' <- TextField.Text\r
        TextField.Input(class' = Lib.cn [|\r
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary \\\r
            selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full \\\r
            min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs \\\r
            transition-[color,box-shadow] outline-none file:inline-flex file:h-7 \\\r
            file:border-0 file:bg-transparent file:text-sm file:font-medium \\\r
            data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 \\\r
            md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 \\\r
            focus-visible:ring-[3px] data-[invalid]:ring-destructive/20\r
            dark:data-[invalid]:ring-destructive/40 data-[invalid]:border-destructive"\r
            props.class'\r
        |], type' = unbox<string> props.type')\r
            .dataSlot("text-field-input")\r
            .spread props\r
\r
[<Erase>]\r
type TextFieldTextArea() =\r
    inherit TextField.TextArea()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        TextField.TextArea(class' = Lib.cn [|\r
            "flex min-h-[80px] input-border w-full rounded-md \\\r
            bg-transparent px-3 py-2 text-sm ring-offset-background \\\r
            data-[invalid]:input-invalid-border placeholder:text-muted-foreground \\\r
            focus-visible:input-focus-border \\\r
            data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 transition-[color,box-shadow]"\r
            props.class'\r
        |]) .dataSlot("text-field-area")\r
            .spread props\r
\r
[<Erase>]\r
type TextFieldLabel() =\r
    inherit TextField.Label()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        TextField.Label(class' = Lib.cn [|\r
            TextField.variants("label")\r
            props.class'\r
        |]) .dataSlot("text-field-label")\r
            .spread props\r
\r
[<Erase>]\r
type TextFieldDescription() =\r
    inherit TextField.Description()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        TextField.Description(class' = Lib.cn [|\r
            TextField.variants("description")\r
            props.class'\r
        |]) .dataSlot("text-field-description")\r
            .spread props\r
\r
[<Erase>]\r
type TextFieldErrorMessage() =\r
    inherit TextField.ErrorMessage()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        TextField.ErrorMessage(class' = Lib.cn [|\r
            TextField.variants("error"); props.class'\r
        |]) .dataSlot("text-field-error-message")\r
            .spread props\r
\r
[<AutoOpen; Erase>]\r
module TextFieldModularForms =\r
    [<Erase; RequireQualifiedAccess>]\r
    module ModularForms =\r
        type private DV = DefaultValueAttribute\r
        \r
        [<RequireQualifiedAccess; StringEnum>]\r
        type TextFieldType =\r
            | Text\r
            | Email\r
            | Tel\r
            | Password\r
            | Url\r
            | Date\r
\r
        open Fable.Core.JsInterop\r
        \r
        [<Erase>]\r
        type TextFieldForm() =\r
            inherit TextField()\r
            [<DV>] val mutable type': TextFieldType\r
            [<DV>] val mutable private ref: Element\r
            [<DV>] val mutable label: string\r
            [<DV>] val mutable placeholder: string\r
            [<DV>] val mutable error: string\r
            [<DV>] val mutable multiline: bool\r
            [<DV>] val mutable onInput: (InputEvent -> unit)\r
            [<DV>] val mutable onBlur: (FocusEvent -> unit)\r
            [<SolidTypeComponent>]\r
            member props.constructor =\r
                TextField(\r
                    name = props.name,\r
                    class' = props.class'\r
                    ,value = props.value\r
                    ,required = props.required\r
                    ,disabled = props.disabled\r
                    ,validationState = if unbox<bool> props.error then ValidationState.Invalid else ValidationState.Valid\r
                    ) {\r
                    Show(when' = unbox props.label) {\r
                        TextFieldLabel() { props.label }\r
                    }\r
                    Show(\r
                        when' = props.multiline\r
                        ,fallback= TextFieldInput(\r
                                placeholder = props.placeholder\r
                                ,value = props.value\r
                                ,onInput = props.onInput\r
                                ,onChange = !!props.onChange\r
                                ,onBlur = !!props.onBlur\r
                            ).ref(props.ref)\r
                        ) {\r
                        TextFieldTextArea(\r
                                placeholder = props.placeholder\r
                                ,onInput = props.onInput\r
                                ,onChange = !!props.onChange\r
                                ,onBlur = !!props.onBlur\r
                            ).ref(props.ref).bool("autoResize", true)\r
                    }\r
                    TextFieldErrorMessage() { props.error }\r
                }\r
            \r
            \r
`;function a(n){const e={h2:"h2",h3:"h3",...l(),...n.components},{SourceCode:o}=e;return o||F("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(s,{of:i}),`
`,r.jsx(p,{}),`
`,r.jsx(d,{of:x,layout:"centered",sourceState:"none",withToolbar:!0}),`
`,r.jsx(u,{}),`
`,r.jsx(o,{code:h}),`
`,r.jsx(e.h2,{id:"components",children:"Components"}),`
`,r.jsx(e.h3,{id:"textfield",children:"TextField"}),`
`,r.jsx(t,{of:i}),`
`,r.jsx(e.h3,{id:"textfieldinput",children:"TextFieldInput"}),`
`,r.jsx(t,{of:m}),`
`,r.jsx(e.h3,{id:"textfieldtextarea",children:"TextFieldTextArea"}),`
`,r.jsx(t,{of:c}),`
`,r.jsx(e.h3,{id:"textfieldlabel",children:"TextFieldLabel"}),`
`,r.jsx(t,{of:b}),`
`,r.jsx(e.h3,{id:"textfielddescription",children:"TextFieldDescription"}),`
`,r.jsx(t,{of:T}),`
`,r.jsx(e.h3,{id:"textfielderrormessage",children:"TextFieldErrorMessage"}),`
`,r.jsx(t,{of:f})]})}function H(n={}){const{wrapper:e}={...l(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(a,{...n})}):a(n)}function F(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{H as default};

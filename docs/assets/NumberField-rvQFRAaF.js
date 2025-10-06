import{G as e,H as l,T as m,K as a,L as p,O as o}from"./iframe-BLvaHOrW.js";import{useMDXComponents as d}from"./index-DMt2PYli.js";import{N as t,D as c}from"./NumberField.stories-YfjbeRTp.js";import{N as u}from"./NumberFieldGroup.stories-BIguJQ_f.js";import{N as b}from"./NumberFieldLabel.stories-B8-Z8h1c.js";import{N as f}from"./NumberFieldInput.stories-T7gPUaom.js";import{N as h}from"./NumberFieldIncrementTrigger.stories-CxkrOO8P.js";import{N as g}from"./NumberFieldDecrementTrigger.stories-3GMLg7ww.js";import{N as x}from"./NumberFieldDescription.stories-CNkbDYbD.js";import{N}from"./NumberFieldErrorMessage.stories-CuGjzCK7.js";import"./preload-helper-PPVm8Dsz.js";import"./NumberField-CbLjVBkZ.js";import"./JHMNWOLY-CsDzS1Uk.js";import"./index-TpYiyspx.js";import"./FLVHQV4A-ByRBKILc.js";import"./combineProps-TuyxsfEg.js";import"./index-C2xVdcqa.js";import"./LR7LBJN3-DXU4Tgxl.js";import"./UKTBL2JL-mrSn-dg4.js";import"./OYES4GOP-DJL3U5Gx.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BbcR3rHk.js";import"./NGHEENNE-Cx8CCgiw.js";import"./ZZYKR3VO-CUrFF4yS.js";import"./JNCCF6MP-4sxnBYeu.js";import"./FN6EICGO-DozerlcD.js";import"./Utils-BEjpZvS7.js";import"./Icon-BmtgjGtw.js";import"./chevron-down-3y4-ND3P.js";const F=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
\r
[<Erase>]\r
type NumberField() =\r
    inherit Kobalte.NumberField()\r
    [<SolidTypeComponent>]\r
    member props.constructor = Kobalte.NumberField().spread props\r
    \r
[<Erase>]\r
type NumberFieldGroup() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class' = Lib.cn [|\r
            "relative \\\r
    shadow-xs rounded-md min-w-0 transition-[color,box-shadow] \\\r
    input-border has-data-[disabled]:pointer-events-none \\\r
    has-data-[disabled]:cursor-not-allowed has-data-[disabled]:opacity-50 \\\r
    has-data-[invalid]:input-invalid-border \\\r
    focus-within:input-focus-border"\r
            props.class'\r
        |]) .dataSlot("number-field-group")\r
            .spread props\r
[<Erase>]\r
type NumberFieldLabel() =\r
    inherit NumberField.Label()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.NumberField.Label(class'= Lib.cn [|\r
            "text-sm font-medium leading-none\r
            peer-disabled:cursor-not-allowed peer-disabled:opacity-70"\r
            props.class'\r
        |]) .dataSlot("number-field-label")\r
            .spread(props)\r
[<Erase>]\r
type NumberFieldInput() =\r
    inherit NumberField.Input()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.NumberField.Input(class' = Lib.cn [|\r
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary \\\r
            selection:text-primary-foreground dark:bg-input/30 h-9 w-full \\\r
            min-w-0 rounded-md bg-transparent px-3 py-1 text-base shadow-xs \\\r
            transition-[color,box-shadow] outline-none file:inline-flex file:h-7 \\\r
            file:border-0 file:bg-transparent file:text-sm file:font-medium \\\r
            md:text-sm data-[disabled]:cursor-not-allowed data-[disabled]:pointer-events-none \\\r
            data-[disabled]:selection-none"\r
            props.class'\r
        |]) .dataSlot("number-field-input")\r
            .spread props\r
[<Erase>]\r
type NumberFieldIncrementTrigger() =\r
    inherit NumberField.IncrementTrigger()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        let children,hasChildren = Lib.createChildrenResolver(props.children)\r
        Kobalte.NumberField.IncrementTrigger(class' = Lib.cn [|\r
            "absolute right-1 top-1 inline-flex size-4 items-center justify-center"\r
            props.class'\r
        |]) .dataSlot("number-field-increment-trigger")\r
            .spread(props) {\r
            if hasChildren() then children() else Lucide.Lucide.ChevronUp(class'="size-4")\r
        }\r
[<Erase>]\r
type NumberFieldDecrementTrigger() =\r
    inherit NumberField.DecrementTrigger()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        let children, hasChildren = Lib.createChildrenResolver(props.children)\r
        Kobalte.NumberField.DecrementTrigger(class' = Lib.cn [|\r
            "absolute bottom-1 right-1 inline-flex size-4 items-center justify-center"\r
            props.class'\r
        |]) .dataSlot("number-field-decrement-trigger")\r
            .spread(props) {\r
            if hasChildren() then children() else Lucide.Lucide.ChevronDown(class' = "size-4")\r
        }\r
[<Erase>]\r
type NumberFieldDescription() =\r
    inherit NumberField.Description()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        NumberField.Description(class'= Lib.cn [|\r
            "text-sm text-muted-foreground"; props.class'\r
        |]) .dataSlot("number-field-description")\r
            .spread props\r
[<Erase>]\r
type NumberFieldErrorMessage() =\r
    inherit NumberField.ErrorMessage()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        NumberField.ErrorMessage(class' = Lib.cn [|\r
            "text-sm text-error-foreground"\r
            props.class'\r
        |]) .dataSlot("number-field-error-message")\r
            .spread(props)\r
\r
`;function s(n){const r={h2:"h2",h3:"h3",...d(),...n.components},{SourceCode:i}=r;return i||S("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t}),`
`,e.jsx(m,{}),`
`,e.jsx(a,{of:c,sourceState:"none",withToolbar:!0,layout:"centered"}),`
`,e.jsx(p,{}),`
`,e.jsx(i,{code:F}),`
`,e.jsx(r.h2,{id:"components",children:"Components"}),`
`,e.jsx(r.h3,{id:"numberfield",children:"NumberField"}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(r.h3,{id:"numberfieldgroup",children:"NumberFieldGroup"}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(r.h3,{id:"numberfieldlabel",children:"NumberFieldLabel"}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(r.h3,{id:"numberfieldinput",children:"NumberFieldInput"}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(r.h3,{id:"numberfieldincrementtrigger",children:"NumberFieldIncrementTrigger"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(r.h3,{id:"numberfielddecrementtrigger",children:"NumberFieldDecrementTrigger"}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(r.h3,{id:"numberfielddescription",children:"NumberFieldDescription"}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(r.h3,{id:"numberfielderrormessage",children:"NumberFieldErrorMessage"}),`
`,e.jsx(o,{of:N})]})}function Y(n={}){const{wrapper:r}={...d(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}function S(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Y as default};

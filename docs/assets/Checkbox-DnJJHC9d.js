import{G as e,H as l,T as s,K as o,L as d}from"./iframe-BLvaHOrW.js";import{useMDXComponents as i}from"./index-DMt2PYli.js";import{C as c,D as u,a as p,b,V as h}from"./Checkbox.stories-Diw8ujZO.js";import"./preload-helper-PPVm8Dsz.js";import"./VI7QYH27-lfbjaqsq.js";import"./FN6EICGO-DozerlcD.js";import"./index-C2xVdcqa.js";import"./NGHEENNE-Cx8CCgiw.js";import"./ZZYKR3VO-CUrFF4yS.js";import"./OYES4GOP-DJL3U5Gx.js";import"./index-TpYiyspx.js";import"./FLVHQV4A-ByRBKILc.js";import"./index-BbcR3rHk.js";import"./JNCCF6MP-4sxnBYeu.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-D5LuZuuz.js";import"./U42ECMND-BDjyePcW.js";import"./combineProps-TuyxsfEg.js";import"./minus-Cx7MSKhe.js";import"./Icon-BmtgjGtw.js";import"./check-CGkZo0Og.js";import"./Utils-BEjpZvS7.js";import"./Label-CT7n78zp.js";const m=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Browser.Types\r
open Partas.Solid\r
open Partas.Solid.Lucide\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
open Fable.Core.JsInterop\r
\r
[<Erase>]\r
type Checkbox() =\r
    inherit Kobalte.Checkbox()\r
    [<SolidTypeComponent>]\r
    member props.checkbox =\r
        Kobalte.Checkbox(\r
            indeterminate = props.indeterminate,\r
            class' = "items-top group relative flex space-x-2 peer"\r
            ).dataSlot("checkbox").spread(props) { yield fun _ -> Fragment() {\r
            Checkbox.Input(class'="peer")\r
            Checkbox.Control(\r
                class' = Lib.cn [|\r
                "size-4 shrink-0 rounded-[4px] border border-input dark:bg-input/30 \\\r
                transition-shadow shadow-xs outline-none data-[checked]:border-primary \\\r
                data-[invalid]:border-destructive data-[invalid]:ring-destructive/20 \\\r
                dark:data-[invalid]:ring-destructive/40 data-[disabled]:cursor-not-allowed \\\r
                data-[disabled]:opacity-50 peer-focus-visible:focus-ring-offset \\\r
                data-[checked]:border-none data-[checked]:bg-primary \\\r
                data-[checked]:text-primary-foreground \\\r
                data-[indeterminate]:border-none data-[indeterminate]:bg-primary \\\r
                data-[indeterminate]:text-primary-foreground"\r
                props.class'\r
                |]\r
                ).dataSlot("checkbox-control") {\r
                Checkbox.Indicator().dataSlot("checkbox-indicator") {\r
                    if props.indeterminate then\r
                        Minus(class' = "size-4", strokeWidth = 2)\r
                    else\r
                        Check(class' = "size-4", strokeWidth = 2)\r
                }\r
            }\r
        }\r
        }\r
\r
[<AutoOpen; Erase>]\r
module CheckboxModularForms =\r
    [<Erase; RequireQualifiedAccess>]\r
    module ModularForms =\r
        open Fable.Core.JsInterop\r
        type CheckboxForm() =\r
            inherit Checkbox()\r
            [<DefaultValue>] val mutable name: string\r
            [<DefaultValue>] val mutable label: string\r
            [<DefaultValue>] val mutable value: string\r
            [<DefaultValue>] val mutable checked': bool\r
            [<DefaultValue>] val mutable error: string\r
            [<DefaultValue>] val mutable required: bool\r
            [<DefaultValue>] val mutable disabled: bool\r
            [<DefaultValue>] val mutable ref: Element\r
            [<DefaultValue>] val mutable onInput: (InputEvent -> unit)\r
            [<DefaultValue>] val mutable onChange: (Event -> unit)\r
            [<DefaultValue>] val mutable onBlur: (FocusEvent -> unit)\r
            [<SolidTypeComponent>]\r
            member props.constructor =\r
                Checkbox(\r
                    name = props.name\r
                    ,value = props.value\r
                    ,checked' = props.checked'\r
                    ,required = props.required\r
                    ,disabled = props.disabled\r
                    ,validationState = if !!props.error then ValidationState.Invalid else ValidationState.Valid\r
                ) { yield fun _ -> Fragment() {\r
                    \r
                    Checkbox.Input(\r
                        class'="peer"\r
                        ,onInput = props.onInput\r
                        ,onChange = props.onChange\r
                        ,onBlur = props.onBlur\r
                    )\r
                    Checkbox.Control(\r
                        class' = "size-4 shrink-0 rounded-sm border border-primary\r
                        ring-offset-background disabled:cursor-not-allowed disabled:opacity-50\r
                        peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring\r
                        peer-focus-visible:ring-offset-2 data-[checked]:border-none data-[indeterminate]:border-none\r
                        data-[checked]:bg-primary data-[indeterminate]:bg-primary data-[checked]:text-primary-foreground\r
                        data-[indeterminate]:text-primary-foreground") {\r
                        Checkbox.Indicator() {\r
                            if props.indeterminate then\r
                                Minus(class' = "size-4", strokeWidth = 2)\r
                            else\r
                                Check(class' = "size-4", strokeWidth = 2)\r
                        }\r
                    }\r
                }\r
                }\r
`;function a(n){const r={blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",...i(),...n.components},{SourceCode:t}=r;return t||x("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(s,{}),`
`,e.jsx(r.p,{children:"A checkbox with two states by default, and a third state when controlled via 'indeterminate' (aka undefined)."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-fsharp",children:`Checkbox()\r
Label() { "Checkbox Label" }
`})}),`
`,e.jsx(o,{of:u,withToolbar:!0,sourceState:"none",layout:"centered"}),`
`,e.jsx(d,{}),`
`,e.jsx(t,{code:m}),`
`,e.jsx(r.h3,{id:"checkbox-cards",children:"Checkbox Cards"}),`
`,e.jsx(o,{of:p,withToolbar:!0,sourceState:"none",layout:"centered"}),`
`,e.jsx(r.h3,{id:"labels",children:"Labels"}),`
`,e.jsx(r.p,{children:"You can connect a label to the checkbox input by the following:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-fsharp",children:`Checkbox(id="checkbox1")\r
Label(for'="checkbox1-input") { "Click me!" }
`})}),`
`,e.jsx(o,{of:b,withToolbar:!0,sourceState:"none",layout:"centered"}),`
`,e.jsx(r.h4,{id:"controlled-state",children:"Controlled State"}),`
`,e.jsxs(r.p,{children:["However, simultaneously controlling the state can seemingly break that connection. ",e.jsx(r.em,{children:"to be investigated"})]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-fsharp",children:`render "Validation" (fun props ->\r
    let value,setValue = createSignal(false)\r
    div(class' = "flex flex-row place-items-center gap-2") {\r
        Checkbox(id = "checkbox2",\r
                 onChange = fun value -> value |> unbox |> setValue\r
                 ,checked' = value()\r
                 ,validationState =\r
                     if value() then ValidationState.Invalid\r
                     else ValidationState.Valid)\r
        Label(for' = "checkbox2-input") { "Don't want to be checked!" }\r
    }\r
    )
`})}),`
`,e.jsx(o,{of:h,sourceState:"none",withToolbar:!0,layout:"centered"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:`This is possibly an issue related to the interaction between storybook and solidjs/kobalte, as the connection\r
works when viewing the story in isolation.`}),`
`]})]})}function W(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(a,{...n})}):a(n)}function x(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{W as default};

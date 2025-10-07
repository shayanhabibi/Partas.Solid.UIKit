import{G as r,H as d,T as a,K as l,L as c,O as t}from"./iframe-BHVPMPJn.js";import{useMDXComponents as p}from"./index-CB5oDCs8.js";import{O as i,D as u}from"./OtpField.stories-BaIWL909.js";import{O as m}from"./OtpFieldInput.stories-CBpXICfu.js";import{O as x}from"./OtpFieldGroup.stories-xd0cqCRV.js";import{O as f}from"./OtpFieldSlot.stories-BgdcoONw.js";import{O as h}from"./OtpFieldSeparator.stories-mX-lZLzZ.js";import"./preload-helper-PPVm8Dsz.js";import"./OtpField-BAhtej3p.js";import"./size-Bch4e9pt.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./Utils-CAhjhIiz.js";import"./index-DzweoC3U.js";import"./Array-CbDDtYGA.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./Icon-DcpizePo.js";const v=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Corvu\r
open Fable.Core\r
\r
[<Erase>]\r
type OtpField() =\r
    inherit Corvu.OtpField()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Corvu.OtpField(class' = Lib.cn [|\r
            "flex items-center gap-2 disabled:cursor-not-allowed has-[:disabled]:opacity-50"\r
            props.class'\r
        |]).spread(props)\r
\r
[<Erase>]\r
type OtpFieldInput() =\r
    inherit OtpField.Input()\r
    [<SolidTypeComponent>]\r
    member props.constructor = Corvu.OtpField.Input().spread props\r
        \r
\r
[<Erase>]\r
type OtpFieldGroup() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class' = Lib.cn [|\r
            "flex items-center"\r
            props.class'\r
        |]).spread props\r
\r
[<Erase>]\r
type OtpFieldSlot() =\r
    inherit div()\r
    member val index: int = jsNative with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        let context = OtpField.useContext()\r
        let character (): string = unbox (context.value()[props.index])\r
        let showFakeCaret () = context.value().Length = props.index && context.isInserting()\r
        div(\r
            class' = Lib.cn [|\r
                "group relative flex size-10 items-center justify-center\r
                border-y border-r border-input text-sm first:rounded-l-md transition-all\r
                first:border-l last:rounded-r-md"\r
                props.class'\r
            |]\r
        ).spread props {\r
            div(\r
                class' = Lib.cn [|\r
                    // "border-ring ring-ring/50 aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"\r
                    "absolute inset-0 z-10 transition-all group-first:rounded-l-md group-last:rounded-r-md"\r
                    (context.activeSlots() |> Array.contains props.index) &&= "ring-2 ring-ring ring-offset-background"\r
                |]\r
            )\r
            character()\r
            if showFakeCaret() then\r
                div(class' = "pointer-events-none absolute inset-0 flex items-center justify-center") {\r
                    div(class' = "h-4 w-px animate-caret-blink bg-foreground duration-1000")\r
                }\r
        }\r
\r
[<Erase>]\r
type OtpFieldSeparator() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div().spread(props) {\r
            Lucide.Lucide.Dot(class'="size-6", strokeWidth = 2)\r
        }\r
\r
`;function s(n){const e={h2:"h2",h3:"h3",...p(),...n.components},{SourceCode:o}=e;return o||b("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:i}),`
`,r.jsx(a,{}),`
`,r.jsx(l,{of:u,layout:"centered",sourceState:"none",withToolbar:!0}),`
`,r.jsx(c,{}),`
`,r.jsx(o,{code:v}),`
`,r.jsx(e.h2,{id:"components",children:"Components"}),`
`,r.jsx(e.h3,{id:"otpfield",children:"OtpField"}),`
`,r.jsx(t,{of:i}),`
`,r.jsx(e.h3,{id:"otpfieldinput",children:"OtpFieldInput"}),`
`,r.jsx(t,{of:m}),`
`,r.jsx(e.h3,{id:"otpfieldgroup",children:"OtpFieldGroup"}),`
`,r.jsx(t,{of:x}),`
`,r.jsx(e.h3,{id:"otpfieldslot",children:"OtpFieldSlot"}),`
`,r.jsx(t,{of:f}),`
`,r.jsx(e.h3,{id:"otpfieldseparator",children:"OtpFieldSeparator"}),`
`,r.jsx(t,{of:h})]})}function X(n={}){const{wrapper:e}={...p(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(s,{...n})}):s(n)}function b(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{X as default};

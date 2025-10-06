import{G as r,H as l,T as i,K as u,L as d,O as c}from"./iframe-BLvaHOrW.js";import{useMDXComponents as a}from"./index-DMt2PYli.js";import{D as t,a as p}from"./DeltaBar.stories-B00HBFjl.js";import"./preload-helper-PPVm8Dsz.js";import"./Utils-BEjpZvS7.js";import"./index-C2xVdcqa.js";const f=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Style\r
open Fable.Core\r
open Fable.Core.JsInterop\r
\r
[<Erase>]\r
type DeltaBar() =\r
    inherit div()\r
    [<DefaultValue>] val mutable value: int\r
    [<DefaultValue>] val mutable isIncreasePositive: bool\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        props.isIncreasePositive <- true\r
        let barColor () =\r
            match props.value > 0, props.isIncreasePositive with\r
            | true, true\r
            | false, false -> "bg-success-foreground"\r
            | _ -> "bg-error-foreground"\r
        let absValue () = JS.Math.abs !!props.value\r
        div(class' = Lib.cn [|\r
            "relative flex h-2 w-full items-center rounded-full bg-secondary"\r
            props.class'\r
        |]) .dataSlot("delta-bar")\r
            .spread(props) {\r
            div(class' = "flex h-full w-1/2 justify-end") {\r
                if props.value < 0 then div(class' = Lib.cn [| "rounded-l-full"; barColor() |]).style' {| width = $"{absValue()}%%" |}\r
                div(class' = Lib.cn [|\r
                    "z-10 h-4 w-1 rounded-full ring-2 ring-background"\r
                    barColor()\r
                |])\r
                div(class' = "flex h-full w-1/2 justify-start") {\r
                    if props.value > 0 then div(class' = Lib.cn [| "rounded-r-full" ; barColor() |]).style' {| width = $"{absValue()}%%" |}\r
                }\r
            }\r
        }\r
`;function s(e){const n={h2:"h2",h3:"h3",...a(),...e.components},{SourceCode:o}=n;return o||m("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(l,{of:t}),`
`,r.jsx(i,{}),`
`,r.jsx(u,{of:p,sourceState:"none",withToolbar:!0}),`
`,r.jsx(d,{}),`
`,r.jsx(o,{code:f}),`
`,r.jsx(n.h2,{id:"components",children:"Components"}),`
`,r.jsx(n.h3,{id:"deltabar",children:"DeltaBar"}),`
`,r.jsx(c,{of:t})]})}function g(e={}){const{wrapper:n}={...a(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(s,{...e})}):s(e)}function m(e,n){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{g as default};

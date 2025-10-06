import{G as r,H as i,T as p,K as m,L as c,O as l}from"./iframe-BLvaHOrW.js";import{useMDXComponents as s}from"./index-DMt2PYli.js";import{S as t,D as d}from"./Separator.stories-BRPSqGqD.js";import"./preload-helper-PPVm8Dsz.js";import"./Separator-DfnYslN2.js";import"./T4C3DMHT-Y4_Lrzs8.js";import"./OYES4GOP-DJL3U5Gx.js";import"./index-TpYiyspx.js";import"./FLVHQV4A-ByRBKILc.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BbcR3rHk.js";import"./index-C2xVdcqa.js";import"./Utils-BEjpZvS7.js";const x=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
open Fable.Core.JsInterop\r
\r
[<Erase>]\r
type Separator() =\r
    inherit Kobalte.Separator()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Separator(class' = Lib.cn [|\r
            "shrink-0 bg-border"\r
            if props.orientation = Orientation.Vertical then\r
                "h-full w-px"\r
            else "h-px w-full"\r
            props.class'\r
        |], orientation = (props.orientation ??= Orientation.Horizontal))\r
            .dataSlot("separator")\r
            .spread(props)\r
\r
`;function a(o){const n={h2:"h2",h3:"h3",...s(),...o.components},{SourceCode:e}=n;return e||f("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(i,{of:t}),`
`,r.jsx(p,{}),`
`,r.jsx(m,{of:d}),`
`,r.jsx(c,{}),`
`,r.jsx(e,{code:x}),`
`,r.jsx(n.h2,{id:"components",children:"Components"}),`
`,r.jsx(n.h3,{id:"separator",children:"Separator"}),`
`,r.jsx(l,{of:t})]})}function T(o={}){const{wrapper:n}={...s(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(a,{...o})}):a(o)}function f(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{T as default};

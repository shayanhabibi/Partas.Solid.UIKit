import{G as r,H as i,T as p,K as m,L as c,O as l}from"./iframe-Ss2HFUgg.js";import{useMDXComponents as s}from"./index--e61kTGT.js";import{S as t,D as d}from"./Separator.stories-E9d820WG.js";import"./preload-helper-PPVm8Dsz.js";import"./Separator-BsVF3Sfu.js";import"./T4C3DMHT-BxeliJxY.js";import"./OYES4GOP-BvTDlBrO.js";import"./index-DsOqkTmx.js";import"./FLVHQV4A-DhRRNmDB.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-Da4i2tMy.js";import"./index-axew2xP3.js";import"./Utils-Bv7TLaDt.js";const x=`\uFEFFnamespace Partas.Solid.UI\r
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

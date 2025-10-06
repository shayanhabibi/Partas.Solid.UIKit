import{G as e,H as i,T as p,K as m,L as l,O as c}from"./iframe-Ss2HFUgg.js";import{useMDXComponents as a}from"./index--e61kTGT.js";import{S as r,D as d}from"./Skeleton.stories-FqvLNXDL.js";import"./preload-helper-PPVm8Dsz.js";import"./Skeleton-B7wVDvdH.js";import"./FLVHQV4A-DhRRNmDB.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-DsOqkTmx.js";import"./combineProps-Dc0BZltT.js";import"./index-axew2xP3.js";import"./Utils-Bv7TLaDt.js";const u=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
\r
[<Erase>]\r
type Skeleton() =\r
    inherit Kobalte.Skeleton()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        props.animate <- true\r
        Kobalte.Skeleton(class' = Lib.cn [|\r
           "bg-primary/10 data-[animate=true]:animate-pulse"\r
           props.class'\r
        |]) .dataSlot("skeleton")\r
            .spread props\r
`;function s(o){const n={h2:"h2",h3:"h3",...a(),...o.components},{SourceCode:t}=n;return t||x("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(i,{of:r}),`
`,e.jsx(p,{}),`
`,e.jsx(m,{of:d,sourceState:"none",withToolbar:!0,layout:"centered"}),`
`,e.jsx(l,{}),`
`,e.jsx(t,{code:u}),`
`,e.jsx(n.h2,{id:"components",children:"Components"}),`
`,e.jsx(n.h3,{id:"skeleton",children:"Skeleton"}),`
`,e.jsx(c,{of:r})]})}function D(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}function x(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{D as default};

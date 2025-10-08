import{H as e,I as a,T as m,L as c,N as d,Q as t}from"./iframe-DHSEN8D7.js";import{useMDXComponents as p}from"./index-e4aCb-2o.js";import{C,D as b}from"./Collapsible.stories-C3I6rCXo.js";import{T as l}from"./CollapsibleTrigger.stories-0UHWbh_B.js";import{C as i}from"./CollapsibleContent.stories-TXvblJkH.js";import"./preload-helper-PPVm8Dsz.js";import"./Collapsible-Bi3Np49m.js";import"./UGE6PPGT-Dz5tI3pV.js";import"./E53DB7BS-C475FHrG.js";import"./FN6EICGO-CNc9l087.js";import"./index-SvhdUoxj.js";import"./UKTBL2JL-D9vX2QTQ.js";import"./OYES4GOP-D4sXc2ip.js";import"./index-CX5o166x.js";import"./FLVHQV4A-VgAG7mUH.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-1c5Tq1Kt.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-ptAOXcxb.js";import"./U42ECMND-BDjyePcW.js";import"./combineProps-ChBwTExo.js";const g=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
\r
\r
[<Erase>]\r
type Collapsible() =\r
    inherit Kobalte.Collapsible()\r
    [<SolidTypeComponent>]\r
    member props.collapsible =\r
        Kobalte.Collapsible()\r
            .dataSlot("collapsible")\r
            .spread props\r
\r
[<Erase>]\r
type CollapsibleTrigger() =\r
    inherit Collapsible.Trigger()\r
    [<SolidTypeComponent>]\r
    member props.collapsible =\r
        Collapsible.Trigger()\r
            .dataSlot("collapsible-trigger")\r
            .spread props\r
    \r
[<Erase>]\r
type CollapsibleContent() =\r
    inherit Collapsible.Content()\r
    [<SolidTypeComponent>]\r
    member props.collapsible =\r
        Collapsible.Content()\r
            .dataSlot("collapsible-content")\r
            .spread props\r
`;function s(o){const r={code:"code",h3:"h3",p:"p",pre:"pre",...p(),...o.components},{SourceCode:n}=r;return n||h("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(a,{of:C}),`
`,e.jsx(m,{}),`
`,e.jsx(r.p,{children:`A primitive that forms the basis of more complex components such as the accordion. No real styling or the sort has\r
been applied.`}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-fsharp",children:`Collapsible() {\r
    CollapsibleTrigger() {\r
        "Click me"\r
    }\r
    CollapsibleContent() {\r
        "Content"\r
    }\r
}
`})}),`
`,e.jsx(c,{of:b,layout:"centered",sourceState:"none",withToolbar:!0}),`
`,e.jsx(d,{}),`
`,e.jsx(n,{code:g}),`
`,e.jsx(r.h3,{id:"collapsibletrigger",children:"CollapsibleTrigger"}),`
`,e.jsx(t,{of:l,meta:l}),`
`,e.jsx(r.h3,{id:"collapsiblecontent",children:"CollapsibleContent"}),`
`,e.jsx(t,{of:i,meta:i})]})}function L(o={}){const{wrapper:r}={...p(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(s,{...o})}):s(o)}function h(o,r){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{L as default};

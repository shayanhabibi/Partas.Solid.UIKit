import{G as e,H as a,T as m,K as c,L as d,O as t}from"./iframe-Ss2HFUgg.js";import{useMDXComponents as p}from"./index--e61kTGT.js";import{C,D as b}from"./Collapsible.stories--PEXV7g8.js";import{T as l}from"./CollapsibleTrigger.stories-Bd4wKCNS.js";import{C as i}from"./CollapsibleContent.stories-AbH7f3bw.js";import"./preload-helper-PPVm8Dsz.js";import"./Collapsible-bt_PmXV-.js";import"./UGE6PPGT-B_O5sWWN.js";import"./E53DB7BS-B46G7qd5.js";import"./FN6EICGO-DOeDID0N.js";import"./index-axew2xP3.js";import"./UKTBL2JL-DisnMsyh.js";import"./OYES4GOP-BvTDlBrO.js";import"./index-DsOqkTmx.js";import"./FLVHQV4A-DhRRNmDB.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-Da4i2tMy.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-Dwv4USTq.js";import"./U42ECMND-BDjyePcW.js";import"./combineProps-Dc0BZltT.js";const g=`\uFEFFnamespace Partas.Solid.UI\r
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
`,e.jsx(t,{of:i,meta:i})]})}function R(o={}){const{wrapper:r}={...p(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(s,{...o})}):s(o)}function h(o,r){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{R as default};

import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-BtM1hK2q.js";import{M as s,T as d,b as m,c as p,A as e}from"./blocks-CMsyRgwU.js";import{A as i,D as a}from"./Accordion.stories-CHa9AXLz.js";import{A as l}from"./AccordionItem.stories-KvsbH0vk.js";import"./iframe-rVoFtZu9.js";import"./preload-helper-PPVm8Dsz.js";import"./Accordion-DW2mUyCt.js";import"./N3GAC5SS-C-lFNpaU.js";import"./QZDH5R5B-BbgjLotW.js";import"./index-kLgwDL5l.js";import"./index-Riw0p3ms.js";import"./LR7LBJN3-Cn4krSpU.js";import"./FN6EICGO-g7b9VqP4.js";import"./eventListener-1Z1e74AA.js";import"./UGE6PPGT-DQ83hv28.js";import"./E53DB7BS-COn9pcus.js";import"./UKTBL2JL-CAvLOfBE.js";import"./OYES4GOP-BdaYfyQY.js";import"./FLVHQV4A-Gi-kDcar.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-TjBUJP2H.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-Dla5E_GO.js";import"./U42ECMND-BDjyePcW.js";import"./combineProps-CsPhi8Vl.js";import"./SOM3K36D-CmiAbsf-.js";import"./Utils-DvLkKxqJ.js";import"./chevron-down-Cue7vVZt.js";import"./Icon-b_5I2J3_.js";function t(r){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...c(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:i}),`
`,o.jsx(d,{}),`
`,o.jsx(n.p,{children:"You typically compose an accordion in the following manner:"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-fsharp",children:`Accordion() {\r
    AccordionItem(value = "item1") {\r
        AccordionTrigger() { "Item 1" }\r
        AccordionContent() { "Content for Accordion Item 1" }\r
    }\r
}
`})}),`
`,o.jsx(n.p,{children:"The Items can be dynamically created:"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-fsharp",children:`Accordion().spread acc {\r
    For(each = [| 1;2;3;4;5;6 |]) {\r
        yield fun idx _ ->\r
            AccordionItem(value = $"Accordion{idx}") {\r
                AccordionTrigger() {\r
                    $"Title {idx}"\r
                }\r
                AccordionContent() {\r
                    $"Content {idx}"\r
                }\r
            }\r
    }\r
}
`})}),`
`,o.jsx(m,{of:a,sourceState:"none",withToolbar:!0}),`
`,o.jsx(p,{}),`
`,o.jsx(n.p,{children:"The accordion is composed of multiple subcomponents:"}),`
`,o.jsx(n.h2,{id:"accordion",children:"Accordion"}),`
`,o.jsx(e,{of:i}),`
`,o.jsx(n.h3,{id:"accordionitem",children:"AccordionItem"}),`
`,o.jsx(e,{of:l,exclude:/[A-Za-z0-9'_]+@_1$/}),`
`,o.jsx(n.h4,{id:"accordiontrigger",children:"AccordionTrigger"}),`
`,o.jsxs(n.blockquote,{children:[`
`,o.jsx(n.p,{children:"No relevant props"}),`
`]}),`
`,o.jsx(n.h4,{id:"accordioncontent",children:"AccordionContent"}),`
`,o.jsxs(n.blockquote,{children:[`
`,o.jsx(n.p,{children:"No relevant props"}),`
`]})]})}function B(r={}){const{wrapper:n}={...c(),...r.components};return n?o.jsx(n,{...r,children:o.jsx(t,{...r})}):t(r)}export{B as default};

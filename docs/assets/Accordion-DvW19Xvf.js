import{G as n,H as s,T as d,K as a,L as p,N as l,O as e}from"./iframe-BHVPMPJn.js";import{useMDXComponents as c}from"./index-CB5oDCs8.js";import{A as t,D as m}from"./Accordion.stories-Boj6XikR.js";import{A as h}from"./AccordionItem.stories-DVBRW--2.js";import"./preload-helper-PPVm8Dsz.js";import"./Accordion-D1Nw5KBa.js";import"./N3GAC5SS-C1DyDo7m.js";import"./QZDH5R5B-BZBDFFES.js";import"./index-DeTOQkeb.js";import"./index-DzweoC3U.js";import"./LR7LBJN3-Ddt3mnWg.js";import"./FN6EICGO-BXZAkfGN.js";import"./Utils-CAhjhIiz.js";import"./UGE6PPGT-DeK48Cqr.js";import"./E53DB7BS-BWjGcyhp.js";import"./UKTBL2JL-BmAvJ-mx.js";import"./OYES4GOP-B_JtkMZ5.js";import"./FLVHQV4A-C_-euiFy.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BWY3wABR.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-CdhZt3CN.js";import"./U42ECMND-BDjyePcW.js";import"./combineProps-C_bsadWN.js";import"./SOM3K36D-B0WlF5qk.js";import"./chevron-down-BRgDkk9P.js";import"./Icon-DcpizePo.js";const x=`\uFEFFnamespace Partas.Solid.UI

open Partas.Solid
open Fable.Core
open Partas.Solid.Kobalte
open Partas.Solid.Lucide


[<Erase>]
type AccordionItem() =
    inherit Accordion.Item()
    [<SolidTypeComponent>]
    member props.constructor =
        Accordion.Item(class' = Lib.cn [|
            "border-b last:border-b-0"
            props.class'
        |]) .dataSlot("accordion-item")
            .spread props

[<Erase>]
type AccordionTrigger() =
    inherit Accordion.Trigger()
    [<SolidTypeComponent>]
    member props.constructor =
        Accordion.Header(class' = "flex") {
            Accordion.Trigger(class' = Lib.cn [|
                "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 \\
                items-start justify-between gap-4 rounded-md py-4 text-left text-sm \\
                font-medium transition-all outline-none hover:underline \\
                focus-visible:ring-[3px] disabled:pointer-events-none \\
                disabled:opacity-50 [&[data-expanded]>svg]:rotate-180"
                props.class'
            |]) .dataSlot("accordion-trigger")
                .spread props {
                props.children
                ChevronDown(
                    strokeWidth = 2,
                    class' = "text-muted-foreground pointer-events-none size-4 \\
                            shrink-0 transition-transform duration-200"
                )
            }
        }

[<Erase>]
type AccordionContent() =
    inherit Accordion.Content()
    [<SolidTypeComponent>]
    member props.constructor =
        Accordion.Content(class' = 
            "animate-accordion-up overflow-hidden text-sm transition-all data-[expanded]:animate-accordion-down"
        )   .dataSlot("accordion-content")
            .spread props {
            div(class' = Lib.cn [| "pb-4 pt-0"; props.class' |])
                { props.children }
        }

[<Erase>]
type Accordion() =
    inherit Kobalte.Accordion()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.Accordion().dataSlot("accordion").spread props
`;function i(r){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...c(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:t}),`
`,n.jsx(d,{}),`
`,n.jsx(o.p,{children:"You typically compose an accordion in the following manner:"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-fsharp",children:`Accordion() {\r
    AccordionItem(value = "item1") {\r
        AccordionTrigger() { "Item 1" }\r
        AccordionContent() { "Content for Accordion Item 1" }\r
    }\r
}
`})}),`
`,n.jsx(o.p,{children:"The Items can be dynamically created:"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-fsharp",children:`Accordion().spread acc {\r
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
`,n.jsx(a,{of:m,sourceState:"none",withToolbar:!0}),`
`,n.jsx(p,{}),`
`,n.jsx(l,{code:x}),`
`,n.jsx(o.p,{children:"The accordion is composed of multiple subcomponents:"}),`
`,n.jsx(o.h2,{id:"accordion",children:"Accordion"}),`
`,n.jsx(e,{of:t}),`
`,n.jsx(o.h3,{id:"accordionitem",children:"AccordionItem"}),`
`,n.jsx(e,{of:h,exclude:/[A-Za-z0-9'_]+@_1$/}),`
`,n.jsx(o.h4,{id:"accordiontrigger",children:"AccordionTrigger"}),`
`,n.jsxs(o.blockquote,{children:[`
`,n.jsx(o.p,{children:"No relevant props"}),`
`]}),`
`,n.jsx(o.h4,{id:"accordioncontent",children:"AccordionContent"}),`
`,n.jsxs(o.blockquote,{children:[`
`,n.jsx(o.p,{children:"No relevant props"}),`
`]})]})}function H(r={}){const{wrapper:o}={...c(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(i,{...r})}):i(r)}export{H as default};

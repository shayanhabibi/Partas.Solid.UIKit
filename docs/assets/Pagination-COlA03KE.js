import{G as n,H as p,T as l,K as m,L as c,O as i}from"./iframe-BHVPMPJn.js";import{useMDXComponents as s}from"./index-CB5oDCs8.js";import{P as e,D as d}from"./Pagination.stories-De4z7VKD.js";import{P as h}from"./PaginationItems.stories-DPXDy2jz.js";import{P as g}from"./PaginationItem.stories-GLzQkdKq.js";import{P}from"./PaginationEllipsis.stories-eK-YjGTy.js";import{P as u}from"./PaginationNext.stories-BGXjCTNJ.js";import{P as x}from"./PaginationPrevious.stories-CZmzC8xm.js";import"./preload-helper-PPVm8Dsz.js";import"./Pagination-DJ659RE2.js";import"./UKTBL2JL-BmAvJ-mx.js";import"./OYES4GOP-B_JtkMZ5.js";import"./index-DeTOQkeb.js";import"./FLVHQV4A-C_-euiFy.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BWY3wABR.js";import"./index-DzweoC3U.js";import"./FN6EICGO-BXZAkfGN.js";import"./Utils-CAhjhIiz.js";import"./Button-DF4RW6v0.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./ellipsis-GFDfqgPc.js";import"./Icon-DcpizePo.js";import"./chevron-left-Djeiuc_Y.js";import"./chevron-right-C-MrCkqN.js";const f=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
open Partas.Solid.Aria\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
\r
\r
[<Erase>]\r
type PaginationItems() =\r
    inherit Pagination.Items()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Pagination.Items()\r
            .dataSlot("pagination-items")\r
            .spread props\r
    \r
[<Erase>]\r
type Pagination() =\r
    inherit Kobalte.Pagination()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Pagination(class' = Lib.cn [|\r
            "[&>*]:flex [&>*]:flex-row [&>*]:items-center [&>*]:gap-1"\r
            props.class'\r
        |]) .dataSlot("pagination")\r
            .spread(props)\r
[<Erase>]\r
type PaginationItem() =\r
    inherit Pagination.Item()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Pagination.Item(class' = Lib.cn [|\r
            Button.variants(Button.Variant.Ghost)\r
            "size-10 data-[current]:border"\r
            props.class'\r
        |]) .dataSlot("pagination-item")\r
            .spread(props)\r
[<Erase>]\r
type PaginationEllipsis() =\r
    inherit Pagination.Ellipsis()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Pagination.Ellipsis(class'= Lib.cn [|\r
            "flex size-10 items-center justify-center"\r
            props.class'\r
        |]) .dataSlot("pagination-ellipsis")\r
            .spread(props) {\r
            Lucide.Lucide.Ellipsis(class'="size-4",strokeWidth = 2)\r
            span(class'="sr-only") {"More pages"}\r
        }\r
[<Erase>]\r
type PaginationPrevious() =\r
    inherit Pagination.Previous()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        let children,hasChildren = Lib.createChildrenResolver(props.children)\r
        Kobalte.Pagination.Previous(class' = Lib.cn [|\r
            Button.variants(Button.Variant.Ghost)\r
            "gap-1 pl-2.5"\r
            props.class'\r
        |]) .dataSlot("pagination-previous")\r
            .spread(props) {\r
            Show(when' = (hasChildren()),\r
                 fallback = Fragment() {\r
                     Lucide.Lucide.ChevronLeft(class'="size-4", strokeWidth = 2)\r
                     span() { "Previous" }\r
                 }) {\r
                children()\r
            }\r
        }\r
[<Erase>]\r
type PaginationNext() =\r
    inherit Pagination.Next()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        let children, hasChildren = Lib.createChildrenResolver(props.children)\r
        Kobalte.Pagination.Next(class' = Lib.cn [|\r
            Button.variants(Button.Variant.Ghost)\r
            "gap-1 pl-2.5"\r
            props.class'\r
        |]) .dataSlot("pagination-next")\r
            .spread(props) {\r
            if hasChildren() then\r
                children()\r
            else \r
                Fragment() {\r
                    span() {"Next"}\r
                    Lucide.Lucide.ChevronRight(class'="size-4", strokeWidth = 2)\r
                }\r
        }\r
\r
\r
`;function a(o){const r={h2:"h2",h3:"h3",...s(),...o.components},{SourceCode:t}=r;return t||b("SourceCode"),n.jsxs(n.Fragment,{children:[n.jsx(p,{of:e}),`
`,n.jsx(l,{}),`
`,n.jsx(m,{of:d,sourceState:"none",layout:"centered",withToolbar:!0}),`
`,n.jsx(c,{}),`
`,n.jsx(t,{code:f}),`
`,n.jsx(r.h2,{id:"components",children:"Components"}),`
`,n.jsx(r.h3,{id:"pagination",children:"Pagination"}),`
`,n.jsx(i,{of:e}),`
`,n.jsx(r.h3,{id:"paginationitems",children:"PaginationItems"}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(r.h3,{id:"paginationitem",children:"PaginationItem"}),`
`,n.jsx(i,{of:g}),`
`,n.jsx(r.h3,{id:"paginationellipsis",children:"PaginationEllipsis"}),`
`,n.jsx(i,{of:P}),`
`,n.jsx(r.h3,{id:"paginationnext",children:"PaginationNext"}),`
`,n.jsx(i,{of:u}),`
`,n.jsx(r.h3,{id:"paginationprevious",children:"PaginationPrevious"}),`
`,n.jsx(i,{of:x})]})}function H(o={}){const{wrapper:r}={...s(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(a,{...o})}):a(o)}function b(o,r){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{H as default};

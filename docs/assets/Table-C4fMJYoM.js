import{G as r,H as p,T as i,K as d,L as c,O as o}from"./iframe-Ss2HFUgg.js";import{useMDXComponents as l}from"./index--e61kTGT.js";import{T as s,D as b}from"./Table.stories-CHpHZV-N.js";import{T as m}from"./TableHeader.stories-DwXOufLV.js";import{T as h}from"./TableBody.stories-B3Ba68Gg.js";import{T}from"./TableFooter.stories-BAYv5-CU.js";import{T as f}from"./TableRow.stories-DVSbYOga.js";import{T as x}from"./TableHead.stories-oaTTFbs0.js";import{T as u}from"./TableCell.stories-SAQ4d6HX.js";import{T as y}from"./TableCaption.stories-j_YkV0sn.js";import"./preload-helper-PPVm8Dsz.js";import"./Table-CtrOwoSD.js";import"./Utils-Bv7TLaDt.js";import"./index-axew2xP3.js";const S=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Fable.Core\r
\r
[<Erase>]\r
type Table() =\r
    inherit table()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class' = "relative w-full overflow-auto")\r
            .dataSlot("table") {\r
            table(class' = Lib.cn [| "w-full caption-bottom text-sm"; props.class' |])\r
                .spread props\r
        }\r
\r
[<Erase>]\r
type TableHeader() =\r
    inherit thead()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        thead(class' = Lib.cn [|\r
            "[&_tr]:border-b"\r
            props.class'\r
        |]) .dataSlot("table-header")\r
            .spread props\r
\r
[<Erase>]\r
type TableBody() =\r
    inherit tbody()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        tbody(class' = Lib.cn [|\r
            "[&_tr:last-child]:border-0"\r
            props.class'\r
        |]) .dataSlot("table-body")\r
            .spread props\r
\r
[<Erase>]\r
type TableFooter() =\r
    inherit tfoot()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        tfoot(class' = Lib.cn [|\r
            "bg-primary font-medium text-primary-foreground"\r
            props.class'\r
        |]) .dataSlot("table-footer")\r
            .spread props\r
\r
[<Erase>]\r
type TableRow() =\r
    inherit tr()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        tr(class' = Lib.cn [|\r
            "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"\r
            props.class'\r
        |]) .dataSlot("table-row")\r
            .spread props\r
\r
[<Erase>]\r
type TableHead() =\r
    inherit th()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        th(class' = Lib.cn [|\r
            "h-10 px-2 text-left align-middle font-medium\r
            text-muted-foreground [&:has([role=checkbox])]:pr-0"\r
            props.class'\r
        |]) .dataSlot("table-head")\r
            .spread props\r
\r
[<Erase>]\r
type TableCell() =\r
    inherit td()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        td(class' = Lib.cn [|\r
            "p-2 align-middle [&:has([role=checkbox])]:pr-0"; props.class'\r
        |]) .dataSlot("table-cell")\r
            .spread props\r
        \r
[<Erase>]\r
type TableCaption() =\r
    inherit caption()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        caption(class' = Lib.cn [|\r
            "mt-4 text-sm text-muted-foreground"; props.class'\r
        |]) .dataSlot("table-caption")\r
            .spread props\r
        \r
`;function a(n){const e={h2:"h2",h3:"h3",...l(),...n.components},{SourceCode:t}=e;return t||j("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:s}),`
`,r.jsx(i,{}),`
`,r.jsx(d,{of:b,withToolbar:!0,sourceState:"none"}),`
`,r.jsx(c,{}),`
`,r.jsx(t,{code:S}),`
`,r.jsx(e.h2,{id:"components",children:"Components"}),`
`,r.jsx(e.h3,{id:"table",children:"Table"}),`
`,r.jsx(o,{of:s}),`
`,r.jsx(e.h3,{id:"tableheader",children:"TableHeader"}),`
`,r.jsx(o,{of:m}),`
`,r.jsx(e.h3,{id:"tablebody",children:"TableBody"}),`
`,r.jsx(o,{of:h}),`
`,r.jsx(e.h3,{id:"tablefooter",children:"TableFooter"}),`
`,r.jsx(o,{of:T}),`
`,r.jsx(e.h3,{id:"tablerow",children:"TableRow"}),`
`,r.jsx(o,{of:f}),`
`,r.jsx(e.h3,{id:"tablehead",children:"TableHead"}),`
`,r.jsx(o,{of:x}),`
`,r.jsx(e.h3,{id:"tablecell",children:"TableCell"}),`
`,r.jsx(o,{of:u}),`
`,r.jsx(e.h3,{id:"tablecaption",children:"TableCaption"}),`
`,r.jsx(o,{of:y})]})}function B(n={}){const{wrapper:e}={...l(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(a,{...n})}):a(n)}function j(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{B as default};

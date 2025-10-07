import{G as e,H as l,T as d,K as p,L as c,O as t}from"./iframe-BHVPMPJn.js";import{useMDXComponents as s}from"./index-CB5oDCs8.js";import{R as a,D as f}from"./Resizeable.stories-BpEqMTLo.js";import{R as m}from"./ResizeablePanel.stories-CcwC4Fr9.js";import{R as b}from"./ResizeableHandle.stories-FGQ5Rn45.js";import"./preload-helper-PPVm8Dsz.js";import"./Resizeable-BJdRM26N.js";import"./size-Bch4e9pt.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./Utils-CAhjhIiz.js";import"./index-DzweoC3U.js";import"./grip-vertical-CZ3Vcsa2.js";import"./Icon-DcpizePo.js";const u=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Lucide\r
open Partas.Solid.Corvu\r
open Fable.Core\r
\r
[<Erase>]\r
type Resizeable() =\r
    inherit Corvu.Resizable()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Corvu.Resizable(class' = Lib.cn [|\r
            "flex size-full data-[orientation=vertical]:flex-col"\r
            props.class'\r
        |]) .dataSlot("resizable")\r
            .spread(props)\r
[<Erase>]\r
type ResizeablePanel() =\r
    inherit Resizable.Panel()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Resizable.Panel()\r
            .dataSlot("resizable-panel")\r
            .spread props\r
\r
[<Erase>]\r
type ResizeableHandle() =\r
    inherit Resizable.Handle()\r
    [<Erase>]\r
    member val withHandle: bool = jsNative with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Corvu.Resizable.Handle(class' = Lib.cn [|\r
            // todo - needs the focus ring to be updated\r
            "relative flex w-px shrink-0 items-center justify-center\r
            bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1\r
            after:-translate-x-1/2 focus-visible:outline-none\r
            focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1\r
            data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full\r
            data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1\r
            data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:-translate-y-1/2\r
            data-[orientation=vertical]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90"\r
            props.class'\r
        |]) .dataSlot("resizable-handle") \r
            .spread(props) {\r
            Show(when'= props.withHandle) {\r
                div(class'= "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border") {\r
                    GripVertical(class'="size-2.5", strokeWidth = 2)\r
                }\r
            }\r
        } \r
\r
`;function i(n){const r={h2:"h2",h3:"h3",...s(),...n.components},{SourceCode:o}=r;return o||h("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(l,{of:a}),`
`,e.jsx(d,{}),`
`,e.jsx(p,{of:f,layout:"centered",withToolbar:!0,sourceState:"none"}),`
`,e.jsx(c,{}),`
`,e.jsx(o,{code:u}),`
`,e.jsx(r.h2,{id:"components",children:"Components"}),`
`,e.jsx(r.h3,{id:"resizeable",children:"Resizeable"}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(r.h3,{id:"resizeablepanel",children:"ResizeablePanel"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(r.h3,{id:"resizeablehandle",children:"ResizeableHandle"}),`
`,e.jsx(t,{of:b})]})}function M(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}function h(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{M as default};

import{H as o,I as a,T as d,L as l,N as m,Q as n}from"./iframe-DHSEN8D7.js";import{useMDXComponents as s}from"./index-e4aCb-2o.js";import{T as i,D as c}from"./Tooltip.stories-CazlKXkE.js";import{T as f}from"./TooltipTrigger.stories-zjAFO3bZ.js";import{T as u}from"./TooltipContent.stories-0L16CjF2.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BEV_7GtL.js";import"./2CTBMVJ4-Db2FGNLe.js";import"./LR7LBJN3-B1LX4Q8m.js";import"./index-SvhdUoxj.js";import"./FLVHQV4A-VgAG7mUH.js";import"./index-CX5o166x.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-1c5Tq1Kt.js";import"./combineProps-ChBwTExo.js";import"./3VFJM5NZ-DDmjFnWc.js";import"./E53DB7BS-C475FHrG.js";import"./FN6EICGO-CNc9l087.js";import"./JNCCF6MP-4sxnBYeu.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-ptAOXcxb.js";import"./U42ECMND-BDjyePcW.js";import"./Utils-CzREY3kc.js";const g=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
\r
[<Erase>]\r
type TooltipTrigger() =\r
    inherit Tooltip.Trigger()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Tooltip.Trigger()\r
            .dataSlot("tooltip-trigger")\r
            .spread props\r
\r
[<Erase>]\r
type Tooltip() =\r
    inherit Kobalte.Tooltip()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Kobalte.Tooltip(gutter = 4)\r
            .dataSlot("tooltip")\r
            .spread props\r
\r
open Partas.Solid.Style\r
[<Erase>]\r
type TooltipContent() =\r
    inherit Tooltip.Content()\r
    [<Erase>]\r
    member val sideOffset: float = JS.undefined with get,set\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        props.sideOffset <- 0\r
        Tooltip.Portal().dataSlot("tooltip-portal") {\r
            Tooltip.Content(class' = Lib.cn [|\r
                "bg-foreground selection-none text-background animate-in fade-in-0 zoom-in-95 \\\r
                data-[closed]:animate-out data-[closed]:fade-out-0 \\\r
                data-[closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 \\\r
                data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 \\\r
                data-[side=top]:slide-in-from-bottom-2 z-50 w-fit \\\r
                origin-(--kb-popover-content-transform-origin) rounded-md px-3 \\\r
                py-1.5 text-xs text-balance select-none"\r
                // "z-50 origin-(--kb-popover-content-transform-origin)\r
                // overflow-hidden rounded-md border bg-popover px-3 py-1.5\r
                // text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95"\r
                props.class'\r
            |]) .dataSlot("tooltip-content")\r
                .spread props {\r
                    // Tooltip.Arrow(class' =\r
                    //     "bg-foreground fill-foreground \\\r
                    //     translate-y-[calc(50%_+_2px)] \\\r
                    //     z-50 rotate-45 rounded-[2px]",\r
                    //     size = 12).dataSlot("arrow")\r
                    props.children\r
                }\r
        }\r
`;function p(r){const t={h2:"h2",h3:"h3",...s(),...r.components},{SourceCode:e}=t;return e||T("SourceCode"),o.jsxs(o.Fragment,{children:[o.jsx(a,{of:i}),`
`,o.jsx(d,{}),`
`,o.jsx(l,{of:c,layout:"centered",sourceState:"none",withToolbar:!0}),`
`,o.jsx(m,{}),`
`,o.jsx(e,{code:g}),`
`,o.jsx(t.h2,{id:"components",children:"Components"}),`
`,o.jsx(t.h3,{id:"tooltip",children:"Tooltip"}),`
`,o.jsx(n,{of:i}),`
`,o.jsx(t.h3,{id:"tooltiptrigger",children:"TooltipTrigger"}),`
`,o.jsx(n,{of:f}),`
`,o.jsx(t.h3,{id:"tooltipcontent",children:"TooltipContent"}),`
`,o.jsx(n,{of:u})]})}function R(r={}){const{wrapper:t}={...s(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}function T(r,t){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{R as default};

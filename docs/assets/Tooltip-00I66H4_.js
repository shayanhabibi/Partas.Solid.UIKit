import{G as o,H as a,T as d,K as l,L as m,O as n}from"./iframe-BLvaHOrW.js";import{useMDXComponents as s}from"./index-DMt2PYli.js";import{T as i,D as c}from"./Tooltip.stories-C2p7QoTN.js";import{T as f}from"./TooltipTrigger.stories-CTsLTTEj.js";import{T as u}from"./TooltipContent.stories-BtzVPFHs.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-B4c0hFup.js";import"./2CTBMVJ4-B0PPoY8r.js";import"./LR7LBJN3-DXU4Tgxl.js";import"./index-C2xVdcqa.js";import"./FLVHQV4A-ByRBKILc.js";import"./index-TpYiyspx.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-BbcR3rHk.js";import"./combineProps-TuyxsfEg.js";import"./3VFJM5NZ-Df8-87fx.js";import"./E53DB7BS-DgMsdUV6.js";import"./FN6EICGO-DozerlcD.js";import"./JNCCF6MP-4sxnBYeu.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-D5LuZuuz.js";import"./U42ECMND-BDjyePcW.js";import"./Utils-BEjpZvS7.js";const g=`\uFEFFnamespace Partas.Solid.UI\r
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
`,o.jsx(n,{of:u})]})}function G(r={}){const{wrapper:t}={...s(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}function T(r,t){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{G as default};

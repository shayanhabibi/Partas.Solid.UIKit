import{G as o,H as s,T as m,K as d,L as c,O as n}from"./iframe-BLvaHOrW.js";import{useMDXComponents as a}from"./index-DMt2PYli.js";import{P as p,D as l}from"./Popover.stories-COny7EN0.js";import{P as v}from"./PopoverTrigger.stories-9Oda6SBV.js";import{P as u}from"./PopoverContent.stories-X1Y88dY9.js";import"./preload-helper-PPVm8Dsz.js";import"./Popover-WUFJSYTi.js";import"./2CTBMVJ4-B0PPoY8r.js";import"./LR7LBJN3-DXU4Tgxl.js";import"./index-C2xVdcqa.js";import"./FLVHQV4A-ByRBKILc.js";import"./index-TpYiyspx.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-BbcR3rHk.js";import"./combineProps-TuyxsfEg.js";import"./FBCYWU27-BMpJGD58.js";import"./3VFJM5NZ-Df8-87fx.js";import"./JHMNWOLY-CsDzS1Uk.js";import"./E53DB7BS-DgMsdUV6.js";import"./FN6EICGO-DozerlcD.js";import"./UKTBL2JL-mrSn-dg4.js";import"./OYES4GOP-DJL3U5Gx.js";import"./5WXHJDCZ-DghNgBBa.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-BAQLNUOo.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-D5LuZuuz.js";import"./Utils-BEjpZvS7.js";const x=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
\r
[<Erase>]\r
type PopoverTrigger() =\r
    inherit Popover.Trigger()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Popover.Trigger()\r
            .dataSlot("popover-trigger")\r
            .spread props\r
\r
[<Erase>]\r
type Popover() =\r
    inherit Kobalte.Popover()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Popover(gutter = 4)\r
            .dataSlot("popover")\r
            .spread props\r
    \r
[<Erase>]\r
type PopoverContent() =\r
    inherit Popover.Content()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Popover.Portal().dataSlot("popover-portal") {\r
            Popover.Content(class' = Lib.cn [|\r
                "z-50 w-72 origin-[var(--kb-popover-content-transform-origin)]\r
                rounded-md border bg-popover p-4 text-popover-foreground shadow-md\r
                outline-none data-[expanded]:animate-in data-[closed]:animate-out\r
                data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95\r
                data-[expanded]:zoom-in-95"\r
                props.class'\r
            |]) .dataSlot("popover-content")\r
                .spread(props)\r
        }\r
`;function i(e){const r={h2:"h2",h3:"h3",...a(),...e.components},{SourceCode:t}=r;return t||f("SourceCode"),o.jsxs(o.Fragment,{children:[o.jsx(s,{of:p}),`
`,o.jsx(m,{}),`
`,o.jsx(d,{of:l,layout:"centered",withToolbar:!0,sourceState:"none"}),`
`,o.jsx(c,{}),`
`,o.jsx(t,{code:x}),`
`,o.jsx(r.h2,{id:"components",children:"Components"}),`
`,o.jsx(r.h3,{id:"popover",children:"Popover"}),`
`,o.jsx(n,{of:p}),`
`,o.jsx(r.h3,{id:"popovertrigger",children:"PopoverTrigger"}),`
`,o.jsx(n,{of:v}),`
`,o.jsx(r.h3,{id:"popovercontent",children:"PopoverContent"}),`
`,o.jsx(n,{of:u})]})}function J(e={}){const{wrapper:r}={...a(),...e.components};return r?o.jsx(r,{...e,children:o.jsx(i,{...e})}):i(e)}function f(e,r){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{J as default};

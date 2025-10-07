import{G as o,H as s,T as m,K as d,L as c,O as n}from"./iframe-BHVPMPJn.js";import{useMDXComponents as a}from"./index-CB5oDCs8.js";import{P as p,D as l}from"./Popover.stories-BYqEeasI.js";import{P as v}from"./PopoverTrigger.stories-DZ9h65dk.js";import{P as u}from"./PopoverContent.stories-JCDbzYw1.js";import"./preload-helper-PPVm8Dsz.js";import"./Popover-Do3tmd9e.js";import"./2CTBMVJ4-DtmKwrBD.js";import"./LR7LBJN3-Ddt3mnWg.js";import"./index-DzweoC3U.js";import"./FLVHQV4A-C_-euiFy.js";import"./index-DeTOQkeb.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-BWY3wABR.js";import"./combineProps-C_bsadWN.js";import"./FBCYWU27-RI55FxO7.js";import"./3VFJM5NZ-Cb4P0J_t.js";import"./JHMNWOLY-DdZhD2t0.js";import"./E53DB7BS-BWjGcyhp.js";import"./FN6EICGO-BXZAkfGN.js";import"./UKTBL2JL-BmAvJ-mx.js";import"./OYES4GOP-B_JtkMZ5.js";import"./5WXHJDCZ-DghNgBBa.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-C_rqj1ej.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-CdhZt3CN.js";import"./Utils-CAhjhIiz.js";const x=`\uFEFFnamespace Partas.Solid.UI\r
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

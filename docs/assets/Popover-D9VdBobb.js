import{G as o,H as s,T as m,K as d,L as c,O as n}from"./iframe-Ss2HFUgg.js";import{useMDXComponents as a}from"./index--e61kTGT.js";import{P as p,D as l}from"./Popover.stories-s-hESzzs.js";import{P as v}from"./PopoverTrigger.stories-B8tc9D3c.js";import{P as u}from"./PopoverContent.stories-BNZipiw5.js";import"./preload-helper-PPVm8Dsz.js";import"./Popover-DgVVQ0QU.js";import"./2CTBMVJ4-BJBOPr5i.js";import"./LR7LBJN3-RceSjpmp.js";import"./index-axew2xP3.js";import"./FLVHQV4A-DhRRNmDB.js";import"./index-DsOqkTmx.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-Da4i2tMy.js";import"./combineProps-Dc0BZltT.js";import"./FBCYWU27-CflOAPjT.js";import"./3VFJM5NZ-sgbSJPuq.js";import"./JHMNWOLY-GWqRWAK3.js";import"./E53DB7BS-B46G7qd5.js";import"./FN6EICGO-DOeDID0N.js";import"./UKTBL2JL-DisnMsyh.js";import"./OYES4GOP-BvTDlBrO.js";import"./5WXHJDCZ-DghNgBBa.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-D8XsDJNg.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-Dwv4USTq.js";import"./Utils-Bv7TLaDt.js";const x=`\uFEFFnamespace Partas.Solid.UI\r
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

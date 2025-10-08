import{H as o,I as s,T as m,L as d,N as c,Q as n}from"./iframe-DHSEN8D7.js";import{useMDXComponents as a}from"./index-e4aCb-2o.js";import{P as p,D as l}from"./Popover.stories-DRUTBxuX.js";import{P as v}from"./PopoverTrigger.stories-C7WWqmyl.js";import{P as u}from"./PopoverContent.stories-CUCSd8Es.js";import"./preload-helper-PPVm8Dsz.js";import"./Popover-CB59b4Rz.js";import"./2CTBMVJ4-Db2FGNLe.js";import"./LR7LBJN3-B1LX4Q8m.js";import"./index-SvhdUoxj.js";import"./FLVHQV4A-VgAG7mUH.js";import"./index-CX5o166x.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-1c5Tq1Kt.js";import"./combineProps-ChBwTExo.js";import"./FBCYWU27-BRaomcyy.js";import"./3VFJM5NZ-DDmjFnWc.js";import"./JHMNWOLY-BX05bB8i.js";import"./E53DB7BS-C475FHrG.js";import"./FN6EICGO-CNc9l087.js";import"./UKTBL2JL-D9vX2QTQ.js";import"./OYES4GOP-D4sXc2ip.js";import"./5WXHJDCZ-DghNgBBa.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-B53RNSLG.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-ptAOXcxb.js";import"./Utils-CzREY3kc.js";const x=`\uFEFFnamespace Partas.Solid.UI\r
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
`,o.jsx(n,{of:u})]})}function G(e={}){const{wrapper:r}={...a(),...e.components};return r?o.jsx(r,{...e,children:o.jsx(i,{...e})}):i(e)}function f(e,r){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{G as default};

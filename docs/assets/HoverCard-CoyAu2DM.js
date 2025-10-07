import{G as r,H as s,T as d,K as p,L as m,O as t}from"./iframe-BHVPMPJn.js";import{useMDXComponents as i}from"./index-CB5oDCs8.js";import{H as c,D as l}from"./HoverCard.stories-D6zQTW9A.js";import{H as C}from"./HoverCardTrigger.stories-DEVygMcC.js";import{H as h}from"./HoverCardContent.stories-DKAYzfo6.js";import"./preload-helper-PPVm8Dsz.js";import"./HoverCard-DG0Vm_TF.js";import"./2CTBMVJ4-DtmKwrBD.js";import"./LR7LBJN3-Ddt3mnWg.js";import"./index-DzweoC3U.js";import"./FLVHQV4A-C_-euiFy.js";import"./index-DeTOQkeb.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-BWY3wABR.js";import"./combineProps-C_bsadWN.js";import"./3VFJM5NZ-Cb4P0J_t.js";import"./E53DB7BS-BWjGcyhp.js";import"./FN6EICGO-BXZAkfGN.js";import"./3JA5IX2L-DpOzWl1o.js";import"./OYES4GOP-B_JtkMZ5.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-CdhZt3CN.js";import"./U42ECMND-BDjyePcW.js";import"./Utils-CAhjhIiz.js";const f=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
\r
[<Erase>]\r
type HoverCardTrigger() =\r
    inherit HoverCard.Trigger()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        HoverCard.Trigger()\r
            .dataSlot("hover-card-trigger")\r
            .spread props\r
    \r
[<Erase>]\r
type HoverCard() =\r
    inherit Kobalte.HoverCard()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.HoverCard(gutter = 4)\r
            .dataSlot("hover-card")\r
            .spread props\r
\r
[<Erase>]\r
type HoverCardContent() =\r
    inherit HoverCard.Content()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        HoverCard.Portal().dataSlot("hover-card-portal") {\r
            HoverCard.Content(class' = Lib.cn [|\r
                "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground\r
                shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out\r
                data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0\r
                data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95\r
                data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2\r
                data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"\r
                props.class'\r
            |]) .dataSlot("hover-card-content")\r
                .spread(props)\r
        }\r
`;function a(e){const o={h2:"h2",h3:"h3",...i(),...e.components},{SourceCode:n}=o;return n||v("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c}),`
`,r.jsx(d,{}),`
`,r.jsx(p,{of:l,layout:"centered",sourceState:"none",withToolbar:!0}),`
`,r.jsx(m,{}),`
`,r.jsx(n,{code:f}),`
`,r.jsx(o.h2,{id:"components",children:"Components"}),`
`,r.jsx(o.h3,{id:"hovercard",children:"HoverCard"}),`
`,r.jsx(t,{}),`
`,r.jsx(o.h3,{id:"hovercardtrigger",children:"HoverCardTrigger"}),`
`,r.jsx(t,{of:C}),`
`,r.jsx(o.h3,{id:"hovercardcontent",children:"HoverCardContent"}),`
`,r.jsx(t,{of:h})]})}function I(e={}){const{wrapper:o}={...i(),...e.components};return o?r.jsx(o,{...e,children:r.jsx(a,{...e})}):a(e)}function v(e,o){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{I as default};

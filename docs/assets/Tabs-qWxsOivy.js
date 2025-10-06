import{G as r,H as d,T as p,K as c,L as l,O as e}from"./iframe-Ss2HFUgg.js";import{useMDXComponents as a}from"./index--e61kTGT.js";import{T as s,D as b}from"./Tabs.stories-bH8fyC8Z.js";import{T as m}from"./TabsList.stories-BcddMBQ1.js";import{T as u}from"./TabsTrigger.stories-t8MauK5L.js";import{T as f}from"./TabsContent.stories-BP1abUaS.js";import{T as x}from"./TabsIndicator.stories-DQlCP7bP.js";import"./preload-helper-PPVm8Dsz.js";import"./Tabs-B90cdvB-.js";import"./XTJD7L6B-CHFuNE8o.js";import"./QZDH5R5B-BWDH-QCD.js";import"./index-DsOqkTmx.js";import"./index-axew2xP3.js";import"./LR7LBJN3-RceSjpmp.js";import"./FN6EICGO-DOeDID0N.js";import"./Utils-Bv7TLaDt.js";import"./SOM3K36D-DE1P6_or.js";import"./FLVHQV4A-DhRRNmDB.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-Dwv4USTq.js";import"./U42ECMND-BDjyePcW.js";import"./index-D9pSnWvr.js";import"./index-Da4i2tMy.js";import"./combineProps-Dc0BZltT.js";const g=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
\r
[<Erase>]\r
type Tabs() =\r
    inherit Kobalte.Tabs()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Kobalte.Tabs(class' = Lib.cn [|\r
            "flex flex-col gap-2"\r
            props.class'\r
        |])\r
            .dataSlot("tabs")\r
            .spread props\r
\r
[<Erase>]\r
type TabsList() =\r
    inherit Tabs.List()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Tabs.List(class' = Lib.cn [|\r
            "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]"\r
            // "relative inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"\r
            props.class'\r
        |]) .dataSlot("tabs-list")\r
            .spread props\r
\r
[<Erase>]\r
type TabsTrigger() =\r
    inherit Tabs.Trigger()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Tabs.Trigger(class' = Lib.cn [|\r
            "data-[selected]:bg-background dark:data-[selected]:text-foreground \\\r
            focus-visible:input-focus-border \\\r
            dark:data-[selected]:border-input dark:data-[selected]:bg-input/30 \\\r
            data-[selected]:text-foreground \\\r
            text-muted-foreground \\\r
            dark:text-muted-foreground inline-flex h-[calc(100%-1px)] \\\r
            flex-1 items-center justify-center gap-1.5 rounded-md input-border \\\r
            border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap\r
            transition-[color,box-shadow] focus-visible:outline-1 disabled:pointer-events-none \\\r
            disabled:opacity-50 data-[selected]:shadow-sm [&_svg]:pointer-events-none \\\r
            [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"\r
            // "inline-flex items-center justify-center whitespace-nowrap\r
            // rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background\r
            // transition-all focus-visible:outline-none focus-visible:ring-2\r
            // focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none\r
            // disabled:opacity-50 data-[selected]:bg-background\r
            // data-[selected]:text-foreground data-[selected]:shadow-sm"\r
            props.class'\r
        |]) .dataSlot("tabe-trigger")\r
            .spread props\r
\r
[<Erase>]\r
type TabsContent() =\r
    inherit Tabs.Content()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Tabs.Content(class' = Lib.cn [|\r
            "flex-1 outline-none transition-[color,box-shadow] focus-visible:input-focus-border"\r
            props.class'\r
        |]) .dataSlot("tabs-content")\r
            .spread props\r
\r
[<Erase>]\r
type TabsIndicator() =\r
    inherit Tabs.Indicator()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Tabs.Indicator(class' = Lib.cn [|\r
            "duration-250ms absolute transition-all data-[orientation=horizontal]:-bottom-px\r
            data-[orientation=vertical]:-right-px data-[orientation=horizontal]:h-[2px]\r
            data-[orientation=vertical]:w-[2px]"\r
            props.class'\r
        |]) .dataSlot("tabs-indicator")\r
            .spread props\r
`;function i(n){const t={h2:"h2",h3:"h3",...a(),...n.components},{SourceCode:o}=t;return o||T("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(d,{of:s}),`
`,r.jsx(p,{}),`
`,r.jsx(c,{of:b,sourceStatus:"none",withToolbar:!0}),`
`,r.jsx(l,{}),`
`,r.jsx(o,{code:g}),`
`,r.jsx(t.h2,{id:"components",children:"Components"}),`
`,r.jsx(t.h3,{id:"tabs",children:"Tabs"}),`
`,r.jsx(e,{of:s}),`
`,r.jsx(t.h3,{id:"tabslist",children:"TabsList"}),`
`,r.jsx(e,{of:m}),`
`,r.jsx(t.h3,{id:"tabstrigger",children:"TabsTrigger"}),`
`,r.jsx(e,{of:u}),`
`,r.jsx(t.h3,{id:"tabscontent",children:"TabsContent"}),`
`,r.jsx(e,{of:f}),`
`,r.jsx(t.h3,{id:"tabsindicator",children:"TabsIndicator"}),`
`,r.jsx(e,{of:x})]})}function U(n={}){const{wrapper:t}={...a(),...n.components};return t?r.jsx(t,{...n,children:r.jsx(i,{...n})}):i(n)}function T(n,t){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{U as default};

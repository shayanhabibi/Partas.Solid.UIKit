import{G as n,H as p,T as i,K as l,L as d,O as m}from"./iframe-Ss2HFUgg.js";import{useMDXComponents as s}from"./index--e61kTGT.js";import{S as a,D as c}from"./Status.stories-DptMqdlZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Badge-C0rInFJe.js";import"./Option-B9lMbA8r.js";import"./Util-jMr-gVD5.js";import"./Utils-Bv7TLaDt.js";import"./index-axew2xP3.js";import"./Icon-DzzAe45T.js";const u=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
\r
[<Erase>]\r
module Status =\r
    [<StringEnum>]\r
    type Kind =\r
        | Online\r
        | Offline\r
        | Maintenance\r
        | Degraded\r
        \r
[<Erase>]\r
type Status() =\r
    inherit Badge()\r
    [<Erase>]\r
    member val kind: Status.Kind = unbox () with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.variant <- Badge.Variant.Secondary\r
        Badge(\r
            class' = Lib.cn [|\r
                "flex items-center gap-2 group"\r
                !!props.kind\r
                props.class'\r
            |]\r
            ).spread props\r
\r
[<Erase>]\r
type StatusIndicator() =\r
    inherit span()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        span(class' = "relative flex h-2 w-2").spread props {\r
            span(class' = Lib.cn [|\r
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"\r
                "group-[.online]:bg-emerald-500"\r
                "group-[.offline]:bg-red-500"\r
                "group-[.maintenance]:bg-blue-500"\r
                "group-[.degraded]:bg-amber-500"\r
            |])\r
            span(class' = Lib.cn [|\r
                "relative inline-flex h-full w-full rounded-full"\r
                "group-[.online]:bg-emerald-500"\r
                "group-[.offline]:bg-red-500"\r
                "group-[.maintenance]:bg-blue-500"\r
                "group-[.degraded]:bg-amber-500"\r
            |])\r
        }\r
\r
[<Erase>]\r
type StatusLabel() =\r
    inherit span()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        let inline makeSpan className (label: string) =\r
            span(class' = "hidden group-[." + className + "]:block") {\r
                label\r
            }\r
        span(class' = Lib.cn [|\r
            "text-muted-foreground"\r
            props.class'\r
        |]).spread props {\r
            props.children ??= Fragment() {\r
                makeSpan "online" "Online"\r
                makeSpan "offline" "Offline"\r
                makeSpan "maintenance" "Maintenance"\r
                makeSpan "degraded" "Degraded"\r
            }\r
        }\r
`;function t(r){const e={h2:"h2",h3:"h3",...s(),...r.components},{SourceCode:o}=e;return o||g("SourceCode"),n.jsxs(n.Fragment,{children:[n.jsx(p,{of:a}),`
`,n.jsx(i,{}),`
`,n.jsx(l,{of:c,layout:"centered",withToolbar:!0,sourceState:"none"}),`
`,n.jsx(d,{}),`
`,n.jsx(o,{code:u}),`
`,n.jsx(e.h2,{id:"components",children:"Components"}),`
`,n.jsx(e.h3,{id:"status",children:"Status"}),`
`,n.jsx(m,{of:a})]})}function E(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}function g(r,e){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{E as default};

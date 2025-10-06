import{G as r,H as a,T as s,K as d,L as i}from"./iframe-BLvaHOrW.js";import{useMDXComponents as o}from"./index-DMt2PYli.js";import{S as l,D as p}from"./Kbd.stories-BJleBcnq.js";import"./preload-helper-PPVm8Dsz.js";import"./Kbd-B0eJO_gC.js";import"./Utils-BEjpZvS7.js";import"./index-C2xVdcqa.js";const m=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Fable.Core\r
open Fable.Core.JsInterop\r
open Fable.Core.JS\r
open Partas.Solid.Aria\r
\r
[<Erase>]\r
module Kbd =\r
    [<StringEnum>]\r
    type Variant =\r
        | Borderless\r
        | Default\r
\r
[<Erase>]\r
type DefaultKbdSeparator() =\r
    inherit span()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.children <- !!"+"\r
        span(class' = Lib.cn [|\r
            "text-muted-foreground/50"\r
            props.class'\r
        |]) .dataSlot("kbd-separator")\r
            .spread props\r
[<Erase>]\r
type Kbd() =\r
    inherit span()\r
    [<Erase>]\r
    member val separator: HtmlElement = undefined with get,set\r
    [<Erase>]\r
    member val ariaLabel: string = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.separator <- DefaultKbdSeparator()\r
        let resolvedChildren = children(fun () -> props.children)\r
        let mutable childrenCount = fun _ -> resolvedChildren() |> JS.Constructors.Array.from |> _.Length\r
        let mutable childrenArray: unit -> HtmlElement array = fun _ -> resolvedChildren() |> JS.Constructors.Array.from\r
        let hasChildren = fun _ -> childrenCount() <> 0\r
        span(class' = Lib.cn [|\r
            "inline-flex select-none items-center gap-1 \\\r
            rounded border bg-muted px-1.5 align-middle \\\r
            font-medium font-mono text-[10px] text-muted-foreground \\\r
            leading-loose \\\r
            [&_svg:not([class*='size-'])]:size-3 \\\r
            [[data-slot=tooltip-content]_&]:bg-background/20 \\\r
            [[data-slot=tooltip-content]_&]:text-background \\\r
            [[data-slot=tooltip-content]_&]:border-none \\\r
            dark:[[data-slot=tooltip-content]_&]:bg-background/10"\r
            props.class'\r
        |]) .dataSlot("kbd")\r
            .spread props {\r
            if hasChildren() then\r
                For(each = childrenArray()) { yield fun child idx -> Fragment() {\r
                        child\r
                        if idx() < childrenCount() - 1 then\r
                            props.separator\r
                    }\r
                }\r
        }\r
            \r
        \r
`;function t(n){const{SourceCode:e}={...o(),...n.components};return e||c("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(a,{of:l}),`
`,r.jsx(s,{}),`
`,r.jsx(d,{of:p}),`
`,r.jsx(i,{}),`
`,r.jsx(e,{code:m})]})}function S(n={}){const{wrapper:e}={...o(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(t,{...n})}):t(n)}function c(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{S as default};

import{G as r,H as i,T as a,K as s,L as p}from"./iframe-BLvaHOrW.js";import{useMDXComponents as e}from"./index-DMt2PYli.js";import{S as l,D as d}from"./ButtonGroup.stories-B1TMBxFb.js";import"./preload-helper-PPVm8Dsz.js";import"./Option-B9lMbA8r.js";import"./Util-jMr-gVD5.js";import"./Utils-BEjpZvS7.js";import"./index-C2xVdcqa.js";import"./T4C3DMHT-Y4_Lrzs8.js";import"./OYES4GOP-DJL3U5Gx.js";import"./index-TpYiyspx.js";import"./FLVHQV4A-ByRBKILc.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BbcR3rHk.js";import"./Button-CjiiobU-.js";import"./UKTBL2JL-mrSn-dg4.js";const u=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
open Partas.Solid.Kobalte\r
open Partas.Solid.Aria\r
\r
[<Erase>]\r
type ButtonGroup() =\r
    inherit div()\r
    static member variants(?orientation: Orientation) =\r
        let orientation = defaultArg orientation Horizontal\r
        // Kobalte uses the data orientation of the separator, so instead of having to\r
        // explicitly pass a prop to the separator when in Vertical mode, we'll\r
        // have it respond to the data-orientation of the parent group\r
        "group/button-group flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2"\r
        + " " +\r
        match orientation with\r
        | Horizontal ->\r
            "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none"\r
        | Vertical ->\r
            "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"\r
\r
    [<Erase>]\r
    member val orientation: Orientation = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.orientation <- Horizontal\r
        div(\r
            role = "group",\r
            class' = Lib.cn [|\r
                ButtonGroup.variants(props.orientation)\r
                props.class'\r
            |]\r
        )   .data("orientation", string props.orientation)\r
            .dataSlot("button-group")\r
            .spread props\r
\r
[<Erase>]\r
type ButtonGroupText() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div( class' = Lib.cn [|\r
                "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm \\\r
                font-medium shadow-xs [&_svg]:pointer-events-none \\\r
                [&_svg:not([class*='size-'])]:size-4"\r
                props.class'\r
            |]\r
            ).spread props\r
\r
[<Erase>]\r
type ButtonGroupSeparator() =\r
    inherit Separator()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.orientation <- Vertical\r
        Separator(\r
            class' = Lib.cn [|\r
                "bg-input relative !m-0 self-stretch \\\r
                group-data-[orientation=horizontal]/button-group:h-auto group-data-[orientation=horizontal]/button-group:w-px \\\r
                group-data-[orientation=vertical]/button-group:h-px"\r
            |]\r
        )   .spread(props)\r
            .dataSlot("button-group-separator")\r
`;function o(t){const{SourceCode:n}={...e(),...t.components};return n||m("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(i,{of:l}),`
`,r.jsx(a,{}),`
`,r.jsx(s,{of:d}),`
`,r.jsx(p,{}),`
`,r.jsx(n,{code:u})]})}function T(t={}){const{wrapper:n}={...e(),...t.components};return n?r.jsx(n,{...t,children:r.jsx(o,{...t})}):o(t)}function m(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{T as default};

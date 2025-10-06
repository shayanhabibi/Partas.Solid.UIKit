import{G as e,H as s,T as l,K as g,L as p,O as m}from"./iframe-BLvaHOrW.js";import{useMDXComponents as a}from"./index-DMt2PYli.js";import{T as o,D as d}from"./Toggle.stories-cBKYbzqX.js";import"./preload-helper-PPVm8Dsz.js";import"./Toggle-BJxpwe4g.js";import"./Option-B9lMbA8r.js";import"./Util-jMr-gVD5.js";import"./UKTBL2JL-mrSn-dg4.js";import"./OYES4GOP-DJL3U5Gx.js";import"./index-TpYiyspx.js";import"./FLVHQV4A-ByRBKILc.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BbcR3rHk.js";import"./index-C2xVdcqa.js";import"./VI7QYH27-lfbjaqsq.js";import"./FN6EICGO-DozerlcD.js";import"./Utils-BEjpZvS7.js";const c=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
\r
[<Erase>]\r
module Toggle =\r
    [<StringEnum>]\r
    type Variant = | Default | Outline\r
    [<StringEnum>]\r
    type Size = | Default | Small | Large\r
\r
[<Erase>]\r
type Toggle() =\r
    inherit ToggleButton()\r
    static member variants(?variant: Toggle.Variant, ?size: Toggle.Size): string =\r
        let variant = defaultArg variant Toggle.Variant.Default\r
        let size = defaultArg size Toggle.Size.Default\r
        //tw\r
        "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium \\\r
        hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none \\\r
        disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground \\\r
        [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 \\\r
        focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] \\\r
        outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 \\\r
        dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap"\r
        + " " +\r
        match variant with\r
        | Toggle.Variant.Default -> (*TW*) "bg-transparent "\r
        | Toggle.Variant.Outline -> (*TW*) "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground "\r
        +\r
        match size with\r
        | Toggle.Size.Default -> (*TW*) "h-9 px-2 min-w-9"\r
        | Toggle.Size.Small -> (*TW*) "h-8 px-1.5 min-w-8"\r
        | Toggle.Size.Large -> (*TW*) "h-10 px-2.5 min-w-10"\r
    member val variant: Toggle.Variant = unbox null with get,set\r
    member val size: Toggle.Size = unbox null with get,set\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        ToggleButton(\r
                class' = Lib.cn [|\r
                    Toggle.variants(props.variant, props.size)\r
                    props.class'\r
                |]\r
            ).spread props\r
`;function i(n){const r={h2:"h2",h3:"h3",...a(),...n.components},{SourceCode:t}=r;return t||u("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(s,{of:o}),`
`,e.jsx(l,{}),`
`,e.jsx(g,{of:d,layout:"centered",sourceState:"none",withToolbar:!0}),`
`,e.jsx(p,{}),`
`,e.jsx(t,{code:c}),`
`,e.jsx(r.h2,{id:"components",children:"Components"}),`
`,e.jsx(r.h3,{id:"toggle",children:"Toggle"}),`
`,e.jsx(m,{of:o})]})}function L(n={}){const{wrapper:r}={...a(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}function u(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{L as default};

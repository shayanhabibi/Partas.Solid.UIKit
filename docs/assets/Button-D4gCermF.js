import{G as r,H as s,K as u,L as d,Q as l}from"./iframe-BLvaHOrW.js";import{useMDXComponents as i}from"./index-DMt2PYli.js";import{B as o,D as c}from"./Button.stories-Bw6h1fww.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CjiiobU-.js";import"./Option-B9lMbA8r.js";import"./Util-jMr-gVD5.js";import"./UKTBL2JL-mrSn-dg4.js";import"./OYES4GOP-DJL3U5Gx.js";import"./index-TpYiyspx.js";import"./FLVHQV4A-ByRBKILc.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BbcR3rHk.js";import"./index-C2xVdcqa.js";import"./Utils-BEjpZvS7.js";import"./x-BUrLKQu7.js";import"./Icon-BmtgjGtw.js";import"./Kbd-B0eJO_gC.js";import"./Label-CT7n78zp.js";import"./Separator-DfnYslN2.js";import"./T4C3DMHT-Y4_Lrzs8.js";const p=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Fable.Core.JsInterop\r
open System\r
open Partas.Solid\r
open Fable.Core\r
\r
module Button =\r
    [<RequireQualifiedAccess; StringEnum>]\r
    type Size =\r
        | Default\r
        | Small\r
        | Large\r
        | Icon\r
        | IconSmall\r
        | IconLarge\r
    [<RequireQualifiedAccess; StringEnum>]\r
    type Variant =\r
        | Default\r
        | Outline\r
        | Ghost\r
        | Link\r
        | Destructive\r
        | Secondary\r
\r
open Button\r
\r
[<Erase>]\r
type Button() =\r
    inherit Kobalte.Button()\r
    static member variants (?variant: Button.Variant, ?size: Button.Size) : string =\r
        let variant = defaultArg variant Button.Variant.Default\r
        let size = defaultArg size Button.Size.Default\r
        "flex items-center justify-center gap-2 whitespace-nowrap rounded-md \\\r
        text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 \\\r
        [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 \\\r
        [&_svg]:shrink-0 outline-none focus-visible:border-ring \\\r
        focus-visible:ring-ring/50 focus-visible:ring-[3px] \\\r
        aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 \\\r
        aria-invalid:border-destructive " +\r
        match variant with\r
        | Button.Variant.Default ->     "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 \\\r
                                        [&_[data-slot=kbd]]:bg-background/20 \\\r
                                        [&_[data-slot=kbd]]:border-none \\\r
                                        [&_[data-slot=kbd]]:text-background"\r
        | Button.Variant.Destructive -> "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60"\r
        | Button.Variant.Outline ->     "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"\r
        | Button.Variant.Secondary ->   "bg-secondary text-secondary-foreground hover:bg-secondary/80 \\\r
                                        [&_[data-slot=kbd]]:bg-primary/5 \\\r
                                        [&_[data-slot=kbd]]:border-none \\\r
                                        [&_[data-slot=kbd]]:text-primary/90"\r
        | Button.Variant.Ghost ->       "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"\r
        | Button.Variant.Link ->        "text-primary underline-offset-4 hover:underline"\r
        + " " +\r
        match size with\r
        | Button.Size.Default ->        "h-9 px-4 py-2 has-[>svg]:px-3"\r
        | Button.Size.Small ->          "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"\r
        | Button.Size.Large ->          "h-10 rounded-md px-6 has-[>svg]:px-4"\r
        | Button.Size.Icon ->           "size-9"\r
        | Button.Size.IconSmall ->      "size-8"\r
        | Button.Size.IconLarge ->      "size-10"\r
    /// <summary>\r
    /// Predefined size styles of the button.\r
    /// </summary>\r
    /// <defaultValue>default</defaultValue>\r
    [<Erase>]\r
    member val size: Button.Size = Size.Default with get,set\r
    /// <summary>\r
    /// Sets the style of the button.\r
    /// </summary>\r
    /// <defaultValue>default</defaultValue>\r
    /// <storybook controlType="radio"/>\r
    [<Erase>]\r
    member val variant: Button.Variant = Variant.Default with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        Kobalte.Button(\r
            class' = Lib.cn [|\r
                Button.variants(props.variant,props.size)\r
                props.class'\r
            |]\r
        )   .dataSlot("button")\r
            .data("buttonvariant", string props.variant)\r
            .spread props\r
`;function a(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",...i(),...t.components},{SourceCode:e}=n;return e||m("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(s,{of:o}),`
`,r.jsx(n.h1,{id:"button",children:"Button"}),`
`,r.jsx(n.p,{children:"'shadcn-ui' styled button."}),`
`,r.jsx(n.p,{children:"'Variant' and 'Size' are accessible via the 'Button' module."}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-fsharp",children:`Button.Variants.Default\r
Button.Size.Default
`})}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-fsharp",children:`Button() {\r
    "Button"\r
}
`})}),`
`,r.jsx(u,{of:c,sourceState:"none",layout:"centered",withToolbar:!0}),`
`,r.jsx(d,{}),`
`,r.jsx(e,{code:p}),`
`,r.jsx(l,{includePrimary:!1,of:o})]})}function A(t={}){const{wrapper:n}={...i(),...t.components};return n?r.jsx(n,{...t,children:r.jsx(a,{...t})}):a(t)}function m(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{A as default};

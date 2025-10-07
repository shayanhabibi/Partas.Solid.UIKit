import{G as r,H as l,T as u,K as t,L as o,Q as g}from"./iframe-BHVPMPJn.js";import{useMDXComponents as c}from"./index-CB5oDCs8.js";import{B as s,D as p}from"./Badge.stories-Coqw3FaM.js";import{D as m,a as i}from"./DeltaBadge.stories-b9OypUzQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Badge-CTwMrnEQ.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./Utils-CAhjhIiz.js";import"./index-DzweoC3U.js";import"./Icon-DcpizePo.js";const f=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Fable.Core\r
\r
[<Erase>]\r
module Badge =\r
    [<RequireQualifiedAccess; StringEnum>]\r
    type Variant =\r
        | Default\r
        | Secondary\r
        | Outline\r
        | Success\r
        | Warning\r
        | Error\r
        | Destructive\r
        \r
open Badge\r
\r
[<Erase>]\r
type Badge() =\r
    inherit div()\r
    static member variants(?variant: Badge.Variant): string =\r
        let variant = defaultArg variant Badge.Variant.Default\r
        //tw\r
        \r
        "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs \\\r
        font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 \\\r
        leading-tight \\\r
        [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 \\\r
        focus-visible:ring-[3px] aria-invalid:ring-destructive/20 \\\r
        dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive \\\r
        transition-[color,box-shadow] overflow-hidden"\r
        + " " +\r
        match variant with\r
        | Variant.Default -> "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90"\r
        | Variant.Secondary -> "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90"\r
        | Variant.Destructive -> "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60"\r
        | Variant.Outline -> "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"\r
        | Variant.Success -> "border-success-foreground bg-success text-success-foreground [a&]:hover:bg-success/90"\r
        | Variant.Warning -> "border-warning-foreground bg-warning text-warning-foreground [a&]:hover:bg-warning/90"\r
        | Variant.Error -> "border-error-foreground bg-error text-error-foreground [a&]:hover:bg-error/90"\r
    /// <summary>\r
    /// Style the badge.\r
    /// </summary>\r
    /// <defaultValue>default</defaultValue>\r
    [<Erase>]\r
    member val variant: Variant = unbox null with get, set\r
    /// <defaultValue>false</defaultValue>\r
    [<Erase>]\r
    member val round: bool = unbox null with get, set\r
\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        span( class' = Lib.cn\r
            [| Badge.variants(props.variant)\r
               if props.round then "rounded-full" else ""\r
               props.class' |] )\r
            .dataSlot("badge")\r
            .spread props\r
\r
[<Erase>]\r
module BadgeDelta =\r
    [<RequireQualifiedAccess>]\r
    [<StringEnum>]\r
    type Type =\r
        | Increase\r
        | ModerateIncrease\r
        | Unchanged\r
        | ModerateDecrease\r
        | Decrease\r
\r
open BadgeDelta\r
\r
[<Erase>]\r
type BadgeDelta() =\r
    inherit Badge()\r
    [<System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)>]\r
    static member private variants(?variant: BadgeDelta.Type): string =\r
        let variant = defaultArg variant Type.Unchanged\r
        match variant with\r
        | Type.ModerateIncrease\r
        | Type.Increase -> "bg-success text-success-foreground hover:bg-success"\r
        | Type.Unchanged -> "bg-warning text-warning-foreground hover:bg-warning"\r
        | Type.ModerateDecrease\r
        | Type.Decrease -> "bg-error text-error-foreground hover:bg-error"\r
        \r
    /// <summary>\r
    /// A variant of the badge which also introduces\r
    /// 'arrows' or 'deltas'\r
    /// </summary>\r
    /// <defaultValue>unchanged</defaultValue>\r
    [<Erase>]\r
    member val deltaType: BadgeDelta.Type = unbox null with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        let typeIcon iconClass: HtmlElement =\r
            match props.deltaType with\r
            | Type.Increase -> Lucide.Lucide.ArrowUp(class'=iconClass)\r
            | Type.ModerateIncrease -> Lucide.Lucide.ArrowUpRight(class'=iconClass)\r
            | Type.Unchanged -> Lucide.Lucide.ArrowRight(class'=iconClass)\r
            | Type.ModerateDecrease -> Lucide.Lucide.ArrowDownRight(class'=iconClass)\r
            | Type.Decrease -> Lucide.Lucide.ArrowDown(class'=iconClass)\r
        let icon () = typeIcon "size-4"\r
        \r
        Badge( class' = Lib.cn [|\r
            BadgeDelta.variants(props.deltaType)\r
            props.class'\r
        |]).spread(props) {\r
            span(class' = "flex gap-1") {\r
                icon ()\r
                props.children\r
            }\r
        }\r
`;function d(n){const e={code:"code",h3:"h3",pre:"pre",...c(),...n.components},{SourceCode:a}=e;return a||b("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(l,{of:s}),`
`,r.jsx(u,{}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-fsharp",children:`Badge() {\r
    "Badge"\r
}
`})}),`
`,r.jsx(t,{of:p,sourceState:"none",layout:"centered",withToolbar:!0}),`
`,r.jsx(o,{}),`
`,r.jsx(e.h3,{id:"delta-badge",children:"Delta Badge"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-fsharp",children:`DeltaBadge() {\r
    "Delta"\r
}
`})}),`
`,r.jsx(t,{of:i,meta:m,sourceState:"none",layout:"centered",withToolbar:!0}),`
`,r.jsx(o,{of:i}),`
`,r.jsx(g,{of:s,includePrimary:!1}),`
`,r.jsx(a,{code:f})]})}function E(n={}){const{wrapper:e}={...c(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(d,{...n})}):d(n)}function b(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{E as default};

import{H as r,I as l,T as s,L as i,N as u,R as p}from"./iframe-DHSEN8D7.js";import{useMDXComponents as a}from"./index-e4aCb-2o.js";import{C as c,D as d}from"./Callout.stories-CdWn_iYR.js";import"./preload-helper-PPVm8Dsz.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./Utils-CzREY3kc.js";import"./index-SvhdUoxj.js";const m=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Fable.Core\r
\r
[<Erase>]\r
module Callout =\r
    [<StringEnum; RequireQualifiedAccess>]\r
    type Variant =\r
        | Default\r
        | Success\r
        | Warning\r
        | Error\r
        \r
[<Erase>]\r
type Callout() =\r
    inherit div()\r
    static member variants(?variant: Callout.Variant): string =\r
        let variant = defaultArg variant Callout.Variant.Default\r
        "rounded-md border-l-4 p-2 pl-4 " +\r
        match variant with\r
        | Callout.Variant.Default -> "border-info-foreground bg-info text-info-foreground"\r
        | Callout.Variant.Success -> "border-success-foreground bg-success text-success-foreground"\r
        | Callout.Variant.Warning -> "border-warning-foreground bg-warning text-warning-foreground"\r
        | Callout.Variant.Error -> "border-error-foreground bg-error text-error-foreground"\r
    /// <summary>\r
    /// Component style\r
    /// </summary>\r
    /// <defaultValue>Callout.Variant.Default</defaultValue>\r
    [<Erase>]\r
    member val variant: Callout.Variant = unbox null with get,set\r
    \r
    [<SolidTypeComponent>]\r
    member props.callout =\r
        div(\r
            class' = Lib.cn [|\r
                Callout.variants(props.variant)\r
                props.class'\r
            |]\r
            ).dataSlot("callout").spread props\r
\r
[<Erase>]\r
type CalloutTitle() =\r
    inherit h3()\r
    [<SolidTypeComponent>]\r
    member props.callout =\r
        h3(class' = Lib.cn [| "font-semibold"; props.class' |]).dataSlot("callout-title").spread props\r
[<Erase>]\r
type CalloutContent() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.callout =\r
        div(class' = Lib.cn [| "mt-2" ; props.class' |]).dataSlot("callout-content").spread props\r
`;function e(n){const o={code:"code",pre:"pre",...a(),...n.components},{SourceCode:t}=o;return t||f("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(l,{of:c}),`
`,r.jsx(s,{}),`
`,r.jsx(o.pre,{children:r.jsx(o.code,{className:"language-fsharp",children:`Callout() {\r
    CalloutTitle() {\r
        "Callout title"\r
    }\r
    CalloutContent() {\r
        "Callout description"\r
    }\r
}
`})}),`
`,r.jsx(i,{of:d,sourceState:"none",withToolbar:!0}),`
`,r.jsx(u,{}),`
`,r.jsx(t,{code:m}),`
`,r.jsx(p,{includePrimary:!1})]})}function j(n={}){const{wrapper:o}={...a(),...n.components};return o?r.jsx(o,{...n,children:r.jsx(e,{...n})}):e(n)}function f(n,o){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{j as default};

import{j as r,M as o,T as i,d as l,e as c,S as p}from"./iframe-mHl6JQ-c.js";import{useMDXComponents as s}from"./index-B7Otj1x9.js";import{A as d}from"./Alert.stories-DfbEZpO1.js";import"./preload-helper-PPVm8Dsz.js";import"./Option-B9lMbA8r.js";import"./Util-jMr-gVD5.js";import"./FLVHQV4A-DzmScvHC.js";import"./5WXHJDCZ-DghNgBBa.js";import"./Utils-CYryE0IK.js";import"./index-D4JJ8pSH.js";import"./Spinner-m7JeM23m.js";import"./Icon-CONeZlkT.js";const m=`\uFEFFnamespace Partas.Solid.UI\r
\r
open System\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
open Fable.Core.JsInterop\r
\r
[<Erase>]\r
module Alert =\r
    [<RequireQualifiedAccess; StringEnum>]\r
    type Variant =\r
        | Default\r
        | Destructive\r
        | Success\r
\r
[<Erase>]\r
type Alert() =\r
    inherit Kobalte.Alert()\r
    static member variants (?variant: Alert.Variant): string =\r
        let variant = defaultArg variant Alert.Variant.Default\r
        "relative w-full rounded-lg border px-4 \\\r
        py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] \\\r
        grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 \\\r
        [&>svg]:translate-y-0.5 [&>svg]:text-current"\r
        + " " +\r
        match variant with\r
        | Alert.Variant.Default -> "bg-card text-card-foreground"\r
        | Alert.Variant.Destructive ->\r
            "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"\r
        | Alert.Variant.Success -> (*TW*) "border-success-foreground/30 text-success-foreground dark:border-success-foreground [&>svg]:text-current bg-success/20"\r
    /// <summary>\r
    /// Style variant of the alert.\r
    /// </summary>\r
    /// <defaultValue>Alert.Variant.Default</defaultValue>\r
    [<Erase>]\r
    member val variant: Alert.Variant = jsNative with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Alert(class' = Lib.cn [|\r
            Alert.variants(props.variant)\r
            props.class'\r
        |]) .dataSlot("alert")\r
            .spread props\r
\r
[<Erase>]\r
type AlertTitle() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class' = Lib.cn [|\r
            "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight"\r
            props.class'\r
        |]) .dataSlot("alert-title")\r
            .spread props\r
\r
[<Erase>]\r
type AlertDescription() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class' = Lib.cn [|\r
            "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm \\\r
            [&_p]:leading-relaxed"\r
            props.class'\r
        |]) .dataSlot("alert-description")\r
            .spread props\r
`;function a(e){const t={code:"code",h3:"h3",pre:"pre",...s(),...e.components},{SourceCode:n}=t;return n||u("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(o,{of:d}),`
`,r.jsx(i,{}),`
`,r.jsx(t.pre,{children:r.jsx(t.code,{className:"language-fsharp",children:`Alert() {\r
    AlertTitle() {\r
        "Title"\r
    }\r
    AlertDescription() {\r
        "Alert description"\r
    }\r
}
`})}),`
`,r.jsx(l,{withToolbar:!0,sourceState:"none"}),`
`,r.jsx(t.h3,{id:"alert-props",children:"Alert props"}),`
`,r.jsx(c,{}),`
`,r.jsx(n,{code:m}),`
`,r.jsx(p,{includePrimary:!1})]})}function T(e={}){const{wrapper:t}={...s(),...e.components};return t?r.jsx(t,{...e,children:r.jsx(a,{...e})}):a(e)}function u(e,t){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{T as default};

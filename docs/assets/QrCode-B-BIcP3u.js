import{H as r,I as a,T as o,L as i,N as l,R as m}from"./iframe-DHSEN8D7.js";import{useMDXComponents as s}from"./index-e4aCb-2o.js";import{S as d,D as p}from"./QrCode.stories-B2b5dKrM.js";import"./preload-helper-PPVm8Dsz.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./Utils-CzREY3kc.js";import"./index-SvhdUoxj.js";import"./Seq-ByxJMUaL.js";import"./Types-CqbaJdUC.js";import"./FSharp.Core-D1Pte0FF.js";import"./String-DLdTzCOk.js";import"./Array-C0Iq9Aiw.js";import"./List-CXqaB21e.js";import"./index-CMZTi1VK.js";import"./Icon-By-Qgdq5.js";const c=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Partas.Solid.ZagJs\r
open Partas.Solid.ArkUI\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
\r
[<Erase>]\r
module QrCodeImage =\r
    [<Pojo>]\r
    type Slots(\r
        ?root: string,\r
        ?frame: string,\r
        ?pattern: string\r
        ) =\r
        [<DV>] val mutable root: string\r
        [<DV>] val mutable frame: string\r
        [<DV>] val mutable pattern: string\r
    [<StringEnum>]\r
    type Variant =\r
        | Default\r
    [<StringEnum>]\r
    type Size =\r
        | Small\r
        | Default\r
        | Large\r
\r
open QrCodeImage\r
\r
[<Erase>]\r
type QrCodeImage() =\r
    inherit QrCode.Root()\r
    static member variants(?variant: QrCodeImage.Variant, ?size: QrCodeImage.Size) =\r
        let variant = defaultArg variant QrCodeImage.Variant.Default\r
        let size = defaultArg size QrCodeImage.Size.Default\r
        {|\r
            slots = QrCodeImage.Slots(\r
                root = "flex items-center justify-center"\r
                ,frame = Lib.cn [|\r
                    "relative bg-card border border-border rounded-lg"\r
                    match size with\r
                    | Small -> "size-20 p-1"\r
                    | Default -> "size-32 p-2"\r
                    | Large -> "size-40 p-3"\r
                |]\r
                ,pattern = "fill-primary"\r
                )\r
            pixelSize =\r
                match size with\r
                | Small -> 2\r
                | Default -> 3\r
                | Large -> 4\r
        |}\r
    /// <summary>\r
    /// An object of classes to pass to the various components.\r
    /// </summary>\r
    [<Erase>]\r
    member val slots: QrCodeImage.Slots = undefined with get,set\r
    /// <summary>\r
    /// No implementations at the moment.\r
    /// </summary>\r
    [<Erase>]\r
    member val variant: Variant = undefined with get,set\r
    /// <summary>\r
    /// The QrCode size.\r
    /// </summary>\r
    [<Erase>]\r
    member val size: Size = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.slots <- createEmpty\r
        props.variant <- Variant.Default\r
        props.size <- Size.Default\r
        let children = children(fun () -> props.children)\r
        let hasChildren = createMemo(fun () ->\r
            let value = children()\r
            !!value ??= undefined\r
            )\r
        let variantClasses () = QrCodeImage.variants(props.variant,props.size)\r
        QrCode.Root(\r
            class' = Lib.cn [|\r
                variantClasses().slots.root\r
                props.slots.root\r
                props.class'\r
            |]\r
            ,pixelSize = float (variantClasses().pixelSize)\r
            ,encoding =\r
                if hasChildren() then\r
                    QrCode.GenerateOptions(ecc = QrCode.H)\r
                else\r
                    undefined\r
                \r
            ).spread props {\r
            QrCode.Frame(class' = Lib.cn [|\r
                variantClasses().slots.frame\r
                props.slots.frame\r
            |]) {\r
                QrCode.Pattern(class' = Lib.cn [|\r
                    variantClasses().slots.pattern\r
                    props.slots.pattern\r
                |])\r
            }\r
            if !!children() then\r
                QrCode.Overlay(class' = Lib.cn [|\r
                    "absolute inset-0 flex items-center justify-center"\r
                |]) {\r
                    Switch() {\r
                        Match(when' = props.size.IsDefault) {\r
                            div(class' = "size-8 bg-accent rounded-full border-2 border-border flex items-center justify-center") {\r
                                div(class' = "size-6 bg-background rounded-full flex justify-center items-center") {\r
                                    children()\r
                                }\r
                            }\r
                        }\r
                        Match(when' = props.size.IsSmall) {\r
                            div(class' = "size-6 bg-accent rounded-full border-1 border-border flex items-center justify-center") {\r
                                children()\r
                            }\r
                        }\r
                        Match(when' = props.size.IsLarge) {\r
                            div(class' = "size-9 bg-accent rounded-full border-2 border-border flex items-center justify-center") {\r
                                div(class' = "size-7 bg-background rounded-full flex justify-center items-center") {\r
                                    children()\r
                                }\r
                            }\r
                        }\r
                    }\r
                }\r
        }\r
`;function t(e){const{SourceCode:n}={...s(),...e.components};return n||u("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(a,{of:d}),`
`,r.jsx(o,{}),`
`,r.jsx(i,{of:p}),`
`,r.jsx(l,{}),`
`,r.jsx(n,{code:c}),`
`,r.jsx(m,{})]})}function L(e={}){const{wrapper:n}={...s(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(t,{...e})}):t(e)}function u(e,n){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{L as default};

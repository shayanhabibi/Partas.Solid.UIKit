import{G as r,H as s,T as l,K as d,L as p,O as e}from"./iframe-BHVPMPJn.js";import{useMDXComponents as i}from"./index-CB5oDCs8.js";import{D as c,a as g}from"./Dialog.stories-DsHBMObW.js";import{T as m}from"./DialogTrigger.stories-cXKPCoX4.js";import{C as u}from"./DialogContent.stories-Bbq1e76r.js";import{H as h}from"./DialogHeader.stories-BQTq1Z0P.js";import{T as f}from"./DialogTitle.stories-BIVmyn8k.js";import{D as x}from"./DialogDescription.stories-Dh8iuZwV.js";import{F as D}from"./DialogFooter.stories-BsfP8fd6.js";import"./preload-helper-PPVm8Dsz.js";import"./Dialog-DEUllH5c.js";import"./PLLNVYER-D8R-EarV.js";import"./FBCYWU27-RI55FxO7.js";import"./3VFJM5NZ-Cb4P0J_t.js";import"./index-DeTOQkeb.js";import"./index-DzweoC3U.js";import"./FLVHQV4A-C_-euiFy.js";import"./index-BWY3wABR.js";import"./JHMNWOLY-DdZhD2t0.js";import"./E53DB7BS-BWjGcyhp.js";import"./FN6EICGO-BXZAkfGN.js";import"./UKTBL2JL-BmAvJ-mx.js";import"./OYES4GOP-B_JtkMZ5.js";import"./5WXHJDCZ-DghNgBBa.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-C_rqj1ej.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-CdhZt3CN.js";import"./combineProps-C_bsadWN.js";import"./Utils-CAhjhIiz.js";import"./x-CNVgNsoI.js";import"./Icon-DcpizePo.js";const b=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
\r
[<Erase>]\r
type Dialog() =\r
    inherit Kobalte.Dialog()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Dialog()\r
            .dataSlot("dialog")\r
            .spread props\r
\r
[<Erase>]\r
type DialogTrigger() =\r
    inherit Dialog.Trigger()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Dialog.Trigger()\r
            .dataSlot("dialog-trigger")\r
            .spread props\r
\r
[<Erase>]\r
type DialogPortal() =\r
    inherit Dialog.Portal()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Dialog.Portal()\r
            .dataSlot("dialog-portal")\r
            .spread(props)\r
            {\r
                div(class' = "fixed inset-0 z-50 flex items-start justify-center sm:items-center")\r
                    { props.children }\r
            }\r
\r
[<Erase>]\r
type DialogOverlay() =\r
    inherit Dialog.Overlay()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Dialog.Overlay( class' = Lib.cn [|\r
            "data-[expanded]:animate-in data-[closed]:animate-out \\\r
            data-[closed]:fade-out-0 data-[expanded]:fade-in-0 fixed \\\r
            inset-0 z-50 bg-black/50"\r
            props.class' |]\r
        )   .dataSlot("dialog-overlay")\r
            .spread(props)\r
    \r
[<Erase>]\r
type DialogContent() =\r
    inherit Dialog.Content()\r
    [<DefaultValue>]\r
    val mutable showCloseButton: bool\r
    [<DefaultValue>] val mutable dismissible: bool\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        props.dismissible <- true\r
        props.showCloseButton <- true\r
        let showCloseButton () = props.showCloseButton && props.dismissible\r
        DialogPortal() {\r
            DialogOverlay()\r
            Dialog.Content(\r
                class' = Lib.cn [|\r
                    // shadcn impl\r
                    "bg-background data-[state=open]:animate-in \\\r
                    data-[closed]:animate-out data-[closed]:fade-out-0 \\\r
                    data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 \\\r
                    data-[expanded]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid \\\r
                    w-full max-w-[calc(100%-2rem)] translate-x-[-50%] \\\r
                    translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg \\\r
                    duration-200 sm:max-w-lg"\r
                    \r
                    // solid-ui impl\r
                    // "fixed left-1/2 top-1/2 z-50 grid max-h-screen\r
                    // w-full max-w-lg -translate-x-1/2 -translate-y-1/2\r
                    // gap-4 overflow-y-auto border bg-background p-6 shadow-lg\r
                    // duration-200 data-[expanded]:animate-in\r
                    // data-[closed]:animate-out data-[closed]:fade-out-0\r
                    // data-[expanded]:fade-in-0 data-[closed]:zoom-out-95\r
                    // data-[expanded]:zoom-in-95 data-[closed]:slide-out-to-left-1/2\r
                    // data-[closed]:slide-out-to-top-[48%]\r
                    // data-[expanded]:slide-in-from-left-1/2\r
                    // data-[expanded]:slide-in-from-top-[48%] sm:rounded-lg"\r
                    props.class'\r
                |]).dataSlot("dialog-content")\r
                .spread(props)\r
                {\r
                    props.children\r
                    Show(when' = showCloseButton()) {\r
                        Dialog.CloseButton(class' =\r
                            "ring-offset-background focus:ring-ring \\\r
                            data-[expanded]:bg-accent \\\r
                            data-[expanded]:text-muted-foreground absolute top-4 \\\r
                            right-4 rounded-xs opacity-70 transition-opacity \\\r
                            hover:opacity-100 focus:ring-2 focus:ring-offset-2 \\\r
                            focus:outline-hidden disabled:pointer-events-none \\\r
                            [&_svg]:pointer-events-none [&_svg]:shrink-0 \\\r
                            [&_svg:not([class*='size-'])]:size-4"\r
                        ).dataSlot("dialog-close")\r
                            { Lucide.Lucide.X(class' = "size-4"); SrSpan() {"Close"} }\r
                    }\r
                }\r
        }\r
\r
[<Erase>]\r
type DialogX() =\r
    inherit Dialog.CloseButton()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        Dialog.CloseButton(class' = Lib.cn [|\r
            "ring-offset-background focus:ring-ring \\\r
            data-[expanded]:bg-accent \\\r
            data-[expanded]:text-muted-foreground absolute top-4 \\\r
            right-4 rounded-xs opacity-70 transition-opacity \\\r
            hover:opacity-100 focus:ring-2 focus:ring-offset-2 \\\r
            focus:outline-hidden disabled:pointer-events-none \\\r
            [&_svg]:pointer-events-none [&_svg]:shrink-0 \\\r
            [&_svg:not([class*='size-'])]:size-4"\r
            props.class'\r
        |]) .dataSlot("dialog-close-button")\r
            .spread props\r
            { Lucide.Lucide.X(class' = "size-4"); SrSpan() {"Close"} }\r
        \r
[<Erase>]\r
type DialogHeader() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class'= Lib.cn [|\r
            "flex flex-col gap-2 text-center sm:text-left"\r
            props.class'\r
        |]).dataSlot("dialog-header").spread(props)\r
    \r
[<Erase>]\r
type DialogFooter() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class'= Lib.cn [|\r
            "flex flex-col-reverse sm:flex-row sm:justify-end gap-2"\r
            props.class'\r
        |]).dataSlot("dialog-footer").spread(props)\r
\r
[<Erase>]\r
type DialogTitle() =\r
    inherit Dialog.Title()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Dialog.Title(class'= Lib.cn [|\r
            "text-lg font-semibold leading-none"\r
            props.class'\r
        |]).dataSlot("dialog-title").spread(props)\r
\r
[<Erase>]\r
type DialogDescription() =\r
    inherit Dialog.Description()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Dialog.Description(class'= Lib.cn [| "text-sm text-muted-foreground"; props.class' |])\r
            .dataSlot("dialog-description")\r
            .spread(props)\r
\r
`;function a(o){const n={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...i(),...o.components},{SourceCode:t}=n;return t||y("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(s,{of:c}),`
`,r.jsx(l,{}),`
`,r.jsx(n.p,{children:"A simple dialog contains two key components, the trigger and the content."}),`
`,r.jsx(n.p,{children:"The content is further divided into 3 'rows'. The top - header; middle; bottom - footer."}),`
`,r.jsx(n.p,{children:"For the header and content, we have styled text components ready."}),`
`,r.jsxs(n.blockquote,{children:[`
`,r.jsx(n.p,{children:`Unlike components such as the 'Card' components, the root dialog component\r
houses both the trigger and the flyout.`}),`
`,r.jsx(n.p,{children:`For this reason, you see the 'DialogContent' referring to the whole flyout,\r
and it also wraps the header and title etc.\r
In the 'Card' components, the 'Card' component wraps the contents, and the\r
Content component refers to the body content area.`}),`
`]}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-fsharp",children:`Dialog() {\r
    DialogTrigger() {\r
        "Click me!"\r
    }\r
    DialogContent() {\r
        DialogHeader() {\r
            DialogTitle() {\r
                "Title"\r
            }\r
            "Other header content"\r
        }\r
        DialogDescription() {\r
            "Description"\r
        }\r
        DialogFooter() {\r
            "Dialog footer"\r
        }\r
    }\r
}
`})}),`
`,r.jsx(n.p,{children:"Typically, the footer would be used for buttons and actions."}),`
`,r.jsx(d,{of:g,sourceState:"none",layout:"centered",withToolbar:!0}),`
`,r.jsx(p,{}),`
`,r.jsx(t,{code:b}),`
`,r.jsx(n.h3,{id:"dialogtrigger",children:"DialogTrigger"}),`
`,r.jsx(e,{of:m}),`
`,r.jsx(n.h3,{id:"dialogcontent",children:"DialogContent"}),`
`,r.jsx(e,{of:u}),`
`,r.jsx(n.h3,{id:"dialogheader",children:"DialogHeader"}),`
`,r.jsx(e,{of:h}),`
`,r.jsx(n.h3,{id:"dialogtitle",children:"DialogTitle"}),`
`,r.jsx(e,{of:f}),`
`,r.jsx(n.h3,{id:"dialogdescription",children:"DialogDescription"}),`
`,r.jsx(e,{of:x}),`
`,r.jsx(n.h3,{id:"dialogfooter",children:"DialogFooter"}),`
`,r.jsx(e,{of:D})]})}function rr(o={}){const{wrapper:n}={...i(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(a,{...o})}):a(o)}function y(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{rr as default};

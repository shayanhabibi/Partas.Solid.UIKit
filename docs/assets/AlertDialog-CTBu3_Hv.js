import{H as r,I as s,L as t,N as p,Q as d}from"./iframe-DHSEN8D7.js";import{useMDXComponents as i}from"./index-e4aCb-2o.js";import{A as c,D as a,a as m}from"./AlertDialog.stories-zRwRniAu.js";import{A as g}from"./AlertDialogContent.stories-BetPH4P0.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertDialog-D_2txCPz.js";import"./PLLNVYER-mplKr-l0.js";import"./FBCYWU27-BRaomcyy.js";import"./3VFJM5NZ-DDmjFnWc.js";import"./index-CX5o166x.js";import"./index-SvhdUoxj.js";import"./FLVHQV4A-VgAG7mUH.js";import"./index-1c5Tq1Kt.js";import"./JHMNWOLY-BX05bB8i.js";import"./E53DB7BS-C475FHrG.js";import"./FN6EICGO-CNc9l087.js";import"./UKTBL2JL-D9vX2QTQ.js";import"./OYES4GOP-D4sXc2ip.js";import"./5WXHJDCZ-DghNgBBa.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-B53RNSLG.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-ptAOXcxb.js";import"./combineProps-ChBwTExo.js";import"./Utils-CzREY3kc.js";import"./x-DWk3N72V.js";import"./Icon-By-Qgdq5.js";import"./Button-BnulhXAt.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";const u=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Partas.Solid.Lucide\r
open Fable.Core\r
\r
\r
\r
[<Erase>]\r
type AlertDialog() =\r
    inherit Kobalte.AlertDialog()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        props.modal <- true\r
        Kobalte.AlertDialog()\r
            .dataSlot("alert-dialog")\r
            .spread props\r
[<Erase>]\r
type AlertDialogTrigger() =\r
    inherit AlertDialog.Trigger()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.AlertDialog.Trigger()\r
            .dataSlot("alert-dialog-trigger")\r
            .spread props\r
\r
[<Erase>]\r
type AlertDialogPortal() =\r
    inherit AlertDialog.Portal()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        AlertDialog.Portal()\r
            .dataSlot("alert-dialog-portal")\r
            .spread props\r
\r
[<Erase>]\r
type AlertDialogOverlay() =\r
    inherit AlertDialog.Overlay()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        AlertDialog.Overlay(\r
            class' = Lib.cn [| "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[expanded]:animate-in\r
                               data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0"\r
                               props.class' |]\r
        )   .dataSlot("alert-dialog-overlay")\r
            .spread props\r
\r
[<Erase>]\r
type AlertDialogX() =\r
    inherit AlertDialog.CloseButton()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        AlertDialog.CloseButton(class' = "absolute right-4 top-4 rounded-sm opacity-70\r
                                ring-offset-background transition-opacity hover:opacity-100 focus:outline-none\r
                                focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none\r
                                data-[expanded]:bg-accent data-[expanded]:text-muted-foreground")\r
            { Lucide.X(class' = "size-4", strokeWidth = 2)\r
              span(class' = "sr-only") { "Close" } }\r
        \r
[<Erase>]\r
type AlertDialogContent() =\r
    inherit AlertDialog.Content()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        props.onInteractOutside <- _.preventDefault()\r
        props.onEscapeKeyDown <- _.preventDefault()\r
        AlertDialogPortal() {\r
            AlertDialogOverlay() {\r
                Kobalte.AlertDialog.Content(class' = Lib.cn [|\r
                    "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2\r
                    gap-4 border bg-background p-6 shadow-lg duration-200 data-[expanded]:animate-in\r
                    data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95\r
                    data-[expanded]:zoom-in-95 data-[closed]:slide-out-to-left-1/2 data-[closed]:slide-out-to-top-[48%]\r
                    data-[expanded]:slide-in-from-left-1/2 data-[expanded]:slide-in-from-top-[48%] sm:rounded-lg md:w-full"\r
                    props.class'\r
                |]) .dataSlot("alert-dialog-content")\r
                    .spread(props) { props.children }\r
            }\r
        }\r
[<Erase>]\r
type AlertDialogTitle() =\r
    inherit AlertDialog.Title()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        AlertDialog.Title(class' = Lib.cn [| "text-lg font-semibold"; props.class' |])\r
            .dataSlot("alert-dialog-title")\r
            .spread props\r
[<Erase>]\r
type AlertDialogDescription() =\r
    inherit AlertDialog.Description()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.AlertDialog.Description(class' = Lib.cn [| "text-sm text-muted-foreground"; props.class' |])\r
            .dataSlot("alert-dialog-description")\r
            .spread props\r
\r
[<Erase>]\r
type AlertDialogHeader() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex flex-col gap-2 text-center sm:text-left"\r
            props.class'\r
        |]).dataSlot("alert-dialog-header").spread props\r
\r
[<Erase>]\r
type AlertDialogFooter() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"\r
            props.class'\r
        |]) .dataSlot("alert-dialog-footer")\r
            .spread props\r
\r
[<Erase>]\r
type AlertDialogCancel() =\r
    inherit AlertDialog.CloseButton()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        AlertDialog.CloseButton(class' = Lib.cn [|\r
            Button.variants(variant = Button.Variant.Outline)\r
            props.class'\r
        |]).dataSlot("alert-dialog-close").spread props\r
[<Erase>]\r
type AlertDialogAction() =\r
    inherit Partas.Solid.UI.Button()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        Partas.Solid.UI.Button()\r
            .dataSlot("alert-dialog-action")\r
            .spread props\r
`;function l(n){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...i(),...n.components},{SourceCode:o}=e;return o||D("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"alert-dialog",children:"Alert Dialog"}),`
`,r.jsx(s,{of:c}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-fsharp",children:`AlertDialog() {\r
    AlertDialogTrigger() {\r
        "Click me"\r
    }\r
    AlertDialogContent() {\r
        AlertDialogX()\r
        AlertDialogHeader() {\r
            AlertDialogTitle() {\r
                "Alert dialog title"\r
            }\r
        }\r
        AlertDialogDescription() {\r
            "Alert dialog description"\r
        }\r
        AlertDialogFooter() {\r
            AlertDialogAction() { "Do something!" }\r
            AlertDialogCancel() { "Cancel" }\r
        }\r
    }
`})}),`
`,r.jsx(e.p,{children:"By default, the alert dialog has modal set to true, and disables interactions outside the content."}),`
`,r.jsx(t,{of:a}),`
`,r.jsx(e.h3,{id:"alertdialog",children:"AlertDialog"}),`
`,r.jsx(p,{of:a}),`
`,r.jsx(o,{code:u}),`
`,r.jsx(e.h3,{id:"alertdialogcontent",children:"AlertDialogContent"}),`
`,r.jsx(d,{of:g}),`
`,r.jsx(e.h3,{id:"polymorphism",children:"Polymorphism"}),`
`,r.jsx(e.p,{children:"Like all components, you can use inherent kobalte polymorphism to change the rendered element for a component."}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-fsharp",children:`AlertDialog() {\r
    AlertDialogTrigger().as'(Button(variant = Button.Variant.Secondary)) {\r
        "Click me"\r
    }\r
    AlertDialogContent() {\r
        AlertDialogX()\r
        AlertDialogTitle() {\r
            "Alert dialog title"\r
        }\r
        AlertDialogDescription() {\r
            "Alert dialog description"\r
        }\r
    }\r
}
`})}),`
`,r.jsx(t,{of:m,layout:"centered",withToolbar:!0,sourceStatus:"none"})]})}function W(n={}){const{wrapper:e}={...i(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(l,{...n})}):l(n)}function D(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{W as default};

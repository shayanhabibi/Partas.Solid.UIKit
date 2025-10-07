import{G as e,H as p,T as l,K as d,L as m,O as r}from"./iframe-BHVPMPJn.js";import{useMDXComponents as a}from"./index-CB5oDCs8.js";import{S as s,D as c}from"./Sheet.stories-BILw6Vve.js";import{S as h}from"./SheetTrigger.stories-Ddrtxbwj.js";import{S}from"./SheetClose.stories-DZKXGIoH.js";import{S as f}from"./SheetPortal.stories-DZ0tpTI1.js";import{S as u}from"./SheetOverlay.stories-5w-MRRwB.js";import{S as g}from"./SheetContent.stories-BNoUy01F.js";import{S as b}from"./SheetHeader.stories-DgbH_h4S.js";import{S as x}from"./SheetFooter.stories-DE-pzfDV.js";import{S as y}from"./SheetTitle.stories-Cp5lpfMA.js";import{S as j}from"./SheetDescription.stories-CNmLiYL8.js";import"./preload-helper-PPVm8Dsz.js";import"./Sheet-M7zUpdN5.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./PLLNVYER-D8R-EarV.js";import"./FBCYWU27-RI55FxO7.js";import"./3VFJM5NZ-Cb4P0J_t.js";import"./index-DeTOQkeb.js";import"./index-DzweoC3U.js";import"./FLVHQV4A-C_-euiFy.js";import"./index-BWY3wABR.js";import"./JHMNWOLY-DdZhD2t0.js";import"./E53DB7BS-BWjGcyhp.js";import"./FN6EICGO-BXZAkfGN.js";import"./UKTBL2JL-BmAvJ-mx.js";import"./OYES4GOP-B_JtkMZ5.js";import"./5WXHJDCZ-DghNgBBa.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-C_rqj1ej.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-CdhZt3CN.js";import"./combineProps-C_bsadWN.js";import"./Utils-CAhjhIiz.js";import"./x-CNVgNsoI.js";import"./Icon-DcpizePo.js";const C=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Lucide\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
open Fable.Core.JsInterop\r
\r
[<Erase>]\r
module Portal =\r
    [<RequireQualifiedAccess; StringEnum>]\r
    type Position =\r
        | Top\r
        | Bottom\r
        | Left\r
        | Right\r
        static member variants (?position: Position): string =\r
            let position = defaultArg position Position.Right\r
            "fixed inset-0 z-50 flex " +\r
            match position with\r
            | Top -> "items-start"\r
            | Bottom -> "items-end"\r
            | Left -> "justify-start"\r
            | Right -> "justify-end"\r
\r
[<Erase>]\r
type Sheet() =\r
    inherit Kobalte.Dialog()\r
    static member variants(?position: KobaltePlacement): string =\r
        let position = defaultArg position KobaltePlacement.Right\r
        // tw\r
        "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out\r
        data-[closed=]:duration-300 data-[expanded=]:duration-500\r
        data-[expanded=]:animate-in data-[closed=]:animate-out " +\r
        match position with\r
        | KobaltePlacement.TopLeft | KobaltePlacement.TopRight | KobaltePlacement.Top ->\r
            (*TW*) "inset-x-0 top-0 border-b data-[closed=]:slide-out-to-top"\r
        | KobaltePlacement.Right ->\r
            "inset-y-0 right-0 h-full w-3/4 border-l data-[closed=]:slide-out-to-right\r
            data-[expanded=]:slide-in-from-right sm:max-w-sm"\r
        | KobaltePlacement.BottomLeft | KobaltePlacement.BottomRight | KobaltePlacement.Bottom ->\r
            "inset-x-0 bottom-0 border-t data-[closed=]:slide-out-to-bottom\r
                      data-[expanded=]:slide-in-from-bottom"\r
        | KobaltePlacement.Left ->\r
            "inset-y-0 left-0 h-full w-3/4 border-r data-[closed=]:slide-out-to-left\r
            data-[expanded=]:slide-in-from-left sm:max-w-sm"\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Dialog()\r
            .dataSlot("sheet")\r
            .spread props\r
    \r
[<Erase>]\r
type SheetTrigger() =\r
    inherit Dialog.Trigger()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Dialog.Trigger()\r
            .dataSlot("sheet-trigger")\r
            .spread props\r
    \r
[<Erase>]\r
type SheetClose() =\r
    inherit Dialog.CloseButton()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Dialog.CloseButton()\r
            .dataSlot("sheet-close-button")\r
            .spread props\r
    \r
[<Erase>]\r
type SheetPortal() =\r
    inherit Dialog.Portal()\r
    member val position: Kobalte.Enums.KobaltePlacement = jsNative with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Dialog.Portal()\r
            .dataSlot("sheet-portal")\r
            .spread(props) {\r
            div(class' = Portal.Position.variants(!!props.position)) {\r
                props.children\r
            }\r
        }\r
[<Erase>]\r
type SheetOverlay() =\r
    inherit Dialog.Overlay()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Dialog.Overlay(class' = Lib.cn [|\r
            "fixed inset-0 z-50 bg-black/80 data-[expanded=]:animate-in data-[closed=]:animate-out\r
            data-[closed=]:fade-out-0 data-[expanded=]:fade-in-0"\r
            props.class'\r
        |]) .dataSlot("sheet-overlay")\r
            .spread(props)\r
[<Erase>]\r
type SheetContent() =\r
    inherit Dialog.Content()\r
    member val position: Kobalte.Enums.KobaltePlacement = jsNative with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        SheetPortal(position= props.position) {\r
            SheetOverlay()\r
            Kobalte.Dialog.Content(class' = Lib.cn [|\r
                Sheet.variants(props.position)\r
                props.class'\r
                "max-h-screen overflow-y-auto"\r
            |]) .dataSlot("sheet-content")\r
                .spread(props) {\r
                props.children\r
                Kobalte.Dialog.CloseButton(\r
                    class' = "absolute right-4 top-4 rounded-sm\r
                    opacity-70 ring-offset-background transition-opacity\r
                    hover:opacity-100 focus:outline-none focus:ring-2\r
                    focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none\r
                    data-[state=open]:bg-secondary").dataSlot("sheet-close-button") {\r
                    Lucide.Lucide.X(class'="size-4", strokeWidth = 2)\r
                }\r
            }\r
        }\r
[<Erase>]\r
type SheetHeader() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class' = Lib.cn [|\r
            "flex flex-col space-y-2 text-center sm:text-left"; props.class'\r
        |]) .dataSlot("sheet-header")\r
            .spread(props)\r
[<Erase>]\r
type SheetFooter() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class' = Lib.cn [|\r
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"\r
            props.class'\r
        |]) .dataSlot("sheet-footer")\r
            .spread(props)\r
[<Erase>]\r
type SheetTitle() =\r
    inherit Dialog.Title()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Dialog.Title(class' = Lib.cn [|\r
            "text-lg font-semibold text-foreground"\r
            props.class'\r
        |]) .dataSlot("sheet-title")\r
            .spread(props)\r
[<Erase>]\r
type SheetDescription() =\r
    inherit Dialog.Description()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Dialog.Description(class' = Lib.cn [|\r
            //tw\r
            "text-sm text-muted-foreground"\r
            props.class'\r
        |]) .dataSlot("sheet-description")\r
            .spread(props)\r
`;function i(o){const t={h2:"h2",h3:"h3",...a(),...o.components},{SourceCode:n}=t;return n||T("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(p,{of:s}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{of:c,sourceState:"none",withToolbar:!0}),`
`,e.jsx(m,{}),`
`,e.jsx(n,{code:C}),`
`,e.jsx(t.h2,{id:"components",children:"Components"}),`
`,e.jsx(t.h3,{id:"sheet",children:"Sheet"}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(t.h3,{id:"sheettrigger",children:"SheetTrigger"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(t.h3,{id:"sheetclose",children:"SheetClose"}),`
`,e.jsx(r,{of:S}),`
`,e.jsx(t.h3,{id:"sheetportal",children:"SheetPortal"}),`
`,e.jsx(r,{of:f}),`
`,e.jsx(t.h3,{id:"sheetoverlay",children:"SheetOverlay"}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(t.h3,{id:"sheetcontent",children:"SheetContent"}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(t.h3,{id:"sheetheader",children:"SheetHeader"}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(t.h3,{id:"sheetfooter",children:"SheetFooter"}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(t.h3,{id:"sheettitle",children:"SheetTitle"}),`
`,e.jsx(r,{of:y}),`
`,e.jsx(t.h3,{id:"sheetdescription",children:"SheetDescription"}),`
`,e.jsx(r,{of:j})]})}function pe(o={}){const{wrapper:t}={...a(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}function T(o,t){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{pe as default};

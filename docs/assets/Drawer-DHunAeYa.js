import{G as r,H as p,T as d,K as l,L as c,O as n}from"./iframe-BLvaHOrW.js";import{useMDXComponents as i}from"./index-DMt2PYli.js";import{D as a,a as m}from"./Drawer.stories-gTbcwL59.js";import{D as w}from"./DrawerTrigger.stories-DjqtAjvM.js";import{D}from"./DrawerPortal.stories-XKinCtER.js";import{D as u}from"./DrawerClose.stories-p7VGoN1_.js";import{D as h}from"./DrawerOverlay.stories-CP7GnmG2.js";import{D as x}from"./DrawerContent.stories-s7Xz8Nys.js";import{D as f}from"./DrawerHeader.stories-DX4UV2U5.js";import{D as C}from"./DrawerFooter.stories-Bo9Zs1xZ.js";import{D as y}from"./DrawerTitle.stories-BMRvR3Ni.js";import{D as b}from"./DrawerDescription.stories-CsFDnywQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Drawer-BZDQrHeD.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./size-D_xgohvo.js";import"./U42ECMND-BDjyePcW.js";import"./index-BAQLNUOo.js";import"./index-C2xVdcqa.js";import"./Utils-BEjpZvS7.js";import"./Button-CjiiobU-.js";import"./Option-B9lMbA8r.js";import"./Util-jMr-gVD5.js";import"./UKTBL2JL-mrSn-dg4.js";import"./OYES4GOP-DJL3U5Gx.js";import"./index-TpYiyspx.js";import"./FLVHQV4A-ByRBKILc.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BbcR3rHk.js";const g=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid.Polymorphism\r
open Partas.Solid\r
open Partas.Solid.Style\r
open Partas.Solid.Corvu\r
open Fable.Core\r
open Fable.Core.JsInterop\r
\r
[<RequireQualifiedAccess>]\r
module Drawer =\r
    [<Import("useContext", "@corvu/drawer")>]\r
    let useContext (): obj = jsNative\r
    \r
[<Erase>]\r
type Drawer() =\r
    inherit Corvu.Drawer()\r
    [<SolidTypeComponent>]\r
    member props.constructor = Corvu.Drawer().dataSlot("drawer").spread props\r
    \r
[<Erase>]\r
type DrawerTrigger() =\r
    inherit Drawer.Trigger()\r
    interface Polymorph\r
    [<SolidTypeComponent>]\r
    member props.constructor = Drawer.Trigger().dataSlot("drawer-trigger").spread props\r
    \r
[<Erase>]\r
type DrawerPortal() =\r
    inherit Drawer.Portal()\r
    [<SolidTypeComponent>]\r
    member props.constructor = Drawer.Portal().dataSlot("drawer-portal").spread props\r
    \r
[<Erase>]\r
type DrawerClose() =\r
    inherit Drawer.Close()\r
    interface Polymorph\r
    [<SolidTypeComponent>]\r
    member props.constructor = Drawer.Close().dataSlot("drawer-close").spread props\r
    \r
[<Erase>]\r
type DrawerOverlay() =\r
    inherit Drawer.Overlay()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        let drawerContext = Drawer.useContext()\r
        Corvu.Drawer.Overlay(class'= Lib.cn [|\r
            "fixed inset-0 z-50 data-[transitioning]:transition-colors data-[transitioning]:duration-300"\r
            props.class'\r
        |]).dataSlot("drawer-overlay").spread(props).style'([\r
            Style.backgroundColor $"rgb(0 0 0 / {0.8 * drawerContext?openPercentage()})"\r
        ])\r
[<Erase>]\r
type DrawerContent() =\r
    inherit Drawer.Content()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        DrawerPortal() {\r
            DrawerOverlay()\r
            Corvu.Drawer.Content(class'= Lib.cn [|\r
                "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto\r
                flex-col rounded-t-[10px] border bg-background\r
                after:absolute after:inset-x-0 after:top-full\r
                after:h-1/2 after:bg-inherit data-[transitioning]:transition-transform\r
                data-[transitioning]:duration-300 md:select-none"\r
                props.class'\r
            |]).dataSlot("drawer-content").spread(props) {\r
                div(class'="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted")\r
                props.children\r
            }\r
        }\r
[<Erase>]\r
type DrawerHeader() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class'= Lib.cn [|\r
            "grid gap-1.5 p-4 text-center sm:text-left"\r
            props.class'\r
        |]).dataSlot("drawer-header").spread(props)   \r
[<Erase>]\r
type DrawerFooter() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class'= Lib.cn [|\r
            "t-auto flex flex-col gap-2 p-4"\r
            props.class'\r
        |]).dataSlot("drawer-footer").spread(props)\r
[<Erase>]\r
type DrawerTitle() =\r
    inherit Drawer.Label()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Corvu.Drawer.Label(class'= Lib.cn [|\r
            "text-lg font-semibold leading-none tracking-tight"\r
            props.class'\r
        |]).dataSlot("drawer-title").spread(props)\r
[<Erase>]\r
type DrawerDescription() =\r
    inherit Drawer.Description()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Corvu.Drawer.Description(class'=Lib.cn [|"text-sm text-muted-foreground"; props.class'|])\r
            .dataSlot("drawer-description")\r
            .spread(props)\r
\r
\r
`;function s(o){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...o.components},{SourceCode:t}=e;return t||S("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:a}),`
`,r.jsx(d,{}),`
`,r.jsx(e.h2,{id:"minimal-example",children:"Minimal Example"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-fsharp",children:`Drawer().spread props {\r
    DrawerTrigger() {\r
        Button() {\r
            "Click me"\r
        }\r
    }\r
    DrawerContent() {\r
        DrawerHeader() {\r
            DrawerTitle() {\r
                "Are you absolutely sure?"\r
            }\r
            DrawerDescription() { "This action cannot be undone." }\r
        }\r
        DrawerFooter() {\r
            Button() { "Submit" }\r
            DrawerClose() {\r
                Button(variant = Button.Variant.Outline, class'="w-full") {\r
                    "Cancel"\r
                }\r
            }\r
        }\r
    }\r
}
`})}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsx(e.p,{children:`Note, there appears to be some odd behaviour when using the 'side' prop, but\r
I don't remember if this is the case in environments outside of storybook.\r
I would normally reach for the sheet component when rendering from the side anyway.`}),`
`]}),`
`,r.jsx(l,{of:m,layout:"centered",withToolbar:!0,sourceState:"none"}),`
`,r.jsx(c,{}),`
`,r.jsx(t,{code:g}),`
`,r.jsx(e.h2,{id:"components",children:"Components"}),`
`,r.jsx(e.h3,{id:"drawer",children:"Drawer"}),`
`,r.jsx(n,{of:a}),`
`,r.jsx(e.h3,{id:"drawertrigger",children:"DrawerTrigger"}),`
`,r.jsx(n,{of:w}),`
`,r.jsx(e.h3,{id:"drawerportal",children:"DrawerPortal"}),`
`,r.jsx(n,{of:D}),`
`,r.jsx(e.h3,{id:"drawerclose",children:"DrawerClose"}),`
`,r.jsx(n,{of:u}),`
`,r.jsx(e.h3,{id:"draweroverlay",children:"DrawerOverlay"}),`
`,r.jsx(n,{of:h}),`
`,r.jsx(e.h3,{id:"drawercontent",children:"DrawerContent"}),`
`,r.jsx(n,{of:x}),`
`,r.jsx(e.h3,{id:"drawerheader",children:"DrawerHeader"}),`
`,r.jsx(n,{of:f}),`
`,r.jsx(e.h3,{id:"drawerfooter",children:"DrawerFooter"}),`
`,r.jsx(n,{of:C}),`
`,r.jsx(e.h3,{id:"drawertitle",children:"DrawerTitle"}),`
`,r.jsx(n,{of:y}),`
`,r.jsx(e.h3,{id:"drawerdescription",children:"DrawerDescription"}),`
`,r.jsx(n,{of:b})]})}function Z(o={}){const{wrapper:e}={...i(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(s,{...o})}):s(o)}function S(o,e){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Z as default};

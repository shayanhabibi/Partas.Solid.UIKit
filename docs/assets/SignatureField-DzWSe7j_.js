import{G as r,H as a,T as l,K as p,L as d,O as g}from"./iframe-BLvaHOrW.js";import{useMDXComponents as i}from"./index-DMt2PYli.js";import{S as o,D as u}from"./SignatureField.stories-C9ZOw4cN.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BmtgjGtw.js";import"./PT2CJE3O-qWe0jJ3Y.js";import"./index-C3cmjud9.js";import"./Utils-BEjpZvS7.js";import"./index-C2xVdcqa.js";import"./Separator-DfnYslN2.js";import"./T4C3DMHT-Y4_Lrzs8.js";import"./OYES4GOP-DJL3U5Gx.js";import"./index-TpYiyspx.js";import"./FLVHQV4A-ByRBKILc.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BbcR3rHk.js";const c=`\uFEFFnamespace Partas.Solid.UI\r
open Fable.Core\r
open Partas.Solid.Lucide\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
open Partas.Solid\r
open Partas.Solid.ArkUI\r
open Glutinum.ZagJs.SignaturePad\r
\r
module SignatureField =\r
    [<Pojo>]\r
    type SlotClasses(\r
        ?root: string\r
        ,?label: string\r
        ,?control: string\r
        ,?segment: string\r
        ,?clearTrigger: string\r
        ,?guide: string\r
        ) =\r
        [<DefaultValue>]\r
        val mutable root: string\r
        [<DefaultValue>]\r
        val mutable label: string\r
        [<DefaultValue>]\r
        val mutable control: string\r
        [<DefaultValue>]\r
        val mutable segment: string\r
        [<DefaultValue>]\r
        val mutable clearTrigger: string\r
        [<DefaultValue>]\r
        val mutable guide: string\r
\r
[<Erase>]\r
type SignatureField() =\r
    inherit SignaturePad.Root()\r
    [<Erase>]\r
    member val slots: SignatureField.SlotClasses = undefined with get,set\r
    [<Erase>]\r
    member val label: string = undefined with get,set\r
    [<Erase>]\r
    member val clearTrigger: HtmlElement = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.clearTrigger <- RotateCw(class' = "transition-all size-4 stroke-primary/80 hover:stroke-primary")\r
        props.slots <- SignatureField.SlotClasses()\r
        props.drawing <- createEmpty\r
        let drawing,setDrawing = createSignal<DrawingOptions> createEmpty\r
        createEffect(fun () ->\r
            if props.drawing.fill.IsNone then\r
                props.drawing.fill <- Some "var(--color-primary)"\r
            setDrawing props.drawing\r
            )\r
        SignaturePad.Root(\r
            class' = Lib.cn [|\r
                "relative flex flex-col w-full max-w-[400px]"\r
                props.slots.root\r
                props.class'\r
            |],\r
            drawing = drawing()\r
            ).spread props {\r
            Show(when' = !!props.label) {\r
                SignaturePad.Label(class' = Lib.cn [|\r
                    "inline-block"\r
                    props.slots.label\r
                |]) { props.label }\r
            }\r
            SignaturePad.Control(class' = Lib.cn [|\r
                "h-[120px] bg-sidebar rounded-md border border-border"\r
                props.slots.control\r
            |]) {\r
                SignaturePad.Segment(class' = props.slots.segment)\r
                SignaturePad.ClearTrigger(class' = Lib.cn [|\r
                    //tw\r
                    "group absolute top-4 right-4 \\\r
                    bg-sidebar/95 hover:bg-background \\\r
                    hover:ring-1 ring-accent \\\r
                    transition-all \\\r
                    rounded-full p-1"\r
                    props.slots.clearTrigger\r
                |]) {\r
                    props.clearTrigger\r
                }\r
                SignaturePad.Guide(class' = Lib.cn [|\r
                    "absolute bottom-1/7 w-9/10 translate-x-1/20"\r
                    props.slots.guide\r
                |], asChild = (fun props -> Separator().spread props))\r
            }\r
        }\r
`;function s(n){const e={h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...n.components},{SourceCode:t}=e;return t||m("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(a,{of:o}),`
`,r.jsx(l,{}),`
`,r.jsx(e.p,{children:`A signature field with a clear button that lays above the signature to prevent\r
it becoming obscured, and responsive light/dark color scheme.`}),`
`,r.jsx(e.p,{children:`To achieve this, the 'fill' field of the 'drawing' prop is set unless already\r
existing.`}),`
`,r.jsx(e.p,{children:`Therefore, to overwrite the fill colour, you would need to specifically set\r
the 'fill' field on a 'DrawingOptions' object and pass it to the 'drawing' prop.`}),`
`,r.jsx(e.p,{children:"The components of the field can be styled using the 'slots' property object."}),`
`,r.jsx(p,{of:u,sourceState:"none",withToolbar:!0}),`
`,r.jsx(d,{}),`
`,r.jsx(t,{code:c}),`
`,r.jsx(e.h2,{id:"components",children:"Components"}),`
`,r.jsx(e.h3,{id:"signaturefield",children:"SignatureField"}),`
`,r.jsx(g,{of:o}),`
`,r.jsx(e.h2,{id:"dev",children:"Dev"}),`
`,r.jsx(e.p,{children:"Todo:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:"Label positioning"}),`
`]})]})}function k(n={}){const{wrapper:e}={...i(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(s,{...n})}):s(n)}function m(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{k as default};

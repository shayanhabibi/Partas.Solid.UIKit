import{G as r,H as s,T as d,K as p,L as c,O as o}from"./iframe-BHVPMPJn.js";import{useMDXComponents as a}from"./index-CB5oDCs8.js";import{S as t,D as m}from"./Slider.stories-CY7WWapU.js";import{S as h}from"./SliderTrack.stories-CeYzqmyv.js";import{S as u}from"./SliderThumb.stories-CIUhdWZP.js";import{S as b}from"./SliderFill.stories-ztN3D69G.js";import{S as f}from"./SliderLabel.stories-BedCsSVF.js";import{S}from"./SliderValueLabel.stories-BpWiy_1A.js";import"./preload-helper-PPVm8Dsz.js";import"./Slider-CuKUazrs.js";import"./65CAYJLE-C6XxYmPr.js";import"./SOM3K36D-B0WlF5qk.js";import"./FN6EICGO-BXZAkfGN.js";import"./index-DzweoC3U.js";import"./index-DeTOQkeb.js";import"./LR7LBJN3-Ddt3mnWg.js";import"./NGHEENNE-YKRVzZ2g.js";import"./ZZYKR3VO-D0rzgNsV.js";import"./OYES4GOP-B_JtkMZ5.js";import"./FLVHQV4A-C_-euiFy.js";import"./index-BWY3wABR.js";import"./JNCCF6MP-4sxnBYeu.js";import"./5WXHJDCZ-DghNgBBa.js";import"./combineProps-C_bsadWN.js";import"./Utils-CAhjhIiz.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./Label-Cxm7srSC.js";import"./Array-CbDDtYGA.js";const v=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Partas.Solid.Polymorphism\r
open Fable.Core\r
\r
[<Erase>]\r
type Slider() =\r
    inherit Kobalte.Slider()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Kobalte.Slider(class' = Lib.cn [|\r
                "relative flex w-full touch-none items-center select-none \\\r
                data-[disabled]:opacity-50 data-[orientation=vertical]:h-full \\\r
                data-[orientation=vertical]:min-h-[100px] \\\r
                data-[orientation=horizontal]:min-w-[100px] \\\r
                data-[orientation=vertical]:w-auto \\\r
                data-[orientation=horizontal]:flex-col"\r
                // "relative flex w-full touch-none select-none flex-col items-center"\r
                props.class'\r
        |]) .dataSlot("slider")\r
            .spread props\r
\r
// To keep the same behaviour (or similar) behaviour to solid-ui using the slider label and\r
// value label within the context, then we need to have an opposing layout compared to\r
// the shadcn-ui implementation.\r
// We manage this using a slider control, which effectively acts as the root slider like in\r
// shadcn, while our Slider() class above acts as the context provider for the whole system.\r
[<Erase>]\r
type SliderControl() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        let inline classes() =\r
            "relative grow items-center select-none touch-none flex has-data-[orientation=horizontal]:w-full \\\r
            has-data-[orientation=vertical]:flex-col has-data-[orientation=vertical]:h-full \\\r
            has-data-[orientation=vertical]:w-1.5 has-data-[orientation=horizontal]:h-1.5"\r
        div(class' = Lib.cn [|\r
            classes()\r
            props.class'\r
        |]).spread props\r
        \r
[<Erase>]\r
type SliderFill() =\r
    inherit Slider.Fill()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Slider.Fill(class' = Lib.cn [|\r
            "bg-primary absolute data-[orientation=horizontal]:h-full \\\r
            data-[orientation=vertical]:w-full"\r
            // "absolute h-full rounded-full bg-primary"\r
            props.class'\r
        |]) .dataSlot("slider-fill")\r
            .spread(props)\r
// If no children are passed, then we render the fill. Otherwise, we render whatever was\r
// passed (which might be a fill for all we know)\r
[<Erase>]\r
type SliderTrack() =\r
    inherit Slider.Track()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Slider.Track(class' = Lib.cn [|\r
            "bg-muted relative grow overflow-hidden rounded-full \\\r
            data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full \\\r
            data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"\r
            // "relative h-2 w-full grow rounded-full bg-secondary"\r
            props.class'\r
        |]) .dataSlot("slider-track")\r
            .spread props\r
            { props.children |> Option.ofObj |> Option.defaultValue (SliderFill()) }\r
\r
[<Erase>]\r
type SliderThumb() =\r
    inherit Slider.Thumb()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Slider.Thumb(class' = Lib.cn [|\r
            "border-primary ring-ring/50 block size-4 shrink-0 \\\r
            rounded-full border bg-white shadow-sm transition-[color,box-shadow] \\\r
            hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden \\\r
            disabled:pointer-events-none disabled:opacity-50 data-[disabled]:pointer-events-none"\r
            // "top-[-6px] block size-5 rounded-full border-2 border-primary\r
            // bg-background ring-offset-background transition-colors focus-visible:outline-none\r
            // focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2\r
            // disabled:pointer-events-none disabled:opacity-50"\r
            props.class'\r
        |]) .dataSlot("slider-thumb")\r
            .spread props { Slider.Input().dataSlot("slider-input") }\r
\r
\r
\r
\r
[<Erase>]\r
type SliderLabel() =\r
    inherit Slider.Label()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Slider.Label()\r
            .dataSlot("slider-label")\r
            .as'(!@Label)\r
            .spread props\r
\r
[<Erase>]\r
type SliderValueLabel() =\r
    inherit Slider.ValueLabel()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Slider.ValueLabel()\r
            .dataSlot("slider-value-label")\r
            .as'(!@Label)\r
            .spread props\r
`;function l(n){const e={h2:"h2",h3:"h3",...a(),...n.components},{SourceCode:i}=e;return i||x("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(s,{of:t}),`
`,r.jsx(d,{}),`
`,r.jsx(p,{of:m,layout:"centered",sourceState:"none",withToolbar:!0}),`
`,r.jsx(c,{}),`
`,r.jsx(i,{code:v}),`
`,r.jsx(e.h2,{id:"components",children:"Components"}),`
`,r.jsx(e.h3,{id:"slider",children:"Slider"}),`
`,r.jsx(o,{of:t}),`
`,r.jsx(e.h3,{id:"slidertrack",children:"SliderTrack"}),`
`,r.jsx(o,{of:h}),`
`,r.jsx(e.h3,{id:"sliderthumb",children:"SliderThumb"}),`
`,r.jsx(o,{of:u}),`
`,r.jsx(e.h3,{id:"sliderfill",children:"SliderFill"}),`
`,r.jsx(o,{of:b}),`
`,r.jsx(e.h3,{id:"sliderlabel",children:"SliderLabel"}),`
`,r.jsx(o,{of:f}),`
`,r.jsx(e.h3,{id:"slidervaluelabel",children:"SliderValueLabel"}),`
`,r.jsx(o,{of:S})]})}function N(n={}){const{wrapper:e}={...a(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(l,{...n})}):l(n)}function x(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{N as default};

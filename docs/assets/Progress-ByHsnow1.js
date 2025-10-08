import{H as r,I as m,T as d,L as t,N as a,Q as o}from"./iframe-DHSEN8D7.js";import{useMDXComponents as c}from"./index-e4aCb-2o.js";import{P as l,D as f}from"./Progress.stories-Dt6PZq9j.js";import{P as g}from"./ProgressLabel.stories-CJyTujoe.js";import{P as h}from"./ProgressValueLabel.stories-Bo4LFTt2.js";import{P as i,D as p}from"./ProgressRing.stories-C0A7TOx2.js";import"./preload-helper-PPVm8Dsz.js";import"./Progress-CM-Itb8Y.js";import"./LR7LBJN3-B1LX4Q8m.js";import"./index-SvhdUoxj.js";import"./JNCCF6MP-4sxnBYeu.js";import"./FLVHQV4A-VgAG7mUH.js";import"./index-CX5o166x.js";import"./combineProps-ChBwTExo.js";import"./5WXHJDCZ-DghNgBBa.js";import"./String-DLdTzCOk.js";import"./Label-BvFM7TJT.js";import"./Utils-CzREY3kc.js";import"./Util-DXwscfZV.js";const b=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Style\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
open Partas.Solid.Kobalte\r
open Partas.Solid.Polymorphism\r
open Partas.Solid.Experimental.U\r
\r
module Progress =\r
    [<StringEnum>]\r
    type Variant =\r
        | Default\r
        | Primary\r
        | Neutral\r
        | Warning\r
        | Error\r
        | Success\r
        \r
[<Erase>]\r
type Progress() =\r
    inherit Kobalte.Progress()\r
    static member internal variants variant util =\r
        let inline makeColorScheme color fact = {| bg = $"{util}-{color}-200 dark:{util}-{color}-500/{fact}"; fill = $"{util}-{color}-500 dark:{util}-{color}-500" |}\r
        let inline makeSimpleColorScheme color = makeColorScheme color 30\r
        match variant with\r
        | Progress.Default -> {| bg = $"{util}-secondary"; fill = $"{util}-primary" |}\r
        | Progress.Primary -> makeSimpleColorScheme "blue"\r
        | Progress.Neutral -> makeColorScheme "gray" 40\r
        | Progress.Warning -> makeSimpleColorScheme "yellow"\r
        | Progress.Error -> makeSimpleColorScheme "red"\r
        | Progress.Success -> makeSimpleColorScheme "emerald"\r
\r
    [<DefaultValue>]\r
    val mutable variant: Progress.Variant\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        props.variant <- Progress.Default\r
        let bg,setBg = createSignal("bg-secondary")\r
        let color,setColor = createSignal("bg-primary")\r
        createEffect(fun () ->\r
            let variants = Progress.variants props.variant "bg"\r
            setBg variants.bg\r
            setColor variants.fill\r
            )\r
        Kobalte.Progress().spread(props) {\r
            props.children\r
            Progress.Track(class' = $"relative h-2 w-full overflow-hidden rounded-full {bg()}") {\r
                Progress.Fill(class' = $"h-full w-[var(--kb-progress-fill-width)] flex-1 {color()} transition-all")\r
            }\r
            \r
        }\r
\r
[<Erase>]\r
type ProgressLabel() =\r
    inherit Progress.Label()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor = Progress.Label().as'(!@Label).spread(props)\r
\r
[<Erase>]\r
type ProgressValueLabel() =\r
    inherit Progress.ValueLabel()\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        Progress.ValueLabel()\r
            .dataSlot("progress-value-label")\r
            .as'(!@Label).spread props\r
\r
[<Erase>]\r
module progressCircle =\r
    [<StringEnum>]\r
    type Size =\r
        | Xs\r
        | Sm\r
        | Md\r
        | Lg\r
        | Xl\r
    \r
    let sizes = function\r
        | Xs -> {| radius = 15 ; strokeWidth = 3 |}\r
        | Sm -> {| radius = 19 ; strokeWidth = 4 |}\r
        | Md -> {| radius = 32 ; strokeWidth = 6 |}\r
        | Lg -> {| radius = 52 ; strokeWidth = 8 |}\r
        | Xl -> {| radius = 80; strokeWidth = 10 |}\r
\r
open progressCircle\r
\r
[<Erase>]\r
type ProgressCircle() =\r
    inherit div()\r
    [<DefaultValue>] val mutable variant: Progress.Variant\r
    [<DefaultValue>] val mutable value: int\r
    [<DefaultValue>] val mutable size: Size\r
    [<DefaultValue>] val mutable radius: int\r
    [<DefaultValue>] val mutable strokeWidth: int\r
    [<DefaultValue>] val mutable showAnimation: bool\r
    [<DefaultValue>] val mutable customTween: bool\r
    [<DefaultValue>] val mutable color: string\r
    [<DefaultValue>] val mutable bgColor: string\r
    static member getLimitedValue (input: int) =\r
        if input = JS.undefined then 0\r
        elif input > 100 then 100\r
        else input\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        props.size <- Md\r
        props.showAnimation <- true\r
        props.color <- "stroke-primary"\r
        props.bgColor <- "stroke-secondary"\r
        props.customTween <- false\r
        let color,setColor = createSignal(props.color)\r
        let bgColor,setBgColor = createSignal(props.color)\r
        createEffect(fun _ ->\r
            if !!props.variant |> not then\r
                setColor props.color\r
                setBgColor props.bgColor\r
            else\r
            let variantColors = Progress.variants props.variant "stroke"\r
            setColor variantColors.fill\r
            setBgColor variantColors.bg\r
            )\r
        \r
        let value: unit -> float = fun () -> ProgressCircle.getLimitedValue(props.value)\r
        let radius = fun () -> float props.radius ??= float (sizes(props.size).radius)\r
        let strokeWidth = fun () -> float props.strokeWidth ??= float (sizes(props.size).strokeWidth)\r
        let normalizedRadius: unit -> float = fun () -> radius() - strokeWidth() / 2.\r
        let circumference = fun () -> normalizedRadius() * 2. * JS.Math.PI\r
        let strokeDashoffset = fun () -> (value() / 100.) * circumference()\r
        let offset = fun () -> circumference() - strokeDashoffset()\r
        \r
        div(class' = Lib.cn [|\r
            "flex flex-col items-center justify-center"\r
            props.class'\r
        |]) .dataSlot("progress-circle")\r
            .spread props {\r
            Svg.svg(\r
                width = $"{radius() * 2.}",\r
                height = $"{radius() * 2.}",\r
                viewBox = $"0 0 {radius() * 2.} {radius() * 2.}",\r
                class' = "-rotate-90"\r
            ) {\r
                Svg.circle(\r
                    r = !!normalizedRadius(),\r
                    cx = !^radius(),\r
                    cy = !^radius(),\r
                    strokeWidth = strokeWidth(),\r
                    fill = "transparent",\r
                    stroke = "",\r
                    strokeLinecap = "round",\r
                    class' = Lib.cn [| "stroke-secondary transition-colors ease-linear"; bgColor() |]\r
                    )\r
                if value() >= 0 then\r
                    Svg.circle(\r
                        r = !!normalizedRadius(),\r
                        cx = !^radius(),\r
                        cy = !^radius(),\r
                        class' = Lib.cn [|\r
                            "stroke-primary transition-colors ease-linear"\r
                            if props.customTween then "transition-all"\r
                            elif props.showAnimation then "transition-all duration-300 ease-in-out"\r
                            else ""\r
                            color()\r
                        |],\r
                        strokeWidth = !!strokeWidth(),\r
                        fill = "transparent",\r
                        stroke = "",\r
                        strokeLinecap = "round",\r
                        strokeDasharray = $"{circumference()} {circumference()}",\r
                        strokeDashoffset = $"{offset()}"\r
                    )\r
                else null\r
            }\r
            div(class' = "absolute flex") { props.children }\r
        }\r
         \r
`;function u(n){const e={h2:"h2",h3:"h3",...c(),...n.components},{SourceCode:s}=e;return s||S("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(m,{of:l}),`
`,r.jsx(d,{}),`
`,r.jsx(t,{of:f,layout:"centered",sourceState:"none",withToolbar:!0}),`
`,r.jsx(a,{}),`
`,r.jsx(t,{of:p,meta:i,layout:"centered",sourceState:"none",withToolbar:!0}),`
`,r.jsx(a,{of:p}),`
`,r.jsx(s,{code:b}),`
`,r.jsx(e.h2,{id:"components",children:"Components"}),`
`,r.jsx(e.h3,{id:"progress",children:"Progress"}),`
`,r.jsx(o,{of:l}),`
`,r.jsx(e.h3,{id:"progresslabel",children:"ProgressLabel"}),`
`,r.jsx(o,{of:g}),`
`,r.jsx(e.h3,{id:"progressvaluelabel",children:"ProgressValueLabel"}),`
`,r.jsx(o,{of:h}),`
`,r.jsx(e.h3,{id:"progressring",children:"ProgressRing"}),`
`,r.jsx(o,{of:i})]})}function X(n={}){const{wrapper:e}={...c(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(u,{...n})}):u(n)}function S(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{X as default};

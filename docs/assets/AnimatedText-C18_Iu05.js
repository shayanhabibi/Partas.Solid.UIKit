import{G as r,H as u,T as c,K as a,L as o}from"./iframe-BHVPMPJn.js";import{useMDXComponents as d}from"./index-CB5oDCs8.js";import{A as m,D as y}from"./AnimatedText.stories-BzrwLo_U.js";import{A as b,D as l}from"./AuroraText.stories-CqN4ut0s.js";import"./preload-helper-PPVm8Dsz.js";import"./String-DLdTzCOk.js";import"./Util-DXwscfZV.js";import"./List-D43zMB1s.js";import"./Option-DlNMNgAB.js";import"./Types-CqbaJdUC.js";import"./Array-CbDDtYGA.js";import"./Utils-CAhjhIiz.js";import"./index-DzweoC3U.js";import"./stagger-BpUZ1ZuV.js";const s=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.AnimeJs\r
open Partas.AnimeJs.Core\r
open Partas.AnimeJs.Style\r
open Fable.Core\r
open System\r
[<Erase>]\r
module AnimatedText =\r
    [<StringEnum>]\r
    type Variant =\r
        | GradualSpacing\r
        | FlipText\r
        | WordFadeIn\r
        | WordPullUp\r
\r
\r
[<Erase>]\r
type GradualSpacing() =\r
    interface VoidNode\r
    [<DV>] val mutable text: string\r
    [<DV>] val mutable duration: float\r
    [<DV>] val mutable delay: float\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        props.duration <- 500\r
        props.delay <- 40\r
        let uid,selector = Lib.createUniqueSelector\r
        fun () -> animate {\r
            style.opacity { 0, 1 }\r
            style.x { -20, 0 }\r
            duration props.duration\r
            delay (stagger(props.delay).asFunctionValue)\r
            autoplay Lib.createInViewPlayer\r
        }\r
        |> Lib.createTextAnimation props.text selector\r
        div(class' = Lib.cn [| "flex"; props.class' |]) {\r
            For(each = (props.text.ToCharArray() |> Array.map string)) {\r
                yield fun letter index ->\r
                    span(class' = uid) {\r
                        if letter = " " then Char.empty else letter\r
                    }\r
            }\r
        }\r
\r
[<Erase>]\r
type FlipText() =\r
    interface VoidNode\r
    [<DV>] val mutable text: string\r
    [<DV>] val mutable duration: float\r
    [<DV>] val mutable delay: float\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        props.duration <- 0.5\r
        props.delay <- 80\r
        let uid,selector = Lib.createUniqueSelector\r
        fun () -> animate {\r
            style.rotateX { -90, 0 }\r
            style.opacity { 0, 1 }\r
            delay (stagger(props.delay).asFunctionValue)\r
            autoplay (onScroll {\r
                sync "play reverse"\r
            })\r
        }\r
        |> Lib.createTextAnimation props.text selector\r
        div(class' = Lib.cn [| "flex"; props.class' |]) {\r
            For(each = (props.text |> _.ToCharArray() |> Array.map string )) {\r
                yield fun letter index ->\r
                    div(class' = uid) {\r
                        if letter = " " then Char.empty\r
                        else letter\r
                    }\r
            }\r
        }\r
\r
[<Erase>]\r
type WordFadeIn() =\r
    interface VoidNode\r
    [<DV>] val mutable text: string\r
    [<DV>] val mutable duration: float\r
    [<DV>] val mutable delay: float\r
     [<DefaultValue>] val mutable blur: float\r
     [<DefaultValue>] val mutable once: bool\r
     [<SolidTypeComponentAttribute>]\r
     member props.constructor =\r
         props.delay <- 150\r
         props.duration <- 1000\r
         props.blur <- 8.\r
         props.once <- true\r
         let inline blur value = $"blur({value}px)"\r
         let uid,selector = Lib.createUniqueSelector\r
         fun () -> animate {\r
             style.opacity { 0, 1 }\r
             style.filter { blur props.blur, blur 0 }\r
             delay (stagger(props.delay).asFunctionValue)\r
             autoplay (onScroll { sync "play" "pause" })\r
             duration props.duration\r
         }\r
         |> Lib.createTextAnimation props.text selector\r
         div(class' = Lib.cn [| "flex"; props.class' |]).spread props\r
             {\r
             For(each = (props.text.Split(" "))) {\r
                 yield fun word index ->\r
                     span(class' = uid) {\r
                         $"{word}{System.Char.empty}"\r
                     }\r
             }\r
         }\r
\r
[<Erase>]\r
type WordPullup() =\r
    interface VoidNode\r
    [<DefaultValue>] val mutable text: string\r
    [<DefaultValue>] val mutable delay: float\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        props.delay <- 100\r
        let uid,selector = Lib.createUniqueSelector\r
        fun () -> animate {\r
            style.y {\r
                too 20 0\r
                Eases.outQuad\r
            }\r
            style.opacity { 0, 1 }\r
            delay (stagger(props.delay).asFunctionValue)\r
            autoplay (Lib.createInViewPlayer)\r
            duration 800\r
            \r
        }\r
        |> Lib.createTextAnimation props.text selector\r
        div(class' = Lib.cn [| "flex"; props.class' |]) {\r
            For(each = props.text.Split(" ")) {\r
                yield fun letter index ->\r
                    span(class' = uid) {\r
                        $"{letter}\\u00A0"\r
                    }\r
            }\r
        }\r
\r
[<Erase>]\r
type AnimatedText() =\r
    interface VoidNode\r
    [<DV>] val mutable text: string\r
    [<DV>] val mutable duration: float\r
    [<DV>] val mutable delay: float\r
    [<DV>] val mutable blur: float\r
    [<DV>] val mutable once: bool\r
    [<DV>] val mutable variant: AnimatedText.Variant\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.variant <- AnimatedText.GradualSpacing\r
        Bindings.Switch() {\r
            Match(when' = props.variant.IsGradualSpacing) {\r
                GradualSpacing().spread props\r
            }\r
            Match(when' = props.variant.IsFlipText) {\r
                FlipText().spread props\r
            }\r
            Match(when' = props.variant.IsWordFadeIn) {\r
                WordFadeIn().spread props\r
            }\r
            Match(when' = props.variant.IsWordPullUp) {\r
                WordPullup().spread props\r
            }\r
        }\r
`,p=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Aria\r
open Partas.Solid.Style\r
open Fable.Core\r
open Fable.Core.JsInterop\r
open System\r
\r
[<Erase>]\r
type AuroraText() =\r
    interface RegularNode\r
    [<DefaultValue>]\r
    val mutable speed: float\r
    [<DefaultValue>]\r
    val mutable colors: string[]\r
    [<DV>] val mutable hiddenClass: string\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.colors <- [|\r
            "#FF0080"\r
            "#7928CA"\r
            "#0070F3"\r
            "#38bdf8"\r
        |]\r
        props.speed <- 1.\r
        let gradientStyle = createObj [\r
            Style.backgroundImage $"""linear-gradient(135deg, {props.colors |> String.concat ", "}, {props.colors[0]})"""\r
            "WebkitBackgroundClip" ==> "text"\r
            "WebkitTextFillColor" ==> "transparent"\r
            Style.animationDuration $"{10. / props.speed}s"\r
        ]\r
        span(class' = Lib.cn [| "relative inline-block"; props.class' |]) {\r
            SrSpan() { props.children }\r
            span(\r
                ariaHidden = true\r
                ,class' = Lib.cn [|\r
                    "relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"\r
                    props.hiddenClass\r
                |] \r
            ).style'(gradientStyle) {\r
                props.children\r
            }\r
        }\r
    \r
`;function i(n){const e={h1:"h1",...d(),...n.components},{SourceCode:t}=e;return t||x("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(u,{of:m}),`
`,r.jsx(c,{}),`
`,r.jsx(a,{of:y,layout:"centered",withToolbar:!0,source:{code:s}}),`
`,r.jsx(o,{}),`
`,r.jsx(t,{code:s}),`
`,r.jsx(e.h1,{id:"auroratext",children:"AuroraText"}),`
`,r.jsx(a,{of:l,meta:b,layout:"centered",withToolbar:!0,source:{code:p}}),`
`,r.jsx(o,{of:l}),`
`,r.jsx(t,{code:p})]})}function w(n={}){const{wrapper:e}={...d(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(i,{...n})}):i(n)}function x(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{w as default};

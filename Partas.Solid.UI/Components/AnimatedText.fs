namespace Partas.Solid.UI

open Partas.Solid
open Partas.AnimeJs
open Partas.AnimeJs.Core
open Partas.AnimeJs.Style
open Fable.Core
open System
[<Erase>]
module AnimatedText =
    [<StringEnum>]
    type Variant =
        | GradualSpacing
        | FlipText
        | WordFadeIn
        | WordPullUp


[<Erase>]
type GradualSpacing() =
    interface VoidNode
    [<DV>] val mutable text: string
    [<DV>] val mutable duration: float
    [<DV>] val mutable delay: float
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        props.duration <- 500
        props.delay <- 40
        let uid,selector = Lib.createUniqueSelector
        fun () -> animate {
            style.opacity { 0, 1 }
            style.x { -20, 0 }
            duration props.duration
            delay (stagger(props.delay).asFunctionValue)
            autoplay Lib.createInViewPlayer
        }
        |> Lib.createTextAnimation props.text selector
        div(class' = Lib.cn [| "flex"; props.class' |]) {
            For(each = (props.text.ToCharArray() |> Array.map string)) {
                yield fun letter index ->
                    span(class' = uid) {
                        if letter = " " then Char.empty else letter
                    }
            }
        }

[<Erase>]
type FlipText() =
    interface VoidNode
    [<DV>] val mutable text: string
    [<DV>] val mutable duration: float
    [<DV>] val mutable delay: float
    [<SolidTypeComponent>]
    member props.constructor =
        props.duration <- 0.5
        props.delay <- 80
        let uid,selector = Lib.createUniqueSelector
        fun () -> animate {
            style.rotateX { -90, 0 }
            style.opacity { 0, 1 }
            delay (stagger(props.delay).asFunctionValue)
            autoplay (onScroll {
                sync "play reverse"
            })
        }
        |> Lib.createTextAnimation props.text selector
        div(class' = Lib.cn [| "flex"; props.class' |]) {
            For(each = (props.text |> _.ToCharArray() |> Array.map string )) {
                yield fun letter index ->
                    div(class' = uid) {
                        if letter = " " then Char.empty
                        else letter
                    }
            }
        }

[<Erase>]
type WordFadeIn() =
    interface VoidNode
    [<DV>] val mutable text: string
    [<DV>] val mutable duration: float
    [<DV>] val mutable delay: float
     [<DefaultValue>] val mutable blur: float
     [<DefaultValue>] val mutable once: bool
     [<SolidTypeComponentAttribute>]
     member props.constructor =
         props.delay <- 150
         props.duration <- 1000
         props.blur <- 8.
         props.once <- true
         let inline blur value = $"blur({value}px)"
         let uid,selector = Lib.createUniqueSelector
         fun () -> animate {
             style.opacity { 0, 1 }
             style.filter { blur props.blur, blur 0 }
             delay (stagger(props.delay).asFunctionValue)
             autoplay (onScroll { sync "play" "pause" })
             duration props.duration
         }
         |> Lib.createTextAnimation props.text selector
         div(class' = Lib.cn [| "flex"; props.class' |]).spread props
             {
             For(each = (props.text.Split(" "))) {
                 yield fun word index ->
                     span(class' = uid) {
                         $"{word}{System.Char.empty}"
                     }
             }
         }

[<Erase>]
type WordPullup() =
    interface VoidNode
    [<DefaultValue>] val mutable text: string
    [<DefaultValue>] val mutable delay: float
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        props.delay <- 100
        let uid,selector = Lib.createUniqueSelector
        fun () -> animate {
            style.y {
                too 20 0
                Eases.outQuad
            }
            style.opacity { 0, 1 }
            delay (stagger(props.delay).asFunctionValue)
            autoplay (Lib.createInViewPlayer)
            duration 800
            
        }
        |> Lib.createTextAnimation props.text selector
        div(class' = Lib.cn [| "flex"; props.class' |]) {
            For(each = props.text.Split(" ")) {
                yield fun letter index ->
                    span(class' = uid) {
                        $"{letter}\u00A0"
                    }
            }
        }

[<Erase>]
type AnimatedText() =
    interface VoidNode
    [<DV>] val mutable text: string
    [<DV>] val mutable duration: float
    [<DV>] val mutable delay: float
    [<DV>] val mutable blur: float
    [<DV>] val mutable once: bool
    [<DV>] val mutable variant: AnimatedText.Variant
    [<SolidTypeComponent>]
    member props.__ =
        props.variant <- AnimatedText.GradualSpacing
        Bindings.Switch() {
            Match(when' = props.variant.IsGradualSpacing) {
                GradualSpacing().spread props
            }
            Match(when' = props.variant.IsFlipText) {
                FlipText().spread props
            }
            Match(when' = props.variant.IsWordFadeIn) {
                WordFadeIn().spread props
            }
            Match(when' = props.variant.IsWordPullUp) {
                WordPullup().spread props
            }
        }

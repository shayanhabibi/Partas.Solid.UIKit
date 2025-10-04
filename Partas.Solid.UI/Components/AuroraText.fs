namespace Partas.Solid.UI

open Partas.Solid
open Partas.Solid.Aria
open Partas.Solid.Style
open Fable.Core
open Fable.Core.JsInterop
open System

[<Erase>]
type AuroraText() =
    interface RegularNode
    [<DefaultValue>]
    val mutable speed: float
    [<DefaultValue>]
    val mutable colors: string[]
    [<DV>] val mutable hiddenClass: string
    [<SolidTypeComponent>]
    member props.__ =
        props.colors <- [|
            "#FF0080"
            "#7928CA"
            "#0070F3"
            "#38bdf8"
        |]
        props.speed <- 1.
        let gradientStyle = createObj [
            Style.backgroundImage $"""linear-gradient(135deg, {props.colors |> String.concat ", "}, {props.colors[0]})"""
            "WebkitBackgroundClip" ==> "text"
            "WebkitTextFillColor" ==> "transparent"
            Style.animationDuration $"{10. / props.speed}s"
        ]
        span(class' = Lib.cn [| "relative inline-block"; props.class' |]) {
            SrSpan() { props.children }
            span(
                ariaHidden = true
                ,class' = Lib.cn [|
                    "relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
                    props.hiddenClass
                |] 
            ).style'(gradientStyle) {
                props.children
            }
        }
    

namespace Partas.Solid.UI
open Partas.Solid
open Partas.Solid.Aria
open Partas.Solid.Style
open Fable.Core
open Fable.Core.JsInterop
open Partas.Solid.Kobalte

[<Erase>]
type Marquee() =
    inherit div()
    [<DefaultValue>]
    val mutable pauseOnHover: bool
    [<Erase>]
    member val repeat = 4 with get,set
    [<DefaultValue>]
    val mutable reverse: bool
    [<DefaultValue>]
    val mutable vertical: bool
    [<DefaultValue>]
    val mutable orientation: Enums.Orientation
    [<Erase>]
    member val duration = 40 with get,set
    [<Erase>]
    member val gap = "1rem" with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.reverse <- false
        props.pauseOnHover <- false
        props.orientation <- Orientation.Horizontal
        props.repeat <- 4
        props.duration <- 40
        props.gap <- "1rem"
        let repeat,setRepeat = createSignal(0)
        createEffect(fun () ->
            setRepeat props.repeat
            )
        
        div(class' = Lib.cn [|
            "group flex overflow-hidden p-2 [gap:var(--gap)]"
            match props.orientation with
            | Horizontal -> "flex-row"
            | Vertical -> "flex-col"
            props.class'
        |]).style'({|
            ``--duration`` = $"{props.duration}s"
            ``--gap`` = props.gap
        |}).spread props {
            For(each = Array.create (repeat()) 0) {
                yield fun _ _ ->
                    div(class' = Lib.cn [|
                        "flex shrink-0 justify-around [gap:var(--gap)]"
                        if props.orientation = Horizontal then
                            "animate-marquee flex-row"
                        elif props.orientation = Vertical then
                            "animate-marquee-vertical flex-col"
                        if props.pauseOnHover then "group-hover:[animation-play-state:paused]"
                        if props.reverse then "[animation-direction:reverse]"
                    |]) { props.children }
            }
        }

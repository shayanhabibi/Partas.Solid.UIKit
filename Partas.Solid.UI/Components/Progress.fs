namespace Partas.Solid.UI

open Partas.Solid
open Partas.Solid.Style
open Fable.Core
open Fable.Core.JS
open Fable.Core.JsInterop
open Partas.Solid.Kobalte
open Partas.Solid.Polymorphism
open Partas.Solid.Experimental.U

module Progress =
    [<StringEnum>]
    type Variant =
        | Default
        | Primary
        | Neutral
        | Warning
        | Error
        | Success
        
[<Erase>]
type Progress() =
    inherit Kobalte.Progress()
    static member internal variants variant util =
        let inline makeColorScheme color fact = {| bg = $"{util}-{color}-200 dark:{util}-{color}-500/{fact}"; fill = $"{util}-{color}-500 dark:{util}-{color}-500" |}
        let inline makeSimpleColorScheme color = makeColorScheme color 30
        match variant with
        | Progress.Default -> {| bg = $"{util}-secondary"; fill = $"{util}-primary" |}
        | Progress.Primary -> makeSimpleColorScheme "blue"
        | Progress.Neutral -> makeColorScheme "gray" 40
        | Progress.Warning -> makeSimpleColorScheme "yellow"
        | Progress.Error -> makeSimpleColorScheme "red"
        | Progress.Success -> makeSimpleColorScheme "emerald"

    [<DefaultValue>]
    val mutable variant: Progress.Variant
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        props.variant <- Progress.Default
        let bg,setBg = createSignal("bg-secondary")
        let color,setColor = createSignal("bg-primary")
        createEffect(fun () ->
            let variants = Progress.variants props.variant "bg"
            setBg variants.bg
            setColor variants.fill
            )
        Kobalte.Progress().spread(props) {
            props.children
            Progress.Track(class' = $"relative h-2 w-full overflow-hidden rounded-full {bg()}") {
                Progress.Fill(class' = $"h-full w-[var(--kb-progress-fill-width)] flex-1 {color()} transition-all")
            }
            
        }

[<Erase>]
type ProgressLabel() =
    inherit Progress.Label()
    [<SolidTypeComponentAttribute>]
    member props.constructor = Progress.Label().as'(!@Label).spread(props)

[<Erase>]
type ProgressValueLabel() =
    inherit Progress.ValueLabel()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        Progress.ValueLabel()
            .dataSlot("progress-value-label")
            .as'(!@Label).spread props

[<Erase>]
module progressCircle =
    [<StringEnum>]
    type Size =
        | Xs
        | Sm
        | Md
        | Lg
        | Xl
    
    let sizes = function
        | Xs -> {| radius = 15 ; strokeWidth = 3 |}
        | Sm -> {| radius = 19 ; strokeWidth = 4 |}
        | Md -> {| radius = 32 ; strokeWidth = 6 |}
        | Lg -> {| radius = 52 ; strokeWidth = 8 |}
        | Xl -> {| radius = 80; strokeWidth = 10 |}

open progressCircle

[<Erase>]
type ProgressCircle() =
    inherit div()
    [<DefaultValue>] val mutable variant: Progress.Variant
    [<DefaultValue>] val mutable value: int
    [<DefaultValue>] val mutable size: Size
    [<DefaultValue>] val mutable radius: int
    [<DefaultValue>] val mutable strokeWidth: int
    [<DefaultValue>] val mutable showAnimation: bool
    [<DefaultValue>] val mutable customTween: bool
    [<DefaultValue>] val mutable color: string
    [<DefaultValue>] val mutable bgColor: string
    static member getLimitedValue (input: int) =
        if input = JS.undefined then 0
        elif input > 100 then 100
        else input
    [<SolidTypeComponent>]
    member props.constructor =
        props.size <- Md
        props.showAnimation <- true
        props.color <- "stroke-primary"
        props.bgColor <- "stroke-secondary"
        props.customTween <- false
        let color,setColor = createSignal(props.color)
        let bgColor,setBgColor = createSignal(props.color)
        createEffect(fun _ ->
            if !!props.variant |> not then
                setColor props.color
                setBgColor props.bgColor
            else
            let variantColors = Progress.variants props.variant "stroke"
            setColor variantColors.fill
            setBgColor variantColors.bg
            )
        
        let value: unit -> float = fun () -> ProgressCircle.getLimitedValue(props.value)
        let radius = fun () -> float props.radius ??= float (sizes(props.size).radius)
        let strokeWidth = fun () -> float props.strokeWidth ??= float (sizes(props.size).strokeWidth)
        let normalizedRadius: unit -> float = fun () -> radius() - strokeWidth() / 2.
        let circumference = fun () -> normalizedRadius() * 2. * JS.Math.PI
        let strokeDashoffset = fun () -> (value() / 100.) * circumference()
        let offset = fun () -> circumference() - strokeDashoffset()
        
        div(class' = Lib.cn [|
            "flex flex-col items-center justify-center"
            props.class'
        |]) .dataSlot("progress-circle")
            .spread props {
            Svg.svg(
                width = $"{radius() * 2.}",
                height = $"{radius() * 2.}",
                viewBox = $"0 0 {radius() * 2.} {radius() * 2.}",
                class' = "-rotate-90"
            ) {
                Svg.circle(
                    r = !!normalizedRadius(),
                    cx = !^radius(),
                    cy = !^radius(),
                    strokeWidth = strokeWidth(),
                    fill = "transparent",
                    stroke = "",
                    strokeLinecap = "round",
                    class' = Lib.cn [| "stroke-secondary transition-colors ease-linear"; bgColor() |]
                    )
                if value() >= 0 then
                    Svg.circle(
                        r = !!normalizedRadius(),
                        cx = !^radius(),
                        cy = !^radius(),
                        class' = Lib.cn [|
                            "stroke-primary transition-colors ease-linear"
                            if props.customTween then "transition-all"
                            elif props.showAnimation then "transition-all duration-300 ease-in-out"
                            else ""
                            color()
                        |],
                        strokeWidth = !!strokeWidth(),
                        fill = "transparent",
                        stroke = "",
                        strokeLinecap = "round",
                        strokeDasharray = $"{circumference()} {circumference()}",
                        strokeDashoffset = $"{offset()}"
                    )
                else null
            }
            div(class' = "absolute flex") { props.children }
        }
         

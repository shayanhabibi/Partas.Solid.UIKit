namespace Partas.Solid.UI
open Partas.Solid
open Fable.Core
open Partas.Solid.Kobalte
[<Erase>]
type ColorSlider() =
    inherit Kobalte.ColorSlider()
    [<SolidTypeComponent>]
    member props.__ =
        Kobalte.ColorSlider(
            class' = Lib.cn [|
                "relative flex w-full touch-none select-none flex-col items-center"
            |]
            ).spread props

[<Erase>]
type ColorSliderTrack() =
    inherit ColorSlider.Track()
    [<SolidTypeComponent>]
    member props.__ =
        ColorSlider.Track(
            class' = Lib.cn [|
                "relative h-3 w-full grow rounded-full"
                props.class'
            |]
            ).spread props

[<Erase>]
type ColorSliderThumb() =
    inherit ColorSlider.Thumb()
    [<SolidTypeComponent>]
    member props.__ =
        ColorSlider.Thumb(class' = Lib.cn [|
            "top-[-2px] block size-4 rounded-full border-2 border-border \
            bg-(--kb-color-current) ring-offset-background \
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring \
            focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            props.class'
        |]).spread props {
            ColorSlider.Input()
        }

[<Erase>]
type ColorSliderLabel() =
    inherit ColorSlider.Label()
    [<SolidTypeComponent>]
    member props.__ =
        ColorSlider.Label().as'(!@Label).spread props

[<Erase>]
type ColorSliderValueLabel() =
    inherit ColorSlider.ValueLabel()
    [<SolidTypeComponent>]
    member props.__ =
        ColorSlider.ValueLabel().as'(!@Label).spread props

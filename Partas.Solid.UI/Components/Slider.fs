namespace Partas.Solid.UI

open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.Polymorphism
open Fable.Core

[<Erase>]
type Slider() =
    inherit Kobalte.Slider()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        Kobalte.Slider(class' = Lib.cn [|
                "relative flex w-full touch-none items-center select-none \
                data-[disabled]:opacity-50 data-[orientation=vertical]:h-full \
                data-[orientation=vertical]:min-h-[100px] \
                data-[orientation=horizontal]:min-w-[100px] \
                data-[orientation=vertical]:w-auto \
                data-[orientation=horizontal]:flex-col"
                // "relative flex w-full touch-none select-none flex-col items-center"
                props.class'
        |]) .dataSlot("slider")
            .spread props

// To keep the same behaviour (or similar) behaviour to solid-ui using the slider label and
// value label within the context, then we need to have an opposing layout compared to
// the shadcn-ui implementation.
// We manage this using a slider control, which effectively acts as the root slider like in
// shadcn, while our Slider() class above acts as the context provider for the whole system.
[<Erase>]
type SliderControl() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        let inline classes() =
            "relative grow items-center select-none touch-none flex has-data-[orientation=horizontal]:w-full \
            has-data-[orientation=vertical]:flex-col has-data-[orientation=vertical]:h-full \
            has-data-[orientation=vertical]:w-1.5 has-data-[orientation=horizontal]:h-1.5"
        div(class' = Lib.cn [|
            classes()
            props.class'
        |]).spread props
        
[<Erase>]
type SliderFill() =
    inherit Slider.Fill()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        Slider.Fill(class' = Lib.cn [|
            "bg-primary absolute data-[orientation=horizontal]:h-full \
            data-[orientation=vertical]:w-full"
            // "absolute h-full rounded-full bg-primary"
            props.class'
        |]) .dataSlot("slider-fill")
            .spread(props)
// If no children are passed, then we render the fill. Otherwise, we render whatever was
// passed (which might be a fill for all we know)
[<Erase>]
type SliderTrack() =
    inherit Slider.Track()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        Slider.Track(class' = Lib.cn [|
            "bg-muted relative grow overflow-hidden rounded-full \
            data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full \
            data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            // "relative h-2 w-full grow rounded-full bg-secondary"
            props.class'
        |]) .dataSlot("slider-track")
            .spread props
            { props.children |> Option.ofObj |> Option.defaultValue (SliderFill()) }

[<Erase>]
type SliderThumb() =
    inherit Slider.Thumb()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        Slider.Thumb(class' = Lib.cn [|
            "border-primary ring-ring/50 block size-4 shrink-0 \
            rounded-full border bg-white shadow-sm transition-[color,box-shadow] \
            hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden \
            disabled:pointer-events-none disabled:opacity-50 data-[disabled]:pointer-events-none"
            // "top-[-6px] block size-5 rounded-full border-2 border-primary
            // bg-background ring-offset-background transition-colors focus-visible:outline-none
            // focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
            // disabled:pointer-events-none disabled:opacity-50"
            props.class'
        |]) .dataSlot("slider-thumb")
            .spread props { Slider.Input().dataSlot("slider-input") }




[<Erase>]
type SliderLabel() =
    inherit Slider.Label()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        Slider.Label()
            .dataSlot("slider-label")
            .as'(!@Label)
            .spread props

[<Erase>]
type SliderValueLabel() =
    inherit Slider.ValueLabel()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        Slider.ValueLabel()
            .dataSlot("slider-value-label")
            .as'(!@Label)
            .spread props

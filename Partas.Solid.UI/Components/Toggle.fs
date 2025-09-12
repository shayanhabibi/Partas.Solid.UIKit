namespace Partas.Solid.UI

open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core

[<Erase>]
module Toggle =
    [<StringEnum>]
    type Variant = | Default | Outline
    [<StringEnum>]
    type Size = | Default | Small | Large

[<Erase>]
type Toggle() =
    inherit ToggleButton()
    static member variants(?variant: Toggle.Variant, ?size: Toggle.Size): string =
        let variant = defaultArg variant Toggle.Variant.Default
        let size = defaultArg size Toggle.Size.Default
        //tw
        "inline-flex items-center justify-center rounded-md text-sm font-medium
        ring-offset-background transition-colors focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        disabled:pointer-events-none disabled:opacity-50 " +
        match variant with
        | Toggle.Variant.Default -> (*TW*) "bg-transparent "
        | Toggle.Variant.Outline -> (*TW*) "border border-input bg-transparent shadow-sm "
        +
        match size with
        | Toggle.Size.Default -> (*TW*) "h-9 px-3"
        | Toggle.Size.Small -> (*TW*) "h-9 px-2"
        | Toggle.Size.Large -> (*TW*) "h-10 px-3"
    member val variant: Toggle.Variant = unbox null with get,set
    member val size: Toggle.Size = unbox null with get,set
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        ToggleButton(
                class' = Lib.cn [|
                    Toggle.variants(props.variant, props.size)
                    props.class'
                |]
            ).spread props

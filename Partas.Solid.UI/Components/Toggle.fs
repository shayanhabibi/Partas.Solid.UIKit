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
        "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium \
        hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none \
        disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground \
        [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 \
        focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] \
        outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 \
        dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap"
        + " " +
        match variant with
        | Toggle.Variant.Default -> (*TW*) "bg-transparent "
        | Toggle.Variant.Outline -> (*TW*) "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground "
        +
        match size with
        | Toggle.Size.Default -> (*TW*) "h-9 px-2 min-w-9"
        | Toggle.Size.Small -> (*TW*) "h-8 px-1.5 min-w-8"
        | Toggle.Size.Large -> (*TW*) "h-10 px-2.5 min-w-10"
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

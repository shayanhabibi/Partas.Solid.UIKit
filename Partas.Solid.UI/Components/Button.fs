namespace Partas.Solid.UI

open Fable.Core.JsInterop
open System
open Partas.Solid
open Fable.Core

module Button =
    [<RequireQualifiedAccess; StringEnum>]
    type Size =
        | Default
        | Small
        | Large
        | Icon
        | IconSmall
        | IconLarge
    [<RequireQualifiedAccess; StringEnum>]
    type Variant =
        | Default
        | Outline
        | Ghost
        | Link
        | Destructive
        | Secondary

open Button

[<Erase>]
type Button() =
    inherit Kobalte.Button()
    static member variants (?variant: Button.Variant, ?size: Button.Size) : string =
        let variant = defaultArg variant Button.Variant.Default
        let size = defaultArg size Button.Size.Default
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md \
        text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 \
        [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 \
        [&_svg]:shrink-0 outline-none focus-visible:border-ring \
        focus-visible:ring-ring/50 focus-visible:ring-[3px] \
        aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 \
        aria-invalid:border-destructive " +
        match variant with
        | Button.Variant.Default ->     "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 \
                                        [&_[data-slot=kbd]]:bg-background/20 \
                                        [&_[data-slot=kbd]]:border-none \
                                        [&_[data-slot=kbd]]:text-background"
        | Button.Variant.Destructive -> "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60"
        | Button.Variant.Outline ->     "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
        | Button.Variant.Secondary ->   "bg-secondary text-secondary-foreground hover:bg-secondary/80 \
                                        [&_[data-slot=kbd]]:bg-primary/5 \
                                        [&_[data-slot=kbd]]:border-none \
                                        [&_[data-slot=kbd]]:text-primary/90"
        | Button.Variant.Ghost ->       "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
        | Button.Variant.Link ->        "text-primary underline-offset-4 hover:underline"
        + " " +
        match size with
        | Button.Size.Default ->        "h-9 px-4 py-2 has-[>svg]:px-3"
        | Button.Size.Small ->          "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"
        | Button.Size.Large ->          "h-10 rounded-md px-6 has-[>svg]:px-4"
        | Button.Size.Icon ->           "size-9"
        | Button.Size.IconSmall ->      "size-8"
        | Button.Size.IconLarge ->      "size-10"
    /// <summary>
    /// Predefined size styles of the button.
    /// </summary>
    /// <defaultValue>default</defaultValue>
    [<Erase>]
    member val size: Button.Size = Size.Default with get,set
    /// <summary>
    /// Sets the style of the button.
    /// </summary>
    /// <defaultValue>default</defaultValue>
    /// <storybook controlType="radio"/>
    [<Erase>]
    member val variant: Button.Variant = Variant.Default with get,set
    [<SolidTypeComponent>]
    member props.__ =
        Kobalte.Button(
            class' = Lib.cn [|
                Button.variants(props.variant,props.size)
                props.class'
            |]
        )   .dataSlot("button")
            .data("buttonvariant", string props.variant)
            .spread props

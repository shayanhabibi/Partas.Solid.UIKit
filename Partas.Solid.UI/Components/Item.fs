namespace Partas.Solid.UI
open Partas.Solid
open Fable.Core
open Fable.Core.JsInterop
open Fable.Core.JS

open Partas.Solid.Aria
[<Erase>]
type ItemGroup() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "group/item-group flex flex-col"
            props.class'
        |], role = "list")
            .dataSlot("item-group")
            .spread props

[<Erase>]
type ItemSeparator() =
    inherit Separator()
    [<SolidTypeComponent>]
    member props.__ =
        Separator(orientation = Kobalte.Enums.Orientation.Horizontal,
                  class' = Lib.cn [|
                      "my-0"
                      props.class'
                  |])
            .dataSlot("item-separator")
            .spread props

[<Erase>]
module Item =
    [<StringEnum>]
    type Variant =
        | Default
        | Outline
        | Muted
    [<StringEnum; RequireQualifiedAccess>]
    type Size =
        | Default
        | Small

open Item

[<Erase>]
type Item() =
    inherit div()
    [<Erase>]
    member val variant: Variant = undefined with get,set
    [<Erase>]
    member val size: Size = undefined with get,set
    static member variants(?variant: Variant, ?size: Size) =
        let variant = defaultArg variant Variant.Default
        let size = defaultArg size Size.Default
        "group/item flex items-center border border-transparent text-sm rounded-md \
        transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 \
        flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 \
        focus-visible:ring-[3px]"
        + " " +
        match variant with
        | Default -> "bg-transparent"
        | Outline -> "border-border"
        | Muted -> "bg-muted/50"
        + " " +
        match size with
        | Size.Default -> "p-4 gap-4"
        | Size.Small -> "py-3 px-4 gap-2.5"

    [<SolidTypeComponent>]
    member props.__ =
        props.size <- Size.Default
        props.variant <- Variant.Default
        div(class' = Lib.cn [|
            Item.variants(props.variant,props.size)
            props.class'
        |]) .dataSlot("item")
            .data("variant", string props.variant)
            .data("size", string props.size)
            .spread props

[<Erase>]
module ItemMedia =
    [<StringEnum>]
    type Variant =
        | Default
        | Icon
        | Image
open ItemMedia
[<Erase>]
type ItemMedia() =
    inherit div()
    [<Erase>]
    member val variant: Variant = undefined with get,set
    static member variants(?variant: Variant) =
        let variant = defaultArg variant Variant.Default
        "flex shrink-0 items-center justify-center gap-2 \
        group-has-[[data-slot=item-description]]/item:self-start \
        [&_svg]:pointer-events-none \
        group-has-[[data-slot=item-description]]/item:translate-y-0.5"
        + " " +
        match variant with
        | Default -> "bg-transparent"
        | Icon -> "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4"
        | Image -> "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover"
    [<SolidTypeComponent>]
    member props.__ =
        props.variant <- Variant.Default
        div(class' = Lib.cn [|
            ItemMedia.variants(props.variant)
            props.class'
        |]) .dataSlot("item-media")
            .data("variant", string props.variant)
            .spread props

[<Erase>]
type ItemContent() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none"
            props.class'
        |]) .dataSlot("item-content")
            .spread props

[<Erase>]
type ItemTitle() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class'  = Lib.cn [|
            "flex w-fit items-center gap-2 text-sm leading-snug font-medium"
            props.class'
        |]) .dataSlot("item-title")
            .spread props

[<Erase>]
type ItemDescription() =
    inherit p()
    [<SolidTypeComponent>]
    member props.__ =
        p(class' = Lib.cn [|
            "text-muted-foreground line-clamp-2 text-sm leading-normal"
            "font-normal text-balance"
            "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4"
            props.class'
        |]) .dataSlot("item-description")
            .spread props

[<Erase>]
type ItemActions() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "flex items-center gap-2"
            props.class'
        |]) .dataSlot("item-actions")
            .spread props

[<Erase>]
type ItemHeader() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "flex basis-full items-center justify-between gap-2"
            props.class'
        |]) .dataSlot("item-header")
            .spread props

[<Erase>]
type ItemFooter() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "flex basis-full items-center justify-between gap-2"
            props.class'
        |]) .dataSlot("item-footer")
            .spread props

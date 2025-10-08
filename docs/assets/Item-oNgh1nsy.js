const r=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Fable.Core\r
open Fable.Core.JsInterop\r
open Fable.Core.JS\r
\r
open Partas.Solid.Aria\r
[<Erase>]\r
type ItemGroup() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "group/item-group flex flex-col"\r
            props.class'\r
        |], role = "list")\r
            .dataSlot("item-group")\r
            .spread props\r
\r
[<Erase>]\r
type ItemSeparator() =\r
    inherit Separator()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        Separator(orientation = Kobalte.Enums.Orientation.Horizontal,\r
                  class' = Lib.cn [|\r
                      "my-0"\r
                      props.class'\r
                  |])\r
            .dataSlot("item-separator")\r
            .spread props\r
\r
[<Erase>]\r
module Item =\r
    [<StringEnum>]\r
    type Variant =\r
        | Default\r
        | Outline\r
        | Muted\r
    [<StringEnum; RequireQualifiedAccess>]\r
    type Size =\r
        | Default\r
        | Small\r
\r
open Item\r
\r
[<Erase>]\r
type Item() =\r
    inherit div()\r
    [<Erase>]\r
    member val variant: Variant = undefined with get,set\r
    [<Erase>]\r
    member val size: Size = undefined with get,set\r
    static member variants(?variant: Variant, ?size: Size) =\r
        let variant = defaultArg variant Variant.Default\r
        let size = defaultArg size Size.Default\r
        "group/item flex items-center border border-transparent text-sm rounded-md \\\r
        transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 \\\r
        flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 \\\r
        focus-visible:ring-[3px]"\r
        + " " +\r
        match variant with\r
        | Default -> "bg-transparent"\r
        | Outline -> "border-border"\r
        | Muted -> "bg-muted/50"\r
        + " " +\r
        match size with\r
        | Size.Default -> "p-4 gap-4"\r
        | Size.Small -> "py-3 px-4 gap-2.5"\r
\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.size <- Size.Default\r
        props.variant <- Variant.Default\r
        div(class' = Lib.cn [|\r
            Item.variants(props.variant,props.size)\r
            props.class'\r
        |]) .dataSlot("item")\r
            .data("variant", string props.variant)\r
            .data("size", string props.size)\r
            .spread props\r
\r
[<Erase>]\r
module ItemMedia =\r
    [<StringEnum>]\r
    type Variant =\r
        | Default\r
        | Icon\r
        | Image\r
open ItemMedia\r
[<Erase>]\r
type ItemMedia() =\r
    inherit div()\r
    [<Erase>]\r
    member val variant: Variant = undefined with get,set\r
    static member variants(?variant: Variant) =\r
        let variant = defaultArg variant Variant.Default\r
        "flex shrink-0 items-center justify-center gap-2 \\\r
        group-has-[[data-slot=item-description]]/item:self-start \\\r
        [&_svg]:pointer-events-none \\\r
        group-has-[[data-slot=item-description]]/item:translate-y-0.5"\r
        + " " +\r
        match variant with\r
        | Default -> "bg-transparent"\r
        | Icon -> "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4"\r
        | Image -> "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover"\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.variant <- Variant.Default\r
        div(class' = Lib.cn [|\r
            ItemMedia.variants(props.variant)\r
            props.class'\r
        |]) .dataSlot("item-media")\r
            .data("variant", string props.variant)\r
            .spread props\r
\r
[<Erase>]\r
type ItemContent() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none"\r
            props.class'\r
        |]) .dataSlot("item-content")\r
            .spread props\r
\r
[<Erase>]\r
type ItemTitle() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class'  = Lib.cn [|\r
            "flex w-fit items-center gap-2 text-sm leading-snug font-medium"\r
            props.class'\r
        |]) .dataSlot("item-title")\r
            .spread props\r
\r
[<Erase>]\r
type ItemDescription() =\r
    inherit p()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        p(class' = Lib.cn [|\r
            "text-muted-foreground line-clamp-2 text-sm leading-normal"\r
            "font-normal text-balance"\r
            "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4"\r
            props.class'\r
        |]) .dataSlot("item-description")\r
            .spread props\r
\r
[<Erase>]\r
type ItemActions() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex items-center gap-2"\r
            props.class'\r
        |]) .dataSlot("item-actions")\r
            .spread props\r
\r
[<Erase>]\r
type ItemHeader() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex basis-full items-center justify-between gap-2"\r
            props.class'\r
        |]) .dataSlot("item-header")\r
            .spread props\r
\r
[<Erase>]\r
type ItemFooter() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex basis-full items-center justify-between gap-2"\r
            props.class'\r
        |]) .dataSlot("item-footer")\r
            .spread props\r
`;export{r as N};

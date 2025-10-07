namespace Partas.Solid.UI
open Partas.Solid
open Fable.Core.JS
open Fable.Core
open Fable.Core.JsInterop

/// <summary>
/// The main component of the empty state. Wraps the <c>EmptyHeader</c>
/// and <c>EmptyContent</c> components.
/// </summary>
/// <code>
/// Empty() {
///     EmptyHeader()
///     EmptyContent()
/// }
/// </code>
[<Erase>]
type Empty
    /// <summary>
    /// The main component of the empty state. Wraps the <c>EmptyHeader</c>
    /// and <c>EmptyContent</c> components.
    /// </summary>
    () =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "flex min-w-0 flex-1 flex-col items-center justify-center \
            gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12"
            props.class'
        |]) .dataSlot("empty")
            .spread props
    
/// <summary>
/// The <c>EmptyHeader</c> component wraps the empty media, title, and description.
/// <code>
/// EmptyHeader() {
///     EmptyMedia()
///     EmptyTitle()
///     EmptyDescription()
/// }
/// </code>
/// </summary>
[<Erase>]
type EmptyHeader
    /// <summary>
    /// The <c>EmptyHeader</c> component wraps the empty media, title, and description.
    /// </summary>
    () =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "flex max-w-sm flex-col items-center gap-2 text-center"
            props.class'
        |]) .dataSlot("empty-header")
            .spread props

[<Erase>]
module EmptyMedia =
    [<StringEnum>]
    type Variant =
        | Default
        | Icon

open EmptyMedia
/// <summary>
/// Use the <c>EmptyMedia</c> component to display the media
/// of the empty state such as an icon or an image. You can also
/// use it to display other components such as an avatar.
/// </summary>
[<Erase>]
type EmptyMedia
    /// <summary>
    /// Use the <c>EmptyMedia</c> component to display the media
    /// of the empty state such as an icon or an image. You can also
    /// use it to display other components such as an avatar.
    /// </summary>
    () =
    inherit div()
    [<Erase>]
    member val variant: Variant = undefined with get,set
    static member variants(?variant: Variant) =
        let variant = defaultArg variant Default
        "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none \
        [&_svg]:shrink-0"
        + " " +
        match variant with
        | Default -> "bg-transparent"
        | Icon -> "bg-muted text-foreground flex size-10 shrink-0 \
                   items-center justify-center rounded-lg \
                    [&_svg:not([class*='size-'])]:size-6"

    [<SolidTypeComponent>]
    member props.__ =
        props.variant <- Default
        div(class' = Lib.cn [|
            EmptyMedia.variants(props.variant)
            props.class'
        |]) .dataSlot("empty-icon")
            .spread props

/// <summary>
/// Use the <c>EmptyTitle</c> component to display the title of
/// the empty state.
/// </summary>
[<Erase>]
type EmptyTitle
    /// <summary>
    /// Use the <c>EmptyTitle</c> component to display the title of
    /// the empty state.
    /// </summary>
    () =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "text-lg font-medium tracking-tight"
            props.class'
        |]) .dataSlot("empty-title")
            .spread props

/// <summary>
/// Use the <c>EmptyDescription</c> component to display the
/// description of the empty state.
/// </summary>
[<Erase>]
type EmptyDescription
    /// <summary>
    /// Use the <c>EmptyDescription</c> component to display the
    /// description of the empty state.
    /// </summary>
    () =
    inherit p()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed \
            [&>a]:underline [&>a]:underline-offset-4"
            props.class'
        |]) .dataSlot("empty-description")
            .spread props

/// <summary>
/// Use the <c>EmptyContent</c> component to display the content
/// of the empty state, such as a button, input or a link.
/// </summary>
[<Erase>]
type EmptyContent
    /// <summary>
    /// Use the <c>EmptyContent</c> component to display the content
    /// of the empty state, such as a button, input or a link.
    /// </summary>
    () =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "flex w-full max-w-sm min-w-0 flex-col items-center \
            gap-4 text-sm text-balance"
            props.class'
        |]) .dataSlot("empty-content")
            .spread props

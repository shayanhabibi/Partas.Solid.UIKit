const n=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Fable.Core.JS\r
open Fable.Core\r
open Fable.Core.JsInterop\r
\r
/// <summary>\r
/// The main component of the empty state. Wraps the <c>EmptyHeader</c>\r
/// and <c>EmptyContent</c> components.\r
/// </summary>\r
/// <code>\r
/// Empty() {\r
///     EmptyHeader()\r
///     EmptyContent()\r
/// }\r
/// </code>\r
[<Erase>]\r
type Empty\r
    /// <summary>\r
    /// The main component of the empty state. Wraps the <c>EmptyHeader</c>\r
    /// and <c>EmptyContent</c> components.\r
    /// </summary>\r
    () =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex min-w-0 flex-1 flex-col items-center justify-center \\\r
            gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12"\r
            props.class'\r
        |]) .dataSlot("empty")\r
            .spread props\r
    \r
/// <summary>\r
/// The <c>EmptyHeader</c> component wraps the empty media, title, and description.\r
/// <code>\r
/// EmptyHeader() {\r
///     EmptyMedia()\r
///     EmptyTitle()\r
///     EmptyDescription()\r
/// }\r
/// </code>\r
/// </summary>\r
[<Erase>]\r
type EmptyHeader\r
    /// <summary>\r
    /// The <c>EmptyHeader</c> component wraps the empty media, title, and description.\r
    /// </summary>\r
    () =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex max-w-sm flex-col items-center gap-2 text-center"\r
            props.class'\r
        |]) .dataSlot("empty-header")\r
            .spread props\r
\r
[<Erase>]\r
module EmptyMedia =\r
    [<StringEnum>]\r
    type Variant =\r
        | Default\r
        | Icon\r
\r
open EmptyMedia\r
/// <summary>\r
/// Use the <c>EmptyMedia</c> component to display the media\r
/// of the empty state such as an icon or an image. You can also\r
/// use it to display other components such as an avatar.\r
/// </summary>\r
[<Erase>]\r
type EmptyMedia\r
    /// <summary>\r
    /// Use the <c>EmptyMedia</c> component to display the media\r
    /// of the empty state such as an icon or an image. You can also\r
    /// use it to display other components such as an avatar.\r
    /// </summary>\r
    () =\r
    inherit div()\r
    [<Erase>]\r
    member val variant: Variant = undefined with get,set\r
    static member variants(?variant: Variant) =\r
        let variant = defaultArg variant Default\r
        "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none \\\r
        [&_svg]:shrink-0"\r
        + " " +\r
        match variant with\r
        | Default -> "bg-transparent"\r
        | Icon -> "bg-muted text-foreground flex size-10 shrink-0 \\\r
                   items-center justify-center rounded-lg \\\r
                    [&_svg:not([class*='size-'])]:size-6"\r
\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.variant <- Default\r
        div(class' = Lib.cn [|\r
            EmptyMedia.variants(props.variant)\r
            props.class'\r
        |]) .dataSlot("empty-icon")\r
            .spread props\r
\r
/// <summary>\r
/// Use the <c>EmptyTitle</c> component to display the title of\r
/// the empty state.\r
/// </summary>\r
[<Erase>]\r
type EmptyTitle\r
    /// <summary>\r
    /// Use the <c>EmptyTitle</c> component to display the title of\r
    /// the empty state.\r
    /// </summary>\r
    () =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "text-lg font-medium tracking-tight"\r
            props.class'\r
        |]) .dataSlot("empty-title")\r
            .spread props\r
\r
/// <summary>\r
/// Use the <c>EmptyDescription</c> component to display the\r
/// description of the empty state.\r
/// </summary>\r
[<Erase>]\r
type EmptyDescription\r
    /// <summary>\r
    /// Use the <c>EmptyDescription</c> component to display the\r
    /// description of the empty state.\r
    /// </summary>\r
    () =\r
    inherit p()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed \\\r
            [&>a]:underline [&>a]:underline-offset-4"\r
            props.class'\r
        |]) .dataSlot("empty-description")\r
            .spread props\r
\r
/// <summary>\r
/// Use the <c>EmptyContent</c> component to display the content\r
/// of the empty state, such as a button, input or a link.\r
/// </summary>\r
[<Erase>]\r
type EmptyContent\r
    /// <summary>\r
    /// Use the <c>EmptyContent</c> component to display the content\r
    /// of the empty state, such as a button, input or a link.\r
    /// </summary>\r
    () =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex w-full max-w-sm min-w-0 flex-col items-center \\\r
            gap-4 text-sm text-balance"\r
            props.class'\r
        |]) .dataSlot("empty-content")\r
            .spread props\r
`;export{n as K};

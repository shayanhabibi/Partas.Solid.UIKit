namespace Partas.Solid.UI
open Partas.Solid
open Fable.Core
open Fable.Core.JS
open Fable.Core.JsInterop
open Partas.Solid.Kobalte
open Partas.Solid.Aria

[<Erase>]
type ButtonGroup() =
    inherit div()
    static member variants(?orientation: Orientation) =
        let orientation = defaultArg orientation Horizontal
        // Kobalte uses the data orientation of the separator, so instead of having to
        // explicitly pass a prop to the separator when in Vertical mode, we'll
        // have it respond to the data-orientation of the parent group
        "group/button-group flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2"
        + " " +
        match orientation with
        | Horizontal ->
            "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none"
        | Vertical ->
            "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"

    [<Erase>]
    member val orientation: Orientation = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.orientation <- Horizontal
        div(
            role = "group",
            class' = Lib.cn [|
                ButtonGroup.variants(props.orientation)
                props.class'
            |]
        )   .data("orientation", string props.orientation)
            .dataSlot("button-group")
            .spread props

[<Erase>]
type ButtonGroupText() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div( class' = Lib.cn [|
                "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm \
                font-medium shadow-xs [&_svg]:pointer-events-none \
                [&_svg:not([class*='size-'])]:size-4"
                props.class'
            |]
            ).spread props

[<Erase>]
type ButtonGroupSeparator() =
    inherit Separator()
    [<SolidTypeComponent>]
    member props.__ =
        props.orientation <- Vertical
        Separator(
            class' = Lib.cn [|
                "bg-input relative !m-0 self-stretch \
                group-data-[orientation=horizontal]/button-group:h-auto group-data-[orientation=horizontal]/button-group:w-px \
                group-data-[orientation=vertical]/button-group:h-px"
            |]
        )   .spread(props)
            .dataSlot("button-group-separator")

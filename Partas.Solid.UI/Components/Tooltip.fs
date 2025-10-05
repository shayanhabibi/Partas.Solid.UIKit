namespace Partas.Solid.UI

open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core

[<Erase>]
type TooltipTrigger() =
    inherit Tooltip.Trigger()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        Tooltip.Trigger()
            .dataSlot("tooltip-trigger")
            .spread props

[<Erase>]
type Tooltip() =
    inherit Kobalte.Tooltip()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        Kobalte.Tooltip(gutter = 4)
            .dataSlot("tooltip")
            .spread props

open Partas.Solid.Style
[<Erase>]
type TooltipContent() =
    inherit Tooltip.Content()
    [<Erase>]
    member val sideOffset: float = JS.undefined with get,set
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        props.sideOffset <- 0
        Tooltip.Portal().dataSlot("tooltip-portal") {
            Tooltip.Content(class' = Lib.cn [|
                "bg-foreground selection-none text-background animate-in fade-in-0 zoom-in-95 \
                data-[closed]:animate-out data-[closed]:fade-out-0 \
                data-[closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 \
                data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 \
                data-[side=top]:slide-in-from-bottom-2 z-50 w-fit \
                origin-(--kb-popover-content-transform-origin) rounded-md px-3 \
                py-1.5 text-xs text-balance select-none"
                // "z-50 origin-(--kb-popover-content-transform-origin)
                // overflow-hidden rounded-md border bg-popover px-3 py-1.5
                // text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95"
                props.class'
            |]) .dataSlot("tooltip-content")
                .spread props {
                    // Tooltip.Arrow(class' =
                    //     "bg-foreground fill-foreground \
                    //     translate-y-[calc(50%_+_2px)] \
                    //     z-50 rotate-45 rounded-[2px]",
                    //     size = 12).dataSlot("arrow")
                    props.children
                }
        }

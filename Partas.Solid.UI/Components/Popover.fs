namespace Partas.Solid.UI

open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core

[<Erase>]
type PopoverTrigger() =
    inherit Popover.Trigger()
    [<SolidTypeComponent>]
    member props.constructor =
        Popover.Trigger()
            .dataSlot("popover-trigger")
            .spread props

[<Erase>]
type Popover() =
    inherit Kobalte.Popover()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.Popover(gutter = 4)
            .dataSlot("popover")
            .spread props
    
[<Erase>]
type PopoverContent() =
    inherit Popover.Content()
    [<SolidTypeComponent>]
    member props.constructor =
        Popover.Portal().dataSlot("popover-portal") {
            Popover.Content(class' = Lib.cn [|
                "z-50 w-72 origin-[var(--kb-popover-content-transform-origin)]
                rounded-md border bg-popover p-4 text-popover-foreground shadow-md
                outline-none data-[expanded]:animate-in data-[closed]:animate-out
                data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95
                data-[expanded]:zoom-in-95"
                props.class'
            |]) .dataSlot("popover-content")
                .spread(props)
        }

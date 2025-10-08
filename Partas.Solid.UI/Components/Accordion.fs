namespace Partas.Solid.UI

open Partas.Solid
open Fable.Core
open Partas.Solid.Kobalte
open Partas.Solid.Lucide


[<Erase>]
type AccordionItem() =
    inherit Accordion.Item()
    [<SolidTypeComponent>]
    member props.constructor =
        Accordion.Item(class' = Lib.cn [|
            "border-b last:border-b-0"
            props.class'
        |]) .dataSlot("accordion-item")
            .spread props

[<Erase>]
type AccordionTrigger() =
    inherit Accordion.Trigger()
    [<SolidTypeComponent>]
    member props.constructor =
        Accordion.Header(class' = "flex") {
            Accordion.Trigger(class' = Lib.cn [|
                "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 \
                items-start justify-between gap-4 rounded-md py-4 text-left text-sm \
                font-medium transition-all outline-none hover:underline \
                focus-visible:ring-[3px] disabled:pointer-events-none \
                disabled:opacity-50 [&[data-expanded]>svg]:rotate-180"
                props.class'
            |]) .dataSlot("accordion-trigger")
                .spread props {
                props.children
                Lucide.ChevronDown(
                    strokeWidth = 2,
                    class' = "text-muted-foreground pointer-events-none size-4 \
                            shrink-0 transition-transform duration-200"
                )
            }
        }

[<Erase>]
type AccordionContent() =
    inherit Accordion.Content()
    [<SolidTypeComponent>]
    member props.constructor =
        Accordion.Content(class' = 
            "animate-accordion-up overflow-hidden text-sm transition-all data-[expanded]:animate-accordion-down"
        )   .dataSlot("accordion-content")
            .spread props {
            div(class' = Lib.cn [| "pb-4 pt-0"; props.class' |])
                { props.children }
        }

[<Erase>]
type Accordion() =
    inherit Kobalte.Accordion()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.Accordion().dataSlot("accordion").spread props

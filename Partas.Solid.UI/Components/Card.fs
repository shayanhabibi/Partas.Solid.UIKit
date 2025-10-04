namespace Partas.Solid.UI
open Partas.Solid
open Fable.Core
[<Erase>]
type Card() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div( class' = Lib.cn [|
            "rounded-xl border bg-card text-card-foreground shadow-sm gap-6 flex flex-col py-6"
            props.class'
        |] ).dataSlot("card")
            .spread props

[<Erase>]
type CardHeader() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "@container/card-header grid auto-rows-min \
            grid-rows-[auto_auto] items-start gap-2 px-6 \
            has-data-[slot=card-action]:grid-cols-[1fr_auto] \
            [.border-b]:pb-6"
            props.class'
        |]).dataSlot("card-header").spread props

[<Erase>]
type CardTitle() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
           "font-semibold leading-none"
           props.class'
        |]).dataSlot("card-title").spread props

[<Erase>]
type CardDescription() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "text-sm text-muted-foreground"
            props.class'
        |]).dataSlot("card-description").spread props

[<Erase>]
type CardAction() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "col-start-2 row-span-2 row-start-1 self-start justify-self-end"
            props.class'
        |]).dataSlot("card-action").spread props
        
[<Erase>]
type CardContent() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "px-6"
            props.class'
        |]).dataSlot("card-content").spread props

[<Erase>]
type CardFooter() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "flex items-center px-6 [.border-t]:pt-6"
            props.class'
        |]).dataSlot("card-footer").spread props

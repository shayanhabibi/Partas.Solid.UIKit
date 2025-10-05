namespace Partas.Solid.UI

open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core

[<Erase>]
type Dialog() =
    inherit Kobalte.Dialog()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.Dialog()
            .dataSlot("dialog")
            .spread props

[<Erase>]
type DialogTrigger() =
    inherit Dialog.Trigger()
    [<SolidTypeComponent>]
    member props.constructor =
        Dialog.Trigger()
            .dataSlot("dialog-trigger")
            .spread props

[<Erase>]
type DialogPortal() =
    inherit Dialog.Portal()
    [<SolidTypeComponent>]
    member props.constructor =
        Dialog.Portal()
            .dataSlot("dialog-portal")
            .spread(props)
            {
                div(class' = "fixed inset-0 z-50 flex items-start justify-center sm:items-center")
                    { props.children }
            }

[<Erase>]
type DialogOverlay() =
    inherit Dialog.Overlay()
    [<SolidTypeComponent>]
    member props.constructor =
        Dialog.Overlay( class' = Lib.cn [|
            "data-[expanded]:animate-in data-[closed]:animate-out \
            data-[closed]:fade-out-0 data-[expanded]:fade-in-0 fixed \
            inset-0 z-50 bg-black/50"
            props.class' |]
        )   .dataSlot("dialog-overlay")
            .spread(props)
    
[<Erase>]
type DialogContent() =
    inherit Dialog.Content()
    [<DefaultValue>]
    val mutable showCloseButton: bool
    [<DefaultValue>] val mutable dismissible: bool
    [<SolidTypeComponent>]
    member props.constructor =
        props.dismissible <- true
        props.showCloseButton <- true
        let showCloseButton () = props.showCloseButton && props.dismissible
        DialogPortal() {
            DialogOverlay()
            Dialog.Content(
                class' = Lib.cn [|
                    // shadcn impl
                    "bg-background data-[state=open]:animate-in \
                    data-[closed]:animate-out data-[closed]:fade-out-0 \
                    data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 \
                    data-[expanded]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid \
                    w-full max-w-[calc(100%-2rem)] translate-x-[-50%] \
                    translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg \
                    duration-200 sm:max-w-lg"
                    
                    // solid-ui impl
                    // "fixed left-1/2 top-1/2 z-50 grid max-h-screen
                    // w-full max-w-lg -translate-x-1/2 -translate-y-1/2
                    // gap-4 overflow-y-auto border bg-background p-6 shadow-lg
                    // duration-200 data-[expanded]:animate-in
                    // data-[closed]:animate-out data-[closed]:fade-out-0
                    // data-[expanded]:fade-in-0 data-[closed]:zoom-out-95
                    // data-[expanded]:zoom-in-95 data-[closed]:slide-out-to-left-1/2
                    // data-[closed]:slide-out-to-top-[48%]
                    // data-[expanded]:slide-in-from-left-1/2
                    // data-[expanded]:slide-in-from-top-[48%] sm:rounded-lg"
                    props.class'
                |]).dataSlot("dialog-content")
                .spread(props)
                {
                    props.children
                    Show(when' = showCloseButton()) {
                        Dialog.CloseButton(class' =
                            "ring-offset-background focus:ring-ring \
                            data-[expanded]:bg-accent \
                            data-[expanded]:text-muted-foreground absolute top-4 \
                            right-4 rounded-xs opacity-70 transition-opacity \
                            hover:opacity-100 focus:ring-2 focus:ring-offset-2 \
                            focus:outline-hidden disabled:pointer-events-none \
                            [&_svg]:pointer-events-none [&_svg]:shrink-0 \
                            [&_svg:not([class*='size-'])]:size-4"
                        ).dataSlot("dialog-close")
                            { Lucide.Lucide.X(class' = "size-4"); SrSpan() {"Close"} }
                    }
                }
        }

[<Erase>]
type DialogX() =
    inherit Dialog.CloseButton()
    [<SolidTypeComponent>]
    member props.__ =
        Dialog.CloseButton(class' = Lib.cn [|
            "ring-offset-background focus:ring-ring \
            data-[expanded]:bg-accent \
            data-[expanded]:text-muted-foreground absolute top-4 \
            right-4 rounded-xs opacity-70 transition-opacity \
            hover:opacity-100 focus:ring-2 focus:ring-offset-2 \
            focus:outline-hidden disabled:pointer-events-none \
            [&_svg]:pointer-events-none [&_svg]:shrink-0 \
            [&_svg:not([class*='size-'])]:size-4"
            props.class'
        |]) .dataSlot("dialog-close-button")
            .spread props
            { Lucide.Lucide.X(class' = "size-4"); SrSpan() {"Close"} }
        
[<Erase>]
type DialogHeader() =
    inherit div()
    [<SolidTypeComponent>]
    member props.constructor =
        div(class'= Lib.cn [|
            "flex flex-col gap-2 text-center sm:text-left"
            props.class'
        |]).dataSlot("dialog-header").spread(props)
    
[<Erase>]
type DialogFooter() =
    inherit div()
    [<SolidTypeComponent>]
    member props.constructor =
        div(class'= Lib.cn [|
            "flex flex-col-reverse sm:flex-row sm:justify-end gap-2"
            props.class'
        |]).dataSlot("dialog-footer").spread(props)

[<Erase>]
type DialogTitle() =
    inherit Dialog.Title()
    [<SolidTypeComponent>]
    member props.constructor =
        Dialog.Title(class'= Lib.cn [|
            "text-lg font-semibold leading-none"
            props.class'
        |]).dataSlot("dialog-title").spread(props)

[<Erase>]
type DialogDescription() =
    inherit Dialog.Description()
    [<SolidTypeComponent>]
    member props.constructor =
        Dialog.Description(class'= Lib.cn [| "text-sm text-muted-foreground"; props.class' |])
            .dataSlot("dialog-description")
            .spread(props)


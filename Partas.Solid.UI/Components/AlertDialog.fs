namespace Partas.Solid.UI

open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.Lucide
open Fable.Core



[<Erase>]
type AlertDialog() =
    inherit Kobalte.AlertDialog()
    [<SolidTypeComponent>]
    member props.constructor =
        props.modal <- true
        Kobalte.AlertDialog()
            .dataSlot("alert-dialog")
            .spread props
[<Erase>]
type AlertDialogTrigger() =
    inherit AlertDialog.Trigger()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.AlertDialog.Trigger()
            .dataSlot("alert-dialog-trigger")
            .spread props

[<Erase>]
type AlertDialogPortal() =
    inherit AlertDialog.Portal()
    [<SolidTypeComponent>]
    member props.constructor =
        AlertDialog.Portal()
            .dataSlot("alert-dialog-portal")
            .spread props

[<Erase>]
type AlertDialogOverlay() =
    inherit AlertDialog.Overlay()
    [<SolidTypeComponent>]
    member props.constructor =
        AlertDialog.Overlay(
            class' = Lib.cn [| "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[expanded]:animate-in
                               data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0"
                               props.class' |]
        )   .dataSlot("alert-dialog-overlay")
            .spread props

[<Erase>]
type AlertDialogX() =
    inherit AlertDialog.CloseButton()
    [<SolidTypeComponent>]
    member props.__ =
        AlertDialog.CloseButton(class' = "absolute right-4 top-4 rounded-sm opacity-70
                                ring-offset-background transition-opacity hover:opacity-100 focus:outline-none
                                focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none
                                data-[expanded]:bg-accent data-[expanded]:text-muted-foreground")
            { Lucide.X(class' = "size-4", strokeWidth = 2)
              span(class' = "sr-only") { "Close" } }
        
[<Erase>]
type AlertDialogContent() =
    inherit AlertDialog.Content()
    [<SolidTypeComponent>]
    member props.constructor =
        props.onInteractOutside <- _.preventDefault()
        props.onEscapeKeyDown <- _.preventDefault()
        AlertDialogPortal() {
            AlertDialogOverlay() {
                Kobalte.AlertDialog.Content(class' = Lib.cn [|
                    "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2
                    gap-4 border bg-background p-6 shadow-lg duration-200 data-[expanded]:animate-in
                    data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95
                    data-[expanded]:zoom-in-95 data-[closed]:slide-out-to-left-1/2 data-[closed]:slide-out-to-top-[48%]
                    data-[expanded]:slide-in-from-left-1/2 data-[expanded]:slide-in-from-top-[48%] sm:rounded-lg md:w-full"
                    props.class'
                |]) .dataSlot("alert-dialog-content")
                    .spread(props) { props.children }
            }
        }
[<Erase>]
type AlertDialogTitle() =
    inherit AlertDialog.Title()
    [<SolidTypeComponent>]
    member props.constructor =
        AlertDialog.Title(class' = Lib.cn [| "text-lg font-semibold"; props.class' |])
            .dataSlot("alert-dialog-title")
            .spread props
[<Erase>]
type AlertDialogDescription() =
    inherit AlertDialog.Description()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.AlertDialog.Description(class' = Lib.cn [| "text-sm text-muted-foreground"; props.class' |])
            .dataSlot("alert-dialog-description")
            .spread props

[<Erase>]
type AlertDialogHeader() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "flex flex-col gap-2 text-center sm:text-left"
            props.class'
        |]).dataSlot("alert-dialog-header").spread props

[<Erase>]
type AlertDialogFooter() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"
            props.class'
        |]) .dataSlot("alert-dialog-footer")
            .spread props

[<Erase>]
type AlertDialogCancel() =
    inherit AlertDialog.CloseButton()
    [<SolidTypeComponent>]
    member props.__ =
        AlertDialog.CloseButton(class' = Lib.cn [|
            Button.variants(variant = Button.Variant.Outline)
            props.class'
        |]).dataSlot("alert-dialog-close").spread props
[<Erase>]
type AlertDialogAction() =
    inherit Partas.Solid.UI.Button()
    [<SolidTypeComponent>]
    member props.__ =
        Partas.Solid.UI.Button()
            .dataSlot("alert-dialog-action")
            .spread props

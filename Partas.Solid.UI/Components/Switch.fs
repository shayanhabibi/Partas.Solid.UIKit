namespace Partas.Solid.UI

open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core

[<Erase>]
type Switch()=
    inherit Kobalte.Switch()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.Switch()
            .dataSlot("switch")
            .spread props
        
[<Erase>]
type SwitchDescription() =
    inherit Switch.Description()
    [<SolidTypeComponent>]
    member props.constructor =
        Switch.Description()
            .dataSlot("switch-description")
            .spread props
        
[<Erase>]
type SwitchErrorMessage() =
    inherit Switch.ErrorMessage()
    [<SolidTypeComponent>]
    member props.constructor =
        Switch.ErrorMessage()
            .dataSlot("switch-error-message")
            .spread props
        
[<Erase>]
type SwitchControl()=
    inherit Switch.Control()
    [<SolidTypeComponent>]
    member props.constructor =
        Fragment() {
            Switch.Input( class' = Lib.cn [|
                    "[&:focus-visible+div]:rounded-full \
                    [&:focus-visible+div]:ring-[3px] \
                    [&:focus-visible+div]:border-ring \
                    [&:focus-visible+div]:ring-ring/50 \
                    [&:focus-visible+div]:border \
                    [&:focus-visible+div]:transition-[color,box-shadow] \
                    [&:focus-visible+div]:border-input"
                    props.class' |] )
                .dataSlot("switch-input")
            Switch.Control(class' = Lib.cn [|
                "peer data-[checked]:bg-primary not-data-[checked]:bg-input \
                focus-visible:border-ring focus-visible:ring-ring/50 \
                dark:not-data-[checked]:bg-input/80 inline-flex h-[1.10rem] \
                w-8 shrink-0 items-center rounded-full border border-transparent \
                shadow-xs transition-all outline-none focus-visible:ring-[3px] \
                data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
                props.class'
            |]) .dataSlot("switch-control")
                .spread(props) { props.children }
        }

[<Erase>]
type SwitchThumb() =
    inherit Switch.Thumb()
    [<SolidTypeComponent>]
    member props.constructor =
        Switch.Thumb(class' = Lib.cn [|
            "bg-background dark:not([data-[checked]]):bg-foreground \
            dark:data-[checked]:bg-primary-foreground pointer-events-none block size-4 \
            rounded-full ring-0 transition-transform \
            data-[checked]:translate-x-[calc(100%-2px)] not-data-[checked]:translate-x-0"
            props.class'
        |]) .dataSlot("switch-thumb")
            .spread props

[<Erase>]
type SwitchLabel() =
    inherit Switch.Label()
    [<SolidTypeComponent>]
    member props.constructor =
        Switch.Label(class' = Lib.cn [|
            "text-sm font-medium leading-none
            data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70"
            props.class'
        |]) .dataSlot("switch-label")
            .spread props


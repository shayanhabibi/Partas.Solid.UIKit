namespace Partas.Solid.UI

open Partas.Solid
open Partas.Solid.Corvu
open Fable.Core

[<Erase>]
type OtpField() =
    inherit Corvu.OtpField()
    [<SolidTypeComponent>]
    member props.constructor =
        Corvu.OtpField(class' = Lib.cn [|
            "flex items-center gap-2 disabled:cursor-not-allowed has-[:disabled]:opacity-50"
            props.class'
        |]).spread(props)

[<Erase>]
type OtpFieldInput() =
    inherit OtpField.Input()
    [<SolidTypeComponent>]
    member props.constructor = Corvu.OtpField.Input().spread props
        

[<Erase>]
type OtpFieldGroup() =
    inherit div()
    [<SolidTypeComponent>]
    member props.constructor =
        div(class' = Lib.cn [|
            "flex items-center"
            props.class'
        |]).spread props

[<Erase>]
type OtpFieldSlot() =
    inherit div()
    member val index: int = jsNative with get,set
    [<SolidTypeComponent>]
    member props.constructor =
        let context = OtpField.useContext()
        let character (): string = unbox (context.value()[props.index])
        let showFakeCaret () = context.value().Length = props.index && context.isInserting()
        div(
            class' = Lib.cn [|
                "group relative flex size-10 items-center justify-center
                border-y border-r border-input text-sm first:rounded-l-md transition-all
                first:border-l last:rounded-r-md"
                props.class'
            |]
        ).spread props {
            div(
                class' = Lib.cn [|
                    // "border-ring ring-ring/50 aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
                    "absolute inset-0 z-10 transition-all group-first:rounded-l-md group-last:rounded-r-md"
                    (context.activeSlots() |> Array.contains props.index) &&= "ring-2 ring-ring ring-offset-background"
                |]
            )
            character()
            if showFakeCaret() then
                div(class' = "pointer-events-none absolute inset-0 flex items-center justify-center") {
                    div(class' = "h-4 w-px animate-caret-blink bg-foreground duration-1000")
                }
        }

[<Erase>]
type OtpFieldSeparator() =
    inherit div()
    [<SolidTypeComponent>]
    member props.constructor =
        div().spread(props) {
            Lucide.Lucide.Dot(class'="size-6", strokeWidth = 2)
        }


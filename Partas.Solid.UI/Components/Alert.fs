namespace Partas.Solid.UI

open System
open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core
open Fable.Core.JsInterop

[<Erase>]
module Alert =
    [<RequireQualifiedAccess; StringEnum>]
    type Variant =
        | Default
        | Destructive
        | Success

[<Erase>]
type Alert() =
    inherit Kobalte.Alert()
    static member variants (?variant: Alert.Variant): string =
        let variant = defaultArg variant Alert.Variant.Default
        "relative w-full rounded-lg border px-4 \
        py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] \
        grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 \
        [&>svg]:translate-y-0.5 [&>svg]:text-current"
        + " " +
        match variant with
        | Alert.Variant.Default -> "bg-card text-card-foreground"
        | Alert.Variant.Destructive ->
            "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
        | Alert.Variant.Success -> (*TW*) "border-success-foreground/30 text-success-foreground dark:border-success-foreground [&>svg]:text-current bg-success/20"
    /// <summary>
    /// Style variant of the alert.
    /// </summary>
    /// <defaultValue>Alert.Variant.Default</defaultValue>
    [<Erase>]
    member val variant: Alert.Variant = jsNative with get,set
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.Alert(class' = Lib.cn [|
            Alert.variants(props.variant)
            props.class'
        |]) .dataSlot("alert")
            .spread props

[<Erase>]
type AlertTitle() =
    inherit div()
    [<SolidTypeComponent>]
    member props.constructor =
        div(class' = Lib.cn [|
            "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight"
            props.class'
        |]) .dataSlot("alert-title")
            .spread props

[<Erase>]
type AlertDescription() =
    inherit div()
    [<SolidTypeComponent>]
    member props.constructor =
        div(class' = Lib.cn [|
            "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm \
            [&_p]:leading-relaxed"
            props.class'
        |]) .dataSlot("alert-description")
            .spread props

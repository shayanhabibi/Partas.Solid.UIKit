namespace Partas.Solid.UI
open Partas.Solid
open Fable.Core
open Fable.Core.JS
open Fable.Core.JsInterop

[<Erase>]
module Status =
    [<StringEnum>]
    type Kind =
        | Online
        | Offline
        | Maintenance
        | Degraded
        
[<Erase>]
type Status() =
    inherit Badge()
    [<Erase>]
    member val kind: Status.Kind = unbox () with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.variant <- Badge.Variant.Secondary
        Badge(
            class' = Lib.cn [|
                "flex items-center gap-2 group"
                !!props.kind
                props.class'
            |]
            ).spread props

[<Erase>]
type StatusIndicator() =
    inherit span()
    [<SolidTypeComponent>]
    member props.__ =
        span(class' = "relative flex h-2 w-2").spread props {
            span(class' = Lib.cn [|
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                "group-[.online]:bg-emerald-500"
                "group-[.offline]:bg-red-500"
                "group-[.maintenance]:bg-blue-500"
                "group-[.degraded]:bg-amber-500"
            |])
            span(class' = Lib.cn [|
                "relative inline-flex h-full w-full rounded-full"
                "group-[.online]:bg-emerald-500"
                "group-[.offline]:bg-red-500"
                "group-[.maintenance]:bg-blue-500"
                "group-[.degraded]:bg-amber-500"
            |])
        }

[<Erase>]
type StatusLabel() =
    inherit span()
    [<SolidTypeComponent>]
    member props.__ =
        let inline makeSpan className (label: string) =
            span(class' = "hidden group-[." + className + "]:block") {
                label
            }
        span(class' = Lib.cn [|
            "text-muted-foreground"
            props.class'
        |]).spread props {
            props.children ??= Fragment() {
                makeSpan "online" "Online"
                makeSpan "offline" "Offline"
                makeSpan "maintenance" "Maintenance"
                makeSpan "degraded" "Degraded"
            }
        }

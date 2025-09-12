namespace Partas.Solid.UI

open Partas.Solid
open Fable.Core

[<Erase>]
module Badge =
    [<RequireQualifiedAccess; StringEnum>]
    type Variant =
        | Default
        | Secondary
        | Outline
        | Success
        | Warning
        | Error
        
open Badge

[<Erase>]
type Badge() =
    inherit div()
    static member variants(?variant: Badge.Variant): string =
        let variant = defaultArg variant Badge.Variant.Default
        //tw
        "inline-flex items-center rounded-md border px-2.5 py-0.5
        text-xs font-semibold transition-colors focus:outline-none
        focus:ring-2 focus:ring-ring focus:ring-offset-2 " +
        match variant with
        | Variant.Default -> "border-transparent bg-primary text-primary-foreground"
        | Variant.Secondary -> "border-transparent bg-secondary text-secondary-foreground"
        | Variant.Outline -> "text-foreground"
        | Variant.Success -> "border-success-foreground bg-success text-success-foreground"
        | Variant.Warning -> "border-warning-foreground bg-warning text-warning-foreground"
        | Variant.Error -> "border-error-foreground bg-error text-error-foreground"
    /// <summary>
    /// Style the badge.
    /// </summary>
    /// <defaultValue>default</defaultValue>
    [<Erase>]
    member val variant: Variant = unbox null with get, set
    /// <defaultValue>false</defaultValue>
    [<Erase>]
    member val round: bool = unbox null with get, set

    [<SolidTypeComponent>]
    member props.__ =
        div(
            class' =
                Lib.cn
                    [| Badge.variants(props.variant)
                       if props.round then "rounded-full" else ""
                       props.class' |]
        )
            .spread
            props

[<Erase>]
module BadgeDelta =
    [<RequireQualifiedAccess>]
    [<StringEnum>]
    type Type =
        | Increase
        | ModerateIncrease
        | Unchanged
        | ModerateDecrease
        | Decrease

open BadgeDelta

[<Erase>]
type BadgeDelta() =
    inherit Badge()
    [<System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)>]
    static member private variants(?variant: BadgeDelta.Type): string =
        let variant = defaultArg variant Type.Unchanged
        match variant with
        | Type.ModerateIncrease
        | Type.Increase -> "bg-success text-success-foreground hover:bg-success"
        | Type.Unchanged -> "bg-warning text-warning-foreground hover:bg-warning"
        | Type.ModerateDecrease
        | Type.Decrease -> "bg-error text-error-foreground hover:bg-error"
        
    /// <summary>
    /// A variant of the badge which also introduces
    /// 'arrows' or 'deltas'
    /// </summary>
    /// <defaultValue>unchanged</defaultValue>
    [<Erase>]
    member val deltaType: BadgeDelta.Type = unbox null with get,set
    [<SolidTypeComponent>]
    member props.__ =
        let typeIcon iconClass: HtmlElement =
            match props.deltaType with
            | Type.Increase -> Lucide.Lucide.ArrowUp(class'=iconClass)
            | Type.ModerateIncrease -> Lucide.Lucide.ArrowUpRight(class'=iconClass)
            | Type.Unchanged -> Lucide.Lucide.ArrowRight(class'=iconClass)
            | Type.ModerateDecrease -> Lucide.Lucide.ArrowDownRight(class'=iconClass)
            | Type.Decrease -> Lucide.Lucide.ArrowDown(class'=iconClass)
        let icon () = typeIcon "size-4"
        
        Badge( class' = Lib.cn [|
            BadgeDelta.variants(props.deltaType)
            props.class'
        |]).spread(props) {
            span(class' = "flex gap-1") {
                icon ()
                props.children
            }
        }

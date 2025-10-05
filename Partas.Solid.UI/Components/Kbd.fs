namespace Partas.Solid.UI
open Partas.Solid
open Fable.Core
open Fable.Core.JsInterop
open Fable.Core.JS
open Partas.Solid.Aria

[<Erase>]
module Kbd =
    [<StringEnum>]
    type Variant =
        | Borderless
        | Default

[<Erase>]
type DefaultKbdSeparator() =
    inherit span()
    [<SolidTypeComponent>]
    member props.__ =
        props.children <- !!"+"
        span(class' = Lib.cn [|
            "text-muted-foreground/50"
            props.class'
        |]) .dataSlot("kbd-separator")
            .spread props
[<Erase>]
type Kbd() =
    inherit span()
    [<Erase>]
    member val separator: HtmlElement = undefined with get,set
    [<Erase>]
    member val ariaLabel: string = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.separator <- DefaultKbdSeparator()
        let resolvedChildren = children(fun () -> props.children)
        let mutable childrenCount = fun _ -> resolvedChildren() |> JS.Constructors.Array.from |> _.Length
        let mutable childrenArray: unit -> HtmlElement array = fun _ -> resolvedChildren() |> JS.Constructors.Array.from
        let hasChildren = fun _ -> childrenCount() <> 0
        span(class' = Lib.cn [|
            "inline-flex select-none items-center gap-1 \
            rounded border bg-muted px-1.5 align-middle \
            font-medium font-mono text-[10px] text-muted-foreground \
            leading-loose \
            [&_svg:not([class*='size-'])]:size-3 \
            [[data-slot=tooltip-content]_&]:bg-background/20 \
            [[data-slot=tooltip-content]_&]:text-background \
            [[data-slot=tooltip-content]_&]:border-none \
            dark:[[data-slot=tooltip-content]_&]:bg-background/10"
            props.class'
        |]) .dataSlot("kbd")
            .spread props {
            if hasChildren() then
                For(each = childrenArray()) { yield fun child idx -> Fragment() {
                        child
                        if idx() < childrenCount() - 1 then
                            props.separator
                    }
                }
        }
            
        

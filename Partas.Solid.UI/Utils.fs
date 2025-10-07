[<AutoOpen>]
module Partas.Solid.UI.Utils

open System.Runtime.CompilerServices
open Partas.Solid
open Fable.Core
open Fable.Core.JsInterop
open Partas.AnimeJs
open System

type [<Erase>] Lib =
    [<ImportMember("tailwind-merge")>]
    static member twMerge(classes: string): string = jsNative
    [<ImportMember("clsx")>]
    static member clsx(classes: obj): string = jsNative
    static member cn(classes: string array): string = classes |> Lib.clsx |> Lib.twMerge
    static member inline createChildrenResolver(descendants: #HtmlElement): Accessor<#HtmlElement> * Accessor<bool> =
        let resolvedChildren = children(fun () -> descendants)
        let hasChildren =
            fun () ->
                resolvedChildren
                |> JS.Constructors.Array.from
                |> _.Length
                |> (<>) 0
        resolvedChildren, hasChildren


[<AutoOpen; Erase>]
module Extensions =
    type System.Char with
        static member empty = "\u00A0"
    
    [<Emit("$0 && $1")>]
    let (&&=) (conditional: 'T) (output: 'M): 'M = jsNative
    let inline (>=>) (target: 'a) (application: 'a -> unit): 'a = (target |> application); target
    let inline toHtmlElement (func: string -> JSX.Element) (value: string): HtmlElement =
        unbox(func value)
    let inline toElement (element: JSX.Element): HtmlElement = unbox element
[<Erase>]
type Extensions =
    /// <summary>
    /// An extension that acts as a shortcut to calling the <c>.data</c> extension
    /// method with the key <c>"slot"</c>.
    /// <example><code>
    /// div().dataSlot("container")
    ///  // Compiles:
    /// &lt;div data-slot="container" />
    /// </code></example>
    /// </summary>
    /// <param name="this">The tag to add the attribute to.</param>
    /// <param name="slotName">The slot name.</param>
    [<Extension>]
    static member inline dataSlot(this: #HtmlTag, slotName: string): #HtmlTag = this.data("slot",slotName)
[<Erase>]
type SrSpan() =
    inherit span()
    [<SolidTypeComponent>]
    member props.__ =
        span(class' = Lib.cn [| "sr-only"; props.class' |]).spread props

type DV = DefaultValueAttribute

type Storybook =
    [<Import("fn", "storybook/test")>]
    static member fn: unit -> unit = jsNative

module Charts =
    [<Erase>]
    type ChartColor = {
        bg: string
        stroke: string
        fill: string
        text: string
    }
    let colors =
        let inline prefixValue prefix input = prefix + "-" + input
        let inline flipPrefixValue input prefix = prefix + "-" + input
        let inline makeColor input =
            let inline prefixColor util = prefixValue input "500" |> prefixValue util
            createObj [
                "bg" ==> prefixColor "bg"
                "stroke" ==> prefixColor "stroke"
                "fill" ==> prefixColor "fill"
                "text" ==> prefixColor "text"
            ] |> unbox<ChartColor>
        [|
            makeColor "blue"
            makeColor "emerald"
            makeColor "violet"
            makeColor "amber"
            makeColor "gray"
            makeColor "cyan"
            makeColor "pink"
            makeColor "lime"
            makeColor "fuchsia"
        |]
    let gray =
        createObj [
            "bg" ==> "bg-gray-500"
            "stroke" ==> "stroke-gray-500"
            "fill" ==> "fill-gray-500"
            "text" ==> "text-gray-500"
        ] |> unbox<ChartColor>
type Lib with
    static member inline createInViewPlayer = onScroll { sync "play reverse" }
    static member inline createUniqueSelector = $"anim{createUniqueId()}" |> fun s -> s, Selector $".{s}"
    static member inline createTextAnimation text (uniqueId: Selector) ([<InlineIfLambda>] animationOptions: unit -> AnimationOptions) =
        let mutable animationInstance: Animation = !!null
        createEffect(fun() ->
            if !!animationInstance then
                animationInstance.revert() |> ignore
            if text |> String.IsNullOrEmpty |> not then
                animationInstance <- animationOptions() { uniqueId }
            onCleanup(fun () -> if !!animationInstance then animationInstance.revert() |> ignore)
        )

[<Erase>]
module Singletons =
    [<Literal>]
    let mobileBreakpoint = 768
open Singletons
open Partas.Solid.Primitives
[<Erase>]
type Singletons =
        static member useIsMobile (fallback: bool) =
            createSingletonRoot(fun _ -> createMediaQuery($"max-width:{mobileBreakpoint - 1}", true))

namespace Partas.Solid.UI
open Partas.Solid
open Partas.Solid.Aria
open Fable.Core
open Fable.Core.JS
open Fable.Core.JsInterop
open System
open Partas.Solid.Experimental
open Partas.Solid.Polymorphism
module private CategoryBar =
    let getMarkerBgColor(marker: float option, values: float[], colors: Charts.ChartColor array) =
        match marker with
        | None -> None
        | Some 0. ->
            values
            |> Array.tryFindIndex((<) 0.)
        | Some value ->
            let mutable prefixSum = 0.
            values
            |> Array.tryFindIndex(fun categoryValue ->
                prefixSum <- prefixSum + categoryValue
                prefixSum >= value
                )
            |> Option.orElse(colors.Length - 1 |> Some)
        |> Option.map (
             fun idx ->
                colors[idx].bg
            )
        |> Option.defaultValue ""
    let getPositionLeft(value: float option, maxValue: float) =
        value
        |> Option.map (fun v -> v / maxValue * 100.)
        |> Option.defaultValue 0
[<Erase>]
type BarLabels() =
    interface HtmlElement
    [<DefaultValue>]
    val mutable values: float array
    [<SolidTypeComponent>]
    member private props.__ =
        props.values <- [||]
        let sumValues = createMemo(fun () -> props.values |> Array.sum)
        let idxArray = createMemo(fun () ->
            let mutable prefixSum = 0.
            let mutable sumConsecutiveHiddenLabels = 0.
            [|
                for widthPercentage in props.values do
                    prefixSum <- prefixSum + widthPercentage
                    let showLabel =
                        (widthPercentage >= 0.1 * sumValues() || sumConsecutiveHiddenLabels >= 0.09 * sumValues()) &&
                        sumValues() - prefixSum >= 0.1 * sumValues() &&
                        prefixSum >= 0.1 * sumValues() &&
                        prefixSum < 0.9 * sumValues()
                    if showLabel then
                        sumConsecutiveHiddenLabels <- 0.
                    else
                        sumConsecutiveHiddenLabels <- sumConsecutiveHiddenLabels + widthPercentage
                    let widthPositionLeft = CategoryBar.getPositionLeft(!!widthPercentage, sumValues())
                    {| showLabel = showLabel; widthPositionleft = widthPositionLeft; prefixSum = int prefixSum |}
            |]
            )
        div(class' = Lib.cn [|
            "relative mb-2 flex h-5 w-full text-sm font-medium text-primary"
        |]) {
            div(class' = "absolute bottom-0 left-0 flex items-center") { 0 }
            For(each = props.values) { yield fun _ idx ->
                div(class' = "flex items-center justify-end pr-0.5")
                    .style'([
                        Style.Style.width $"{idxArray().[idx()].widthPositionleft}%%"
                    ]) {
                        Show(when' = idxArray().[idx()].showLabel) {
                            span(class' = "block translate-x-1/2 text-sm tabular-nums") {
                                idxArray().[idx()].prefixSum
                            }
                        }
                    }
            }
            div(class' = "absolute right-0 bottom-0 flex items-center") {
                int <| sumValues()
            }
        }
        
[<Erase>]
type CategoryBar() =
    interface RegularNode
    [<DefaultValue>]
    val mutable values: float array
    [<DefaultValue>]
    val mutable colors: Charts.ChartColor array
    [<DefaultValue>]
    val mutable marker: float
    [<DefaultValue>]
    val mutable tooltip: string
    [<DefaultValue>]
    val mutable showAnimation: bool
    [<DefaultValue>]
    val mutable showLabels: bool
    [<SolidTypeComponent>]
    member props.__ =
        props.values <- [||]
        props.colors <- Charts.colors
        props.showLabels <- true
        props.showAnimation <- false
        props.tooltip <- null
        let markerBgColor = createMemo(fun () ->
            CategoryBar.getMarkerBgColor(!!props.marker, props.values, props.colors)
            )
        let maxValue = createMemo(fun () -> Array.sum props.values)
        let adjustedMarkerValue = createMemo(fun () ->
            let marker = unbox<float option> props.marker
            match marker with
            | None -> None
            | Some value when value < 0. -> Some 0.
            | Some value when value > maxValue() -> Some <| maxValue()
            | markerValue -> markerValue
            )
        let markerPositionLeft = createMemo(fun () -> CategoryBar.getPositionLeft(adjustedMarkerValue(), maxValue()))
        div(ariaLabel = "Category bar", ariaValueNow = !^props.marker).spread props {
            if props.showLabels then BarLabels(values = props.values)
            div(class' = "relative flex h-2 w-full items-center") {
                div(class' = "flex h-full flex-1 items-center gap-0.5 overflow-hidden rounded-full") {
                    For(each = props.values) { yield fun value idx ->
                        let barColor =
                            props.colors
                            |> Array.tryItem(idx())
                            |> Option.defaultValue(Charts.gray)
                        let percentage = (value / maxValue()) * 100.
                        div(class' = Lib.cn [|
                            "h-full"
                            barColor.bg
                            if percentage <= 0. then "hidden"
                        |]).style'([
                            Style.Style.width (!^ $"{percentage}%%")
                        ])
                    }
                }
                Show(when' = !!props.marker) {
                    div(class' = Lib.cn [|
                        "absolute w-2 -translate-x-1/2"
                        props.showAnimation &&= "transform-gpu transition-all duration-300 ease-in-out"
                    |]).style'([
                        Style.Style.left $"{markerPositionLeft()}%%"
                    ]) {
                        Show(when' = (String.IsNullOrEmpty props.tooltip |> not),
                             fallback = div(class' = Lib.cn [|
                                 "mx-auto h-4 w-1 rounded-full ring-2 ring-background"
                                 markerBgColor()
                             |])) {
                            Tooltip() {
                                TooltipTrigger().as'(div()) {
                                    div(ariaHidden = true, class' = Lib.cn [|
                                        "relative mx-auto h-4 w-1 rounded-full ring-2 ring-background"
                                        markerBgColor()
                                    |]) {
                                        div(ariaHidden = true, class' = "absolute size-7 -translate-x-[45%] -translate-y-[15%]")
                                    }
                                }
                                TooltipContent() {
                                    props.tooltip
                                }
                            }
                        }
                    }
                }
            }
        }
    

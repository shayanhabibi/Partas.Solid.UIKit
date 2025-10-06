import{G as r,H as s,T as i,K as u,L as m,O as p}from"./iframe-Ss2HFUgg.js";import{useMDXComponents as l}from"./index--e61kTGT.js";import{C as t,D as d}from"./CategoryBar.stories-JFif9c0P.js";import"./preload-helper-PPVm8Dsz.js";import"./Option-B9lMbA8r.js";import"./Util-jMr-gVD5.js";import"./Array-DTFxpKaG.js";import"./Seq-FpC0yOqC.js";import"./List-DitsdVDI.js";import"./String-DLdTzCOk.js";import"./Utils-Bv7TLaDt.js";import"./index-axew2xP3.js";import"./Tooltip-iw2zYfs8.js";import"./2CTBMVJ4-BJBOPr5i.js";import"./LR7LBJN3-RceSjpmp.js";import"./FLVHQV4A-DhRRNmDB.js";import"./index-DsOqkTmx.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./index-Da4i2tMy.js";import"./combineProps-Dc0BZltT.js";import"./3VFJM5NZ-sgbSJPuq.js";import"./E53DB7BS-B46G7qd5.js";import"./FN6EICGO-DOeDID0N.js";import"./JNCCF6MP-4sxnBYeu.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-Dwv4USTq.js";import"./U42ECMND-BDjyePcW.js";const f=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Partas.Solid.Aria\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
open System\r
open Partas.Solid.Experimental\r
open Partas.Solid.Polymorphism\r
module private CategoryBar =\r
    let getMarkerBgColor(marker: float option, values: float[], colors: Charts.ChartColor array) =\r
        match marker with\r
        | None -> None\r
        | Some 0. ->\r
            values\r
            |> Array.tryFindIndex((<) 0.)\r
        | Some value ->\r
            let mutable prefixSum = 0.\r
            values\r
            |> Array.tryFindIndex(fun categoryValue ->\r
                prefixSum <- prefixSum + categoryValue\r
                prefixSum >= value\r
                )\r
            |> Option.orElse(colors.Length - 1 |> Some)\r
        |> Option.map (\r
             fun idx ->\r
                colors[idx].bg\r
            )\r
        |> Option.defaultValue ""\r
    let getPositionLeft(value: float option, maxValue: float) =\r
        value\r
        |> Option.map (fun v -> v / maxValue * 100.)\r
        |> Option.defaultValue 0\r
[<Erase>]\r
type BarLabels() =\r
    interface HtmlElement\r
    [<DefaultValue>]\r
    val mutable values: float array\r
    [<SolidTypeComponent>]\r
    member private props.__ =\r
        props.values <- [||]\r
        let sumValues = createMemo(fun () -> props.values |> Array.sum)\r
        let idxArray = createMemo(fun () ->\r
            let mutable prefixSum = 0.\r
            let mutable sumConsecutiveHiddenLabels = 0.\r
            [|\r
                for widthPercentage in props.values do\r
                    prefixSum <- prefixSum + widthPercentage\r
                    let showLabel =\r
                        (widthPercentage >= 0.1 * sumValues() || sumConsecutiveHiddenLabels >= 0.09 * sumValues()) &&\r
                        sumValues() - prefixSum >= 0.1 * sumValues() &&\r
                        prefixSum >= 0.1 * sumValues() &&\r
                        prefixSum < 0.9 * sumValues()\r
                    if showLabel then\r
                        sumConsecutiveHiddenLabels <- 0.\r
                    else\r
                        sumConsecutiveHiddenLabels <- sumConsecutiveHiddenLabels + widthPercentage\r
                    let widthPositionLeft = CategoryBar.getPositionLeft(!!widthPercentage, sumValues())\r
                    {| showLabel = showLabel; widthPositionleft = widthPositionLeft; prefixSum = int prefixSum |}\r
            |]\r
            )\r
        div(class' = Lib.cn [|\r
            "relative mb-2 flex h-5 w-full text-sm font-medium text-primary"\r
        |]) {\r
            div(class' = "absolute bottom-0 left-0 flex items-center") { 0 }\r
            For(each = props.values) { yield fun _ idx ->\r
                div(class' = "flex items-center justify-end pr-0.5")\r
                    .style'([\r
                        Style.Style.width $"{idxArray().[idx()].widthPositionleft}%%"\r
                    ]) {\r
                        Show(when' = idxArray().[idx()].showLabel) {\r
                            span(class' = "block translate-x-1/2 text-sm tabular-nums") {\r
                                idxArray().[idx()].prefixSum\r
                            }\r
                        }\r
                    }\r
            }\r
            div(class' = "absolute right-0 bottom-0 flex items-center") {\r
                int <| sumValues()\r
            }\r
        }\r
        \r
[<Erase>]\r
type CategoryBar() =\r
    interface RegularNode\r
    [<DefaultValue>]\r
    val mutable values: float array\r
    [<DefaultValue>]\r
    val mutable colors: Charts.ChartColor array\r
    [<DefaultValue>]\r
    val mutable marker: float\r
    [<DefaultValue>]\r
    val mutable tooltip: string\r
    [<DefaultValue>]\r
    val mutable showAnimation: bool\r
    [<DefaultValue>]\r
    val mutable showLabels: bool\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.values <- [||]\r
        props.colors <- Charts.colors\r
        props.showLabels <- true\r
        props.showAnimation <- false\r
        props.tooltip <- null\r
        let markerBgColor = createMemo(fun () ->\r
            CategoryBar.getMarkerBgColor(!!props.marker, props.values, props.colors)\r
            )\r
        let maxValue = createMemo(fun () -> Array.sum props.values)\r
        let adjustedMarkerValue = createMemo(fun () ->\r
            let marker = unbox<float option> props.marker\r
            match marker with\r
            | None -> None\r
            | Some value when value < 0. -> Some 0.\r
            | Some value when value > maxValue() -> Some <| maxValue()\r
            | markerValue -> markerValue\r
            )\r
        let markerPositionLeft = createMemo(fun () -> CategoryBar.getPositionLeft(adjustedMarkerValue(), maxValue()))\r
        div(ariaLabel = "Category bar", ariaValueNow = !^props.marker).spread props {\r
            if props.showLabels then BarLabels(values = props.values)\r
            div(class' = "relative flex h-2 w-full items-center") {\r
                div(class' = "flex h-full flex-1 items-center gap-0.5 overflow-hidden rounded-full") {\r
                    For(each = props.values) { yield fun value idx ->\r
                        let barColor =\r
                            props.colors\r
                            |> Array.tryItem(idx())\r
                            |> Option.defaultValue(Charts.gray)\r
                        let percentage = (value / maxValue()) * 100.\r
                        div(class' = Lib.cn [|\r
                            "h-full"\r
                            barColor.bg\r
                            if percentage <= 0. then "hidden"\r
                        |]).style'([\r
                            Style.Style.width (!^ $"{percentage}%%")\r
                        ])\r
                    }\r
                }\r
                Show(when' = !!props.marker) {\r
                    div(class' = Lib.cn [|\r
                        "absolute w-2 -translate-x-1/2"\r
                        props.showAnimation &&= "transform-gpu transition-all duration-300 ease-in-out"\r
                    |]).style'([\r
                        Style.Style.left $"{markerPositionLeft()}%%"\r
                    ]) {\r
                        Show(when' = (String.IsNullOrEmpty props.tooltip |> not),\r
                             fallback = div(class' = Lib.cn [|\r
                                 "mx-auto h-4 w-1 rounded-full ring-2 ring-background"\r
                                 markerBgColor()\r
                             |])) {\r
                            Tooltip() {\r
                                TooltipTrigger().as'(div()) {\r
                                    div(ariaHidden = true, class' = Lib.cn [|\r
                                        "relative mx-auto h-4 w-1 rounded-full ring-2 ring-background"\r
                                        markerBgColor()\r
                                    |]) {\r
                                        div(ariaHidden = true, class' = "absolute size-7 -translate-x-[45%] -translate-y-[15%]")\r
                                    }\r
                                }\r
                                TooltipContent() {\r
                                    props.tooltip\r
                                }\r
                            }\r
                        }\r
                    }\r
                }\r
            }\r
        }\r
    \r
`;function o(e){const n={h2:"h2",h3:"h3",...l(),...e.components},{SourceCode:a}=n;return a||c("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(s,{of:t}),`
`,r.jsx(i,{}),`
`,r.jsx(u,{of:d,sourceState:"none",withToolbar:!0}),`
`,r.jsx(m,{}),`
`,r.jsx(a,{code:f}),`
`,r.jsx(n.h2,{id:"components",children:"Components"}),`
`,r.jsx(n.h3,{id:"categorybar",children:"CategoryBar"}),`
`,r.jsx(p,{of:t})]})}function X(e={}){const{wrapper:n}={...l(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(o,{...e})}):o(e)}function c(e,n){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{X as default};

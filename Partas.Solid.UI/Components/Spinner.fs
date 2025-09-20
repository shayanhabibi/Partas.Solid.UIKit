namespace Partas.Solid.UI
open Partas.Solid
open Partas.Solid.Style
open Fable.Core
open Fable.Core.JsInterop
open Fable.Core.JS
open Partas.Solid.Lucide

[<Erase>]
module Spinner =
    [<StringEnum>]
    type Variant =
        | Default
        | Circle
        | PinWheel
        | CircleFilled
        | Ellipsis
        | Ring
        | Bars
        | Infinite
open Spinner

[<Erase>]
type private Default() =
    interface VoidNode
    [<SolidTypeComponent>]
    member private props.__ =
        Loader(class' = Lib.cn [| "animate-spin"; props.class' |]).spread props
[<Erase>]
type private Circle() =
    interface VoidNode
    [<SolidTypeComponent>]
    member private props.__ =
        LoaderCircle(class' = Lib.cn [| "animate-spin"; props.class' |]).spread props

[<Erase>]
type private Pinwheel() =
    interface VoidNode
    [<SolidTypeComponent>]
    member private props.__ =
        LoaderPinwheel(class' = Lib.cn [| "animate-spin"; props.class' |]).spread props

[<Erase>]
type private CircleFilled() =
    interface VoidNode
    [<DV>] val mutable size: int
    [<SolidTypeComponent>]
    member private props.__ =
        props.size <- 24
        div(class' = "relative").style'([
            Style.width $"{props.size}px"
            Style.height $"{props.size}px"
        ]) {
            div(class' = "absolute inset-0 rotate-180") {
                LoaderCircle(
                size = props.size,
                class' = Lib.cn [|
                    "animate-spin"
                    props.class'
                    "text-foreground opacity-20"
                |]).spread props
            }
            LoaderCircle(class' = Lib.cn [|
                "relative animate-spin"
                props.class'
            |], size = props.size)
        }

[<Erase>]
type private Ellipsis() =
    interface VoidNode
    [<DV>] val mutable size: int
    [<SolidTypeComponent>]
    member private props.__ =
        props.size <- 24
        Svg.svg(
            height = !!props.size,
            viewBox = "0 0 24 24",
            width = !!props.size,
            xmlns = "http://www.w3.org/2000/svg"
        ).spread props {
            JSX.jsx """<title>Loading...</title>
      <circle cx="4" cy="12" fill="currentColor" r="2">
        <animate
          attributeName="cy"
          begin="0;ellipsis3.end+0.25s"
          calcMode="spline"
          dur="0.6s"
          id="ellipsis1"
          keySplines=".33,.66,.66,1;.33,0,.66,.33"
          values="12;6;12"
        />
      </circle>
      <circle cx="12" cy="12" fill="currentColor" r="2">
        <animate
          attributeName="cy"
          begin="ellipsis1.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines=".33,.66,.66,1;.33,0,.66,.33"
          values="12;6;12"
        />
      </circle>
      <circle cx="20" cy="12" fill="currentColor" r="2">
        <animate
          attributeName="cy"
          begin="ellipsis1.begin+0.2s"
          calcMode="spline"
          dur="0.6s"
          id="ellipsis3"
          keySplines=".33,.66,.66,1;.33,0,.66,.33"
          values="12;6;12"
        />
      </circle>""" |> toElement
        }

[<Erase>]
type private Ring() =
    interface VoidNode
    [<DV>] val mutable size: int
    [<SolidTypeComponent>]
    member private props.__ =
        props.size <- 24
        Svg.svg(
            height = !!props.size
            ,stroke = "currentColor"
            ,viewBox = "0 0 44 44"
            ,width = !!props.size
            ,xmlns = "http://www.w3.org/2000/svg"
            ).spread props {
            JSX.jsx """<title>Loading...</title>
    <g fill="none" fill-rule="evenodd" stroke-width="2">
      <circle cx="22" cy="22" r="1">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="spline"
          dur="1.8s"
          keySplines="0.165, 0.84, 0.44, 1"
          keyTimes="0; 1"
          repeatCount="indefinite"
          values="1; 20"
        />
        <animate
          attributeName="stroke-opacity"
          begin="0s"
          calcMode="spline"
          dur="1.8s"
          keySplines="0.3, 0.61, 0.355, 1"
          keyTimes="0; 1"
          repeatCount="indefinite"
          values="1; 0"
        />
      </circle>
      <circle cx="22" cy="22" r="1">
        <animate
          attributeName="r"
          begin="-0.9s"
          calcMode="spline"
          dur="1.8s"
          keySplines="0.165, 0.84, 0.44, 1"
          keyTimes="0; 1"
          repeatCount="indefinite"
          values="1; 20"
        />
        <animate
          attributeName="stroke-opacity"
          begin="-0.9s"
          calcMode="spline"
          dur="1.8s"
          keySplines="0.3, 0.61, 0.355, 1"
          keyTimes="0; 1"
          repeatCount="indefinite"
          values="1; 0"
        />
      </circle>
    </g>
""" |> toElement
        }

[<Erase>]
type private Bars() =
    interface VoidNode
    [<DV>] val mutable size: int
    [<SolidTypeComponent>]
    member private props.__ =
        props.size <- 24
        Svg.svg(
            height = !!props.size
            ,viewBox = "0 0 24 24"
            ,width = !!props.size
            ,xmlns = "http://www.w3.org/2000/svg"
        ).spread props {
            JSX.jsx """<title>Loading...</title>
    <style>{`
      .spinner-bar {
        animation: spinner-bars-animation .8s linear infinite;
        animation-delay: -.8s;
      }
      .spinner-bars-2 {
        animation-delay: -.65s;
      }
      .spinner-bars-3 {
        animation-delay: -0.5s;
      }
      @keyframes spinner-bars-animation {
        0% {
          y: 1px;
          height: 22px;
        }
        93.75% {
          y: 5px;
          height: 14px;
          opacity: 0.2;
        }
      }
    `}</style>
    <rect
      class="spinner-bar"
      fill="currentColor"
      height="22"
      width="6"
      x="1"
      y="1"
    />
    <rect
      class="spinner-bar spinner-bars-2"
      fill="currentColor"
      height="22"
      width="6"
      x="9"
      y="1"
    />
    <rect
      class="spinner-bar spinner-bars-3"
      fill="currentColor"
      height="22"
      width="6"
      x="17"
      y="1"
    />
""" |> toElement
        }

[<Erase>]
type private Infinite() =
    interface VoidNode
    [<DV>] val mutable size: int
    [<SolidTypeComponent>]
    member private props.__ =
        props.size <- 24
        Svg.svg(
            height = !!props.size
            ,preserveAspectRatio = "xMidYMid"
            ,viewBox = "0 0 100 100"
            ,width = !!props.size
            ,xmlns = "http://www.w3.org/2000/svg"
        ).spread props {
            JSX.jsx """
    <title>Loading...</title>
    <path
      d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
      fill="none"
      stroke="currentColor"
      stroke-dasharray="205.271142578125 51.317785644531256"
      stroke-linecap="round"
      stroke-width="10"
      style={{
        "transform": "scale(0.8)",
        "transform-origin": "50px 50px",
      }}
    >
      <animate
        attributeName="stroke-dashoffset"
        dur="2s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="0;256.58892822265625"
      />
    </path>
""" |> toElement
        }
[<Erase>]
type Spinner() =
    interface VoidNode
    /// <storybook controlType="inline-radio" />
    [<Erase>]
    member val variant: Variant = unbox () with get,set
    [<Erase>]
    member val absoluteStrokeWidth: int = 0 with get,set
    /// <storybook controlType="color"/>
    [<Erase>]
    member val color: string = null with get,set
    [<Erase>]
    member val size: int = 24 with get,set
    [<Erase>]
    member val strokeWidth: int = 0 with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.variant <- Variant.Default
        // using a match statement here would work, but it would
        // not be reactive (might have worked if it was proxied?)
        Partas.Solid.Bindings.Switch() {
            Match(when' = props.variant.IsDefault) {
                Default().spread props
            }
            Match(when' = props.variant.IsCircle) {
                Circle().spread props
            }
            Match(when' = props.variant.IsPinWheel) {
                Pinwheel().spread props
            }
            Match(when' = props.variant.IsCircleFilled) {
                CircleFilled().spread props
            }
            Match(when' = props.variant.IsEllipsis) {
                Ellipsis().spread props
            }
            Match(when' = props.variant.IsRing) {
                Ring().spread props
            }
            Match(when' = props.variant.IsBars) {
                Bars().spread props
            }
            Match(when' = props.variant.IsInfinite) {
                Infinite().spread props
            }
        }

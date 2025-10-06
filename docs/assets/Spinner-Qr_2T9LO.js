import{G as r,H as o,T as p,K as l,L as c,O as d,Q as m}from"./iframe-BLvaHOrW.js";import{useMDXComponents as a}from"./index-DMt2PYli.js";import{S as i,D as h}from"./Spinner.stories-ClXZeHpJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Spinner-ClmF4B0A.js";import"./Icon-BmtgjGtw.js";import"./Utils-BEjpZvS7.js";import"./index-C2xVdcqa.js";const u=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Partas.Solid.Style\r
open Fable.Core\r
open Fable.Core.JsInterop\r
open Fable.Core.JS\r
open Partas.Solid.Lucide\r
\r
[<Erase>]\r
module Spinner =\r
    [<StringEnum>]\r
    type Variant =\r
        | Default\r
        | Circle\r
        | PinWheel\r
        | CircleFilled\r
        | Ellipsis\r
        | Ring\r
        | Bars\r
        | Infinite\r
open Spinner\r
\r
[<Erase>]\r
type private Default() =\r
    interface VoidNode\r
    [<SolidTypeComponent>]\r
    member private props.__ =\r
        Loader(class' = Lib.cn [| "animate-spin"; props.class' |]).spread props\r
[<Erase>]\r
type private CircleSpinner() =\r
    interface VoidNode\r
    [<SolidTypeComponent>]\r
    member private props.__ =\r
        LoaderCircle(class' = Lib.cn [| "animate-spin"; props.class' |]).spread props\r
\r
[<Erase>]\r
type private Pinwheel() =\r
    interface VoidNode\r
    [<SolidTypeComponent>]\r
    member private props.__ =\r
        LoaderPinwheel(class' = Lib.cn [| "animate-spin"; props.class' |]).spread props\r
\r
[<Erase>]\r
type private CircleFilled() =\r
    interface VoidNode\r
    [<DV>] val mutable size: int\r
    [<SolidTypeComponent>]\r
    member private props.__ =\r
        props.size <- 24\r
        div(class' = "relative").style'([\r
            Style.width $"{props.size}px"\r
            Style.height $"{props.size}px"\r
        ]) {\r
            div(class' = "absolute inset-0 rotate-180") {\r
                LoaderCircle(\r
                size = props.size,\r
                class' = Lib.cn [|\r
                    "animate-spin"\r
                    props.class'\r
                    "text-foreground opacity-20"\r
                |]).spread props\r
            }\r
            LoaderCircle(class' = Lib.cn [|\r
                "relative animate-spin"\r
                props.class'\r
            |], size = props.size)\r
        }\r
\r
[<Erase>]\r
type private Ellipsis() =\r
    interface VoidNode\r
    [<DV>] val mutable size: int\r
    [<SolidTypeComponent>]\r
    member private props.__ =\r
        props.size <- 24\r
        Svg.svg(\r
            height = !!props.size,\r
            viewBox = "0 0 24 24",\r
            width = !!props.size,\r
            xmlns = "http://www.w3.org/2000/svg"\r
        ).spread props {\r
            JSX.jsx """<title>Loading...</title>\r
      <circle cx="4" cy="12" fill="currentColor" r="2">\r
        <animate\r
          attributeName="cy"\r
          begin="0;ellipsis3.end+0.25s"\r
          calcMode="spline"\r
          dur="0.6s"\r
          id="ellipsis1"\r
          keySplines=".33,.66,.66,1;.33,0,.66,.33"\r
          values="12;6;12"\r
        />\r
      </circle>\r
      <circle cx="12" cy="12" fill="currentColor" r="2">\r
        <animate\r
          attributeName="cy"\r
          begin="ellipsis1.begin+0.1s"\r
          calcMode="spline"\r
          dur="0.6s"\r
          keySplines=".33,.66,.66,1;.33,0,.66,.33"\r
          values="12;6;12"\r
        />\r
      </circle>\r
      <circle cx="20" cy="12" fill="currentColor" r="2">\r
        <animate\r
          attributeName="cy"\r
          begin="ellipsis1.begin+0.2s"\r
          calcMode="spline"\r
          dur="0.6s"\r
          id="ellipsis3"\r
          keySplines=".33,.66,.66,1;.33,0,.66,.33"\r
          values="12;6;12"\r
        />\r
      </circle>""" |> toElement\r
        }\r
\r
[<Erase>]\r
type private Ring() =\r
    interface VoidNode\r
    [<DV>] val mutable size: int\r
    [<SolidTypeComponent>]\r
    member private props.__ =\r
        props.size <- 24\r
        Svg.svg(\r
            height = !!props.size\r
            ,stroke = "currentColor"\r
            ,viewBox = "0 0 44 44"\r
            ,width = !!props.size\r
            ,xmlns = "http://www.w3.org/2000/svg"\r
            ).spread props {\r
            JSX.jsx """<title>Loading...</title>\r
    <g fill="none" fill-rule="evenodd" stroke-width="2">\r
      <circle cx="22" cy="22" r="1">\r
        <animate\r
          attributeName="r"\r
          begin="0s"\r
          calcMode="spline"\r
          dur="1.8s"\r
          keySplines="0.165, 0.84, 0.44, 1"\r
          keyTimes="0; 1"\r
          repeatCount="indefinite"\r
          values="1; 20"\r
        />\r
        <animate\r
          attributeName="stroke-opacity"\r
          begin="0s"\r
          calcMode="spline"\r
          dur="1.8s"\r
          keySplines="0.3, 0.61, 0.355, 1"\r
          keyTimes="0; 1"\r
          repeatCount="indefinite"\r
          values="1; 0"\r
        />\r
      </circle>\r
      <circle cx="22" cy="22" r="1">\r
        <animate\r
          attributeName="r"\r
          begin="-0.9s"\r
          calcMode="spline"\r
          dur="1.8s"\r
          keySplines="0.165, 0.84, 0.44, 1"\r
          keyTimes="0; 1"\r
          repeatCount="indefinite"\r
          values="1; 20"\r
        />\r
        <animate\r
          attributeName="stroke-opacity"\r
          begin="-0.9s"\r
          calcMode="spline"\r
          dur="1.8s"\r
          keySplines="0.3, 0.61, 0.355, 1"\r
          keyTimes="0; 1"\r
          repeatCount="indefinite"\r
          values="1; 0"\r
        />\r
      </circle>\r
    </g>\r
""" |> toElement\r
        }\r
\r
[<Erase>]\r
type private Bars() =\r
    interface VoidNode\r
    [<DV>] val mutable size: int\r
    [<SolidTypeComponent>]\r
    member private props.__ =\r
        props.size <- 24\r
        Svg.svg(\r
            height = !!props.size\r
            ,viewBox = "0 0 24 24"\r
            ,width = !!props.size\r
            ,xmlns = "http://www.w3.org/2000/svg"\r
        ).spread props {\r
            JSX.jsx """<title>Loading...</title>\r
    <style>{\`\r
      .spinner-bar {\r
        animation: spinner-bars-animation .8s linear infinite;\r
        animation-delay: -.8s;\r
      }\r
      .spinner-bars-2 {\r
        animation-delay: -.65s;\r
      }\r
      .spinner-bars-3 {\r
        animation-delay: -0.5s;\r
      }\r
      @keyframes spinner-bars-animation {\r
        0% {\r
          y: 1px;\r
          height: 22px;\r
        }\r
        93.75% {\r
          y: 5px;\r
          height: 14px;\r
          opacity: 0.2;\r
        }\r
      }\r
    \`}</style>\r
    <rect\r
      class="spinner-bar"\r
      fill="currentColor"\r
      height="22"\r
      width="6"\r
      x="1"\r
      y="1"\r
    />\r
    <rect\r
      class="spinner-bar spinner-bars-2"\r
      fill="currentColor"\r
      height="22"\r
      width="6"\r
      x="9"\r
      y="1"\r
    />\r
    <rect\r
      class="spinner-bar spinner-bars-3"\r
      fill="currentColor"\r
      height="22"\r
      width="6"\r
      x="17"\r
      y="1"\r
    />\r
""" |> toElement\r
        }\r
\r
[<Erase>]\r
type private Infinite() =\r
    interface VoidNode\r
    [<DV>] val mutable size: int\r
    [<SolidTypeComponent>]\r
    member private props.__ =\r
        props.size <- 24\r
        Svg.svg(\r
            height = !!props.size\r
            ,preserveAspectRatio = "xMidYMid"\r
            ,viewBox = "0 0 100 100"\r
            ,width = !!props.size\r
            ,xmlns = "http://www.w3.org/2000/svg"\r
        ).spread props {\r
            JSX.jsx """\r
    <title>Loading...</title>\r
    <path\r
      d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"\r
      fill="none"\r
      stroke="currentColor"\r
      stroke-dasharray="205.271142578125 51.317785644531256"\r
      stroke-linecap="round"\r
      stroke-width="10"\r
      style={{\r
        "transform": "scale(0.8)",\r
        "transform-origin": "50px 50px",\r
      }}\r
    >\r
      <animate\r
        attributeName="stroke-dashoffset"\r
        dur="2s"\r
        keyTimes="0;1"\r
        repeatCount="indefinite"\r
        values="0;256.58892822265625"\r
      />\r
    </path>\r
""" |> toElement\r
        }\r
[<Erase>]\r
type Spinner() =\r
    interface VoidNode\r
    /// <storybook controlType="inline-radio" />\r
    [<Erase>]\r
    member val variant: Variant = unbox () with get,set\r
    [<Erase>]\r
    member val absoluteStrokeWidth: int = 0 with get,set\r
    /// <storybook controlType="color"/>\r
    [<Erase>]\r
    member val color: string = null with get,set\r
    [<Erase>]\r
    member val size: int = 24 with get,set\r
    [<Erase>]\r
    member val strokeWidth: int = 0 with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.variant <- Variant.Circle\r
        // using a match statement here would work, but it would\r
        // not be reactive (might have worked if it was proxied?)\r
        Partas.Solid.Bindings.Switch() {\r
            Match(when' = props.variant.IsDefault) {\r
                Default().dataSlot("spinner").spread props\r
            }\r
            Match(when' = props.variant.IsCircle) {\r
                CircleSpinner().dataSlot("spinner").spread props\r
            }\r
            Match(when' = props.variant.IsPinWheel) {\r
                Pinwheel().dataSlot("spinner").spread props\r
            }\r
            Match(when' = props.variant.IsCircleFilled) {\r
                CircleFilled().dataSlot("spinner").spread props\r
            }\r
            Match(when' = props.variant.IsEllipsis) {\r
                Ellipsis().dataSlot("spinner").spread props\r
            }\r
            Match(when' = props.variant.IsRing) {\r
                Ring().dataSlot("spinner").spread props\r
            }\r
            Match(when' = props.variant.IsBars) {\r
                Bars().dataSlot("spinner").spread props\r
            }\r
            Match(when' = props.variant.IsInfinite) {\r
                Infinite().dataSlot("spinner").spread props\r
            }\r
        }\r
`;function t(n){const e={h2:"h2",h3:"h3",...a(),...n.components},{SourceCode:s}=e;return s||v("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(o,{of:i}),`
`,r.jsx(p,{}),`
`,r.jsx(l,{of:h,layout:"centered",sourceState:"none",withToolbar:!0}),`
`,r.jsx(c,{}),`
`,r.jsx(s,{code:u}),`
`,r.jsx(e.h2,{id:"components",children:"Components"}),`
`,r.jsx(e.h3,{id:"spinner",children:"Spinner"}),`
`,r.jsx(d,{of:i}),`
`,r.jsx(e.h2,{id:"stories",children:"Stories"}),`
`,r.jsx(m,{of:i,includePrimary:!1})]})}function k(n={}){const{wrapper:e}={...a(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(t,{...n})}):t(n)}function v(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{k as default};

import{H as n}from"./iframe-DHSEN8D7.js";import{useMDXComponents as a}from"./index-e4aCb-2o.js";import"./preload-helper-PPVm8Dsz.js";const s=`\uFEFF[<AutoOpen>]\r
module Partas.Solid.UI.Utils\r
\r
open System.Runtime.CompilerServices\r
open Partas.Solid\r
open Fable.Core\r
open Fable.Core.JsInterop\r
open Partas.AnimeJs\r
open System\r
\r
type [<Erase>] Lib =\r
    [<ImportMember("tailwind-merge")>]\r
    static member twMerge(classes: string): string = jsNative\r
    [<ImportMember("clsx")>]\r
    static member clsx(classes: obj): string = jsNative\r
    static member cn(classes: string array): string = classes |> Lib.clsx |> Lib.twMerge\r
    static member inline createChildrenResolver(descendants: #HtmlElement): Accessor<#HtmlElement> * Accessor<bool> =\r
        let resolvedChildren = children(fun () -> descendants)\r
        let hasChildren =\r
            fun () ->\r
                resolvedChildren\r
                |> JS.Constructors.Array.from\r
                |> _.Length\r
                |> (<>) 0\r
        resolvedChildren, hasChildren\r
\r
\r
[<AutoOpen; Erase>]\r
module Extensions =\r
    type System.Char with\r
        static member empty = "\\u00A0"\r
    \r
    [<Emit("$0 && $1")>]\r
    let (&&=) (conditional: 'T) (output: 'M): 'M = jsNative\r
    let inline (>=>) (target: 'a) (application: 'a -> unit): 'a = (target |> application); target\r
    let inline toHtmlElement (func: string -> JSX.Element) (value: string): HtmlElement =\r
        unbox(func value)\r
    let inline toElement (element: JSX.Element): HtmlElement = unbox element\r
[<Erase>]\r
type Extensions =\r
    /// <summary>\r
    /// An extension that acts as a shortcut to calling the <c>.data</c> extension\r
    /// method with the key <c>"slot"</c>.\r
    /// <example><code>\r
    /// div().dataSlot("container")\r
    ///  // Compiles:\r
    /// &lt;div data-slot="container" />\r
    /// </code></example>\r
    /// </summary>\r
    /// <param name="this">The tag to add the attribute to.</param>\r
    /// <param name="slotName">The slot name.</param>\r
    [<Extension>]\r
    static member inline dataSlot(this: #HtmlTag, slotName: string): #HtmlTag = this.data("slot",slotName)\r
[<Erase>]\r
type SrSpan() =\r
    inherit span()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        span(class' = Lib.cn [| "sr-only"; props.class' |]).spread props\r
\r
type DV = DefaultValueAttribute\r
\r
type Storybook =\r
    [<Import("fn", "storybook/test")>]\r
    static member fn: unit -> unit = jsNative\r
\r
module Charts =\r
    [<Erase>]\r
    type ChartColor = {\r
        bg: string\r
        stroke: string\r
        fill: string\r
        text: string\r
    }\r
    let colors =\r
        let inline prefixValue prefix input = prefix + "-" + input\r
        let inline flipPrefixValue input prefix = prefix + "-" + input\r
        let inline makeColor input =\r
            let inline prefixColor util = prefixValue input "500" |> prefixValue util\r
            createObj [\r
                "bg" ==> prefixColor "bg"\r
                "stroke" ==> prefixColor "stroke"\r
                "fill" ==> prefixColor "fill"\r
                "text" ==> prefixColor "text"\r
            ] |> unbox<ChartColor>\r
        [|\r
            makeColor "blue"\r
            makeColor "emerald"\r
            makeColor "violet"\r
            makeColor "amber"\r
            makeColor "gray"\r
            makeColor "cyan"\r
            makeColor "pink"\r
            makeColor "lime"\r
            makeColor "fuchsia"\r
        |]\r
    let gray =\r
        createObj [\r
            "bg" ==> "bg-gray-500"\r
            "stroke" ==> "stroke-gray-500"\r
            "fill" ==> "fill-gray-500"\r
            "text" ==> "text-gray-500"\r
        ] |> unbox<ChartColor>\r
type Lib with\r
    static member inline createInViewPlayer = onScroll { sync "play reverse" }\r
    static member inline createUniqueSelector = $"anim{createUniqueId()}" |> fun s -> s, Selector $".{s}"\r
    static member inline createTextAnimation text (uniqueId: Selector) ([<InlineIfLambda>] animationOptions: unit -> AnimationOptions) =\r
        let mutable animationInstance: Animation = !!null\r
        createEffect(fun() ->\r
            if !!animationInstance then\r
                animationInstance.revert() |> ignore\r
            if text |> String.IsNullOrEmpty |> not then\r
                animationInstance <- animationOptions() { uniqueId }\r
            onCleanup(fun () -> if !!animationInstance then animationInstance.revert() |> ignore)\r
        )\r
\r
[<Erase>]\r
module Singletons =\r
    [<Literal>]\r
    let mobileBreakpoint = 768\r
open Singletons\r
open Partas.Solid.Primitives\r
[<Erase>]\r
type Singletons =\r
        static member useIsMobile (fallback: bool) =\r
            createSingletonRoot(fun _ -> createMediaQuery($"max-width:{mobileBreakpoint - 1}", true))\r
`;function i(r){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...r.components},{SourceCode:t}=e;return t||o("SourceCode"),n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"utils",children:"Utils"}),`
`,n.jsx(t,{code:s}),`
`,n.jsx(e.p,{children:"The utilities are available in the root namespace automatically."}),`
`,n.jsx(e.h2,{id:"cn",children:"cn"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-fsharp",children:`type Lib =\r
    static member cn(classes: string array): string
`})}),`
`,n.jsx(e.p,{children:"Uses clsx and tailwind-merge to resolve classes"}),`
`,n.jsx(e.h2,{id:"createchildrenresolver",children:"createChildrenResolver"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-fsharp",children:`type Lib =\r
    static member createChildrenResolver(\r
        descendants: #HtmlELement\r
    ): Accessor<#HtmlElement> * Accessor<bool>
`})}),`
`,n.jsx(e.p,{children:`A convenience function that combines the children() function with a\r
length check. Essentially, the returned tuples second value will inform you whether\r
you have any elements, so you do not re-evaluate the children resolver unnecessarily.`}),`
`,n.jsx(e.h2,{id:"systemcharempty",children:"System.Char.empty"}),`
`,n.jsx(e.p,{children:`This is a convenience extension for inserting empty spaces that won't be trimmed\r
by JSX compilation`}),`
`,n.jsx(e.h2,{id:"",children:"&&="}),`
`,n.jsx(e.p,{children:`This is a convenience fable emit macro to compile '$0 && $1'. Similar to the\r
Fable included '??='.`}),`
`,n.jsx(e.h2,{id:"-1",children:">=>"}),`
`,n.jsx(e.p,{children:`This is a convenience operator to apply a void function to a piped input, and returning the input.\r
Useful for printing to console etc.`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-fsharp",children:`// example\r
let x = 5\r
x\r
|> (+) 3\r
>=> (printfn "%i") // 8\r
|> (+) 2\r
>=> (printfn "%i") // 10
`})}),`
`,n.jsx(e.h2,{id:"tohtmlelement-and-toelement",children:"toHtmlElement and toElement"}),`
`,n.jsx(e.p,{children:"Convenience wrappers for embedding JSX directly in elements."}),`
`,n.jsx(e.p,{children:"The signature between the two differs, as some IDEs will offer completions on only the latter."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-fsharp",children:`div() {\r
    toHtmlElement JSX.jsx "<span>embedded</span>"\r
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-fsharp",children:`div() {\r
    JSX.jsx "<span>embedded</span>" |> toElement\r
}
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:`Unfortunately, adding an overload for 'JSX.Element' to the Partas.Solid computations causes\r
compilation errors.`}),`
`]}),`
`,n.jsx(e.h2,{id:"srspan",children:"SrSpan"}),`
`,n.jsx(e.p,{children:"Convenience component that is essentially:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-fsharp",children:`span(class' = Lib.cn [| "sr-only"; props.class' |]).spread props
`})}),`
`,n.jsx(e.h2,{id:"dv",children:"DV"}),`
`,n.jsx(e.p,{children:"Convenience type abbreviation for 'DefaultValueAttribute'"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-fsharp",children:`type O() =\r
    [<DefaultValue>]\r
    val mutable someProp: int\r
    [<DV>] val mutable prop: int
`})}),`
`,n.jsx(e.h2,{id:"charts",children:"Charts"}),`
`,n.jsx(e.p,{children:`Used to standardise color stepping in charts such as with the category bars, such that\r
consecutive data points are colored differently ubiquitously.`}),`
`,n.jsx(e.h3,{id:"chartcolor",children:"ChartColor"}),`
`,n.jsx(e.p,{children:"The type of the objects in the 'color' array."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-fsharp",children:`type ChartColor = {\r
    bg: string\r
    stroke: string\r
    fill: string\r
    text: string\r
}
`})}),`
`,n.jsx(e.p,{children:"Contains the different color utilities for tailwind."}),`
`,n.jsx(e.h3,{id:"colors",children:"colors"}),`
`,n.jsx(e.p,{children:"The array of chart colors. See the 'ColorPalette'."})]})}function p(r={}){const{wrapper:e}={...a(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}function o(r,e){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{p as default};

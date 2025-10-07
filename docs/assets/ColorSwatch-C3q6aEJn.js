import{G as r,H as i,T as l,K as p,L as m,O as c}from"./iframe-BHVPMPJn.js";import{useMDXComponents as s}from"./index-CB5oDCs8.js";import{C as a,D as u}from"./ColorSwatch.stories-D2Sn5GhK.js";import"./preload-helper-PPVm8Dsz.js";import"./ColorSwatch-cnD84e1I.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./LR7LBJN3-Ddt3mnWg.js";import"./index-DzweoC3U.js";import"./index-DeTOQkeb.js";import"./FLVHQV4A-C_-euiFy.js";import"./combineProps-C_bsadWN.js";import"./Utils-CAhjhIiz.js";const d=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid.Aria\r
open Browser\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
open Fable.Core.JsInterop\r
open Fable.Core.JS\r
open Browser.Types\r
open Browser.Css\r
open Browser.Dom\r
\r
module ColorSwatch =\r
    [<StringEnum>]\r
    type Size =\r
        | Diamond\r
        | Small\r
        | Default\r
        | Large\r
open ColorSwatch\r
[<Erase>]\r
type ColorSwatch() =\r
    inherit Kobalte.ColorSwatch()\r
    static member variants(?size: Size, ?animatePing: bool) =\r
        let size = defaultArg size Size.Default\r
        let animatePing = defaultArg animatePing false\r
        "align-middle ring-border ring-1 " +\r
        match size with\r
        | Small -> (*TW*) "size-4 rounded-sm"\r
        | Diamond ->\r
            "size-1.5 rounded-xs"\r
        | Default -> "size-6 rounded-md"\r
        | Large -> "h-6 w-12 rounded-md"\r
        +\r
        if animatePing then\r
            " animate-ping"\r
        else ""\r
    /// <summary>\r
    /// Size variant of the component.\r
    /// </summary>\r
    /// <defaultValue>ColorSwatch.Size.Default</defaultValue>\r
    member val size: Size = unbox () with get,set\r
\r
    /// <summary>\r
    /// The string value is parsed and then handed to the value prop.\r
    /// Value prop takes precedence though.\r
    /// </summary>\r
    /// <storybook controlType="color" />\r
    [<Erase>]\r
    member val parseValue: string = null with get,set\r
    /// <summary>\r
    /// The css variable value is retrieved from the DOM and parsed as a string\r
    /// before being handed to the value prop. \`<c>parseValue</c>\` and \`<c>value</c>\`\r
    /// take precedence.\r
    /// </summary>\r
    [<Erase>]\r
    member val parseCssVar: string = null with get,set\r
    /// <summary>\r
    /// Creates a shadow copy of the swatch which pings behind the actual swatch.\r
    /// Primarily to be used in combination with the \`ColorSwatch.Size.Diamond\` size.\r
    /// </summary>\r
    /// <defaultValue>false</defaultValue>\r
    [<Erase>]\r
    member val animatePing: bool = false with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.size <- Size.Default\r
        props.animatePing <- false\r
        let color,setColor = createSignal<Color>(Color.parseColor("#FFFFFF"))\r
        createEffect(fun () ->\r
            if not !!props.value && !!props.parseValue then\r
                Color.parseColor props.parseValue\r
                |> setColor\r
            elif not !!props.value && !!props.parseCssVar then\r
                window.getComputedStyle(document.documentElement).getPropertyValue(props.parseCssVar)\r
                |> Color.parseColor\r
                |> setColor\r
            elif !!props.value then\r
                setColor props.value\r
            else\r
                setColor <| Color.parseColor("#FFFFFF")\r
            )\r
        let mainClasses = createMemo(fun () ->\r
            ColorSwatch.variants(size = props.size))\r
        let activeClass () =\r
            mainClasses() + if props.size = Size.Diamond then " rotate-45" else ""\r
        div(class' = Lib.cn [|\r
            "relative inline-flex m-1 items-center justify-center"\r
            mainClasses()\r
            props.class'\r
        |]) {\r
            Show(when' = props.animatePing) {\r
                Kobalte.ColorSwatch(\r
                    value = color(),\r
                    ariaHidden = true,\r
                    class' = Lib.cn [|\r
                        "absolute opacity-75"\r
                        ColorSwatch.variants(props.size,true)\r
                        if props.size = Size.Diamond then "rotate-45"\r
                        props.class'\r
                    |]\r
                    )\r
            }\r
            Kobalte.ColorSwatch(\r
                value = color(),\r
                colorName = props.colorName,\r
                translations = props.translations,\r
                class' = Lib.cn [| "relative"; activeClass(); props.class' |]\r
                )\r
        }\r
`;function t(e){const n={h2:"h2",h3:"h3",...s(),...e.components},{SourceCode:o}=n;return o||h("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(i,{of:a}),`
`,r.jsx(l,{}),`
`,r.jsx(p,{of:u,layout:"centered",sourceState:"none",withToolbar:!0}),`
`,r.jsx(m,{}),`
`,r.jsx(o,{code:d}),`
`,r.jsx(n.h2,{id:"components",children:"Components"}),`
`,r.jsx(n.h3,{id:"colorswatch",children:"ColorSwatch"}),`
`,r.jsx(c,{of:a})]})}function P(e={}){const{wrapper:n}={...s(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(t,{...e})}):t(e)}function h(e,n){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{P as default};

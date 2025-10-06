import{G as r,H as s,T as i,K as u,L as p,O as c}from"./iframe-Ss2HFUgg.js";import{useMDXComponents as t}from"./index--e61kTGT.js";import{C as l,D as m}from"./ColorPicker.stories-D4RWN9kJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Util-jMr-gVD5.js";import"./ColorSwatch-DdTdEsf2.js";import"./Option-B9lMbA8r.js";import"./LR7LBJN3-RceSjpmp.js";import"./index-axew2xP3.js";import"./index-DsOqkTmx.js";import"./FLVHQV4A-DhRRNmDB.js";import"./combineProps-Dc0BZltT.js";import"./Utils-Bv7TLaDt.js";import"./Card-DUWygaiL.js";import"./65CAYJLE-BVjpHETp.js";import"./SOM3K36D-DE1P6_or.js";import"./FN6EICGO-DOeDID0N.js";import"./NGHEENNE-CpMefcT9.js";import"./ZZYKR3VO-B31dcm3B.js";import"./OYES4GOP-BvTDlBrO.js";import"./index-Da4i2tMy.js";import"./JNCCF6MP-4sxnBYeu.js";import"./5WXHJDCZ-DghNgBBa.js";import"./ColorField-Dvr6lql2.js";import"./MKJEDDFV-Dmc8wFMP.js";const d=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
open Fable.Core.JsInterop\r
open Fable.Core.JS\r
\r
module ColorPicker =\r
    [<StringEnum>]\r
    type Mode =\r
        | Rgb\r
        | Hex\r
        | Hsb\r
        | Hsl\r
    [<JS.Pojo>]\r
    type Slots(\r
        ?container: string\r
        ,?colorAreaContainer: string\r
        ,?colorAreaRoot: string\r
        ,?colorAreaBackground: string\r
        ,?colorAreaThumb: string\r
        )=\r
        [<DefaultValue>] val mutable container: string\r
        [<DefaultValue>] val mutable colorAreaContainer: string\r
        [<DefaultValue>] val mutable colorAreaRoot: string\r
        [<DefaultValue>] val mutable colorAreaBackground: string\r
        [<DefaultValue>] val mutable colorAreaThumb: string\r
    \r
    [<StringEnum>]\r
    type Variant =\r
        | Simple\r
        | WithoutAlpha\r
        | WithAlpha\r
    \r
    // [<StringEnum>]\r
    // type Format =\r
        // | Hex\r
        // | Hsl\r
        // | Hsb\r
        \r
\r
open ColorPicker\r
\r
[<Erase>]\r
type ColorPicker() =\r
    interface VoidNode\r
    /// <summary>\r
    /// The current mode value of the picker.\r
    /// </summary>\r
    /// <defaultValue>ColorPicker.Mode.Hex</defaultValue>\r
    [<Erase>]\r
    member val mode: Mode = Hex with get,set\r
    /// <summary>\r
    /// Fires when the mode is changed. Use to control the value.\r
    /// </summary>\r
    [<Erase>]\r
    member val onModeChange: Mode -> unit = unbox () with get,set\r
    [<Erase>]\r
    member val defaultMode:  Mode = unbox () with get,set\r
    /// <summary>\r
    /// Access to customizing particular slots classes\r
    /// </summary>\r
    [<Erase>]\r
    member val slots: Slots = unbox () with get,set\r
    [<Erase>]\r
    member val value: Color = unbox () with get,set\r
    [<Erase>]\r
    member val onValueChange: Color -> unit = unbox () with get,set\r
    [<Erase>]\r
    member val defaultValue: Color = unbox () with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.mode <- Hex\r
        props.slots <- Slots()\r
        props.defaultValue <- Color.parseColor "#FFFFFF"\r
        props.defaultMode <- Mode.Hex\r
        let _mode,_setMode = createSignal(props.defaultMode)\r
        let _value,_setValue = createSignal(props.defaultValue)\r
        let value () =\r
            if !!props.value then\r
                props.value\r
            else _value()\r
        let setValue () = fun color ->\r
            if !!props.onValueChange &&= !!props.value then\r
                props.onValueChange color\r
            else _setValue color\r
        let mode () =\r
            if !!props.mode then props.mode else _mode()\r
        let setMode () =\r
            if !!props.onModeChange &&= !!props.mode then\r
                props.onModeChange\r
            else _setMode\r
        Card(class' = Lib.cn [|\r
            //tw\r
            "size-full flex flex-col p-4 rounded gap-y-2 min-h-[320px]"\r
            props.slots.container\r
        |]) {\r
            div(class' = Lib.cn [|\r
                "size-full cursor-crosshair mb-4"\r
                props.slots.colorAreaContainer\r
            |]) {\r
                Kobalte.ColorArea(\r
                yChannel = Color.Channel.Brightness\r
                ,xChannel = Color.Channel.Saturation\r
                ,colorSpace = Color.Space.Hsb\r
                ,value = value()\r
                ,onChange = !!setValue()\r
                ,class' = Lib.cn [|\r
                    "relative flex flex-col align-center size-full"\r
                    props.slots.colorAreaRoot\r
                |]) {\r
                    ColorArea.Background(class' = Lib.cn [|\r
                        "relative rounded size-full"\r
                        props.slots.colorAreaBackground\r
                    |]) {\r
                        ColorArea.Thumb(class' = Lib.cn [|\r
                            "block size-4 rounded-full border-2 border-border bg-(--kb-color-current)"\r
                            props.slots.colorAreaThumb\r
                        |]) {\r
                            ColorArea.HiddenInputX()\r
                            ColorArea.HiddenInputY()\r
                        }\r
                    }\r
                }\r
            }\r
            div(class' = "w-full h-6") {\r
                Partas.Solid.UI.ColorSlider(\r
                    channel = Color.Channel.Hue,\r
                    colorSpace = Color.Space.Hsb,\r
                    value = value(),\r
                    onChange = !!setValue()\r
                    ) {\r
                    ColorSliderTrack() {\r
                        ColorSliderThumb()\r
                    }\r
                }\r
            }\r
            div(class' = "w-full h-6 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==')] bg-center bg-repeat-x dark:bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALklEQVR4nGP8+vWrCAMewM3N/QafPBM+SWLAqAGDwQBGQgoIpZOB98KoAVQwAADxzQcSVIRCfQAAAABJRU5ErkJggg==')]") {\r
                ColorSlider(\r
                    class' = "relative flex size-full",\r
                    channel = Color.Channel.Alpha,\r
                    colorSpace = Color.Space.Hsb,\r
                    value = value(),\r
                    onChange = !!setValue()\r
                    ) {\r
                    ColorSlider.Track(class' = "flex place-items-center size-full rounded-full") {\r
                        ColorSlider.Thumb(class' = "block size-4 rounded-full border-2 border-border bg-(--kb-color-current)") {\r
                            ColorSlider.Input()\r
                        }\r
                    }\r
                }\r
            }\r
            div() {\r
                Bindings.Switch() {\r
                    Match(when' = (mode() = Mode.Hex)) {\r
                        ColorFieldSwatch(color = value(), onColorChange = setValue())\r
                    }\r
                }\r
            }\r
        }\r
`;function a(e){const n={h2:"h2",h3:"h3",...t(),...e.components},{SourceCode:o}=n;return o||A("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(s,{of:l}),`
`,r.jsx(i,{}),`
`,r.jsx(u,{of:m,layout:"centered",sourceState:"none",withToolbar:!0}),`
`,r.jsx(p,{}),`
`,r.jsx(o,{code:d}),`
`,r.jsx(n.h2,{id:"components",children:"Components"}),`
`,r.jsx(n.h3,{id:"colorpicker",children:"ColorPicker"}),`
`,r.jsx(c,{of:l})]})}function G(e={}){const{wrapper:n}={...t(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(a,{...e})}):a(e)}function A(e,n){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{G as default};

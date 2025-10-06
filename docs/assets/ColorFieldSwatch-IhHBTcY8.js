import{G as r,H as a,T as i,K as p,L as c,O as d}from"./iframe-BLvaHOrW.js";import{useMDXComponents as s}from"./index-DMt2PYli.js";import{C as t,D as u}from"./ColorFieldSwatch.stories-B9CpX00-.js";import"./preload-helper-PPVm8Dsz.js";import"./ColorField-DoFM0dM5.js";import"./Option-B9lMbA8r.js";import"./Util-jMr-gVD5.js";import"./ColorSwatch-CP8pllv6.js";import"./LR7LBJN3-DXU4Tgxl.js";import"./index-C2xVdcqa.js";import"./index-TpYiyspx.js";import"./FLVHQV4A-ByRBKILc.js";import"./combineProps-TuyxsfEg.js";import"./Utils-BEjpZvS7.js";import"./MKJEDDFV-Dyvjf6SX.js";import"./NGHEENNE-Cx8CCgiw.js";import"./ZZYKR3VO-CUrFF4yS.js";import"./OYES4GOP-DJL3U5Gx.js";import"./index-BbcR3rHk.js";import"./JNCCF6MP-4sxnBYeu.js";import"./FN6EICGO-DozerlcD.js";import"./5WXHJDCZ-DghNgBBa.js";const m=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core.JsInterop\r
open Fable.Core.JS\r
open Fable.Core\r
\r
[<Erase>]\r
module private ColorFieldVariant =\r
    [<RequireQualifiedAccess; StringEnum>]\r
    type T =\r
        | Description\r
        | Error\r
        | Label\r
        static member variants(?variant: T): string =\r
            let variant = defaultArg variant T.Label\r
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed\\\r
            peer-disabled:opacity-70 group-disabled:opacity-70\\\r
            group-disabled:cursor-not-allowed " +\r
            match variant with\r
            | T.Description -> "font-normal text-muted-foreground"\r
            | T.Error -> "text-xs text-destructive"\r
            | T.Label -> "data-[invalid]:text-destructive"\r
open ColorFieldVariant\r
[<Erase>]\r
type ColorField() =\r
    inherit Kobalte.ColorField()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        Kobalte.ColorField(class' = Lib.cn [|\r
            "group flex flex-col gap-1"\r
            props.class'\r
        |]).spread props\r
\r
[<Erase>]\r
type ColorFieldInput() =\r
    inherit ColorField.Input()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        ColorField.Input(class' = Lib.cn [|\r
            "flex h-10 w-full rounded-md border border-input \\\r
            bg-transparent px-3 py-2 text-sm ring-offset-background \\\r
            placeholder:text-muted-foreground focus-visible:outline-none \\\r
            focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 \\\r
            disabled:cursor-not-allowed disabled:opacity-50 \\\r
            data-[invalid]:border-error-foreground data-[invalid]:text-error-foreground"\r
            props.class'\r
        |]).spread props\r
\r
[<Erase>]\r
type ColorFieldLabel() =\r
    inherit ColorField.Label()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        ColorField.Label(class' = Lib.cn [|\r
            T.variants(T.Label)\r
            props.class'\r
        |]).spread props\r
\r
[<Erase>]\r
type ColorFieldDescription() =\r
    inherit ColorField.Description()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        ColorField.Description(class' = Lib.cn [|\r
            T.variants(T.Description)\r
            props.class'\r
        |]).spread props\r
\r
[<Erase>]\r
type ColorFieldErrorMessage() =\r
    inherit ColorField.ErrorMessage()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        ColorField.ErrorMessage(class' = Lib.cn [|\r
            T.variants(T.Error)\r
            props.class'\r
        |]).spread props\r
\r
[<Erase>]\r
module ColorFieldSwatch =\r
    [<JS.Pojo>]\r
    type Slots(\r
        ?root: string,\r
        ?label: string,\r
        ?swatch: string,\r
        ?input: string\r
        ) =\r
        [<DV>] val mutable root: string\r
        [<DV>] val mutable label: string\r
        [<DV>] val mutable swatch: string\r
        [<DV>] val mutable input: string\r
    [<StringEnum; RequireQualifiedAccess>]\r
    type SwatchType =\r
        | Left\r
        | Right\r
        | None\r
\r
open ColorFieldSwatch\r
\r
[<Erase>]\r
type ColorFieldSwatch() =\r
    inherit Kobalte.ColorField()\r
    [<Erase>]\r
    member val slots: ColorFieldSwatch.Slots = unbox () with get,set\r
    [<Erase>]\r
    member val label: string = null with get,set\r
    [<Erase>]\r
    member val swatchType: SwatchType = unbox () with get,set\r
    [<Erase>]\r
    member val color: Color = unbox () with get,set\r
    [<Erase>]\r
    member val onColorChange: Color -> unit = unbox () with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.swatchType <- SwatchType.Left\r
        props.slots <- Slots()\r
        let _value,_setValue = createSignal<string>(undefined)\r
        let value = createMemo(fun () ->\r
            if !!props.value then\r
                props.value\r
            else _value())\r
        let setValue value =\r
            if !!props.onChange\r
            then props.onChange value\r
            else _setValue value\r
        let _color,setColor = createSignal<Color>(undefined)\r
        let onColorChange = createMemo(fun () ->\r
            if !!props.onColorChange then\r
                fun color ->\r
                    //TODO storybook workaround\r
                    batch(fun () ->\r
                        setColor color\r
                        props.onColorChange color\r
                    )\r
            else\r
                setColor\r
            )\r
        let color () =\r
            if !!props.color then props.color else _color()\r
        createEffect(fun () ->\r
            if !!color() && !!value() then\r
                color().toString(Color.ToString.Format.Hexa)\r
                |> setValue\r
            )\r
        createEffect(fun () ->\r
            try\r
                Color.parseColor (value())\r
                |> onColorChange()\r
            with _ -> ()\r
            )\r
        Kobalte.ColorField(\r
            class' = Lib.cn [|\r
                "group flex flex-col gap-1"\r
                props.class'\r
                props.slots.root\r
            |],\r
            onChange = fun value ->\r
                // TODO - this is just to stop storybook disabling the swatch\r
                batch(fun () ->\r
                    _setValue !!value\r
                    setValue !!value\r
                )\r
            ,value = value()\r
        ).spread props {\r
            if !!props.label then\r
                ColorFieldLabel(class' = props.slots.label) {\r
                    props.label\r
                }\r
            div(\r
                class' = Lib.cn [|\r
                    "flex h-10 w-full rounded-md border border-input \\\r
                    bg-transparent px-2 py-2 text-sm ring-offset-background \\\r
                    placeholder:text-muted-foreground has-focus-visible:outline-none \\\r
                    has-focus-visible:ring-2 has-focus-visible:ring-ring has-focus-visible:ring-offset-2 \\\r
                    has-disabled:cursor-not-allowed has-disabled:opacity-50 \\\r
                    has-data-[invalid]:border-error-foreground has-data-[invalid]:text-error-foreground"\r
                    match props.swatchType with\r
                    | SwatchType.Right -> "flex-row-reverse pr-1"\r
                    | SwatchType.Left ->\r
                        if !!color() then "flex-row pl-1"\r
                        else "flex-row"\r
                    | SwatchType.None -> ""\r
                    \r
                    props.slots.input\r
                |]\r
            ) {\r
                if !!color() && props.swatchType <> SwatchType.None then\r
                    Partas.Solid.UI.ColorSwatch(value = color(), class' = Lib.cn [|\r
                        "place-self-center"\r
                        props.slots.root\r
                    |])\r
                ColorField.Input(class' = Lib.cn [|\r
                    "grow size-full outline-none pl-1"\r
                    props.slots.input\r
                |])\r
            }\r
        }\r
    \r
    \r
`;function l(n){const e={h2:"h2",h3:"h3",...s(),...n.components},{SourceCode:o}=e;return o||b("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(a,{of:t}),`
`,r.jsx(i,{}),`
`,r.jsx(p,{of:u,layout:"centered",sourceState:"none",withToolbar:!0}),`
`,r.jsx(c,{}),`
`,r.jsx(o,{code:m}),`
`,r.jsx(e.h2,{id:"components",children:"Components"}),`
`,r.jsx(e.h3,{id:"colorfieldswatch",children:"ColorFieldSwatch"}),`
`,r.jsx(d,{of:t})]})}function O(n={}){const{wrapper:e}={...s(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(l,{...n})}):l(n)}function b(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{O as default};

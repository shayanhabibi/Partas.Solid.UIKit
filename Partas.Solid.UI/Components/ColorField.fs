namespace Partas.Solid.UI
open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core.JsInterop
open Fable.Core.JS
open Fable.Core

[<RequireQualifiedAccess>]
type private T =
    | Description
    | Error
    | Label
    static member variants(?variant: T): string =
        let variant = defaultArg variant T.Label
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed\
        peer-disabled:opacity-70 group-disabled:opacity-70\
        group-disabled:cursor-not-allowed " +
        match variant with
        | T.Description -> "font-normal text-muted-foreground"
        | T.Error -> "text-xs text-destructive"
        | T.Label -> "data-[invalid]:text-destructive"
[<Erase>]
type ColorField() =
    inherit Kobalte.ColorField()
    [<SolidTypeComponent>]
    member props.__ =
        Kobalte.ColorField(class' = Lib.cn [|
            "group flex flex-col gap-1"
            props.class'
        |]).spread props

[<Erase>]
type ColorFieldInput() =
    inherit ColorField.Input()
    [<SolidTypeComponent>]
    member props.__ =
        ColorField.Input(class' = Lib.cn [|
            "flex h-10 w-full rounded-md border border-input \
            bg-transparent px-3 py-2 text-sm ring-offset-background \
            placeholder:text-muted-foreground focus-visible:outline-none \
            focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 \
            disabled:cursor-not-allowed disabled:opacity-50 \
            data-[invalid]:border-error-foreground data-[invalid]:text-error-foreground"
            props.class'
        |]).spread props

[<Erase>]
type ColorFieldLabel() =
    inherit ColorField.Label()
    [<SolidTypeComponent>]
    member props.__ =
        ColorField.Label(class' = Lib.cn [|
            T.variants(T.Label)
            props.class'
        |]).spread props

[<Erase>]
type ColorFieldDescription() =
    inherit ColorField.Description()
    [<SolidTypeComponent>]
    member props.__ =
        ColorField.Description(class' = Lib.cn [|
            T.variants(T.Description)
            props.class'
        |]).spread props

[<Erase>]
type ColorFieldErrorMessage() =
    inherit ColorField.ErrorMessage()
    [<SolidTypeComponent>]
    member props.__ =
        ColorField.ErrorMessage(class' = Lib.cn [|
            T.variants(T.Error)
            props.class'
        |]).spread props

[<Erase>]
module ColorFieldSwatch =
    [<JS.Pojo>]
    type Slots(
        ?root: string,
        ?label: string,
        ?swatch: string,
        ?input: string
        ) =
        [<DV>] val mutable root: string
        [<DV>] val mutable label: string
        [<DV>] val mutable swatch: string
        [<DV>] val mutable input: string
    [<StringEnum; RequireQualifiedAccess>]
    type SwatchType =
        | Left
        | Right
        | None

open ColorFieldSwatch

[<Erase>]
type ColorFieldSwatch() =
    inherit Kobalte.ColorField()
    [<Erase>]
    member val slots: ColorFieldSwatch.Slots = unbox () with get,set
    [<Erase>]
    member val label: string = null with get,set
    [<Erase>]
    member val swatchType: SwatchType = unbox () with get,set
    [<Erase>]
    member val color: Color = unbox () with get,set
    [<Erase>]
    member val onColorChange: Color -> unit = unbox () with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.swatchType <- SwatchType.Left
        props.slots <- Slots()
        let _value,_setValue = createSignal<string>(undefined)
        let value = createMemo(fun () ->
            if !!props.value then
                props.value
            else _value())
        let setValue value =
            if !!props.onChange
            then props.onChange value
            else _setValue value
        let _color,setColor = createSignal<Color>(undefined)
        let onColorChange = createMemo(fun () ->
            if !!props.onColorChange then
                fun color ->
                    //TODO storybook workaround
                    batch(fun () ->
                        setColor color
                        props.onColorChange color
                    )
            else
                setColor
            )
        let color () =
            if !!props.color then props.color else _color()
        createEffect(fun () ->
            if !!color() && !!value() then
                color().toString(Color.ToString.Format.Hexa)
                |> setValue
            )
        createEffect(fun () ->
            try
                Color.parseColor (value())
                |> onColorChange()
            with _ -> ()
            )
        Kobalte.ColorField(
            class' = Lib.cn [|
                "group flex flex-col gap-1"
                props.class'
                props.slots.root
            |],
            onChange = fun value ->
                // TODO - this is just to stop storybook disabling the swatch
                batch(fun () ->
                    _setValue !!value
                    setValue !!value
                )
            ,value = value()
        ).spread props {
            if !!props.label then
                ColorFieldLabel(class' = props.slots.label) {
                    props.label
                }
            div(
                class' = Lib.cn [|
                    "flex h-10 w-full rounded-md border border-input \
                    bg-transparent px-2 py-2 text-sm ring-offset-background \
                    placeholder:text-muted-foreground has-focus-visible:outline-none \
                    has-focus-visible:ring-2 has-focus-visible:ring-ring has-focus-visible:ring-offset-2 \
                    has-disabled:cursor-not-allowed has-disabled:opacity-50 \
                    has-data-[invalid]:border-error-foreground has-data-[invalid]:text-error-foreground"
                    match props.swatchType with
                    | SwatchType.Right -> "flex-row-reverse pr-1"
                    | SwatchType.Left ->
                        if !!color() then "flex-row pl-1"
                        else "flex-row"
                    | SwatchType.None -> ""
                    
                    props.slots.input
                |]
            ) {
                if !!color() && props.swatchType <> SwatchType.None then
                    Partas.Solid.UI.ColorSwatch(value = color(), class' = Lib.cn [|
                        "place-self-center"
                        props.slots.root
                    |])
                ColorField.Input(class' = Lib.cn [|
                    "grow size-full outline-none pl-1"
                    props.slots.input
                |])
            }
        }
    
    

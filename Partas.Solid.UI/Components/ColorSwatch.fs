namespace Partas.Solid.UI

open Partas.Solid.Aria
open Browser
open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core
open Fable.Core.JsInterop
open Fable.Core.JS
open Browser.Types
open Browser.Css
open Browser.Dom

module ColorSwatch =
    [<StringEnum>]
    type Size =
        | Diamond
        | Small
        | Default
        | Large
open ColorSwatch
[<Erase>]
type ColorSwatch() =
    inherit Kobalte.ColorSwatch()
    static member variants(?size: Size, ?animatePing: bool) =
        let size = defaultArg size Size.Default
        let animatePing = defaultArg animatePing false
        "align-middle ring-border ring-1 " +
        match size with
        | Small -> (*TW*) "size-4 rounded-sm"
        | Diamond ->
            "size-1.5 rounded-xs"
        | Default -> "size-6 rounded-md"
        | Large -> "h-6 w-12 rounded-md"
        +
        if animatePing then
            " animate-ping"
        else ""
    /// <summary>
    /// Size variant of the component.
    /// </summary>
    /// <defaultValue>ColorSwatch.Size.Default</defaultValue>
    member val size: Size = unbox () with get,set

    /// <summary>
    /// The string value is parsed and then handed to the value prop.
    /// Value prop takes precedence though.
    /// </summary>
    /// <storybook controlType="color" />
    [<Erase>]
    member val parseValue: string = null with get,set
    /// <summary>
    /// The css variable value is retrieved from the DOM and parsed as a string
    /// before being handed to the value prop. `<c>parseValue</c>` and `<c>value</c>`
    /// take precedence.
    /// </summary>
    [<Erase>]
    member val parseCssVar: string = null with get,set
    /// <summary>
    /// Creates a shadow copy of the swatch which pings behind the actual swatch.
    /// Primarily to be used in combination with the `ColorSwatch.Size.Diamond` size.
    /// </summary>
    /// <defaultValue>false</defaultValue>
    [<Erase>]
    member val animatePing: bool = false with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.size <- Size.Default
        props.animatePing <- false
        let color,setColor = createSignal<Color>(Color.parseColor("#FFFFFF"))
        createEffect(fun () ->
            if not !!props.value && !!props.parseValue then
                Color.parseColor props.parseValue
                |> setColor
            elif not !!props.value && !!props.parseCssVar then
                window.getComputedStyle(document.documentElement).getPropertyValue(props.parseCssVar)
                |> Color.parseColor
                |> setColor
            elif !!props.value then
                setColor props.value
            else
                setColor <| Color.parseColor("#FFFFFF")
            )
        let mainClasses = createMemo(fun () ->
            ColorSwatch.variants(size = props.size))
        let activeClass () =
            mainClasses() + if props.size = Size.Diamond then " rotate-45" else ""
        div(class' = Lib.cn [|
            "relative inline-flex m-1 items-center justify-center"
            mainClasses()
            props.class'
        |]) {
            Show(when' = props.animatePing) {
                Kobalte.ColorSwatch(
                    value = color(),
                    ariaHidden = true,
                    class' = Lib.cn [|
                        "absolute opacity-75"
                        ColorSwatch.variants(props.size,true)
                        if props.size = Size.Diamond then "rotate-45"
                        props.class'
                    |]
                    )
            }
            Kobalte.ColorSwatch(
                value = color(),
                colorName = props.colorName,
                translations = props.translations,
                class' = Lib.cn [| "relative"; activeClass(); props.class' |]
                )
        }

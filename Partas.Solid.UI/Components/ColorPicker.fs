namespace Partas.Solid.UI
open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core
open Fable.Core.JsInterop
open Fable.Core.JS

module ColorPicker =
    [<StringEnum>]
    type Mode =
        | Rgb
        | Hex
        | Hsb
        | Hsl
    [<JS.Pojo>]
    type Slots(
        ?container: string
        ,?colorAreaContainer: string
        ,?colorAreaRoot: string
        ,?colorAreaBackground: string
        ,?colorAreaThumb: string
        )=
        [<DefaultValue>] val mutable container: string
        [<DefaultValue>] val mutable colorAreaContainer: string
        [<DefaultValue>] val mutable colorAreaRoot: string
        [<DefaultValue>] val mutable colorAreaBackground: string
        [<DefaultValue>] val mutable colorAreaThumb: string
    
    [<StringEnum>]
    type Variant =
        | Simple
        | WithoutAlpha
        | WithAlpha
    
    // [<StringEnum>]
    // type Format =
        // | Hex
        // | Hsl
        // | Hsb
        

open ColorPicker

[<Erase>]
type ColorPicker() =
    interface VoidNode
    /// <summary>
    /// The current mode value of the picker.
    /// </summary>
    /// <defaultValue>ColorPicker.Mode.Hex</defaultValue>
    [<Erase>]
    member val mode: Mode = Hex with get,set
    /// <summary>
    /// Fires when the mode is changed. Use to control the value.
    /// </summary>
    [<Erase>]
    member val onModeChange: Mode -> unit = unbox () with get,set
    [<Erase>]
    member val defaultMode:  Mode = unbox () with get,set
    /// <summary>
    /// Access to customizing particular slots classes
    /// </summary>
    [<Erase>]
    member val slots: Slots = unbox () with get,set
    [<Erase>]
    member val value: Color = unbox () with get,set
    [<Erase>]
    member val onValueChange: Color -> unit = unbox () with get,set
    [<Erase>]
    member val defaultValue: Color = unbox () with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.mode <- Hex
        props.slots <- Slots()
        props.defaultValue <- Color.parseColor "#FFFFFF"
        props.defaultMode <- Mode.Hex
        let _mode,_setMode = createSignal(props.defaultMode)
        let _value,_setValue = createSignal(props.defaultValue)
        let value () =
            if !!props.value then
                props.value
            else _value()
        let setValue () = fun color ->
            if !!props.onValueChange &&= !!props.value then
                props.onValueChange color
            else _setValue color
        let mode () =
            if !!props.mode then props.mode else _mode()
        let setMode () =
            if !!props.onModeChange &&= !!props.mode then
                props.onModeChange
            else _setMode
        Card(class' = Lib.cn [|
            //tw
            "size-full flex flex-col p-4 rounded gap-y-2 min-h-[320px]"
            props.slots.container
        |]) {
            div(class' = Lib.cn [|
                "size-full cursor-crosshair mb-4"
                props.slots.colorAreaContainer
            |]) {
                Kobalte.ColorArea(
                yChannel = Color.Channel.Brightness
                ,xChannel = Color.Channel.Saturation
                ,colorSpace = Color.Space.Hsb
                ,value = value()
                ,onChange = !!setValue()
                ,class' = Lib.cn [|
                    "relative flex flex-col align-center size-full"
                    props.slots.colorAreaRoot
                |]) {
                    ColorArea.Background(class' = Lib.cn [|
                        "relative rounded size-full"
                        props.slots.colorAreaBackground
                    |]) {
                        ColorArea.Thumb(class' = Lib.cn [|
                            "block size-4 rounded-full border-2 border-border bg-(--kb-color-current)"
                            props.slots.colorAreaThumb
                        |]) {
                            ColorArea.HiddenInputX()
                            ColorArea.HiddenInputY()
                        }
                    }
                }
            }
            div(class' = "w-full h-6") {
                Partas.Solid.UI.ColorSlider(
                    channel = Color.Channel.Hue,
                    colorSpace = Color.Space.Hsb,
                    value = value(),
                    onChange = !!setValue()
                    ) {
                    ColorSliderTrack() {
                        ColorSliderThumb()
                    }
                }
            }
            div(class' = "w-full h-6 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==')] bg-center bg-repeat-x dark:bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALklEQVR4nGP8+vWrCAMewM3N/QafPBM+SWLAqAGDwQBGQgoIpZOB98KoAVQwAADxzQcSVIRCfQAAAABJRU5ErkJggg==')]") {
                ColorSlider(
                    class' = "relative flex size-full",
                    channel = Color.Channel.Alpha,
                    colorSpace = Color.Space.Hsb,
                    value = value(),
                    onChange = !!setValue()
                    ) {
                    ColorSlider.Track(class' = "flex place-items-center size-full rounded-full") {
                        ColorSlider.Thumb(class' = "block size-4 rounded-full border-2 border-border bg-(--kb-color-current)") {
                            ColorSlider.Input()
                        }
                    }
                }
            }
            div() {
                Bindings.Switch() {
                    Match(when' = (mode() = Mode.Hex)) {
                        ColorFieldSwatch(color = value(), onColorChange = setValue())
                    }
                }
            }
        }

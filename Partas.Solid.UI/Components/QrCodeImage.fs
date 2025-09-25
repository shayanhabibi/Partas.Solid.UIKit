namespace Partas.Solid.UI
open Partas.Solid
open Partas.Solid.ZagJs
open Partas.Solid.ArkUI
open Fable.Core
open Fable.Core.JS
open Fable.Core.JsInterop

[<Erase>]
module QrCodeImage =
    [<Pojo>]
    type Slots(
        ?root: string,
        ?frame: string,
        ?pattern: string
        ) =
        [<DV>] val mutable root: string
        [<DV>] val mutable frame: string
        [<DV>] val mutable pattern: string
    [<StringEnum>]
    type Variant =
        | Default
    [<StringEnum>]
    type Size =
        | Small
        | Default
        | Large

open QrCodeImage

[<Erase>]
type QrCodeImage() =
    inherit QrCode.Root()
    static member variants(?variant: QrCodeImage.Variant, ?size: QrCodeImage.Size) =
        let variant = defaultArg variant QrCodeImage.Variant.Default
        let size = defaultArg size QrCodeImage.Size.Default
        {|
            slots = QrCodeImage.Slots(
                root = "flex items-center justify-center"
                ,frame = Lib.cn [|
                    "relative bg-card border border-border rounded-lg"
                    match size with
                    | Small -> "size-20 p-1"
                    | Default -> "size-32 p-2"
                    | Large -> "size-40 p-3"
                |]
                ,pattern = "fill-primary"
                )
            pixelSize =
                match size with
                | Small -> 2
                | Default -> 3
                | Large -> 4
        |}
    /// <summary>
    /// An object of classes to pass to the various components.
    /// </summary>
    [<Erase>]
    member val slots: QrCodeImage.Slots = undefined with get,set
    /// <summary>
    /// No implementations at the moment.
    /// </summary>
    [<Erase>]
    member val variant: Variant = undefined with get,set
    /// <summary>
    /// The QrCode size.
    /// </summary>
    [<Erase>]
    member val size: Size = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.slots <- createEmpty
        props.variant <- Variant.Default
        props.size <- Size.Default
        let children = children(fun () -> props.children)
        let hasChildren = createMemo(fun () ->
            let value = children()
            !!value ??= undefined
            )
        let variantClasses () = QrCodeImage.variants(props.variant,props.size)
        QrCode.Root(
            class' = Lib.cn [|
                variantClasses().slots.root
                props.slots.root
                props.class'
            |]
            ,pixelSize = float (variantClasses().pixelSize)
            ,encoding =
                if hasChildren() then
                    QrCode.GenerateOptions(ecc = QrCode.H)
                else
                    undefined
                
            ).spread props {
            QrCode.Frame(class' = Lib.cn [|
                variantClasses().slots.frame
                props.slots.frame
            |]) {
                QrCode.Pattern(class' = Lib.cn [|
                    variantClasses().slots.pattern
                    props.slots.pattern
                |])
            }
            if !!children() then
                QrCode.Overlay(class' = Lib.cn [|
                    "absolute inset-0 flex items-center justify-center"
                |]) {
                    Switch() {
                        Match(when' = props.size.IsDefault) {
                            div(class' = "size-8 bg-accent rounded-full border-2 border-border flex items-center justify-center") {
                                div(class' = "size-6 bg-background rounded-full flex justify-center items-center") {
                                    children()
                                }
                            }
                        }
                        Match(when' = props.size.IsSmall) {
                            div(class' = "size-6 bg-accent rounded-full border-1 border-border flex items-center justify-center") {
                                children()
                            }
                        }
                        Match(when' = props.size.IsLarge) {
                            div(class' = "size-9 bg-accent rounded-full border-2 border-border flex items-center justify-center") {
                                div(class' = "size-7 bg-background rounded-full flex justify-center items-center") {
                                    children()
                                }
                            }
                        }
                    }
                }
        }

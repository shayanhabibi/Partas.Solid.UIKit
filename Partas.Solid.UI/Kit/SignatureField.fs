namespace Partas.Solid.UI
open Fable.Core
open Partas.Solid.Lucide
open Fable.Core.JS
open Fable.Core.JsInterop
open Partas.Solid
open Partas.Solid.ArkUI
open Glutinum.ZagJs.SignaturePad

module SignatureField =
    [<Pojo>]
    type SlotClasses(
        ?root: string
        ,?label: string
        ,?control: string
        ,?segment: string
        ,?clearTrigger: string
        ,?guide: string
        ) =
        [<DefaultValue>]
        val mutable root: string
        [<DefaultValue>]
        val mutable label: string
        [<DefaultValue>]
        val mutable control: string
        [<DefaultValue>]
        val mutable segment: string
        [<DefaultValue>]
        val mutable clearTrigger: string
        [<DefaultValue>]
        val mutable guide: string

[<Erase>]
type SignatureField() =
    inherit SignaturePad.Root()
    [<Erase>]
    member val slots: SignatureField.SlotClasses = undefined with get,set
    [<Erase>]
    member val label: string = undefined with get,set
    [<Erase>]
    member val clearTrigger: HtmlElement = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.clearTrigger <- RotateCw(class' = "transition-all size-4 stroke-primary/80 hover:stroke-primary")
        props.slots <- SignatureField.SlotClasses()
        props.drawing <- createEmpty
        let drawing,setDrawing = createSignal<DrawingOptions> createEmpty
        createEffect(fun () ->
            if props.drawing.fill.IsNone then
                props.drawing.fill <- Some "var(--color-primary)"
            setDrawing props.drawing
            )
        SignaturePad.Root(
            class' = Lib.cn [|
                "relative flex flex-col w-full max-w-[400px]"
                props.slots.root
                props.class'
            |],
            drawing = drawing()
            ).spread props {
            Show(when' = !!props.label) {
                SignaturePad.Label(class' = Lib.cn [|
                    "inline-block"
                    props.slots.label
                |]) { props.label }
            }
            SignaturePad.Control(class' = Lib.cn [|
                "h-[120px] bg-sidebar rounded-md border border-border"
                props.slots.control
            |]) {
                SignaturePad.Segment(class' = props.slots.segment)
                SignaturePad.ClearTrigger(class' = Lib.cn [|
                    //tw
                    "group absolute top-4 right-4 \
                    bg-sidebar/95 hover:bg-background \
                    hover:ring-1 ring-accent \
                    transition-all \
                    rounded-full p-1"
                    props.slots.clearTrigger
                |]) {
                    props.clearTrigger
                }
                SignaturePad.Guide(class' = Lib.cn [|
                    "absolute bottom-1/7 w-9/10 translate-x-1/20"
                    props.slots.guide
                |], asChild = (fun props -> Separator().spread props))
            }
        }

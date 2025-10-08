namespace Partas.Solid.UI
open Partas.Solid.Lucide
open Partas.Solid
open Partas.Solid.ZagJs
open Partas.Solid.ArkUI
open Fable.Core
open Fable.Core.JS
open Fable.Core.JsInterop
open Partas.Solid.ZagJs.FloatingPanel

[<Erase>]
module FloatPanel =
    type Slots =
        abstract root: string
        abstract positioner: string
        abstract content: string
        abstract header: string
        abstract gripContainer: string
        abstract grip: string
        abstract title: string
        abstract actionContainer: string
        abstract minimizeTrigger: string
        abstract minus: string
        abstract closeTrigger: string
        abstract x: string
        abstract body: string
[<Erase>]
type FloatPanel() =
    inherit FloatingPanel.Root()
    [<Erase>]
    member val slots: FloatPanel.Slots = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.defaultSize <- Size(width = 320, height= 240)
        props.minSize <- Some <| Size(width = 280, height = 180)
        props.maxSize <- Some <| Size(width = 500, height = 400)
        props.slots <- createEmpty
        FloatingPanel.Root(
            class' = Lib.cn [|
                // "w-full h-full"
                props.slots.root
                props.class'
            |]
            ).spread props {
            Portal() {
                
            FloatingPanel.Positioner(class' = Lib.cn [| "fixed"; props.slots.positioner |]) {
                FloatingPanel.Content(class' = Lib.cn [|
                    "bg-background border border-border rounded-lg shadow-lg data-[stage=maximized]:rounded-none"
                    props.slots.content
                |]) {
                    FloatingPanel.DragTrigger() {
                        FloatingPanel.Header(
                            class' = Lib.cn [|
                                "flex items-center justify-between p-4 border-b border-border rounded-t-lg"
                                props.slots.header
                            |]
                            ) {
                            div(class' = Lib.cn [|
                                "flex items-center gap-2"
                                props.slots.gripContainer
                            |]) {
                                Lucide.GripVertical(class' = Lib.cn [|
                                    //tw
                                    "w-4 h-4 text-accent"
                                    props.slots.grip
                                |])
                                h3(class' = Lib.cn [|
                                    "text-sm font-medium text-muted-foreground"
                                    props.slots.title
                                |]) {
                                    props.title
                                }
                            }
                            div(class' = Lib.cn [|
                                "flex items-center gap-1"
                                props.slots.actionContainer
                            |]) {
                                let inline stageClass () =
                                    "w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                FloatingPanel.StageTrigger(
                                    class' = Lib.cn [|
                                        stageClass()
                                        props.slots.minimizeTrigger
                                    |],
                                    stage = Stage.Minimized) {
                                    Lucide.Minus(class' = Lib.cn [| "size-3"; props.slots.minus |])
                                }
                                FloatingPanel.StageTrigger(
                                    class' = Lib.cn [|
                                        stageClass()
                                        props.slots.minimizeTrigger
                                    |],
                                    stage = Stage.Maximized
                                    ) {
                                    Lucide.Maximize2(class' = Lib.cn [| "size-3"; props.slots.minus |])
                                }
                                FloatingPanel.StageTrigger(
                                    stage = Stage.Default,
                                    class' = Lib.cn [|
                                        stageClass()
                                        props.slots.minimizeTrigger
                                    |]) {
                                    Lucide.ArrowDownLeft(class' = Lib.cn [| "size-3"; props.slots.minus |])
                                }
                                FloatingPanel.CloseTrigger(class' = Lib.cn [|
                                    stageClass()
                                    props.slots.closeTrigger
                                |] ) {
                                    Lucide.X(class' = Lib.cn [| "size-3"; props.slots.x |])
                                }
                            }
                        }
                    }
                    FloatingPanel.Body(class' = Lib.cn [|
                        "p-4"
                        props.slots.body
                    |]) {
                        props.children
                    }
                    let inline resizeTrigger axis = FloatingPanel.ResizeTrigger(axis = axis, class' = "size-[6px]")
                    // The N, W, NW, NE and SW axis have odd behaviour and simultaneously move the panel
                    // resizeTrigger FloatingPanel.ResizeTriggerAxis.N
                    resizeTrigger FloatingPanel.ResizeTriggerAxis.E
                    // resizeTrigger FloatingPanel.ResizeTriggerAxis.W
                    resizeTrigger FloatingPanel.ResizeTriggerAxis.S
                    // resizeTrigger FloatingPanel.ResizeTriggerAxis.NE
                    // resizeTrigger FloatingPanel.ResizeTriggerAxis.NW
                    resizeTrigger FloatingPanel.ResizeTriggerAxis.SE
                    // resizeTrigger FloatingPanel.ResizeTriggerAxis.SW
                }
            }
            }
        }

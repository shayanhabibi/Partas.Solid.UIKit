namespace Partas.Solid.UI
open Fable.Core
open Fable.Core.JS
open Fable.Core.JsInterop
open Partas.Solid
open Partas.Solid.ZagJs
open Partas.Solid.ArkUI
open Tour

[<Erase>]
module TourWizard =
    type Slots =
        abstract backdrop: string
        abstract positioner: string
        abstract content: string
        abstract arrow: string
        abstract arrowTip: string
        abstract closeTrigger: string
        abstract title: string
        abstract description: string
        abstract progressText: string
        abstract control: string
        abstract actionTrigger: string
        abstract spotlight: string
    
[<Erase>]
type TourWizard() =
    inherit Tour.Root()
    [<Erase>]
    member val slots: TourWizard.Slots = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.slots <- createEmpty
        let tour = props.tour
        Tour.Root(tour = tour) {
            Portal() {
                Tour.Backdrop(class' = Lib.cn [|
                    "backdrop-blur z-[1300] bg-background/10 data-[state=open]:animate-backdrop-in \
                    data-[state=closed]:animate-backdrop-out"
                    props.slots.backdrop
                |])
                Tour.Positioner(class' = Lib.cn [|
                    "flex items-center justify-center !z-[1400] data-[type=dialog]:fixed \
                    data-[type=dialog]:inset-0 data-[type=tooltip]:absolute"
                    props.slots.positioner
                |]) {
                    Tour.Content(class' = Lib.cn [|
                        "relative bg-background rounded-lg shadow-lg flex flex-col \
                        max-w-sm p-5"
                        props.slots.content
                    |]) {
                        
                        Tour.Arrow(class' = Lib.cn [|
                            "[--arrow-size:12px] [--arrow-background:theme(colors.background)]"
                            props.slots.arrow
                        |]) {
                            Tour.ArrowTip(class' = Lib.cn [|
                                "border-t border-l border-border"
                                props.slots.arrowTip
                            |])
                        }
                        
                        Tour.CloseTrigger(class' = Lib.cn [|
                            "absolute top-3 right-3"
                            props.slots.closeTrigger
                        |]) {
                            Lucide.Lucide.X(class' = "size-4")
                        }
                        
                        Tour.Title(class' = Lib.cn [|
                            "font-medium text-lg"
                            props.slots.title
                        |]) { tour().step &&= tour().step?title }
                        
                        Tour.Description(class' = Lib.cn [|
                            "text-muted-foreground text-sm"
                            props.slots.description
                        |]) {
                            tour().step &&= tour().step?description
                        }
                        
                        Tour.ProgressText(class' = Lib.cn [|
                            "text-sm text-muted-foreground"
                            props.slots.progressText
                        |]) {
                            tour().getProgressText()
                        }
                        
                        Tour.Control(class' = Lib.cn [|
                            "flex gap-3 justify-end"
                            props.slots.control
                        |]) {
                            For(each = (tour().step &&= tour().step?actions)) {yield fun action _ ->
                                Tour.ActionTrigger(
                                    action = action,
                                    class' = Lib.cn [|
                                        "px-3 py-2 text-sm font-medium border border-border bg-background \
                                        text-muted-foreground rounded hover:bg-accent transition-colors"
                                        props.slots.actionTrigger
                                    |]
                                ) { action.label }
                                
                            }
                        }
                        
                        
                    }
                }
                Tour.Spotlight(class' = Lib.cn [|
                    "border-[3px] border-solid border-blue-500 z-[1400]"
                    props.slots.spotlight
                |])
            }
        }

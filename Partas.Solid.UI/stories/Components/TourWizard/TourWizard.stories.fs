module Partas.Solid.UI.stories.Components.TourWizard.TourWizard_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
open Partas.Solid.ZagJs
open Partas.Solid.ArkUI.Tour
open Fable.Core.JsInterop
open Browser.Types
open Browser.Dom
[<PartasStorybook>]
let private meta = storybook<TourWizard> {
    render (fun props ->
        let tour = useTour(TourProps(steps = [|
            Tour.StepDetails(
                id = "welcome",
                ``type`` = Tour.StepType.Dialog,
                title = "Welcome to Partas UI",
                description = "Let's see if this works.",
                actions = [|
                    Tour.StepAction(label = "Close", action = !^Tour.StepActionType.Dismiss)
                    Tour.StepAction(label = "Next", action = !^Tour.StepActionType.Next)
                |]
                )
            Tour.StepDetails(
                id = "button-selector",
                ``type`` = Tour.StepType.Tooltip,
                placement = Some Tour.StepPlacement.Bottom,
                target = !!(fun () -> document.querySelector(".mybutton")),
                title = "The Button",
                description = "See what happens when the button is pressed.",
                actions = [|
                    Tour.StepAction(label = "Prev", action = !^Tour.StepActionType.Prev)
                    Tour.StepAction(label = "Close", action = !^Tour.StepActionType.Dismiss)
                |]
                )
        |]))
        Fragment() {
            Button(class' = "mybutton", onClick = fun _ -> tour().start(None)) { "Begin" }
            TourWizard(tour = tour)
        }
        )
    args "Default" ignore
}


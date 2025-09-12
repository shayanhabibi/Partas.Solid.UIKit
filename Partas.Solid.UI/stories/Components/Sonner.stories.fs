module Partas.Solid.UI.stories.Components.Sonner_stories
open Partas.Solid
open Partas.Solid.Storybook
open Partas.Solid.UI
[<PartasStorybook>]
let private meta = storybook<Sonner> {
    render (fun props ->
        Fragment() {
            Sonner().spread props
            Button(onClick = fun _ ->
                Sonner.Sonner.toast "Event has been created" |> ignore) {
                "Click me"
            }
        }
        )
    args "Default" (fun props -> ())
}

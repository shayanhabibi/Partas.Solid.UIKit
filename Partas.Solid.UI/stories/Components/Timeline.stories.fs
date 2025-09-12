module Partas.Solid.UI.stories.Components.Timeline_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Timeline> {
    render (fun props ->
        Timeline().spread props
        )
    args "Default" (fun props ->
        props.activeItem <- 1
        props.items <- [|
            Timeline.Item(title = unbox "Event #1"
                          ,description = unbox "This is the first event of the timeline.")
            Timeline.Item(title = unbox "Event #2"
                          ,description = unbox "This is the second event of the timeline.")
            Timeline.Item(title = unbox "Event #3"
                          ,description = unbox "This is the third event of the timeline.")
        |])
    
}


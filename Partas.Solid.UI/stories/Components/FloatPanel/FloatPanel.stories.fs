module Partas.Solid.UI.stories.Components.FloatPanel.FloatPanel_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<FloatPanel> {
    render (fun props ->
        let isOpen,setOpen = createSignal false
        Fragment() {
            Button(onClick = fun _ -> setOpen.Invoke(not)) { "Click" }
            FloatPanel(open' = isOpen(), onOpenChange = (_.``open`` >> setOpen))
        }
        )
    args "Default" ignore
}


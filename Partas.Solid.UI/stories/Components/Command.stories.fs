module Partas.Solid.UI.stories.Components.Command_stories
open Fable.Core.JsInterop
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Command> {
    render (fun cmd ->
        let items,others = splitProps(cmd, [|"children"|])
        Command().spread cmd {
            CommandInputs()
            CommandLists() {
                CommandEmptys()
                CommandGroups(heading = span() { "Group" }) {
                    For(each = items?children) {
                        yield fun (item: string) _ ->
                            CommandItems() {
                                item
                            }
                    }
                }
            }
        }
        )
    args "Default" (fun cmd ->
        cmd.label <- "Label"
        cmd.shouldFilter <- true
        cmd.loop <- false
        cmd.disablePointerSelection <- false
        )
}


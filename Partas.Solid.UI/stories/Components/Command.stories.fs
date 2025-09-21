module Partas.Solid.UI.stories.Components.Command_stories
open Fable.Core.JsInterop
open Partas.Solid
open Partas.Solid.Lucide
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
    render "Example" (fun props ->
        let makeItem (value: string) (_MyIcon: TagValue) =
            CommandItems() {
                _MyIcon % {| ``class`` = "mr-2 size-4" |}
                span() { value }
            }
        let makeItemShortcut (value: string) (_IconValue: TagValue) (shortcut: string) =
            CommandItems() {
                _IconValue % {| ``class`` = "mr-2 size-4" |}
                span() { value }
                CommandShortcuts() { shortcut }
            }
            
        Command(class' = "rounded-lg border shadow-md") {
            CommandInputs(placeholder = "Type a command or search...")
            CommandLists() {
                CommandEmptys() { "No results found" }
                CommandGroups(heading = span() { "Suggestions" }) {
                    makeItem "Calendar" !@Calendar
                    makeItem "Search Emoji" !@Smile
                    makeItem "Launch" !@Rocket
                }
                CommandGroups(heading = span() { "Settings" }) {
                    makeItemShortcut "Profile" !@User "Ctrl P"
                    makeItemShortcut "Mail" !@Mail "Ctrl B"
                    makeItemShortcut "Settings" !@Settings "Ctrl S"
                }
            }
        }
        )
    render "DialogExample" (fun props ->
        let isOpen,setOpen = createSignal false
        Fragment() {
            Button(onClick = fun _ -> setOpen.Invoke(not)) { "Click me!" }
            CommandDialog(
              open' = isOpen(),
              onOpenChange = setOpen) {
                CommandInputs(placeholder="Type a command or search...")
                CommandLists() {
                    CommandEmptys() { "No results found" }
                    CommandGroups(heading = !!"Suggestions") {
                        CommandItems() { "Calendar" }
                        CommandItems() { "Search Emoji" }
                        CommandItems() { "Calculator" }
                    }
                }
            }
        }
        )
}


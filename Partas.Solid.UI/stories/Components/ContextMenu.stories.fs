module Partas.Solid.UI.stories.Components.ContextMenu_stories
open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ContextMenu> {
    render (fun props ->
        ContextMenu().spread props {
            ContextMenuTrigger(
                class' = "flex h-[150px] w-[300px] items-center justify-center rounded-md\
                            border border-dashed text-sm"
                ) {
                "Right Click Here"
            }
            ContextMenuPortal() {
                ContextMenuContent() {
                    ContextMenuItem() {
                        "Item"
                    }
                }
            }
        }
        )
    cases (fun props ->
        match props.placement with
        | KobaltePlacement.Top -> failwith "todo"
        | KobaltePlacement.TopLeft -> failwith "todo"
        | KobaltePlacement.TopRight -> failwith "todo"
        | KobaltePlacement.Bottom -> failwith "todo"
        | KobaltePlacement.BottomLeft -> failwith "todo"
        | KobaltePlacement.BottomRight -> failwith "todo"
        | KobaltePlacement.Left -> failwith "todo"
        | KobaltePlacement.Right when props.placement = KobaltePlacement.Top -> failwith "todo"
        | _ -> ()
        )
    args "Default" (fun props ->
        ())
    render "Example" (fun props ->
        let showGitLog,setShowGitLog = createSignal true
        let showHistory,setShowHistory = createSignal false
        let branch,setBranch = createSignal "main"
        ContextMenu().spread props {
            ContextMenuTrigger(class' = "flex h-[150px] w-[300px] items-center justify-center \
                               rounded-md border border-dashed text-sm")
                { "Right click here." }
            ContextMenuPortal() {
                ContextMenuContent(class' = "w-48") {
                    let inline makeContextItem (value: string) (shortcut: string) disabled =
                        ContextMenuItem(disabled = disabled) {
                            span() { value }
                            ContextMenuShortcut() { shortcut }
                        }
                    makeContextItem "Commit" "Ctrl+K" false
                    makeContextItem "Push" "Shift+Ctrl+K" false
                    makeContextItem "Update Project" "Ctrl+T" true
                    ContextMenuSub(overlap=true) {
                        ContextMenuSubTrigger() { "GitHub" }
                        ContextMenuPortal() {
                            ContextMenuSubContent() {
                                let inline makeContextItem (value: string) =
                                    ContextMenuItem() { value }
                                makeContextItem "Create Pull Request..."
                                makeContextItem "View Pull Requests"
                                makeContextItem "Sync Fork"
                                ContextMenuSeparator()
                                makeContextItem "Open on GitHub"
                            }
                        }
                    }
                    ContextMenuSeparator()
                    let inline makeCheckbox
                        (value: string)
                        (accessor: Accessor<bool>)
                        (setter: Setter<bool>) =
                        ContextMenuCheckboxItem(checked'=accessor(), onChange=unbox setter) { value }
                    makeCheckbox "Show Git Log" showGitLog setShowGitLog
                    makeCheckbox "Show History" showHistory setShowHistory
                    ContextMenuSeparator()
                    ContextMenuGroup() {
                        ContextMenuGroupLabel() { "Branches" }
                        ContextMenuRadioGroup(value = branch(), onChange = unbox setBranch) {
                            ContextMenuRadioItem(value = "main") { "main" }
                            ContextMenuRadioItem(value = "develop") { "develop" }
                        }
                    }
                }
            }
        }
        )
}


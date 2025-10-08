namespace Partas.Solid.UI

open Fable.Core.JsInterop
open Fable.Core.JS
open Fable.Core
open Partas.Solid.Lucide
open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.Polymorphism
open Partas.Solid.Aria
open Partas.Solid.Experimental
open Partas.Solid.UI
open Partas.Solid.TanStack.Table
open Browser.Types
open Browser.Dom


[<Erase>]
type DataTableColumnHeader<'Data>() =
    inherit div()
    [<Erase>]
    member val column: Column<'Data> = undefined with get,set
    [<Erase>]
    member val title: string = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        let iconClass = "h-3.5 w-3.5 text-muted-foreground/70"
        let column () = props.column
        ignore column
        let canSort () = column().getCanSort()
        let canHide () = column().getCanHide()
        Show(when' = (canSort() || canHide()), fallback = (div(class' = props.class') {
                    span() { props.title }
                })) {
                div( class' = Lib.cn [| "flex items-center space-x-2"; props.class' |] ) {
                    DropdownMenu() {
                        DropdownMenuTrigger()
                            .as'( Button( variant = Button.Variant.Ghost ,size = Button.Size.Small ,class' = "-ml-3 h-8 data-[state=open]:bg-accent" ) ) {
                            span() { props.title }
                            Show(
                                when' = canSort()
                                ,fallback = (Lucide.EllipsisVertical(size = 4))
                                ) {
                                if props.column.getIsSorted() = !^SortDirection.Desc then
                                    Lucide.ArrowDown()
                                elif props.column.getIsSorted() = !^SortDirection.Asc then
                                    Lucide.ArrowUp()
                                else
                                    Lucide.ChevronsUpDown()
                            }
                        }
                        DropdownMenuContent() {
                            Show(when' = canSort()) {
                                DropdownMenuItem(onClick = fun _ -> props.column.toggleSorting(!!false)) {
                                    Lucide.ArrowUp(class' = iconClass)
                                    "Asc"
                                }
                                DropdownMenuItem(onClick = fun _ -> props.column.toggleSorting(!!true)) {
                                    Lucide.ArrowDown(class' = iconClass)
                                    "Desc"
                                }
                            }
                            Show(when' = (canSort() && canHide())) {
                                DropdownMenuSeparator()
                            }
                            Show(when' = canHide()) {
                                DropdownMenuItem(onClick = fun _ -> props.column.toggleVisibility(false)) {
                                    Lucide.EyeOff(class' = iconClass)
                                    "Hide"
                                }
                            }
                            
                        }
                    }
            }
        }
[<Erase>]
type ActionsHeader<'Data>() =
    inherit div()
    // [<Erase>]
    // member val tableStack: Tables.TableStack<'Data> = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        let iconClass = "h-3.5 w-3.5 text-muted-foreground/70"
        div( class' = Lib.cn [| "flex items-center space-x-2"; props.class' |] ) {
            DropdownMenu() {
                DropdownMenuTrigger()
                    .as'( Button( variant = Button.Variant.Ghost ,size = Button.Size.Small ,class' = "-ml-3 h-8 data-[state=open]:bg-accent" ) ) {
                    Lucide.TableProperties()
                }
                DropdownMenuContent() {
                    DropdownMenuLabel() { "Table Actions" }
                }
            }
        }
        

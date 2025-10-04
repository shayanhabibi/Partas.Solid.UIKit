namespace Partas.Solid.UI
open Partas.Solid.Kobalte
open Partas.Solid.Polymorphism
open Partas.Solid.Lucide
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.TanStack.Table

open Fable.Core
open Fable.Core.JS
open Fable.Core.JsInterop

open System

[<Erase>]
type TableViewOptions<'Data>() =
    interface RegularNode
    [<Erase>]
    member val table: Table<'Data> = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        let table () = props.table
        DropdownMenu(placement = !!"bottom-end") {
            DropdownMenuTrigger().as'(Button(variant = Button.Variant.Outline, size = Button.Size.Small, class' = "ml-auto hidden h-8 lg:flex")) {
                Settings()
                "View"
            }
            DropdownMenuContent(class' = "w-[150px]") {
                DropdownMenuLabel() { "Toggle columns" }
                DropdownMenuSeparator()
                For(each = (table().getAllColumns() |> Array.filter (fun column -> (not <| isNullOrUndefined (column.accessorFn)) &&= column.getCanHide()))) {
                    yield fun column _ ->
                        DropdownMenuCheckboxItem(class' = "capitalize", checked' = column.getIsVisible(), onChange = fun value -> column.toggleVisibility(!!value)) { column.id }
                }
            }
        }
      

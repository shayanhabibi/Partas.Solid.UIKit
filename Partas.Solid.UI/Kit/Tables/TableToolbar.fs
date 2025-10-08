namespace Partas.Solid.UI

open Partas.Solid.Lucide
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.TanStack.Table

open Fable.Core
open Fable.Core.JS
open Fable.Core.JsInterop

open System

[<Erase>]
type TableToolbar<'Data>() =
    interface RegularNode
    [<Erase>]
    member val table: Table<'Data> = undefined with get,set
    [<Erase>]
    member val filterColumn: string = undefined with get,set
    [<Erase>]
    member val columnEnumerations: (string * TableFacetedFilterOptions[])[] = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.filterColumn <- ""
        let isFiltered = fun () -> props.table.getState()?columnFilters |> Array.length > 0
        let table () = props.table
        let filterColumn () = table().getColumn(props.filterColumn).Value
        ignore filterColumn
        div(class' = "flex items-center justify-between") {
            div(class' = "flex flex-1 items-center space-x-2") {
                TextField(
                    value = (!!(filterColumn().getFilterValue()) ??= "")
                    ,onChange = fun value -> (props.table.getColumn(props.filterColumn) |> Option.map (_.setFilterValue(!^value)) |> ignore)
                    ) {
                    TextFieldInput(placeholder = $"Filter by {props.filterColumn}", class' = "h-8 w-[150px] lg:w-[250px]")
                }
                For(each = props.columnEnumerations) {
                    yield fun (selector, options) _ ->
                        props.table.getColumn(selector) &&= (
                            TableFacetedFilter(
                                column = !!props.table.getColumn(selector).Value
                                ,title = (selector[0] |> Char.ToUpperInvariant |> fun c -> $"{c}{selector[1..]}")
                                ,options = options
                                )
                            ) 
                }
                isFiltered() &&= (
                    Button(class' = "h-8 px-2 lg:px-3", variant = Button.Variant.Ghost, onClick = fun _ -> (props.table.resetColumnFilters(true))) {
                        "Reset"
                        Lucide.X()
                    }
                    )
            }
            props.children
            TableViewOptions(table = props.table)
        }

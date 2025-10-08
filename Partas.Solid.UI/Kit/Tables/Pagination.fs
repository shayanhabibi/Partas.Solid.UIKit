namespace Partas.Solid.UI

open Partas.Solid.Lucide
open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Experimental
open Fable.Core
open Fable.Core.JS
open Fable.Core.JsInterop
open Partas.Solid.TanStack.Table

[<Erase>]
type DataTablePagination<'Data>() =
    inherit div()
    [<Erase>]
    member val table: Table<'Data> = undefined with get,set
    // [<Erase>]
    // member val tableStack: Types.Tables.TableStack<'Data> = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        let children = children { props.children }
        // let info () = props.tableStack.info()
        // ignore info
        div(
            class' = "flex items-center justify-between px-2"
        ) {
            if !!children() then
                children()
            else
                div(class' = "flex-1 text-sm text-muted-foreground") {
                    $"{props.table.getFilteredSelectedRowModel().rows.Length} "
                    " of "
                    // Tooltip() {
                        // TooltipTrigger() {
                    $"{props.table.getFilteredRowModel().rows.Length} row(s) selected."
                    //     }
                    //     TooltipContent() {
                    //         $"Total of {info().total} rows in the database"
                    //     }
                    // }
                }
            div(class' = "flex items-center space-x-6 lg:space-x-8") {
                div(class' = "flex items-center space-x-2") {
                    p(class' = "text-sm font-medium") { "Rows per page" }
                    Select(
                        options = [| 10; 20; 30; 40; 50 |]
                        ,value = props.table.getState().pagination.pageSize
                        ,onChange = fun value -> value &&= (props.table.setPageSize !!value)
                        // ,optionDisabled = (<>) 10
                        ,itemComponent = (fun itemProps ->
                                SelectItem(item = itemProps.item) { !!itemProps.item.rawValue }
                            )
                    ) {
                        SelectTrigger(class' = "h-8 w-[70px]") {
                            SelectValue() {
                                yield fun state ->
                                    !!state.selectedOption()
                            }
                        }
                        SelectContent()
                    }
                }
                div(class' = "flex w-[100px] items-center justify-center text-sm font-medium") {
                    // Tooltip() {
                    // TooltipTrigger() {
                    $"Page {props.table.getState().pagination.pageIndex + 1} of {props.table.getPageCount()}"
                    // }
                    // TooltipContent() {
                        // $"Total of {info().pages.Value.total} pages in the database"
                    // }
                    // }
                }
                div(class' = "flex items-center space-x-2") {
                    Button(
                           variant = Button.Variant.Outline
                           ,class' = "hidden size-8 p-0 lg:flex"
                           ,onClick = fun _ -> props.table.setPageIndex(!^0)
                           ,disabled = (props.table.getCanPreviousPage() |> not)
                           ) {
                        SrSpan() { "Go to first page" }
                        Lucide.ChevronsLeft()
                    }
                    Button(
                        variant = Button.Variant.Outline
                        ,class' = "size-8 p-0"
                        ,onClick = fun _ -> props.table.previousPage()
                        ,disabled = (props.table.getCanPreviousPage() |> not)
                        ) {
                        SrSpan() { "Go to previous page" }
                        Lucide.ChevronLeft()
                    }
                    Button (
                        variant = Button.Variant.Outline
                        ,class' = "size-8 p-0"
                        ,onClick = fun _ -> props.table.nextPage()
                        ,disabled = (props.table.getCanNextPage() |> not)
                        ) {
                        SrSpan() { "Go to next page" }
                        Lucide.ChevronRight()
                    }
                    Button(
                        variant = Button.Variant.Outline
                        ,class' = "size-8 p-0"
                        ,onClick = fun _ -> props.table.setPageIndex(!^(props.table.getPageCount() - 1))
                        ,disabled = (props.table.getCanNextPage() |> not)
                        ) {
                        SrSpan() { "Go to last page" }
                        Lucide.ChevronsRight()
                    }
                }
            }
        }

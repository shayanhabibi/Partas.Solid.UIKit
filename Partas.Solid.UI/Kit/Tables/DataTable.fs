module Partas.Solid.UI.Kit.Tables.DataTable


open Partas.Solid
open Partas.Solid.UI
open Fable.Core
open Fable.Core.JsInterop
open Partas.Solid.TanStack.Table

[<Erase>]
type PaginationWrapper<'T>() =
    interface RegularNode
    [<DefaultValue>] val mutable table: Table<'T>
    [<Erase>] member val paginated: bool = unbox null with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.paginated <- false
        Partas.Solid.Bindings.Switch() {
            Match(when' = props.paginated) {
                div() {
                    div(class' = "rounded-md border") {
                        props.children
                    }
                    div(class' = "flex items-center justify-end space-x-2 py-4 px-2") {
                        Button(
                            variant = Button.Variant.Outline
                            ,size = Button.Size.Small
                            ,onClick = fun _ -> props.table.previousPage()
                            ,disabled = not (props.table.getCanPreviousPage())
                        ) { "Previous" }
                        Button(
                            variant = Button.Variant.Outline
                            ,size = Button.Size.Small
                            ,onClick = fun _ -> props.table.nextPage()
                            ,disabled = not (props.table.getCanNextPage())
                        ) { "Next" }
                    }
                }
            }
            Match(when' = not props.paginated) {
                props.children
            }
        }

[<Erase>]
type DataTable<'T>() =
    interface VoidNode
    [<DefaultValue>] val mutable table: Table<'T>
    [<DefaultValue>] val mutable paginated: bool
    [<SolidTypeComponent>]
    member props.__ =
        let table = props.table
        PaginationWrapper(table = props.table, paginated = props.paginated) {
        Table() {
            TableHeader() {
                For(each = table.getHeaderGroups()) {
                    yield fun headerGroup _ ->
                        TableRow() {
                            For(each = headerGroup.headers) {
                                yield fun header _ ->
                                    TableHead(colspan = header.colSpan) {
                                        Show(when' = not header.isPlaceholder) {
                                            flexRender(header.column.columnDef.header, header.getContext())
                                        }
                                    }
                            }
                        }
                }
            }
            TableBody() {
                Show(
                    when' = unbox (table.getRowModel().rows.Length)
                    ,fallback = (TableRow() { TableCell(colspan = (8), class' = "h-24 text-center") { "No Results." } })
                    ) {
                    For(each = table.getRowModel().rows) {
                        yield fun row _ ->
                            TableRow().data("state", !!(row.getIsSelected() && !!"selected")) {
                                For(each = row.getVisibleCells()) {
                                    yield fun cell _ ->
                                        TableCell() {
                                            flexRender(cell.column.columnDef.cell, cell.getContext())
                                        }
                                }
                            }
                    }
                }
            }
        }
        }

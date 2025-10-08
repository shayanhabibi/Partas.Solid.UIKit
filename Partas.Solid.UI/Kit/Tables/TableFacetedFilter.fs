namespace Partas.Solid.UI

open Partas.Solid.Lucide
open Partas.Solid
open Partas.Solid.Experimental
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Polymorphism
open Partas.Solid.TanStack.Table
open Fable.Core
open Fable.Core.JS
open Fable.Core.JsInterop
open System

[<Pojo>]
type TableFacetedFilterOptions(label: string, value: string, ?icon: {| ``class``: string |} -> HtmlElement) =
    member val label = label with get,set
    member val value = value with get,set
    member val icon = icon.Value with get,set

[<Erase>]
type TableFacetedFilter<'Data, 'Value>() =
    inherit div()
    [<Erase>]
    member val column: Column<'Data, 'Value> = undefined with get,set
    [<Erase>]
    member val title: string = undefined with get,set
    [<Erase>]
    member val options: TableFacetedFilterOptions[] = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        let column = props.column
        let facets = fun () -> props.column &&= column.getFacetedUniqueValues()
        let selectedValues: unit -> string[] = fun () -> ((props.column &&= column.getFilterValue()) ??= [||]) |> unbox
        
        Popover(placement = !!"bottom-start") {
            PopoverTrigger().as'(Button(variant = Button.Variant.Outline, size = Button.Size.Small, class' = "h-8 border-dashed")) {
                Lucide.CirclePlus()
                props.title
                Show(when' = (selectedValues().Length > 0)) {
                    Separator(orientation = Orientation.Vertical, class' = "mx-2 h-4")
                    Badge(variant = Badge.Variant.Secondary, class' = "rounded-sm px-1 lg:hidden") {
                        selectedValues().Length
                    }
                    div(class' = "hidden space-x-1 lg:flex") {
                        Show(
                            when' = (selectedValues().Length < 3)
                            ,fallback = Badge(variant = Badge.Variant.Secondary, class' = "rounded-sm px-1") { selectedValues().Length; " selected" } 
                            ) {
                            For(each = selectedValues()) {
                                yield fun opt _ ->
                                    Badge(variant = Badge.Variant.Secondary, class' = "rounded-sm px-1") {
                                        opt
                                    }
                            }
                            
                        }
                    }
                }
            }
            PopoverContent(class' = "w-[200px] p-0") {
                Command() {
                    CommandInputs(placeholder = props.title)
                    CommandLists() {
                        CommandEmptys() { "No results found." }
                        CommandGroups() {
                            For(each = props.options) {
                                yield fun opt _ ->
                                    CommandItems(
                                        onSelect = (fun _ ->
                                            let mutable newValues = undefined
                                            let isSelected = fun () -> selectedValues() |> Array.contains opt.value
                                            if isSelected() then
                                                newValues <- selectedValues() |> Array.filter ((<>) opt.value)
                                            else
                                                newValues <-  [| opt.value |] |> Array.append (selectedValues())
                                            props.column &&= props.column.setFilterValue(if !!newValues.Length then !!newValues else undefined)
                                            )
                                        ) {
                                        div(class' = Lib.cn [|
                                            "mr-2 flex size-4 items-center justify-center rounded-sm border border-primary"
                                            if selectedValues() |> Array.contains opt.value then "bg-primary text-primary-foreground"
                                            else "opacity-50 [&_svg]:invisible"
                                        |]) {
                                            Lucide.Check()
                                        }
                                        Show(when' = !!opt.icon, keyed = true) {
                                            opt.icon <| {| ``class`` = "mr-2 size-4 text-muted-foreground" |}
                                        }
                                        span() { opt.label }
                                        Show(when' = (facets() &&= !!facets().get(opt.value))) {
                                            span(class' = "ml-auto flex size-4 items-center justify-center font-mono text-xs") {
                                                facets().get(opt.value)
                                            }
                                        }
                                    }
                            }
                        }
                        Show(when' = (selectedValues() |> Array.length > 0)) {
                            Fragment() {
                                CommandSeparators()
                                CommandGroups() {
                                    CommandItems(
                                        onSelect = (fun _ ->
                                            props.column &&= props.column.setFilterValue(undefined)
                                            )
                                        ,class' = "justify-center text-center"
                                        ) {
                                        "Clear filters"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

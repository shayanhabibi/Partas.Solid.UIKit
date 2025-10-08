namespace Partas.Solid.UI
open Partas.Solid.Lucide
open Partas.Solid.Kobalte
open Partas.Solid.Polymorphism
open Partas.Solid
open Partas.Solid.UI
open Fable.Core
open Fable.Core.JsInterop
open Fable.Core.JS
open Partas.Solid.Experimental
open System

[<Pojo>]
type FacetedFilterOptions<'T>(
        label: string,
        value: 'T,
        ?selectLabel: string,
        ?icon: ({| ``class``: string |} -> HtmlElement)
    ) =
    member val label = label with get,set
    member val selectLabel = selectLabel with get,set
    member val value = value with get,set
    member val icon = icon.Value with get,set

[<Erase>]
type FacetedFilter<'Data when 'Data: equality>() =
    inherit div()
    [<Erase>]
    member val value: 'Data = undefined with get,set
    [<Erase>]
    member val onValueChange: ('Data -> unit) = undefined with get,set
    [<Erase>]
    member val label: string = undefined with get,set
    [<Erase>]
    member val options: FacetedFilterOptions<'Data>[] = undefined with get,set
    [<Erase>]
    member val buttonVariant: Button.Variant = undefined with get,set
    [<Erase>]
    member val buttonSize: Button.Size = undefined with get,set
    [<Erase>]
    member val buttonClass: string = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.options <- [||]
        props.buttonVariant <- Button.Variant.Outline
        props.buttonSize <- Button.Size.Small
        let value_,setValue_ = createSignal<'Data>(Unchecked.defaultof<'Data>)
        let value () = if !!props.value then props.value else value_()
        let setValue value = if !!props.onValueChange then props.onValueChange value else setValue_ value
        let selectedValue = memo {
            props.options
            |> Array.tryFind (fun opt -> value() = opt.value)
        }
        
        Popover(placement = !!"bottom-start") {
            PopoverTrigger().as'(Button(variant = props.buttonVariant, size = props.buttonSize, class' = Lib.cn [| "h-8 border-dashed"; props.buttonClass |])) {
                Lucide.CirclePlus()
                props.label
                Show(when' = !!selectedValue()) {
                    Separator(orientation = Orientation.Vertical, class' = "mx-2 h-4")
                    div(class' = "hidden space-x-1 lg:flex") {
                        Badge(variant = Badge.Variant.Secondary, class' = "rounded-sm px-1") {
                            selectedValue() |> Option.map _.label |> Option.defaultValue ""
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
                                            if opt |> Option.ofObj = selectedValue() then
                                                setValue !!null
                                            else
                                                setValue opt.value
                                            )
                                        ) {
                                        div(class' = Lib.cn [|
                                            "mr-2 flex size-4 items-center justify-center rounded-sm border border-primary"
                                            if selectedValue() = (opt |> Option.ofObj) then "bg-primary text-primary-foreground"
                                            else "opacity-50 [&_svg]:invisible"
                                        |]) {
                                            Lucide.Check()
                                        }
                                        Show(when' = !!opt.icon, keyed = true) {
                                            opt.icon <| {| ``class`` = "mr-2 size-4 text-muted-foreground" |}
                                        }
                                        span() { opt.label }
                                        Show(when' = !!selectedValue()) {
                                            span(class' = "ml-auto flex size-4 items-center justify-center font-mono text-xs") {
                                                selectedValue() |> Option.map _.selectLabel |> Option.flatten |> Option.defaultValue (unbox<string> null)
                                            }
                                        }
                                    }
                            }
                        }
                        Show(when' = (selectedValue() |> unbox)) {
                            Fragment() {
                                CommandSeparators()
                                CommandGroups() {
                                    CommandItems(
                                        onSelect = (fun _ -> setValue(undefined)
                                            )
                                        ,class' = "justify-center text-center"
                                        ) {
                                        "Clear Selection"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

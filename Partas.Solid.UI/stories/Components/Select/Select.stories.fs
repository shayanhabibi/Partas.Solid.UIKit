module Partas.Solid.UI.stories.Components.Select.Selectstories

open Browser.Types
open Partas.Solid
open Partas.Solid.Kobalte
open Partas.Solid.UI
open Partas.Solid.Style
open Partas.Solid.Storybook
open Partas.Solid.TanStack.Virtual
open Fable.Core
open Fable.Core.JS
open Fable.Core.JsInterop
open System

type IOptionValue =
    abstract value: string
    abstract label: string
    abstract disabled: bool
[<SolidComponent>]
let private VirtualisationEx () =
    let options: IOptionValue[] = [|
        for i in 0..100_000 do
            {| value = string i; label = $"Value #{i}"; disabled = false |}
            |> unbox<IOptionValue>
    |]
    let listboxRef,setListboxRef = createSignal<Element>(undefined)
    let virtualizer =
        createVirtualizer<IOptionValue>(
            count = options.Length,
            getScrollElement = fun () -> listboxRef() |> unbox<HtmlElement> |> Some
            ,getItemKey = fun i -> !^options[int i].value
            ,estimateSize = fun _ -> 32
            ,overscan = 5
            )
    Select<IOptionValue>(
        virtualized = true,
        options = options,
        optionValue = (_.value >> (!^)),
        optionTextValue = _.label,
        optionDisabled = _.disabled) {
        SelectTrigger(class' = "w-[180px]") {
            SelectValue<IOptionValue>() { yield fun state ->
                span() { state.selectedOption().label } }
        }
        SelectContent() {
            Select.Listbox<IOptionValue>(
                    scrollToItem = fun key ->
                        virtualizer.scrollToIndex.Invoke(options |> Array.findIndex(_.value >> (=) key))
                    )
                .ref(setListboxRef)
                .style'([
                    Style.width "100%"
                    Style.height "200px"
                    Style.overflow Overflow.Auto
                ])  { yield fun items ->
                     div().style'([
                         Style.height $"{virtualizer.getTotalSize()}px"
                         Style.width "100%"
                         Style.position Position.Relative
                     ]) {
                         For(each = virtualizer.getVirtualItems.Invoke()) { yield fun virtualRow _ ->
                             let item = items().getItem(!!virtualRow.key)
                             if item.IsSome then
                                 let value = item.Value
                                 SelectItem(item = value).style'([
                                     Style.position Position.Absolute
                                     Style.top "0"
                                     Style.left "0"
                                     Style.width "100%"
                                     Style.height $"{virtualRow.size}px"
                                     Style.transform $"translateY({virtualRow.start}px)"
                                 ]) {
                                     value.rawValue.label
                                 }
                             else undefined
                         }
                     }
                     }
        }
    }
    
[<PartasStorybook>]
let private meta = storybook<Select> {
    cases (fun props ->
        match props.validationState with
        | Valid -> failwith "todo"
        | Invalid when props.validationState = Valid -> failwith "todo"
        | _ -> ()
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
        match props.selectionBehavior with
        | Toggle -> failwith "todo"
        | Replace when props.selectionBehavior = SelectionBehavior.Toggle -> failwith "todo"
        | _ -> ()
        )
    render (fun props ->
        Select(
            itemComponent = fun props -> SelectItem(item = props.item) { unbox<string> props.item.rawValue }
            ).spread props {
            SelectTrigger(class' = "w-[180px]") {
                SelectValue<string>() {
                    yield fun state ->
                        span() { state.selectedOption() }
                }
            }
            SelectContent()
        })
    render "VirtualisationExample" (ignore >> VirtualisationEx)
    args "Default" (fun props ->
        props.placeholder <- unbox "Select a fruit..."
        props.options <- [| "Apple"; "Banana"; "Blueberry"; "Grapes"; "Pineapple" |])
        
}

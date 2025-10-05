namespace Partas.Solid.UI

open Browser.Types
open Partas.Solid
open Partas.Solid.Lucide
open Partas.Solid.Kobalte
open Partas.Solid.Polymorphism
open Fable.Core
open Partas.Solid.Aria
open Fable.Core.JS
open Fable.Core.JsInterop

[<Erase>]
type Select<'T>() =
    inherit Kobalte.Select<'T>()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.Select()
            .dataSlot("select")
            .spread props
type Select = Select<obj>

[<Erase>]
type SelectValue<'T>() =
    inherit Select.Value<'T>()
    [<SolidTypeComponent>]
    member props.constructor =
        Select.Value()
            .dataSlot("select-value")
            .spread props
type SelectValue = SelectValue<obj>
[<Erase>]
type SelectHiddenSelect() =
    inherit Select.HiddenSelect()
    [<SolidTypeComponent>]
    member props.constructor =
        Select.HiddenSelect()
            .dataSlot("select-hidden")
            .spread props
    
[<Erase>]
module SelectTrigger =
    [<StringEnum>]
    type Size =
        | Small
        | Default
[<Erase>]
type SelectTrigger() =
    inherit Select.Trigger()
    [<Erase>]
    member val size: SelectTrigger.Size = undefined with get,set
    [<SolidTypeComponent>]
    member props.constructor =
        props.size <- SelectTrigger.Size.Default
        Select.Trigger(class'= Lib.cn [|
            "border-input data-[placeholder]:text-muted-foreground \
            [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring \
            focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 \
            dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive \
            dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center \
            justify-between gap-2 rounded-md border bg-transparent px-3 py-2 \
            text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] \
            outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed \
            disabled:opacity-50 data-[size=default]:h-9 data-[size=small]:h-8 \
            *:data-[slot=select-value]:line-clamp-1 \
            *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center \
            *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none \
            [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            // "flex h-10 w-full items-center justify-between rounded-md
            // border border-input bg-transparent px-3 py-2 text-sm
            // ring-offset-background placeholder:text-muted-foreground
            // focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
            // disabled:cursor-not-allowed disabled:opacity-50"
            props.class'
        |]) .data("size", string props.size)
            .dataSlot("select-trigger")
            .spread(props) {
            props.children
            Select.Icon().as'(ChevronsUpDown(class' = "size-4 opacity-50"))
        }
[<Erase>]
type SelectContent() =
    inherit Select.Content()
    [<SolidTypeComponent>]
    member props.constructor =
        Select.Portal().dataSlot("select-portal") {
            Select.Content(class' = Lib.cn [|
                "bg-popover text-popover-foreground data-[expanded]:animate-in \
                data-[closed]:animate-out data-[closed]:fade-out-0 \
                data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 \
                data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 \
                data-[side=left]:slide-in-from-right-2 \
                data-[side=right]:slide-in-from-left-2 \
                data-[side=top]:slide-in-from-bottom-2 relative z-50 \
                max-h-(--kb-popper-content-available-height) min-w-[8rem] \
                origin-(--kb-popper-content-transform-origin) overflow-x-hidden \
                overflow-y-auto rounded-md border shadow-md"
                // "relative z-50 min-w-32 overflow-hidden rounded-md border
                // bg-popover text-popover-foreground shadow-md animate-in fade-in-80"
                props.class'
            |]) .dataSlot("select-content")
                .spread(props) {
                Select.Listbox(class' = "m-0 p-1")
            }
        }
[<Erase>]
type SelectItem() =
    inherit Select.Item()
    [<SolidTypeComponent>]
    member props.constructor =
        Select.Item(class' = Lib.cn [|
            "focus:bg-accent focus:text-accent-foreground \
            [&_svg:not([class*='text-'])]:text-muted-foreground relative flex \
            w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 \
            pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none \
            data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 \
            [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex \
            *:[span]:last:items-center *:[span]:last:gap-2"
            props.class'
        |]) .dataSlot("select-item")
            .spread(props) {
            span(class' = "absolute right-2 flex size-3.5 items-center justify-center") {
                Select.ItemIndicator()
                    .dataSlot("select-indicator") {
                    Check(class'="size-4", strokeWidth = 2)
                }
            }
            Select.ItemLabel().dataSlot("select-label") { props.children }
        }

[<Erase>]
module SelectLabel =
    [<RequireQualifiedAccess; StringEnum>]
    type Variant =
        | Label
        | Description
        | Error

[<Erase>]
type SelectLabel() =
    inherit Select.Label()
    static member variants (?variant: SelectLabel.Variant): string =
        let variant = defaultArg variant SelectLabel.Variant.Label
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed
        peer-disabled:opacity-70 " +
        match variant with
        | SelectLabel.Variant.Label -> "data-[invalid]:text-destructive"
        | SelectLabel.Variant.Description -> "font-normal text-muted-foreground"
        | SelectLabel.Variant.Error -> "text-xs text-destructive"
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        Select.Label(class' = Lib.cn [|
            SelectLabel.variants()
            props.class'
        |]).spread props

[<Erase>]
type SelectDescription() =
    inherit Select.Description()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        Select.Description(class' = Lib.cn [|
            SelectLabel.variants(SelectLabel.Variant.Description)
            props.class'
        |]).spread props

[<Erase>]
type SelectErrorMessage() =
    inherit Select.ErrorMessage()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        Select.ErrorMessage(class' = Lib.cn [|
            SelectLabel.variants(SelectLabel.Variant.Error)
            props.class'
        |]).spread props

[<AutoOpen; Erase>]
module SelectModularForms =
    [<Erase; RequireQualifiedAccess>]
    module ModularForms =
        type private DV = DefaultValueAttribute
        
        open Fable.Core.JsInterop
        open System
        type Select<'T> = Kobalte.Select<'T>

        [<Erase>]
        type SelectForm<'T when 'T: equality>() =
            inherit Select<'T>()
            [<DV>] val mutable label: string
            [<DV>] val mutable error: string
            [<DV>] val mutable private ref: Element
            [<DV>] val mutable onInput: (InputEvent -> unit)
            [<DV>] val mutable onBlur: (FocusEvent -> unit)
            [<DV>] val mutable mapOptionValue: ('T -> obj)
            [<DV>] val mutable mapOptionText: ('T -> string)
            [<SolidTypeComponent>]
            member props.constructor =
                let getValue, setValue = createSignal<'T>(Unchecked.defaultof<'T>)
                createEffect(fun () ->
                    setValue(props.options |> Array.tryFind( fun opt -> props.value = opt) |> unbox)
                )
                let rootProps, selectProps = splitProps(props, [|
                    "name"
                    "placeholder"
                    "options"
                    "required"
                    "disabled"
                |], [|
                    "onInput"
                    "onChange"
                    "onBlur"
                    "ref"
                    "placeholder"
                |])
                
                Kobalte.Select(
                    multiple = false
                    ,value = getValue()
                    ,onChange = !!setValue
                    ,optionValue = !!props.mapOptionValue
                    ,optionTextValue = !!props.mapOptionText
                    ,validationState = if !!props.error then ValidationState.Invalid else ValidationState.Valid
                    ,itemComponent = (fun comp ->
                        SelectItem(item = comp.item) { comp.item.textValue })
                ).spread(rootProps) {
                    Show(when' = !!props.label) {
                        SelectLabel() { props.label }
                    }
                    SelectHiddenSelect().spread selectProps
                    SelectTrigger() {
                        SelectValue<'T>() {
                            yield fun state ->
                                if isNullOrUndefined props.mapOptionText then
                                    state.selectedOption() |> unbox<HtmlElement>
                                else
                                    state.selectedOption() |> props.mapOptionText |> unbox<HtmlElement>
                        }
                    }
                    SelectContent()
                    SelectErrorMessage() { props.error }
                }

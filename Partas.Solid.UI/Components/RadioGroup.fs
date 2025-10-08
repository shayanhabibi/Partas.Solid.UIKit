namespace Partas.Solid.UI

open Partas.Solid
open Partas.Solid.Lucide
open Partas.Solid.Kobalte
open Fable.Core

[<Erase>]
type RadioGroup() =
    inherit Kobalte.RadioGroup()
    [<SolidTypeComponent>]
    member props.__ =
        Kobalte.RadioGroup(class' = Lib.cn [|
            "grid gap-3"; props.class'
        |])
            .dataSlot("radio-group")
            .spread(props)

[<Erase>]
type private RadioGroupItemControl() =
    inherit RadioGroup.ItemControl()
    [<SolidTypeComponentAttribute>]
    member private props.__ =
        RadioGroup.ItemControl(
            class' = "aspect-square size-4 rounded-full border border-primary
            text-primary ring-offset-background focus:outline-none
            focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
            disabled:cursor-not-allowed disabled:opacity-50").spread props

[<Erase>]
type private RadioGroupItemIndicator() =
    inherit RadioGroup.ItemIndicator()
    [<SolidTypeComponent>]
    member private props.__ =
        RadioGroup.ItemIndicator(class' = "flex h-full items-center justify-center").spread props

[<Erase>]
type private RadioGroupItem_() =
    inherit RadioGroup.Item()
    [<SolidTypeComponent>]
    member private props.__ =
        RadioGroup.Item(class' = Lib.cn [|
            "flex items-center space-x-2"
            props.class'
        |]).spread(props)

[<Erase>]
type RadioGroupItem() =
    inherit RadioGroup.Item()
    [<SolidTypeComponent>]
    member props.__ =
        RadioGroup.Item(class' = Lib.cn [|
            "flex items-center space-x-2"
            props.class'
        |]) .dataSlot("radio-group-item")
            .spread(props) {
            RadioGroup.ItemInput()
            RadioGroup.ItemControl(class' =
                "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 \
                aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 \
                aria-invalid:border-destructive dark:bg-input/30 aspect-square \
                data-[invalid]:ring-destructive/20 dark:data-[invalid]:ring-destructive/40 \
                data-[invalid]:border-destructive \
                size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] \
                outline-none focus-visible:ring-[3px] data-[disabled]:cursor-not-allowed \
                data-[disabled]:opacity-50"
                ) {
                RadioGroup.ItemIndicator(class' = "flex h-full items-center justify-center")
                    .dataSlot("radio-group-indicator")
                    { Lucide.Circle(class' = "size-2.5 fill-current text-current") }
            }
            props.children
        }
[<Erase>]
type RadioGroupItemLabel() =
    inherit RadioGroup.ItemLabel()
    [<SolidTypeComponent>]
    member props.__ =
        RadioGroup.ItemLabel(class' = Lib.cn [|
            "text-sm font-medium leading-none
            peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            props.class'
        |]).dataSlot("radio-group-label").spread(props)


[<Erase; AutoOpen>]
module RadioGroupModularForms =
    [<Erase; RequireQualifiedAccess>]
    module ModularForms =
        type private DV = DefaultValueAttribute
        
        open Fable.Core.JsInterop
        open Browser.Types
        
        [<Erase>]
        type RadioGroupForm() =
            inherit RadioGroup()
            [<DV>] val mutable name: string
            [<DV>] val mutable label: string
            [<DV>] val mutable value: string
            [<DV>] val mutable options: {|label:string; value:string|}[]
            [<DV>] val mutable error: string
            [<DV>] val mutable required: bool
            [<DV>] val mutable disabled: bool
            [<DV>] val mutable ref: Element
            [<DV>] val mutable onInput: (InputEvent -> unit)
            [<DV>] val mutable onChange: (Event -> unit)
            [<DV>] val mutable onBlur: (FocusEvent -> unit)
            [<SolidTypeComponent>]
            member props.__ =
                RadioGroup(
                    name = props.name
                    ,value = props.value
                    ,required = props.required
                    ,disabled = props.disabled
                    ,validationState = if !!props.error then ValidationState.Invalid else ValidationState.Valid
                ) {
                    Show(when' = !!props.label) {
                        Label() { props.label }
                    }
                    div() {
                        For(each = props.options) {
                            yield fun item _ ->
                                RadioGroupItem_(value = item.value) {
                                    RadioGroup.ItemInput(
                                        onInput = props.onInput
                                        ,onChange = props.onChange
                                        ,onBlur = props.onBlur
                                    ).ref(props.ref)
                                    RadioGroupItemControl() {
                                        RadioGroupItemIndicator() { Lucide.Circle(class' = "size-2.5 fill-current text-current") }
                                    }
                                    RadioGroupItemLabel() { item.label }
                                }
                        }
                    }
                    RadioGroup.ErrorMessage() { props.error }
                }

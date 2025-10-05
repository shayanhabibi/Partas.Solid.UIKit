namespace Partas.Solid.UI

open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core

[<Erase>]
type NumberField() =
    inherit Kobalte.NumberField()
    [<SolidTypeComponent>]
    member props.constructor = Kobalte.NumberField().spread props
    
[<Erase>]
type NumberFieldGroup() =
    inherit div()
    [<SolidTypeComponent>]
    member props.constructor =
        div(class' = Lib.cn [|
            "relative \
    shadow-xs rounded-md min-w-0 transition-[color,box-shadow] \
    input-border has-data-[disabled]:pointer-events-none \
    has-data-[disabled]:cursor-not-allowed has-data-[disabled]:opacity-50 \
    has-data-[invalid]:input-invalid-border \
    focus-within:input-focus-border"
            props.class'
        |]) .dataSlot("number-field-group")
            .spread props
[<Erase>]
type NumberFieldLabel() =
    inherit NumberField.Label()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.NumberField.Label(class'= Lib.cn [|
            "text-sm font-medium leading-none
            peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            props.class'
        |]) .dataSlot("number-field-label")
            .spread(props)
[<Erase>]
type NumberFieldInput() =
    inherit NumberField.Input()
    [<SolidTypeComponent>]
    member props.constructor =
        Kobalte.NumberField.Input(class' = Lib.cn [|
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary \
            selection:text-primary-foreground dark:bg-input/30 h-9 w-full \
            min-w-0 rounded-md bg-transparent px-3 py-1 text-base shadow-xs \
            transition-[color,box-shadow] outline-none file:inline-flex file:h-7 \
            file:border-0 file:bg-transparent file:text-sm file:font-medium \
            md:text-sm data-[disabled]:cursor-not-allowed data-[disabled]:pointer-events-none \
            data-[disabled]:selection-none"
            props.class'
        |]) .dataSlot("number-field-input")
            .spread props
[<Erase>]
type NumberFieldIncrementTrigger() =
    inherit NumberField.IncrementTrigger()
    [<SolidTypeComponent>]
    member props.constructor =
        let children,hasChildren = Lib.createChildrenResolver(props.children)
        Kobalte.NumberField.IncrementTrigger(class' = Lib.cn [|
            "absolute right-1 top-1 inline-flex size-4 items-center justify-center"
            props.class'
        |]) .dataSlot("number-field-increment-trigger")
            .spread(props) {
            if hasChildren() then children() else Lucide.Lucide.ChevronUp(class'="size-4")
        }
[<Erase>]
type NumberFieldDecrementTrigger() =
    inherit NumberField.DecrementTrigger()
    [<SolidTypeComponent>]
    member props.constructor =
        let children, hasChildren = Lib.createChildrenResolver(props.children)
        Kobalte.NumberField.DecrementTrigger(class' = Lib.cn [|
            "absolute bottom-1 right-1 inline-flex size-4 items-center justify-center"
            props.class'
        |]) .dataSlot("number-field-decrement-trigger")
            .spread(props) {
            if hasChildren() then children() else Lucide.Lucide.ChevronDown(class' = "size-4")
        }
[<Erase>]
type NumberFieldDescription() =
    inherit NumberField.Description()
    [<SolidTypeComponent>]
    member props.constructor =
        NumberField.Description(class'= Lib.cn [|
            "text-sm text-muted-foreground"; props.class'
        |]) .dataSlot("number-field-description")
            .spread props
[<Erase>]
type NumberFieldErrorMessage() =
    inherit NumberField.ErrorMessage()
    [<SolidTypeComponent>]
    member props.constructor =
        NumberField.ErrorMessage(class' = Lib.cn [|
            "text-sm text-error-foreground"
            props.class'
        |]) .dataSlot("number-field-error-message")
            .spread(props)


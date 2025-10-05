namespace Partas.Solid.UI

open Browser.Types
open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core

module TextField =
    [<StringEnum(CaseRules.KebabCase)>]
    type Type =
        | Button
        | Checkbox
        | Color
        | Date
        | DatetimeLocal
        | Email
        | File
        | Hidden
        | Image
        | Month
        | Number
        | Password
        | Radio
        | Range
        | Reset
        | Search
        | Submit
        | Tel
        | Text
        | Time
        | Url
        | Week
        
[<Erase>]
type TextField() =
    inherit Kobalte.TextField()
    static member variants(?variant: string): string =
        let variant = defaultArg variant "label"
        //tw
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group-disabled:opacity-70 group-disabled:cursor-not-allowed " +
        match variant with
        | "description" -> "font-normal text-muted-foreground"
        | "error" -> "text-xs text-destructive"
        | _ -> "data-[invalid]:text-destructive"
    [<SolidTypeComponentAttribute>]
    member props.construc =
        Kobalte.TextField(class' = Lib.cn [|
            "group flex flex-col gap-1"; props.class'
        |]) .dataSlot("text-field")
            .spread props

[<Erase>]
type TextFieldInput() =
    inherit TextField.Input()
    member val type': TextField.Type = unbox null with get,set
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        props.type' <- TextField.Text
        TextField.Input(class' = Lib.cn [|
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary \
            selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full \
            min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs \
            transition-[color,box-shadow] outline-none file:inline-flex file:h-7 \
            file:border-0 file:bg-transparent file:text-sm file:font-medium \
            data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 \
            md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 \
            focus-visible:ring-[3px] data-[invalid]:ring-destructive/20
            dark:data-[invalid]:ring-destructive/40 data-[invalid]:border-destructive"
            props.class'
        |], type' = unbox<string> props.type')
            .dataSlot("text-field-input")
            .spread props

[<Erase>]
type TextFieldTextArea() =
    inherit TextField.TextArea()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        TextField.TextArea(class' = Lib.cn [|
            "flex min-h-[80px] input-border w-full rounded-md \
            bg-transparent px-3 py-2 text-sm ring-offset-background \
            data-[invalid]:input-invalid-border placeholder:text-muted-foreground \
            focus-visible:input-focus-border \
            data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 transition-[color,box-shadow]"
            props.class'
        |]) .dataSlot("text-field-area")
            .spread props

[<Erase>]
type TextFieldLabel() =
    inherit TextField.Label()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        TextField.Label(class' = Lib.cn [|
            TextField.variants("label")
            props.class'
        |]) .dataSlot("text-field-label")
            .spread props

[<Erase>]
type TextFieldDescription() =
    inherit TextField.Description()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        TextField.Description(class' = Lib.cn [|
            TextField.variants("description")
            props.class'
        |]) .dataSlot("text-field-description")
            .spread props

[<Erase>]
type TextFieldErrorMessage() =
    inherit TextField.ErrorMessage()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        TextField.ErrorMessage(class' = Lib.cn [|
            TextField.variants("error"); props.class'
        |]) .dataSlot("text-field-error-message")
            .spread props

[<AutoOpen; Erase>]
module TextFieldModularForms =
    [<Erase; RequireQualifiedAccess>]
    module ModularForms =
        type private DV = DefaultValueAttribute
        
        [<RequireQualifiedAccess; StringEnum>]
        type TextFieldType =
            | Text
            | Email
            | Tel
            | Password
            | Url
            | Date

        open Fable.Core.JsInterop
        
        [<Erase>]
        type TextFieldForm() =
            inherit TextField()
            [<DV>] val mutable type': TextFieldType
            [<DV>] val mutable private ref: Element
            [<DV>] val mutable label: string
            [<DV>] val mutable placeholder: string
            [<DV>] val mutable error: string
            [<DV>] val mutable multiline: bool
            [<DV>] val mutable onInput: (InputEvent -> unit)
            [<DV>] val mutable onBlur: (FocusEvent -> unit)
            [<SolidTypeComponent>]
            member props.constructor =
                TextField(
                    name = props.name,
                    class' = props.class'
                    ,value = props.value
                    ,required = props.required
                    ,disabled = props.disabled
                    ,validationState = if unbox<bool> props.error then ValidationState.Invalid else ValidationState.Valid
                    ) {
                    Show(when' = unbox props.label) {
                        TextFieldLabel() { props.label }
                    }
                    Show(
                        when' = props.multiline
                        ,fallback= TextFieldInput(
                                placeholder = props.placeholder
                                ,value = props.value
                                ,onInput = props.onInput
                                ,onChange = !!props.onChange
                                ,onBlur = !!props.onBlur
                            ).ref(props.ref)
                        ) {
                        TextFieldTextArea(
                                placeholder = props.placeholder
                                ,onInput = props.onInput
                                ,onChange = !!props.onChange
                                ,onBlur = !!props.onBlur
                            ).ref(props.ref).bool("autoResize", true)
                    }
                    TextFieldErrorMessage() { props.error }
                }
            
            

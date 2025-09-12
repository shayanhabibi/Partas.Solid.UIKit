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
        Kobalte.TextField(class' = Lib.cn [| "group flex flex-col gap-1"; props.class' |])
            .spread props

[<Erase>]
type TextFieldInput() =
    inherit TextField.Input()
    member val type': TextField.Type = unbox null with get,set
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        props.type' <- TextField.Text
        TextField.Input(class' = Lib.cn [|
            "flex h-10 w-full rounded-md border border-input
            bg-transparent px-3 py-2 text-sm ring-offset-background
            file:border-0 file:bg-transparent file:text-sm file:font-medium
            placeholder:text-muted-foreground focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
            disabled:cursor-not-allowed disabled:opacity-50
            data-[invalid]:border-error-foreground data-[invalid]:text-error-foreground"
            props.class'
        |], type' = unbox<string> props.type').spread props

[<Erase>]
type TextFieldTextArea() =
    inherit TextField.TextArea()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        TextField.TextArea(class' = Lib.cn [|
            "flex min-h-[80px] w-full rounded-md border border-input
            bg-background px-3 py-2 text-sm ring-offset-background
            placeholder:text-muted-foreground focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
            disabled:cursor-not-allowed disabled:opacity-50"
            props.class'
        |]).spread props

[<Erase>]
type TextFieldLabel() =
    inherit TextField.Label()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        TextField.Label(class' = Lib.cn [|
            TextField.variants("label")
            props.class'
        |]).spread props

[<Erase>]
type TextFieldDescription() =
    inherit TextField.Description()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        TextField.Description(class' = Lib.cn [|
            TextField.variants("description")
            props.class'
        |]).spread props

[<Erase>]
type TextFieldErrorMessage() =
    inherit TextField.ErrorMessage()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        TextField.ErrorMessage(class' = Lib.cn [| TextField.variants("error"); props.class' |])
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
            
            

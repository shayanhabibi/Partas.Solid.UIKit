namespace Partas.Solid.UI
open Partas.Solid
open Fable.Core
open Fable.Core.JS
open Fable.Core.JsInterop

[<Erase>]
type FieldSet() =
    inherit fieldset()
    [<SolidTypeComponent>]
    member props.__ =
        fieldset(class' = Lib.cn [|
            "flex flex-col gap-6 \
            has-[>[data-slot=checkbox-group]]:gap-3 \
            has-[>[data-slot=radio-group]]:gap-3"
            props.class'
        |]) .dataSlot("field-set")
            .spread props

[<Erase>]
module FieldLegend =
    [<StringEnum>]
    type Variant =
        | Legend
        | Label
open FieldLegend
[<Erase>]
type FieldLegend() =
    inherit legend()
    [<Erase>]
    member val variant: Variant = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        legend(class' = Lib.cn [|
            "mb-3 font-medium \
            data-[variant=legend]:text-base \
            data-[variant=label]:text-sm"
            props.class'
        |]) .dataSlot("field-legend")
            .data("variant", string props.variant)
            .spread props

[<Erase>]
type FieldGroup() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "group/field-group @container/field-group flex w-full \
            flex-col gap-7 data-[slot=checkbox-group]:gap-3 \
            [&>[data-slot=field-group]]:gap-4"
            props.class'
        |]) .dataSlot("field-group")
            .spread props

[<Erase>]
module Field =
    [<StringEnum>]
    type Orientation =
        | Vertical
        | Horizontal
        | Responsive
open Partas.Solid.Aria
open Field
[<Erase>]
type Field() =
    inherit div()
    [<Erase>]
    member val orientation: Orientation = undefined with get,set
    static member variants(?orientation: Orientation) =
        let orientation = defaultArg orientation Vertical
        "group/field flex w-full gap-3 data-[invalid=true]:text-destructive"
        + " " +
        match orientation with
        | Horizontal -> "flex-row items-center [&>[data-slot=field-label]]:flex-auto \
                        has-[>[data-slot=field-content]]:items-start \
                        has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        | Vertical -> "flex-col [&>*]:w-full [&>.sr-only]:w-auto"
        | Responsive ->
              "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center \
              @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto \
              @md/field-group:has-[>[data-slot=field-content]]:items-start \
              @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
    [<SolidTypeComponent>]
    member props.__ =
        props.orientation <- Vertical
        div(class' = Lib.cn [|
            Field.variants(props.orientation)
            props.class'
        |], role = "group")
            .dataSlot("field")
            .data("orientation", string props.orientation)
            .spread props

[<Erase>]
type FieldContent() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "group/field-content flex flex-1 flex-col gap-1.5 leading-snug"
            props.class'
        |]) .dataSlot("field-content")
            .spread props

[<Erase>]
type FieldLabel() =
    inherit Label()
    [<SolidTypeComponent>]
    member props.__ =
        Partas.Solid.UI.Label(class' = Lib.cn [|
            "group/field-label peer/field-label flex w-fit gap-2 \
            leading-snug group-data-[disabled=true]/field:opacity-50 \
            has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col \
            has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4 \
            has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary \
            dark:has-data-[state=checked]:bg-primary/10 \
            has-data-[checked]:bg-primary/5 has-data-[checked]:border-primary \
            dark:has-data-[checked]:bg-primary/10"
            props.class'
        |]) .dataSlot("field-label")
            .spread props

[<Erase>]
type FieldTitle() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "flex w-fit items-center gap-2 text-sm leading-snug \
            font-medium group-data-[disabled=true]/field:opacity-50"
            props.class'
        |]) .dataSlot("field-label")
            .spread props

[<Erase>]
type FieldDescription() =
    inherit p()
    [<SolidTypeComponent>]
    member props.__ =
        p(class' = Lib.cn [|
            "text-muted-foreground text-sm leading-normal font-normal \
            group-has-[[data-orientation=horizontal]]/field:text-balance"
            "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5"
            "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4"
            props.class'
        |]) .dataSlot("field-description")
            .spread props

[<Erase>]
type FieldSeparator() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        let getChildren = children(fun () -> props.children)
        let hasContent () = !!getChildren() ??= true
        div(class' = Lib.cn [|
            "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2"
            props.class'
        |]) .dataSlot("field-separator")
            .data("content", !!hasContent())
            .spread props {
                Separator(class' = "absolute inset-0 top-1/2")
                Show(when' = hasContent()) {
                    span(class' =
                        "bg-background text-muted-foreground relative mx-auto block w-fit px-2"
                        ).dataSlot("field-separator-content") {
                        getChildren()
                    }
                }
            }

type IField =
    abstract error: string
open System
[<Erase>]
type FieldError() =
    inherit div()
    [<Erase>]
    member val errors: IField [] = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.errors <- [||]
        let content = children(fun () ->
            if !!props.children then props.children
            else
            if props.errors.Length = 0 then null
            else
            if props.errors.Length = 1 && !!props.errors[0].error
            then span() { props.errors[0].error }
            else
            let errors = props.errors |> Array.choose(_.error >> function
                | Null -> None
                | text -> Some text)
            ul(class' = "ml-4 flex list-disc flex-col gap-1") {
                For(each = errors) { yield fun text _ ->
                    li() { text }
                }
            }
            )
        Show(when' = !!content()) {
            div(class' = Lib.cn [|
                "text-destructive text-sm font-normal"
                props.class'
            |], role = "alert"
            ).dataSlot("field-error").spread props {
                content()
            }
        }
        

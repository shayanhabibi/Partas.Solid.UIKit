const r=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
\r
[<Erase>]\r
type FieldSet() =\r
    inherit fieldset()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        fieldset(class' = Lib.cn [|\r
            "flex flex-col gap-6 \\\r
            has-[>[data-slot=checkbox-group]]:gap-3 \\\r
            has-[>[data-slot=radio-group]]:gap-3"\r
            props.class'\r
        |]) .dataSlot("field-set")\r
            .spread props\r
\r
[<Erase>]\r
module FieldLegend =\r
    [<StringEnum>]\r
    type Variant =\r
        | Legend\r
        | Label\r
open FieldLegend\r
[<Erase>]\r
type FieldLegend() =\r
    inherit legend()\r
    [<Erase>]\r
    member val variant: Variant = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        legend(class' = Lib.cn [|\r
            "mb-3 font-medium \\\r
            data-[variant=legend]:text-base \\\r
            data-[variant=label]:text-sm"\r
            props.class'\r
        |]) .dataSlot("field-legend")\r
            .data("variant", string props.variant)\r
            .spread props\r
\r
[<Erase>]\r
type FieldGroup() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "group/field-group @container/field-group flex w-full \\\r
            flex-col gap-7 data-[slot=checkbox-group]:gap-3 \\\r
            [&>[data-slot=field-group]]:gap-4"\r
            props.class'\r
        |]) .dataSlot("field-group")\r
            .spread props\r
\r
[<Erase>]\r
module Field =\r
    [<StringEnum>]\r
    type Orientation =\r
        | Vertical\r
        | Horizontal\r
        | Responsive\r
open Partas.Solid.Aria\r
open Field\r
[<Erase>]\r
type Field() =\r
    inherit div()\r
    [<Erase>]\r
    member val orientation: Orientation = undefined with get,set\r
    static member variants(?orientation: Orientation) =\r
        let orientation = defaultArg orientation Vertical\r
        "group/field flex w-full gap-3 data-[invalid=true]:text-destructive"\r
        + " " +\r
        match orientation with\r
        | Horizontal -> "flex-row items-center [&>[data-slot=field-label]]:flex-auto \\\r
                        has-[>[data-slot=field-content]]:items-start \\\r
                        has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"\r
        | Vertical -> "flex-col [&>*]:w-full [&>.sr-only]:w-auto"\r
        | Responsive ->\r
              "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center \\\r
              @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto \\\r
              @md/field-group:has-[>[data-slot=field-content]]:items-start \\\r
              @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.orientation <- Vertical\r
        div(class' = Lib.cn [|\r
            Field.variants(props.orientation)\r
            props.class'\r
        |], role = "group")\r
            .dataSlot("field")\r
            .data("orientation", string props.orientation)\r
            .spread props\r
\r
[<Erase>]\r
type FieldContent() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "group/field-content flex flex-1 flex-col gap-1.5 leading-snug"\r
            props.class'\r
        |]) .dataSlot("field-content")\r
            .spread props\r
\r
[<Erase>]\r
type FieldLabel() =\r
    inherit Label()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        Partas.Solid.UI.Label(class' = Lib.cn [|\r
            "group/field-label peer/field-label flex w-fit gap-2 \\\r
            leading-snug group-data-[disabled=true]/field:opacity-50 \\\r
            has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col \\\r
            has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4 \\\r
            has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary \\\r
            dark:has-data-[state=checked]:bg-primary/10 \\\r
            has-data-[checked]:bg-primary/5 has-data-[checked]:border-primary \\\r
            dark:has-data-[checked]:bg-primary/10"\r
            props.class'\r
        |]) .dataSlot("field-label")\r
            .spread props\r
\r
[<Erase>]\r
type FieldTitle() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex w-fit items-center gap-2 text-sm leading-snug \\\r
            font-medium group-data-[disabled=true]/field:opacity-50"\r
            props.class'\r
        |]) .dataSlot("field-label")\r
            .spread props\r
\r
[<Erase>]\r
type FieldDescription() =\r
    inherit p()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        p(class' = Lib.cn [|\r
            "text-muted-foreground text-sm leading-normal font-normal \\\r
            group-has-[[data-orientation=horizontal]]/field:text-balance"\r
            "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5"\r
            "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4"\r
            props.class'\r
        |]) .dataSlot("field-description")\r
            .spread props\r
\r
[<Erase>]\r
type FieldSeparator() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        let getChildren = children(fun () -> props.children)\r
        let hasContent () = !!getChildren() ??= true\r
        div(class' = Lib.cn [|\r
            "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2"\r
            props.class'\r
        |]) .dataSlot("field-separator")\r
            .data("content", !!hasContent())\r
            .spread props {\r
                Separator(class' = "absolute inset-0 top-1/2")\r
                Show(when' = hasContent()) {\r
                    span(class' =\r
                        "bg-background text-muted-foreground relative mx-auto block w-fit px-2"\r
                        ).dataSlot("field-separator-content") {\r
                        getChildren()\r
                    }\r
                }\r
            }\r
\r
type IField =\r
    abstract error: string\r
open System\r
[<Erase>]\r
type FieldError() =\r
    inherit div()\r
    [<Erase>]\r
    member val errors: IField [] = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.errors <- [||]\r
        let content = children(fun () ->\r
            if !!props.children then props.children\r
            else\r
            if props.errors.Length = 0 then null\r
            else\r
            if props.errors.Length = 1 && !!props.errors[0].error\r
            then span() { props.errors[0].error }\r
            else\r
            let errors = props.errors |> Array.choose(_.error >> function\r
                | Null -> None\r
                | text -> Some text)\r
            ul(class' = "ml-4 flex list-disc flex-col gap-1") {\r
                For(each = errors) { yield fun text _ ->\r
                    li() { text }\r
                }\r
            }\r
            )\r
        Show(when' = !!content()) {\r
            div(class' = Lib.cn [|\r
                "text-destructive text-sm font-normal"\r
                props.class'\r
            |], role = "alert"\r
            ).dataSlot("field-error").spread props {\r
                content()\r
            }\r
        }\r
        \r
`;export{r as L};

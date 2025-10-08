const r=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Browser.Types\r
open Partas.Solid\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
open Partas.Solid.Aria\r
\r
[<Erase>]\r
type InputGroup() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(role = "group",\r
        class' = Lib.cn [|\r
            "group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md \\\r
            border shadow-xs transition-[color,box-shadow] outline-none"\r
            "h-9 min-w-0 has-[>textarea]:h-auto"\r
            // Variants based on alignment.\r
            "has-[>[data-align=inline-start]]:[&>input]:pl-2"\r
            "has-[>[data-align=inline-end]]:[&>input]:pr-2"\r
            "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col \\\r
            has-[>[data-align=block-start]]:[&>input]:pb-3"\r
            "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col \\\r
            has-[>[data-align=block-end]]:[&>input]:pt-3"\r
            // Focus state.\r
            "has-[[data-slot=input-group-control]:focus-visible]:border-ring \\\r
            has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 \\\r
            has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]"\r
            // Error state.\r
            "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 \\\r
            has-[[data-slot][aria-invalid=true]]:border-destructive \\\r
            dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40"\r
            props.class'\r
        |]) .dataSlot("input-group")\r
            .spread props\r
\r
[<Erase>]\r
module InputGroupAddon =\r
    [<StringEnum(CaseRules.KebabCase)>]\r
    type Align =\r
        | InlineStart\r
        | InlineEnd\r
        | BlockStart\r
        | BlockEnd\r
open InputGroupAddon\r
[<Erase>]\r
type InputGroupAddon() =\r
    inherit div()\r
    [<Erase>]\r
    member val align: Align = undefined with get,set\r
    static member variants (?align: Align) =\r
        let align = defaultArg align InlineStart\r
        "text-muted-foreground flex h-auto cursor-text items-center \\\r
        justify-center gap-2 py-1.5 text-sm font-medium select-none \\\r
        [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] \\\r
        group-data-[disabled=true]/input-group:opacity-50"\r
        + " " +\r
        match align with\r
        | InlineStart -> \r
            "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]"\r
        | InlineEnd -> \r
            "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]"\r
        | BlockStart -> \r
            "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 \\\r
            group-has-[>input]/input-group:pt-2.5"\r
        | BlockEnd -> \r
            "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 \\\r
            group-has-[>input]/input-group:pb-2.5"\r
\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.align <- InlineStart\r
        div(role = "group",\r
            class' = Lib.cn [|\r
                InputGroupAddon.variants(props.align)\r
                props.class'\r
            |],\r
            onClick = fun e ->\r
                let target = unbox<HTMLElement> e.target\r
                if target.closest("button").IsSome then\r
                    ()\r
                else\r
                    e.currentTarget\r
                    |> unbox<HTMLElement>\r
                    |> _.parentElement\r
                    |> Option.ofObj\r
                    |> Option.bind (_.querySelector("input") >> Option.ofObj)\r
                    |> Option.iter (unbox<HTMLInputElement> >> _.focus())\r
        )   .dataSlot("input-group-addon")\r
            .data("align", string props.align)\r
            .spread props\r
\r
[<Erase>]\r
module InputGroupButton =\r
    [<StringEnum(CaseRules.KebabCase)>]\r
    type Size =\r
        | ExtraSmall\r
        | Small\r
        | IconExtraSmall\r
        | IconSmall\r
    type Variant = Button.Variant\r
\r
open InputGroupButton\r
\r
[<Erase>]\r
type InputGroupButton() =\r
    inherit Button()\r
    [<Erase>]\r
    member val size: Size = undefined with get,set\r
    static member variants(?size: Size) =\r
        let size = defaultArg size ExtraSmall\r
        "text-sm shadow-none flex gap-2 items-center"\r
        + " " +\r
        match size with\r
        | ExtraSmall -> \r
            "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2"\r
        | Small -> \r
            "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5"\r
        | IconExtraSmall -> \r
            "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0"\r
        | IconSmall -> \r
            "size-8 p-0 has-[>svg]:p-0"\r
\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.type' <- "button"\r
        props.variant <- Variant.Ghost\r
        props.size <- Size.ExtraSmall\r
        Button(variant = props.variant,\r
        class' = Lib.cn [|\r
            InputGroupButton.variants(props.size)\r
            props.class'\r
        |]) .data("size", string props.size)\r
            .spread props\r
\r
[<Erase>]\r
type InputGroupText() =\r
    inherit span()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        span(class' = Lib.cn [|\r
            "text-muted-foreground flex items-center gap-2 text-sm \\\r
            [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4"\r
            props.class'\r
        |]).spread props\r
        \r
[<Erase>]\r
type InputGroupInput() =\r
    inherit TextFieldInput()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        TextFieldInput(\r
            class' = Lib.cn [|\r
                "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent"\r
                props.class'\r
            |]\r
        )   .dataSlot("input-group-control")\r
            .spread props\r
type InputGroupTextField = InputGroupInput\r
\r
[<Erase>]\r
type InputGroupTextArea() =\r
    inherit textarea()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        TextFieldTextArea(class' = Lib.cn [|\r
            "flex-1 resize-none rounded-none border-0 bg-transparent py-3 \\\r
            shadow-none focus-visible:ring-0 dark:bg-transparent"\r
            props.class'\r
        |]) .dataSlot("input-group-control")\r
            .spread props\r
`;export{r as M};

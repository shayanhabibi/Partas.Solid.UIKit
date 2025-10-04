namespace Partas.Solid.UI

open Browser.Types
open Partas.Solid
open Fable.Core
open Fable.Core.JS
open Fable.Core.JsInterop
open Partas.Solid.Aria

[<Erase>]
type InputGroup() =
    inherit div()
    [<SolidTypeComponent>]
    member props.__ =
        div(role = "group",
        class' = Lib.cn [|
            "group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none"
            "h-9 has-[>textarea]:h-auto"
            // Variants based on alignment.
            "has-[>[data-align=inline-start]]:[&>input]:pl-2"
            "has-[>[data-align=inline-end]]:[&>input]:pr-2"
            "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3"
            "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3"
            // Focus state.
            "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]"
            // Error state.
            "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40"
            
            props.class'
        |]) .dataSlot("input-group")
            .spread props

[<Erase>]
module InputGroupAddon =
    [<StringEnum(CaseRules.KebabCase)>]
    type Align =
        | InlineStart
        | InlineEnd
        | BlockStart
        | BlockEnd
open InputGroupAddon
[<Erase>]
type InputGroupAddon() =
    inherit div()
    [<Erase>]
    member val align: Align = undefined with get,set
    static member variants (?align: Align) =
        let align = defaultArg align InlineStart
        "text-muted-foreground flex h-auto cursor-text items-center \
        justify-center gap-2 py-1.5 text-sm font-medium select-none \
        [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] \
        group-data-[disabled=true]/input-group:opacity-50"
        + " " +
        match align with
        | InlineStart -> 
            "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]"
        | InlineEnd -> 
            "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]"
        | BlockStart -> 
            "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 \
            group-has-[>input]/input-group:pt-2.5"
        | BlockEnd -> 
            "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 \
            group-has-[>input]/input-group:pb-2.5"

    [<SolidTypeComponent>]
    member props.__ =
        props.align <- InlineStart
        div(role = "group",
            class' = Lib.cn [|
                InputGroupAddon.variants(props.align)
                props.class'
            |],
            onClick = fun e ->
                let target = unbox<HTMLElement> e.target
                if target.closest("button").IsSome then
                    ()
                else
                    e.currentTarget
                    |> unbox<HTMLElement>
                    |> _.parentElement
                    |> Option.ofObj
                    |> Option.bind (_.querySelector("input") >> Option.ofObj)
                    |> Option.iter (unbox<HTMLInputElement> >> _.focus())
        )   .dataSlot("input-group-addon")
            .data("align", string props.align)
            .spread props

[<Erase>]
module InputGroupButton =
    [<StringEnum(CaseRules.KebabCase)>]
    type Size =
        | ExtraSmall
        | Small
        | IconExtraSmall
        | IconSmall
    type Variant = Button.Variant

open InputGroupButton

[<Erase>]
type InputGroupButton() =
    inherit Button()
    [<Erase>]
    member val size: Size = undefined with get,set
    static member variants(?size: Size) =
        let size = defaultArg size ExtraSmall
        "text-sm shadow-none flex gap-2 items-center"
        + " " +
        match size with
        | ExtraSmall -> 
            "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2"
        | Small -> 
            "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5"
        | IconExtraSmall -> 
            "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0"
        | IconSmall -> 
            "size-8 p-0 has-[>svg]:p-0"

    [<SolidTypeComponent>]
    member props.__ =
        props.type' <- "button"
        props.variant <- Variant.Ghost
        props.size <- Size.ExtraSmall
        Button(variant = props.variant,
        class' = Lib.cn [|
            InputGroupButton.variants(props.size)
            props.class'
        |]) .data("size", string props.size)
            .spread props

[<Erase>]
type InputGroupText() =
    inherit span()
    [<SolidTypeComponent>]
    member props.__ =
        span(class' = Lib.cn [|
            "text-muted-foreground flex items-center gap-2 text-sm \
            [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4"
            props.class'
        |]).spread props
        
[<Erase>]
type InputGroupInput() =
    inherit input()
    [<SolidTypeComponent>]
    member props.__ =
        TextField(
            class' = Lib.cn [|
                "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent"
                props.class'
            |]
        )   .dataSlot("input-group-control")
            .spread props
type InputGroupTextField = InputGroupInput

[<Erase>]
type InputGroupTextArea() =
    inherit textarea()
    [<SolidTypeComponent>]
    member props.__ =
        TextFieldTextArea(class' = Lib.cn [|
            "flex-1 resize-none rounded-none border-0 bg-transparent py-3 \
            shadow-none focus-visible:ring-0 dark:bg-transparent"
            props.class'
        |]) .dataSlot("input-group-control")
            .spread props

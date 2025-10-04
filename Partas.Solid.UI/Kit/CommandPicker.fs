namespace Partas.Solid.UI
open Partas.Solid.Lucide
open Partas.Solid.Kobalte
open Partas.Solid.Polymorphism
open Partas.Solid
open Partas.Solid.UI
open Fable.Core
open Fable.Core.JsInterop
open Fable.Core.JS
open Partas.Solid.Experimental
open System
open Partas.Solid.Primitives

[<Erase>]
module CommandPicker =
    [<RequireQualifiedAccess>]
    type Direction =
        | Left
        | Right

[<Erase>]
type CommandPicker<'Data when 'Data: equality and 'Data: not struct and 'Data: not null>() =
    inherit div()
    [<Erase>]
    member val value: 'Data = undefined with get,set
    [<Erase>]
    member val onValueChange: ('Data -> unit) = undefined with get,set
    [<Erase>]
    member val label: U2<string, #HtmlElement> = undefined with get,set
    [<Erase>]
    member val options: 'Data[] = undefined with get,set
    [<Erase>]
    member val mapOptionsLabel: ('Data -> string) = undefined with get,set
    [<Erase>]
    member val mapOptionsDisabled: ('Data -> bool) = undefined with get,set
    [<Erase>]
    member val mapOptionsIcon: (string -> HtmlElement) = undefined with get,set
    [<Erase>]
    member val mapOptionsAccentLabel: ('Data -> string) = undefined with get,set
    [<Erase>]
    member val buttonVariant: Button.Variant = undefined with get,set
    [<Erase>]
    member val buttonSize: Button.Size = undefined with get,set
    [<Erase>]
    member val buttonClass: string = undefined with get,set
    [<Erase>]
    member val direction: CommandPicker.Direction = undefined with get,set
    [<Erase>]
    member val onSave: ('Data -> unit) = undefined with get,set
    [<Erase>]
    member val loading: bool = undefined with get,set
    [<Erase>]
    member val disabled: bool = undefined with get,set
    [<Erase>]
    member val shortcut: string = undefined with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.options <- [||]
        props.mapOptionsLabel <- fun opt -> opt.ToString()
        props.mapOptionsDisabled <- fun _ -> false
        props.mapOptionsAccentLabel <- fun _ -> null
        props.buttonVariant <- Button.Variant.Ghost
        props.buttonSize <- Button.Size.Small
        props.direction <- CommandPicker.Direction.Left
        let value_,setValue_ = createSignal<'Data>(Unchecked.defaultof<'Data>)
        let value () = if !!props.value then props.value else value_()
        let setValue value = if !!props.onValueChange then props.onValueChange value else setValue_ value
        let popoverOpen,setPopoverOpen = createSignal false
        let closePopover () = setPopoverOpen false
        if !!props.shortcut then
            Keyboard.createShortcut(
                [| "Alt" ; props.shortcut|]
                ,fun _ -> setPopoverOpen.Invoke not
            )
        let onSave () =
            if !!props.onSave
            then value() |> props.onSave
            else setValue undefined
        let inline popoverTriggerRender () =
            Fragment() {
                CirclePlus(class' = Lib.cn [|
                    "transition-transform duration-400"
                    if !!value() then "rotate-45" else ""
                |] )
                if !!value() then
                    Badge(variant = Badge.Variant.Secondary, class' = "rounded-sm px-1") {
                        value() |> props.mapOptionsLabel
                    }
                else
                    !!props.label
            }            
        let inline commandGroupRender () =
            For(each = props.options) {
                yield fun opt _ ->
                    CommandItems(
                        disabled = props.mapOptionsDisabled opt
                        ,onSelect = (fun _ ->
                            if opt = value() then
                                setValue !!null
                            else
                                setValue opt
                                closePopover()
                            )
                        ) {
                        div(class' = Lib.cn [|
                            "mr-2 flex size-4 items-center justify-center rounded-sm border border-primary"
                            if value() = opt then "bg-primary text-primary-foreground"
                            else "opacity-50 [&_svg]:invisible"
                        |]) {
                            Check()
                        }
                        Show(when' = !!props.mapOptionsIcon, keyed = true) {
                            props.mapOptionsIcon "mr-2 size-4 text-muted-foreground"
                        }
                        span() { opt |> props.mapOptionsLabel}
                        Show(when' = !!value()) {
                            span(class' = "ml-auto flex size-4 items-center justify-center font-mono text-xs") {
                                value() |> props.mapOptionsAccentLabel
                            }
                        }
                    }
            } 
        let inline commandFooterRender () =
            Show(when' = (value() |> unbox)) {
                Fragment() {
                    CommandSeparators()
                    CommandGroups() {
                        CommandItems(
                            onSelect = (fun _ -> setValue(undefined))
                            ,class' = "justify-center text-center"
                            ) {
                            "Clear Selection"
                        }
                    }
                }
            }
        Popover(open' = popoverOpen(), onOpenChange = setPopoverOpen,placement = !!"bottom-start") {
            div(class' = "group inline-flex border-border border-1 rounded-md h-8 items-center transition-all
                        data-[direction=left]:flex-row-reverse")
                .data("direction", !!props.direction) {
                PopoverTrigger(disabled = props.disabled).as'(Button(variant = props.buttonVariant, size = props.buttonSize,
                                            class' = Lib.cn [|
                                                "h-8 border-0
                                                group-data-[direction=left]:flex-row-reverse"
                                                props.buttonClass
                                                if !!value()
                                                then "group-data-[direction=right]:rounded-r-none
                                                      group-data-[direction=left]:rounded-l-none"
                                            |])) {
                    popoverTriggerRender()
                }
                div(
                    class' = "inline-flex data-[state=closed]:w-0 w-14 truncate items-center transition-all
                              group-data-[direction=left]:flex-row-reverse"
                ).data("state", if !!value() then "open" else "closed") {
                    Separator(orientation = Orientation.Vertical, class' = "h-4 z-0")
                    Button(disabled = props.loading, onClick = fun _ -> onSave()
                           ,variant = Button.Variant.Default, size = Button.Size.Small,
                           class' = "group-data-[direction=right]:rounded-l-none
                                    group-data-[direction=left]:rounded-r-none
                                    h-8 w-14 border-0 my-[1px]"
                    ) {
                        if props.loading then
                            LoaderCircle(class' = "animate-spin")
                        else "Save"
                    }
                }
            }
            PopoverContent(class' = "w-[200px] p-0") {
                Command() {
                    CommandInputs(disabled = props.disabled, placeholder = props.title)
                    CommandLists() {
                        CommandEmptys() {
                            if !!props.children
                            then props.children
                            else "No results found."
                        }
                        CommandGroups() {
                            commandGroupRender()
                        }
                        commandFooterRender()
                    }
                }
            }
        }

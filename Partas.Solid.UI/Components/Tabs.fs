namespace Partas.Solid.UI
open Partas.Solid
open Partas.Solid.Kobalte
open Fable.Core

[<Erase>]
type Tabs() =
    inherit Kobalte.Tabs()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        Kobalte.Tabs(class' = Lib.cn [|
            "flex flex-col gap-2"
            props.class'
        |])
            .dataSlot("tabs")
            .spread props

[<Erase>]
type TabsList() =
    inherit Tabs.List()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        Tabs.List(class' = Lib.cn [|
            "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]"
            // "relative inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
            props.class'
        |]) .dataSlot("tabs-list")
            .spread props

[<Erase>]
type TabsTrigger() =
    inherit Tabs.Trigger()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        Tabs.Trigger(class' = Lib.cn [|
            "data-[selected]:bg-background dark:data-[selected]:text-foreground \
            focus-visible:input-focus-border \
            dark:data-[selected]:border-input dark:data-[selected]:bg-input/30 \
            data-[selected]:text-foreground \
            text-muted-foreground \
            dark:text-muted-foreground inline-flex h-[calc(100%-1px)] \
            flex-1 items-center justify-center gap-1.5 rounded-md input-border \
            border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap
            transition-[color,box-shadow] focus-visible:outline-1 disabled:pointer-events-none \
            disabled:opacity-50 data-[selected]:shadow-sm [&_svg]:pointer-events-none \
            [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            // "inline-flex items-center justify-center whitespace-nowrap
            // rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background
            // transition-all focus-visible:outline-none focus-visible:ring-2
            // focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
            // disabled:opacity-50 data-[selected]:bg-background
            // data-[selected]:text-foreground data-[selected]:shadow-sm"
            props.class'
        |]) .dataSlot("tabe-trigger")
            .spread props

[<Erase>]
type TabsContent() =
    inherit Tabs.Content()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        Tabs.Content(class' = Lib.cn [|
            "flex-1 outline-none transition-[color,box-shadow] focus-visible:input-focus-border"
            props.class'
        |]) .dataSlot("tabs-content")
            .spread props

[<Erase>]
type TabsIndicator() =
    inherit Tabs.Indicator()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        Tabs.Indicator(class' = Lib.cn [|
            "duration-250ms absolute transition-all data-[orientation=horizontal]:-bottom-px
            data-[orientation=vertical]:-right-px data-[orientation=horizontal]:h-[2px]
            data-[orientation=vertical]:w-[2px]"
            props.class'
        |]) .dataSlot("tabs-indicator")
            .spread props

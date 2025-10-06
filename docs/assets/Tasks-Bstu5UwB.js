import{G as n}from"./iframe-BLvaHOrW.js";import{useMDXComponents as o}from"./index-DMt2PYli.js";import"./preload-helper-PPVm8Dsz.js";const s=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Partas.Solid.Primitives\r
open Partas.Solid.Kobalte\r
open Partas.Solid.UI\r
open Partas.Solid.Polymorphism\r
open Fable.Core\r
open Fable.Core.JsInterop\r
open Fable.Core.JS\r
\r
[<Erase>]\r
module AdvButton =\r
    [<StringEnum; RequireQualifiedAccess>]\r
    type Position =\r
        | Left\r
        | Right\r
\r
[<Erase>]\r
type AdvButton() =\r
    inherit Button()\r
    [<Erase>]\r
    member val shortcut: string = undefined with get,set\r
    [<Erase>]\r
    member val shortcutAction: (unit -> unit) = undefined with get,set\r
    [<Erase>]\r
    member val tooltip: string = undefined with get,set\r
    [<Erase>]\r
    member val icon: HtmlElement = undefined with get,set\r
    [<Erase>]\r
    member val iconPosition: AdvButton.Position = undefined with get,set\r
    [<Erase>]\r
    member val label: string = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.iconPosition <- AdvButton.Position.Left\r
        Keyboard.createShortcut(\r
            [| "Alt"; props.shortcut |]\r
            ,props.shortcutAction\r
        )\r
        let labelText =\r
            if !!props.label then\r
                props.label.Replace(props.shortcut, !!(span(class' = "underline") { props.shortcut }))\r
            else\r
                ""\r
        let labelSpan = span() { labelText }\r
        Button().spread props {\r
            Show(when' = props.iconPosition.IsRight, fallback = props.icon) {\r
                labelSpan\r
                props.children\r
            }\r
            Show(when' = props.iconPosition.IsLeft, fallback = props.icon) {\r
                labelSpan\r
                props.children\r
                \r
            }\r
        }\r
`,l=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid.Lucide\r
open Partas.Solid.Kobalte\r
open Partas.Solid.Polymorphism\r
open Partas.Solid\r
open Partas.Solid.UI\r
open Fable.Core\r
open Fable.Core.JsInterop\r
open Fable.Core.JS\r
open Partas.Solid.Experimental\r
open System\r
open Partas.Solid.Primitives\r
\r
[<Erase>]\r
module CommandPicker =\r
    [<RequireQualifiedAccess>]\r
    type Direction =\r
        | Left\r
        | Right\r
\r
[<Erase>]\r
type CommandPicker<'Data when 'Data: equality and 'Data: not struct and 'Data: not null>() =\r
    inherit div()\r
    [<Erase>]\r
    member val value: 'Data = undefined with get,set\r
    [<Erase>]\r
    member val onValueChange: ('Data -> unit) = undefined with get,set\r
    [<Erase>]\r
    member val label: U2<string, #HtmlElement> = undefined with get,set\r
    [<Erase>]\r
    member val options: 'Data[] = undefined with get,set\r
    [<Erase>]\r
    member val mapOptionsLabel: ('Data -> string) = undefined with get,set\r
    [<Erase>]\r
    member val mapOptionsDisabled: ('Data -> bool) = undefined with get,set\r
    [<Erase>]\r
    member val mapOptionsIcon: (string -> HtmlElement) = undefined with get,set\r
    [<Erase>]\r
    member val mapOptionsAccentLabel: ('Data -> string) = undefined with get,set\r
    [<Erase>]\r
    member val buttonVariant: Button.Variant = undefined with get,set\r
    [<Erase>]\r
    member val buttonSize: Button.Size = undefined with get,set\r
    [<Erase>]\r
    member val buttonClass: string = undefined with get,set\r
    [<Erase>]\r
    member val direction: CommandPicker.Direction = undefined with get,set\r
    [<Erase>]\r
    member val onSave: ('Data -> unit) = undefined with get,set\r
    [<Erase>]\r
    member val loading: bool = undefined with get,set\r
    [<Erase>]\r
    member val disabled: bool = undefined with get,set\r
    [<Erase>]\r
    member val shortcut: string = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.options <- [||]\r
        props.mapOptionsLabel <- fun opt -> opt.ToString()\r
        props.mapOptionsDisabled <- fun _ -> false\r
        props.mapOptionsAccentLabel <- fun _ -> null\r
        props.buttonVariant <- Button.Variant.Ghost\r
        props.buttonSize <- Button.Size.Small\r
        props.direction <- CommandPicker.Direction.Left\r
        let value_,setValue_ = createSignal<'Data>(Unchecked.defaultof<'Data>)\r
        let value () = if !!props.value then props.value else value_()\r
        let setValue value = if !!props.onValueChange then props.onValueChange value else setValue_ value\r
        let popoverOpen,setPopoverOpen = createSignal false\r
        let closePopover () = setPopoverOpen false\r
        if !!props.shortcut then\r
            Keyboard.createShortcut(\r
                [| "Alt" ; props.shortcut|]\r
                ,fun _ -> setPopoverOpen.Invoke not\r
            )\r
        let onSave () =\r
            if !!props.onSave\r
            then value() |> props.onSave\r
            else setValue undefined\r
        let inline popoverTriggerRender () =\r
            Fragment() {\r
                CirclePlus(class' = Lib.cn [|\r
                    "transition-transform duration-400"\r
                    if !!value() then "rotate-45" else ""\r
                |] )\r
                if !!value() then\r
                    Badge(variant = Badge.Variant.Secondary, class' = "rounded-sm px-1") {\r
                        value() |> props.mapOptionsLabel\r
                    }\r
                else\r
                    !!props.label\r
            }            \r
        let inline commandGroupRender () =\r
            For(each = props.options) {\r
                yield fun opt _ ->\r
                    CommandItems(\r
                        disabled = props.mapOptionsDisabled opt\r
                        ,onSelect = (fun _ ->\r
                            if opt = value() then\r
                                setValue !!null\r
                            else\r
                                setValue opt\r
                                closePopover()\r
                            )\r
                        ) {\r
                        div(class' = Lib.cn [|\r
                            "mr-2 flex size-4 items-center justify-center rounded-sm border border-primary"\r
                            if value() = opt then "bg-primary text-primary-foreground"\r
                            else "opacity-50 [&_svg]:invisible"\r
                        |]) {\r
                            Check()\r
                        }\r
                        Show(when' = !!props.mapOptionsIcon, keyed = true) {\r
                            props.mapOptionsIcon "mr-2 size-4 text-muted-foreground"\r
                        }\r
                        span() { opt |> props.mapOptionsLabel}\r
                        Show(when' = !!value()) {\r
                            span(class' = "ml-auto flex size-4 items-center justify-center font-mono text-xs") {\r
                                value() |> props.mapOptionsAccentLabel\r
                            }\r
                        }\r
                    }\r
            } \r
        let inline commandFooterRender () =\r
            Show(when' = (value() |> unbox)) {\r
                Fragment() {\r
                    CommandSeparators()\r
                    CommandGroups() {\r
                        CommandItems(\r
                            onSelect = (fun _ -> setValue(undefined))\r
                            ,class' = "justify-center text-center"\r
                            ) {\r
                            "Clear Selection"\r
                        }\r
                    }\r
                }\r
            }\r
        Popover(open' = popoverOpen(), onOpenChange = setPopoverOpen,placement = !!"bottom-start") {\r
            div(class' = "group inline-flex border-border border-1 rounded-md h-8 items-center transition-all\r
                        data-[direction=left]:flex-row-reverse")\r
                .data("direction", !!props.direction) {\r
                PopoverTrigger(disabled = props.disabled).as'(Button(variant = props.buttonVariant, size = props.buttonSize,\r
                                            class' = Lib.cn [|\r
                                                "h-8 border-0\r
                                                group-data-[direction=left]:flex-row-reverse"\r
                                                props.buttonClass\r
                                                if !!value()\r
                                                then "group-data-[direction=right]:rounded-r-none\r
                                                      group-data-[direction=left]:rounded-l-none"\r
                                            |])) {\r
                    popoverTriggerRender()\r
                }\r
                div(\r
                    class' = "inline-flex data-[state=closed]:w-0 w-14 truncate items-center transition-all\r
                              group-data-[direction=left]:flex-row-reverse"\r
                ).data("state", if !!value() then "open" else "closed") {\r
                    Separator(orientation = Orientation.Vertical, class' = "h-4 z-0")\r
                    Button(disabled = props.loading, onClick = fun _ -> onSave()\r
                           ,variant = Button.Variant.Default, size = Button.Size.Small,\r
                           class' = "group-data-[direction=right]:rounded-l-none\r
                                    group-data-[direction=left]:rounded-r-none\r
                                    h-8 w-14 border-0 my-[1px]"\r
                    ) {\r
                        if props.loading then\r
                            LoaderCircle(class' = "animate-spin")\r
                        else "Save"\r
                    }\r
                }\r
            }\r
            PopoverContent(class' = "w-[200px] p-0") {\r
                Command() {\r
                    CommandInputs(disabled = props.disabled, placeholder = props.title)\r
                    CommandLists() {\r
                        CommandEmptys() {\r
                            if !!props.children\r
                            then props.children\r
                            else "No results found."\r
                        }\r
                        CommandGroups() {\r
                            commandGroupRender()\r
                        }\r
                        commandFooterRender()\r
                    }\r
                }\r
            }\r
        }\r
`,i=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid.Lucide\r
open Partas.Solid.Kobalte\r
open Partas.Solid.Polymorphism\r
open Partas.Solid\r
open Partas.Solid.UI\r
open Fable.Core\r
open Fable.Core.JsInterop\r
open Fable.Core.JS\r
open Partas.Solid.Experimental\r
open System\r
\r
[<Pojo>]\r
type FacetedFilterOptions<'T>(\r
        label: string,\r
        value: 'T,\r
        ?selectLabel: string,\r
        ?icon: ({| \`\`class\`\`: string |} -> HtmlElement)\r
    ) =\r
    member val label = label with get,set\r
    member val selectLabel = selectLabel with get,set\r
    member val value = value with get,set\r
    member val icon = icon.Value with get,set\r
\r
[<Erase>]\r
type FacetedFilter<'Data when 'Data: equality>() =\r
    inherit div()\r
    [<Erase>]\r
    member val value: 'Data = undefined with get,set\r
    [<Erase>]\r
    member val onValueChange: ('Data -> unit) = undefined with get,set\r
    [<Erase>]\r
    member val label: string = undefined with get,set\r
    [<Erase>]\r
    member val options: FacetedFilterOptions<'Data>[] = undefined with get,set\r
    [<Erase>]\r
    member val buttonVariant: Button.Variant = undefined with get,set\r
    [<Erase>]\r
    member val buttonSize: Button.Size = undefined with get,set\r
    [<Erase>]\r
    member val buttonClass: string = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.options <- [||]\r
        props.buttonVariant <- Button.Variant.Outline\r
        props.buttonSize <- Button.Size.Small\r
        let value_,setValue_ = createSignal<'Data>(Unchecked.defaultof<'Data>)\r
        let value () = if !!props.value then props.value else value_()\r
        let setValue value = if !!props.onValueChange then props.onValueChange value else setValue_ value\r
        let selectedValue = memo {\r
            props.options\r
            |> Array.tryFind (fun opt -> value() = opt.value)\r
        }\r
        \r
        Popover(placement = !!"bottom-start") {\r
            PopoverTrigger().as'(Button(variant = props.buttonVariant, size = props.buttonSize, class' = Lib.cn [| "h-8 border-dashed"; props.buttonClass |])) {\r
                CirclePlus()\r
                props.label\r
                Show(when' = !!selectedValue()) {\r
                    Separator(orientation = Orientation.Vertical, class' = "mx-2 h-4")\r
                    div(class' = "hidden space-x-1 lg:flex") {\r
                        Badge(variant = Badge.Variant.Secondary, class' = "rounded-sm px-1") {\r
                            selectedValue() |> Option.map _.label |> Option.defaultValue ""\r
                        }\r
                            \r
                    }\r
                }\r
            }\r
            PopoverContent(class' = "w-[200px] p-0") {\r
                Command() {\r
                    CommandInputs(placeholder = props.title)\r
                    CommandLists() {\r
                        CommandEmptys() { "No results found." }\r
                        CommandGroups() {\r
                            For(each = props.options) {\r
                                yield fun opt _ ->\r
                                    CommandItems(\r
                                        onSelect = (fun _ ->\r
                                            if opt |> Option.ofObj = selectedValue() then\r
                                                setValue !!null\r
                                            else\r
                                                setValue opt.value\r
                                            )\r
                                        ) {\r
                                        div(class' = Lib.cn [|\r
                                            "mr-2 flex size-4 items-center justify-center rounded-sm border border-primary"\r
                                            if selectedValue() = (opt |> Option.ofObj) then "bg-primary text-primary-foreground"\r
                                            else "opacity-50 [&_svg]:invisible"\r
                                        |]) {\r
                                            Check()\r
                                        }\r
                                        Show(when' = !!opt.icon, keyed = true) {\r
                                            opt.icon <| {| \`\`class\`\` = "mr-2 size-4 text-muted-foreground" |}\r
                                        }\r
                                        span() { opt.label }\r
                                        Show(when' = !!selectedValue()) {\r
                                            span(class' = "ml-auto flex size-4 items-center justify-center font-mono text-xs") {\r
                                                selectedValue() |> Option.map _.selectLabel |> Option.flatten |> Option.defaultValue (unbox<string> null)\r
                                            }\r
                                        }\r
                                    }\r
                            }\r
                        }\r
                        Show(when' = (selectedValue() |> unbox)) {\r
                            Fragment() {\r
                                CommandSeparators()\r
                                CommandGroups() {\r
                                    CommandItems(\r
                                        onSelect = (fun _ -> setValue(undefined)\r
                                            )\r
                                        ,class' = "justify-center text-center"\r
                                        ) {\r
                                        "Clear Selection"\r
                                    }\r
                                }\r
                            }\r
                        }\r
                    }\r
                }\r
            }\r
        }\r
`,p=`\uFEFFmodule Partas.Solid.UI.Kit.Tables.DataTable\r
\r
\r
open Partas.Solid\r
open Partas.Solid.UI\r
open Fable.Core\r
open Fable.Core.JsInterop\r
open Partas.Solid.TanStack.Table\r
\r
[<Erase>]\r
type PaginationWrapper<'T>() =\r
    interface RegularNode\r
    [<DefaultValue>] val mutable table: Table<'T>\r
    [<Erase>] member val paginated: bool = unbox null with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.paginated <- false\r
        Partas.Solid.Bindings.Switch() {\r
            Match(when' = props.paginated) {\r
                div() {\r
                    div(class' = "rounded-md border") {\r
                        props.children\r
                    }\r
                    div(class' = "flex items-center justify-end space-x-2 py-4 px-2") {\r
                        Button(\r
                            variant = Button.Variant.Outline\r
                            ,size = Button.Size.Small\r
                            ,onClick = fun _ -> props.table.previousPage()\r
                            ,disabled = not (props.table.getCanPreviousPage())\r
                        ) { "Previous" }\r
                        Button(\r
                            variant = Button.Variant.Outline\r
                            ,size = Button.Size.Small\r
                            ,onClick = fun _ -> props.table.nextPage()\r
                            ,disabled = not (props.table.getCanNextPage())\r
                        ) { "Next" }\r
                    }\r
                }\r
            }\r
            Match(when' = not props.paginated) {\r
                props.children\r
            }\r
        }\r
\r
[<Erase>]\r
type DataTable<'T>() =\r
    interface VoidNode\r
    [<DefaultValue>] val mutable table: Table<'T>\r
    [<DefaultValue>] val mutable paginated: bool\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        let table = props.table\r
        PaginationWrapper(table = props.table, paginated = props.paginated) {\r
        Table() {\r
            TableHeader() {\r
                For(each = table.getHeaderGroups()) {\r
                    yield fun headerGroup _ ->\r
                        TableRow() {\r
                            For(each = headerGroup.headers) {\r
                                yield fun header _ ->\r
                                    TableHead(colspan = header.colSpan) {\r
                                        Show(when' = not header.isPlaceholder) {\r
                                            flexRender(header.column.columnDef.header, header.getContext())\r
                                        }\r
                                    }\r
                            }\r
                        }\r
                }\r
            }\r
            TableBody() {\r
                Show(\r
                    when' = unbox (table.getRowModel().rows.Length)\r
                    ,fallback = (TableRow() { TableCell(colspan = (8), class' = "h-24 text-center") { "No Results." } })\r
                    ) {\r
                    For(each = table.getRowModel().rows) {\r
                        yield fun row _ ->\r
                            TableRow().data("state", !!(row.getIsSelected() && !!"selected")) {\r
                                For(each = row.getVisibleCells()) {\r
                                    yield fun cell _ ->\r
                                        TableCell() {\r
                                            flexRender(cell.column.columnDef.cell, cell.getContext())\r
                                        }\r
                                }\r
                            }\r
                    }\r
                }\r
            }\r
        }\r
        }\r
`,d=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid.Lucide\r
open Partas.Solid\r
open Partas.Solid.UI\r
open Partas.Solid.TanStack.Table\r
\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
\r
open System\r
\r
[<Erase>]\r
type TableToolbar<'Data>() =\r
    interface RegularNode\r
    [<Erase>]\r
    member val table: Table<'Data> = undefined with get,set\r
    [<Erase>]\r
    member val filterColumn: string = undefined with get,set\r
    [<Erase>]\r
    member val columnEnumerations: (string * TableFacetedFilterOptions[])[] = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.filterColumn <- ""\r
        let isFiltered = fun () -> props.table.getState()?columnFilters |> Array.length > 0\r
        let table () = props.table\r
        let filterColumn () = table().getColumn(props.filterColumn).Value\r
        ignore filterColumn\r
        div(class' = "flex items-center justify-between") {\r
            div(class' = "flex flex-1 items-center space-x-2") {\r
                TextField(\r
                    value = (!!(filterColumn().getFilterValue()) ??= "")\r
                    ,onChange = fun value -> (props.table.getColumn(props.filterColumn) |> Option.map (_.setFilterValue(!^value)) |> ignore)\r
                    ) {\r
                    TextFieldInput(placeholder = $"Filter by {props.filterColumn}", class' = "h-8 w-[150px] lg:w-[250px]")\r
                }\r
                For(each = props.columnEnumerations) {\r
                    yield fun (selector, options) _ ->\r
                        props.table.getColumn(selector) &&= (\r
                            TableFacetedFilter(\r
                                column = !!props.table.getColumn(selector).Value\r
                                ,title = (selector[0] |> Char.ToUpperInvariant |> fun c -> $"{c}{selector[1..]}")\r
                                ,options = options\r
                                )\r
                            ) \r
                }\r
                isFiltered() &&= (\r
                    Button(class' = "h-8 px-2 lg:px-3", variant = Button.Variant.Ghost, onClick = fun _ -> (props.table.resetColumnFilters(true))) {\r
                        "Reset"\r
                        X()\r
                    }\r
                    )\r
            }\r
            props.children\r
            TableViewOptions(table = props.table)\r
        }\r
`,u=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Fable.Core.JsInterop\r
open Fable.Core.JS\r
open Fable.Core\r
open Partas.Solid.Lucide\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Partas.Solid.Polymorphism\r
open Partas.Solid.Aria\r
open Partas.Solid.Experimental\r
open Partas.Solid.UI\r
open Partas.Solid.TanStack.Table\r
open Browser.Types\r
open Browser.Dom\r
\r
\r
[<Erase>]\r
type DataTableColumnHeader<'Data>() =\r
    inherit div()\r
    [<Erase>]\r
    member val column: Column<'Data> = undefined with get,set\r
    [<Erase>]\r
    member val title: string = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        let iconClass = "h-3.5 w-3.5 text-muted-foreground/70"\r
        let column () = props.column\r
        ignore column\r
        let canSort () = column().getCanSort()\r
        let canHide () = column().getCanHide()\r
        Show(when' = (canSort() || canHide()), fallback = (div(class' = props.class') {\r
                    span() { props.title }\r
                })) {\r
                div( class' = Lib.cn [| "flex items-center space-x-2"; props.class' |] ) {\r
                    DropdownMenu() {\r
                        DropdownMenuTrigger()\r
                            .as'( Button( variant = Button.Variant.Ghost ,size = Button.Size.Small ,class' = "-ml-3 h-8 data-[state=open]:bg-accent" ) ) {\r
                            span() { props.title }\r
                            Show(\r
                                when' = canSort()\r
                                ,fallback = (EllipsisVertical(size = 4))\r
                                ) {\r
                                if props.column.getIsSorted() = !^SortDirection.Desc then\r
                                    ArrowDown()\r
                                elif props.column.getIsSorted() = !^SortDirection.Asc then\r
                                    ArrowUp()\r
                                else\r
                                    ChevronsUpDown()\r
                            }\r
                        }\r
                        DropdownMenuContent() {\r
                            Show(when' = canSort()) {\r
                                DropdownMenuItem(onClick = fun _ -> props.column.toggleSorting(!!false)) {\r
                                    ArrowUp(class' = iconClass)\r
                                    "Asc"\r
                                }\r
                                DropdownMenuItem(onClick = fun _ -> props.column.toggleSorting(!!true)) {\r
                                    ArrowDown(class' = iconClass)\r
                                    "Desc"\r
                                }\r
                            }\r
                            Show(when' = (canSort() && canHide())) {\r
                                DropdownMenuSeparator()\r
                            }\r
                            Show(when' = canHide()) {\r
                                DropdownMenuItem(onClick = fun _ -> props.column.toggleVisibility(false)) {\r
                                    EyeOff(class' = iconClass)\r
                                    "Hide"\r
                                }\r
                            }\r
                            \r
                        }\r
                    }\r
            }\r
        }\r
[<Erase>]\r
type ActionsHeader<'Data>() =\r
    inherit div()\r
    // [<Erase>]\r
    // member val tableStack: Tables.TableStack<'Data> = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        let iconClass = "h-3.5 w-3.5 text-muted-foreground/70"\r
        div( class' = Lib.cn [| "flex items-center space-x-2"; props.class' |] ) {\r
            DropdownMenu() {\r
                DropdownMenuTrigger()\r
                    .as'( Button( variant = Button.Variant.Ghost ,size = Button.Size.Small ,class' = "-ml-3 h-8 data-[state=open]:bg-accent" ) ) {\r
                    Lucide.TableProperties()\r
                }\r
                DropdownMenuContent() {\r
                    DropdownMenuLabel() { "Table Actions" }\r
                }\r
            }\r
        }\r
        \r
`,c=`\uFEFFnamespace Partas.Solid.UI\r
open Browser\r
open Partas.Solid\r
open Partas.Solid.TanStack.Table\r
open Partas.Solid.UI\r
open Fable.Core\r
open Fable.Core.JsInterop\r
open Fable.Core.JS\r
open Partas.Solid.Primitives\r
open Browser.Types\r
\r
[<Erase>]\r
type TableInputFilter<'Data, 'Value>() =\r
    inherit TextFieldInput()\r
    [<Erase>]\r
    member val column: Column<'Data, 'Value> = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        let column () = props.column\r
        TextField(\r
            value = ((props.column &&= !!column().getFilterValue()) ??= "")\r
            ,onChange = fun value -> props.column &&= column().setFilterValue(!^value)\r
            ) {\r
            TextFieldInput().spread props\r
        }\r
`,m=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid.Lucide\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Partas.Solid.UI\r
open Partas.Solid.Experimental\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
open Partas.Solid.TanStack.Table\r
\r
[<Erase>]\r
type DataTablePagination<'Data>() =\r
    inherit div()\r
    [<Erase>]\r
    member val table: Table<'Data> = undefined with get,set\r
    // [<Erase>]\r
    // member val tableStack: Types.Tables.TableStack<'Data> = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        let children = children { props.children }\r
        // let info () = props.tableStack.info()\r
        // ignore info\r
        div(\r
            class' = "flex items-center justify-between px-2"\r
        ) {\r
            if !!children() then\r
                children()\r
            else\r
                div(class' = "flex-1 text-sm text-muted-foreground") {\r
                    $"{props.table.getFilteredSelectedRowModel().rows.Length} "\r
                    " of "\r
                    // Tooltip() {\r
                        // TooltipTrigger() {\r
                    $"{props.table.getFilteredRowModel().rows.Length} row(s) selected."\r
                    //     }\r
                    //     TooltipContent() {\r
                    //         $"Total of {info().total} rows in the database"\r
                    //     }\r
                    // }\r
                }\r
            div(class' = "flex items-center space-x-6 lg:space-x-8") {\r
                div(class' = "flex items-center space-x-2") {\r
                    p(class' = "text-sm font-medium") { "Rows per page" }\r
                    Select(\r
                        options = [| 10; 20; 30; 40; 50 |]\r
                        ,value = props.table.getState().pagination.pageSize\r
                        ,onChange = fun value -> value &&= (props.table.setPageSize !!value)\r
                        // ,optionDisabled = (<>) 10\r
                        ,itemComponent = (fun itemProps ->\r
                                SelectItem(item = itemProps.item) { !!itemProps.item.rawValue }\r
                            )\r
                    ) {\r
                        SelectTrigger(class' = "h-8 w-[70px]") {\r
                            SelectValue() {\r
                                yield fun state ->\r
                                    !!state.selectedOption()\r
                            }\r
                        }\r
                        SelectContent()\r
                    }\r
                }\r
                div(class' = "flex w-[100px] items-center justify-center text-sm font-medium") {\r
                    // Tooltip() {\r
                    // TooltipTrigger() {\r
                    $"Page {props.table.getState().pagination.pageIndex + 1} of {props.table.getPageCount()}"\r
                    // }\r
                    // TooltipContent() {\r
                        // $"Total of {info().pages.Value.total} pages in the database"\r
                    // }\r
                    // }\r
                }\r
                div(class' = "flex items-center space-x-2") {\r
                    Button(\r
                           variant = Button.Variant.Outline\r
                           ,class' = "hidden size-8 p-0 lg:flex"\r
                           ,onClick = fun _ -> props.table.setPageIndex(!^0)\r
                           ,disabled = (props.table.getCanPreviousPage() |> not)\r
                           ) {\r
                        SrSpan() { "Go to first page" }\r
                        ChevronsLeft()\r
                    }\r
                    Button(\r
                        variant = Button.Variant.Outline\r
                        ,class' = "size-8 p-0"\r
                        ,onClick = fun _ -> props.table.previousPage()\r
                        ,disabled = (props.table.getCanPreviousPage() |> not)\r
                        ) {\r
                        SrSpan() { "Go to previous page" }\r
                        ChevronLeft()\r
                    }\r
                    Button (\r
                        variant = Button.Variant.Outline\r
                        ,class' = "size-8 p-0"\r
                        ,onClick = fun _ -> props.table.nextPage()\r
                        ,disabled = (props.table.getCanNextPage() |> not)\r
                        ) {\r
                        SrSpan() { "Go to next page" }\r
                        ChevronRight()\r
                    }\r
                    Button(\r
                        variant = Button.Variant.Outline\r
                        ,class' = "size-8 p-0"\r
                        ,onClick = fun _ -> props.table.setPageIndex(!^(props.table.getPageCount() - 1))\r
                        ,disabled = (props.table.getCanNextPage() |> not)\r
                        ) {\r
                        SrSpan() { "Go to last page" }\r
                        ChevronsRight()\r
                    }\r
                }\r
            }\r
        }\r
`,b=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid.Lucide\r
open Partas.Solid\r
open Partas.Solid.Experimental\r
open Partas.Solid.Kobalte\r
open Partas.Solid.UI\r
open Partas.Solid.Polymorphism\r
open Partas.Solid.TanStack.Table\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
open System\r
\r
[<Pojo>]\r
type TableFacetedFilterOptions(label: string, value: string, ?icon: {| \`\`class\`\`: string |} -> HtmlElement) =\r
    member val label = label with get,set\r
    member val value = value with get,set\r
    member val icon = icon.Value with get,set\r
\r
[<Erase>]\r
type TableFacetedFilter<'Data, 'Value>() =\r
    inherit div()\r
    [<Erase>]\r
    member val column: Column<'Data, 'Value> = undefined with get,set\r
    [<Erase>]\r
    member val title: string = undefined with get,set\r
    [<Erase>]\r
    member val options: TableFacetedFilterOptions[] = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        let column = props.column\r
        let facets = fun () -> props.column &&= column.getFacetedUniqueValues()\r
        let selectedValues: unit -> string[] = fun () -> ((props.column &&= column.getFilterValue()) ??= [||]) |> unbox\r
        \r
        Popover(placement = !!"bottom-start") {\r
            PopoverTrigger().as'(Button(variant = Button.Variant.Outline, size = Button.Size.Small, class' = "h-8 border-dashed")) {\r
                CirclePlus()\r
                props.title\r
                Show(when' = (selectedValues().Length > 0)) {\r
                    Separator(orientation = Orientation.Vertical, class' = "mx-2 h-4")\r
                    Badge(variant = Badge.Variant.Secondary, class' = "rounded-sm px-1 lg:hidden") {\r
                        selectedValues().Length\r
                    }\r
                    div(class' = "hidden space-x-1 lg:flex") {\r
                        Show(\r
                            when' = (selectedValues().Length < 3)\r
                            ,fallback = Badge(variant = Badge.Variant.Secondary, class' = "rounded-sm px-1") { selectedValues().Length; " selected" } \r
                            ) {\r
                            For(each = selectedValues()) {\r
                                yield fun opt _ ->\r
                                    Badge(variant = Badge.Variant.Secondary, class' = "rounded-sm px-1") {\r
                                        opt\r
                                    }\r
                            }\r
                            \r
                        }\r
                    }\r
                }\r
            }\r
            PopoverContent(class' = "w-[200px] p-0") {\r
                Command() {\r
                    CommandInputs(placeholder = props.title)\r
                    CommandLists() {\r
                        CommandEmptys() { "No results found." }\r
                        CommandGroups() {\r
                            For(each = props.options) {\r
                                yield fun opt _ ->\r
                                    CommandItems(\r
                                        onSelect = (fun _ ->\r
                                            let mutable newValues = undefined\r
                                            let isSelected = fun () -> selectedValues() |> Array.contains opt.value\r
                                            if isSelected() then\r
                                                newValues <- selectedValues() |> Array.filter ((<>) opt.value)\r
                                            else\r
                                                newValues <-  [| opt.value |] |> Array.append (selectedValues())\r
                                            props.column &&= props.column.setFilterValue(if !!newValues.Length then !!newValues else undefined)\r
                                            )\r
                                        ) {\r
                                        div(class' = Lib.cn [|\r
                                            "mr-2 flex size-4 items-center justify-center rounded-sm border border-primary"\r
                                            if selectedValues() |> Array.contains opt.value then "bg-primary text-primary-foreground"\r
                                            else "opacity-50 [&_svg]:invisible"\r
                                        |]) {\r
                                            Check()\r
                                        }\r
                                        Show(when' = !!opt.icon, keyed = true) {\r
                                            opt.icon <| {| \`\`class\`\` = "mr-2 size-4 text-muted-foreground" |}\r
                                        }\r
                                        span() { opt.label }\r
                                        Show(when' = (facets() &&= !!facets().get(opt.value))) {\r
                                            span(class' = "ml-auto flex size-4 items-center justify-center font-mono text-xs") {\r
                                                facets().get(opt.value)\r
                                            }\r
                                        }\r
                                    }\r
                            }\r
                        }\r
                        Show(when' = (selectedValues() |> Array.length > 0)) {\r
                            Fragment() {\r
                                CommandSeparators()\r
                                CommandGroups() {\r
                                    CommandItems(\r
                                        onSelect = (fun _ ->\r
                                            props.column &&= props.column.setFilterValue(undefined)\r
                                            )\r
                                        ,class' = "justify-center text-center"\r
                                        ) {\r
                                        "Clear filters"\r
                                    }\r
                                }\r
                            }\r
                        }\r
                    }\r
                }\r
            }\r
        }\r
`,g=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid.Kobalte\r
open Partas.Solid.Polymorphism\r
open Partas.Solid.Lucide\r
open Partas.Solid\r
open Partas.Solid.UI\r
open Partas.Solid.TanStack.Table\r
\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
\r
open System\r
\r
[<Erase>]\r
type TableViewOptions<'Data>() =\r
    interface RegularNode\r
    [<Erase>]\r
    member val table: Table<'Data> = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        let table () = props.table\r
        DropdownMenu(placement = !!"bottom-end") {\r
            DropdownMenuTrigger().as'(Button(variant = Button.Variant.Outline, size = Button.Size.Small, class' = "ml-auto hidden h-8 lg:flex")) {\r
                Settings()\r
                "View"\r
            }\r
            DropdownMenuContent(class' = "w-[150px]") {\r
                DropdownMenuLabel() { "Toggle columns" }\r
                DropdownMenuSeparator()\r
                For(each = (table().getAllColumns() |> Array.filter (fun column -> (not <| isNullOrUndefined (column.accessorFn)) &&= column.getCanHide()))) {\r
                    yield fun column _ ->\r
                        DropdownMenuCheckboxItem(class' = "capitalize", checked' = column.getIsVisible(), onChange = fun value -> column.toggleVisibility(!!value)) { column.id }\r
                }\r
            }\r
        }\r
      \r
`,f=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Fable.Core.JS\r
open Fable.Core\r
open Fable.Core.JsInterop\r
\r
[<Erase>]\r
type Empty() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex min-w-0 flex-1 flex-col items-center justify-center \\\r
            gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12"\r
            props.class'\r
        |]) .dataSlot("empty")\r
            .spread props\r
    \r
[<Erase>]\r
type EmptyHeader() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex max-w-sm flex-col items-center gap-2 text-center"\r
            props.class'\r
        |]) .dataSlot("empty-header")\r
            .spread props\r
\r
[<Erase>]\r
module EmptyMedia =\r
    [<StringEnum>]\r
    type Variant =\r
        | Default\r
        | Icon\r
\r
open EmptyMedia\r
[<Erase>]\r
type EmptyMedia() =\r
    inherit div()\r
    [<Erase>]\r
    member val variant: Variant = undefined with get,set\r
    static member variants(?variant: Variant) =\r
        let variant = defaultArg variant Default\r
        "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none \\\r
        [&_svg]:shrink-0"\r
        + " " +\r
        match variant with\r
        | Default -> "bg-transparent"\r
        | Icon -> "bg-muted text-foreground flex size-10 shrink-0 \\\r
                   items-center justify-center rounded-lg \\\r
                    [&_svg:not([class*='size-'])]:size-6"\r
\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.variant <- Default\r
        div(class' = Lib.cn [|\r
            EmptyMedia.variants(props.variant)\r
            props.class'\r
        |]) .dataSlot("empty-icon")\r
            .spread props\r
\r
[<Erase>]\r
type EmptyTitle() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "text-lg font-medium tracking-tight"\r
            props.class'\r
        |]) .dataSlot("empty-title")\r
            .spread props\r
\r
[<Erase>]\r
type EmptyDescription() =\r
    inherit p()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed \\\r
            [&>a]:underline [&>a]:underline-offset-4"\r
            props.class'\r
        |]) .dataSlot("empty-description")\r
            .spread props\r
\r
[<Erase>]\r
type EmptyContent() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex w-full max-w-sm min-w-0 flex-col items-center \\\r
            gap-4 text-sm text-balance"\r
            props.class'\r
        |]) .dataSlot("empty-content")\r
            .spread props\r
`,h=`\uFEFFnamespace Partas.Solid.UI\r
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
    [<Erase>]\r
    member props.__ =\r
        props.orientation <- Vertical\r
        div(class' = Lib.cn [|\r
            Field.variants(props.orientation)\r
            props.class'\r
        |], role = "group")\r
            .dataSlot("field")\r
            .data("orientation", string props.orientation)\r
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
            "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50"\r
            "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4"\r
            "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10"\r
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
            "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance"\r
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
`,v=`\uFEFFnamespace Partas.Solid.UI\r
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
            "group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none"\r
            "h-9 min-w-0 has-[>textarea]:h-auto"\r
            // Variants based on alignment.\r
            "has-[>[data-align=inline-start]]:[&>input]:pl-2"\r
            "has-[>[data-align=inline-end]]:[&>input]:pr-2"\r
            "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3"\r
            "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3"\r
            // Focus state.\r
            "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]"\r
            // Error state.\r
            "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40"\r
            \r
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
    inherit input()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        TextField(\r
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
`,S=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Fable.Core\r
open Fable.Core.JsInterop\r
open Fable.Core.JS\r
\r
open Partas.Solid.Aria\r
[<Erase>]\r
type ItemGroup() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "group/item-group flex flex-col"\r
            props.class'\r
        |], role = "list")\r
            .dataSlot("item-group")\r
            .spread props\r
\r
[<Erase>]\r
type ItemSeparator() =\r
    inherit Separator()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        Separator(orientation = Kobalte.Enums.Orientation.Horizontal,\r
                  class' = Lib.cn [|\r
                      "my-0"\r
                      props.class'\r
                  |])\r
            .dataSlot("item-separator")\r
            .spread props\r
\r
[<Erase>]\r
module Item =\r
    [<StringEnum>]\r
    type Variant =\r
        | Default\r
        | Outline\r
        | Muted\r
    [<StringEnum; RequireQualifiedAccess>]\r
    type Size =\r
        | Default\r
        | Small\r
\r
open Item\r
\r
[<Erase>]\r
type Item() =\r
    inherit div()\r
    [<Erase>]\r
    member val variant: Variant = undefined with get,set\r
    [<Erase>]\r
    member val size: Size = undefined with get,set\r
    static member variants(?variant: Variant, ?size: Size) =\r
        let variant = defaultArg variant Variant.Default\r
        let size = defaultArg size Size.Default\r
        "group/item flex items-center border border-transparent text-sm rounded-md \\\r
        transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 \\\r
        flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 \\\r
        focus-visible:ring-[3px]"\r
        + " " +\r
        match variant with\r
        | Default -> "bg-transparent"\r
        | Outline -> "border-border"\r
        | Muted -> "bg-muted/50"\r
        + " " +\r
        match size with\r
        | Size.Default -> "p-4 gap-4"\r
        | Size.Small -> "py-3 px-4 gap-2.5"\r
\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.size <- Size.Default\r
        props.variant <- Variant.Default\r
        div(class' = Lib.cn [|\r
            Item.variants(props.variant,props.size)\r
            props.class'\r
        |]) .dataSlot("item")\r
            .data("variant", string props.variant)\r
            .data("size", string props.size)\r
            .spread props\r
\r
[<Erase>]\r
module ItemMedia =\r
    [<StringEnum>]\r
    type Variant =\r
        | Default\r
        | Icon\r
        | Image\r
open ItemMedia\r
[<Erase>]\r
type ItemMedia() =\r
    inherit div()\r
    [<Erase>]\r
    member val variant: Variant = undefined with get,set\r
    static member variants(?variant: Variant) =\r
        let variant = defaultArg variant Variant.Default\r
        "flex shrink-0 items-center justify-center gap-2 \\\r
        group-has-[[data-slot=item-description]]/item:self-start \\\r
        [&_svg]:pointer-events-none \\\r
        group-has-[[data-slot=item-description]]/item:translate-y-0.5"\r
        + " " +\r
        match variant with\r
        | Default -> "bg-transparent"\r
        | Icon -> "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4"\r
        | Image -> "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover"\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.variant <- Variant.Default\r
        div(class' = Lib.cn [|\r
            ItemMedia.variants(props.variant)\r
            props.class'\r
        |]) .dataSlot("item-media")\r
            .data("variant", string props.variant)\r
            .spread props\r
\r
[<Erase>]\r
type ItemContent() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none"\r
            props.class'\r
        |]) .dataSlot("item-content")\r
            .spread props\r
\r
[<Erase>]\r
type ItemTitle() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class'  = Lib.cn [|\r
            "flex w-fit items-center gap-2 text-sm leading-snug font-medium"\r
            props.class'\r
        |]) .dataSlot("item-title")\r
            .spread props\r
\r
[<Erase>]\r
type ItemDescription() =\r
    inherit p()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        p(class' = Lib.cn [|\r
            "text-muted-foreground line-clamp-2 text-sm leading-normal"\r
            "font-normal text-balance"\r
            "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4"\r
            props.class'\r
        |]) .dataSlot("item-description")\r
            .spread props\r
\r
[<Erase>]\r
type ItemActions() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex items-center gap-2"\r
            props.class'\r
        |]) .dataSlot("item-actions")\r
            .spread props\r
\r
[<Erase>]\r
type ItemHeader() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex basis-full items-center justify-between gap-2"\r
            props.class'\r
        |]) .dataSlot("item-header")\r
            .spread props\r
\r
[<Erase>]\r
type ItemFooter() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex basis-full items-center justify-between gap-2"\r
            props.class'\r
        |]) .dataSlot("item-footer")\r
            .spread props\r
`;function a(t){const r={h1:"h1",h2:"h2",h3:"h3",p:"p",...o(),...t.components},{SourceCode:e}=r;return e||x("SourceCode"),n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"tasks",children:"Tasks"}),`
`,n.jsxs(r.p,{children:[n.jsx("input",{type:"checkbox",checked:!1})," Wire the colorpicker field to the rest of the color inputs"]}),`
`,n.jsx(r.h1,{id:"todo-old-comp-stories",children:"Todo Old Comp Stories"}),`
`,n.jsx(r.h3,{id:"advbutton",children:"AdvButton"}),`
`,n.jsx(e,{code:s}),`
`,n.jsx(r.h3,{id:"commandpicker",children:"CommandPicker"}),`
`,n.jsx(e,{code:l}),`
`,n.jsx(r.h3,{id:"facetedfilter",children:"FacetedFilter"}),`
`,n.jsx(e,{code:i}),`
`,n.jsx(r.h3,{id:"empty",children:"Empty"}),`
`,n.jsx(e,{code:f}),`
`,n.jsx(r.h3,{id:"field",children:"Field"}),`
`,n.jsx(e,{code:h}),`
`,n.jsx(r.h3,{id:"inputgroup",children:"InputGroup"}),`
`,n.jsx(e,{code:v}),`
`,n.jsx(r.h3,{id:"item",children:"Item"}),`
`,n.jsx(e,{code:S}),`
`,n.jsx(r.h2,{id:"tables",children:"Tables"}),`
`,n.jsx(r.h3,{id:"datatable",children:"DataTable"}),`
`,n.jsx(e,{code:p}),`
`,n.jsx(r.h3,{id:"toolbar",children:"Toolbar"}),`
`,n.jsx(e,{code:d}),`
`,n.jsx(r.h3,{id:"columnheader",children:"ColumnHeader"}),`
`,n.jsx(e,{code:u}),`
`,n.jsx(r.h3,{id:"inputfilter",children:"InputFilter"}),`
`,n.jsx(e,{code:c}),`
`,n.jsx(r.h3,{id:"pagination",children:"Pagination"}),`
`,n.jsx(e,{code:m}),`
`,n.jsx(r.h3,{id:"facetedfilter-1",children:"FacetedFilter"}),`
`,n.jsx(e,{code:b}),`
`,n.jsx(r.h3,{id:"viewoptions",children:"ViewOptions"}),`
`,n.jsx(e,{code:g})]})}function E(t={}){const{wrapper:r}={...o(),...t.components};return r?n.jsx(r,{...t,children:n.jsx(a,{...t})}):a(t)}function x(t,r){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{E as default};

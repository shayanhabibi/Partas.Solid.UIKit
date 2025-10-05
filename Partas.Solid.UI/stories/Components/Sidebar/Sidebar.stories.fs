module Partas.Solid.UI.stories.Components.Sidebar.Sidebar_stories
open Partas.Solid.Lucide
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
open Fable.Core
open Fable.Core.JsInterop
open Fable.Core.JS
[<SolidComponent>]
let private data =
    {|
        User = {| name = "Shayan"
                  email = "github@someemail.com"
                  avatar = "https://github.com/shayanhabibi.png" |}
        MainItems = [|
            {| title = "Dashboard"
               url = "#"
               icon = !@LayoutDashboard |}
            {| title = "Lifecycle"
               url = "#"
               icon = !@Lucide.ListTodo |}
            {| title = "Analytics"
               url = "#"
               icon = !@Lucide.ChartBar |}
            {| title = "Projects"
               url = "#"
               icon = !@Lucide.Folder |}
            {| title = "Team"
               url = "#"
               icon = !@Lucide.Users |}
        |]
        SecondaryItems = [|
            {| title = "Settings"
               url = "#"
               icon = !@Lucide.Settings |}
            {| title = "Get Help"
               url = "#"
               icon = !@Lucide.CircleHelp |}
            {| title = "Search"
               url = "#"
               icon = !@Lucide.Search |}
        |]
        DocumentItems = [|
            {| title = "Data Library"
               url = "#"
               icon = !@Lucide.Database |}
            {| title = "Reports"
               url = "#"
               icon = !@Lucide.FileBadge |}
            {| title = "Word Assistant"
               url = "#"
               icon = !@Lucide.FileCode |}
        |]
    |}
[<SolidComponent>]
let private NavMain () =
    SidebarGroup() {
        SidebarGroupContent(class' = "flex flex-col gap-2") {
            SidebarMenu() {
                SidebarMenuItem(class' = "flex items-center gap-2") {
                    SidebarMenuButton(
                        class' = "bg-primary text-primary-foreground \
                        hover:bg-primary/90 hover:text-primary-foreground \
                        active:bg-primary/90 active:text-primary-foreground \
                        min-w-8 duration-200 ease-linear",
                        tooltip = "Quick Create"
                    ) {
                        CirclePlus()
                        span() { "Quick Create" }
                    }
                    Button(size = Button.Size.Icon,
                           class' = "size-8 group-data-[collapsible=icon]:opacity-0",
                           variant = Button.Variant.Outline) {
                        Mail()
                        SrSpan() { "Inbox" }
                    }
                }
            }
            SidebarMenu() {
                For(each = data.MainItems) { yield fun item _ ->
                    SidebarMenuItem() {
                        SidebarMenuButton(tooltip = item.title) {
                            item.icon % {||}
                            span() { item.title }
                        }
                    }
                }
            }
        }
    }

[<SolidComponent>]
let private NavDocuments () =
    SidebarGroup(class' = "group-data-[collapsible=icon]:hidden") {
        SidebarGroupLabel() { "Documents" }
        SidebarMenu() {
            For(each = data.DocumentItems) { yield fun item _ ->
                SidebarMenuItem() {
                    SidebarMenuButton().as'(a(href = item.url)) {
                        item.icon % {||}
                        span() { item.title }
                    }
                    DropdownMenu() {
                        DropdownMenuTrigger(
                            class' = "data-[state=open]:bg-accent rounded-sm"
                            ).as'(SidebarMenuAction(showOnHover = true)) {
                            Lucide.Ellipsis()
                            SrSpan() { "More" }
                        }
                        DropdownMenuContent( class' = "w-24 rounded-lg" ) {
                            DropdownMenuItem() {
                                Folder()
                                span() { "Open" }
                            }
                            DropdownMenuItem() {
                                Share2()
                                span() { "Share" }
                            }
                            DropdownMenuSeparator()
                            DropdownMenuItem(variant = DropdownMenuItem.Variant.Destructive) {
                                Trash()
                                span() { "Delete" }
                            }
                        }
                    }
                } }
            SidebarMenuItem() {
                SidebarMenuButton(class' = "text-sidebar-foreground/70") {
                    Lucide.Ellipsis(class' = "text-sidebar-foreground/70")
                    span() { "More" }
                }
            }
        }
    }
[<SolidComponent>]
let private NavSecondary () =
    SidebarGroup(class' = "mt-auto") {
        SidebarGroupContent() {
            SidebarMenu() {
                For(each = data.SecondaryItems) { yield fun item _ ->
                    SidebarMenuItem() {
                        SidebarMenuButton().as'(a(href = item.url)) {
                            item.icon % {||}
                            span() { item.title }
                        }
                    } }
            }
        }
    }
[<SolidComponent>]
let private NavUser () =
    let isMobile = Singletons.useIsMobile(false)
    let user = data.User
    SidebarMenu() {
        SidebarMenuItem() {
            DropdownMenu() {
                DropdownMenuTrigger(
                    class' = "data-[state=open]:bg-sidebar-accent \
                            data-[state=open]:text-sidebar-accent-foreground"
                    ).as'(SidebarMenuButton(size = SidebarMenuButton.Size.Large)) {
                    Avatar(class' = "size-8 rounded-lg grayscale") {
                        AvatarImage(src = user.avatar, alt = user.name)
                        AvatarFallback(class' = "rounded-lg") { "SH" }
                    }
                    div(class' = "grid flex-1 text-left text-sm leading-tight") {
                        span(class' = "truncate font-medium") { user.name }
                        span(class' = "text-muted-foreground truncate text-xs") {
                            user.email
                        }
                    }
                    EllipsisVertical(class' = "ml-auto size-4")
                }
                DropdownMenuContent( class' = "w-(--kb-popper-trigger-width) min-w-56 rounded-lg" ) {
                    DropdownMenuLabel(class' = "p-0 font-normal") {
                        div(class' = "flex items-center gap-2 px-1 py-1.5 text-left text-sm") {
                            Avatar(class' = "size-8 rounded-lg") {
                                AvatarImage(src = user.avatar, alt = user.name)
                                AvatarFallback(class' = "rounded-lg") { "SH" }
                            }
                            div(class' = "grid flex-1 text-left text-sm leading-tight") {
                                span(class' = "truncate font-medium") { user.name }
                                span(class' = "text-muted-foreground truncate text-xs") { user.email }
                            }
                        }
                    }
                    DropdownMenuSeparator()
                    DropdownMenuGroup() {
                        let inline makeItem (text: string) (item: #IconNode) =
                            DropdownMenuItem() {
                                item
                                text
                            }
                        UserRound()
                        |> makeItem "Account"
                        CreditCard()
                        |> makeItem "Billing"
                        Bell()
                        |> makeItem "Notifications"
                    }
                    DropdownMenuSeparator()
                    DropdownMenuItem() {
                        LogOut()
                        "Log Out"
                    }
                }
            }
        }
    }
[<PartasStorybook>]
let private meta = storybook<Sidebar> {
    tags [| "!autodocs" |]
    cases (fun props ->
        match props.collapsible with
        | Sidebar.Collapsible.OffCanvas -> failwith ""
        | Sidebar.Collapsible.Icon -> failwith ""
        | Sidebar.Collapsible.None when props.collapsible = Sidebar.Collapsible.OffCanvas -> failwith ""
        | _ -> ()
        match props.side with
        | Sidebar.Side.Left -> failwith ""
        | Sidebar.Side.Right when props.side = Sidebar.Side.Left -> failwith ""
        | _ -> ()
        match props.variant with
        | Sidebar.Variant.Floating -> failwith ""
        | Sidebar.Variant.Inset -> failwith ""
        | Sidebar.Variant.Sidebar when props.variant = Sidebar.Variant.Floating -> failwith ""
        | _ -> ()
        )
    render (fun _ -> div())
    args "Default" (fun props ->
        props.collapsible <- Sidebar.Collapsible.OffCanvas
        props.side <- Sidebar.Side.Left
        props.variant <- Sidebar.Variant.Sidebar
        )
    render "Default" (fun props ->
        let inline story () = Sidebar().spread props {
            SidebarHeader() {
                SidebarMenu() {
                    SidebarMenuItem() {
                        SidebarMenuButton(class' =
                            "data-[slot=sidebar-menu-button]:!p-1.5"
                            ).as'(a(href = "#")) {
                            GitBranch(class' = "!size-5")
                            span(class' = "text-base font-semibold") {
                                "ACME"
                            }
                        }
                    }
                }
            }
            SidebarContent() {
                NavMain()
                NavDocuments()
                NavSecondary()
            }
            SidebarFooter() {
                NavUser()
            }
            
        }
        SidebarProvider(defaultOpen = true) {
            story()
            SidebarInset()
            div(class' ="relative flex w-full") {
                SidebarTrigger(class' = "absolute top-2 left-2")
                Skeleton(class' = "m-4 mt-12 rounded-lg")
            }
        }
        )
}



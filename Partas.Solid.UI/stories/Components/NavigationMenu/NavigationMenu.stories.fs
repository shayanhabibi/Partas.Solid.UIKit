module Partas.Solid.UI.stories.Components.NavigationMenu_stories
open Partas.Solid.Lucide
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<NavigationMenu> {
    render (fun props ->
        NavigationMenu().spread props {
            NavigationMenuItem() {
                NavigationMenuTrigger() {
                    "Item One"
                    NavigationMenuIcon()
                }
                NavigationMenuContent() {
                    NavigationMenuLink() { "Link" }
                }
            }
        })
    render "SolidUI" (fun props ->
        NavigationMenu() {
            NavigationMenuItem() {
                NavigationMenuTrigger() {
                    "Getting Started"
                    NavigationMenuIcon()
                }
                NavigationMenuContent(
                    class' = "grid w-[90vw] grid-rows-3 \
                        gap-3 sm:w-[500px] sm:grid-cols-2 md:w-[500px] \
                        lg:w-[500px] lg:grid-cols-[.75fr_1fr] \
                        [&>li:first-child]:row-span-3",
                    onPointerLeave = fun e -> e.preventDefault()
                    ) {
                    NavigationMenuLink(
                        class' = "box-border flex size-full select-none flex-col justify-end \
                        rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline \
                        focus:shadow-md",
                        closeOnSelect = false
                        ) {
                        Activity(class' = "size-6")
                        NavigationMenuLabel(class' = "mb-2 mt-4 text-lg font-medium") {
                            "SolidUI"
                        }
                        NavigationMenuDescription(class' = "text-sm leading-tight text-muted-foreground") {
                            "Beautifully designed components. Built with Kobalte & Corvu. Styled with Tailwind CSS"
                        }
                    }
                    NavigationMenuLink(href="/docs", closeOnSelect = false) {
                        NavigationMenuLabel() { "Introduction" }
                        NavigationMenuDescription() {
                            "Re-usable components. Built with Kobalte & Corvu. Styled with Tailwind CSS"
                        }
                    }
                    NavigationMenuLink(href="/docs/installation") {
                        NavigationMenuLabel() { "Installation" }
                        NavigationMenuDescription() {
                            "How to install dependencies and structure your app."
                        }
                    }
                }
            }
            NavigationMenuItem() {
                NavigationMenuTrigger() { "Overview"; NavigationMenuIcon() }
                NavigationMenuContent(class' = "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]") {
                    NavigationMenuLink(href = "https://kobalte.dev/docs/core") {
                        NavigationMenuLabel() { "Introduction" }
                        NavigationMenuDescription() {
                            "Build high quality"
                        }
                    }
                }
            }
        }
        )
    decorator (fun story ->
        div(class' = "flex flex-col items-center space-y-4") {
            story()
        })
    args "Default" (fun props -> ())
}


module Partas.Solid.UI.stories.Components.Item.Item_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<SolidComponent>]
let inline VariantsExample () =
    div(class' = "flex flex-col gap-6") {
        Item() {
            ItemContent() {
                ItemTitle() { "Default Variant" }
                ItemDescription() {
                    "Standard styling with subtle background and borders."
                }
            }
            ItemActions() {
                Button(variant = Button.Variant.Outline,
                       size = Button.Size.Small) {
                    "Open"
                }
            }
        }
        Item(variant = Item.Variant.Outline) {
            ItemContent() {
                ItemTitle() {
                    "Outline Variant"
                }
                ItemDescription() {
                    "Outlined style with clear borders and transparent background."
                }
            }
            ItemActions() {
                Button(variant = Button.Variant.Outline,
                       size = Button.Size.Small) {
                    "Open"
                }
            }
        }
        Item(variant = Item.Variant.Muted) {
            ItemContent() {
                ItemTitle() { "Muted Variant" }
                ItemDescription() {
                    "Subdued appearance with muted colors for secondary content."
                }
            }
            ItemActions() {
                Button(variant = Button.Variant.Outline,
                       size = Button.Size.Small) {
                    "Open"
                }
            }
        }
    }
[<SolidComponent>]
let inline SizeExample() =
    div(class' = "flex w-full max-w-md flex-col gap-6") {
        Item(variant = Item.Variant.Outline) {
            ItemContent() {
                ItemTitle() {
                    "Basic Item"
                }
                ItemDescription() {
                    "A simple item with title and description"
                }
            }
            ItemActions() {
                Button(variant = Button.Variant.Outline,
                       size = Button.Size.Small) {
                    "Action"
                }
            }
        }
        Item(variant = Item.Variant.Outline,
             size = Item.Size.Small) {
                ItemMedia() {
                    Lucide.Lucide.BadgeCheck(class' = "size-5")
                }
                ItemContent() {
                    ItemTitle() { "Your profile has been verified." }
                }
                ItemActions() {
                    Lucide.Lucide.ChevronRight(class' = "size-4")
                }
        }
    }
[<SolidComponent>]
let inline IconExample () =
    div(class' = "flex w-full max-w-lg flex-col gap-6") {
        Item(variant = Item.Variant.Outline) {
            ItemMedia(variant = ItemMedia.Variant.Icon) {
                Lucide.Lucide.ShieldAlert()
            }
            ItemContent() {
                ItemTitle() { "Security Alert" }
                ItemDescription() {
                    "New login detected from unknown device."
                }
            }
            ItemActions() {
                Button(size = Button.Size.Small, variant = Button.Variant.Outline) {
                    "Review"
                }
            }
        }
    }
open Partas.Solid.Aria
[<SolidComponent>]
let inline AvatarExample () =
    div(class' = "flex w-full max-w-lg flex-col gap-6") {
        Item(variant = Item.Variant.Outline) {
            ItemMedia() {
                Avatar(class' = "size-10") {
                    AvatarImage(src = "https://github.com/shayanhabibi.png")
                    AvatarFallback() { "SH" }
                }
            }
            ItemContent() {
                ItemTitle() { "Shayan Habibi" }
                ItemDescription() { "Last seen 5 eons ago" }
            }
            ItemActions() {
                Button(size = Button.Size.IconSmall,
                       variant = Button.Variant.Outline,
                       class' = "rounded-full",
                       ariaLabel = "Invite") {
                    Lucide.Lucide.Plus()
                }
            }
        }
        Item(variant = Item.Variant.Outline) {
            ItemMedia() {
                AvatarStack<IAvatarStackItem>(items = [|
                    { new IAvatarStackItem with
                        member this.avatar = "https://github.com/shayanhabibi.png"
                        member this.initials = "SH" }
                    { new IAvatarStackItem with
                        member this.avatar = "https://github.com/saem.png"
                        member this.initials = "SG" }
                    { new IAvatarStackItem with
                        member this.avatar = "https://github.com/disruptek.png"
                        member this.initials = "AG" }
                |])
            }
            ItemContent() {
                ItemTitle() { "No Team Members" }
                ItemDescription() { "Invite your team to collaborate on this project." }
            }
            ItemActions() {
                Button(size = Button.Size.Small, variant = Button.Variant.Outline) {
                    "Invite"
                }
            }
        }
    }
[<SolidComponent>]
let private ImgExample () =
    let music = [|
        {| title = "Midnight City Lights"
           artist = "Neon Dreams"
           album = "Electric Nights"
           duration = "3:45" |}
        {| title = "Coffee Shop Conversations"
           artist = "The Morning Brew"
           album = "Urban Stories"
           duration = "4:05" |}
        {| title = "Digital Rain"
           artist = "Cyber Symphony"
           album = "Binary Beats"
           duration = "3:34" |}
    |]
    div(class' = "flex w-full max-w-md flex-col gap-6") {
        ItemGroup(class' = "gap-4") {
            For(each = music) { yield fun item _ ->
                Item(variant = Item.Variant.Outline, role = "listitem") {
                    ItemMedia(variant = ItemMedia.Variant.Image) {
                        Kobalte.Image(class' = "size-32 object-cover grayscale") {
                            Kobalte.Image.Img(src = $"https://avatar.vercel.sh/{item.title}")
                        }
                    }
                    ItemContent() {
                        ItemTitle(class' = "line-clamp-1") {
                            item.title
                            System.Char.empty
                            "-"
                            System.Char.empty
                            span(class' = "text-muted-foreground") { item.album }
                        }
                        ItemDescription() {
                            item.artist
                        }
                    }
                    ItemContent(class' = "flex-none, text-center") {
                        ItemDescription() { item.duration }
                    }
                } }
        }
    }
[<SolidComponent>]
let private GrpExample () =
    let people = [|
        {| username = "shayanhabibi"
           avatar = "https://github.com/shayanhabibi.png"
           email = "email@email.com" |}
        {| username = "saem"
           avatar = "https://github.com/saem.png"
           email = "email@email.com" |}
        {| username = "disruptek"
           avatar = "https://github.com/disruptek.png"
           email = "email@email.com" |}
    |]
    div(class' = "flex w-full max-w-md flex-col gap-6") {
        ItemGroup() {
            For(each = people) { yield fun person idx ->
                 Fragment() {
                     Item() {
                         ItemMedia() {
                             Avatar() {
                                 AvatarImage(src = person.avatar, class' = "grayscale")
                                 AvatarFallback() { string person.username[0] }
                             }
                         }
                         ItemContent(class' = "gap-1") {
                             ItemTitle() { person.username }
                             ItemDescription() { person.email }
                         }
                         ItemActions() {
                             Button(variant = Button.Variant.Ghost,
                                    size = Button.Size.Icon,
                                    class' = "rounded-full") {
                                 Lucide.Lucide.Plus()
                             }
                         }
                     }
                     if idx() <> people.Length - 1 then
                         ItemSeparator()
                 }
            }
        }
    }
[<SolidComponent>]
let private HdrExample() =
    let models = [|
        {| name = "v0-1.5-sm"
           description = "Everyday tasks and UI generation"
           image = "https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop"
           credit = "Valeria Reverdo on Unsplash" |}
        {| name = "v0-1.5-sm"
           description = "Everyday tasks and UI generation"
           image = "https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop"
           credit = "Valeria Reverdo on Unsplash" |}
        {| name = "v0-1.5-sm"
           description = "Everyday tasks and UI generation"
           image = "https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop"
           credit = "Valeria Reverdo on Unsplash" |}
    |]
    div(class' = "flex w-full max-w-xl flex-col gap-6") {
        ItemGroup(class' = "grid grid-cols-3 gap-4") {
            For(each = models) { yield fun model _ ->
                Item(variant = Item.Variant.Outline) {
                    ItemHeader() {
                        Kobalte.Image(class' = "size-[128px]") {
                            Kobalte.Image.Img(src = model.image,
                                              class' = "aspect-square w-full rounded-sm object-cover",
                                              alt = model.name)
                        }
                    }
                    ItemContent() {
                        ItemTitle() { model.name }
                        ItemDescription() { model.description }
                    }
                } }
        }
    }
[<PartasStorybook>]
let private meta = storybook<Item> {
    render "VariantsExample" (ignore >> VariantsExample)
    render "SizeExample" (ignore >> SizeExample)
    render "IconExample" (ignore >> IconExample)
    render "AvatarExample" (ignore >> AvatarExample)
    render "ImageExample" (ignore >> ImgExample)
    render "GroupExample" (ignore >> GrpExample)
    render "HeaderExample" (ignore >> HdrExample)
    tags [|"!autodocs"|]
}


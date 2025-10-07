module Partas.Solid.UI.stories.Components.Empty.Empty_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Empty> {
    args "Default" ignore
    // Outline example
    render "Outline" (fun props ->
        Empty(class' = "border border-dashed") {
            EmptyHeader() {
                EmptyMedia(variant = EmptyMedia.Variant.Icon) {
                    Lucide.Lucide.Cloud()
                }
                EmptyTitle() { "Cloud Storage Empty" }
                EmptyDescription() {
                    "Upload files to your cload storage to access them anywhere."
                }
            }
            EmptyContent() {
                Button(variant = Button.Variant.Outline, size = Button.Size.Small) {
                    "Upload Files"
                }
            }
        }
        )
    // Background example
    render "Background" (fun props ->
        Empty(class' = "from-muted/50 to-background h-full bg-gradient-to-b from-30%") {
            EmptyHeader() {
                EmptyMedia(variant = EmptyMedia.Icon) {
                    Lucide.Lucide.Bell()
                }
                EmptyTitle() { "No Notifications" }
                EmptyDescription() {
                    "You're all caught up. New notifications will appear here."
                }
            }
            EmptyContent() {
                Button(variant = Button.Variant.Outline, size = Button.Size.Small) {
                    Lucide.Lucide.RefreshCcw()
                    "Refresh"
                }
                    
            }
        }
        )
    // Avatar Example
    render "AvatarExample" (fun props ->
        Empty() {
            EmptyHeader() {
                EmptyMedia(variant = EmptyMedia.Variant.Default) {
                    Avatar(class' = "size-12") {
                        AvatarImage(src = "https://github.com/shayanhabibi.png", class'= "grayscale")
                        AvatarFallback() { "SH" }
                    }
                }
                EmptyTitle() { "User Offline" }
                EmptyDescription() {
                    "This user is currently offline."
                    "You can leave a message to notify them or try again later."
                }
            }
            EmptyContent() {
                Button(size = Button.Size.Small) { "Leave Message" }
            }
        }
        )
    // avatar group example
    render "AvatarStackExample" (fun props ->
        let avatars = [|
            { new IAvatarStackItem with
                member this.initials = "SH"
                member this.avatar = "https://github.com/shayanhabibi.png" }
            { new IAvatarStackItem with
                member this.initials = "AD"
                member this.avatar = "https://github.com/disruptek.png" }
            { new IAvatarStackItem with
                member this.initials = "SG"
                member this.avatar = "https://github.com/saem.png" }
        |]
        Empty() {
            EmptyHeader() {
                EmptyMedia() {
                    AvatarStack<IAvatarStackItem>(items = avatars)
                }
                EmptyTitle() { "No Team Members" }
                EmptyDescription() { "Invite your team to collaborate on this project." }
            }
            EmptyContent() {
                Button(size = Button.Size.Small) {
                    Lucide.Lucide.Plus()
                    "Invite Members"
                }
            }
        }
        )
    render "InputGroupExample" (fun props ->
        Empty() {
            EmptyHeader() {
                EmptyTitle() { "404 - Not Found" }
                EmptyDescription() {
                    "The page you're looking for doesn't exist."
                    "Try searching for what you need below."
                }
            }
            EmptyContent() {
                InputGroup(class' = "sm:w-3/4") {
                    TextField(class' = "flex-1") {
                        InputGroupInput(placeholder = "Try searching for pages...")
                    }
                    InputGroupAddon() {
                        Lucide.Lucide.Search()
                    }
                    InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {
                        Kbd() { "/" }
                    }
                }
                EmptyDescription() {
                    "Need help?"
                    System.Char.empty
                    a(href = "#") { "Contact support" }
                }
            }
        }
        )
    tags [| "!autodocs" |]
}


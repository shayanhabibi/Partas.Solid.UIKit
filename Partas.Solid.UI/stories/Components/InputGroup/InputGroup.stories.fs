module Partas.Solid.UI.stories.Components.InputGroup.InputGroup_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<SolidComponent>]
let inline Example () =
    InputGroup() {
        TextField(class' = "flex-1") {
            
        InputGroupInput(placeholder = "Search...")
        }
        InputGroupAddon() {
            Lucide.Lucide.Search()
        }
        InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {
            InputGroupButton() { "Search" }
        }
    }
[<SolidComponent>]
let inline IconExample () =
    div(class' = "grid w-full max-w-sm gap-6") {
        InputGroup() {
            TextField(class' = "flex-1") {
                InputGroupInput(placeholder = "Search...")
            }
            InputGroupAddon() {
                Lucide.Lucide.Search()
            }
        }
        InputGroup() {
            TextField(class' = "flex-1") {
                
                InputGroupInput(
                    type' = TextField.Type.Email,
                    placeholder = "Enter your email"
                    )
            }
            InputGroupAddon() {
                Lucide.Lucide.Mail()
            }
        }
        InputGroup() {
            TextField(class' = "flex-1") {
                InputGroupInput(placeholder = "Card number")
            }
            InputGroupAddon() {
                Lucide.Lucide.CreditCard()
            }
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {
                Lucide.Lucide.Star()
                Lucide.Lucide.Info()
            }
        }
    }
[<SolidComponent>]
let inline TextExample () =
    div(class' = "grid w-full max-w-sm gap-6") {
        InputGroup() {
            InputGroupAddon() {
                InputGroupText() { "$" }
            }
            TextField(class' = "flex-1") {
                InputGroupInput(placeholder = "0.00")
            }
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {
                InputGroupText() { "USD" }
            }
        }
        InputGroup() {
            InputGroupAddon() {
                InputGroupText() { "https://" }
            }
            TextField(class' = "flex-1") {
                InputGroupInput(placeholder = "example.com",
                                class' = "!pl-0.5")
            }
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {
                InputGroupText() { "@company.com" }
            }
        }
        TextField().as'(InputGroup()) {
            InputGroupTextArea(placeholder = "Enter your message")
            InputGroupAddon(align = InputGroupAddon.Align.BlockEnd) {
                InputGroupText(class' = "text-muted-foreground text-xs") {
                    "120 characters left"
                }
            }
        }
    }
open Partas.Solid.Aria
[<SolidComponent>]
let inline ButtonExample () =
    let isCopied,setIsCopied = createSignal false
    let isFavourite, setIsFavourite = createSignal false
    div(class' = "grid w-full max-w-sm gap-6") {
        InputGroup() {
            TextField(class' = "flex-1") {
                InputGroupInput(placeholder = "https://x.com/shadcn",
                                readonly = true)
            }
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {
                InputGroupButton(ariaLabel = "Copy",
                                 title = "Copy",
                                 size = InputGroupButton.Size.IconExtraSmall,
                                 onClick = fun _ -> setIsCopied true) {
                    if isCopied() then
                        Lucide.Lucide.Check()
                    else
                        Lucide.Lucide.Copy()
                }
            }
        }
        InputGroup(class' = "[--radius:9999px]") {
            Popover(placement = Kobalte.Enums.Popover.Placement.LeftStart) {
                PopoverTrigger().as'(InputGroupAddon()) {
                    InputGroupButton(variant = InputGroupButton.Variant.Secondary,
                                     size = InputGroupButton.Size.IconExtraSmall) {
                        Lucide.Lucide.Info()
                    }
                }
                PopoverContent(class' = "flex flex-col gap-1 rounded-xl text-sm") {
                    p(class' = "font-medium") {
                        "Your connection is not secure."
                    }
                    p() { "You should not enter any sensitive information on this site." }
                }
            }
            InputGroupAddon(class' = "text-muted-foreground pl-1.5") {
                "https://"
            }
            TextField(class' = "flex-1") {
                InputGroupInput(id = "input-secure-19")
            }
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {
                InputGroupButton(size = InputGroupButton.Size.IconExtraSmall,
                                 onClick = fun _ -> setIsFavourite.Invoke(not)) {
                    Lucide.Lucide.Star(class' = "data-[favorite=true]:fill-blue-600 data-[favourite=true]:stroke-blue-600")
                        .data("favorite", unbox <| isFavourite())
                }
            }
        }
        InputGroup() {
            TextField(class' = "flex-1") {
                InputGroupInput(placeholder = "Type to search...")
            }
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {
                InputGroupButton(variant = InputGroupButton.Variant.Secondary) {
                    "Search"
                }
            }
        }
    }
[<SolidComponent>]
let inline TooltipExample () =
    div(class' = "grid w-full max-w-sm gap-4") {
        InputGroup() {
            TextField(class' = "flex-1") {
                InputGroupInput(placeholder = "Enter password",
                                type' = TextField.Type.Password)
            }
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {
                Tooltip() {
                    TooltipTrigger()
                        .as'(InputGroupButton(
                            variant = InputGroupButton.Variant.Ghost,
                            ariaLabel = "Info",
                            size = InputGroupButton.Size.IconExtraSmall
                            ))
                        { Lucide.Lucide.Info() }
                    TooltipContent() {
                        p() { "Password must be at least 8 characters" }
                    }
                }
            }
        }
        InputGroup() {
            TextField(class' = "flex-1") {
                InputGroupInput(placeholder = "Your email address")
            }
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {
                Tooltip() {
                    TooltipTrigger().as'(InputGroupButton(
                        variant = InputGroupButton.Variant.Ghost,
                        ariaLabel = "Help",
                        size = InputGroupButton.Size.ExtraSmall
                        )) {
                        Lucide.Lucide.CircleQuestionMark()
                    }
                    TooltipContent() {
                        p() { "We'll use this to send you notifications" }
                    }
                }
            }
        }
        InputGroup() {
            TextField(class' = "flex-1") {
                InputGroupInput(placeholder = "Enter API key")
            }
            Tooltip(placement = Kobalte.Enums.KobaltePlacement.Left) {
                TooltipTrigger().as'(InputGroupAddon()) {
                    InputGroupButton(variant = InputGroupButton.Variant.Ghost,
                                     ariaLabel = "Help",
                                     size = InputGroupButton.IconExtraSmall) {
                        Lucide.Lucide.CircleQuestionMark()
                    }
                }
                TooltipContent() {
                    p() { "Click for help with API keys" }
                }
            }
        }
    }
[<SolidComponent>]
let inline TextAreaExample() =
    div(class' = "grid w-full max-w-md gap-4") {
        TextField().as'(InputGroup()) {
            InputGroupTextArea(placeholder = """System.Console.WriteLine('Hello, world!')""",
                               class' = "min-h-[200px]")
            InputGroupAddon(class' = "border-t",
                            align = InputGroupAddon.Align.BlockEnd) {
                InputGroupText() { "Line 1, Column 1" }
                InputGroupButton(size = InputGroupButton.Size.Small,
                                 class' = "ml-auto",
                                 variant = InputGroupButton.Variant.Default) {
                    "Run "
                    Lucide.Lucide.CornerDownLeft()
                }
            }
            InputGroupAddon(align = InputGroupAddon.Align.BlockStart,
                            class' = "border-b") {
                InputGroupText(class' = "font-mono font-medium") {
                    Tabler.Tabler.BrandJavascript()
                    "script.js"
                }
                InputGroupButton(class' = "ml-auto",
                                 size = InputGroupButton.Size.IconExtraSmall) {
                    Lucide.Lucide.RefreshCcw()
                }
                InputGroupButton(variant = InputGroupButton.Variant.Ghost,
                                 size = InputGroupButton.Size.IconExtraSmall) {
                    Lucide.Lucide.Copy()
                }
            }
        }
    }

[<SolidComponent>]
let inline SpinnerExample () =
    div(class' = "grid w-full max-w-sm gap-4") {
        InputGroup().data("disabled", unbox true) {
            TextField(class' = "flex-1", disabled = true) {
                InputGroupInput(placeholder = "Searching...")
            }
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {
                Spinner()
            }
        }
        InputGroup().data("disabled", unbox true) {
            TextField(class' = "flex-1", disabled = true) {
                InputGroupInput(placeholder = "Processing...")
            }
            InputGroupAddon() {
                Spinner()
            }
        }
        InputGroup().data("disabled", unbox true) {
            TextField(class' = "flex-1", disabled = true) {
                InputGroupInput(placeholder = "Saving changes...")
            }
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {
                InputGroupText() { "Saving..." }
                Spinner()
            }
        }
        InputGroup().data("disabled", unbox true) {
            TextField(class' = "flex-1", disabled = true) {
                InputGroupInput(placeholder = "Refreshing data...")
            }
            InputGroupAddon() {
                Spinner(variant = Spinner.Variant.Default)
            }
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {
                InputGroupText(class' = "text-muted-foreground") {
                    "Please wait..."
                }
            }
        }
    }
[<PartasStorybook>]
let private meta = storybook<InputGroup> {
    render "Example" (ignore >> Example)
    render "IconExample" (ignore >> IconExample)
    render "TextExample" (ignore >> TextExample)
    render "ButtonExample" (ignore >> ButtonExample)
    render "TooltipExample" (ignore >> TooltipExample)
    render "TextAreaExample" (ignore >> TextAreaExample)
    render "SpinnerExample" (ignore >> SpinnerExample)
    tags [| "!autodocs" |]
}

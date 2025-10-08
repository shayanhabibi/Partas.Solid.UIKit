module Partas.Solid.UI.stories.Components.Card.Card_stories
open Partas.Solid
open Partas.Solid.Lucide.Lucide
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Card> {
    render (fun props ->
        let notifications = [|
            let makeNotif title desc = {| title = title; description = desc |}
            makeNotif "Your call has been confirmed" "1 hour ago"
            makeNotif "You have a new message!" "1 hour ago"
            makeNotif "Your subscription is expiring soon!" "2 hours ago"
        |]
        Card(class' = "w-[380px]") {
            CardHeader() {
                CardTitle() { "Notifications" }
                CardDescription() { "You have 3 unread messages." }
            }
            CardContent(class' = "grid gap-4") {
                div(class' = "flex items-center space-x-4 rounded-md border p-4") {
                    Bell(class' = "size-6")
                    div(class' = "flex-1 space-y-1") {
                        p(class' = "text-sm font-medium leading-none") {
                            "Push Notifications"
                        }
                        p(class' = "text-sm text-muted-foreground") {
                            "Send notifications to device."
                        }
                    }
                    Switch() {
                        SwitchControl() {
                            SwitchThumb()
                        }
                    }
                }
                For(each = notifications) {
                yield fun notification _ ->
                    div(class' = "mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0") {
                        span(class' = "flex size-2 translate-y-1 rounded-full bg-sky-500")
                        div(class' = "space-y-1") {
                            p(class' = "text-sm font-medium leading-none") { notification.title }
                            p(class' = "text-sm text-muted-foreground") { notification.description }
                        }
                    }
                }
            }
            CardFooter() {
                Button(class' = "w-full") {
                    Check(class' = "mr-2 size-4")
                    System.Char.empty
                    "Mark all as read"
                }
            }
        }
        )
    args "Default" ignore
    render "CardOnly" (fun props ->
        Card(class' = "h-[100px] w-lg") {
            div(class' = "size-full bg-accent")
        })
}


module Partas.Solid.UI.stories.Components.CardHover_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<ZHoverCardContainer> {
    render (fun props ->
        ZHoverCardContainer(class' = "inter-var") {
            ZHoverCardBody(
            class' =
                "bg-gray-50 relative group/card  dark:hover:shadow-2xl
                dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]
                border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
            ) {
                ZHoverCardItem(translateZ = 50, class' = "text-xl font-bold text-neutral-600 dark:text-white") {
                    "Make things float in air"
                }
                ZHoverCardItem(
                    translateZ = 60.,
                    class' = "text-neutral-500 text-sm max-w-sm mmt-2 dark:text-neutral-300"
                ) {
                    "Hover over this card to unleash the power of CSS perspective"
                }
                ZHoverCardItem(translateZ = 100., class' = "w-full mt-4") {
                    img(src = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        height = 1000, width = 1000,
                        class' = "h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl",
                        alt = "thumbnail")
                }
            }
        }

        )
    args "Default" (fun props -> ())
}

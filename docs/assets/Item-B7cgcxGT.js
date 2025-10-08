import{H as n,I as m,T as l,R as s,Q as p}from"./iframe-DHSEN8D7.js";import{useMDXComponents as o}from"./index-e4aCb-2o.js";import{S as a}from"./Item.stories-V0el3GhB.js";import{N as c}from"./Item-oNgh1nsy.js";import"./preload-helper-PPVm8Dsz.js";import"./Item-BeQ7R9Vu.js";import"./Utils-CzREY3kc.js";import"./index-SvhdUoxj.js";import"./Separator-DmtN1xBE.js";import"./T4C3DMHT-ByXrw0oU.js";import"./OYES4GOP-D4sXc2ip.js";import"./index-CX5o166x.js";import"./FLVHQV4A-VgAG7mUH.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-1c5Tq1Kt.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./Avatar-BlWIAkQu.js";import"./String-DLdTzCOk.js";import"./Button-BnulhXAt.js";import"./UKTBL2JL-D9vX2QTQ.js";import"./plus-BFX-n6c_.js";import"./Icon-By-Qgdq5.js";import"./chevron-right-B-Xbegzb.js";import"./AvatarStack-B3au3mLt.js";const d=`\uFEFFmodule Partas.Solid.UI.stories.Components.Item.Item_stories\r
open Partas.Solid\r
open Partas.Solid.UI\r
open Partas.Solid.Storybook\r
[<SolidComponent>]\r
let inline VariantsExample () =\r
    div(class' = "flex flex-col gap-6") {\r
        Item() {\r
            ItemContent() {\r
                ItemTitle() { "Default Variant" }\r
                ItemDescription() {\r
                    "Standard styling with subtle background and borders."\r
                }\r
            }\r
            ItemActions() {\r
                Button(variant = Button.Variant.Outline,\r
                       size = Button.Size.Small) {\r
                    "Open"\r
                }\r
            }\r
        }\r
        Item(variant = Item.Variant.Outline) {\r
            ItemContent() {\r
                ItemTitle() {\r
                    "Outline Variant"\r
                }\r
                ItemDescription() {\r
                    "Outlined style with clear borders and transparent background."\r
                }\r
            }\r
            ItemActions() {\r
                Button(variant = Button.Variant.Outline,\r
                       size = Button.Size.Small) {\r
                    "Open"\r
                }\r
            }\r
        }\r
        Item(variant = Item.Variant.Muted) {\r
            ItemContent() {\r
                ItemTitle() { "Muted Variant" }\r
                ItemDescription() {\r
                    "Subdued appearance with muted colors for secondary content."\r
                }\r
            }\r
            ItemActions() {\r
                Button(variant = Button.Variant.Outline,\r
                       size = Button.Size.Small) {\r
                    "Open"\r
                }\r
            }\r
        }\r
    }\r
[<SolidComponent>]\r
let inline SizeExample() =\r
    div(class' = "flex w-full max-w-md flex-col gap-6") {\r
        Item(variant = Item.Variant.Outline) {\r
            ItemContent() {\r
                ItemTitle() {\r
                    "Basic Item"\r
                }\r
                ItemDescription() {\r
                    "A simple item with title and description"\r
                }\r
            }\r
            ItemActions() {\r
                Button(variant = Button.Variant.Outline,\r
                       size = Button.Size.Small) {\r
                    "Action"\r
                }\r
            }\r
        }\r
        Item(variant = Item.Variant.Outline,\r
             size = Item.Size.Small) {\r
                ItemMedia() {\r
                    Lucide.Lucide.BadgeCheck(class' = "size-5")\r
                }\r
                ItemContent() {\r
                    ItemTitle() { "Your profile has been verified." }\r
                }\r
                ItemActions() {\r
                    Lucide.Lucide.ChevronRight(class' = "size-4")\r
                }\r
        }\r
    }\r
[<SolidComponent>]\r
let inline IconExample () =\r
    div(class' = "flex w-full max-w-lg flex-col gap-6") {\r
        Item(variant = Item.Variant.Outline) {\r
            ItemMedia(variant = ItemMedia.Variant.Icon) {\r
                Lucide.Lucide.ShieldAlert()\r
            }\r
            ItemContent() {\r
                ItemTitle() { "Security Alert" }\r
                ItemDescription() {\r
                    "New login detected from unknown device."\r
                }\r
            }\r
            ItemActions() {\r
                Button(size = Button.Size.Small, variant = Button.Variant.Outline) {\r
                    "Review"\r
                }\r
            }\r
        }\r
    }\r
open Partas.Solid.Aria\r
[<SolidComponent>]\r
let inline AvatarExample () =\r
    div(class' = "flex w-full max-w-lg flex-col gap-6") {\r
        Item(variant = Item.Variant.Outline) {\r
            ItemMedia() {\r
                Avatar(class' = "size-10") {\r
                    AvatarImage(src = "https://github.com/shayanhabibi.png")\r
                    AvatarFallback() { "SH" }\r
                }\r
            }\r
            ItemContent() {\r
                ItemTitle() { "Shayan Habibi" }\r
                ItemDescription() { "Last seen 5 eons ago" }\r
            }\r
            ItemActions() {\r
                Button(size = Button.Size.IconSmall,\r
                       variant = Button.Variant.Outline,\r
                       class' = "rounded-full",\r
                       ariaLabel = "Invite") {\r
                    Lucide.Lucide.Plus()\r
                }\r
            }\r
        }\r
        Item(variant = Item.Variant.Outline) {\r
            ItemMedia() {\r
                AvatarStack<IAvatarStackItem>(items = [|\r
                    { new IAvatarStackItem with\r
                        member this.avatar = "https://github.com/shayanhabibi.png"\r
                        member this.initials = "SH" }\r
                    { new IAvatarStackItem with\r
                        member this.avatar = "https://github.com/saem.png"\r
                        member this.initials = "SG" }\r
                    { new IAvatarStackItem with\r
                        member this.avatar = "https://github.com/disruptek.png"\r
                        member this.initials = "AG" }\r
                |])\r
            }\r
            ItemContent() {\r
                ItemTitle() { "No Team Members" }\r
                ItemDescription() { "Invite your team to collaborate on this project." }\r
            }\r
            ItemActions() {\r
                Button(size = Button.Size.Small, variant = Button.Variant.Outline) {\r
                    "Invite"\r
                }\r
            }\r
        }\r
    }\r
[<SolidComponent>]\r
let private ImgExample () =\r
    let music = [|\r
        {| title = "Midnight City Lights"\r
           artist = "Neon Dreams"\r
           album = "Electric Nights"\r
           duration = "3:45" |}\r
        {| title = "Coffee Shop Conversations"\r
           artist = "The Morning Brew"\r
           album = "Urban Stories"\r
           duration = "4:05" |}\r
        {| title = "Digital Rain"\r
           artist = "Cyber Symphony"\r
           album = "Binary Beats"\r
           duration = "3:34" |}\r
    |]\r
    div(class' = "flex w-full max-w-md flex-col gap-6") {\r
        ItemGroup(class' = "gap-4") {\r
            For(each = music) { yield fun item _ ->\r
                Item(variant = Item.Variant.Outline, role = "listitem") {\r
                    ItemMedia(variant = ItemMedia.Variant.Image) {\r
                        Kobalte.Image(class' = "size-32 object-cover grayscale") {\r
                            Kobalte.Image.Img(src = $"https://avatar.vercel.sh/{item.title}")\r
                        }\r
                    }\r
                    ItemContent() {\r
                        ItemTitle(class' = "line-clamp-1") {\r
                            item.title\r
                            System.Char.empty\r
                            "-"\r
                            System.Char.empty\r
                            span(class' = "text-muted-foreground") { item.album }\r
                        }\r
                        ItemDescription() {\r
                            item.artist\r
                        }\r
                    }\r
                    ItemContent(class' = "flex-none, text-center") {\r
                        ItemDescription() { item.duration }\r
                    }\r
                } }\r
        }\r
    }\r
[<SolidComponent>]\r
let private GrpExample () =\r
    let people = [|\r
        {| username = "shayanhabibi"\r
           avatar = "https://github.com/shayanhabibi.png"\r
           email = "email@email.com" |}\r
        {| username = "saem"\r
           avatar = "https://github.com/saem.png"\r
           email = "email@email.com" |}\r
        {| username = "disruptek"\r
           avatar = "https://github.com/disruptek.png"\r
           email = "email@email.com" |}\r
    |]\r
    div(class' = "flex w-full max-w-md flex-col gap-6") {\r
        ItemGroup() {\r
            For(each = people) { yield fun person idx ->\r
                 Fragment() {\r
                     Item() {\r
                         ItemMedia() {\r
                             Avatar() {\r
                                 AvatarImage(src = person.avatar, class' = "grayscale")\r
                                 AvatarFallback() { string person.username[0] }\r
                             }\r
                         }\r
                         ItemContent(class' = "gap-1") {\r
                             ItemTitle() { person.username }\r
                             ItemDescription() { person.email }\r
                         }\r
                         ItemActions() {\r
                             Button(variant = Button.Variant.Ghost,\r
                                    size = Button.Size.Icon,\r
                                    class' = "rounded-full") {\r
                                 Lucide.Lucide.Plus()\r
                             }\r
                         }\r
                     }\r
                     if idx() <> people.Length - 1 then\r
                         ItemSeparator()\r
                 }\r
            }\r
        }\r
    }\r
[<SolidComponent>]\r
let private HdrExample() =\r
    let models = [|\r
        {| name = "v0-1.5-sm"\r
           description = "Everyday tasks and UI generation"\r
           image = "https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop"\r
           credit = "Valeria Reverdo on Unsplash" |}\r
        {| name = "v0-1.5-sm"\r
           description = "Everyday tasks and UI generation"\r
           image = "https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop"\r
           credit = "Valeria Reverdo on Unsplash" |}\r
        {| name = "v0-1.5-sm"\r
           description = "Everyday tasks and UI generation"\r
           image = "https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop"\r
           credit = "Valeria Reverdo on Unsplash" |}\r
    |]\r
    div(class' = "flex w-full max-w-xl flex-col gap-6") {\r
        ItemGroup(class' = "grid grid-cols-3 gap-4") {\r
            For(each = models) { yield fun model _ ->\r
                Item(variant = Item.Variant.Outline) {\r
                    ItemHeader() {\r
                        Kobalte.Image(class' = "size-[128px]") {\r
                            Kobalte.Image.Img(src = model.image,\r
                                              class' = "aspect-square w-full rounded-sm object-cover",\r
                                              alt = model.name)\r
                        }\r
                    }\r
                    ItemContent() {\r
                        ItemTitle() { model.name }\r
                        ItemDescription() { model.description }\r
                    }\r
                } }\r
        }\r
    }\r
[<PartasStorybook>]\r
let private meta = storybook<Item> {\r
    render "VariantsExample" (ignore >> VariantsExample)\r
    render "SizeExample" (ignore >> SizeExample)\r
    render "IconExample" (ignore >> IconExample)\r
    render "AvatarExample" (ignore >> AvatarExample)\r
    render "ImageExample" (ignore >> ImgExample)\r
    render "GroupExample" (ignore >> GrpExample)\r
    render "HeaderExample" (ignore >> HdrExample)\r
    tags [|"!autodocs"|]\r
}\r
\r
`;function i(r){const e={p:"p",...o(),...r.components},{SourceCode:t}=e;return t||u("SourceCode"),n.jsxs(n.Fragment,{children:[n.jsx(m,{of:a}),`
`,n.jsx(l,{}),`
`,n.jsx(t,{code:c}),`
`,n.jsx(s,{}),`
`,n.jsx(e.p,{children:"See the example code:"}),`
`,n.jsx(t,{code:d}),`
`,n.jsx(p,{of:a})]})}function U(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}function u(r,e){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{U as default};

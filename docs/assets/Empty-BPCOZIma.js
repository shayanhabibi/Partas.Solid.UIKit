import{H as r,I as p,T as m,L as e,Q as s}from"./iframe-DHSEN8D7.js";import{useMDXComponents as i}from"./index-e4aCb-2o.js";import{E as l,O as u,B as d,A as c,a as h,I as y}from"./Empty.stories-C37DYj1G.js";import"./EmptyHeader.stories-CpxBI9u6.js";import{E}from"./EmptyMedia.stories-DxHCGjL-.js";import"./EmptyTitle.stories-CwGEr4D2.js";import"./EmptyContent.stories-BBUhn7Oc.js";import{K as f}from"./Empty-D2SBt1nw.js";import"./preload-helper-PPVm8Dsz.js";import"./Empty-8w79TWEN.js";import"./Utils-CzREY3kc.js";import"./index-SvhdUoxj.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./Icon-By-Qgdq5.js";import"./Button-BnulhXAt.js";import"./UKTBL2JL-D9vX2QTQ.js";import"./OYES4GOP-D4sXc2ip.js";import"./index-CX5o166x.js";import"./FLVHQV4A-VgAG7mUH.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-1c5Tq1Kt.js";import"./bell-CFmUCAp-.js";import"./refresh-ccw-HYpN1e5R.js";import"./Avatar-BlWIAkQu.js";import"./AvatarStack-B3au3mLt.js";import"./plus-BFX-n6c_.js";import"./InputGroup-BfwLSD-G.js";import"./Seq-ByxJMUaL.js";import"./Types-CqbaJdUC.js";import"./FSharp.Core-D1Pte0FF.js";import"./String-DLdTzCOk.js";import"./Array-C0Iq9Aiw.js";import"./List-CXqaB21e.js";import"./Text-nkWEn69A.js";import"./MKJEDDFV-EnaCE2Sw.js";import"./NGHEENNE-Dj0dKL4v.js";import"./ZZYKR3VO-sS--fHny.js";import"./JNCCF6MP-4sxnBYeu.js";import"./FN6EICGO-CNc9l087.js";import"./search-DRe7ScFO.js";import"./Kbd-D-w_mQ7U.js";const x=`\uFEFFmodule Partas.Solid.UI.stories.Components.Empty.Empty_stories\r
open Partas.Solid\r
open Partas.Solid.UI\r
open Partas.Solid.Storybook\r
[<PartasStorybook>]\r
let private meta = storybook<Empty> {\r
    args "Default" ignore\r
    // Outline example\r
    render "Outline" (fun props ->\r
        Empty(class' = "border border-dashed") {\r
            EmptyHeader() {\r
                EmptyMedia(variant = EmptyMedia.Variant.Icon) {\r
                    Lucide.Lucide.Cloud()\r
                }\r
                EmptyTitle() { "Cloud Storage Empty" }\r
                EmptyDescription() {\r
                    "Upload files to your cload storage to access them anywhere."\r
                }\r
            }\r
            EmptyContent() {\r
                Button(variant = Button.Variant.Outline, size = Button.Size.Small) {\r
                    "Upload Files"\r
                }\r
            }\r
        }\r
        )\r
    // Background example\r
    render "Background" (fun props ->\r
        Empty(class' = "from-muted/50 to-background h-full bg-gradient-to-b from-30%") {\r
            EmptyHeader() {\r
                EmptyMedia(variant = EmptyMedia.Icon) {\r
                    Lucide.Lucide.Bell()\r
                }\r
                EmptyTitle() { "No Notifications" }\r
                EmptyDescription() {\r
                    "You're all caught up. New notifications will appear here."\r
                }\r
            }\r
            EmptyContent() {\r
                Button(variant = Button.Variant.Outline, size = Button.Size.Small) {\r
                    Lucide.Lucide.RefreshCcw()\r
                    "Refresh"\r
                }\r
                    \r
            }\r
        }\r
        )\r
    // Avatar Example\r
    render "AvatarExample" (fun props ->\r
        Empty() {\r
            EmptyHeader() {\r
                EmptyMedia(variant = EmptyMedia.Variant.Default) {\r
                    Avatar(class' = "size-12") {\r
                        AvatarImage(src = "https://github.com/shayanhabibi.png", class'= "grayscale")\r
                        AvatarFallback() { "SH" }\r
                    }\r
                }\r
                EmptyTitle() { "User Offline" }\r
                EmptyDescription() {\r
                    "This user is currently offline."\r
                    "You can leave a message to notify them or try again later."\r
                }\r
            }\r
            EmptyContent() {\r
                Button(size = Button.Size.Small) { "Leave Message" }\r
            }\r
        }\r
        )\r
    // avatar group example\r
    render "AvatarStackExample" (fun props ->\r
        let avatars = [|\r
            { new IAvatarStackItem with\r
                member this.initials = "SH"\r
                member this.avatar = "https://github.com/shayanhabibi.png" }\r
            { new IAvatarStackItem with\r
                member this.initials = "AD"\r
                member this.avatar = "https://github.com/disruptek.png" }\r
            { new IAvatarStackItem with\r
                member this.initials = "SG"\r
                member this.avatar = "https://github.com/saem.png" }\r
        |]\r
        Empty() {\r
            EmptyHeader() {\r
                EmptyMedia() {\r
                    AvatarStack<IAvatarStackItem>(items = avatars)\r
                }\r
                EmptyTitle() { "No Team Members" }\r
                EmptyDescription() { "Invite your team to collaborate on this project." }\r
            }\r
            EmptyContent() {\r
                Button(size = Button.Size.Small) {\r
                    Lucide.Lucide.Plus()\r
                    "Invite Members"\r
                }\r
            }\r
        }\r
        )\r
    render "InputGroupExample" (fun props ->\r
        Empty() {\r
            EmptyHeader() {\r
                EmptyTitle() { "404 - Not Found" }\r
                EmptyDescription() {\r
                    "The page you're looking for doesn't exist."\r
                    "Try searching for what you need below."\r
                }\r
            }\r
            EmptyContent() {\r
                InputGroup(class' = "sm:w-3/4") {\r
                    TextField(class' = "flex-1") {\r
                        InputGroupInput(placeholder = "Try searching for pages...")\r
                    }\r
                    InputGroupAddon() {\r
                        Lucide.Lucide.Search()\r
                    }\r
                    InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {\r
                        Kbd() { "/" }\r
                    }\r
                }\r
                EmptyDescription() {\r
                    "Need help?"\r
                    System.Char.empty\r
                    a(href = "#") { "Contact support" }\r
                }\r
            }\r
        }\r
        )\r
    tags [| "!autodocs" |]\r
}\r
\r
`;function a(n){const t={h2:"h2",h3:"h3",p:"p",...i(),...n.components},{SourceCode:o}=t;return o||g("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:l}),`
`,r.jsx(m,{}),`
`,r.jsx(o,{code:f}),`
`,r.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,r.jsx(t.h3,{id:"outline",children:"Outline"}),`
`,r.jsx(e,{of:u,withToolbar:!0}),`
`,r.jsx(t.h3,{id:"background",children:"Background"}),`
`,r.jsx(e,{of:d,withToolbar:!0,layout:"full"}),`
`,r.jsx(t.h3,{id:"avatar",children:"Avatar"}),`
`,r.jsx(e,{of:c,withToolbar:!0,layout:"full"}),`
`,r.jsx(t.h3,{id:"avatar-stack",children:"Avatar Stack"}),`
`,r.jsx(e,{of:h,withToolbar:!0,layout:"full"}),`
`,r.jsx(t.h3,{id:"input-group",children:"Input Group"}),`
`,r.jsx(e,{of:y,withToolbar:!0,layout:"full"}),`
`,r.jsx(t.p,{children:"See the example code:"}),`
`,r.jsx(o,{code:x}),`
`,r.jsx(t.h2,{id:"empty-media",children:"Empty Media"}),`
`,r.jsx(s,{of:E})]})}function mr(n={}){const{wrapper:t}={...i(),...n.components};return t?r.jsx(t,{...n,children:r.jsx(a,{...n})}):a(n)}function g(n,t){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{mr as default};

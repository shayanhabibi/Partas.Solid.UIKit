import{H as n,I as l,T as a,R as d,Q as e}from"./iframe-DHSEN8D7.js";import{useMDXComponents as i}from"./index-e4aCb-2o.js";import{S as p}from"./InputGroup.stories-DcTaz6_Q.js";import{S as s}from"./InputGroupAddon.stories-MxgoP1TI.js";import{S as I}from"./InputGroupButton.stories-CRF3rpnM.js";import{S as c}from"./InputGroupInput.stories-Dq6tre96.js";import{M as m}from"./InputGroup-D0dsBI9_.js";import"./preload-helper-PPVm8Dsz.js";import"./InputGroup-BfwLSD-G.js";import"./Utils-CzREY3kc.js";import"./index-SvhdUoxj.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./Seq-ByxJMUaL.js";import"./Types-CqbaJdUC.js";import"./FSharp.Core-D1Pte0FF.js";import"./String-DLdTzCOk.js";import"./Array-C0Iq9Aiw.js";import"./List-CXqaB21e.js";import"./Button-BnulhXAt.js";import"./UKTBL2JL-D9vX2QTQ.js";import"./OYES4GOP-D4sXc2ip.js";import"./index-CX5o166x.js";import"./FLVHQV4A-VgAG7mUH.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-1c5Tq1Kt.js";import"./Text-nkWEn69A.js";import"./MKJEDDFV-EnaCE2Sw.js";import"./NGHEENNE-Dj0dKL4v.js";import"./ZZYKR3VO-sS--fHny.js";import"./JNCCF6MP-4sxnBYeu.js";import"./FN6EICGO-CNc9l087.js";import"./search-DRe7ScFO.js";import"./Icon-By-Qgdq5.js";import"./mail-DI84t236.js";import"./circle-question-mark-doJ2-4MF.js";import"./check-B6yQMYMS.js";import"./Popover-CB59b4Rz.js";import"./2CTBMVJ4-Db2FGNLe.js";import"./LR7LBJN3-B1LX4Q8m.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./combineProps-ChBwTExo.js";import"./FBCYWU27-BRaomcyy.js";import"./3VFJM5NZ-DDmjFnWc.js";import"./JHMNWOLY-BX05bB8i.js";import"./E53DB7BS-C475FHrG.js";import"./index-B53RNSLG.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-ptAOXcxb.js";import"./Tooltip-BEV_7GtL.js";import"./refresh-ccw-HYpN1e5R.js";import"./Spinner-CE2O51dA.js";const x=`\uFEFFmodule Partas.Solid.UI.stories.Components.InputGroup.InputGroup_stories\r
open Partas.Solid\r
open Partas.Solid.UI\r
open Partas.Solid.Storybook\r
[<SolidComponent>]\r
let inline Example () =\r
    InputGroup() {\r
        TextField(class' = "flex-1") {\r
            \r
        InputGroupInput(placeholder = "Search...")\r
        }\r
        InputGroupAddon() {\r
            Lucide.Lucide.Search()\r
        }\r
        InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {\r
            InputGroupButton() { "Search" }\r
        }\r
    }\r
[<SolidComponent>]\r
let inline IconExample () =\r
    div(class' = "grid w-full max-w-sm gap-6") {\r
        InputGroup() {\r
            TextField(class' = "flex-1") {\r
                InputGroupInput(placeholder = "Search...")\r
            }\r
            InputGroupAddon() {\r
                Lucide.Lucide.Search()\r
            }\r
        }\r
        InputGroup() {\r
            TextField(class' = "flex-1") {\r
                \r
                InputGroupInput(\r
                    type' = TextField.Type.Email,\r
                    placeholder = "Enter your email"\r
                    )\r
            }\r
            InputGroupAddon() {\r
                Lucide.Lucide.Mail()\r
            }\r
        }\r
        InputGroup() {\r
            TextField(class' = "flex-1") {\r
                InputGroupInput(placeholder = "Card number")\r
            }\r
            InputGroupAddon() {\r
                Lucide.Lucide.CreditCard()\r
            }\r
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {\r
                Lucide.Lucide.Star()\r
                Lucide.Lucide.Info()\r
            }\r
        }\r
    }\r
[<SolidComponent>]\r
let inline TextExample () =\r
    div(class' = "grid w-full max-w-sm gap-6") {\r
        InputGroup() {\r
            InputGroupAddon() {\r
                InputGroupText() { "$" }\r
            }\r
            TextField(class' = "flex-1") {\r
                InputGroupInput(placeholder = "0.00")\r
            }\r
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {\r
                InputGroupText() { "USD" }\r
            }\r
        }\r
        InputGroup() {\r
            InputGroupAddon() {\r
                InputGroupText() { "https://" }\r
            }\r
            TextField(class' = "flex-1") {\r
                InputGroupInput(placeholder = "example.com",\r
                                class' = "!pl-0.5")\r
            }\r
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {\r
                InputGroupText() { "@company.com" }\r
            }\r
        }\r
        TextField().as'(InputGroup()) {\r
            InputGroupTextArea(placeholder = "Enter your message")\r
            InputGroupAddon(align = InputGroupAddon.Align.BlockEnd) {\r
                InputGroupText(class' = "text-muted-foreground text-xs") {\r
                    "120 characters left"\r
                }\r
            }\r
        }\r
    }\r
open Partas.Solid.Aria\r
[<SolidComponent>]\r
let inline ButtonExample () =\r
    let isCopied,setIsCopied = createSignal false\r
    let isFavourite, setIsFavourite = createSignal false\r
    div(class' = "grid w-full max-w-sm gap-6") {\r
        InputGroup() {\r
            TextField(class' = "flex-1") {\r
                InputGroupInput(placeholder = "https://x.com/shadcn",\r
                                readonly = true)\r
            }\r
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {\r
                InputGroupButton(ariaLabel = "Copy",\r
                                 title = "Copy",\r
                                 size = InputGroupButton.Size.IconExtraSmall,\r
                                 onClick = fun _ -> setIsCopied true) {\r
                    if isCopied() then\r
                        Lucide.Lucide.Check()\r
                    else\r
                        Lucide.Lucide.Copy()\r
                }\r
            }\r
        }\r
        InputGroup(class' = "[--radius:9999px]") {\r
            Popover(placement = Kobalte.Enums.Popover.Placement.LeftStart) {\r
                PopoverTrigger().as'(InputGroupAddon()) {\r
                    InputGroupButton(variant = InputGroupButton.Variant.Secondary,\r
                                     size = InputGroupButton.Size.IconExtraSmall) {\r
                        Lucide.Lucide.Info()\r
                    }\r
                }\r
                PopoverContent(class' = "flex flex-col gap-1 rounded-xl text-sm") {\r
                    p(class' = "font-medium") {\r
                        "Your connection is not secure."\r
                    }\r
                    p() { "You should not enter any sensitive information on this site." }\r
                }\r
            }\r
            InputGroupAddon(class' = "text-muted-foreground pl-1.5") {\r
                "https://"\r
            }\r
            TextField(class' = "flex-1") {\r
                InputGroupInput(id = "input-secure-19")\r
            }\r
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {\r
                InputGroupButton(size = InputGroupButton.Size.IconExtraSmall,\r
                                 onClick = fun _ -> setIsFavourite.Invoke(not)) {\r
                    Lucide.Lucide.Star(class' = "data-[favorite=true]:fill-blue-600 data-[favourite=true]:stroke-blue-600")\r
                        .data("favorite", unbox <| isFavourite())\r
                }\r
            }\r
        }\r
        InputGroup() {\r
            TextField(class' = "flex-1") {\r
                InputGroupInput(placeholder = "Type to search...")\r
            }\r
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {\r
                InputGroupButton(variant = InputGroupButton.Variant.Secondary) {\r
                    "Search"\r
                }\r
            }\r
        }\r
    }\r
[<SolidComponent>]\r
let inline TooltipExample () =\r
    div(class' = "grid w-full max-w-sm gap-4") {\r
        InputGroup() {\r
            TextField(class' = "flex-1") {\r
                InputGroupInput(placeholder = "Enter password",\r
                                type' = TextField.Type.Password)\r
            }\r
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {\r
                Tooltip() {\r
                    TooltipTrigger()\r
                        .as'(InputGroupButton(\r
                            variant = InputGroupButton.Variant.Ghost,\r
                            ariaLabel = "Info",\r
                            size = InputGroupButton.Size.IconExtraSmall\r
                            ))\r
                        { Lucide.Lucide.Info() }\r
                    TooltipContent() {\r
                        p() { "Password must be at least 8 characters" }\r
                    }\r
                }\r
            }\r
        }\r
        InputGroup() {\r
            TextField(class' = "flex-1") {\r
                InputGroupInput(placeholder = "Your email address")\r
            }\r
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {\r
                Tooltip() {\r
                    TooltipTrigger().as'(InputGroupButton(\r
                        variant = InputGroupButton.Variant.Ghost,\r
                        ariaLabel = "Help",\r
                        size = InputGroupButton.Size.ExtraSmall\r
                        )) {\r
                        Lucide.Lucide.CircleQuestionMark()\r
                    }\r
                    TooltipContent() {\r
                        p() { "We'll use this to send you notifications" }\r
                    }\r
                }\r
            }\r
        }\r
        InputGroup() {\r
            TextField(class' = "flex-1") {\r
                InputGroupInput(placeholder = "Enter API key")\r
            }\r
            Tooltip(placement = Kobalte.Enums.KobaltePlacement.Left) {\r
                TooltipTrigger().as'(InputGroupAddon()) {\r
                    InputGroupButton(variant = InputGroupButton.Variant.Ghost,\r
                                     ariaLabel = "Help",\r
                                     size = InputGroupButton.IconExtraSmall) {\r
                        Lucide.Lucide.CircleQuestionMark()\r
                    }\r
                }\r
                TooltipContent() {\r
                    p() { "Click for help with API keys" }\r
                }\r
            }\r
        }\r
    }\r
[<SolidComponent>]\r
let inline TextAreaExample() =\r
    div(class' = "grid w-full max-w-md gap-4") {\r
        TextField().as'(InputGroup()) {\r
            InputGroupTextArea(placeholder = """System.Console.WriteLine('Hello, world!')""",\r
                               class' = "min-h-[200px]")\r
            InputGroupAddon(class' = "border-t",\r
                            align = InputGroupAddon.Align.BlockEnd) {\r
                InputGroupText() { "Line 1, Column 1" }\r
                InputGroupButton(size = InputGroupButton.Size.Small,\r
                                 class' = "ml-auto",\r
                                 variant = InputGroupButton.Variant.Default) {\r
                    "Run "\r
                    Lucide.Lucide.CornerDownLeft()\r
                }\r
            }\r
            InputGroupAddon(align = InputGroupAddon.Align.BlockStart,\r
                            class' = "border-b") {\r
                InputGroupText(class' = "font-mono font-medium") {\r
                    Tabler.Tabler.BrandJavascript()\r
                    "script.js"\r
                }\r
                InputGroupButton(class' = "ml-auto",\r
                                 size = InputGroupButton.Size.IconExtraSmall) {\r
                    Lucide.Lucide.RefreshCcw()\r
                }\r
                InputGroupButton(variant = InputGroupButton.Variant.Ghost,\r
                                 size = InputGroupButton.Size.IconExtraSmall) {\r
                    Lucide.Lucide.Copy()\r
                }\r
            }\r
        }\r
    }\r
\r
[<SolidComponent>]\r
let inline SpinnerExample () =\r
    div(class' = "grid w-full max-w-sm gap-4") {\r
        InputGroup().data("disabled", unbox true) {\r
            TextField(class' = "flex-1", disabled = true) {\r
                InputGroupInput(placeholder = "Searching...")\r
            }\r
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {\r
                Spinner()\r
            }\r
        }\r
        InputGroup().data("disabled", unbox true) {\r
            TextField(class' = "flex-1", disabled = true) {\r
                InputGroupInput(placeholder = "Processing...")\r
            }\r
            InputGroupAddon() {\r
                Spinner()\r
            }\r
        }\r
        InputGroup().data("disabled", unbox true) {\r
            TextField(class' = "flex-1", disabled = true) {\r
                InputGroupInput(placeholder = "Saving changes...")\r
            }\r
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {\r
                InputGroupText() { "Saving..." }\r
                Spinner()\r
            }\r
        }\r
        InputGroup().data("disabled", unbox true) {\r
            TextField(class' = "flex-1", disabled = true) {\r
                InputGroupInput(placeholder = "Refreshing data...")\r
            }\r
            InputGroupAddon() {\r
                Spinner(variant = Spinner.Variant.Default)\r
            }\r
            InputGroupAddon(align = InputGroupAddon.Align.InlineEnd) {\r
                InputGroupText(class' = "text-muted-foreground") {\r
                    "Please wait..."\r
                }\r
            }\r
        }\r
    }\r
[<PartasStorybook>]\r
let private meta = storybook<InputGroup> {\r
    render "Example" (ignore >> Example)\r
    render "IconExample" (ignore >> IconExample)\r
    render "TextExample" (ignore >> TextExample)\r
    render "ButtonExample" (ignore >> ButtonExample)\r
    render "TooltipExample" (ignore >> TooltipExample)\r
    render "TextAreaExample" (ignore >> TextAreaExample)\r
    render "SpinnerExample" (ignore >> SpinnerExample)\r
    tags [| "!autodocs" |]\r
}\r
`;function u(t){const r={h2:"h2",h3:"h3",p:"p",...i(),...t.components},{SourceCode:o}=r;return o||G("SourceCode"),n.jsxs(n.Fragment,{children:[n.jsx(l,{of:p}),`
`,n.jsx(a,{}),`
`,n.jsx(o,{code:m}),`
`,n.jsx(d,{of:p}),`
`,n.jsx(r.p,{children:"See the example code:"}),`
`,n.jsx(o,{code:x}),`
`,n.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(r.h3,{id:"inputgroupaddon",children:"InputGroupAddon"}),`
`,n.jsx(e,{of:s}),`
`,n.jsx(r.h3,{id:"inputgroupbutton",children:"InputGroupButton"}),`
`,n.jsx(e,{of:I}),`
`,n.jsx(r.h3,{id:"inputgroupinput",children:"InputGroupInput"}),`
`,n.jsx(e,{of:c})]})}function gn(t={}){const{wrapper:r}={...i(),...t.components};return r?n.jsx(r,{...t,children:n.jsx(u,{...t})}):u(t)}function G(t,r){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{gn as default};

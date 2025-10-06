import{G as n,H as d,T as i,K as m,O as e}from"./iframe-BLvaHOrW.js";import{useMDXComponents as p}from"./index-DMt2PYli.js";import{C as a,E as c,D as l}from"./Command.stories-BlnSOHKx.js";import{C as u}from"./CommandDialog.stories-BwD6Dpp1.js";import{C as h}from"./CommandInputs.stories-BkBSnxkM.js";import{C}from"./CommandLists.stories-DYubWY_t.js";import{C as g}from"./CommandEmptys.stories-DOCz3j6C.js";import{C as x}from"./CommandGroups.stories-CyZGiDkW.js";import{C as f}from"./CommandSeparators.stories-BYvnDsjx.js";import{C as k}from"./CommandItems.stories-3DfySiH-.js";import{C as y}from"./CommandShortcuts.stories-CsdgnUxX.js";import"./preload-helper-PPVm8Dsz.js";import"./Command-BtjDjY8m.js";import"./index-TpYiyspx.js";import"./index-BbcR3rHk.js";import"./index-C2xVdcqa.js";import"./combineProps-TuyxsfEg.js";import"./index-BAQLNUOo.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./Utils-BEjpZvS7.js";import"./PLLNVYER-BR5Aza65.js";import"./FBCYWU27-BMpJGD58.js";import"./3VFJM5NZ-Df8-87fx.js";import"./FLVHQV4A-ByRBKILc.js";import"./JHMNWOLY-CsDzS1Uk.js";import"./E53DB7BS-DgMsdUV6.js";import"./FN6EICGO-DozerlcD.js";import"./UKTBL2JL-mrSn-dg4.js";import"./OYES4GOP-DJL3U5Gx.js";import"./5WXHJDCZ-DghNgBBa.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-D5LuZuuz.js";import"./Dialog-BT7RlJdk.js";import"./x-BUrLKQu7.js";import"./Icon-BmtgjGtw.js";import"./search-CZCS2YS0.js";import"./calendar-Ct2uZJad.js";import"./settings-CurjhxxB.js";import"./Button-CjiiobU-.js";import"./Option-B9lMbA8r.js";import"./Util-jMr-gVD5.js";const b=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Cmdk\r
open Fable.Core\r
\r
\r
[<Erase>]\r
type Command() =\r
    inherit Cmdk.Command()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Cmdk.Command(\r
            class'= Lib.cn [|\r
            "flex size-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground blur-none"\r
            props.class'\r
        |]\r
        ).spread(props)\r
\r
[<Erase>]\r
type CommandDialog() =\r
    inherit Kobalte.Dialog()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Dialog().spread(props) {\r
            DialogContent(class'="overflow-hidden p-0") {\r
                Command(\r
                    class' = "[&_[cmdk-group-heading]]:px-2\r
                    [&_[cmdk-group-heading]]:font-medium\r
                    [&_[cmdk-group-heading]]:text-muted-foreground\r
                    [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0\r
                    [&_[cmdk-input-wrapper]_svg]:size-5\r
                    [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2\r
                    [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:size-5"\r
                    ) {\r
                    props.children\r
                }\r
            }\r
        }\r
\r
[<Erase; CompiledName("CommandInputs")>]\r
type CommandInputs() =\r
    inherit Command.Input()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        div(class'="flex items-center border-b px-3").attr("cmdk-input-wrapper", "") {\r
            Lucide.Lucide.Search(class'="mr-2 size-4 shrink-0 opacity-50", strokeWidth = 2)\r
            Cmdk.Command.Input(class'= Lib.cn [|\r
                "flex h-10 w-full rounded-md bg-transparent\r
                py-3 text-sm outline-none\r
                placeholder:text-muted-foreground\r
                disabled:cursor-not-allowed disabled:opacity-50"\r
                props.class'\r
            |]).spread(props)\r
        }\r
\r
[<Erase>]\r
type CommandLists() =\r
    inherit Command.List()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Cmdk.Command.List(class'= Lib.cn [|\r
            "max-h-[300px] overflow-y-auto overflow-x-hidden"\r
            props.class'\r
        |]).spread(props)\r
\r
[<Erase>]\r
type CommandEmptys() =\r
    inherit Command.Empty()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Cmdk.Command.Empty(class' = Lib.cn [|"py-6 text-center text-sm"; props.class'|]\r
        ).spread(props)\r
    \r
[<Erase>]\r
type CommandGroups() =\r
    inherit Command.Group()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Cmdk.Command.Group(class'= Lib.cn [|\r
            "overflow-hidden p-1 text-foreground\r
            [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5\r
            [&_[cmdk-group-heading]]:text-xs\r
            [&_[cmdk-group-heading]]:font-medium\r
            [&_[cmdk-group-heading]]:text-muted-foreground"\r
            props.class'\r
        |]).spread(props)\r
\r
[<Erase>]\r
type CommandSeparators() =\r
    inherit Command.Separator()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Cmdk.Command.Separator(class' = Lib.cn [|\r
            "h-px bg-border"\r
            props.class'\r
        |]).spread(props)\r
    \r
[<Erase>]\r
type CommandItems() =\r
    inherit Command.Item()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Cmdk.Command.Item(class' = Lib.cn [|\r
            "relative flex cursor-default select-none\r
            items-center rounded-sm px-2 py-1.5 text-sm\r
            outline-none aria-selected:bg-accent\r
            aria-selected:text-accent-foreground\r
            data-[disabled=true]:pointer-events-none\r
            data-[disabled=true]:opacity-50"\r
            props.class'\r
        |]).spread(props)\r
    \r
[<Erase>]\r
type CommandShortcuts() =\r
    inherit span()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        span( class' = Lib.cn [| "ml-auto text-xs tracking-widest text-muted-foreground"; props.class' |]).spread(props)\r
`;function s(o){const r={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...p(),...o.components},{SourceCode:t}=r;return t||j("SourceCode"),n.jsxs(n.Fragment,{children:[n.jsx(d,{of:a}),`
`,n.jsx(i,{}),`
`,n.jsx(r.p,{children:`Due to name collisions on the end compilation side (as far as I can remember),\r
the name of the Command components are suffixed with an 's', except for the\r
root and dialog components.`}),`
`,n.jsx(r.h3,{id:"simple-example---the-command-component",children:"Simple Example - The Command Component"}),`
`,n.jsx(r.p,{children:"Defining some helpers for making static items in this example:"}),`
`,n.jsxs(r.blockquote,{children:[`
`,n.jsx(r.p,{children:`Note that since the rendered tag will be the variable name, we have to use\r
a capital cased name for the icons. However, F# will complain about using\r
a capital named case (for good reason usually), so we just prepend it with\r
a wildcard which eliminates all issues.`}),`
`]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-fsharp",children:`let makeItem (value: string) (_MyIcon: TagValue) =\r
    CommandItems() {\r
        // see the docs on TagValues for the \`%\` operator\r
        _MyIcon % {| \`\`class\`\` = "mr-2 size-4" |}\r
        span() { value }\r
    }\r
let makeItemShortcut (value: string) (_IconValue: TagValue) (shortcut: string) =\r
    CommandItems() {\r
        _IconValue % {| \`\`class\`\` = "mr-2 size-4" |}\r
        span() { value }\r
        CommandShortcuts() { shortcut }\r
    }
`})}),`
`,n.jsx(r.p,{children:"And then the command component:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-fsharp",children:`Command(class' = "rounded-lg border shadow-md") {\r
    CommandInputs(placeholder = "Type a command or search...")\r
    CommandLists() {\r
        CommandEmptys() { "No results found" }\r
        CommandGroups(heading = span() { "Suggestions" }) {\r
            // See the docs on TagValues for the \`!@\` operator\r
            makeItem "Calendar" !@Calendar\r
            makeItem "Search Emoji" !@Smile\r
            makeItem "Launch" !@Rocket\r
        }\r
        CommandGroups(heading = span() { "Settings" }) {\r
            makeItemShortcut "Profile" !@User "Ctrl P"\r
            makeItemShortcut "Mail" !@Mail "Ctrl B"\r
            makeItemShortcut "Settings" !@Settings "Ctrl S"\r
        }\r
    }\r
}
`})}),`
`,n.jsx(m,{of:c,sourceState:"none",withToolbar:!0}),`
`,n.jsx(r.h3,{id:"common-recipe---the-dialog-component",children:"Common Recipe - The Dialog Component"}),`
`,n.jsx(r.p,{children:`Normally, you would pair the CommandDialog with a keyboard shortcut.\r
For the sake of this example, and not having to compete with Storybook for\r
shortcut controls, we just use a button.`}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-fsharp",children:`let isOpen,setOpen = createSignal false\r
Fragment() {\r
    // we use the \`Invoke\` method on the signal setter, which accepts\r
    // a lambda that operates on the previous value of the signal.\r
    Button(onClick = fun _ -> setOpen.Invoke(not)) { "Click me!" }\r
    CommandDialog(\r
      open' = isOpen(),\r
      onOpenChange = setOpen) {\r
        CommandInputs(placeholder="Type a command or search...")\r
        CommandLists() {\r
            CommandEmptys() { "No results found" }\r
            CommandGroups(heading = !!"Suggestions") {\r
                CommandItems() { "Calendar" }\r
                CommandItems() { "Search Emoji" }\r
                CommandItems() { "Calculator" }\r
            }\r
        }\r
    }\r
}
`})}),`
`,n.jsx(m,{of:l,sourceState:"none",layout:"centered"}),`
`,n.jsx(t,{code:b}),`
`,n.jsx(r.h2,{id:"components",children:"Components"}),`
`,n.jsx(r.h3,{id:"command",children:"Command"}),`
`,n.jsx(e,{of:a}),`
`,n.jsx(r.h3,{id:"commanddialog",children:"CommandDialog"}),`
`,n.jsx(e,{of:u}),`
`,n.jsx(r.h3,{id:"commandinputs",children:"CommandInputs"}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(r.h3,{id:"commandlists",children:"CommandLists"}),`
`,n.jsx(e,{of:C}),`
`,n.jsx(r.h3,{id:"commandemptys",children:"CommandEmptys"}),`
`,n.jsx(e,{of:g}),`
`,n.jsx(r.h3,{id:"commandgroups",children:"CommandGroups"}),`
`,n.jsx(e,{of:x}),`
`,n.jsx(r.h3,{id:"commandseparators",children:"CommandSeparators"}),`
`,n.jsx(e,{of:f}),`
`,n.jsx(r.h3,{id:"commanditems",children:"CommandItems"}),`
`,n.jsx(e,{of:k}),`
`,n.jsx(r.h3,{id:"commandshortcuts",children:"CommandShortcuts"}),`
`,n.jsx(e,{of:y})]})}function ln(o={}){const{wrapper:r}={...p(),...o.components};return r?n.jsx(r,{...o,children:n.jsx(s,{...o})}):s(o)}function j(o,r){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ln as default};

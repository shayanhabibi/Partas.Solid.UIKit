import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DysMKXKv.js";import{M as i,T as d,b as m,A as e}from"./blocks-J5siV4uj.js";import{C as t,E as p,D as c}from"./Command.stories-BQBUOp-6.js";import{C as l}from"./CommandDialog.stories-xA-9vioD.js";import{C as h}from"./CommandInputs.stories-DVWtvIEl.js";import{C as u}from"./CommandLists.stories-HZYK0G6c.js";import{C}from"./CommandEmptys.stories-DIVJvfCa.js";import{C as x}from"./CommandGroups.stories-BntspLUv.js";import{C as f}from"./CommandSeparators.stories-D9m6RM7k.js";import{C as g}from"./CommandItems.stories-21AA8c_s.js";import{C as j}from"./CommandShortcuts.stories-DHLdjh6k.js";import"./iframe-Clet01EE.js";import"./preload-helper-PPVm8Dsz.js";import"./Command-DYayjHzq.js";import"./index-CNxaL1Ec.js";import"./index-BgurTJCO.js";import"./index-xPNqmJU7.js";import"./combineProps-Bn1VjxOg.js";import"./index-D60S8ox6.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-B_WfTB_e.js";import"./Utils-cFOJcEDI.js";import"./x-YVQRnUDF.js";import"./FBCYWU27-CO4xBNMq.js";import"./3VFJM5NZ-wQTIoC1l.js";import"./FLVHQV4A-BgLTf8G_.js";import"./JHMNWOLY-B85oOwU1.js";import"./E53DB7BS-EmVpB0gT.js";import"./FN6EICGO-C03Mjb-S.js";import"./UKTBL2JL-XTYDUvYT.js";import"./OYES4GOP-B6Aa_edP.js";import"./5WXHJDCZ-DghNgBBa.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-CPkKRnTR.js";import"./Icon-Bfk8cl3A.js";import"./Dialog-Dd6PC3tF.js";import"./calendar-d1yue2IJ.js";import"./Button-Cjsk4tww.js";import"./Option-BhX2R0kg.js";import"./Util-E2-mHI_n.js";function a(r){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:t}),`
`,n.jsx(d,{}),`
`,n.jsx(o.p,{children:`Due to name collisions on the end compilation side (as far as I can remember),\r
the name of the Command components are suffixed with an 's', except for the\r
root and dialog components.`}),`
`,n.jsx(o.h3,{id:"simple-example---the-command-component",children:"Simple Example - The Command Component"}),`
`,n.jsx(o.p,{children:"Defining some helpers for making static items in this example:"}),`
`,n.jsxs(o.blockquote,{children:[`
`,n.jsx(o.p,{children:`Note that since the rendered tag will be the variable name, we have to use\r
a capital cased name for the icons. However, F# will complain about using\r
a capital named case (for good reason usually), so we just prepend it with\r
a wildcard which eliminates all issues.`}),`
`]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-fsharp",children:`let makeItem (value: string) (_MyIcon: TagValue) =\r
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
`,n.jsx(o.p,{children:"And then the command component:"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-fsharp",children:`Command(class' = "rounded-lg border shadow-md") {\r
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
`,n.jsx(m,{of:p,sourceState:"none",withToolbar:!0}),`
`,n.jsx(o.h3,{id:"common-recipe---the-dialog-component",children:"Common Recipe - The Dialog Component"}),`
`,n.jsx(o.p,{children:`Normally, you would pair the CommandDialog with a keyboard shortcut.\r
For the sake of this example, and not having to compete with Storybook for\r
shortcut controls, we just use a button.`}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-fsharp",children:`let isOpen,setOpen = createSignal false\r
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
`,n.jsx(m,{of:c,sourceState:"none",layout:"centered"}),`
`,n.jsx(o.h2,{id:"components",children:"Components"}),`
`,n.jsx(o.h3,{id:"command",children:"Command"}),`
`,n.jsx(e,{of:t}),`
`,n.jsx(o.h3,{id:"commanddialog",children:"CommandDialog"}),`
`,n.jsx(e,{of:l}),`
`,n.jsx(o.h3,{id:"commandinputs",children:"CommandInputs"}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(o.h3,{id:"commandlists",children:"CommandLists"}),`
`,n.jsx(e,{of:u}),`
`,n.jsx(o.h3,{id:"commandemptys",children:"CommandEmptys"}),`
`,n.jsx(e,{of:C}),`
`,n.jsx(o.h3,{id:"commandgroups",children:"CommandGroups"}),`
`,n.jsx(e,{of:x}),`
`,n.jsx(o.h3,{id:"commandseparators",children:"CommandSeparators"}),`
`,n.jsx(e,{of:f}),`
`,n.jsx(o.h3,{id:"commanditems",children:"CommandItems"}),`
`,n.jsx(e,{of:g}),`
`,n.jsx(o.h3,{id:"commandshortcuts",children:"CommandShortcuts"}),`
`,n.jsx(e,{of:j})]})}function sn(r={}){const{wrapper:o}={...s(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(a,{...r})}):a(r)}export{sn as default};

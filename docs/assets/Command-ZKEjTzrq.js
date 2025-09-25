import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Bpxy8yXn.js";import{M as i,T as d,b as m,A as e}from"./blocks-Deqp30Cn.js";import{C as t,E as p,D as c}from"./Command.stories-5cVuSaKN.js";import{C as l}from"./CommandDialog.stories-csOtoV6m.js";import{C as h}from"./CommandInputs.stories-B2w9cEeK.js";import{C as u}from"./CommandLists.stories-CgpCsQ8B.js";import{C}from"./CommandEmptys.stories-CmIrU2l8.js";import{C as x}from"./CommandGroups.stories-DnYg2CmZ.js";import{C as f}from"./CommandSeparators.stories-sx715zU8.js";import{C as g}from"./CommandItems.stories-DCL6ILmL.js";import{C as j}from"./CommandShortcuts.stories-DuTai02b.js";import"./iframe-CYoISbNW.js";import"./preload-helper-PPVm8Dsz.js";import"./Command-faddNNX9.js";import"./index-CNJVeY88.js";import"./index-aQTIg_kX.js";import"./index-_wS-z7e_.js";import"./combineProps-C6tzB3Qj.js";import"./index-Z-x0zc1J.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-B_WfTB_e.js";import"./Utils-zL6guu6T.js";import"./PLLNVYER-c4YP7_G1.js";import"./FBCYWU27-CTp0ggIZ.js";import"./3VFJM5NZ-mcdoqugV.js";import"./FLVHQV4A-DrEHBAB-.js";import"./JHMNWOLY-C-_W0a1e.js";import"./E53DB7BS-Ct6W5Aep.js";import"./FN6EICGO-CSkRKGds.js";import"./UKTBL2JL-BSclCzBH.js";import"./OYES4GOP-mVubA_43.js";import"./5WXHJDCZ-DghNgBBa.js";import"./JNCCF6MP-4sxnBYeu.js";import"./index-bM4TQhDa.js";import"./Dialog-DYMzWPmZ.js";import"./x-CPabT-du.js";import"./Icon-DTwW8kzS.js";import"./calendar-BZ5_X794.js";import"./Button-Can5pglF.js";import"./Option-BhX2R0kg.js";import"./Util-E2-mHI_n.js";function a(r){const o={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:t}),`
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
`,n.jsx(e,{of:j})]})}function dn(r={}){const{wrapper:o}={...s(),...r.components};return o?n.jsx(o,{...r,children:n.jsx(a,{...r})}):a(r)}export{dn as default};

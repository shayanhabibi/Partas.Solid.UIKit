import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-DQDWuJHr.js";import"./iframe-BM9GGKTp.js";import"./preload-helper-PPVm8Dsz.js";function s(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"utils",children:"Utils"}),`
`,e.jsx(n.p,{children:"The utilities are available in the root namespace automatically."}),`
`,e.jsx(n.h2,{id:"cn",children:"cn"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-fsharp",children:`type Lib =\r
    static member cn(classes: string array): string
`})}),`
`,e.jsx(n.p,{children:"Uses clsx and tailwind-merge to resolve classes"}),`
`,e.jsx(n.h2,{id:"createchildrenresolver",children:"createChildrenResolver"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-fsharp",children:`type Lib =\r
    static member createChildrenResolver(\r
        descendants: #HtmlELement\r
    ): Accessor<#HtmlElement> * Accessor<bool>
`})}),`
`,e.jsx(n.p,{children:`A convenience function that combines the children() function with a\r
length check. Essentially, the returned tuples second value will inform you whether\r
you have any elements, so you do not re-evaluate the children resolver unnecessarily.`}),`
`,e.jsx(n.h2,{id:"systemcharempty",children:"System.Char.empty"}),`
`,e.jsx(n.p,{children:`This is a convenience extension for inserting empty spaces that won't be trimmed\r
by JSX compilation`}),`
`,e.jsx(n.h2,{id:"",children:"&&="}),`
`,e.jsx(n.p,{children:`This is a convenience fable emit macro to compile '$0 && $1'. Similar to the\r
Fable included '??='.`}),`
`,e.jsx(n.h2,{id:"-1",children:">=>"}),`
`,e.jsx(n.p,{children:`This is a convenience operator to apply a void function to a piped input, and returning the input.\r
Useful for printing to console etc.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-fsharp",children:`// example\r
let x = 5\r
x\r
|> (+) 3\r
>=> (printfn "%i") // 8\r
|> (+) 2\r
>=> (printfn "%i") // 10
`})}),`
`,e.jsx(n.h2,{id:"tohtmlelement-and-toelement",children:"toHtmlElement and toElement"}),`
`,e.jsx(n.p,{children:"Convenience wrappers for embedding JSX directly in elements."}),`
`,e.jsx(n.p,{children:"The signature between the two differs, as some IDEs will offer completions on only the latter."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-fsharp",children:`div() {\r
    toHtmlElement JSX.jsx "<span>embedded</span>"\r
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-fsharp",children:`div() {\r
    JSX.jsx "<span>embedded</span>" |> toElement\r
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Unfortunately, adding an overload for 'JSX.Element' to the Partas.Solid computations causes\r
compilation errors.`}),`
`]}),`
`,e.jsx(n.h2,{id:"srspan",children:"SrSpan"}),`
`,e.jsx(n.p,{children:"Convenience component that is essentially:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-fsharp",children:`span(class' = Lib.cn [| "sr-only"; props.class' |]).spread props
`})}),`
`,e.jsx(n.h2,{id:"dv",children:"DV"}),`
`,e.jsx(n.p,{children:"Convenience type abbreviation for 'DefaultValueAttribute'"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-fsharp",children:`type O() =\r
    [<DefaultValue>]\r
    val mutable someProp: int\r
    [<DV>] val mutable prop: int
`})}),`
`,e.jsx(n.h2,{id:"charts",children:"Charts"}),`
`,e.jsx(n.p,{children:`Used to standardise color stepping in charts such as with the category bars, such that\r
consecutive data points are colored differently ubiquitously.`}),`
`,e.jsx(n.h3,{id:"chartcolor",children:"ChartColor"}),`
`,e.jsx(n.p,{children:"The type of the objects in the 'color' array."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-fsharp",children:`type ChartColor = {\r
    bg: string\r
    stroke: string\r
    fill: string\r
    text: string\r
}
`})}),`
`,e.jsx(n.p,{children:"Contains the different color utilities for tailwind."}),`
`,e.jsx(n.h3,{id:"colors",children:"colors"}),`
`,e.jsx(n.p,{children:"The array of chart colors. See the 'ColorPalette'."})]})}function c(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{c as default};

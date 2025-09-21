import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-w4y-2JRw.js";import{M as i,T as s,b as o,c as l}from"./blocks-BfNHLvBY.js";import{C as c,D as d,a as h,V as p}from"./Checkbox.stories-BiGOGLZr.js";import"./iframe-CQhh2Qu5.js";import"./preload-helper-PPVm8Dsz.js";import"./VI7QYH27-BXj65VY7.js";import"./FN6EICGO-B6Cr9H-k.js";import"./index-DW9tDSAV.js";import"./NGHEENNE-dvvJAkSQ.js";import"./ZZYKR3VO-TYWTtIT_.js";import"./OYES4GOP-DTqiBsTD.js";import"./index-sxjzjzXW.js";import"./FLVHQV4A-C8oehw7Q.js";import"./index-DFznmYTA.js";import"./JNCCF6MP-4sxnBYeu.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BeAt9i6J.js";import"./U42ECMND-BDjyePcW.js";import"./combineProps-BDGDEaHG.js";import"./Icon-BiJbdnQ6.js";import"./check-BIsC9o7Y.js";import"./Utils-CX15CBuI.js";import"./Label-C46agDJe.js";function a(t){const n={blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(s,{}),`
`,e.jsx(n.p,{children:"A checkbox with two states by default, and a third state when controlled via 'indeterminate' (aka undefined)."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-fsharp",children:`Checkbox()\r
Label() { "Checkbox Label" }
`})}),`
`,e.jsx(o,{of:d,withToolbar:!0,sourceState:"none",layout:"centered"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h3,{id:"labels",children:"Labels"}),`
`,e.jsx(n.p,{children:"You can connect a label to the checkbox input by the following:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-fsharp",children:`Checkbox(id="checkbox1")\r
Label(for'="checkbox1-input") { "Click me!" }
`})}),`
`,e.jsx(o,{of:h,withToolbar:!0,sourceState:"none",layout:"centered"}),`
`,e.jsx(n.h4,{id:"controlled-state",children:"Controlled State"}),`
`,e.jsxs(n.p,{children:["However, simultaneously controlling the state can seemingly break that connection. ",e.jsx(n.em,{children:"to be investigated"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-fsharp",children:`render "Validation" (fun props ->\r
    let value,setValue = createSignal(false)\r
    div(class' = "flex flex-row place-items-center gap-2") {\r
        Checkbox(id = "checkbox2",\r
                 onChange = fun value -> value |> unbox |> setValue\r
                 ,checked' = value()\r
                 ,validationState =\r
                     if value() then ValidationState.Invalid\r
                     else ValidationState.Valid)\r
        Label(for' = "checkbox2-input") { "Don't want to be checked!" }\r
    }\r
    )
`})}),`
`,e.jsx(o,{of:p,sourceState:"none",withToolbar:!0,layout:"centered"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`This is possibly an issue related to the interaction between storybook and solidjs/kobalte, as the connection\r
works when viewing the story in isolation.`}),`
`]})]})}function F(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{F as default};

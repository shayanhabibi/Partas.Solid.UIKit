import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-Bpxy8yXn.js";import{M as i,T as s,b as o,c as l}from"./blocks-Deqp30Cn.js";import{C as c,D as d,a as h,V as p}from"./Checkbox.stories-BLMZ3aOc.js";import"./iframe-CYoISbNW.js";import"./preload-helper-PPVm8Dsz.js";import"./VI7QYH27-o4jp_KKx.js";import"./FN6EICGO-CSkRKGds.js";import"./index-_wS-z7e_.js";import"./NGHEENNE-pUbobkHr.js";import"./ZZYKR3VO-CLjAHQeX.js";import"./OYES4GOP-mVubA_43.js";import"./index-CNJVeY88.js";import"./FLVHQV4A-DrEHBAB-.js";import"./index-aQTIg_kX.js";import"./JNCCF6MP-4sxnBYeu.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-bM4TQhDa.js";import"./U42ECMND-BDjyePcW.js";import"./combineProps-C6tzB3Qj.js";import"./Icon-DTwW8kzS.js";import"./check-yC_GvZJC.js";import"./Utils-zL6guu6T.js";import"./Label-CNG6sJth.js";function a(t){const n={blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
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

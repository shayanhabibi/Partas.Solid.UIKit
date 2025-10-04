import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-DD6hQIwJ.js";import{M as i,T as s,b as o,c as l}from"./blocks-Cb4awOOM.js";import{C as c,D as d,a as h,b as p,V as m}from"./Checkbox.stories-gTtc0e1v.js";import"./iframe-CSkHCzVC.js";import"./preload-helper-PPVm8Dsz.js";import"./VI7QYH27-DhPnUvMP.js";import"./FN6EICGO-DxliCwKo.js";import"./index-BqxmMzY1.js";import"./NGHEENNE-07-3EX2q.js";import"./ZZYKR3VO-BKYB-mlH.js";import"./OYES4GOP-DI3jAQSI.js";import"./index-BtT_u8Hx.js";import"./FLVHQV4A-Dza2M8WJ.js";import"./index-Bs2ALodi.js";import"./JNCCF6MP-4sxnBYeu.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-DLcXBA1H.js";import"./U42ECMND-BDjyePcW.js";import"./combineProps-DXHHMuGc.js";import"./minus-sJfaai7e.js";import"./Icon-CbvvIQH_.js";import"./check-Bbvt8ljy.js";import"./Utils-Bukfxs-o.js";import"./Label-bVyDsiQw.js";function r(n){const t={blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(s,{}),`
`,e.jsx(t.p,{children:"A checkbox with two states by default, and a third state when controlled via 'indeterminate' (aka undefined)."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-fsharp",children:`Checkbox()\r
Label() { "Checkbox Label" }
`})}),`
`,e.jsx(o,{of:d,withToolbar:!0,sourceState:"none",layout:"centered"}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h3,{id:"checkbox-cards",children:"Checkbox Cards"}),`
`,e.jsx(o,{of:h,withToolbar:!0,sourceState:"none",layout:"centered"}),`
`,e.jsx(t.h3,{id:"labels",children:"Labels"}),`
`,e.jsx(t.p,{children:"You can connect a label to the checkbox input by the following:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-fsharp",children:`Checkbox(id="checkbox1")\r
Label(for'="checkbox1-input") { "Click me!" }
`})}),`
`,e.jsx(o,{of:p,withToolbar:!0,sourceState:"none",layout:"centered"}),`
`,e.jsx(t.h4,{id:"controlled-state",children:"Controlled State"}),`
`,e.jsxs(t.p,{children:["However, simultaneously controlling the state can seemingly break that connection. ",e.jsx(t.em,{children:"to be investigated"})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-fsharp",children:`render "Validation" (fun props ->\r
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
`,e.jsx(o,{of:m,sourceState:"none",withToolbar:!0,layout:"centered"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:`This is possibly an issue related to the interaction between storybook and solidjs/kobalte, as the connection\r
works when viewing the story in isolation.`}),`
`]})]})}function I(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{I as default};

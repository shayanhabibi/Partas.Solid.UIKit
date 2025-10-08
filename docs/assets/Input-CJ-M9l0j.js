import{H as e,I as s,T as a,L as d,N as p}from"./iframe-DHSEN8D7.js";import{useMDXComponents as i}from"./index-e4aCb-2o.js";import{S as l,D as u}from"./Input.stories-Ca-0ieJY.js";import"./preload-helper-PPVm8Dsz.js";import"./Utils-CzREY3kc.js";import"./index-SvhdUoxj.js";const m=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Fable.Core.JsInterop\r
open Fable.Core\r
open Fable.Core.JS\r
\r
[<Erase>]\r
module Input =\r
    type Type = TextField.Type\r
\r
[<Erase>]\r
type Input() =\r
    inherit input()\r
    [<Erase>]\r
    member val type': Input.Type = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        input(class' = Lib.cn [|\r
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary \\\r
        selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full \\\r
        min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs \\\r
        transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 \\\r
        file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none \\\r
        disabled:cursor-not-allowed disabled:opacity-50 md:text-sm \\\r
        focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] \\\r
        aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 \\\r
        aria-invalid:border-destructive"\r
        |]).dataSlot("input")\r
`;function o(n){const r={p:"p",...i(),...n.components},{SourceCode:t}=r;return t||c("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
`,e.jsx(a,{}),`
`,e.jsx(r.p,{children:`A simple implementation of a styled input for use with Field, Input etc without the baggage of requiring\r
the context provider for the TextField component.`}),`
`,e.jsx(t,{code:m}),`
`,e.jsx(d,{of:u}),`
`,e.jsx(p,{})]})}function v(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}function c(n,r){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{v as default};

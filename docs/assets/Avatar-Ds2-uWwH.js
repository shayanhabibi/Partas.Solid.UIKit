import{G as r,H as p,T as c,K as o,L as t}from"./iframe-Ss2HFUgg.js";import{useMDXComponents as l}from"./index--e61kTGT.js";import{A as m,D as d,I as s}from"./Avatar.stories-C4fZFlgG.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-DFB-1Q0d.js";import"./FLVHQV4A-DhRRNmDB.js";import"./5WXHJDCZ-DghNgBBa.js";import"./Utils-Bv7TLaDt.js";import"./index-axew2xP3.js";const u=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
\r
[<Erase>]\r
type Avatar() =\r
    inherit Kobalte.Image()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Kobalte.Image(class' = Lib.cn [|\r
            "relative flex size-8 shrink-0 overflow-hidden rounded-full"\r
            props.class'\r
        |]) .dataSlot("avatar")\r
            .spread props\r
\r
[<Erase>]\r
type AvatarImage() =\r
    inherit Image.Img()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Image.Img(class' = Lib.cn [|\r
            "aspect-square size-full"\r
            props.class'\r
        |]) .dataSlot("avatar-image")\r
            .spread props\r
        \r
[<Erase>]\r
type AvatarFallback() =\r
    inherit Image.Fallback()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Image.Fallback(class' = Lib.cn [|\r
            "flex size-full items-center justify-center bg-muted"\r
            props.class'\r
        |]) .dataSlot("avatar-fallback")\r
            .spread props\r
`;function i(n){const e={code:"code",h3:"h3",pre:"pre",...l(),...n.components},{SourceCode:a}=e;return a||f("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(p,{of:m}),`
`,r.jsx(c,{}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-fsharp",children:`Avatar() {\r
    AvatarImage()\r
    AvatarFallback() {\r
        "SH"\r
    }\r
}
`})}),`
`,r.jsx(o,{of:d,withToolbar:"true"}),`
`,r.jsx(t,{}),`
`,r.jsx(a,{code:u}),`
`,r.jsx(e.h3,{id:"with-image-source",children:"With Image Source"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-fsharp",children:`Avatar() {\r
    AvatarImage(src="https://github.com/shayanhabibi.png")\r
    AvatarFallback() {\r
        "SH"\r
    }\r
}
`})}),`
`,r.jsx(o,{of:s,withToolbar:"true"}),`
`,r.jsx(t,{of:s})]})}function y(n={}){const{wrapper:e}={...l(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(i,{...n})}):i(n)}function f(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{y as default};

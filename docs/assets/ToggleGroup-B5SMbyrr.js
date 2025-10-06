import{G as e,H as p,T as l,K as g,L as u,O as n}from"./iframe-BLvaHOrW.js";import{useMDXComponents as s}from"./index-DMt2PYli.js";import{T as i,D as m}from"./ToggleGroup.stories-_9oIYiQj.js";import{T as c}from"./ToggleGroupItem.stories-Bnq9_ADO.js";import"./preload-helper-PPVm8Dsz.js";import"./ToggleGroup-DgGtliiT.js";import"./Toggle-BJxpwe4g.js";import"./Option-B9lMbA8r.js";import"./Util-jMr-gVD5.js";import"./UKTBL2JL-mrSn-dg4.js";import"./OYES4GOP-DJL3U5Gx.js";import"./index-TpYiyspx.js";import"./FLVHQV4A-ByRBKILc.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BbcR3rHk.js";import"./index-C2xVdcqa.js";import"./VI7QYH27-lfbjaqsq.js";import"./FN6EICGO-DozerlcD.js";import"./Utils-BEjpZvS7.js";import"./XTJD7L6B-CHFuNE8o.js";import"./QZDH5R5B-B67Wfj3u.js";import"./LR7LBJN3-DXU4Tgxl.js";import"./SOM3K36D-D7dngB5C.js";const x=`\uFEFFnamespace Partas.Solid.UI\r
\r
open System\r
open System.Runtime.CompilerServices\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
\r
[<Erase>]\r
module ToggleGroup =\r
    type Variant = Toggle.Variant\r
    type Size = Toggle.Size\r
    [<Erase>]\r
    type ToggleGroupsContext = {| Size: unit -> Size; Variant: unit -> Variant |}\r
    [<Erase>]\r
    module Context =\r
        let ToggleGroupContext = createContext<ToggleGroupsContext>({| Size = (fun () -> Size.Default); Variant = (fun () -> Variant.Default) |})\r
        let useToggleGroupContext = fun () ->\r
            let context = useContext(ToggleGroupContext)\r
            if unbox context then\r
                context\r
            else failwith "ToggleGroupContext must be used within a togglegroup"\r
\r
[<Erase>]\r
type ToggleGroup() =\r
    inherit Kobalte.ToggleGroup()\r
    [<Erase>]\r
    member val size: ToggleGroup.Size = unbox null with get,set\r
    [<Erase>]\r
    member val variant: ToggleGroup.Variant = unbox null with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        let size,setSize = createSignal ToggleGroup.Size.Default\r
        let variant,setVariant = createSignal ToggleGroup.Variant.Default\r
        createEffect(fun () -> setSize props.size )\r
        createEffect(fun () -> setVariant props.variant )\r
        Kobalte.ToggleGroup(\r
            class' = Lib.cn [|\r
                //tw\r
                "flex items-center justify-center gap-1"\r
                props.class'\r
            |]\r
            ).spread props\r
            {\r
                ToggleGroup.Context.ToggleGroupContext({| Size = size; Variant = variant |}) {\r
                    props.children\r
                }\r
            }\r
\r
[<Erase>]\r
type ToggleGroupItem() =\r
    inherit ToggleGroup.Item()\r
    member val size: ToggleGroup.Size = unbox null with get,set\r
    member val variant: ToggleGroup.Variant = unbox null with get,set\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        let context = ToggleGroup.Context.useToggleGroupContext()\r
        ToggleGroup.Item(\r
            class' = Lib.cn [|\r
                Toggle.variants(\r
                    variant = (props.variant &&= context.Variant()),\r
                    size = (props.size &&= context.Size())\r
                    )\r
                "hover:bg-muted hover:text-muted-foreground\r
                data-[pressed]:bg-accent data-[pressed]:text-accent-foreground"\r
                props.class'\r
            |]\r
            ).spread props\r
`;function a(r){const t={h2:"h2",h3:"h3",...s(),...r.components},{SourceCode:o}=t;return o||d("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(p,{of:i}),`
`,e.jsx(l,{}),`
`,e.jsx(g,{of:m,layout:"centered",sourceState:"none",withToolbar:!0}),`
`,e.jsx(u,{}),`
`,e.jsx(o,{code:x}),`
`,e.jsx(t.h2,{id:"components",children:"Components"}),`
`,e.jsx(t.h3,{id:"togglegroup",children:"ToggleGroup"}),`
`,e.jsx(n,{of:i}),`
`,e.jsx(t.h3,{id:"togglegroupitem",children:"ToggleGroupItem"}),`
`,e.jsx(n,{of:c})]})}function F(r={}){const{wrapper:t}={...s(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(a,{...r})}):a(r)}function d(r,t){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{F as default};

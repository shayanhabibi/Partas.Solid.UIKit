import{G as e,H as p,T as l,K as g,L as u,O as n}from"./iframe-BHVPMPJn.js";import{useMDXComponents as s}from"./index-CB5oDCs8.js";import{T as i,D as m}from"./ToggleGroup.stories-BnKkKwt3.js";import{T as c}from"./ToggleGroupItem.stories-B9bADUOP.js";import"./preload-helper-PPVm8Dsz.js";import"./ToggleGroup-7qoyP2GD.js";import"./Toggle-DZaT9OMs.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./UKTBL2JL-BmAvJ-mx.js";import"./OYES4GOP-B_JtkMZ5.js";import"./index-DeTOQkeb.js";import"./FLVHQV4A-C_-euiFy.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BWY3wABR.js";import"./index-DzweoC3U.js";import"./VI7QYH27-BunYCgaO.js";import"./FN6EICGO-BXZAkfGN.js";import"./Utils-CAhjhIiz.js";import"./XTJD7L6B-CHFuNE8o.js";import"./QZDH5R5B-BZBDFFES.js";import"./LR7LBJN3-Ddt3mnWg.js";import"./SOM3K36D-B0WlF5qk.js";const x=`\uFEFFnamespace Partas.Solid.UI\r
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

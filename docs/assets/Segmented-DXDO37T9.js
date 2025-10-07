import{G as e,H as m,T as p,K as i,L as s,Q as a}from"./iframe-BHVPMPJn.js";import{useMDXComponents as t}from"./index-CB5oDCs8.js";import{S as d,D as l}from"./Segmented.stories-B2cJ3xDc.js";import"./preload-helper-PPVm8Dsz.js";import"./FQAGELOF-BbDGl94u.js";import"./ZZYKR3VO-D0rzgNsV.js";import"./OYES4GOP-B_JtkMZ5.js";import"./index-DeTOQkeb.js";import"./FLVHQV4A-C_-euiFy.js";import"./index-BWY3wABR.js";import"./index-DzweoC3U.js";import"./JNCCF6MP-4sxnBYeu.js";import"./FN6EICGO-BXZAkfGN.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-CdhZt3CN.js";import"./U42ECMND-BDjyePcW.js";import"./combineProps-C_bsadWN.js";import"./index-DRJLzhk9.js";const C=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Partas.Solid.Kobalte\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
\r
[<Erase>]\r
type Segmented() =\r
    inherit SegmentedControl()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        SegmentedControl().spread props\r
\r
[<Erase; RequireQualifiedAccess>]\r
module Segmented =\r
    [<Erase; CompiledName("SegmentedLabel")>]\r
    type Label() =\r
        inherit SegmentedControl.Label()\r
        [<SolidTypeComponent>]\r
        member props.__ =\r
            SegmentedControl.Label().spread props\r
    \r
    [<Erase; CompiledName("SegmentedIndicator")>]\r
    type Indicator() =\r
        inherit SegmentedControl.Indicator()\r
        [<SolidTypeComponent>]\r
        member props.__ =\r
            SegmentedControl.Indicator().spread props\r
    \r
    [<Erase; CompiledName("SegmentedItem")>]\r
    type Item() =\r
        inherit SegmentedControl.Item()\r
        [<SolidTypeComponent>]\r
        member props.__ =\r
            SegmentedControl.Item().spread props\r
    \r
    [<Erase>]\r
    module Item =\r
        [<Erase; CompiledName("SegmentedItemInput")>]\r
        type Input() =\r
            inherit SegmentedControl.ItemInput()\r
            [<SolidTypeComponent>]\r
            member props.__ =\r
                SegmentedControl.ItemInput().spread props\r
        \r
        [<Erase; CompiledName("SegmentedItemLabel")>]\r
        type Label() =\r
            inherit SegmentedControl.ItemLabel()\r
            [<SolidTypeComponent>]\r
            member props.__ =\r
                SegmentedControl.ItemLabel().spread props\r
`;function o(r){const{SourceCode:n}={...t(),...r.components};return n||S("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(m,{of:d}),`
`,e.jsx(p,{}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(s,{}),`
`,e.jsx(n,{code:C}),`
`,e.jsx(a,{})]})}function F(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}function S(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{F as default};

import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-DD6hQIwJ.js";import{M as d,T as h,b as f,c as C,A as r}from"./blocks-Cb4awOOM.js";import{M as j,D as u}from"./Combobox.stories-KRw0fu3C.js";import{I as i}from"./ComboboxItem.stories-CFxHbvkl.js";import{I as n}from"./ComboboxItemLabel.stories-BXkqy2xz.js";import{I as e}from"./ComboboxItemIndicator.stories-DBNzGu3w.js";import{S as s}from"./ComboboxSection.stories-C5Lju85g.js";import{C as p}from"./ComboboxControl.stories-DPjC44iR.js";import{I as a}from"./ComboboxInput.stories-CxfgTNR5.js";import{T as b}from"./ComboboxTrigger.stories-UETRtLXx.js";import{C as x}from"./ComboboxContent.stories-DTu7sh1H.js";import"./iframe-CSkHCzVC.js";import"./preload-helper-PPVm8Dsz.js";import"./Combobox-D8fqyIrK.js";import"./2I3Q5YLM-DKMMcZ-4.js";import"./QZDH5R5B-Bdcb4p2a.js";import"./index-BtT_u8Hx.js";import"./index-BqxmMzY1.js";import"./LR7LBJN3-DTrf9afT.js";import"./FN6EICGO-DxliCwKo.js";import"./eventListener-C81Bj2cO.js";import"./ZZYKR3VO-BKYB-mlH.js";import"./OYES4GOP-DI3jAQSI.js";import"./FLVHQV4A-Dza2M8WJ.js";import"./index-Bs2ALodi.js";import"./JNCCF6MP-4sxnBYeu.js";import"./N3GAC5SS-uPbU4n_o.js";import"./5WXHJDCZ-DghNgBBa.js";import"./2CTBMVJ4-CEwVK2sr.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./combineProps-DXHHMuGc.js";import"./FBCYWU27-Duvn9742.js";import"./3VFJM5NZ-Cpt1Stcw.js";import"./JHMNWOLY-BqZJcmiH.js";import"./E53DB7BS-V5IT78uP.js";import"./NGHEENNE-07-3EX2q.js";import"./index-DRsflZo7.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-Cj1OtU2l.js";import"./index-DLcXBA1H.js";import"./UKTBL2JL-dEE4KpjY.js";import"./Utils-Bukfxs-o.js";import"./check-Bbvt8ljy.js";import"./Icon-CbvvIQH_.js";function c(m){const t={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...l(),...m.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:j}),`
`,o.jsx(h,{}),`
`,o.jsx(t.p,{children:`The usage of a combobox is a bit more involved; however, it is a powerful construct\r
that is quick to get going when you get the hang of its composition.`}),`
`,o.jsx(t.h4,{id:"minimal-example",children:"Minimal Example"}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-fsharp",children:`Combobox<string>(\r
    itemComponent = ( fun (itemProps: Kobalte.ItemComponentProps<string>) ->\r
        ComboboxItem(item = itemProps.item) {\r
            ComboboxItemLabel() {\r
                itemProps.item.rawValue\r
            }\r
            ComboboxItemIndicator()\r
        }\r
        )\r
    ).spread props {\r
    ComboboxControl() { yield fun _ -> Fragment() {\r
        ComboboxInput()\r
        ComboboxTrigger()\r
    } }\r
    ComboboxContent()\r
}
`})}),`
`,o.jsx(f,{of:u,layout:"center",sourceState:"none",withToolbar:!0}),`
`,o.jsx(C,{}),`
`,o.jsx(t.h3,{id:"comboboxitem",children:"ComboboxItem"}),`
`,o.jsx(r,{of:i,meta:i}),`
`,o.jsx(t.h3,{id:"comboboxitemlabel",children:"ComboboxItemLabel"}),`
`,o.jsx(r,{of:n,meta:n}),`
`,o.jsx(t.h3,{id:"comboboxitemindicator",children:"ComboboxItemIndicator"}),`
`,o.jsx(r,{of:e,meta:e}),`
`,o.jsx(t.h3,{id:"comboboxsection",children:"ComboboxSection"}),`
`,o.jsx(r,{of:s,meta:s}),`
`,o.jsx(t.h3,{id:"comboboxcontrol",children:"ComboboxControl"}),`
`,o.jsx(r,{of:p,meta:p}),`
`,o.jsx(t.h3,{id:"comboboxinput",children:"ComboboxInput"}),`
`,o.jsx(r,{of:a,meta:a}),`
`,o.jsx(t.h3,{id:"comboboxtrigger",children:"ComboboxTrigger"}),`
`,o.jsx(r,{of:b,meta:b}),`
`,o.jsx(t.h3,{id:"comboboxcontent",children:"ComboboxContent"}),`
`,o.jsx(r,{of:x,meta:x})]})}function xo(m={}){const{wrapper:t}={...l(),...m.components};return t?o.jsx(t,{...m,children:o.jsx(c,{...m})}):c(m)}export{xo as default};

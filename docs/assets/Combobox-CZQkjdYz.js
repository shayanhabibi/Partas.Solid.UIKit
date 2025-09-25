import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-Bpxy8yXn.js";import{M as d,T as h,b as f,c as C,A as r}from"./blocks-Deqp30Cn.js";import{M as j,D as u}from"./Combobox.stories-BMLPv7lx.js";import{I as i}from"./ComboboxItem.stories-CLPLKrOk.js";import{I as n}from"./ComboboxItemLabel.stories-chWeb9NZ.js";import{I as e}from"./ComboboxItemIndicator.stories-hW-k2jpH.js";import{S as s}from"./ComboboxSection.stories-DzTZsYwb.js";import{C as p}from"./ComboboxControl.stories-BPNpVFPM.js";import{I as a}from"./ComboboxInput.stories-CyBC3Mdb.js";import{T as b}from"./ComboboxTrigger.stories-C61vy4rs.js";import{C as x}from"./ComboboxContent.stories-BumYQsyw.js";import"./iframe-CYoISbNW.js";import"./preload-helper-PPVm8Dsz.js";import"./Combobox-BABnxAHL.js";import"./2I3Q5YLM-BfKHYn3p.js";import"./QZDH5R5B-C9YQOWCj.js";import"./index-CNJVeY88.js";import"./index-_wS-z7e_.js";import"./LR7LBJN3-Bhxu4Q7a.js";import"./FN6EICGO-CSkRKGds.js";import"./eventListener-CKPbckrh.js";import"./ZZYKR3VO-CLjAHQeX.js";import"./OYES4GOP-mVubA_43.js";import"./FLVHQV4A-DrEHBAB-.js";import"./index-aQTIg_kX.js";import"./JNCCF6MP-4sxnBYeu.js";import"./N3GAC5SS-hyboePSp.js";import"./5WXHJDCZ-DghNgBBa.js";import"./2CTBMVJ4-IBFzaLOl.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./combineProps-C6tzB3Qj.js";import"./FBCYWU27-CTp0ggIZ.js";import"./3VFJM5NZ-mcdoqugV.js";import"./JHMNWOLY-C-_W0a1e.js";import"./E53DB7BS-Ct6W5Aep.js";import"./NGHEENNE-pUbobkHr.js";import"./index-Z-x0zc1J.js";import"./U42ECMND-BDjyePcW.js";import"./GZJAOTUE-B_WfTB_e.js";import"./index-bM4TQhDa.js";import"./UKTBL2JL-BSclCzBH.js";import"./Utils-zL6guu6T.js";import"./check-yC_GvZJC.js";import"./Icon-DTwW8kzS.js";function c(m){const t={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...l(),...m.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:j}),`
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

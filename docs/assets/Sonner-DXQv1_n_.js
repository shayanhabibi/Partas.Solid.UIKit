import{G as t,H as i,T as l,K as p,L as m,O as c}from"./iframe-BHVPMPJn.js";import{useMDXComponents as s}from"./index-CB5oDCs8.js";import{S as r,D as u}from"./Sonner.stories-Db0Jgzow.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DF4RW6v0.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./UKTBL2JL-BmAvJ-mx.js";import"./OYES4GOP-B_JtkMZ5.js";import"./index-DeTOQkeb.js";import"./FLVHQV4A-C_-euiFy.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-BWY3wABR.js";import"./index-DzweoC3U.js";import"./Utils-CAhjhIiz.js";const d=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Sonner\r
open Fable.Core\r
\r
[<Erase>]\r
type Sonner() =\r
    inherit Sonner.Toaster()\r
    [<SolidTypeComponent>]\r
    member props.constructor =\r
        Sonner.Toaster(\r
            class' = "toaster group",\r
            toastOptions = Toast(\r
                classes = ToastClassnames(\r
                    toast = "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",\r
                    description = "group-[.toast]:text-muted-foreground",\r
                    actionButton = "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",\r
                    cancelButton = "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"\r
                    )\r
            )\r
        )   .spread props\r
`;function a(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...o.components},{SourceCode:e}=n;return e||b("SourceCode"),t.jsxs(t.Fragment,{children:[t.jsx(i,{of:r}),`
`,t.jsx(l,{}),`
`,t.jsx(p,{of:u,sourceState:"none",withToolbar:!0}),`
`,t.jsx(m,{}),`
`,t.jsx(e,{code:d}),`
`,t.jsx(n.h2,{id:"components",children:"Components"}),`
`,t.jsx(n.h3,{id:"sonner",children:"Sonner"}),`
`,t.jsx(c,{of:r}),`
`,t.jsx(n.h3,{id:"toasticons",children:"ToastIcons"}),`
`,t.jsx(n.p,{children:"This is an object which modifies the Icons for the different toast types."}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-fsharp",children:`type ToastIcons() =\r
    val mutable success: HtmlElement option\r
    val mutable info: HtmlElement option\r
    val mutable warning: HtmlElement option\r
    val mutable error: HtmlElement option\r
    val mutable loading: HtmlElement option\r
    val mutable close: HtmlElement option
`})}),`
`,t.jsx(n.h3,{id:"toastclassnames",children:"ToastClassnames"}),`
`,t.jsx(n.p,{children:"This is an object which sets the classes for the different toast types."}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-fsharp",children:`type ToastClassnames() =\r
    val mutable close : string option \r
    val mutable toast : string option\r
    val mutable title : string option\r
    val mutable description : string option \r
    val mutable loader : string option \r
    val mutable closeButton : string option \r
    val mutable cancelButton : string option \r
    val mutable actionButton : string option\r
    val mutable success : string option \r
    val mutable error : string option \r
    val mutable info : string option \r
    val mutable warning : string option\r
    val mutable loading : string option\r
    val mutable \`\`default\`\` : string option\r
    val mutable content : string option \r
    val mutable icon : string option 
`})}),`
`,t.jsx(n.h3,{id:"action",children:"Action"}),`
`,t.jsx(n.p,{children:"This is an object which sets the 'action' button of the toast."}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-fsharp",children:`type Action() =\r
    val mutable label: HtmlElement\r
    val mutable onClick: MouseEvent -> unit\r
    val mutable actionButtonStyle: obj option
`})}),`
`,t.jsx(n.h3,{id:"toast",children:"Toast"}),`
`,t.jsx(n.p,{children:"This is an object that is passed to create a toast."}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-fsharp",children:`type Toast() =\r
    val mutable id : string option \r
    val mutable action : Action option \r
    val mutable cancel : Action option \r
    val mutable title : string option \r
    val mutable type': Toast.Type option\r
    val mutable icon : HtmlElement option \r
    val mutable jsx : HtmlElement option \r
    val mutable description : HtmlElement option \r
    val mutable richColors : bool option \r
    val mutable invert : bool option \r
    val mutable closeButton : bool option \r
    val mutable dismissible : bool option \r
    val mutable delete : bool option \r
    val mutable unstyled : bool option \r
    val mutable duration : int option \r
    val mutable onDismiss : Option<Toast -> unit> \r
    val mutable onAutoClose : Option<Toast -> unit> \r
    val mutable cancelButtonStyle : obj option \r
    val mutable actionButtonStyle : obj option\r
    val mutable style : obj option \r
    val mutable class': string option\r
    val mutable descriptionClassName : string option \r
    val mutable position : Toast.Position option \r
    val mutable classes : ToastClassnames option
`})}),`
`,t.jsx(n.p,{children:"This can also be handled in the method call to 'Sonner' in 'Sonner.toast'"}),`
`,t.jsx(n.p,{children:"There are also shortcuts to the different types of toasts via 'Sonner.toast.___'"}),`
`,t.jsx(n.p,{children:"When creating a toast, a string ID is returned, which can be used to dismiss the toast via 'Sonner.toast.dismiss'."})]})}function M(o={}){const{wrapper:n}={...s(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(a,{...o})}):a(o)}function b(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{M as default};

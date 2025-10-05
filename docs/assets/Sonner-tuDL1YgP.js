import{j as t,M as s,T as i,d as r,e as m,A as p}from"./iframe-mHl6JQ-c.js";import{useMDXComponents as l}from"./index-B7Otj1x9.js";import{S as e,D as c}from"./Sonner.stories-hHCPgTdi.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Bx7G9YYq.js";import"./Option-B9lMbA8r.js";import"./Util-jMr-gVD5.js";import"./UKTBL2JL-CJMXQYms.js";import"./OYES4GOP-kZMWaLji.js";import"./index-DaBFbvzD.js";import"./FLVHQV4A-DzmScvHC.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-ncGqb3xy.js";import"./index-D4JJ8pSH.js";import"./Utils-CYryE0IK.js";function a(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:e}),`
`,t.jsx(i,{}),`
`,t.jsx(r,{of:c,sourceState:"none",withToolbar:!0}),`
`,t.jsx(m,{}),`
`,t.jsx(n.h2,{id:"components",children:"Components"}),`
`,t.jsx(n.h3,{id:"sonner",children:"Sonner"}),`
`,t.jsx(p,{of:e}),`
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
`,t.jsx(n.p,{children:"When creating a toast, a string ID is returned, which can be used to dismiss the toast via 'Sonner.toast.dismiss'."})]})}function w(o={}){const{wrapper:n}={...l(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(a,{...o})}):a(o)}export{w as default};

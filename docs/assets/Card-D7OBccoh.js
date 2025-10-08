import{H as r,I as a,T as i,L as p}from"./iframe-DHSEN8D7.js";import{useMDXComponents as t}from"./index-e4aCb-2o.js";import{C as d,D as c}from"./Card.stories-CEt_SW1S.js";import"./preload-helper-PPVm8Dsz.js";import"./Seq-ByxJMUaL.js";import"./Util-DXwscfZV.js";import"./Types-CqbaJdUC.js";import"./Option-DlNMNgAB.js";import"./FSharp.Core-D1Pte0FF.js";import"./String-DLdTzCOk.js";import"./Array-C0Iq9Aiw.js";import"./List-CXqaB21e.js";import"./Card-gy4y0wdf.js";import"./Utils-CzREY3kc.js";import"./index-SvhdUoxj.js";import"./bell-CFmUCAp-.js";import"./Icon-By-Qgdq5.js";import"./Switch-DYPQRrop.js";import"./VI7QYH27-BRSBmtcb.js";import"./FN6EICGO-CNc9l087.js";import"./NGHEENNE-Dj0dKL4v.js";import"./ZZYKR3VO-sS--fHny.js";import"./OYES4GOP-D4sXc2ip.js";import"./index-CX5o166x.js";import"./FLVHQV4A-VgAG7mUH.js";import"./index-1c5Tq1Kt.js";import"./JNCCF6MP-4sxnBYeu.js";import"./5WXHJDCZ-DghNgBBa.js";import"./combineProps-ChBwTExo.js";import"./Button-BnulhXAt.js";import"./UKTBL2JL-D9vX2QTQ.js";import"./check-B6yQMYMS.js";const l=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Fable.Core\r
[<Erase>]\r
type Card() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div( class' = Lib.cn [|\r
            "rounded-xl border bg-card text-card-foreground shadow-sm gap-6 flex flex-col py-6"\r
            props.class'\r
        |] ).dataSlot("card")\r
            .spread props\r
\r
[<Erase>]\r
type CardHeader() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "@container/card-header grid auto-rows-min \\\r
            grid-rows-[auto_auto] items-start gap-2 px-6 \\\r
            has-data-[slot=card-action]:grid-cols-[1fr_auto] \\\r
            [.border-b]:pb-6"\r
            props.class'\r
        |]).dataSlot("card-header").spread props\r
\r
[<Erase>]\r
type CardTitle() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
           "font-semibold leading-none"\r
           props.class'\r
        |]).dataSlot("card-title").spread props\r
\r
[<Erase>]\r
type CardDescription() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "text-sm text-muted-foreground"\r
            props.class'\r
        |]).dataSlot("card-description").spread props\r
\r
[<Erase>]\r
type CardAction() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "col-start-2 row-span-2 row-start-1 self-start justify-self-end"\r
            props.class'\r
        |]).dataSlot("card-action").spread props\r
        \r
[<Erase>]\r
type CardContent() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "px-6"\r
            props.class'\r
        |]).dataSlot("card-content").spread props\r
\r
[<Erase>]\r
type CardFooter() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex items-center px-6 [.border-t]:pt-6"\r
            props.class'\r
        |]).dataSlot("card-footer").spread props\r
`;function s(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...t(),...e.components},{SourceCode:o}=n;return o||m("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(a,{of:d}),`
`,r.jsx(i,{}),`
`,r.jsx(p,{of:c,sourceState:"none",withToolbar:!0,layout:"centered"}),`
`,r.jsx(n.p,{children:`Card components are a collection of 'div' and text components that are styled\r
to rapidly build cards.`}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-fsharp",children:`let notifications = [|\r
    let makeNotif title desc = {| title = title; description = desc |}\r
    makeNotif "Your call has been confirmed" "1 hour ago"\r
    makeNotif "You have a new message!" "1 hour ago"\r
    makeNotif "Your subscription is expiring soon!" "2 hours ago"\r
|]\r
Card(class' = "w-[380px]") {\r
    CardHeader() {\r
        CardTitle() { "Notifications" }\r
        CardDescription() { "You have 3 unread messages." }\r
    }\r
    CardContent(class' = "grid gap-4") {\r
        div(class' = "flex items-center space-x-4 rounded-md border p-4") {\r
            Bell(class' = "size-6")\r
            div(class' = "flex-1 space-y-1") {\r
                p(class' = "text-sm font-medium leading-none") {\r
                    "Push Notifications"\r
                }\r
                p(class' = "text-sm text-muted-foreground") {\r
                    "Send notifications to device."\r
                }\r
            }\r
            Switch() {\r
                SwitchControl() {\r
                    SwitchThumb()\r
                }\r
            }\r
        }\r
        For(each = notifications) {\r
        yield fun notification _ ->\r
            div(class' = "mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0") {\r
                span(class' = "flex size-2 translate-y-1 rounded-full bg-sky-500")\r
                div(class' = "space-y-1") {\r
                    p(class' = "text-sm font-medium leading-none") { notification.title }\r
                    p(class' = "text-sm text-muted-foreground") { notification.description }\r
                }\r
            }\r
        }\r
    }\r
    CardFooter() {\r
        Button(class' = "w-full") {\r
            Check(class' = "mr-2 size-4")\r
            System.Char.empty\r
            "Mark all as read"\r
        }\r
    }\r
}
`})}),`
`,r.jsx(o,{code:l}),`
`,r.jsx(n.h3,{id:"card",children:"Card"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-fsharp",children:`[<Erase>]\r
type Card() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div( class' = Lib.cn [|\r
            "rounded-lg border bg-card text-card-foreground shadow-sm"\r
            props.class'\r
        |] ).spread props
`})}),`
`,r.jsx(n.h3,{id:"cardheader",children:"CardHeader"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-fsharp",children:`[<Erase>]\r
type CardHeader() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex flex-col space-y-1.5 p-6"\r
            props.class'\r
        |]).spread props
`})}),`
`,r.jsx(n.h3,{id:"cardtitle",children:"CardTitle"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-fsharp",children:`[<Erase>]\r
type CardTitle() =\r
    inherit h3()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        h3(class' = Lib.cn [|\r
           "text-lg font-semibold leading-none tracking-tight"\r
           props.class'\r
        |]).spread props
`})}),`
`,r.jsx(n.h3,{id:"carddescription",children:"CardDescription"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-fsharp",children:`[<Erase>]\r
type CardDescription() =\r
    inherit p()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        p(class' = Lib.cn [|\r
            "text-sm text-muted-foreground"\r
            props.class'\r
        |]).spread props
`})}),`
`,r.jsx(n.h3,{id:"cardcontent",children:"CardContent"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-fsharp",children:`[<Erase>]\r
type CardContent() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "p-6 pt-0"\r
            props.class'\r
        |]).spread props
`})}),`
`,r.jsx(n.h3,{id:"cardfooter",children:"CardFooter"}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-fsharp",children:`[<Erase>]\r
type CardFooter() =\r
    inherit div()\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "flex items-center p-6 pt-0"\r
            props.class'\r
        |]).spread props
`})})]})}function G(e={}){const{wrapper:n}={...t(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(s,{...e})}):s(e)}function m(e,n){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{G as default};

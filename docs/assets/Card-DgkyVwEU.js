import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-BtM1hK2q.js";import{M as o,T as i,b as a}from"./blocks-CMsyRgwU.js";import{C as p,D as d}from"./Card.stories-XBRBJ1Fe.js";import"./iframe-rVoFtZu9.js";import"./preload-helper-PPVm8Dsz.js";import"./Seq-8nXgKOgk.js";import"./Util-E2-mHI_n.js";import"./Types-M7ke1IWY.js";import"./Option-BhX2R0kg.js";import"./String-iMN6AwVU.js";import"./Array-DijEJobI.js";import"./Card-9G6mJ8lv.js";import"./Utils-DvLkKxqJ.js";import"./Icon-b_5I2J3_.js";import"./Switch-u6G_3lpo.js";import"./VI7QYH27-DJzrevhS.js";import"./FN6EICGO-g7b9VqP4.js";import"./index-Riw0p3ms.js";import"./NGHEENNE-CgvBP-lB.js";import"./ZZYKR3VO-NDDEU6Nn.js";import"./OYES4GOP-BdaYfyQY.js";import"./index-kLgwDL5l.js";import"./FLVHQV4A-Gi-kDcar.js";import"./index-TjBUJP2H.js";import"./JNCCF6MP-4sxnBYeu.js";import"./5WXHJDCZ-DghNgBBa.js";import"./combineProps-CsPhi8Vl.js";import"./Button-Di0Pgs7I.js";import"./UKTBL2JL-CAvLOfBE.js";import"./check-DCPDolhG.js";function s(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...t(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(o,{of:p}),`
`,r.jsx(i,{}),`
`,r.jsx(a,{of:d,sourceState:"none",withToolbar:!0,layout:"centered"}),`
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
`})})]})}function q(e={}){const{wrapper:n}={...t(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(s,{...e})}):s(e)}export{q as default};

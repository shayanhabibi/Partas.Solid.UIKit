import{H as r,I as e,T as i,L as a,N as p,R as c}from"./iframe-DHSEN8D7.js";import{useMDXComponents as s}from"./index-e4aCb-2o.js";import{S as l,D as d}from"./TourWizard.stories-BqN-kPbU.js";import"./preload-helper-PPVm8Dsz.js";import"./4LUY46IM-BmpwF6Mj.js";import"./index-CMZTi1VK.js";import"./PT2CJE3O-B1jjGq06.js";import"./index-DoShH-KW.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./Button-BnulhXAt.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./UKTBL2JL-D9vX2QTQ.js";import"./OYES4GOP-D4sXc2ip.js";import"./index-CX5o166x.js";import"./FLVHQV4A-VgAG7mUH.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-1c5Tq1Kt.js";import"./index-SvhdUoxj.js";import"./Utils-CzREY3kc.js";import"./x-DWk3N72V.js";import"./Icon-By-Qgdq5.js";const u=`\uFEFFnamespace Partas.Solid.UI\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
open Partas.Solid\r
open Partas.Solid.ZagJs\r
open Partas.Solid.ArkUI\r
open Tour\r
\r
[<Erase>]\r
module TourWizard =\r
    type Slots =\r
        abstract backdrop: string\r
        abstract positioner: string\r
        abstract content: string\r
        abstract arrow: string\r
        abstract arrowTip: string\r
        abstract closeTrigger: string\r
        abstract title: string\r
        abstract description: string\r
        abstract progressText: string\r
        abstract control: string\r
        abstract actionTrigger: string\r
        abstract spotlight: string\r
    \r
[<Erase>]\r
type TourWizard() =\r
    inherit Tour.Root()\r
    [<Erase>]\r
    member val slots: TourWizard.Slots = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.slots <- createEmpty\r
        let tour = props.tour\r
        Tour.Root(tour = tour) {\r
            Portal() {\r
                Tour.Backdrop(class' = Lib.cn [|\r
                    "backdrop-blur z-[1300] bg-background/10 data-[state=open]:animate-backdrop-in \\\r
                    data-[state=closed]:animate-backdrop-out"\r
                    props.slots.backdrop\r
                |])\r
                Tour.Positioner(class' = Lib.cn [|\r
                    "flex items-center justify-center !z-[1400] data-[type=dialog]:fixed \\\r
                    data-[type=dialog]:inset-0 data-[type=tooltip]:absolute"\r
                    props.slots.positioner\r
                |]) {\r
                    Tour.Content(class' = Lib.cn [|\r
                        "relative bg-background rounded-lg shadow-lg flex flex-col \\\r
                        max-w-sm p-5"\r
                        props.slots.content\r
                    |]) {\r
                        \r
                        Tour.Arrow(class' = Lib.cn [|\r
                            "[--arrow-size:12px] [--arrow-background:theme(colors.background)]"\r
                            props.slots.arrow\r
                        |]) {\r
                            Tour.ArrowTip(class' = Lib.cn [|\r
                                "border-t border-l border-border"\r
                                props.slots.arrowTip\r
                            |])\r
                        }\r
                        \r
                        Tour.CloseTrigger(class' = Lib.cn [|\r
                            "absolute top-3 right-3"\r
                            props.slots.closeTrigger\r
                        |]) {\r
                            Lucide.Lucide.X(class' = "size-4")\r
                        }\r
                        \r
                        Tour.Title(class' = Lib.cn [|\r
                            "font-medium text-lg"\r
                            props.slots.title\r
                        |]) { tour().step &&= tour().step?title }\r
                        \r
                        Tour.Description(class' = Lib.cn [|\r
                            "text-muted-foreground text-sm"\r
                            props.slots.description\r
                        |]) {\r
                            tour().step &&= tour().step?description\r
                        }\r
                        \r
                        Tour.ProgressText(class' = Lib.cn [|\r
                            "text-sm text-muted-foreground"\r
                            props.slots.progressText\r
                        |]) {\r
                            tour().getProgressText()\r
                        }\r
                        \r
                        Tour.Control(class' = Lib.cn [|\r
                            "flex gap-3 justify-end"\r
                            props.slots.control\r
                        |]) {\r
                            For(each = (tour().step &&= tour().step?actions)) {yield fun action _ ->\r
                                Tour.ActionTrigger(\r
                                    action = action,\r
                                    class' = Lib.cn [|\r
                                        "px-3 py-2 text-sm font-medium border border-border bg-background \\\r
                                        text-muted-foreground rounded hover:bg-accent transition-colors"\r
                                        props.slots.actionTrigger\r
                                    |]\r
                                ) { action.label }\r
                                \r
                            }\r
                        }\r
                        \r
                        \r
                    }\r
                }\r
                Tour.Spotlight(class' = Lib.cn [|\r
                    "border-[3px] border-solid border-blue-500 z-[1400]"\r
                    props.slots.spotlight\r
                |])\r
            }\r
        }\r
`;function t(o){const{SourceCode:n}={...s(),...o.components};return n||b("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(e,{of:l}),`
`,r.jsx(i,{}),`
`,r.jsx(a,{of:d}),`
`,r.jsx(p,{}),`
`,r.jsx(n,{code:u}),`
`,r.jsx(c,{})]})}function A(o={}){const{wrapper:n}={...s(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(t,{...o})}):t(o)}function b(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{A as default};

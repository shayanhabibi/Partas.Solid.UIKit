import{H as r,I as t,T as o,L as a,N as l}from"./iframe-DHSEN8D7.js";import{useMDXComponents as i}from"./index-e4aCb-2o.js";import{S as g,D as p}from"./FloatPanel.stories-BTq0N8om.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BnulhXAt.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./UKTBL2JL-D9vX2QTQ.js";import"./OYES4GOP-D4sXc2ip.js";import"./index-CX5o166x.js";import"./FLVHQV4A-VgAG7mUH.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-1c5Tq1Kt.js";import"./index-SvhdUoxj.js";import"./Utils-CzREY3kc.js";import"./4LUY46IM-BmpwF6Mj.js";import"./index-CMZTi1VK.js";import"./grip-vertical-DvevPVU2.js";import"./Icon-By-Qgdq5.js";import"./minus-BCppHssx.js";import"./x-DWk3N72V.js";const c=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid.Lucide\r
open Partas.Solid\r
open Partas.Solid.ZagJs\r
open Partas.Solid.ArkUI\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
open Partas.Solid.ZagJs.FloatingPanel\r
\r
[<Erase>]\r
module FloatPanel =\r
    type Slots =\r
        abstract root: string\r
        abstract positioner: string\r
        abstract content: string\r
        abstract header: string\r
        abstract gripContainer: string\r
        abstract grip: string\r
        abstract title: string\r
        abstract actionContainer: string\r
        abstract minimizeTrigger: string\r
        abstract minus: string\r
        abstract closeTrigger: string\r
        abstract x: string\r
        abstract body: string\r
[<Erase>]\r
type FloatPanel() =\r
    inherit FloatingPanel.Root()\r
    [<Erase>]\r
    member val slots: FloatPanel.Slots = undefined with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.defaultSize <- Size(width = 320, height= 240)\r
        props.minSize <- Some <| Size(width = 280, height = 180)\r
        props.maxSize <- Some <| Size(width = 500, height = 400)\r
        props.slots <- createEmpty\r
        FloatingPanel.Root(\r
            class' = Lib.cn [|\r
                // "w-full h-full"\r
                props.slots.root\r
                props.class'\r
            |]\r
            ).spread props {\r
            Portal() {\r
                \r
            FloatingPanel.Positioner(class' = Lib.cn [| "fixed"; props.slots.positioner |]) {\r
                FloatingPanel.Content(class' = Lib.cn [|\r
                    "bg-background border border-border rounded-lg shadow-lg data-[stage=maximized]:rounded-none"\r
                    props.slots.content\r
                |]) {\r
                    FloatingPanel.DragTrigger() {\r
                        FloatingPanel.Header(\r
                            class' = Lib.cn [|\r
                                "flex items-center justify-between p-4 border-b border-border rounded-t-lg"\r
                                props.slots.header\r
                            |]\r
                            ) {\r
                            div(class' = Lib.cn [|\r
                                "flex items-center gap-2"\r
                                props.slots.gripContainer\r
                            |]) {\r
                                Lucide.GripVertical(class' = Lib.cn [|\r
                                    //tw\r
                                    "w-4 h-4 text-accent"\r
                                    props.slots.grip\r
                                |])\r
                                h3(class' = Lib.cn [|\r
                                    "text-sm font-medium text-muted-foreground"\r
                                    props.slots.title\r
                                |]) {\r
                                    props.title\r
                                }\r
                            }\r
                            div(class' = Lib.cn [|\r
                                "flex items-center gap-1"\r
                                props.slots.actionContainer\r
                            |]) {\r
                                let inline stageClass () =\r
                                    "w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"\r
                                FloatingPanel.StageTrigger(\r
                                    class' = Lib.cn [|\r
                                        stageClass()\r
                                        props.slots.minimizeTrigger\r
                                    |],\r
                                    stage = Stage.Minimized) {\r
                                    Lucide.Minus(class' = Lib.cn [| "size-3"; props.slots.minus |])\r
                                }\r
                                FloatingPanel.StageTrigger(\r
                                    class' = Lib.cn [|\r
                                        stageClass()\r
                                        props.slots.minimizeTrigger\r
                                    |],\r
                                    stage = Stage.Maximized\r
                                    ) {\r
                                    Lucide.Maximize2(class' = Lib.cn [| "size-3"; props.slots.minus |])\r
                                }\r
                                FloatingPanel.StageTrigger(\r
                                    stage = Stage.Default,\r
                                    class' = Lib.cn [|\r
                                        stageClass()\r
                                        props.slots.minimizeTrigger\r
                                    |]) {\r
                                    Lucide.ArrowDownLeft(class' = Lib.cn [| "size-3"; props.slots.minus |])\r
                                }\r
                                FloatingPanel.CloseTrigger(class' = Lib.cn [|\r
                                    stageClass()\r
                                    props.slots.closeTrigger\r
                                |] ) {\r
                                    Lucide.X(class' = Lib.cn [| "size-3"; props.slots.x |])\r
                                }\r
                            }\r
                        }\r
                    }\r
                    FloatingPanel.Body(class' = Lib.cn [|\r
                        "p-4"\r
                        props.slots.body\r
                    |]) {\r
                        props.children\r
                    }\r
                    let inline resizeTrigger axis = FloatingPanel.ResizeTrigger(axis = axis, class' = "size-[6px]")\r
                    // The N, W, NW, NE and SW axis have odd behaviour and simultaneously move the panel\r
                    // resizeTrigger FloatingPanel.ResizeTriggerAxis.N\r
                    resizeTrigger FloatingPanel.ResizeTriggerAxis.E\r
                    // resizeTrigger FloatingPanel.ResizeTriggerAxis.W\r
                    resizeTrigger FloatingPanel.ResizeTriggerAxis.S\r
                    // resizeTrigger FloatingPanel.ResizeTriggerAxis.NE\r
                    // resizeTrigger FloatingPanel.ResizeTriggerAxis.NW\r
                    resizeTrigger FloatingPanel.ResizeTriggerAxis.SE\r
                    // resizeTrigger FloatingPanel.ResizeTriggerAxis.SW\r
                }\r
            }\r
            }\r
        }\r
`;function s(n){const{SourceCode:e}={...i(),...n.components};return e||d("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(t,{of:g}),`
`,r.jsx(o,{}),`
`,r.jsx(a,{of:p}),`
`,r.jsx(l,{}),`
`,r.jsx(e,{code:c})]})}function D(n={}){const{wrapper:e}={...i(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(s,{...n})}):s(n)}function d(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{D as default};

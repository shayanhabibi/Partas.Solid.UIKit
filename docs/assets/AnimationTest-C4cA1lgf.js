import{H as r,I as a,T as i,a2 as s}from"./iframe-DHSEN8D7.js";import{useMDXComponents as t}from"./index-e4aCb-2o.js";import{A as l,D as p}from"./AnimationTest.stories-Bm7Y38zb.js";import"./preload-helper-PPVm8Dsz.js";import"./Util-DXwscfZV.js";import"./List-CXqaB21e.js";import"./String-DLdTzCOk.js";import"./Option-DlNMNgAB.js";import"./Types-CqbaJdUC.js";import"./Array-C0Iq9Aiw.js";import"./stagger-BpUZ1ZuV.js";import"./index-DiMPxCbG.js";const m=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Partas.Solid.Experimental\r
open Partas.Solid.Style\r
open Fable.Core\r
open Fable.Core.JsInterop\r
open Fable.Core.JS\r
open Browser.Types\r
open Partas.AnimeJs.Core\r
open Partas.AnimeJs.Style\r
open Partas.AnimeJs.Core.Operators\r
open Partas.AnimeJs.Bindings\r
\r
[<Erase>]\r
type AnimationTest() =\r
    interface VoidNode\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        createEffect(fun () ->\r
            let paths = Svg.createDrawable(!^"#drawPaths path")\r
            (animate {\r
                style.draw { too "0 0" "0 1" }\r
                delay (stagger(100) {\r
                    staggerFrom.center\r
                } )\r
                duration 1000\r
            }) { Utils.shuffle paths }\r
            |> ignore\r
            (animate {\r
                style.rotate { fun _ _ _ -> !+= 210 }\r
                // style.rotate { too (fun o i l ->\r
                //     match i,l with\r
                //     | Some index, Some length ->\r
                //         float index - float length / 2.\r
                //         |> (*) (0.1)\r
                //         |> (!+=)\r
                //     | _, _ -> !+= 0\r
                //     )}\r
                style.transformOrigin { too "center" "center" }\r
                onLoop (fun a -> a.refresh() |> ignore)\r
                // Eases.linearBuiltIn\r
                Eases.spring.default'\r
                duration 500\r
                delay (stagger(10.).asFunctionValue)\r
                loop\r
            }) { Selector "#drawPaths path" |> _.find }\r
            |> ignore\r
            )\r
        // Shapes.A(id = "drawPaths")\r
        Shapes.B(id = "drawPaths")\r
        // createEffect(fun () ->\r
        //     (animate {\r
        //         loop\r
        //         style.rotateZ { too (fun _ _ _ -> (Utils.random(-90,90))) }\r
        //         duration 1200\r
        //         onLoop(fun a ->\r
        //                 a.refresh()\r
        //                 |> ignore\r
        //             )\r
        //     }) { Utils.\`\`$\`\` "#boxy" }\r
        //     |> ignore\r
        //     (animate {\r
        //         loop\r
        //         style.translateX { too (FunctionValue(fun _ _ _ -> Utils.random(0, 300))) }\r
        //         duration 800\r
        //         onLoop(fun a ->\r
        //                 a.refresh()\r
        //                 |> ignore\r
        //             )\r
        //     }) { Utils.\`\`$\`\` "#boxy" }\r
        //     |> ignore\r
        //     (animate {\r
        //         loop\r
        //         duration 500\r
        //         style.translateY { too (FunctionValue(fun _ _ _ -> Utils.random(0, 300))) }\r
        //         onLoop(fun a ->\r
        //                 a.refresh()\r
        //                 |> ignore\r
        //             )\r
        //     }) { Utils.\`\`$\`\` "#boxy" }\r
        //     |> ignore\r
        //     (animate {\r
        //         loop\r
        //         duration 1000\r
        //         style.scale { too (FunctionValue(fun _ _ _ -> Utils.random(0.5, 1.5, 1))) }\r
        //         onLoop(fun a ->\r
        //                 a.refresh()\r
        //                 |> ignore\r
        //             )\r
        //     }) { Utils.\`\`$\`\` "#boxy" }\r
        //     |> ignore\r
        //     )\r
        // div(class' = "size-full").style' [\r
        //     Style.padding !^"24px"\r
        // ] {\r
        //     div(id = "boxy", class' = "h-10 w-10 max-w-10 bg-primary").style' [\r
        //         Style.width !^"94px"\r
        //         Style.height !^"94px"\r
        //         Style.transformOrigin !^TransformOrigin.Initial\r
        //     ]\r
        // }\r
`;function o(n){const{SourceCode:e}={...t(),...n.components};return e||d("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(a,{of:l}),`
`,r.jsx(i,{}),`
`,r.jsx(s,{of:p,layout:"centered"}),`
`,r.jsx(e,{code:m})]})}function P(n={}){const{wrapper:e}={...t(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(o,{...n})}):o(n)}function d(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{P as default};

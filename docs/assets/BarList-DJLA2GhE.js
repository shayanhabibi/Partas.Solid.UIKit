import{G as r,H as i,T as l,K as m,L as p,O as d}from"./iframe-BHVPMPJn.js";import{useMDXComponents as s}from"./index-CB5oDCs8.js";import{B as a,D as u}from"./BarList.stories-DXFimERz.js";import"./preload-helper-PPVm8Dsz.js";import"./Util-DXwscfZV.js";import"./Array-CbDDtYGA.js";import"./Option-DlNMNgAB.js";import"./Utils-CAhjhIiz.js";import"./index-DzweoC3U.js";const c=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Partas.Solid.Style\r
open Partas.Solid.Aria\r
open Partas.Solid.Polymorphism\r
open Fable.Core\r
open Fable.Core.JsInterop\r
\r
[<Import("Dynamic", "solid-js/web")>]\r
type Dynamic() =\r
    interface RegularNode\r
    [<DefaultValue>] val mutable component': HtmlTag\r
\r
[<JS.Pojo>]\r
type Bar\r
    (\r
        value: int,\r
        name: string,\r
        ?icon: obj -> HtmlTag,\r
        ?href: string,\r
        ?target: string\r
    ) =\r
    member val value: int\r
    member val name: string\r
    member val icon: obj -> HtmlTag\r
    member val href: string\r
    member val target: string\r
    new () = Bar()\r
\r
[<Erase>]\r
module barList =\r
    [<StringEnum>]\r
    type SortOrder =\r
        | Ascending\r
        | Descending\r
        | None\r
    \r
    [<Erase>]\r
    type ValueFormatter = int -> string\r
    \r
    let defaultValueFormatter: ValueFormatter = _.ToString()\r
    \r
open barList\r
\r
[<Erase>]\r
type BarList() =\r
    inherit div()\r
    [<DefaultValue>] val mutable data: Bar[]\r
    [<DefaultValue>] val mutable valueFormatter: ValueFormatter\r
    [<DefaultValue>] val mutable sortOrder: SortOrder\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        props.valueFormatter <- defaultValueFormatter\r
        props.sortOrder <- Descending\r
        let sortedData = fun () ->\r
            match props.sortOrder with\r
            | Ascending ->\r
                props.data\r
                |> Array.sortBy (fun bar -> bar.value)\r
            | Descending ->\r
                props.data\r
                |> Array.sortByDescending (fun bar -> bar.value)\r
            | None -> props.data\r
        let widths = fun () ->\r
            let values = sortedData() |> Array.map (_.value >> float)\r
            let maxValue = JS.Math.max values\r
            sortedData()\r
            |> Array.map (fun item ->\r
                if item.value = 0 then 0.\r
                else\r
                    JS.Math.max(\r
                        (float item.value / maxValue) * 100.,\r
                        2.\r
                        )\r
                    )\r
                \r
        div(class' = Lib.cn [|\r
            "flex flex-col space-y-1.5"\r
            props.class'\r
        |], ariaSort = !!props.sortOrder)\r
            .dataSlot("bar-list")\r
            .spread(props) {\r
            For(each = sortedData()) {\r
                yield fun item index ->\r
                    div(class' = "row flex w-full justify-between space-x-6") {\r
                        div(class' = "grow") {\r
                            div(class' = Lib.cn [|\r
                                "flex h-8 items-center rounded-md bg-secondary px-2"\r
                            |]).style'([ Style.width $"{widths()[index()]}%%" ]) {\r
                                if !!item.icon then Dynamic(component' = item.icon(), class' = "mr-2 size-5 flex-none")\r
                                if !!item.href then\r
                                    a(href = item.href,\r
                                      target = (item.target ??= "_blank"),\r
                                      rel = "noreferrer",\r
                                      class' = "hover:underline") { item.name }\r
                                else p() { item.name }\r
                            }\r
                        }\r
                        div(class' = "flex items-center") {\r
                            props.valueFormatter(item.value)\r
                        }\r
                    }\r
            }\r
        }\r
`;function o(n){const e={h2:"h2",h3:"h3",...s(),...n.components},{SourceCode:t}=e;return t||f("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(i,{of:a}),`
`,r.jsx(l,{}),`
`,r.jsx(m,{of:u,sourceState:"none",withToolbar:!0}),`
`,r.jsx(p,{}),`
`,r.jsx(t,{code:c}),`
`,r.jsx(e.h2,{id:"components",children:"Components"}),`
`,r.jsx(e.h3,{id:"barlist",children:"BarList"}),`
`,r.jsx(d,{of:a})]})}function w(n={}){const{wrapper:e}={...s(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(o,{...n})}):o(n)}function f(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{w as default};

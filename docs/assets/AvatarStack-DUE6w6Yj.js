import{H as r,I as s,T as i,L as o,N as l}from"./iframe-DHSEN8D7.js";import{useMDXComponents as t}from"./index-e4aCb-2o.js";import{S as p,D as m}from"./AvatarStack.stories-C4z51Hop.js";import"./preload-helper-PPVm8Dsz.js";import"./AvatarStack-B3au3mLt.js";import"./Utils-CzREY3kc.js";import"./index-SvhdUoxj.js";import"./Avatar-BlWIAkQu.js";import"./FLVHQV4A-VgAG7mUH.js";import"./5WXHJDCZ-DghNgBBa.js";const c=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid.Style\r
open Partas.Solid\r
open Partas.Solid.UI\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
\r
type IAvatarStackItem =\r
    abstract initials: string \r
    abstract avatar: string\r
\r
[<CompiledName("AvatarChildStack")>]\r
[<Erase>]\r
type AvatarStack() =\r
    interface RegularNode\r
    /// <summary>\r
    /// Whether to animate the avatar stack on hover.\r
    /// </summary>\r
    /// <defaultValue>false</defaultValue>\r
    [<Erase>]\r
    member val animate: bool = false with get,set\r
    /// <summary>\r
    /// The size of the avatars mask.\r
    /// </summary>\r
    /// <defaultValue>40</defaultValue>\r
    [<Erase>]\r
    member val size: int = 40 with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.size <- 40\r
        props.animate <- false\r
        let children = children(fun () -> props.children)\r
        div(\r
            class' = Lib.cn [|\r
                "-space-x-1 flex items-center"\r
                props.animate &&= "hover:space-x-0 [&>*]:transition-all"\r
                props.class'\r
            |]\r
            ).spread props {\r
                For(each = unbox<HtmlElement array> (children())) { yield fun item index ->\r
                    div(class' = Lib.cn [|\r
                        "shrink-0 overflow-hidden rounded-full"\r
                        "[&_[data-slot=\\"avatar\\"]]:size-full"\r
                        props.class'\r
                    |]).style'([\r
                        Style.width !!props.size\r
                        Style.height !!props.size\r
                        Style.maskImage (\r
                            if !!index() then\r
                                !^ $"radial-gradient(circle {!!props.size / 2.}px at -{!!props.size / 4. + !!props.size / 10.}px 50%%, transparent 99%%, white 100%%"\r
                            else ""\r
                            )\r
                    ]) {\r
                        item\r
                    }\r
                }\r
        }\r
\r
[<Erase>]\r
type AvatarStack<'T when 'T :> IAvatarStackItem>() =\r
    interface VoidNode\r
    /// <summary>\r
    /// Whether to animate the avatars on hover.\r
    /// </summary>\r
    /// <defaultValue>false</defaultValue>\r
    [<Erase>]\r
    member val animate: bool = false with get,set\r
    /// <summary>\r
    /// The size of the avatars.\r
    /// </summary>\r
    /// <defaultValue>40</defaultValue>\r
    [<Erase>]\r
    member val size: int = 40 with get,set\r
    /// <summary>\r
    /// The array of items which are able to interface with IAvatarStackItem,\r
    /// whereby they provide members with access to an initials member and\r
    /// a src member.\r
    /// </summary>\r
    [<Erase>]\r
    member val items: 'T array = [||] with get,set\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        props.animate <- false\r
        props.size <- 40\r
        props.items <- [||]\r
        let items = createMemo(fun () -> props.items)\r
        div(class' = Lib.cn [|\r
            "-space-x-1 flex items-center"\r
            props.animate &&= "hover:space-x-0 [&>*]:transition-all"\r
            props.class'\r
        |]).spread props {\r
            For(each = items()) { yield fun item index ->\r
                div(class' = Lib.cn [|\r
                    "shrink-0 overflow-hidden rounded-full"\r
                    "[&_[data-slot=\\"avatar\\"]]:size-full"\r
                    props.class'\r
                |]).style'([\r
                    Style.width !!props.size\r
                    Style.height !!props.size\r
                    Style.maskImage (\r
                        if !!index() then\r
                            !^ $"radial-gradient(circle {float props.size / 2.}px at -{float props.size / 4. + float props.size / 10.}px 50%%, transparent 99%%, white 100%%)"\r
                        else ""\r
                        )\r
                ]) {\r
                    Avatar().style' [\r
                        Style.width !!props.size\r
                        Style.height !!props.size\r
                    ] {\r
                        AvatarImage(src = (item :> IAvatarStackItem |> _.avatar))\r
                        AvatarFallback() {\r
                            item :> IAvatarStackItem |> _.initials\r
                        }\r
                    }\r
                }\r
            }\r
        }\r
`;function a(e){const{SourceCode:n}={...t(),...e.components};return n||d("SourceCode"),r.jsxs(r.Fragment,{children:[r.jsx(s,{of:p}),`
`,r.jsx(i,{}),`
`,r.jsx(o,{of:m}),`
`,r.jsx(l,{}),`
`,r.jsx(n,{code:c})]})}function g(e={}){const{wrapper:n}={...t(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(a,{...e})}):a(e)}function d(e,n){throw new Error("Expected component `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{g as default};

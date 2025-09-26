namespace Partas.Solid.UI

open Partas.Solid.Style
open Partas.Solid
open Partas.Solid.UI
open Fable.Core
open Fable.Core.JS
open Fable.Core.JsInterop

type IAvatarStackItem =
    abstract initials: string 
    abstract avatar: string

[<CompiledName("AvatarChildStack")>]
[<Erase>]
type AvatarStack() =
    interface RegularNode
    /// <summary>
    /// Whether to animate the avatar stack on hover.
    /// </summary>
    /// <defaultValue>false</defaultValue>
    [<Erase>]
    member val animate: bool = false with get,set
    /// <summary>
    /// The size of the avatars mask.
    /// </summary>
    /// <defaultValue>40</defaultValue>
    [<Erase>]
    member val size: int = 40 with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.size <- 40
        props.animate <- false
        let children = children(fun () -> props.children)
        div(
            class' = Lib.cn [|
                "-space-x-1 flex items-center"
                props.animate &&= "hover:space-x-0 [&>*]:transition-all"
                props.class'
            |]
            ).spread props {
                For(each = unbox<HtmlElement array> (children())) { yield fun item index ->
                    div(class' = Lib.cn [|
                        "shrink-0 overflow-hidden rounded-full"
                        "[&_[data-slot=\"avatar\"]]:size-full"
                        props.class'
                    |]).style'([
                        Style.width !!props.size
                        Style.height !!props.size
                        Style.maskImage (
                            if !!index() then
                                !^ $"radial-gradient(circle {!!props.size / 2.}px at -{!!props.size / 4. + !!props.size / 10.}px 50%%, transparent 99%%, white 100%%"
                            else ""
                            )
                    ]) {
                        item
                    }
                }
        }

[<Erase>]
type AvatarStack<'T when 'T :> IAvatarStackItem>() =
    interface VoidNode
    /// <summary>
    /// Whether to animate the avatars on hover.
    /// </summary>
    /// <defaultValue>false</defaultValue>
    [<Erase>]
    member val animate: bool = false with get,set
    /// <summary>
    /// The size of the avatars.
    /// </summary>
    /// <defaultValue>40</defaultValue>
    [<Erase>]
    member val size: int = 40 with get,set
    /// <summary>
    /// The array of items which are able to interface with IAvatarStackItem,
    /// whereby they provide members with access to an initials member and
    /// a src member.
    /// </summary>
    [<Erase>]
    member val items: 'T array = [||] with get,set
    [<SolidTypeComponent>]
    member props.__ =
        props.animate <- false
        props.size <- 40
        props.items <- [||]
        let items = createMemo(fun () -> props.items)
        div(class' = Lib.cn [|
            "-space-x-1 flex items-center"
            props.animate &&= "hover:space-x-0 [&>*]:transition-all"
            props.class'
        |]).spread props {
            For(each = items()) { yield fun item index ->
                div(class' = Lib.cn [|
                    "shrink-0 overflow-hidden rounded-full"
                    "[&_[data-slot=\"avatar\"]]:size-full"
                    props.class'
                |]).style'([
                    Style.width !!props.size
                    Style.height !!props.size
                    Style.maskImage (
                        if !!index() then
                            !^ $"radial-gradient(circle {float props.size / 2.}px at -{float props.size / 4. + float props.size / 10.}px 50%%, transparent 99%%, white 100%%)"
                        else ""
                        )
                ]) {
                    Avatar().style' [
                        Style.width !!props.size
                        Style.height !!props.size
                    ] {
                        AvatarImage(src = (item :> IAvatarStackItem |> _.avatar))
                        AvatarFallback() {
                            item :> IAvatarStackItem |> _.initials
                        }
                    }
                }
            }
        }

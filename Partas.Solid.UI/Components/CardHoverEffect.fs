namespace Partas.Solid.UI

open Partas.Solid
open Partas.Solid.Style
open Partas.Solid.Experimental
open Fable.Core
open Fable.Core.JsInterop
open Browser.Types
open Partas.Solid.Primitives
open Browser

[<Erase>]
module ZHoverCardContext =
    [<JS.Pojo>]
    type T(accessor: Accessor<bool>, setter: Setter<bool>) =
        member val accessor = accessor with get,set
        member val setter = setter with get,set
    let HoverCardContext = createContext<T>()
    let useMouseEntered () =
        let context = useContext(HoverCardContext)
        if !!context = JS.undefined then
            failwith "useMouseEntered must be used within a ZHoverCardContainer"
        context


[<Erase>]
type ZHoverCardContainer() =
    interface RegularNode
    [<DV>] val mutable containerClassName: string
    [<SolidTypeComponent>]
    member props.__ =
        let mouseInside, setMouseInside = createSignal false
        let (container,setContainer): Signal<HTMLDivElement> = createSignal null
        effect {
            let mutable mouseListenDestroyer = fun () -> ()
            if mouseInside() |> not then
                mouseListenDestroyer()
                if !!container() then
                    container()
                        .style
                        .transform <- "rotateY(0deg) rotateX(0deg)"
            else
                let handleMouse = fun (e: MousePosition) ->
                    let rect = container().getBoundingClientRect()
                    let left = rect.left
                    let top = rect.top
                    let width = rect.width
                    let height = rect.height
                    let x = (float e.x - left - width / 2.) / 25.
                    let y = (float e.y - top - height / 2.) / 25.
                    container()
                        .style
                        .transform <- $"rotateY({x}deg) rotateX({y}deg)"
                mouseListenDestroyer <- makeMousePositionListener(!^container(), handleMouse, followTouch = true)
                
        }
        let contextValue = ZHoverCardContext.T(mouseInside,setMouseInside)
        ignore contextValue
        ZHoverCardContext.HoverCardContext(contextValue) {
            div(
                class' = Lib.cn [|
                    "py-20 flex items-center justify-center"
                    props.containerClassName
                |]
                ).style'([
                Style.perspective "1000px"
            ]) {
                div(
                    onMouseEnter = fun _ -> true |> setMouseInside
                    ,onMouseLeave = fun _ -> false |> setMouseInside
                    ,class' = Lib.cn [|
                        "flex items-center justify-center relative transition-all duration-200 ease-linear"
                        props.class'
                    |]
                ).ref(setContainer).style'([
                    Style.transformStyle "preserve-3d"
                ]) { props.children }
            }
        }
    
[<Erase>]
type ZHoverCardBody() =
    interface RegularNode
    [<SolidTypeComponent>]
    member props.__ =
        div(class' = Lib.cn [|
            "h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]"
            props.class'
        |]).spread(props)

[<Erase>]
type ZHoverCardItem() =
    interface RegularNode
    // interface Polymorph
    [<DV>] val mutable translateX: float
    [<DV>] val mutable translateY: float
    [<DV>] val mutable translateZ: float
    [<DV>] val mutable rotateX: float
    [<DV>] val mutable rotateY: float
    [<DV>] val mutable rotateZ: float
    [<SolidTypeComponent>]
    member props.__ =
        props.translateX <- 0
        props.translateY <- 0
        props.translateZ <- 0
        props.rotateX <- 0
        props.rotateY <- 0
        props.rotateZ <- 0
        let contextValue = ZHoverCardContext.useMouseEntered()
        let container,setContainer = createSignal<HTMLDivElement>(null)
        effect {
            if !!container() then
                if contextValue.accessor() then
                    let value = $"translateX({props.translateX}px) translateY({props.translateY}px) translateZ({props.translateZ}px) rotateX({props.rotateX}deg) rotateY({props.rotateY}deg) rotateZ({props.rotateZ}deg)"
                    ignore value
                    container().style.transform <- value
                else
                    let value = "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
                    ignore value
                    container().style.transform <- value
        }
        div(class' = Lib.cn [|
            //tw
            "w-fit transition duration-200 ease-linear"
            props.class'
        |]).ref(setContainer).spread(props)

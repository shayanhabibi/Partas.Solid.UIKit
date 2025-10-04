namespace Partas.Solid.UI

open Browser
open Browser.Types
open Partas.Solid
open Partas.Solid.Aria
open Partas.Solid.Kobalte
open Partas.Solid.Experimental
open Fable.Core
open Fable.Core.JsInterop
open Partas.Solid.Primitives
open System

[<JS.Pojo>]
type private Circle(
    ?x: float,
    ?y: float,
    ?translateX: float,
    ?translateY: float,
    ?size: float,
    ?alpha: float,
    ?targetAlpha: float,
    ?dx: float,
    ?dy: float,
    ?magnetism: float
) =
    member val x = x |> _.Value with get,set
    member val y = y |> _.Value with get,set
    member val translateX = translateX |> _.Value with get,set
    member val translateY = translateY |> _.Value with get,set
    member val size = size |> _.Value with get,set
    member val alpha = alpha |> _.Value with get,set
    member val targetAlpha = targetAlpha |> _.Value with get,set
    member val dx = dx |> _.Value with get,set
    member val dy = dy |> _.Value with get,set
    member val magnetism = magnetism |> _.Value with get,set

[<Interface>]
type private Position =
    abstract member x: float with get,set
    abstract member y: float with get,set
    static member MousePosition () =
        let mousePosition,setMousePosition = createSignal<Position>(jsOptions<Position>(fun o -> o.x <- 0.; o.y <- 0.))
        effect {
            let mouseMoveHandler (event: MousePosition) =
                jsOptions<Position>(fun o ->
                    o.x <- !!event.x
                    o.y <- !!event.y
                    )
                |> setMousePosition
            let disposal = makeMousePositionListener(window, mouseMoveHandler)
            cleanup {
                disposal()
            }
        }
        mousePosition

[<Interface>]
type private Size =
    abstract member w: float with get,set
    abstract member h: float with get,set
[<Erase>]
type Particles() =
    interface RegularNode
    [<DV>] val mutable quantity: int
    [<DV>] val mutable staticity: float
    [<DV>] val mutable ease: float
    [<DV>] val mutable size: float
    [<DV>] val mutable refresh: bool
    [<DV>] val mutable vx: float
    [<DV>] val mutable vy: float
    [<DV>] val mutable onDrawCircle: (unit -> unit)
    [<SolidTypeComponentAttribute>]
    member props.__ =
        props.quantity <- 100
        props.staticity <- 50.
        props.ease <- 50.
        props.size <- 0.4
        props.refresh <- false
        props.vx <- 0.
        props.vy <- 0.
        let mutable canvasRef: HTMLCanvasElement = null
        let mutable canvasContainerRef: HTMLDivElement = null
        let mutable context: CanvasRenderingContext2D = null
        let mutable circles: Circle[] = [||]
        let mousePosition = Position.MousePosition()
        let mutable mouse: Position = jsOptions<Position>(fun o -> o.x <- 0.; o.y <- 0.)
        let mutable canvasSize = jsOptions<Size>(fun o -> o.h <- 0.; o.w <- 0.)
        let dpr = if jsTypeof window = "undefined" then 1. else window.devicePixelRatio
        let mutable rafID: float = JS.undefined
        let mutable resizeTimeout: int = JS.undefined
        let rgb = fun () ->
            let color = canvasContainerRef.style.getPropertyValue("--particle-color")
            color[0..(color.Length-3)]
        let clearContext () =
            if !!context  then
                context.clearRect(0.,0.,canvasSize.w, canvasSize.h)
        let circleParams (): Circle =
            let floor = JS.Math.floor
            let random= JS.Math.random
            let inline toFixed (count: int) (value: float) = Math.Round(value, count)
            
            let x = canvasSize.w |> ((*) <| random()) |> floor
            let y = canvasSize.h |> ((*) <| random()) |> floor
            let translateX = 0.
            let translateY = 0.
            let pSize = props.size |> (+) (2. |> ((*) <| random()) |> floor)
            let alpha = 0.
            let targetAlpha = 0.6 |> ((*) <| random()) |> (+) 0.1 |> toFixed 1
            let dx = random() |> (-) <| 0.5 |> (*) 0.1
            let dy = random() |> (-) <| 0.5 |> (*) 0.1
            let magnetism = random() |> (*) 4. |> (+) 0.1
            Circle(x,y,translateX,translateY,pSize,alpha,targetAlpha,dx,dy,magnetism)
            
        let drawCircle (update: bool) (circle: Circle) =
            if !!context then
                context
                >=> _.translate(circle.translateX, circle.translateY)
                >=> _.beginPath()
                >=> _.arc(circle.x, circle.y, circle.size, 0., 2. * JS.Math.PI)
                >=> fun c -> c.fillStyle <- !! $"{rgb()}{circle.alpha})"
                >=> _.fill()
                |> _.setTransform(dpr, 0., 0., dpr, 0., 0.)
                if not update then
                    circles |> unbox<ResizeArray<Circle>> |> _.Add(circle)
        let resizeCanvas() =
            if canvasContainerRef &&= canvasRef &&= !!context then
                canvasSize.w <- canvasContainerRef.offsetWidth
                canvasSize.h <- canvasContainerRef.offsetHeight
                canvasRef.width <- canvasSize.w * dpr
                canvasRef.height <- canvasSize.h * dpr
                canvasRef.style.width <- $"{canvasSize.w}px"
                canvasRef.style.height <- $"{canvasSize.h}px"
                context.scale(dpr, dpr)
                circles <- [||]
                for _ in 0..props.quantity do
                    circleParams()
                    |> drawCircle false
        let remapValue(value,start1,end1,start2,end2): float =
            let remapped =
                ((value - start1) * (end2 - start2)) / (end1 - start1) + start2
            abs remapped
        let rec animate () =
            clearContext()
            circles
            |> Array.iteri(fun i circle ->
                let edge = [|
                    circle.x + circle.translateX - circle.size
                    canvasSize.w - circle.x - circle.translateX - circle.size
                    circle.y + circle.translateY - circle.size
                    canvasSize.h - circle.y - circle.translateY - circle.size
                |]
                let closestEdge = edge |> Array.reduce min
                let remapClosestEdge = Math.Round(remapValue(closestEdge, 0., 20., 0., 1.), 2)
                if remapClosestEdge > 1. then
                    circle.alpha <- (circle.alpha + 0.02, circle.targetAlpha) ||> min
                else
                    circle.alpha <- circle.targetAlpha * remapClosestEdge
                circle.x <- circle.dx + props.vx + circle.x
                circle.y <- circle.y + circle.dy + props.vy
                circle.translateX <- circle.translateX +
                    (mouse.x / (props.staticity / circle.magnetism) - circle.translateX) / props.ease
                circle.translateY <- circle.translateY +
                    (mouse.y / (props.staticity / circle.magnetism) - circle.translateY) / props.ease
                circle |> drawCircle true
                if (circle.x < -circle.size ||
                    circle.x > canvasSize.w + circle.size ||
                    circle.y < -circle.size ||
                    circle.y > canvasSize.h + circle.size)
                then
                    circles |> unbox<ResizeArray<Circle>> |> _.RemoveAt(i)
                    circleParams()
                    |> drawCircle false
                )
        let drawParticles() =
            clearContext()
            let particleCount = props.quantity
            for _ in 0..particleCount do
                circleParams()
                |> drawCircle false
        let initCanvas () =
            resizeCanvas()
            drawParticles()
        let running,start,stop = createRAF(targetFPS(ignore >> animate, 120))
        if not <| running() then start()
        
        let onMouseMove () =
            if !!canvasRef then
                let rect = canvasRef.getBoundingClientRect()
                let w = canvasSize.w
                let h = canvasSize.h
                let x = mousePosition().x - rect.left - canvasSize.w / 2.
                let y = mousePosition().y - rect.top - canvasSize.h / 2.
                let inside = x < w / 2. && x > -w / 2. && y < h / 2. && y > -h / 2.
                if inside then
                    mouse.x <- x
                    mouse.y <- y
        effect {
            // ignore props.color
            if !!canvasRef then
                context <- canvasRef.getContext_2d()
            initCanvas()
            
            let handleResize () =
                if !!resizeTimeout then
                    JS.clearTimeout resizeTimeout
                resizeTimeout <- JS.setTimeout (fun () -> initCanvas()) 200
            window.addEventListener("resize", ignore >> handleResize)
            cleanup {
                stop()
                if !!resizeTimeout then
                    JS.clearTimeout(resizeTimeout)
                window.removeEventListener("resize", ignore >> handleResize)
            }
        }
        effect {
            if props.refresh then
                initCanvas()
            
        }
        effect {
            ignore <| mousePosition()
            onMouseMove()
        }
        cleanup {
            stop()
        }
        div(
            class' = Lib.cn [|
                "pointer-events-none"
                props.class'
            |],
            ariaHidden = true
            ).ref(canvasContainerRef).spread props {
            canvas(class' = "size-full").ref(canvasRef)
        }


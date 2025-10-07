import{G as e,H as f,T as m,K as a,L as o}from"./iframe-BHVPMPJn.js";import{useMDXComponents as d}from"./index-CB5oDCs8.js";import{S as u,D as s}from"./Particles.stories-Bjlw1NJK.js";import{Default as i}from"./BorderBeam.stories-P_Jo0AQ6.js";import{Default as l}from"./AuroraBanner.stories-CS8kOWiZ.js";import{Default as c}from"./Logo.stories-BnS4eCB4.js";import"./preload-helper-PPVm8Dsz.js";import"./Util-DXwscfZV.js";import"./Array-CbDDtYGA.js";import"./Option-DlNMNgAB.js";import"./Utils-CAhjhIiz.js";import"./index-DzweoC3U.js";import"./common-CHTJz4gJ.js";import"./List-D43zMB1s.js";import"./String-DLdTzCOk.js";import"./Types-CqbaJdUC.js";import"./stagger-BpUZ1ZuV.js";import"./index-DiMPxCbG.js";const y=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Browser\r
open Browser.Types\r
open Partas.Solid\r
open Partas.Solid.Aria\r
open Partas.Solid.Kobalte\r
open Partas.Solid.Experimental\r
open Fable.Core\r
open Fable.Core.JsInterop\r
open Partas.Solid.Primitives\r
open System\r
\r
[<JS.Pojo>]\r
type private Circle(\r
    ?x: float,\r
    ?y: float,\r
    ?translateX: float,\r
    ?translateY: float,\r
    ?size: float,\r
    ?alpha: float,\r
    ?targetAlpha: float,\r
    ?dx: float,\r
    ?dy: float,\r
    ?magnetism: float\r
) =\r
    member val x = x |> _.Value with get,set\r
    member val y = y |> _.Value with get,set\r
    member val translateX = translateX |> _.Value with get,set\r
    member val translateY = translateY |> _.Value with get,set\r
    member val size = size |> _.Value with get,set\r
    member val alpha = alpha |> _.Value with get,set\r
    member val targetAlpha = targetAlpha |> _.Value with get,set\r
    member val dx = dx |> _.Value with get,set\r
    member val dy = dy |> _.Value with get,set\r
    member val magnetism = magnetism |> _.Value with get,set\r
\r
[<Interface>]\r
type private Position =\r
    abstract member x: float with get,set\r
    abstract member y: float with get,set\r
    static member MousePosition () =\r
        let mousePosition,setMousePosition = createSignal<Position>(jsOptions<Position>(fun o -> o.x <- 0.; o.y <- 0.))\r
        effect {\r
            let mouseMoveHandler (event: MousePosition) =\r
                jsOptions<Position>(fun o ->\r
                    o.x <- !!event.x\r
                    o.y <- !!event.y\r
                    )\r
                |> setMousePosition\r
            let disposal = makeMousePositionListener(window, mouseMoveHandler)\r
            cleanup {\r
                disposal()\r
            }\r
        }\r
        mousePosition\r
\r
[<Interface>]\r
type private Size =\r
    abstract member w: float with get,set\r
    abstract member h: float with get,set\r
[<Erase>]\r
type Particles() =\r
    interface RegularNode\r
    [<DV>] val mutable quantity: int\r
    [<DV>] val mutable staticity: float\r
    [<DV>] val mutable ease: float\r
    [<DV>] val mutable size: float\r
    [<DV>] val mutable refresh: bool\r
    [<DV>] val mutable vx: float\r
    [<DV>] val mutable vy: float\r
    [<DV>] val mutable onDrawCircle: (unit -> unit)\r
    [<SolidTypeComponentAttribute>]\r
    member props.__ =\r
        props.quantity <- 100\r
        props.staticity <- 50.\r
        props.ease <- 50.\r
        props.size <- 0.4\r
        props.refresh <- false\r
        props.vx <- 0.\r
        props.vy <- 0.\r
        let mutable canvasRef: HTMLCanvasElement = null\r
        let mutable canvasContainerRef: HTMLDivElement = null\r
        let mutable context: CanvasRenderingContext2D = null\r
        let mutable circles: Circle[] = [||]\r
        let mousePosition = Position.MousePosition()\r
        let mutable mouse: Position = jsOptions<Position>(fun o -> o.x <- 0.; o.y <- 0.)\r
        let mutable canvasSize = jsOptions<Size>(fun o -> o.h <- 0.; o.w <- 0.)\r
        let dpr = if jsTypeof window = "undefined" then 1. else window.devicePixelRatio\r
        let mutable rafID: float = JS.undefined\r
        let mutable resizeTimeout: int = JS.undefined\r
        let rgb = fun () ->\r
            let color = canvasContainerRef.style.getPropertyValue("--particle-color")\r
            color[0..(color.Length-3)]\r
        let clearContext () =\r
            if !!context  then\r
                context.clearRect(0.,0.,canvasSize.w, canvasSize.h)\r
        let circleParams (): Circle=\r
            let floor = JS.Math.floor\r
            let random= JS.Math.random\r
            let inline toFixed (count: int) (value: float) = Math.Round(value, count)\r
            \r
            let x = canvasSize.w |> ((*) <| random()) |> floor\r
            let y = canvasSize.h |> ((*) <| random()) |> floor\r
            let translateX = 0.\r
            let translateY = 0.\r
            let pSize = props.size |> (+) (2. |> ((*) <| random()) |> floor)\r
            let alpha = 0.\r
            let targetAlpha = 0.6 |> ((*) <| random()) |> (+) 0.1 |> toFixed 1\r
            let dx = random() |> (-) <| 0.5 |> (*) 0.1\r
            let dy = random() |> (-) <| 0.5 |> (*) 0.1\r
            let magnetism = random() |> (*) 4. |> (+) 0.1\r
            Circle(x,y,translateX,translateY,pSize,alpha,targetAlpha,dx,dy,magnetism)\r
            \r
        let drawCircle (update: bool) (circle: Circle) =\r
            if !!context then\r
                context\r
                >=> _.translate(circle.translateX, circle.translateY)\r
                >=> _.beginPath()\r
                >=> _.arc(circle.x, circle.y, circle.size, 0., 2. * JS.Math.PI)\r
                >=> fun c -> c.fillStyle <- !! $"{rgb()}{circle.alpha})"\r
                >=> _.fill()\r
                |> _.setTransform(dpr, 0., 0., dpr, 0., 0.)\r
                if not update then\r
                    circles |> unbox<ResizeArray<Circle>> |> _.Add(circle)\r
        let resizeCanvas() =\r
            if canvasContainerRef &&= canvasRef &&= !!context then\r
                canvasSize.w <- canvasContainerRef.offsetWidth\r
                canvasSize.h <- canvasContainerRef.offsetHeight\r
                canvasRef.width <- canvasSize.w * dpr\r
                canvasRef.height <- canvasSize.h * dpr\r
                canvasRef.style.width <- $"{canvasSize.w}px"\r
                canvasRef.style.height <- $"{canvasSize.h}px"\r
                context.scale(dpr, dpr)\r
                circles <- [||]\r
                for _ in 0..props.quantity do\r
                    circleParams()\r
                    |> drawCircle false\r
        let remapValue(value,start1,end1,start2,end2): float =\r
            let remapped =\r
                ((value - start1) * (end2 - start2)) / (end1 - start1) + start2\r
            abs remapped\r
        let rec animate () =\r
            clearContext()\r
            circles\r
            |> Array.iteri(fun i circle ->\r
                let edge = [|\r
                    circle.x + circle.translateX - circle.size\r
                    canvasSize.w - circle.x - circle.translateX - circle.size\r
                    circle.y + circle.translateY - circle.size\r
                    canvasSize.h - circle.y - circle.translateY - circle.size\r
                |]\r
                let closestEdge = edge |> Array.reduce min\r
                let remapClosestEdge = Math.Round(remapValue(closestEdge, 0., 20., 0., 1.), 2)\r
                if remapClosestEdge > 1. then\r
                    circle.alpha <- (circle.alpha + 0.02, circle.targetAlpha) ||> min\r
                else\r
                    circle.alpha <- circle.targetAlpha * remapClosestEdge\r
                circle.x <- circle.dx + props.vx + circle.x\r
                circle.y <- circle.y + circle.dy + props.vy\r
                circle.translateX <- circle.translateX +\r
                    (mouse.x / (props.staticity / circle.magnetism) - circle.translateX) / props.ease\r
                circle.translateY <- circle.translateY +\r
                    (mouse.y / (props.staticity / circle.magnetism) - circle.translateY) / props.ease\r
                circle |> drawCircle true\r
                if (circle.x < -circle.size ||\r
                    circle.x > canvasSize.w + circle.size ||\r
                    circle.y < -circle.size ||\r
                    circle.y > canvasSize.h + circle.size)\r
                then\r
                    circles |> unbox<ResizeArray<Circle>> |> _.RemoveAt(i)\r
                    circleParams()\r
                    |> drawCircle false\r
                )\r
        let drawParticles() =\r
            clearContext()\r
            let particleCount = props.quantity\r
            for _ in 0..particleCount do\r
                circleParams()\r
                |> drawCircle false\r
        let initCanvas () =\r
            resizeCanvas()\r
            drawParticles()\r
        let running,start,stop = createRAF(targetFPS(ignore >> animate, 120))\r
        if not <| running() then start()\r
        \r
        let onMouseMove () =\r
            if !!canvasRef then\r
                let rect = canvasRef.getBoundingClientRect()\r
                let w = canvasSize.w\r
                let h = canvasSize.h\r
                let x = mousePosition().x - rect.left - canvasSize.w / 2.\r
                let y = mousePosition().y - rect.top - canvasSize.h / 2.\r
                let inside = x < w / 2. && x > -w / 2. && y < h / 2. && y > -h / 2.\r
                if inside then\r
                    mouse.x <- x\r
                    mouse.y <- y\r
        effect {\r
            // ignore props.color\r
            if !!canvasRef then\r
                context <- canvasRef.getContext_2d()\r
            initCanvas()\r
            \r
            let handleResize () =\r
                if !!resizeTimeout then\r
                    JS.clearTimeout resizeTimeout\r
                resizeTimeout <- JS.setTimeout (fun () -> initCanvas()) 200\r
            window.addEventListener("resize", ignore >> handleResize)\r
            cleanup {\r
                stop()\r
                if !!resizeTimeout then\r
                    JS.clearTimeout(resizeTimeout)\r
                window.removeEventListener("resize", ignore >> handleResize)\r
            }\r
        }\r
        effect {\r
            if props.refresh then\r
                initCanvas()\r
            \r
        }\r
        effect {\r
            ignore <| mousePosition()\r
            onMouseMove()\r
        }\r
        cleanup {\r
            stop()\r
        }\r
        div(\r
            class' = Lib.cn [|\r
                "pointer-events-none"\r
                props.class'\r
            |],\r
            ariaHidden = true\r
            ).ref(canvasContainerRef).spread props {\r
            canvas(class' = "size-full").ref(canvasRef)\r
        }\r
\r
`,h=`\uFEFFnamespace Partas.Solid.UI\r
\r
open Partas.Solid\r
open Fable.Core\r
\r
[<Erase>]\r
type BorderBeam() =\r
    interface VoidNode\r
    /// <defaultValue>90</defaultValue>\r
    [<Erase>]\r
    member val anchor: int = JS.undefined with get,set\r
    /// <defaultValue>1.5</defaultValue>\r
    [<Erase>]\r
    member val borderWidth: float = JS.undefined with get,set\r
    /// <defaultValue>#ffaa40</defaultValue>\r
    /// <storybook controlType="color"/>\r
    [<Erase>] member val colorFrom: string = JS.undefined with get,set\r
    /// <defaultValue>#9c40ff</defaultValue>\r
    /// <storybook controlType="color"/>\r
    [<Erase>] member val colorTo: string = JS.undefined with get,set\r
    /// <defaultValue>0</defaultValue>\r
    [<Erase>] member val delay: int = JS.undefined with get,set\r
    /// <defaultValue>15</defaultValue>\r
    [<Erase>] member val duration: int = JS.undefined with get,set\r
    /// <defaultValue>200</defaultValue>\r
    [<Erase>] member val size: int = JS.undefined with get,set\r
    [<SolidTypeComponentAttribute>]\r
    member props.constructor =\r
        props.anchor <- 90\r
        props.borderWidth <- 1.5\r
        props.colorFrom <- "#ffaa40"\r
        props.colorTo <- "#9c40ff"\r
        props.delay <- 0\r
        props.duration <- 15\r
        props.size <- 200\r
        \r
        let inline style () = JsInterop.createObj [\r
                "--size", $"{props.size}px"\r
                "--duration", $"{props.duration}s"\r
                "--anchor", $"{props.anchor}%%"\r
                "--border-width", $"{props.borderWidth}px"\r
                "--color-from", props.colorFrom\r
                "--color-to", props.colorTo\r
                "--delay", $"-{props.delay}s"\r
        ]\r
        div(\r
            class' = Lib.cn [|\r
                "pointer-events-none absolute inset-0 rounded-[inherit] [border:var(--border-width)_solid_transparent]"                \r
                // mask styles\r
                "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]"                \r
                // pseudo styles\r
                "after:absolute after:aspect-square after:w-[var(--size)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:var(--anchor)_50%] after:[offset-path:rect(0_auto_auto_0_round_var(--size))]"\r
                props.class'\r
            |]\r
        )   .style'(style())\r
`,v=`\uFEFFnamespace Partas.Solid.UI\r
open Partas.Solid\r
open Partas.Solid.Experimental.U\r
open Partas.Solid.Style\r
open Partas.Solid.Meta\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
\r
[<Erase>]\r
type AuroraBanner() =\r
    interface RegularNode\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        div(class' = Lib.cn [|\r
            "z-40 flex flex-row items-center justify-center px-4 text-center text-sm font-medium bg-fd-background"\r
            props.class'\r
        |]).style'([\r
            Style.height "3rem"\r
        ]) {\r
            div(class' = "absolute inset-0 z-[-1] animate-fd-moving-banner-reverse").style'([\r
                Style.maskImage "linear-gradient(white, transparent), radial-gradient(circle at center top, white, transparent)"\r
                Style.maskComposite MaskComposite.Intersect\r
                "--start" ==> "rgba(0,87,255,0.5)"\r
                "--mid" ==> "rgba(255,0,166,0.77)"\r
                "--end" ==> "rgba(255,77,0,0.4)"\r
                "--via" ==> "rgba(164,255,68,0.4)"\r
                Style.backgroundImage "repeating-linear-gradient( \\\r
    60deg, var(--end), var(--start) 2%, var(--start) 5%, transparent 8%, \\\r
    transparent 14%, var(--via) 18%, var(--via) 22%, var(--mid) 28%, \\\r
    var(--mid) 30%, var(--via) 34%, var(--via) 36%, transparent, \\\r
    var(--end) calc(50% - 12px))"\r
                Style.backgroundSize "200% 100%"\r
                Style.mixBlendMode MixBlendMode.Difference\r
            ])\r
            div(class' = "absolute inset-0 z-[-1] animate-fd-moving-banner-normal").style'([\r
                Style.maskImage "linear-gradient(white, transparent), radial-gradient(circle at center top, white, transparent)"\r
                Style.maskComposite MaskComposite.Intersect\r
                "--start" ==> "rgba(255,120,120,0.5)"\r
                "--mid" ==> "rgba(36,188,255,0.4)"\r
                "--end" ==> "rgba(64,0,255,0.51)"\r
                "--via" ==> "rgba(255,89,0,0.56)"\r
                Style.backgroundImage "repeating-linear-gradient(45deg, \\\r
    var(--end), var(--start) 4%, var(--start) 8%, transparent 9%, \\\r
    transparent 14%, var(--mid) 16%, var(--mid) 20%, transparent, \\\r
    var(--via) 36%, var(--via) 40%, transparent 42%, var(--end) 46%, \\\r
    var(--end) calc(50% - 16.8px))"\r
                Style.backgroundSize "200% 100%"\r
                Style.mixBlendMode MixBlendMode.ColorDodge\r
            ])\r
            props.children\r
        }\r
`,g=`\uFEFFnamespace Partas.Solid.UI\r
open Fable.Core\r
open Fable.Core.JS\r
open Fable.Core.JsInterop\r
open Partas.AnimeJs.Bindings.Enums\r
open Partas.AnimeJs.Core\r
open Partas.AnimeJs.Style\r
open Partas.AnimeJs.Core.Operators\r
open Partas.Solid\r
open System\r
\r
[<Erase>]\r
type Logo() =\r
    interface HtmlTag\r
    interface SvgSVGAttributes\r
    [<SolidTypeComponent>]\r
    member props.__ =\r
        createEffect(fun () ->\r
            let maskPaths = Utils.\`\`$\`\` "#drawPaths path"\r
            let anim = animate {\r
                style.opacity { 0, 1 }\r
                style.translateX { from (stagger(100,-100).asFunctionValue) }\r
                style.translateY { from (stagger(100,-100).asFunctionValue) }\r
                delay (stagger(100,-100).asFunctionValue)\r
                ease Eases.spring.default'\r
            }\r
            let activeAnim = anim { maskPaths }\r
            onCleanup (fun () -> activeAnim.revert() |> ignore)\r
                \r
            )\r
        let paths = [|\r
            "m372.095 220.63 29.06 29.08-10.79 10.73c-2.23-2.48-4.719-5.08-7.45-7.81l-5.53-5.53-.03-.04h-.01l-15.84-15.84-18.52-18.53-15.88 15.88-10.58-10.58 13.22-13.23h.01c1.83-1.84 3.931-3.2 6.181-4.11 2.25-.91 4.639-1.37 7.029-1.37h.01c2.4 0 4.8.46 7.05 1.37 2.25.91 4.35 2.27 6.19 4.11l15.88 15.87Z"\r
            "m358.858 260.328 15.879 15.879 10.587-10.586-13.234-13.231a18.604 18.604 0 0 0-6.209-4.114 18.965 18.965 0 0 0-7.081-1.366 18.557 18.557 0 0 0-13.17 5.482l-1.096 1.096h-.001l-12.136 12.133 10.586 10.586 15.875-15.879Z"\r
            "m353.567 233.867-10.584-10.586-15.879 15.878-15.875-15.878-10.585 10.586 13.231 13.231a18.687 18.687 0 0 0 6.169 4.108 18.591 18.591 0 0 0 7.01 1.373c2.411 0 4.819-.456 7.077-1.368a18.6 18.6 0 0 0 6.207-4.112l13.229-13.232Z"\r
            "m369.445 281.5-13.24 13.24c-.33.33-.69.66-1.059.98l-.011.01c-.239.21-.47.4-.71.58h-.01a18.1 18.1 0 0 1-6.53 3.25l-.02.01-.03.01c-.11.03-.23.06-.35.09h-.02l-.029.01c-1.461.35-2.951.53-4.441.53-.73 0-1.46-.04-2.19-.13h-.02c-.11-.01-.34-.05-.65-.09h-.01l-.01-.01c-.12-.01-.219-.03-.28-.03l-.06-.01-.02-.01h-.01l-.05-.01c-.35-.06-.71-.13-1.049-.22l.009.01-.03-.01h-.01l-.04-.01c-.2-.05-.389-.1-.58-.15h-.01l-.04-.01c-.17-.05-.32-.09-.46-.14l-.03-.01h-.01l-.02-.01c-.32-.09-.64-.2-.97-.33h-.019c-.141-.06-.311-.12-.5-.2a18.23 18.23 0 0 1-4.011-2.24c-.27-.2-.51-.39-.739-.57l-.011-.01c-.48-.4-.96-.83-1.42-1.28v-.01l-15.88-15.88-29.04-29.21 10.601-10.73 47.549 47.88 15.87-15.88 10.59 10.59Z"\r
        |]\r
        let inline colorGrads () =\r
            toElement <| JSX.jsx """\r
            <linearGradient id="grad0" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(63.2 2.904 386.274) scale(47.6)" gradientUnits="userSpaceOnUse">\r
              <stop offset="0" style="stop-color:#ee9e7d;stop-opacity:1"/>\r
              <stop offset=".6" style="stop-color:#c380b2;stop-opacity:1"/>\r
              <stop offset="1" style="stop-color:#a769ac;stop-opacity:1"/>\r
            </linearGradient>\r
            <linearGradient id="grad1" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(-88.065 331.111 -37.983) scale(74.04102)" gradientUnits="userSpaceOnUse">\r
              <stop offset="0" style="stop-color:#00b5ec;stop-opacity:1"/>\r
              <stop offset=".3" style="stop-color:#00afed;stop-opacity:1"/>\r
              <stop offset="1" style="stop-color:#0083c8;stop-opacity:1"/>\r
            </linearGradient>\r
            <linearGradient id="grad2" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(63.2 -20.087 372.137) scale(47.6)" gradientUnits="userSpaceOnUse">\r
              <stop offset="0" style="stop-color:#ee9e7d;stop-opacity:1"/>\r
              <stop offset=".6" style="stop-color:#c380b2;stop-opacity:1"/>\r
              <stop offset="1" style="stop-color:#a769ac;stop-opacity:1"/>\r
            </linearGradient>\r
            <linearGradient id="grad3" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(-88.065 314.677 -22.138) scale(74.04162)" gradientUnits="userSpaceOnUse">\r
              <stop offset="0" style="stop-color:#00b5ec;stop-opacity:1"/>\r
              <stop offset=".3" style="stop-color:#00afed;stop-opacity:1"/>\r
              <stop offset="1" style="stop-color:#0083c8;stop-opacity:1"/>\r
            </linearGradient>"""\r
        \r
        Svg.svg(id = "svglogo", viewBox = "284.835 199.28 116.32 101.14") {\r
            Svg.defs(id = "linearGrads") {\r
                colorGrads()\r
                // Svg.mask(id = "drawMask") {\r
                //     Svg.path(d = "m 15 180 L 243 405 L 385 275 L 305 215 L 220 300", strokeWidth = "70", stroke = "white", strokeLinejoin = "round", fill= "none")\r
                //     Svg.path(d = "m 15 180 L 243 405 L 385 275 L 305 215 L 220 300", strokeWidth = "70", stroke = "white", strokeLinejoin = "round", fill= "none", transform = "rotate(-180) translate(-485 -420)")\r
                // }\r
            }\r
            Svg.g(id = "drawPaths") {\r
                For(each = paths) { yield fun path i ->\r
                    Svg.path(d = path, style = $"fill:url(#grad{i()})") }\r
            }\r
        }\r
(*\r
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="284.835 199.28 116.32 101.14">\r
  <path d="m372.095 220.63 29.06 29.08-10.79 10.73c-2.23-2.48-4.719-5.08-7.45-7.81l-5.53-5.53-.03-.04h-.01l-15.84-15.84-18.52-18.53-15.88 15.88-10.58-10.58 13.22-13.23h.01c1.83-1.84 3.931-3.2 6.181-4.11 2.25-.91 4.639-1.37 7.029-1.37h.01c2.4 0 4.8.46 7.05 1.37 2.25.91 4.35 2.27 6.19 4.11l15.88 15.87Z" style="fill:url(#a)"/>\r
  <path d="m358.858 260.328 15.879 15.879 10.587-10.586-13.234-13.231a18.604 18.604 0 0 0-6.209-4.114 18.965 18.965 0 0 0-7.081-1.366 18.557 18.557 0 0 0-13.17 5.482l-1.096 1.096h-.001l-12.136 12.133 10.586 10.586 15.875-15.879Z" style="fill:url(#b)"/>\r
  <path d="m353.567 233.867-10.584-10.586-15.879 15.878-15.875-15.878-10.585 10.586 13.231 13.231a18.687 18.687 0 0 0 6.169 4.108 18.591 18.591 0 0 0 7.01 1.373c2.411 0 4.819-.456 7.077-1.368a18.6 18.6 0 0 0 6.207-4.112l13.229-13.232Z" style="fill:url(#c)"/>\r
  <path d="m369.445 281.5-13.24 13.24c-.33.33-.69.66-1.059.98l-.011.01c-.239.21-.47.4-.71.58h-.01a18.1 18.1 0 0 1-6.53 3.25l-.02.01-.03.01c-.11.03-.23.06-.35.09h-.02l-.029.01c-1.461.35-2.951.53-4.441.53-.73 0-1.46-.04-2.19-.13h-.02c-.11-.01-.34-.05-.65-.09h-.01l-.01-.01c-.12-.01-.219-.03-.28-.03l-.06-.01-.02-.01h-.01l-.05-.01c-.35-.06-.71-.13-1.049-.22l.009.01-.03-.01h-.01l-.04-.01c-.2-.05-.389-.1-.58-.15h-.01l-.04-.01c-.17-.05-.32-.09-.46-.14l-.03-.01h-.01l-.02-.01c-.32-.09-.64-.2-.97-.33h-.019c-.141-.06-.311-.12-.5-.2a18.23 18.23 0 0 1-4.011-2.24c-.27-.2-.51-.39-.739-.57l-.011-.01c-.48-.4-.96-.83-1.42-1.28v-.01l-15.88-15.88-29.04-29.21 10.601-10.73 47.549 47.88 15.87-15.88 10.59 10.59Z" style="fill:url(#d)"/>\r
  <defs>\r
    <linearGradient id="a" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(63.2 2.904 386.274) scale(47.6)" gradientUnits="userSpaceOnUse">\r
      <stop offset="0" style="stop-color:#ee9e7d;stop-opacity:1"/>\r
      <stop offset=".6" style="stop-color:#c380b2;stop-opacity:1"/>\r
      <stop offset="1" style="stop-color:#a769ac;stop-opacity:1"/>\r
    </linearGradient>\r
    <linearGradient id="b" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(-88.065 331.111 -37.983) scale(74.04102)" gradientUnits="userSpaceOnUse">\r
      <stop offset="0" style="stop-color:#00b5ec;stop-opacity:1"/>\r
      <stop offset=".3" style="stop-color:#00afed;stop-opacity:1"/>\r
      <stop offset="1" style="stop-color:#0083c8;stop-opacity:1"/>\r
    </linearGradient>\r
    <linearGradient id="c" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(63.2 -20.087 372.137) scale(47.6)" gradientUnits="userSpaceOnUse">\r
      <stop offset="0" style="stop-color:#ee9e7d;stop-opacity:1"/>\r
      <stop offset=".6" style="stop-color:#c380b2;stop-opacity:1"/>\r
      <stop offset="1" style="stop-color:#a769ac;stop-opacity:1"/>\r
    </linearGradient>\r
    <linearGradient id="d" x1="0" x2="1" y1="0" y2="0" gradientTransform="rotate(-88.065 314.677 -22.138) scale(74.04162)" gradientUnits="userSpaceOnUse">\r
      <stop offset="0" style="stop-color:#00b5ec;stop-opacity:1"/>\r
      <stop offset=".3" style="stop-color:#00afed;stop-opacity:1"/>\r
      <stop offset="1" style="stop-color:#0083c8;stop-opacity:1"/>\r
    </linearGradient>\r
  </defs>\r
</svg>\r
*)\r
`;function p(r){const n={h1:"h1",...d(),...r.components},{SourceCode:t}=n;return t||b("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(f,{of:u}),`
`,e.jsx(m,{}),`
`,e.jsx(a,{of:s}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(t,{code:y}),`
`,e.jsx(n.h1,{id:"borderbeam",children:"BorderBeam"}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(t,{code:h}),`
`,e.jsx(n.h1,{id:"aurorabanner",children:"AuroraBanner"}),`
`,e.jsx(a,{of:l}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(t,{code:v}),`
`,e.jsx(n.h1,{id:"logo",children:"Logo"}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(t,{code:g})]})}function U(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(p,{...r})}):p(r)}function b(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{U as default};

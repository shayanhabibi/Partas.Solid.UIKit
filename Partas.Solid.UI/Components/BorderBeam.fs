namespace Partas.Solid.UI

open Partas.Solid
open Fable.Core

[<Erase>]
type BorderBeam() =
    interface VoidNode
    /// <defaultValue>90</defaultValue>
    [<Erase>]
    member val anchor: int = JS.undefined with get,set
    /// <defaultValue>1.5</defaultValue>
    [<Erase>]
    member val borderWidth: float = JS.undefined with get,set
    /// <defaultValue>#ffaa40</defaultValue>
    /// <storybook controlType="color"/>
    [<Erase>] member val colorFrom: string = JS.undefined with get,set
    /// <defaultValue>#9c40ff</defaultValue>
    /// <storybook controlType="color"/>
    [<Erase>] member val colorTo: string = JS.undefined with get,set
    /// <defaultValue>0</defaultValue>
    [<Erase>] member val delay: int = JS.undefined with get,set
    /// <defaultValue>15</defaultValue>
    [<Erase>] member val duration: int = JS.undefined with get,set
    /// <defaultValue>200</defaultValue>
    [<Erase>] member val size: int = JS.undefined with get,set
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        props.anchor <- 90
        props.borderWidth <- 1.5
        props.colorFrom <- "#ffaa40"
        props.colorTo <- "#9c40ff"
        props.delay <- 0
        props.duration <- 15
        props.size <- 200
        
        let inline style () = JsInterop.createObj [
                "--size", $"{props.size}px"
                "--duration", $"{props.duration}s"
                "--anchor", $"{props.anchor}%%"
                "--border-width", $"{props.borderWidth}px"
                "--color-from", props.colorFrom
                "--color-to", props.colorTo
                "--delay", $"-{props.delay}s"
        ]
        div(
            class' = Lib.cn [|
                "pointer-events-none absolute inset-0 rounded-[inherit] [border:var(--border-width)_solid_transparent]"                
                // mask styles
                "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]"                
                // pseudo styles
                "after:absolute after:aspect-square after:w-[var(--size)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:var(--anchor)_50%] after:[offset-path:rect(0_auto_auto_0_round_var(--size))]"
                props.class'
            |]
        )   .style'(style())

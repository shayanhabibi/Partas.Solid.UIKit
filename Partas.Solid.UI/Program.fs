module Partas.Solid.Storybook.ComputationExpression
open Fable.Core
open Fable.Core.JsInterop
open Fable.Core.JS
open Partas.Solid

[<Erase; AutoOpen>]
module Enums =
    [<StringEnum(CaseRules.KebabCase)>]
    type ControlType =
        | Object
        | Boolean
        | Check
        | InlineCheck
        | Radio
        | InlineRadio
        | Select
        | MultiSelect
        | Number
        | Range
        | File
        | Color
        | Date
        | Text
        | [<CompiledValue(false)>] DoNotRender

[<Erase; AutoOpen>]
module Helpers =
    let inline add state value = value :: state
    let inline addTail state value = state @ [ value ]
type FableObject = (string * obj) list
type FableProp = string * obj
type FableObjectBuilder = interface end
[<Erase>]
type FableObject<'T> = FableObject of 'T with
    member inline this.Value = unbox<'T> this
type FableObjectBuilder with
    member inline _.Zero(): FableObject = []
    member inline _.Yield(_: unit): FableObject = []
    member inline _.Yield(value: string * obj): FableObject = [ value ]
    member inline _.Yield(object: FableObject): FableObject = object
    member inline _.Yield(object: FableObject<'T>): FableObject<'T> = object
    member inline _.Combine(_: unit, value: FableProp): FableObject = [ value ]
    member inline _.Combine(value: FableProp, _: unit): FableObject = [ value ]
    member inline _.Combine(_: unit, value: FableObject): FableObject = value
    member inline _.Combine(value: FableObject, _: unit): FableObject = value
    member inline _.Combine(l: FableProp, r: FableProp): FableObject = [ l; r ]
    member inline _.Combine(l: FableObject, r: FableProp): FableObject = l @ [ r ]
    member inline _.Combine(l: FableProp, r: FableObject): FableObject = l :: r
    member inline _.Combine(l: FableObject, r: FableObject): FableObject = l @ r
    member inline _.Combine(l: FableObject<'T>, r: FableProp): FableObject<'T> = unbox [ unbox l; r ]
    member inline _.Combine(l: FableObject, r: FableObject<'T>): FableObject<'T> = unbox (l @ [ unbox r ])
    member inline _.Combine(l: FableProp, r: FableObject<'T>): FableObject<'T> = unbox (l :: unbox r)
    member inline _.Combine(l: FableObject<'T>, r: FableObject): FableObject<'T> = unbox(unbox l @ r)
    member inline _.Combine(y) = fun () -> y
    member inline _.Delay([<InlineIfLambda>] value) = value()
    member inline _.For(state: FableObject, [<InlineIfLambda>] value: FableProp -> FableObject): FableObject =
        state |> List.collect value
    member inline _.For(state: FableObject, [<InlineIfLambda>] value: FableProp -> FableObject<'T>): FableObject<'T> =
        state |> List.collect (unbox value) |> unbox
    member inline _.For(state: FableObject<'T>, [<InlineIfLambda>] value: FableProp -> FableObject<'T>): FableObject<'T> =
        (unbox state) |> List.collect (unbox value) |> unbox
    member inline _.For(state: FableObject<'T>, [<InlineIfLambda>] value: FableProp -> FableObject): FableObject<'T> =
        unbox state |> List.collect value |> unbox
    member inline _.For(state: FableObject, [<InlineIfLambda>] value: unit -> FableObject): FableObject =
        state @ value()
    member inline _.For(state: FableObject, [<InlineIfLambda>] value: unit -> FableProp): FableObject =
        value() :: state
    member inline _.For(state: FableObject, [<InlineIfLambda>] value: unit -> FableObject<'T>): FableObject<'T> =
        unbox (state @ (value() |> unbox))
    member inline _.For(state: FableObject<'T>, [<InlineIfLambda>] value: unit -> FableObject<'T>): FableObject<'T> =
        unbox(unbox state @ unbox(value()))
    member inline _.For(state: FableObject<'T>, [<InlineIfLambda>] value: unit -> FableObject): FableObject<'T> =
        unbox(unbox state @ value())
    member inline _.For(state: FableObject<'T>, [<InlineIfLambda>] value: unit -> FableProp): FableObject<'T> =
        unbox(unbox(value()) :: unbox state)
    member inline _.For(state: ^T, [<InlineIfLambdaAttribute>] value: ^T -> _) =
        state |> value

[<Erase>]
type TableInfo =
    abstract summary: string with get,set
    abstract detail: string with get,set
[<Erase>]
type TableInfoBuilder =
    inherit FableObjectBuilder

type TableInfoBuilder with
    [<CustomOperation>]
    member inline _.summary (state: FableObject, value: string): FableObject =
        "summary" ==> value |> add state
    [<CustomOperation>]
    member inline _.detail (state: FableObject, value: string): FableObject =
        "detail" ==> value |> add state
    member inline _.Run(state: FableObject) =
        createObj state |> unbox<TableInfo>
        
let tableInfo = Unchecked.defaultof<TableInfoBuilder>

[<Erase>]
type Table =
    abstract category: string with get,set
    abstract defaultValue: TableInfo option with get,set
    abstract disable: bool with get,set
    abstract subcategory: string with get,set
    abstract ``type``: TableInfo option with get,set
[<Erase>]
type TableBuilder =
    inherit FableObjectBuilder

type TableBuilder with
    [<CustomOperation>]
    member inline _.category (state: FableObject, value: string) =
        "category" ==> value |> add state
    [<CustomOperation>]
    member inline _.defaultValue(state: FableObject, value: TableInfo) =
        "defaultValue" ==> value |> add state
    [<CustomOperation>]
    member inline _.disable(state: FableObject, value: bool) =
        "disable" ==> value |> add state
    [<CustomOperation>]
    member inline _.subcategory(state: FableObject, value: string) =
        "subcategory" ==> value |> add state
    [<CustomOperation>]
    member inline _.type'(state: FableObject, value: TableInfo) =
        "type" ==> value |> add state
    member inline _.Run(state: FableObject) =
        createObj state |> unbox<Table>
let table = Unchecked.defaultof<TableBuilder>
[<Erase>]
type ControlType<'Value> =
    abstract ``type``: ControlType with get,set
    abstract accept: string with get,set
    abstract labels: ('Value * obj) array with get,set
    abstract max: 'Value with get,set
    abstract min: 'Value with get,set
    abstract presetColors: string list with get,set
    abstract step: 'Value with get,set

[<Erase>]
type ControlTypeBuilder =
    inherit FableObjectBuilder

type ControlTypeBuilder with
    [<CustomOperation>]
    member inline _.type'(state: FableObject, value: ControlType): FableObject =
        "type" ==> value |> add state
    [<CustomOperation>]
    member inline _.type'(state: FableObject<'T>, value: ControlType): FableObject<'T> =
        "type" ==> value |> add (unbox<FableObject> state) |> unbox
    [<CustomOperation>]
    member inline _.Yield(value: ControlType): FableObject =
        [ "type" ==> value ]
    [<CustomOperation>]
    member inline _.accept(state: FableObject, value: string): FableObject =
        "accept" ==> value |> add state
    [<CustomOperation>]
    member inline _.accept(state: FableObject<'T>, value: string): FableObject<'T> =
        "accept" ==> value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.labels(state: FableObject, value: ('T * obj) array): FableObject<'T> =
        "labels" ==> value |> add state |> unbox
    [<CustomOperation>]
    member inline _.labels(state: FableObject<'T>, value: ('T * obj) array): FableObject<'T> =
        "labels" ==> value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.max(state: FableObject, value: 'T): FableObject<'T> =
        "max" ==> value |> add state |> unbox
    [<CustomOperation>]
    member inline _.max(state: FableObject<'T>, value: 'T): FableObject<'T> =
        "max" ==> value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.min(state: FableObject, value: 'T): FableObject<'T> =
        "min" ==> value |> add state |> unbox
    [<CustomOperation>]
    member inline _.min(state: FableObject<'T>, value: 'T): FableObject<'T> =
        "min" ==> value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.step(state: FableObject, value: 'T): FableObject<'T> =
        "step" ==> value |> add state |> unbox
    [<CustomOperation>]
    member inline _.step(state: FableObject<'T>, value: 'T): FableObject<'T> =
        "step" ==> value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.presetColors(state: FableObject, value: string array): FableObject = 
        "presetColors" ==> value |> add state
    [<CustomOperation>]
    member inline _.presetColors(state: FableObject<'T>, value: string array) :FableObject<'T> =
        "presetColors" ==> value |> add (unbox state) |> unbox
    member inline _.Run(state: FableObject) =
        createObj state |> unbox<ControlType<_>>
    member inline _.Run(state: FableObject<'T>) =
        createObj (unbox state) |> unbox<ControlType<'T>>

let controlType = Unchecked.defaultof<ControlTypeBuilder>
[<Erase>]
type ArgType<'Comp, 'Value> =
    abstract control: ControlType<'Value> with get,set
    abstract description: string with get,set
    abstract conditional: obj with get,set
    abstract mapping: ('Value -> obj)[] with get,set
    abstract name: string with get,set
    abstract options: 'Value list with get,set
    abstract table: Table with get,set
    abstract ``type``: obj with get,set

[<Erase>]
type ArgTypeBuilder<'T> =
    inherit FableObjectBuilder
type ArgTypeBuilder<'T> with
    [<CustomOperation>]
    member inline _.control(state: FableObject<'T>, value: ControlType<'T>): FableObject<'T> =
        "control" ==> value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.control(state: FableObject, value: ControlType<'T>): FableObject<'T> =
        "control" ==> value |> add state |> unbox
    [<CustomOperation>]
    member inline _.control(state: FableObject, value: ControlType): FableObject<'T> =
        "control" ==> value |> add state |> unbox
    [<CustomOperation>]
    member inline _.control(state: FableObject<'T>, value: ControlType): FableObject<'T> =
        "control" ==> value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.control(state: FableObject, value: bool): FableObject =
        "control" ==> value |> add state
    [<CustomOperation>]
    member inline _.control(state: FableObject<'T>, value: bool): FableObject<'T> =
        "control" ==> value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.description (state :FableObject<'T>, value: string): FableObject<'T> =
        "description" ==> value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.description(state: FableObject, value: string): FableObject =
        "description" ==> value |> add state
    [<CustomOperation>]
    member inline _.mapping(state: FableObject<'T>, value: ('T -> obj)[]): FableObject<'T> =
        "mapping" ==> value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.mapping(state: FableObject, value: ('T -> obj)[]): FableObject<'T> =
        "mapping" ==> value |> add state |> unbox
    [<CustomOperation>]
    member inline _.name(state: FableObject<'T>, value: string): FableObject<'T> =
        "name" ==> value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.name(state: FableObject, value: string): FableObject =
        "name" ==> value |> add state
    [<CustomOperation>]
    member inline _.options(state: FableObject<'T>, value: 'T[]): FableObject<'T> =
        "options" ==> value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.options(state: FableObject, value: 'T[]): FableObject<'T> =
        "options" ==> value |> add state |> unbox
    member inline _.Yield(value: Table): FableProp =
        "table" ==> value
    [<CustomOperation>]
    member inline _.type'(state: FableObject<'T>, value: obj): FableObject<'T> =
        "type" ==> value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.type'(state: FableObject, value: obj): FableObject =
        "type" ==> value |> add state
    member inline _.Run(state: FableObject) =
        createObj state
        |> unbox<ArgType<_,'T>>
    member inline _.Run(state: FableObject<'T>) =
        createObj (unbox state)
        |> unbox<ArgType<_,'T>>

[<Erase>]
type ArgTypeCollection<'T> = interface end
[<Erase>]
type ArgTypeCollectionBuilder<'T> =
    inherit FableObjectBuilder
    
type ArgTypeCollectionBuilder<'T> with
    member inline _.Yield(name: string * ArgType<'T, _>): FableObject =
        [ unbox name ]
    member inline _.Run(state: FableObject<'T>) = createObj (unbox state) |> unbox<ArgTypeCollection<'T>>
    member inline _.Run(state: FableObject) = createObj state |> unbox<ArgTypeCollection<'T>>
    
let argTypes<'T> = Unchecked.defaultof<ArgTypeCollectionBuilder<'T>>
let argType<'T> = Unchecked.defaultof<ArgTypeBuilder<'T>>

[<Erase>]
type Meta<'T> =
    inherit FableObjectBuilder
    abstract ``component``: (unit -> 'T) with get,set
    abstract subcomponents: obj array with get,set
    abstract args: obj with get,set
    abstract argTypes: obj with get,set
    abstract render: ('T -> obj) option
    abstract stories: string array
    abstract parameters: obj array
    abstract tags: string array

[<Erase>]
type MetaBuilder<'T when 'T :> HtmlElement> =
    interface FableObjectBuilder
    member inline _.Zero(): FableObject<'T> = unbox []
    member inline _.Yield(argTypes: ArgTypeCollection<'T>) =
        unbox<FableObject<'T>> [ "argTypes" ==> argTypes ]
    [<CustomOperation>]
    member inline _.component'(state: FableObject, value: unit -> 'T): FableObject<'T> =
        "component" ==> !@value |> add state |> unbox
    [<CustomOperation>]
    member inline _.component'(state: FableObject<'T>, value: unit -> 'T): FableObject<'T> =
        "component" ==> !@value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.subcomponents(state: FableObject<'T>, value: obj array): FableObject<'T> =
        "subcomponents" ==> value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.args(state: FableObject<'T>, value: (string * obj) list): FableObject<'T> =
        "args" ==> createObj value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.render(state: FableObject<'T>, [<InlineIfLambda>] value: 'T -> obj): FableObject<'T> =
        "render" ==> value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.stories(state: FableObject<'T>, value: string array): FableObject<'T> =
        "includeStories" ==> value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.parameters(state: FableObject<'T>, value: obj array): FableObject<'T> =
        "parameters" ==> value |> add (unbox state) |> unbox
    [<CustomOperation>]
    member inline _.tags(state: FableObject<'T>, value: string array): FableObject<'T> =
        "tags" ==> value |> add (unbox state) |> unbox
    member inline _.Run(state: FableObject<'T>): Meta<'T> =
       createObj (unbox state) |> unbox
    member inline _.Run(state: FableObject): Meta<'T> =
       createObj state |> unbox

type Meta<'T> with
    [<CustomOperation>]
    member inline _.args(state: FableObject, value: (string * obj) list): FableObject =
        "args" ==> createObj value |> add state
    [<CustomOperation>]
    member inline _.tags(state: FableObject, value: string list): FableObject =
        "tags" ==> List.toArray value |> add state
    member inline _.Run(state: FableObject): Meta<'T> =
        createObj state |> unbox
    
let meta<'T when 'T :> HtmlElement> = Unchecked.defaultof<MetaBuilder<'T>>
let inline build (meta: Meta<'T>): obj = emitJsExpr meta "{...$0}"
open Fable.Core.Reflection

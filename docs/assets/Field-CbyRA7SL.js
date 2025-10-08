import{H as e,I as a,T as d,R as s,Q as p}from"./iframe-DHSEN8D7.js";import{useMDXComponents as l}from"./index-e4aCb-2o.js";import{S as t}from"./Field.stories-B_m2LYzC.js";import{L as m}from"./Field-BfJPVqnm.js";import"./preload-helper-PPVm8Dsz.js";import"./Field-BueAk--A.js";import"./Utils-CzREY3kc.js";import"./index-SvhdUoxj.js";import"./Option-DlNMNgAB.js";import"./Util-DXwscfZV.js";import"./Label-BvFM7TJT.js";import"./Separator-DmtN1xBE.js";import"./T4C3DMHT-ByXrw0oU.js";import"./OYES4GOP-D4sXc2ip.js";import"./index-CX5o166x.js";import"./FLVHQV4A-VgAG7mUH.js";import"./5WXHJDCZ-DghNgBBa.js";import"./index-1c5Tq1Kt.js";import"./Array-C0Iq9Aiw.js";import"./FSharp.Core-D1Pte0FF.js";import"./Types-CqbaJdUC.js";import"./String-DLdTzCOk.js";import"./RadioGroup-CSYlL7Q4.js";import"./FQAGELOF-C25n1Wxh.js";import"./ZZYKR3VO-sS--fHny.js";import"./JNCCF6MP-4sxnBYeu.js";import"./FN6EICGO-CNc9l087.js";import"./index-ptAOXcxb.js";import"./U42ECMND-BDjyePcW.js";import"./combineProps-ChBwTExo.js";import"./circle-aMw8Dqjc.js";import"./Icon-By-Qgdq5.js";import"./Switch-DYPQRrop.js";import"./VI7QYH27-BRSBmtcb.js";import"./NGHEENNE-Dj0dKL4v.js";import"./Checkbox-BtMIJhYF.js";import"./minus-BCppHssx.js";import"./check-B6yQMYMS.js";import"./Text-nkWEn69A.js";import"./MKJEDDFV-EnaCE2Sw.js";import"./Slider-BEihyFjD.js";import"./65CAYJLE-C_1Oq9xR.js";import"./SOM3K36D-TiEONE0Z.js";import"./LR7LBJN3-B1LX4Q8m.js";import"./Select-DMBgPApH.js";import"./2I3Q5YLM-Cxvo6qWJ.js";import"./QZDH5R5B-C5rmEo9L.js";import"./N3GAC5SS-EuMAo5Zl.js";import"./2CTBMVJ4-Db2FGNLe.js";import"./floating-ui.dom-BNE0r0Ci.js";import"./FBCYWU27-BRaomcyy.js";import"./3VFJM5NZ-DDmjFnWc.js";import"./JHMNWOLY-BX05bB8i.js";import"./E53DB7BS-C475FHrG.js";import"./UKTBL2JL-D9vX2QTQ.js";import"./index-B53RNSLG.js";import"./GZJAOTUE-Cj1OtU2l.js";const c=`\uFEFFmodule Partas.Solid.UI.stories.Components.Field.Field_stories\r
open Partas.Solid\r
open Partas.Solid.UI\r
open Partas.Solid.Storybook\r
[<SolidComponent>]\r
let inline InputExample () =\r
    div(class' = "w-full max-w-md") {\r
        FieldSet() {\r
            FieldGroup() {\r
                Field() {\r
                    FieldLabel(for' = "username") { "Username" }\r
                    TextField() {\r
                        TextFieldInput(id="username", type' = TextField.Type.Text, placeholder = "Max Leiter")\r
                    }\r
                    FieldDescription() {\r
                        "Choose a unique username for your account."\r
                    }\r
                }\r
                Field() {\r
                    FieldLabel(for' = "password") { "Password" }\r
                    FieldDescription() {\r
                        "Must be at least 8 characters long."\r
                    }\r
                    TextField() {\r
                        TextFieldInput(id = "password",\r
                                       type' = TextField.Password,\r
                                       placeholder = "********")\r
                    }\r
                }\r
            }\r
        }\r
    }\r
[<SolidComponent>]\r
let inline TextAreaExample () =\r
    div(class' = "w-full max-w-md") {\r
        FieldSet() {\r
            FieldGroup() {\r
                Field() {\r
                    FieldLabel(for' = "feedback") { "Feedback" }\r
                    TextField() {\r
                        TextFieldTextArea(id = "feedback",\r
                                          placeholder = "You feedback helps us improve...",\r
                                          rows = 4)\r
                        FieldDescription() {\r
                            "Share your thoughts about our service"\r
                        }\r
                    }\r
                }\r
            }\r
        }\r
    }\r
open Fable.Core\r
open Fable.Core.JsInterop\r
[<SolidComponent>]\r
let inline SelectExample () =\r
    let items = [|\r
        "engineering", "Engineering"\r
        "design", "Design"\r
        "marketing", "Marketing"\r
        "sales", "Sales"\r
        "support", "Customer Support"\r
        "hr", "Human Resources"\r
        "finance", "Finance"\r
        "operations", "Operations"\r
    |]\r
    div(class' = "w-full max-w-md") {\r
        Field() {\r
            FieldLabel() { "Department" }\r
            Select<string * string>(options = items,\r
                                    placeholder = span() {"Choose department"}\r
                                    ,optionTextValue = snd,\r
                                    optionValue = (fst >> unbox),\r
                                    itemComponent = fun props ->\r
                                        SelectItem(item = props.item) { props.item.textValue }\r
                                        ) {\r
                SelectTrigger() {\r
                    SelectValue<string * string>() { yield fun state ->\r
                        span() { snd <| state.selectedOption() }\r
                    }\r
                }\r
                SelectContent()\r
            }\r
            FieldDescription() {\r
                "Select your department or area of work."\r
            }\r
        }\r
    }\r
[<SolidComponent>]\r
let inline SliderExample () =\r
    div(class' = "w-full max-w-md") {\r
        Field() {\r
            Slider(maxValue = 1000, minValue = 0, step = 10,\r
                   defaultValue = [|200;400|]).as'(Field()) {\r
            SliderLabel().as'(FieldTitle()) { "Price Range" }\r
            FieldDescription(class' = "flex") {\r
                "Set your budget range $"\r
                SliderValueLabel()\r
            }\r
            SliderControl(class' = "mt-2 w-full") {\r
                SliderTrack()\r
                SliderThumb()\r
                SliderThumb()\r
            }\r
            }\r
        }\r
    }\r
\r
[<SolidComponent>]\r
let inline FieldSetExample() =\r
    div(class' = "w-full max-w-md space-y-6") {\r
        FieldSet() {\r
            FieldLegend() { "Address Information" }\r
            FieldDescription() {\r
                "We need your address to deliver your order"\r
            }\r
            FieldGroup() {\r
                TextField().as'(Field()) {\r
                    TextFieldLabel().as'(FieldLabel(for' = "street")) {\r
                        "Street Address"\r
                    }\r
                    TextFieldInput(id = "street",\r
                                   type' = TextField.Text,\r
                                   placeholder = "123 Main St")\r
                }\r
                div(class' = "grid grid-cols-2 gap-4") {\r
                    TextField().as'(Field()) {\r
                        TextFieldLabel(for' = "city").as'(FieldLabel()) {\r
                            "City"\r
                        }\r
                        TextFieldInput(id = "city",\r
                                       type' = TextField.Text,\r
                                       placeholder = "New York")\r
                    }\r
                    TextField().as'(Field()) {\r
                        TextFieldLabel(for' = "zip").as'(FieldLabel()) {\r
                            "Postal Code"\r
                        }\r
                        TextFieldInput(type' = TextField.Text, placeholder = "90502")\r
                    }\r
                }\r
            }\r
        }\r
    }\r
[<SolidComponent>]\r
let inline CheckboxExample () =\r
    let inline makeField (name: string) id defaultChecked =\r
        Field(orientation = Field.Orientation.Horizontal) {\r
            Checkbox(id = id, defaultChecked = defaultChecked)\r
            FieldLabel(for' = id + "-input",\r
                       class' = "font-normal") {\r
                name\r
            }\r
        }\r
    div(class' = "w-full max-w-md") {\r
        FieldGroup() {\r
            FieldSet() {\r
                FieldLegend(variant = FieldLegend.Variant.Label) {\r
                    "Show these items on the desktop"\r
                }\r
                FieldDescription() {\r
                    "Select the items you want to show on the desktop."\r
                }\r
                FieldGroup(class' = "gap-3") {\r
                    makeField "Hard Disks" "finder-pref-9k2-hard-disks-ljj" true\r
                    makeField "External Disks" "finder-pref-9k2-external-disks-1yg" false\r
                    makeField\r
                        "CDs, DVDs, and iPods"\r
                        "finder-pref-9l2-cds-dvds-fzt"\r
                        false\r
                    makeField\r
                        "Connected Servers"\r
                        "finder-pref-9k2-connected-servers-6l2"\r
                        false\r
                }\r
            }\r
            FieldSeparator()\r
            Field(orientation = Field.Orientation.Horizontal) {\r
                Checkbox(id = "finder-pref-9l2-sync-folders-nep",\r
                         defaultChecked = true)\r
                FieldContent() {\r
                    FieldLabel(for' = "finder-pref-9l2-sync-folders-nep-input") {\r
                        "Sync Desktop & Documents folders"\r
                    }\r
                    FieldDescription() {\r
                        "Your Desktop & Documents folders are being synced with iCloud Drive."\r
                        "You can access them from other devices."\r
                    }\r
                }\r
            }\r
            \r
        }\r
    }\r
[<SolidComponent>]\r
let inline RadioExample () =\r
    div(class' = "w-full max-w-md") {\r
        FieldSet() {\r
            FieldLabel() { "Subscription Plan" }\r
            FieldDescription() {\r
                "Yearly and lifetime plans offer significant savings."\r
            }\r
            RadioGroup(defaultValue = "monthly") {\r
                Field(orientation = Field.Orientation.Horizontal) {\r
                    RadioGroupItem(value = "monthly", id = "plan-monthly")\r
                    FieldLabel(for' = "plan-monthly-input",\r
                               class' = "font-normal") {\r
                        "Monthly ($9.99/month)"\r
                    }\r
                }\r
                Field(orientation = Field.Orientation.Horizontal) {\r
                    RadioGroupItem(value = "yearly", id = "plan-yearly")\r
                    FieldLabel(for' = "plan-yearly-input",\r
                               class' = "font-normal") {\r
                        "Yearly ($99.99/month)"\r
                    }\r
                }\r
                Field(orientation = Field.Orientation.Horizontal) {\r
                    RadioGroupItem(value = "lifetime", id = "plan-lifetime")\r
                    FieldLabel(for' = "plan-lifetime-input",\r
                               class' = "font-normal") {\r
                        "Lifetime ($299.99/month)"\r
                    }\r
                }\r
            }\r
        }\r
    }\r
[<SolidComponent>]\r
let inline SwitchExample () =\r
    div(class' = "w-full max-w-md") {\r
        Switch().as'(Field(orientation = Field.Orientation.Horizontal)) {\r
            FieldContent() {\r
                SwitchLabel().as'(FieldLabel()) { "Multi-factor authentication" }\r
                SwitchDescription().as'(FieldDescription()) {\r
                    "Enable multi-factor authentication. If you do not have a two factor \\\r
                    device, you can use a one-time code sent to your email."\r
                }\r
            }\r
            SwitchControl() {\r
                SwitchThumb()\r
            }\r
        }\r
    }\r
\r
[<SolidComponent>]\r
let inline ChoiceCard () =\r
    div(class' = "w-full max-w-md") {\r
        FieldGroup() {\r
            FieldSet() {\r
                FieldLabel(for' = "compute-environment-p8w") {\r
                    "Compute Environment"\r
                }\r
                FieldDescription() {\r
                    "Select the compute environment for your cluster."\r
                }\r
                RadioGroup(defaultValue = "kubernetes") {\r
                    FieldLabel(for' = "kubernetes-input") {\r
                        Field(orientation = Field.Orientation.Horizontal) {\r
                            FieldContent() {\r
                                FieldTitle() {\r
                                    "Kubernetes"\r
                                }\r
                                FieldDescription() {\r
                                    "Run GPU workloads on a K8s configured cluster."\r
                                }\r
                            }\r
                            RadioGroupItem(id = "kubernetes", value = "kubernetes")\r
                        }\r
                    }\r
                    FieldLabel(for' = "vm-input") {\r
                        Field(orientation = Field.Orientation.Horizontal) {\r
                            FieldContent() {\r
                                FieldTitle() { "Virtual Machine" }\r
                                FieldDescription() {\r
                                    "Access a VM configured cluster to run GPU workloads."\r
                                }\r
                            }\r
                            RadioGroupItem(id = "vm", value = "vm")\r
                        }\r
                    }\r
                }\r
            }\r
        }\r
    }\r
\r
[<PartasStorybook>]\r
let private meta = storybook<Field> {\r
    tags [| "!autodocs" |]\r
    render "InputExample" (fun _ -> InputExample())\r
    render "TextAreaExample" (fun _ -> TextAreaExample())\r
    render "SelectExample" (fun _ -> SelectExample())\r
    render "SliderExample" (fun _ -> SliderExample())\r
    render "FieldSetExample" (ignore >> FieldSetExample)\r
    render "CheckboxExample" (ignore >> CheckboxExample)\r
    render "RadioExample" (ignore >> RadioExample)\r
    render "SwitchExample" (ignore >> SwitchExample)\r
    render "ChoiceCardExample" (ignore >> ChoiceCard)\r
}\r
`;function o(r){const n={h2:"h2",p:"p",...l(),...r.components},{SourceCode:i}=n;return i||u("SourceCode"),e.jsxs(e.Fragment,{children:[e.jsx(a,{of:t}),`
`,e.jsx(d,{}),`
`,e.jsx(i,{code:m}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s,{layout:"centered"}),`
`,e.jsx(n.p,{children:"See the examples code:"}),`
`,e.jsx(i,{code:c}),`
`,e.jsx(p,{of:t})]})}function he(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}function u(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{he as default};

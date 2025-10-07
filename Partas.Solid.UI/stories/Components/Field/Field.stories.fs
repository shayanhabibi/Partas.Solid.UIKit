module Partas.Solid.UI.stories.Components.Field.Field_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<SolidComponent>]
let inline InputExample () =
    div(class' = "w-full max-w-md") {
        FieldSet() {
            FieldGroup() {
                Field() {
                    FieldLabel(for' = "username") { "Username" }
                    TextField() {
                        TextFieldInput(id="username", type' = TextField.Type.Text, placeholder = "Max Leiter")
                    }
                    FieldDescription() {
                        "Choose a unique username for your account."
                    }
                }
                Field() {
                    FieldLabel(for' = "password") { "Password" }
                    FieldDescription() {
                        "Must be at least 8 characters long."
                    }
                    TextField() {
                        TextFieldInput(id = "password",
                                       type' = TextField.Password,
                                       placeholder = "********")
                    }
                }
            }
        }
    }
[<SolidComponent>]
let inline TextAreaExample () =
    div(class' = "w-full max-w-md") {
        FieldSet() {
            FieldGroup() {
                Field() {
                    FieldLabel(for' = "feedback") { "Feedback" }
                    TextField() {
                        TextFieldTextArea(id = "feedback",
                                          placeholder = "You feedback helps us improve...",
                                          rows = 4)
                        FieldDescription() {
                            "Share your thoughts about our service"
                        }
                    }
                }
            }
        }
    }
open Fable.Core
open Fable.Core.JsInterop
[<SolidComponent>]
let inline SelectExample () =
    let items = [|
        "engineering", "Engineering"
        "design", "Design"
        "marketing", "Marketing"
        "sales", "Sales"
        "support", "Customer Support"
        "hr", "Human Resources"
        "finance", "Finance"
        "operations", "Operations"
    |]
    div(class' = "w-full max-w-md") {
        Field() {
            FieldLabel() { "Department" }
            Select<string * string>(options = items,
                                    placeholder = span() {"Choose department"}
                                    ,optionTextValue = snd,
                                    optionValue = (fst >> unbox),
                                    itemComponent = fun props ->
                                        SelectItem(item = props.item) { props.item.textValue }
                                        ) {
                SelectTrigger() {
                    SelectValue<string * string>() { yield fun state ->
                        span() { snd <| state.selectedOption() }
                    }
                }
                SelectContent()
            }
            FieldDescription() {
                "Select your department or area of work."
            }
        }
    }
[<SolidComponent>]
let inline SliderExample () =
    div(class' = "w-full max-w-md") {
        Field() {
            Slider(maxValue = 1000, minValue = 0, step = 10,
                   defaultValue = [|200;400|]).as'(Field()) {
            SliderLabel().as'(FieldTitle()) { "Price Range" }
            FieldDescription(class' = "flex") {
                "Set your budget range $"
                SliderValueLabel()
            }
            SliderControl(class' = "mt-2 w-full") {
                SliderTrack()
                SliderThumb()
                SliderThumb()
            }
            }
        }
    }

[<SolidComponent>]
let inline FieldSetExample() =
    div(class' = "w-full max-w-md space-y-6") {
        FieldSet() {
            FieldLegend() { "Address Information" }
            FieldDescription() {
                "We need your address to deliver your order"
            }
            FieldGroup() {
                TextField().as'(Field()) {
                    TextFieldLabel().as'(FieldLabel(for' = "street")) {
                        "Street Address"
                    }
                    TextFieldInput(id = "street",
                                   type' = TextField.Text,
                                   placeholder = "123 Main St")
                }
                div(class' = "grid grid-cols-2 gap-4") {
                    TextField().as'(Field()) {
                        TextFieldLabel(for' = "city").as'(FieldLabel()) {
                            "City"
                        }
                        TextFieldInput(id = "city",
                                       type' = TextField.Text,
                                       placeholder = "New York")
                    }
                    TextField().as'(Field()) {
                        TextFieldLabel(for' = "zip").as'(FieldLabel()) {
                            "Postal Code"
                        }
                        TextFieldInput(type' = TextField.Text, placeholder = "90502")
                    }
                }
            }
        }
    }
[<SolidComponent>]
let inline CheckboxExample () =
    let inline makeField (name: string) id defaultChecked =
        Field(orientation = Field.Orientation.Horizontal) {
            Checkbox(id = id, defaultChecked = defaultChecked)
            FieldLabel(for' = id + "-input",
                       class' = "font-normal") {
                name
            }
        }
    div(class' = "w-full max-w-md") {
        FieldGroup() {
            FieldSet() {
                FieldLegend(variant = FieldLegend.Variant.Label) {
                    "Show these items on the desktop"
                }
                FieldDescription() {
                    "Select the items you want to show on the desktop."
                }
                FieldGroup(class' = "gap-3") {
                    makeField "Hard Disks" "finder-pref-9k2-hard-disks-ljj" true
                    makeField "External Disks" "finder-pref-9k2-external-disks-1yg" false
                    makeField
                        "CDs, DVDs, and iPods"
                        "finder-pref-9l2-cds-dvds-fzt"
                        false
                    makeField
                        "Connected Servers"
                        "finder-pref-9k2-connected-servers-6l2"
                        false
                }
            }
            FieldSeparator()
            Field(orientation = Field.Orientation.Horizontal) {
                Checkbox(id = "finder-pref-9l2-sync-folders-nep",
                         defaultChecked = true)
                FieldContent() {
                    FieldLabel(for' = "finder-pref-9l2-sync-folders-nep-input") {
                        "Sync Desktop & Documents folders"
                    }
                    FieldDescription() {
                        "Your Desktop & Documents folders are being synced with iCloud Drive."
                        "You can access them from other devices."
                    }
                }
            }
            
        }
    }
[<SolidComponent>]
let inline RadioExample () =
    div(class' = "w-full max-w-md") {
        FieldSet() {
            FieldLabel() { "Subscription Plan" }
            FieldDescription() {
                "Yearly and lifetime plans offer significant savings."
            }
            RadioGroup(defaultValue = "monthly") {
                Field(orientation = Field.Orientation.Horizontal) {
                    RadioGroupItem(value = "monthly", id = "plan-monthly")
                    FieldLabel(for' = "plan-monthly-input",
                               class' = "font-normal") {
                        "Monthly ($9.99/month)"
                    }
                }
                Field(orientation = Field.Orientation.Horizontal) {
                    RadioGroupItem(value = "yearly", id = "plan-yearly")
                    FieldLabel(for' = "plan-yearly-input",
                               class' = "font-normal") {
                        "Yearly ($99.99/month)"
                    }
                }
                Field(orientation = Field.Orientation.Horizontal) {
                    RadioGroupItem(value = "lifetime", id = "plan-lifetime")
                    FieldLabel(for' = "plan-lifetime-input",
                               class' = "font-normal") {
                        "Lifetime ($299.99/month)"
                    }
                }
            }
        }
    }
[<SolidComponent>]
let inline SwitchExample () =
    div(class' = "w-full max-w-md") {
        Switch().as'(Field(orientation = Field.Orientation.Horizontal)) {
            FieldContent() {
                SwitchLabel().as'(FieldLabel()) { "Multi-factor authentication" }
                SwitchDescription().as'(FieldDescription()) {
                    "Enable multi-factor authentication. If you do not have a two factor \
                    device, you can use a one-time code sent to your email."
                }
            }
            SwitchControl() {
                SwitchThumb()
            }
        }
    }

[<SolidComponent>]
let inline ChoiceCard () =
    div(class' = "w-full max-w-md") {
        FieldGroup() {
            FieldSet() {
                FieldLabel(for' = "compute-environment-p8w") {
                    "Compute Environment"
                }
                FieldDescription() {
                    "Select the compute environment for your cluster."
                }
                RadioGroup(defaultValue = "kubernetes") {
                    FieldLabel(for' = "kubernetes-input") {
                        Field(orientation = Field.Orientation.Horizontal) {
                            FieldContent() {
                                FieldTitle() {
                                    "Kubernetes"
                                }
                                FieldDescription() {
                                    "Run GPU workloads on a K8s configured cluster."
                                }
                            }
                            RadioGroupItem(id = "kubernetes", value = "kubernetes")
                        }
                    }
                    FieldLabel(for' = "vm-input") {
                        Field(orientation = Field.Orientation.Horizontal) {
                            FieldContent() {
                                FieldTitle() { "Virtual Machine" }
                                FieldDescription() {
                                    "Access a VM configured cluster to run GPU workloads."
                                }
                            }
                            RadioGroupItem(id = "vm", value = "vm")
                        }
                    }
                }
            }
        }
    }

[<PartasStorybook>]
let private meta = storybook<Field> {
    tags [| "!autodocs" |]
    render "InputExample" (fun _ -> InputExample())
    render "TextAreaExample" (fun _ -> TextAreaExample())
    render "SelectExample" (fun _ -> SelectExample())
    render "SliderExample" (fun _ -> SliderExample())
    render "FieldSetExample" (ignore >> FieldSetExample)
    render "CheckboxExample" (ignore >> CheckboxExample)
    render "RadioExample" (ignore >> RadioExample)
    render "SwitchExample" (ignore >> SwitchExample)
    render "ChoiceCardExample" (ignore >> ChoiceCard)
}

module Partas.Solid.UI.stories.Components.Table_stories
open Partas.Solid
open Partas.Solid.UI
open Partas.Solid.Storybook
[<PartasStorybook>]
let private meta = storybook<Table> {
    render (fun props ->
        Table().spread props {
            TableCaption() { "A list of your recent invoices." }
            TableHeader() {
                TableRow() {
                    TableHead(class' = "w-[100px]") { "Invoice" }
                    TableHead() { "Status" }
                    TableHead() { "Method" }
                    TableHead(class' = "text-right") { "Amount" }
                }
            }
            TableBody() {
                TableRow() {
                    TableCell(class' = "font-medium") { "INV001" }
                    TableCell() { "Paid" }
                    TableCell() { "Credit Card" }
                    TableCell(class' = "text-right") { "$250.00" }
                }
            }
        }
        )
    args "Default" (fun props -> ())
}


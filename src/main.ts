import express from "express"
import { TaxCalculator } from "@/service/tax-calculator"
import { TaxController } from "@/controller/tax-controller"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const taxCalculator = new TaxCalculator()
const taxController = new TaxController(taxCalculator)

app.post("/tax/calculate", (req, res) => {
  taxController.calculateTax(req, res)
})

app.get("/tax/types", (req, res) => {
  taxController.getAvailableTaxTypes(req, res)
})

app.listen(() => {
  console.log(`Server is running on port 3000`)
})

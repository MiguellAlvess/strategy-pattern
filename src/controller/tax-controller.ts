import { Request, Response } from "express"
import { TaxCalculator } from "@/service/tax-calculator"
import { TaxType } from "@/factory/tax-strategy-factory"

export class TaxController {
  constructor(private readonly taxCalculator: TaxCalculator) {}

  calculateTax(req: Request, res: Response): void {
    try {
      const { type, amount } = req.body

      if (!type || !amount || typeof amount !== "number" || amount <= 0) {
        res.status(400).json({
          error:
            "Invalid request. 'type' and 'amount' are required. Amount must be a positive number.",
        })
        return
      }

      if (!["ICMS", "IPI", "ISS"].includes(type)) {
        res.status(400).json({
          error: "Invalid tax type. Must be one of: ICMS, IPI, ISS",
        })
        return
      }

      const taxInfo = this.taxCalculator.getTaxInfo(type as TaxType, amount)

      res.json(taxInfo)
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : "Internal server error",
      })
    }
  }

  getAvailableTaxTypes(req: Request, res: Response): void {
    try {
      const taxTypes = this.taxCalculator.getAvailableTaxTypes()
      res.json({ availableTaxTypes: taxTypes })
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : "Internal server error",
      })
    }
  }
}

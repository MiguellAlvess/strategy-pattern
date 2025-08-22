import { TaxStrategyFactory, TaxType } from "@/factory/tax-strategy-factory"

export class TaxCalculator {
  calculateTax(type: TaxType, amount: number): number {
    if (amount <= 0) {
      throw new Error("Amount must be greater than zero")
    }

    const strategy = TaxStrategyFactory.createStrategy(type)
    return strategy.calculate(amount)
  }

  getTaxInfo(
    type: TaxType,
    amount: number,
  ): {
    taxType: string
    originalAmount: number
    taxAmount: number
    totalAmount: number
  } {
    const strategy = TaxStrategyFactory.createStrategy(type)
    const taxAmount = strategy.calculate(amount)

    return {
      taxType: strategy.getTaxName(),
      originalAmount: amount,
      taxAmount: taxAmount,
      totalAmount: amount + taxAmount,
    }
  }

  getAvailableTaxTypes(): TaxType[] {
    return TaxStrategyFactory.getAvailableTaxTypes()
  }
}

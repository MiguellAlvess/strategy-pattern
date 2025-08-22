import { TaxTypeInterface } from "@/contracts/tax-type-interface"

export class IPI implements TaxTypeInterface {
  calculate(amount: number): number {
    return (amount * 0.5) / 100
  }

  getTaxName(): string {
    return "IPI"
  }
}

import { TaxTypeInterface } from "@/contracts/tax-type-interface"

export class ISS implements TaxTypeInterface {
  calculate(amount: number): number {
    return (amount * 0.11) / 100
  }

  getTaxName(): string {
    return "ISS"
  }
}

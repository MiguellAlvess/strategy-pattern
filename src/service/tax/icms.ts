import { TaxTypeInterface } from "@/contracts/tax-type-interface"

export class ICMS implements TaxTypeInterface {
  calculate(amount: number): number {
    return amount * 0.17 // ICMS tax rate of 17%
  }

  getTaxName(): string {
    return "ICMS"
  }
}

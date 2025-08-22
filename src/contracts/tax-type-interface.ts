export interface TaxTypeInterface {
  calculate(amount: number): number
  getTaxName(): string
}

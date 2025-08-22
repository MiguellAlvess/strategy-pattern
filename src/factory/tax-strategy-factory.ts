import { TaxTypeInterface } from "@/contracts/tax-type-interface"
import { ICMS } from "@/service/tax/icms"
import { IPI } from "@/service/tax/ipi"
import { ISS } from "@/service/tax/iss"

export type TaxType = "ICMS" | "IPI" | "ISS"

export class TaxStrategyFactory {
  static createStrategy(type: TaxType): TaxTypeInterface {
    if (type === "ICMS") {
      return new ICMS()
    }

    if (type === "IPI") {
      return new IPI()
    }

    if (type === "ISS") {
      return new ISS()
    }

    throw new Error(`Invalid tax type: ${type}`)
  }

  static getAvailableTaxTypes(): TaxType[] {
    return ["ICMS", "IPI", "ISS"]
  }
}

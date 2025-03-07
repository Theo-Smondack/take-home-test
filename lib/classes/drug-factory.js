import { Drug } from "./drug";
import { HerbalTea, MagicPill } from "./drugs";

export class DrugFactory {
  static createDrug(name, expiresIn, benefit) {
    switch (name) {
      case "Herbal Tea":
        return new HerbalTea(expiresIn, benefit);
      case "Magic Pill":
        return new MagicPill(expiresIn, benefit);
      default:
        return new Drug(name, expiresIn, benefit);
    }
  }
}

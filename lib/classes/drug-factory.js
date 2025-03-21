import { Drug } from "./drug";
import { Dafalgan, Fervex, HerbalTea, MagicPill } from "./drugs";

export class DrugFactory {
  static createDrug(name, expiresIn, benefit) {
    switch (name.toLowerCase()) {
      case "herbal tea":
        return new HerbalTea(expiresIn, benefit);
      case "magic pill":
        return new MagicPill(expiresIn, benefit);
      case "fervex":
        return new Fervex(expiresIn, benefit);
      case "dafalgan":
        return new Dafalgan(expiresIn, benefit);
      default:
        return new Drug(name, expiresIn, benefit);
    }
  }
}

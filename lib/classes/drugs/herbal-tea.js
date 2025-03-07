import { Drug } from "../drug";

export class HerbalTea extends Drug {
  constructor(expiresIn, benefit) {
    super("Herbal Tea", expiresIn, benefit);
  }

  updateBenefit() {
    if (this.expiresIn < 0) {
      this.benefit += 2;
    } else {
      this.benefit += 1;
    }
  }
}

import { Drug } from "../drug";

export class Fervex extends Drug {
  constructor(expiresIn, benefit) {
    super("Fervex", expiresIn, benefit);
  }

  updateBenefit() {
    if (this.expiresIn <= 0) {
      this.benefit = 0;
      return;
    }

    if (this.expiresIn <= 5) {
      this.benefit += 3;
    } else if (this.expiresIn <= 10) {
      this.benefit += 2;
    } else {
      this.benefit += 1;
    }
  }
}

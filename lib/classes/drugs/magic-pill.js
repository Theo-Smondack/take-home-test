import { Drug } from "../drug";

export class MagicPill extends Drug {
  constructor(expiresIn, benefit) {
    super("Magic Pill", expiresIn, benefit);
  }
  updateBenefit() {}
  updateExpiresIn() {}
}

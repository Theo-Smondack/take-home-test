export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this._benefit = this.validateBenefit(benefit);
  }

  validateBenefit(value) {
    return Math.min(50, Math.max(0, value));
  }

  set benefit(value) {
    this._benefit = this.validateBenefit(value);
  }

  get benefit() {
    return this._benefit;
  }

  updateValues() {
    this.updateBenefit();
    this.updateExpiresIn();
  }

  updateBenefit() {
    if (this.expiresIn < 0) {
      this.benefit -= 2;
    } else {
      this.benefit -= 1;
    }
  }

  updateExpiresIn() {
    this.expiresIn -= 1;
  }
}

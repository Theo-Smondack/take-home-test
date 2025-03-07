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

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateValues();
      // if (
      //   this.drugs[i].name != "Herbal Tea" &&
      //   this.drugs[i].name != "Fervex"
      // ) {
      //   if (this.drugs[i].benefit > 0) {
      //     if (this.drugs[i].name != "Magic Pill") {
      //       this.drugs[i].benefit = this.drugs[i].benefit - 1;
      //     }
      //   }
      // } else {
      //   if (this.drugs[i].benefit < 50) {
      //     this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //     if (this.drugs[i].name == "Fervex") {
      //       if (this.drugs[i].expiresIn < 11) {
      //         if (this.drugs[i].benefit < 50) {
      //           this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //         }
      //       }
      //       if (this.drugs[i].expiresIn < 6) {
      //         if (this.drugs[i].benefit < 50) {
      //           this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //         }
      //       }
      //     }
      //   }
      // }
      // if (this.drugs[i].name != "Magic Pill") {
      //   this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      // }
      // if (this.drugs[i].expiresIn < 0) {
      //   if (this.drugs[i].name != "Herbal Tea") {
      //     if (this.drugs[i].name != "Fervex") {
      //       if (this.drugs[i].benefit > 0) {
      //         if (this.drugs[i].name != "Magic Pill") {
      //           this.drugs[i].benefit = this.drugs[i].benefit - 1;
      //         }
      //       }
      //     } else {
      //       this.drugs[i].benefit =
      //         this.drugs[i].benefit - this.drugs[i].benefit;
      //     }
      //   } else {
      //     if (this.drugs[i].benefit < 50) {
      //       this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //     }
      //   }
      // }
    }

    return this.drugs;
  }
}

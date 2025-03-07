import { Drug, HerbalTea, Pharmacy } from "../pharmacy";

const drugs = [new Drug("test", 2, 3), new HerbalTea(2, 3)];

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy(drugs).updateBenefitValue()).toEqual([
      new Drug("test", 1, 2),
      new HerbalTea(1, 4),
    ]);
  });
});

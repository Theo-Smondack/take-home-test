import { Drug, DrugFactory, HerbalTea, Pharmacy } from "../pharmacy";

const drugs = [
  DrugFactory.createDrug("test", 2, 3),
  DrugFactory.createDrug("Herbal Tea", 2, 3),
];

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy(drugs).updateBenefitValue()).toEqual([
      new Drug("test", 1, 2),
      new HerbalTea(1, 4),
    ]);
  });
});

import { Drug } from "./pharmacy";

const drug = new Drug("test", 2, 3);

describe("Drug test suite", () => {
  it("should be defined", () => {
    expect(drug).toBeDefined();
  });

  it("should decrease benefit by 1", () => {
    drug.updateBenefit();
    expect(drug.benefit).toEqual(2);
  });

  it("should decrease expiresIn by 1", () => {
    drug.updateExpiresIn();
    expect(drug.expiresIn).toEqual(1);
  });
});

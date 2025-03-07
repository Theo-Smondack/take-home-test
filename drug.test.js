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

  it("should never have a negative benefit", () => {
    drug.benefit = 0;
    drug.updateBenefit();
    expect(drug.benefit).toEqual(0);
  });

  it("should never have a benefit above 50", () => {
    drug.benefit = 500;
    expect(drug.benefit).toEqual(50);
  });
});

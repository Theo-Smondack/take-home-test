import { Drug } from "../lib/classes";

const drug = new Drug("test", 2, 20);

describe("Drug test suite", () => {
  beforeEach(() => {
    drug.expiresIn = 2;
    drug.benefit = 20;
  });

  it("should be defined", () => {
    expect(drug).toBeDefined();
  });

  it("should decrease benefit by 1", () => {
    drug.updateBenefit();
    expect(drug.benefit).toEqual(19);
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

  it("should decrease benefit and expiresIn", () => {
    drug.updateValues();
    expect(drug.benefit).toEqual(19);
    expect(drug.expiresIn).toEqual(1);
  });

  it("should decrease benefit twice as fast when expiresIn is negative", () => {
    drug.expiresIn = -1;
    drug.benefit = 20;
    drug.updateValues();
    expect(drug.benefit).toEqual(18);
  });
});

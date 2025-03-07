import { HerbalTea } from "../pharmacy";

const herbalTea = new HerbalTea(2, 20);

describe("HerbalTea", () => {
  beforeEach(() => {
    herbalTea.expiresIn = 2;
    herbalTea.benefit = 20;
  });

  it("should have name Herbal Tea", () => {
    expect(herbalTea.name).toEqual("Herbal Tea");
  });

  it("should increase benefit the older it gets", () => {
    herbalTea.updateValues();
    expect(herbalTea.benefit).toEqual(21);
  });

  it("should increase benefit as twice fast after the expiration date ", () => {
    herbalTea.expiresIn = -1;
    herbalTea.updateValues();
    expect(herbalTea.benefit).toEqual(22);
  });
});

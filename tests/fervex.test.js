import { Fervex } from "../lib/classes/drugs";

const fervex = new Fervex(15, 20);

describe("Fervex", () => {
  beforeEach(() => {
    fervex.expiresIn = 15;
    fervex.benefit = 20;
  });

  it("should increase benefit by 1 when expiresIn is more than 10 ", () => {
    fervex.updateValues();
    expect(fervex.benefit).toEqual(21);
  });
  it("should increase benefit by 2 when expiresIn is less than or equal 10 ", () => {
    fervex.expiresIn = 10;
    fervex.updateValues();
    expect(fervex.benefit).toEqual(22);
  });
  it("should increase benefit by 3 when expiresIn is less than or equal to 5 ", () => {
    fervex.expiresIn = 5;
    fervex.updateValues();
    expect(fervex.benefit).toEqual(23);
  });
  it("should benefit drop to 0 after the expiration date ", () => {
    fervex.expiresIn = 0;
    fervex.updateValues();
    expect(fervex.benefit).toEqual(0);
  });
});

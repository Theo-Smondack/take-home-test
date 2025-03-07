import { MagicPill } from "../lib/classes/drugs";

const magicPill = new MagicPill(15, 40);

describe("Magic Pill", () => {
  beforeEach(() => {
    magicPill.updateValues();
  });
  it("should never expire", () => {
    expect(magicPill.expiresIn).toEqual(15);
  });

  it("should never decrease in benefit", () => {
    expect(magicPill.benefit).toEqual(40);
  });
});

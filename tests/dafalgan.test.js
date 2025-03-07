import { Dafalgan } from "../lib/classes/drugs";

const dafalgan = new Dafalgan(10, 20);

describe("Dafalgan", () => {
  it("should decrease in benefit twice as fast as normal drugs.", () => {
    dafalgan.updateValues();
    expect(dafalgan.benefit).toEqual(18);
  });
});

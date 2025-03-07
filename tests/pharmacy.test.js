import { Fervex, HerbalTea, MagicPill } from "../lib/classes/drugs";
import { Drug, DrugFactory, Pharmacy } from "../lib/classes";

const drugs = [
  DrugFactory.createDrug("test", 2, 3),
  DrugFactory.createDrug("Herbal Tea", 2, 3),
  DrugFactory.createDrug("Magic Pill", 2, 3),
  DrugFactory.createDrug("fervex", 15, 20),
];

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy(drugs).updateBenefitValue()).toEqual([
      new Drug("test", 1, 2),
      new HerbalTea(1, 4),
      new MagicPill(2, 3),
      new Fervex(14, 21),
    ]);
  });
});

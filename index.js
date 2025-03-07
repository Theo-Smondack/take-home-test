import fs from "fs";
import { DrugFactory, Pharmacy } from "./lib/classes";

const drugs = [
  DrugFactory.createDrug("Doliprane", 20, 30),
  DrugFactory.createDrug("Herbal Tea", 10, 5),
  DrugFactory.createDrug("Magic Pill", 34, 3),
  // new Drug("Fervex", 12, 35),
  // new Drug("Magic Pill", 15, 40),
];
const pharmacy = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
}

/* eslint-disable no-console */
fs.writeFile(
  "output.json",
  JSON.stringify({ result: log }, null, 2).concat("\n"),
  (err) => {
    if (err) {
      console.log("error");
    } else {
      console.log("success");
    }
  },
);

/* eslint-enable no-console */

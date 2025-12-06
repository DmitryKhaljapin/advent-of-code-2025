const input = require("./input");
const parser = require("./parser");

const banks = parser(input);

let totalPower = 0;

let fistBattary = "0";
let fistBattaryPossition;

let secondBattary = "0";

banks.forEach((bank) => {
  for (let i = 0; i < bank.length - 1; ++i) {
    if (+bank[i] > +fistBattary) {
      fistBattary = bank[i];
      fistBattaryPossition = i;
    }
  }

  for (let i = fistBattaryPossition + 1; i < bank.length; ++i) {
    if (+bank[i] > +secondBattary) secondBattary = bank[i];
  }
  console.log(fistBattary, secondBattary);
  totalPower += +(fistBattary + secondBattary);

  fistBattary = "0";
  secondBattary = "0";
});

console.log(totalPower);

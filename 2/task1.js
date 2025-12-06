const input = require("./input");
const parser = require("./parser");

const list = parser(input);

let totalOfIds = 0;

list.forEach(([start, end]) => {
  for (let i = +start; i <= +end; ++i) {
    const number = String(i);

    const numberLength = number.length;

    if (numberLength % 2 !== 0) continue;

    const mid = numberLength / 2;

    if (number.substring(0, mid) === number.substring(mid))
      totalOfIds += +number;
  }
});

console.log(totalOfIds);

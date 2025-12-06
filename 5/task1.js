const input = require("./input");
const parser = require("./parser");

let count = 0;

const [ranges, ingridients] = parser(input);

ingridients.forEach((ingridient) => {
  for ([start, end] of ranges) {
    if (ingridient >= start && ingridient <= end) {
      ++count;
      break;
    }
  }
});

console.log(count);

const input = require("./testInput");
const parser = require("./parser");

let count = 0;

const [ranges] = parser(input);

ranges.forEach(([start, end]) => {
  count += end - start + 1;
});

console.log(count);

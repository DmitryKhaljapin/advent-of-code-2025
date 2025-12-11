const input = require("./input");
const parser = require("./parser");

const items = parser(input);

let total = 0;

// prettier-ignore
const areas = [
  [-1, -1], [-1, 0,], [-1, 1],
  [0, -1],         [0, 1],
  [1, -1], [1, 0], [1, 1]
];

for (let i = 0; i < items.length; ++i) {
  for (let j = 0; j < items[i].length; ++j) {
    const place = items[i][j];
    if (place === ".") continue;

    let rollsAround = 0;

    areas.forEach(([di, dj]) => {
      const adjacentPositions = { i: i + di, j: j + dj };

      if (
        adjacentPositions.i < 0 ||
        adjacentPositions.j < 0 ||
        adjacentPositions.i >= items.length ||
        adjacentPositions.j >= items[i].length
      )
        return;

      const adjacentPlace = items[adjacentPositions.i][adjacentPositions.j];

      if (adjacentPlace === "@") ++rollsAround;
    });
    if (rollsAround < 4) {
      ++total;
      items[i][j] = ".";
      i = 0;
      j = 0;
    }
  }
}

console.log(total);

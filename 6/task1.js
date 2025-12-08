const input = require("./input");
const parser = require("./parser");

const items = parser(input);

console.log(items);

function rotateMatrix(matrix) {
  const rotatedMatrix = [];

  for (let i = 0; i < matrix[0].length; ++i) {
    rotatedMatrix.push([]);
  }

  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      rotatedMatrix[j][i] = matrix[i][j];
    }
  }
  return rotatedMatrix;
}

let total = 0;

const horizontalItems = rotateMatrix(items);

horizontalItems.forEach((row) => {
  let tmpTotal;
  const opt = row[row.length - 1];

  switch (opt) {
    case "+": {
      tmpTotal = 0;
      for (let i = 0; i < row.length - 1; ++i) {
        tmpTotal += +row[i];
      }
      break;
    }
    case "*": {
      tmpTotal = 1;
      for (let i = 0; i < row.length - 1; ++i) {
        tmpTotal *= +row[i];
      }
      break;
    }
  }
  total += tmpTotal;
});

console.log(total);

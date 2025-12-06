const Dial = require("./Dial");
const input = require("./input");
const parser = require("./parser");

const START_POSITION = 50;
const RANGE = 100;

const list = parser(input);

const rotations = list.map((rotation) => {
  const [_, direction, distance] = rotation.match(/(\w)(\d+)/);

  return {
    direction,
    distance: +distance,
  };
});

const dial = new Dial(RANGE, START_POSITION);

let zeroCount = 0;

rotations.forEach(({ direction, distance }) => {
  let zeroCrossedCount = 0;

  if (direction === "R") {
    zeroCrossedCount = Math.trunc((dial.currentPosition + distance) / RANGE);

    dial.rotateRight(distance);
  }
  if (direction === "L") {
    zeroCrossedCount = Math.trunc(distance / RANGE);

    const tmpPosition = dial.currentPosition - distance;

    if (tmpPosition <= 0 && dial.currentPosition !== 0) {
      zeroCrossedCount++;
    }

    dial.rotateLeft(distance);
  }

  zeroCount += zeroCrossedCount;
});

console.log(zeroCount);

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
  if (direction === "R") dial.rotateRight(distance);
  if (direction === "L") dial.rotateLeft(distance);
  if (dial.currentPosition === 0) ++zeroCount;
});

console.log(zeroCount);

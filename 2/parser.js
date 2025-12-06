const parser = (input) => {
  const inputedPairsArray = input.split(",");

  const range = inputedPairsArray.map((item) => item.split("-"));

  return range;
};

module.exports = parser;

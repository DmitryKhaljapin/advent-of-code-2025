const parser = (input) => {
  const [rangesString, ingridientsString] = input.split("\n\n");

  const range = rangesString
    .split("\n")
    .map((item) => item.split("-").map((range) => +range));

  const ingridients = ingridientsString
    .split("\n")
    .map((ingridient) => +ingridient);

  return [range, ingridients];
};

module.exports = parser;

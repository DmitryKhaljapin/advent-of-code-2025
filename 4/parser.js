const parser = (input) => {
  const rows = input.split("\n");

  const items = rows.map((item) => item.split(""));

  return items;
};

module.exports = parser;

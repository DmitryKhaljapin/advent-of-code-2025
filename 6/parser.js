const parser = (input) => {
  const rows = input.split("\n");

  const items = rows.map((row) => row.split(" ").filter(Boolean));

  return items;
};

module.exports = parser;

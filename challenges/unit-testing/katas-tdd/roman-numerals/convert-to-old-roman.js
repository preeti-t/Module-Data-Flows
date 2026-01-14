function convertToOldRoman(n) {
  const numerals = [
    { value: 1000, symbol: "M" },
    { value: 500, symbol: "D" },
    { value: 100, symbol: "C" },
    { value: 50, symbol: "L" },
    { value: 10, symbol: "X" },
    { value: 5, symbol: "V" },
    { value: 1, symbol: "I" }
  ];

  let result = "";

  for (const numeral of numerals) {
    const count = Math.floor(n / numeral.value);
    result += numeral.symbol.repeat(count);
    n = n % numeral.value;
  }

  return result;
}

module.exports = convertToOldRoman;

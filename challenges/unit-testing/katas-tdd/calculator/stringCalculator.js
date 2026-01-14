function add(numbers) {
  if (!numbers) return 0;

  const values = numbers.split(',').map(Number);

  const negatives = values.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(',')}`);
  }

  return values
    .filter(n => n <= 1000)
    .reduce((sum, n) => sum + n, 0);
}

module.exports = add;

const add = require('./stringCalculator');

describe('String Calculator Kata', () => {

  // Step 1: simplest cases
  test('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });

  test('returns the number when only one number is provided', () => {
    expect(add('5')).toBe(5);
  });

  test('returns the sum of two numbers', () => {
    expect(add('3,6')).toBe(9);
  });

  // Step 2: unknown amount of numbers
  test('handles an unknown amount of numbers', () => {
    expect(add('1,2,3,4,5')).toBe(15);
  });

  // Step 3: ignore numbers bigger than 1000
  test('ignores numbers greater than 1000', () => {
    expect(add('2,1001')).toBe(2);
    expect(add('1,1000,1001')).toBe(1001);
  });

  // Step 4: negative numbers
  test('throws error when a negative number is provided', () => {
    expect(() => add('1,4,-1')).toThrow('negatives not allowed: -1');
  });

  test('throws error listing all negative numbers', () => {
    expect(() => add('1,-2,-3,4')).toThrow(
      'negatives not allowed: -2,-3'
    );
  });

});

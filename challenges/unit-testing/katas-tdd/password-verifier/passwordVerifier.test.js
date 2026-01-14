const verify = require('./passwordVerifier');

describe('Password Verifier', () => {

  // Step 1
  test('rejects passwords shorter than 8 characters', () => {
    expect(verify('abc123')).toBe('Password rejected');
  });

  test('accepts passwords with at least 8 characters (initial rule)', () => {
    expect(verify('abcdEF12')).toBe('Password accepted');
  });

  // Step 2
  test('rejects null password', () => {
    expect(verify(null)).toBe('Password rejected');
  });

  // Step 3
  test('rejects password without uppercase letter', () => {
    expect(verify('abcdefg1')).toBe('Password rejected');
  });

  // Step 4
  test('rejects password without a number', () => {
    expect(verify('Abcdefgh')).toBe('Password rejected');
  });

  // Happy path
  test('accepts password with length, uppercase letter and number', () => {
    expect(verify('Abcdefg1')).toBe('Password accepted');
  });

});

let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  expect(convertToNewRoman(1)).toBe("I");
});

test("returns IV if passed 4 as an argument", function () {
  expect(convertToNewRoman(4)).toBe("IV");
});

test("returns IX if passed 9 as an argument", function () {
  expect(convertToNewRoman(9)).toBe("IX");
});

test("returns XIV if passed 14 as an argument", function () {
  expect(convertToNewRoman(14)).toBe("XIV");
});

test("returns XLIV if passed 44 as an argument", function () {
  expect(convertToNewRoman(44)).toBe("XLIV");
});

test("returns XCIX if passed 99 as an argument", function () {
  expect(convertToNewRoman(99)).toBe("XCIX");
});

test("returns CD if passed 400 as an argument", function () {
  expect(convertToNewRoman(400)).toBe("CD");
});

test("returns CMXLIV if passed 944 as an argument", function () {
  expect(convertToNewRoman(944)).toBe("CMXLIV");
});

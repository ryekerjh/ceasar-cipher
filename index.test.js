const cipher = require("./");

test('lowercase string to be shifted correctly with a negative number', () => {
  const result = cipher("mop", -8);
  expect(result).toBe("egh");
});

test('lowercase string to be shifted correctly with a positive number', () => {
  const result = cipher("mop", 9);
  expect(result).toBe("vxy");
});

test('uppercase string to be shifted correctly with a positive number', () => {
  const result = cipher("ABC", 4);
  expect(result).toBe("EFG");
});

test('uppercase string to be shifted correctly with a negative number', () => {
  const result = cipher("XYZ", -4);
  expect(result).toBe("TUV");
});

test('invalid first argument (string) to throw', () => {
  expect(() => {
    cipher({}, -100);
  }).toThrow();
});

test('invalid second argument (number) to throw', () => {
  expect(() => {
    cipher("cheese is good", undefined);
  }).toThrow();
});
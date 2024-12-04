const caesarCipher = require('./caesarcipher');

test('shifts letters by desired factor', () => {
  expect(caesarCipher("xyz", 3)).toEqual("abc");
});

test('case preservation', () => {
  expect(caesarCipher("HeLLo", 3)).toEqual("KhOOr");
});

test('it does not convert special characters', () => {
  expect(caesarCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!");
});
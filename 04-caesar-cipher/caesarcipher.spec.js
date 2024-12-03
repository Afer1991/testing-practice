const caesarCipher = require('./caesarcipher');

test('shifts letters by desired factor', () => {
  expect(caesarCipher("xyz", 3)).toEqual("abc");
});
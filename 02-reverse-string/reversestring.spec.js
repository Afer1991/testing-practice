const reverseString = require('./reversestring');

test('reverses string', () => {
  expect(reverseString("hello")).toEqual('olleh');
});

test('it does not allow numbers', () => {
  expect(reverseString(301)).toBeNull();
});

test('it reverses strings containing only numbers', () => {
  expect(reverseString("10129")).toEqual('92101');
});

test('works with strings containing more than 1 word', () => {
  expect(reverseString("hi, how are you?")).toEqual('?uoy era woh ,ih');
});
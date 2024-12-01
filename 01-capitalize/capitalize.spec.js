const capitalize = require('./capitalize');

test('capitalizes first character', () => {
  expect(capitalize("hello")).toEqual('Hello');
});

test('it does not allow numbers', () => {
  expect(capitalize(1012)).toBeNull();
});
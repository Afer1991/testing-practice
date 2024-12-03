const calculator = require('./calculator');

test('adds numbers', () => {
  expect(calculator.add(2,3)).toEqual(5);
});

test('subtracts numbers', () => {
  expect(calculator.subtract(4,1)).toEqual(3);
});

test('divides numbers', () => {
  expect(calculator.divide(8,2)).toEqual(4);
});

test('multiplies numbers', () => {
  expect(calculator.multiply(5,3)).toEqual(15);
});
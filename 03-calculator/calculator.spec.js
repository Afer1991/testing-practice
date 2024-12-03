import Calculator from "./calculator.js";

test('adds numbers', () => {
  const calc = new Calculator();
  expect(calc.add(2,3)).toEqual(5);
});
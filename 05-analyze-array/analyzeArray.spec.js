const analyzeArray = require('./analyzeArray');

test('calculates average of array elements', () => {
  const object = analyzeArray([1,8,3,4,2,6]);
  expect(object.average).toEqual(4);
});

test('returns lowest number in array', () => {
  const object = analyzeArray([1,8,3,4,2,6]);
  expect(object.min).toEqual(1);
});

test('returns highest number in array', () => {
  const object = analyzeArray([1,8,3,4,2,6]);
  expect(object.max).toEqual(8);
});  

test('returns array length', () => {
  const object = analyzeArray([1,8,3,4,2,6]);
  expect(object.length).toEqual(6);
});
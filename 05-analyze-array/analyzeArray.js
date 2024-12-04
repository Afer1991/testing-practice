function analyzeArray(arr) {
  const length = arr.length;

  const average = arr.reduce(
    (acc, curr) => acc + curr
  ) / length;
  
  const sortedArr = arr.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    };
  });

  const min = sortedArr[0];
  const max = sortedArr[length - 1];

  return { average, min, max, length };
};

module.exports = analyzeArray;


function reverseString(str) {
  if (typeof str === "string") {
    let rvsdStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      rvsdStr += str[i]; 
    };
    return rvsdStr;
  } else {
    return null;
  };
};

module.exports = reverseString;
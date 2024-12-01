function capitalize(str) {
  if (typeof str === "string") {
    let capStr = str[0].toUpperCase() + str.slice(1);
    return capStr;
  } else {
    return null;
  };
};

console.log(capitalize("hola"));
  
module.exports = capitalize;
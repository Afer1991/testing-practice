function caesarCipher(str, n) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];

  let cipheredAlphabet = new Array(26);

  for (let i = 0; i < alphabet.length; i++) {
    cipheredAlphabet[i] = alphabet[n];
    n++;
    if (n > 25) {
      n = 0;
    };
  };

  let cipheredStr = "";

  for (let i = 0; i < str.length; i++) {
    let cipheredLetter = str[i];
    for (let j = 0; j < alphabet.length; j++) {
      if (cipheredLetter.toUpperCase() === alphabet[j]) {
        cipheredLetter = cipheredAlphabet[j];
      };
    };
    cipheredStr += cipheredLetter;
  };

  return cipheredStr;
};

module.exports = caesarCipher;
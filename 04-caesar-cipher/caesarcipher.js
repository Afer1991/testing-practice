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

  const generateCipheredAlphabet = (alph, factor) => {
    let cipheredAlphabet = new Array(26);

    for (let i = 0; i < alph.length; i++) {
      cipheredAlphabet[i] = alphabet[factor];
      factor++;
      if (factor > 25) {
        factor = 0;
      };
    };
    return cipheredAlphabet;
  };

  const checkForUpperCase = (letter) => {
    if (letter === letter.toUpperCase()) {
      return true;
    } else {
      return false;
    }
  };

  const cipherLetter = (a, c, l) => {
    for (let i = 0; i < a.length; i++) {
      if (l.toUpperCase() === a[i]) {
        return c[i];
      };
    };
    return l;
  };

  const cipherStr = (strg, alph, num) => {
    let cipheredStr = "";
    const newAlph = generateCipheredAlphabet(alph, num);

    for (let i = 0; i < strg.length; i++) {
      let letterToCipher;
      if (checkForUpperCase(strg[i])) {
        letterToCipher = cipherLetter(alphabet, newAlph, strg[i]);
      } else {
        letterToCipher = cipherLetter(alphabet, newAlph, strg[i]).toLowerCase();
      };
      cipheredStr += letterToCipher;
    };
    return cipheredStr;
  };
  return cipherStr(str, alphabet, n);
};

module.exports = caesarCipher;


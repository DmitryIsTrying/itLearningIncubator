function encrypt(text, n) {
  if (text === null) return null;
  let resulsEven = [];
  let resultOdd = [];
  for (let i = 0; i < n; i++) {
    text.split("").map((el, i) => {
      i % 2 === 0 ? resulsEven.push(el) : resultOdd.push(el);
    });
    text = [...resultOdd, ...resulsEven].join("");
    resulsEven = [];
    resultOdd = [];
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (encryptedText === null) return null;
  for (let index = 0; index < n; index++) {
    const evenStr = encryptedText.slice(Math.floor(encryptedText.length / 2));
    const oddStr = encryptedText.slice(0, Math.floor(encryptedText.length / 2));

    const result = [];
    for (let i = 0; i < Math.ceil(encryptedText.length / 2); i++) {
      debugger;
      const deb1 = evenStr[i];
      const deb2 = oddStr[i];

      result.push(evenStr[i]); // 9
      result.push(oddStr[i]); // 10
    }
    encryptedText = result.join("");
  }
  return encryptedText;
}

// console.log(encrypt("This is a test!", 1));

console.log(decrypt("e-rMisybKsTua-haaot", 1));
console.log("e-rMisybKsTua-haaot".length);

const array = [
  undefined,
  2,
  0,
  null,
  "hello",
  undefined,
  5,
  undefined,
  6,
  undefined,
];
console.log(array.join(""));

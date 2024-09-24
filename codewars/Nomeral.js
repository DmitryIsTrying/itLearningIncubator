function solution(number) {
  const checkArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const rumArr = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];
  let resultArr = [];
  let i = checkArr.length;
  while (number >= 0) {
    i--;
    while (number >= 0) {
      number -= checkArr[i];
      if (number >= 0) {
        resultArr.push(rumArr[i]);
      }
    }
    if (number < 0) {
      number += checkArr[i];
    }
  }
  return resultArr.join("");
}

console.log(solution(1990));

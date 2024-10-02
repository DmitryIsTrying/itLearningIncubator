function sumDigPow(a, b) {
  const result = [];
  for (; a < b; a++) {
    const newArr = a.toString().split("");
    const newSum = newArr.reduce((acc, e, i) => {
      acc += e ** (i + 1);
      return acc;
    }, 0);

    newSum === a && result.push(a);
  }
  return result;
}

console.log(sumDigPow(1, 100));

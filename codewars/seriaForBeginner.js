function getSum(a, b) {
  if (a > b) [a, b] = [b, a];

  let result = 0;

  for (let i = a; i <= b; i++) {
    result += i;
  }
  return result;
}

console.log(getSum(-3, 1));

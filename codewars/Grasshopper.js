var summation = function (num) {
  if (num !== 1) {
    num += summation(num - 1);
  }
  return num;
};

console.log(summation(8));

// return the missing number!
function findNumber(array) {
  const sumArr = array.reduce((acc, num) => acc + num, 0)
  const n = array.length + 1
  return (n * (n + 1)) / 2 - sumArr
}
console.log(findNumber([1, 2, 3]))

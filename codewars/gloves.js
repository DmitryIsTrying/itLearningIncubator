function numberOfPairs(gloves) {
  const pairs = gloves.reduce((acc, el) => {
    if (acc[el]) {
      acc[el] += 1
    } else {
      acc[el] = 1
    }
    return acc
  }, {})
  return Object.values(pairs).reduce((acc, num) => {
    return acc + Math.floor(num / 2)
  }, 0)
}
console.log(numberOfPairs(['red', 'green', 'red', 'blue', 'blue']))

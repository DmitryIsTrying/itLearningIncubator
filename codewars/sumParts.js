function partsSums(ls) {
  if (!ls.length) return [0]
  const resultArr = []
  resultArr.push(ls.reduce((acc, el) => (acc += el)))

  ls.forEach((_, i) => {
    resultArr.push(resultArr[i] - ls[i])
  })
  return resultArr
}
const newArr = Array(5).fill(
  ((_, i) => {
    return i ** 2
  })()
)
console.log(newArr)

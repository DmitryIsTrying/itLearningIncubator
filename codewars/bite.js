function dataReverse(data) {
  const resultArr = []

  for (let i = 0; i < data.length; i += 8) {
    resultArr.push(data.slice(i, i + 8))
  }
  return resultArr.reverse().flat()
}

console.log(
  dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0])
)

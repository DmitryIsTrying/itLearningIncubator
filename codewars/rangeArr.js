function highestRank(arr) {
  const obj = arr.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++
    } else {
      acc[el] = 1
    }
    return acc
  }, {})
  const maxValue = Math.max(...Object.values(obj))
  const result = []
  for (key in obj) {
    if (obj[key] === maxValue) {
      result.push(key)
    }
  }
  return Math.max(...result)
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))

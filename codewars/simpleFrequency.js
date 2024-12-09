function solve(arr) {
  const obj = arr.reduce((acc, num) => {
    if (acc[num]) {
      acc[num] += 1
    } else {
      acc[num] = 1
    }
    return acc
  }, {})
  return arr.sort((a, b) => {
    if (obj[a] === obj[b]) {
      if (a === b) {
        return 0
      } else {
        return a - b
      }
    } else {
      return obj[b] - obj[a]
    }
  })
}
console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]))

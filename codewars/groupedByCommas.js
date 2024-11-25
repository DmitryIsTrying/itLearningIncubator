function groupByCommas(n) {
  const str = n.toString()
  const result = []
  let count = 0
  for (let i = str.length - 1; i >= 0; i--) {
    if (count === 3) {
      result.unshift(',')
      i++
      count = 0
    } else {
      result.unshift(str[i])
      count++
    }
  }
  return result.join('')
}

console.log(groupByCommas(2147483647))

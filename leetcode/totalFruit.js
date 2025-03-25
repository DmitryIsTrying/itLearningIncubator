var totalFruit = function (fruits) {
  let begin = 0
  const map = new Map()
  let max = -Infinity
  for (let end = 0; end < fruits.length; end++) {
    const current = map.get(fruits[end])
    if (!current) {
      while (map.size > 1) {
        const num = map.get(fruits[begin])
        if (num === 1) {
          map.delete(fruits[begin])
        } else {
          map.set(fruits[begin], num - 1)
        }
        begin++
      }
      map.set(fruits[end], 1)
    } else {
      map.set(fruits[end], current + 1)
    }
    max = Math.max(max, end - begin + 1)
  }
  return max
}

var flat = function (arr, n) {
  let stack = arr
  let res = []
  while (n) {
    for (const el of stack) {
      if (Array.isArray(el)) {
        res.push(...el)
      } else {
        res.push(el)
      }
    }
    stack = res
    res = []
    n--
  }
  return stack
}
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1))

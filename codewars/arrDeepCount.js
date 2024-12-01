function deepCount(a, count = { result: 0 }) {
  for (el of a) {
    count.result++
    if (Array.isArray(el)) {
      deepCount(el, count)
    }
  }
  return count.result
}
console.log(deepCount([1, 2, [3, 4, [5]]]))

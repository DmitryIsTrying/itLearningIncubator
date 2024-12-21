var filter = function (arr, fn) {
  return arr.reduce((acc, el, i, array) => {
    const bool = fn(el, i, array)

    if (bool) acc.push(el)
    return acc
  }, [])
}
console.log(
  filter([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10
  })
)

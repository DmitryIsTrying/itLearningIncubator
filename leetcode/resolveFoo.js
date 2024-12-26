var once = function (fn) {
  let isFirst = false
  return function (...args) {
    if (isFirst) return
    isFirst = true
    return fn(...args)
  }
}
const test = once(() => 123)
console.log(test())
console.log(test())
console.log(test())

function chained(functions) {
  return function (args) {
    functions.forEach((cb) => (args = cb(args)))
    return args
  }
}
function f1(x) {
  return x * 2
}
function f2(x) {
  return x + 2
}
function f3(x) {
  return Math.pow(x, 2)
}
// const getFoo = chained([f1, f2, f3])
console.log(f3(f2(f1(0))))

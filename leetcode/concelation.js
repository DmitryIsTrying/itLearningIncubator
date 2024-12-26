var cancellable = function (fn, args, t) {
  const timeoutId = setTimeout(fn, t, ...args)
  return function () {
    clearTimeout(timeoutId)
  }
}
console.log(cancellable((x1, x2) => x1 * x2, [2, 4], 30))

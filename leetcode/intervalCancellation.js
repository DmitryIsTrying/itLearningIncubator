var cancellable = function (fn, args, t) {
  fn(...args)
  const intervalId = setInterval(fn, t, ...args)
  return function () {
    clearInterval(intervalId)
  }
}

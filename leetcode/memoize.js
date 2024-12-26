function memoize(fn) {
  const obj = {}
  return function (...args) {
    if (!(args in obj)) {
      obj[args] = fn(...args)
    }
    return obj[args]
  }
}

var debounce = function (fn, t) {
  let timeoutId = null
  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(fn, t, ...args)
  }
}

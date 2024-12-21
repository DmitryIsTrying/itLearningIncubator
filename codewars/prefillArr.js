function prefill(n, v) {
  if (typeof n === 'boolean' || isNaN(n) || !isFinite(n) || n < 0 || n % 1 !== 0) {
    throw new TypeError(`${n} is invalid`)
  }
  n = Number(n)
  if (n === 0) return []

  return Array.from({ length: n }, () => v)
}
console.log(prefill(0, undefined))

function beggars(values, n) {
  const arr = Array(n).fill(0)
  for (let i = 0; i < values.length; i++) {
    arr[i % n] += values[i]
  }
  return arr
}
console.log(beggars([1, 2, 3, 4, 5], 6))

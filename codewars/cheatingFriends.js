function removeNb(n) {
  const sum = (n * (n + 1)) / 2

  const result = []

  for (let a = 1; a <= n; a++) {
    const b = (sum - a) / (a + 1)
    if (Number.isInteger(b) && b >= 1 && b <= n) {
      result.push([a, b])
    }
  }

  return result
}

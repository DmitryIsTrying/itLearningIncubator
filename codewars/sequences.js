function getScore(n) {
  if (n === 1) return 50
  return getScore(n - 1) + n * 50
}
console.log(getScore(2))

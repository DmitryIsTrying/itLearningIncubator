function squaresNeeded(grains) {
  if (!grains) return 0
  return Math.floor(Math.log(grains) / Math.log(2) + 1)
}
console.log(squaresNeeded(4))

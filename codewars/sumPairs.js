function sumPairs(ints, s) {
  const seen = new Set()
  for (const num of ints) {
    if (seen.has(s - num)) {
      return [s - num, num]
    }
    seen.add(num)
  }
}
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10))

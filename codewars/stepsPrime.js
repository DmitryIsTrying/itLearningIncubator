function isPrime(num) {
  if ([2, 3].includes(num)) return true
  if (num % 2 === 0 || num % 3 === 0) return false
  const sq = Math.sqrt(num)
  for (let i = 5; i <= sq; i++) {
    if (num % i === 0) return false
  }
  return true
}
function step(g, m, n) {
  console.log(g, m, n)

  const nums = []
  for (let j = m; j <= n; j++) {
    if (isPrime(j)) {
      nums.push(j)
      if (nums.includes(j - g)) {
        return [j - g, j]
      }
    }
  }

  return null
}
console.log(step(8, 300, 400))

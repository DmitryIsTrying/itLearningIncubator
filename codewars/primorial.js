function isPrime(num) {
  if ([1, 2, 3].includes(num)) return true
  if (num % 2 === 0 || num % 3 === 0) return false
  const sq = Math.sqrt(num)
  for (let i = 5; i <= sq; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false
  }
  return true
}

function numPrimorial(n) {
  const result = []
  for (let i = 2; n !== result.length; i++) {
    if (isPrime(i)) {
      result.push(i)
    }
  }
  return result.reduce((acc, el) => acc * el)
}

console.log(numPrimorial(5))

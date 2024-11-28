function isPrime(num) {
  if ([1, 2, 3].includes(num)) return true
  if (num % 2 === 0 || num % 3 === 0) return false
  const sq = Math.sqrt(num)
  for (let i = 5; i <= sq; i++) {
    if (num % i === 0) return false
  }
  return true
}

function backwardsPrime(start, stop) {
  const result = []
  for (let j = start; j <= stop; j++) {
    if (j.toString().split('').reverse().join('') !== j.toString()) {
      if (j.toString().length >= 2) {
        if (isPrime(j)) {
          const primeNum = Number(j.toString().split('').reverse().join(''))
          if (isPrime(primeNum)) {
            result.push(j)
          }
        }
      }
    }
  }
  return result
}

console.log(backwardsPrime(2, 100))

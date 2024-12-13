function twistedSum(n) {
  let totalSum = 0

  for (let i = 1; i <= n; i++) {
    let numStr = i.toString()

    for (let char of numStr) {
      totalSum += parseInt(char)
    }
  }

  return totalSum
}

console.log(twistedSum(12))

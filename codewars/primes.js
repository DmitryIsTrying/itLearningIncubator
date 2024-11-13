function primeFactors(n) {
  const simples = [2]
  let result = ''

  while (true) {
    let count = 0
    while (true) {
      if (n % simples[simples.length - 1] === 0) {
        n /= simples[simples.length - 1]
        count++
      } else {
        if (count) result += `(${simples[simples.length - 1]}${count !== 1 ? `**${count}` : ''})`
        break
      }
    }

    if (n === 1) {
      break
    } else {
      simples.push(getSimples(simples[simples.length - 1]))
    }
  }
  return result
}

function getSimples(num) {
  let currentNum = num + 1
  while (true) {
    let isPrime = true
    for (let i = 2; i <= Math.sqrt(currentNum); i++) {
      if (currentNum % i === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) {
      return currentNum
    }
    currentNum++
  }
}
console.log(primeFactors(35791357))

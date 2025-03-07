var closestPrimes = function (left, right) {
  // Функция для проверки, является ли число простым
  function isPrime(n) {
    if (n === 1) return false
    if ([2, 3].includes(n)) return true
    if (n % 2 === 0 || n % 3 === 0) return false

    const sqrt = Math.sqrt(n)
    for (let i = 5; i <= sqrt; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false
      }
    }
    return true
  }

  let primes = [] // Массив для хранения всех простых чисел в диапазоне
  let minDiff = Infinity // Минимальная разница между парой простых чисел
  let result = [-1, -1] // Результат

  // Находим все простые числа в диапазоне [left, right]
  for (let i = left; i <= right; i++) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }

  // Если найдено меньше двух простых чисел, возвращаем [-1, -1]
  if (primes.length < 2) {
    return [-1, -1]
  }

  // Ищем пару с минимальной разницей
  for (let i = 0; i < primes.length - 1; i++) {
    let diff = primes[i + 1] - primes[i]
    if (diff < minDiff) {
      minDiff = diff
      result = [primes[i], primes[i + 1]]
    }
  }

  return result
}

function nextBigger(n) {
  let digits = Array.from(String(n), Number)
  let length = digits.length

  let i
  for (i = length - 2; i >= 0; i--) {
    if (digits[i] < digits[i + 1]) {
      break
    }
  }

  if (i < 0) {
    return -1
  }

  let j
  for (j = length - 1; j > i; j--) {
    if (digits[j] > digits[i]) {
      break
    }
  }

  ;[digits[i], digits[j]] = [digits[j], digits[i]]

  let rightPart = digits.splice(i + 1)
  rightPart.sort((a, b) => a - b)
  digits = [...digits, ...rightPart]

  return parseInt(digits.join(''), 10)
}

console.log(nextBigger(1234567890))

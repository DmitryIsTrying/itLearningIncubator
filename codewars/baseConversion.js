function convert(input, source, target) {
  let decimalValue = 0
  const sourceBase = source.length
  for (let i = 0; i < input.length; i++) {
    const char = input[input.length - 1 - i]
    const value = source.indexOf(char)
    decimalValue += value * Math.pow(sourceBase, i)
  }

  const targetBase = target.length
  if (decimalValue === 0) return target[0]

  let result = ''
  while (decimalValue > 0) {
    const remainder = decimalValue % targetBase
    result = target[remainder] + result
    decimalValue = Math.floor(decimalValue / targetBase)
  }

  return result
}

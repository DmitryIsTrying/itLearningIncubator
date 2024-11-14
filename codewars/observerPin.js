function getPINs(observed) {
  const adjacentDigits = {
    0: ['8', '0'],
    1: ['2', '4', '1'],
    2: ['1', '3', '5', '2'],
    3: ['2', '6', '3'],
    4: ['1', '5', '7', '4'],
    5: ['2', '4', '6', '8', '5'],
    6: ['3', '5', '9', '6'],
    7: ['4', '8', '7'],
    8: ['5', '7', '9', '0', '8'],
    9: ['6', '8', '9'],
  }

  function generateCombinations(prefix, remaining) {
    if (remaining.length === 0) {
      return [prefix]
    }

    const currentDigit = remaining[0]
    const nextDigits = adjacentDigits[currentDigit]
    const combinations = []

    for (const digit of nextDigits) {
      combinations.push(...generateCombinations(prefix + digit, remaining.slice(1)))
    }

    return combinations
  }

  return generateCombinations('', observed)
}
console.log(getPINs('11'))

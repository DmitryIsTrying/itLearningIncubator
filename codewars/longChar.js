function longestRepetition(s) {
  if (s.length === 0) {
    return ['', 0]
  }

  const resultObj = {}

  let longestChar = ''

  let longestLength = 0

  let currentChar = s[0].toLowerCase()

  let currentLength = 1

  for (let i = 1; i < s.length; i++) {
    let char = s[i].toLowerCase()

    if (char === currentChar) {
      currentLength++
    } else {
      if (currentLength > longestLength) {
        longestChar = currentChar

        longestLength = currentLength
      }

      currentChar = char

      currentLength = 1
    }
  }

  if (currentLength > longestLength) {
    longestChar = currentChar

    longestLength = currentLength
  }

  return [longestChar, longestLength]
}

console.log(longestRepetition('aabb'))

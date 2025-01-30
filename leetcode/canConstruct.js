var canConstruct = function (ransomNote, magazine) {
  const sortedLetters = ransomNote.split('').reduce((acc, letter) => {
    if (acc[letter]) {
      acc[letter]++
    } else {
      acc[letter] = 1
    }
    return acc
  }, {})
  for (const key in sortedLetters) {
    let startPosition = 0
    while (sortedLetters[key] > 0) {
      const inx = magazine.indexOf(key, startPosition)
      if (inx === -1) {
        return false
      }
      startPosition = inx + 1
      sortedLetters[key]--
    }
  }
  return true
}
const ransomNote = 'aa',
  magazine = 'aab'
console.log(canConstruct(ransomNote, magazine))

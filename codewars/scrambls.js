function scramble(str1, str2) {
  const charCount = {}

  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1
  }

  for (let char of str2) {
    if (!charCount[char]) {
      return false
    }
    charCount[char]--
  }

  return true
}
console.log(scramble('rkqodlw', 'world'))

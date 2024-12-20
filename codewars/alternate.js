function isAlt(word) {
  const arr = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < word.length - 1; i++) {
    if (!arr.includes(word[i]) && !arr.includes(word[i + 1])) {
      return false
    }
    if (arr.includes(word[i]) && arr.includes(word[i + 1])) {
      return false
    }
  }
  return true
}
console.log(false + 2)

function getMask(word) {
  const charCount = new Array(26).fill(0)
  for (const char of word) {
    const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
    charCount[index]++
  }
  return charCount.join(',')
}

var groupAnagrams = function (strs) {
  const wordsObject = strs.reduce((acc, word) => {
    const mask = getMask(word)
    console.log(mask)

    if (!acc[mask]) {
      acc[mask] = []
    }
    acc[mask].push(word)
    return acc
  }, {})

  return Object.values(wordsObject)
}
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))

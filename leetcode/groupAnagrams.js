var groupAnagrams = function (strs) {
  const alliances = strs.reduce((acc, word) => {
    const sortedWord = word
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('')

    if (!acc[sortedWord]) {
      acc[sortedWord] = []
    }

    acc[sortedWord].push(word)

    return acc
  }, {})

  return Object.values(alliances)
}
const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
console.log(groupAnagrams(strs))

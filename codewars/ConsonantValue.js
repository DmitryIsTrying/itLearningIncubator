function solve(s) {
  const str = 'aeiou'
  const { words } = s.split('').reduce(
    (acc, char) => {
      if (!str.includes(char)) {
        acc.words[acc.indexCurrent] += char
      } else if (acc.words[acc.indexCurrent]) {
        acc.indexCurrent++
      }
      if (acc.words[acc.indexCurrent]?.includes('undefined')) {
        acc.words[acc.indexCurrent] = acc.words[acc.indexCurrent].slice(9)
      }
      return acc
    },
    { indexCurrent: 0, words: [] }
  )

  words.forEach((word, i) => {
    words[i] = word
      .split('')
      .map((char) => {
        return char.charCodeAt() - 96
      })
      .reduce((acc, num) => {
        return (acc += num)
      })
  })
  console.log(words)

  return Math.max(...words)
}
console.log(solve('zodiac'))

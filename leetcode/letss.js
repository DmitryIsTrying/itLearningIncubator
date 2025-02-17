export function getCompressedString(text) {
  const tokens = text.match(/[\wа-яА-ЯёЁ-]+|[.,!?]|\s+/gu) || []

  const wordMap = new Map()
  const wordOrder = []

  tokens.forEach((token, index) => {
    const lowerToken = token.toLowerCase()

    if (/^[\wа-яА-ЯёЁ-]+$/.test(lowerToken)) {
      if (!wordMap.has(lowerToken)) {
        wordMap.set(lowerToken, { count: 0, firstIndex: index, originalCase: token })
        wordOrder.push(lowerToken)
      }
      wordMap.get(lowerToken).count++
    }
  })

  const sortedWords = wordOrder.sort((a, b) => {
    const countDiff = wordMap.get(b).count - wordMap.get(a).count
    return countDiff !== 0 ? countDiff : wordMap.get(a).firstIndex - wordMap.get(b).firstIndex
  })

  const indexMap = new Map(sortedWords.map((word, index) => [word, index]))

  return tokens
    .map((token) => {
      const lowerToken = token.toLowerCase()
      if (/^[\wа-яА-ЯёЁ-]+$/.test(lowerToken)) {
        return indexMap.get(lowerToken).toString()
      } else {
        return token
      }
    })
    .join('')
}

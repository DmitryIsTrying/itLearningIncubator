function autocomplete(input, dictionary) {
  const cleanedInput = input.replace(/[^a-zA-Z]/g, '').toLowerCase()

  const matches = dictionary.filter((word) => {
    const cleanedWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase()
    return cleanedWord.startsWith(cleanedInput)
  })

  return matches.slice(0, 5)
}

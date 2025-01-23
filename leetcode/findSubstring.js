var findSubstring = function (s, words) {
  if (!s || !words || words.length === 0) return []

  const wordLength = words[0].length // Length of each word
  const totalLength = wordLength * words.length // Total length of concatenated substring
  const result = []

  // Create a frequency map for words
  const wordCount = {}
  for (const word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1
  }

  // Iterate through s using a sliding window
  for (let i = 0; i <= s.length - totalLength; i++) {
    const seen = {} // Track words seen in the current window
    let valid = true

    // Check each chunk in the window
    for (let j = 0; j < words.length; j++) {
      const start = i + j * wordLength
      const end = start + wordLength
      const chunk = s.slice(start, end)

      // If the chunk is not in wordCount, the window is invalid
      if (!wordCount[chunk]) {
        valid = false
        break
      }

      // Update the seen map
      seen[chunk] = (seen[chunk] || 0) + 1

      // If the chunk appears more times than in wordCount, the window is invalid
      if (seen[chunk] > wordCount[chunk]) {
        valid = false
        break
      }
    }

    // If the window is valid, add the starting index to the result
    if (valid) {
      result.push(i)
    }
  }

  return result
}

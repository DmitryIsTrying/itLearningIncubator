function toNato(words) {
  console.log(words)

  return words
    .replace(/[aA-zZ]/g, (char) => {
      return NATO[char.toUpperCase()] + ' '
    })
    .replace(/  /g, ' ')
    .trim()
  // you can access the preloaded NATO dictionary
  // NATO['A'] === 'Alfa', etc.
}

console.log(toNato('If you can read'))

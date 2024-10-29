function abbreviate(string) {
  return string.replace(/[a-z]+/gi, (word) => {
    if (word.length < 4) return word
    return word[0] + (word.length - 2) + word[word.length - 1]
  })
}

console.log(abbreviate('You need, need not want, to complete this code-wars mission'))

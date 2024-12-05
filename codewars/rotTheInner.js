function sortTheInnerContent(words) {
  return words
    .split(' ')
    .map((word) => {
      if (word.length < 4) return word
      const needSort = word.split('').slice(1, -1)
      return word[0] + needSort.sort((a, b) => b.localeCompare(a)).join('') + word[word.length - 1]
    })
    .join(' ')
}
console.log(sortTheInnerContent('sort the inner content in descending order'))

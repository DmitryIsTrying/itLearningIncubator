function shortestWord(arr) {
  return arr.reduce((acc, word) => {
    if (acc.length > word.length) {
      acc = word
    }
    return acc
  })
}
console.log(shortestWord(['dddasd', 'ddasfdd', 'ddgwewd', 'ddddd']))

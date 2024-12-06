function formatWords(words) {
  if (!words) return ''
  const newArr = words.filter((el) => el !== '')
  return newArr.reduce((acc, word, i, arr) => {
    if (i === arr.length - 2) {
      acc += `${word} and `
    } else if (i === arr.length - 1) {
      acc += word
    } else {
      acc += `${word}, `
    }
    return acc
  }, '')
}
console.log(formatWords(['one', '', 'three']))

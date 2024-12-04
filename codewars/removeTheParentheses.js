function removeParentheses(s) {
  console.log(s)

  return s
    .split('')
    .reduce(
      (acc, el) => {
        if (el === '(') {
          acc.flag += 1
        }
        if (!acc.flag) {
          acc.result += el
        }
        if (el === ')') {
          acc.flag -= 1
        }
        return acc
      },
      { flag: 0, result: '' }
    )
    .result.replace(/\)/g, '')
}
console.log(removeParentheses('hello example (words(more words) here) something'))

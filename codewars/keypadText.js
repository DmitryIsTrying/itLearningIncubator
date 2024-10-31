function presses(phrase) {
  const arr = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', '*', ' 0', '#']
  return phrase
    .toUpperCase()
    .split('')
    .reduce((acc, el) => {
      const arrWord = arr.filter((words) => words.includes(el))
      return acc + arrWord[0].indexOf(el) + 1
    }, 0)
}

console.log(presses('HOW R U'))

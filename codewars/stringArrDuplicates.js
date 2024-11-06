Array.prototype.deleteDuplicateChars = function () {
  return this.map(
    (word) =>
      word.split('').reduce(
        (acc, el) => {
          if (acc.prevChar !== el) {
            acc.prevChar = el
            acc.word += el
          }
          return acc
        },
        { prevChar: '', word: '' }
      ).word
  )
}

function dup(s) {
  return s.deleteDuplicateChars()
}

console.log(dup(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo']))

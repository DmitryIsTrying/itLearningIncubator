function isOddName(str) {
  var numOfCharsSum = str.split('').reduce((acc, char) => acc + char.charCodeAt(), 0)
  return numOfCharsSum % 2 !== 0
}

function findOddNames(list) {
  var res = []
  for (var el of list) {
    if (isOddName(el.firstName)) {
      res.push(el)
    }
  }
  return res
}
console.log(
  findOddNames([
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' },
  ])
)

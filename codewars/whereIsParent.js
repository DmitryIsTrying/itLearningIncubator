function findChildren(dancingBrigade) {
  //   const obj = dancingBrigade
  //     .toLowerCase()
  //     .split('')
  //     .reduce((acc, char) => {
  //       if (acc[char]) {
  //         acc[char] += 1
  //       } else {
  //         acc[char] = 1
  //       }
  //       return acc
  //     }, {})

  //   const arr = Object.keys(obj).sort((a, b) => a.localeCompare(b))
  //   let result = ''
  //   for (el of arr) {
  //     result += el.toUpperCase() + el.repeat(obj[el] - 1)
  //   }
  //   return result
  return dancingBrigade
    .split('')
    .sort((a, b) => a.localeCompare(b, 'en', { caseFirst: 'upper' }))
    .join('')
}
console.log(findChildren('uwwWUueEe'))

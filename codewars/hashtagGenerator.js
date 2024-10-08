function generateHashtag(str) {
  if (!str.trim()) return false

  const resultStr =
    '#' +
    str
      .trim()
      .replace(/[\s]+/g, ' ')
      .split(' ')
      .map((el) => {
        return el[0].toUpperCase() + el.slice(1).toLowerCase()
      })
      .join('')
  return resultStr.length > 140 ? false : resultStr
}
console.log(generateHashtag('        Codewars          is           Nice'))

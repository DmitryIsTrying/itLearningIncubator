var wordPattern = function (pattern, s) {
  const alliances = {}
  const arrString = s.split(' ')

  if (pattern.length !== words.length) {
    return false
  }

  for (let i = 0; i < arrString.length; i++) {
    if (alliances[pattern[i]]) {
      if (alliances[pattern[i]] !== arrString[i]) {
        return false
      }
    }
    alliances[pattern[i]] = arrString[i]
  }
  const allianceStr = Object.values(alliances)
  if (allianceStr.length !== [...new Set(allianceStr)].length) {
    return false
  }
  return true
}
const pattern = 'abba',
  s = 'dog cat cat fish'
console.log(wordPattern(pattern, s))

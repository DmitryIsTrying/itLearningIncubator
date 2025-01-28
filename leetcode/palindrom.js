function palindrom(str) {
  const filteredStr = str.toLowerCase().replace(/[^a-z\d]/g, '')
  return filteredStr === filteredStr.split('').reverse().join('')
}

function isLetterOrNumber(char) {
  // check is it number
  if (!Number.isNaN(Number(char)) && char !== ' ') {
    return true
  }

  // check is it letter
  if (char.toLowerCase() !== char.toUpperCase()) {
    return true
  }
  return false
}

function palindrom2(str) {
  let leftArrow = 0
  let rightArrow = str.length - 1

  while (leftArrow < rightArrow) {
    if (!isLetterOrNumber(str[leftArrow])) {
      leftArrow++
      continue
    }

    if (!isLetterOrNumber(str[rightArrow])) {
      rightArrow--
      continue
    }

    if (str[leftArrow].toLowerCase() !== str[rightArrow].toLowerCase()) {
      return false
    }
    leftArrow++
    rightArrow--
  }
  return true
}

console.log(palindrom2('  , . 123 Anna321 !!'))

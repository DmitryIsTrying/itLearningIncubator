function isLetterOrNum(char) {
  const reg = new RegExp(/[a-z\d]/)
  return reg.test(char)
}

var isPalindrome = function (s) {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    const lowerLeftChar = s[left].toLowerCase()

    const lowerRightChar = s[right].toLowerCase()
    if (!isLetterOrNum(lowerLeftChar)) {
      left++
      continue
    }

    if (!isLetterOrNum(lowerRightChar)) {
      right--
      continue
    }

    if (lowerLeftChar !== lowerRightChar) {
      return false
    }
    left++
    right--
  }
  return true
}
console.log(isPalindrome('A man, a pln, a canal: Panama'))

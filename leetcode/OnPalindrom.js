var isPalindrome = function (str) {
  let leftArrow = 0
  let rightArrow = str.length - 1

  while (leftArrow < rightArrow) {
    while (leftArrow < rightArrow && !/[a-zA-Z0-9]/.test(str[leftArrow])) {
      leftArrow++
    }
    while (leftArrow < rightArrow && !/[a-zA-Z0-9]/.test(str[rightArrow])) {
      rightArrow--
    }

    if (str[leftArrow].toLowerCase() !== str[rightArrow].toLowerCase()) {
      return false
    }

    leftArrow++
    rightArrow--
  }

  return true
}

console.log(isPalindrome(str))

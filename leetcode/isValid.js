var isValid = function (s) {
  const alliance = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    const currentChar = alliance[s[i]]

    if (currentChar) {
      const lastCharInStack = stack.pop()

      if (currentChar !== lastCharInStack) {
        return false
      }
    } else {
      stack.push(s[i])
    }
  }

  if (stack.length > 0) return false

  return true
}
const s = '()[]{}'
console.log(isValid(s))

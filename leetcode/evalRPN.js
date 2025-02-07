var evalRPN = function (tokens) {
  const alliance = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => {
      const result = a / b
      if (result < 0) {
        return Math.ceil(result)
      } else {
        return Math.floor(result)
      }
    },
    '*': (a, b) => a * b,
  }
  for (let i = 0; i < tokens.length; i++) {
    const char = alliance[tokens[i]]
    if (char) {
      const [a, b] = tokens.splice(i - 2, 3, 'x')
      console.log(a, b)

      const num = char(Number(a), Number(b))
      tokens[i - 2] = num
      i -= 2
      console.log(num)
      console.log('==========')
    }
  }
  return Number(tokens[0])
}
const tokens = ['18']
console.log(evalRPN(tokens))
// [
//     '10', '6', -132,
//     '/',  '*', '17',
//     '+',  '5', '+'
//   ]

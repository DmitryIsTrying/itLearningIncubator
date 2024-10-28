function calc(expr) {
  console.log(expr)

  if (!expr) return 0
  const objAssociat = {
    '-': (numbers) => {
      return numbers.reduce((acc, num) => (acc -= num))
    },
    '+': (numbers) => {
      return numbers.reduce((acc, num) => (acc += num))
    },
    '*': (numbers) => {
      return numbers.reduce((acc, num) => (acc *= num))
    },
    '/': (numbers) => {
      return numbers.reduce((acc, num) => (acc /= num))
    },
  }
  let result = []
  expr.split(' ').forEach((char) => {
    if (objAssociat[char]) {
      const newNum = objAssociat[char](result.slice(-2))
      result = result.slice(0, -2)
      result.push(+newNum)
    } else {
      result.push(+char)
    }
  })
  return Number(result.join(''))
}

console.log(calc('5 1 2 + 4 * + 3 -'))

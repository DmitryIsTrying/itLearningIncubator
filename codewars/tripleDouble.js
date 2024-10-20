function tripledouble(num1, num2) {
  const arrNum1 = num1.toString()
  const arrNum2 = num2.toString()
  return arrNum1
    .split('')
    .map((el, i) => {
      if (arrNum1[i - 1] === el && arrNum1[i + 1] === el && arrNum2.includes(el + el)) {
        return 'true'
      }
      return undefined
    })
    .join('')
    .split('').length > 0
    ? 1
    : 0
}

console.log(tripledouble(451999277, 41177722899))

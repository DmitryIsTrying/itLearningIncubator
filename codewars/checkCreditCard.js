function validate(n) {
  let flag = n.toString().length % 2 === 0 ? true : false
  const check = n
    .toString()
    .split('')
    .map((num, i) => {
      if (flag) {
        if (i % 2 === 0) {
          const newNum = num * 2
          debugger
          if (newNum > 9) {
            const strNum = newNum.toString()
            console.log(strNum)

            console.log(strNum[0])

            return +strNum[0] + +strNum[1]
          }

          return newNum
        }
        return num
      } else {
        if (!(i % 2 === 0) && i !== 0) {
          const newNum = (num * 2).toString()
          if (newNum > 9) {
            const strNum = newNum.toString()
            console.log(strNum)

            console.log(strNum[0])

            return +strNum[0] + +strNum[1]
          }
          return newNum
        }
        return num
      }
    })
    .reduce((acc, num) => {
      return (acc += +num)
    }, 0)

  return check % 10 === 0
}

console.log(validate(91))

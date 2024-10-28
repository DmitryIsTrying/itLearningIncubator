const array = [1, 2, 4, 5, 2, 8]

const result = Math.min(...array)
// console.log(Math.pow(2, 2))

Math.superPow = function (squary, ...arg) {
  return arg.map((num) => {
    if (isNaN(+num)) throw new Error('Type Error: argument must be number')
    if (isNaN(+squary)) throw new Error('Type Error: squary must be number')
    if (!squary) return 1
    const subNum = num
    for (let i = 1; i < squary; i++) {
      num *= subNum
    }
    return num
  })
}
console.dir(Math.superPow(3, ...array))

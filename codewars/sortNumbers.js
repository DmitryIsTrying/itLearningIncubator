function descendingOrder(n) {
  return +n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('')
}

// console.log(descendingOrder(1423))

// console.log(NaN === NaN) // false
// console.log(-1 == null) // false
// console.log(typeof undefined) // undefined

const arrTest = [1, 2, 3, 4, 6, 5]
console.log(arrTest.filter((el) => 2))

const obj = {
  1: 'one',
  2: 'two',
  3: 'three',
}

console.log(obj[1])

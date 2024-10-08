function descendingOrder(n) {
  return +n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('')
}

// console.log(descendingOrder(1423))

console.log(NaN === NaN) // false
console.log(-1 == null) // false
console.log(typeof undefined) // undefined

function deleteDigit(n) {
  const arr = n.toString().split('')
  return arr.reduce((acc, _, i) => {
    const num = Number([...arr.slice(0, i), ...arr.slice(i + 1)].join(''))
    if (acc < num) {
      acc = num
    }
    return acc
  }, null)
}
console.log(deleteDigit(46939))

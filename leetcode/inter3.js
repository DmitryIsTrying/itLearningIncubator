function sumAllInts(num) {
  return num
    .toString()
    .split('')
    .reduce((acc, str) => {
      return (acc += Number(str))
    }, 0)
}
console.log(sumAllInts(61651))

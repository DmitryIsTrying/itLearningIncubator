// function sumPairs(ints, s) {
//   const seen = new Set()
//   for (const num of ints) {
//     if (seen.has(s - num)) {
//       return [s - num, num]
//     }
//     seen.add(num)
//   }
// }
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10))

// const arr = [1, 1, 2, 2, 2, 5, 5, 5, 2, 7]
// const result = arr.reduce((acc, el) => {
//   if (acc[el]) {
//     acc[el] += 1
//   } else {
//     acc[el] = 1
//   }
//   return acc
// }, {})
// console.log(
//   Object.entries(result)
//     .sort((a, b) => b[1] - a[1])
//     .map((el) => Number(el[0]))
// )
function callDB() {
  setTimeout(() => {
    console.log('call DB')
    callDB()
  }, 3000)
  console.log('here')
}
callDB()

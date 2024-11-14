function sumIntervals(intervals) {
  intervals.reduce((acc, el) => {}, {
    min: 0,
    max: 0,
    intervals: [],
  })
}
console.log(
  sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ])
)

// let counterI = 0
// while (arr.length) {
//   const cArr = [arr[0], arr[arr.length - 1 - counterI]]
//   const reduc = intervals.reduce((acc, elA) => {
//     if (elA[0] === cArr[0] && elA[1] === cArr[1]) {
//       acc = true
//     }
//     return acc
//   }, false)
//   if (reduc) {
//     result += cArr[1] - cArr[0]
//     console.log(cArr)
//     arr = arr.slice(arr.length - counterI)
//     console.log(arr)

//     counterI = 0
//   } else {
//     counterI++
//   }
// }
// return result

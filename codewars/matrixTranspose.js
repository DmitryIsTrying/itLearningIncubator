// function transpose(matrix) {
//   const res = []
//   for (let i = 0; i < matrix[0].length; i++) {
//     let check = []
//     for (let j = 0; j < matrix.length; j++) {
//       check.push(matrix[j][i])
//     }
//     res.push(check)
//     check = []
//   }
//   return res
// }
// console.log(
//   transpose([
//     [1, 2, 3],
//     [4, 5, 6],
//   ])
// )

const a = String('5')
let count = 5
Object.prototype.toString = function () {
  return count++
}
Object.prototype.valueOf = function () {
  return count++
}
if (a == 5 && a == 6 && a == 7) {
  console.log('bingo')
}
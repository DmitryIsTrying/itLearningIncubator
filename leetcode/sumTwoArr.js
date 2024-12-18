// Array.prototype.myReverse = function () {
//   var arr = this
//   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     ;[arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
//   }
//   return arr
// }

// var addTwoNumbers = function (l1, l2) {
//   console.log(l1)

//   const num1 = Number(l1.myReverse().join(''))
//   const num2 = Number(l2.myReverse().join(''))
//   return Array.from((num1 + num2).toString(), Number)
// }
// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))
async function test() {
  return await Promise.reject(1)
}
test().catch(console.log)

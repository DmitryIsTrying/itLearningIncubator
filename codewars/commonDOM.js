// function findCommon(nums) {
//   for (let i = 1; i < Infinity; i++) {
//     const check = nums.filter((num) => i % num === 0)
//     if (check.length === nums.length) {
//       return i
//     }
//   }
// }
// function convertFrac(lst) {
//   console.log(lst)
//   if (lst.length === 0) return ''
//   const num = findCommon(lst.map((arr) => arr[1]))
//   return lst.reduce((acc, arr) => {
//     acc += `(${arr[0] * (num / arr[1])},${num})`
//     return acc
//   }, '')
// }
// console.log(
//   convertFrac([
//     [1, 100],
//     [3, 1000],
//     [1, 2500],
//     [1, 20000],
//   ])
// )
// not pure function
function myReducer(state, str) {
  switch (str) {
    case 'test': {
      Promise.resolve().then(() => {
        return 2
      })
    }
    case 'check': {
      return 3
    }
    default:
      return state
  }
}
console.log(myReducer(1, 'test'))

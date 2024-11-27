// function twosDifference(input) {
//   let result = []
//   for (let i = 0; i < input.length; i++) {
//     if (input.includes(input[i] + 2)) {
//       result.push([input[i], input[i] + 2])
//     }
//   }
//   return result.sort((a, b) => a[0] - b[0])
// }
// console.log(twosDifference([4, 3, 1, 5, 6]))
// function dupliccates(nums) {
//   return nums.reduce(
//     (acc, el) => {
//       if (acc.numbers.includes(el)) {
//         acc.repeatNums.push(el)
//       } else {
//         acc.numbers.push(el)
//       }
//       return acc
//     },
//     { numbers: [], repeatNums: [] }
//   ).repeatNums
// }

// console.log(dupliccates([4, 3, 2, 7, 8, 2, 3, 1]))

// function test(nums) {
//   const foo = (acc, el) => acc + el
//   const sum1 = nums.reduce(foo)
//   const nonDuplicatesArr = [...new Set(nums)]
//   const sum2 = nonDuplicatesArr.reduce(foo) * 2
//   return sum2 - sum1
// }

// console.log(test([1, 2, 4, 5, 1, 2, 3, 4, 5]))

function test(nums) {
  let mask = 0
  for (el of nums) {
    mask ^= el
  }
  return mask
}

console.log(test([1, 2, 4, 5, 1, 2, 3, 4, 5]))

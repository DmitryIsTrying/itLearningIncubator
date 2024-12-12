// function looseChange(cents) {
//   const obj = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 }
//   cents = Math.floor(cents)
//   if (cents <= 0) return obj
//   const nums = { Quarters: 25, Dimes: 10, Nickels: 5, Pennies: 1 }
//   const arr = Object.keys(nums)
//   for (let i = 0; i < arr.length; i++) {
//     while (true) {
//       const num = nums[arr[i]]
//       if (cents - num < 0) {
//         break
//       } else {
//         cents -= num
//         obj[arr[i]]++
//       }
//     }
//   }
//   return obj
// }
// console.log(looseChange(7.9))
async function test() {
  try {
    const res = await Promise.resolve()
    a
  } catch (er) {}
}
const r = test()
console.log(r)
setTimeout(() => {
  console.log(r)
})

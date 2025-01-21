// var minSubArrayLen = function (target, nums) {
//   const sortedNums = nums.sort((a, b) => b - a)
//   let sum = 0
//   let counter = 0
//   for (let i = 0; i < sortedNums.length; i++) {
//     sum += sortedNums[i]
//     counter++
//     console.log(sum)

//     if (sum >= target) {
//       return counter
//     }
//   }
//   return 0
// }
//NOT subarray
var minSubArrayLen = function (target, nums) {
  let left = 0
  let sum = 0
  let minLength = Infinity

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1)
      sum -= nums[left]
      left++
    }
  }

  return minLength === Infinity ? 0 : minLength
}

const target = 213,
  nums = [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12]
console.log(minSubArrayLen(target, nums))

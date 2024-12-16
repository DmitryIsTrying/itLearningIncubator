var getFinalState = function (nums, k, multiplier) {
  for (let i = 0; i < k; i++) {
    const x = Math.min(...nums)
    const index = nums.indexOf(x)

    nums[index] *= multiplier
  }
  return nums
}
const nums = [2, 1, 3, 5, 6],
  k = 5,
  multiplier = 2
console.log(getFinalState(nums, k, multiplier))

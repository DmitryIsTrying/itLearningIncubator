var applyOperations = function (nums) {
  let inx = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2
      nums[i + 1] = 0
      i++
    }
    inx++
  }
  let left = 0
  let right = 0
  while (right < nums.length) {
    if (nums[left] === 0) {
      while (nums[right] === 0 && right < nums.length - 1) {
        right++
      }
      ;[nums[left], nums[right]] = [nums[right], nums[left]]
    }
    left++
    right++
  }
  return nums
}

console.log(applyOperations([1, 2, 2, 1, 1, 0]))

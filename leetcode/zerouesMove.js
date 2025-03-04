var moveZeroes = function (nums) {
  let left = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      ;[nums[left], nums[i]] = [nums[i], nums[left]]
      left++
    }
    console.log(nums)
  }
  return nums
}

moveZeroes([1, 2, 0, 4])
// Ожидаемый результат: [1, 2, 5, 8, 0, 0, 0, 0, 0, 0]

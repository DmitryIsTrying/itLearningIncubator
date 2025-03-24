var removeElement = function (nums, val) {
  let left = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      ;[nums[left], nums[i]] = [nums[i], nums[left]]
      left++
    }
  }

  return left
}
const arr = [0, 1, 2, 2, 3, 0, 4, 2]
console.log(removeElement(arr, 2))
console.log(arr)

var removeDuplicates = function (nums) {
  let count = 0
  let k = 0
  for (let i = 1; i <= nums.length; i++) {
    if (count < 2) {
      count++
    }
    if (nums[i] !== nums[i - 1]) {
      while (count) {
        nums[k] = nums[i - 1]
        k++
        count--
      }
    }
  }
  return k
}
// 1 1 2 2 2 3 3 3 4 4 5 5 5 5

// 1 1 2 2 3 3 4 4 5
const arr = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5]
console.log(removeDuplicates(arr))
console.log(arr)

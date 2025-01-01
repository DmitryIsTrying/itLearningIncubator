var removeElement = function (nums, val) {
  const length = nums.length
  const arr = [...nums]
  nums.length = 0
  for (let i = 0; i < length; i++) {
    if (arr[i] !== val) {
      nums.push(arr[i])
    }
  }
  console.log(nums)

  return length - nums.length
}
const arr = [0, 1, 2, 2, 3, 0, 4, 2]
console.log(removeElement(arr, 2))
console.log(arr)

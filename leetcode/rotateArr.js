var rotate = function (nums, k) {
  nums.unshift(...nums.splice(nums.length - (k % nums.length), k))
}
const arr = [1, 2]
console.log(rotate(arr, 5))
console.log(arr)

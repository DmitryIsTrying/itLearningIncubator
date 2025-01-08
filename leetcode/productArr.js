var productExceptSelf = function (nums) {
  const indexOfZero = nums.indexOf(0)
  if (indexOfZero !== -1) {
    const indexOfZeroSecond = nums.indexOf(0, indexOfZero + 1)

    if (indexOfZeroSecond !== -1) {
      return Array(nums.length).fill(0)
    } else {
      const arr = Array(nums.length).fill(0)

      arr[indexOfZero] = nums.reduce((acc, el) => {
        if (el !== 0) {
          acc *= el
        }
        return acc
      }, 1)
      return arr
    }
  }
  const allMupltiply = nums.reduce((acc, el) => acc * el)
  return nums.map((_, index, arr) => {
    return allMupltiply / arr[index]
  })
}
console.log(productExceptSelf([0, 2, 3, 4]))

var countFairPairs = function (nums, lower, upper) {
  nums.sort((a, b) => a - b)

  const countPairsWithSumLessThan = (target) => {
    let left = 0,
      right = nums.length - 1
    let count = 0

    while (left < right) {
      const sum = nums[left] + nums[right]
      if (sum < target) {
        count += right - left
        left++
      } else {
        right--
      }
    }

    return count
  }

  return countPairsWithSumLessThan(upper + 1) - countPairsWithSumLessThan(lower)
}

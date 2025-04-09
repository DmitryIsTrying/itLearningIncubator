var minOperations = function (nums, k) {
  nums.sort((a, b) => b - a)
  const seen = new Set()
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num === k) continue
    if (num < k) return -1

    if (!seen.has(num)) {
      result++
      seen.add(num)
    }
  }

  return result
}

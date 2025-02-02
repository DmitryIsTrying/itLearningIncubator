var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0

  const numSet = new Set(nums)
  let longestStreak = 0

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num
      let currentStreak = 1

      while (numSet.has(currentNum + 1)) {
        currentNum++
        currentStreak++
      }

      longestStreak = Math.max(longestStreak, currentStreak)
    }
  }

  return longestStreak
}
const nums = [0, -1]
console.log(longestConsecutive(nums))

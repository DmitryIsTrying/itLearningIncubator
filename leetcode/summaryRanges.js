var summaryRanges = function (nums) {
  const res = []
  let arrLength = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] - 1) {
      arrLength++
    } else {
      if (arrLength === 0) {
        res.push(`${nums[i]}`)
      } else {
        res.push(`${nums[i - arrLength]}->${nums[i]}`)
      }
      arrLength = 0
    }
  }
  return res
}
const nums = [0, 2, 3, 4, 6, 8, 9]
console.log(summaryRanges(nums))

var containsNearbyDuplicate = function (nums, k) {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true
    }

    set.add(nums[i])

    if (set.size > k) {
      set.delete(nums[i - k])
    }
  }
  return false
}
const nums = [1, 2, 3, 1],
  k = 3
console.log(containsNearbyDuplicate(nums, k))

//  nums[i] == nums[j] and abs(i - j) <= k.

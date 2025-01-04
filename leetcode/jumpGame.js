var canJump = function (nums) {
  let maxReach = 0 // Максимальная позиция, до которой можем добраться
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false // Если не можем добраться до текущего индекса
    maxReach = Math.max(maxReach, i + nums[i]) // Обновляем maxReach
    if (maxReach >= nums.length - 1) return true // Если можем добраться до конца
  }
  return false
}
console.log(canJump([2, 3, 0, 1, 4]))

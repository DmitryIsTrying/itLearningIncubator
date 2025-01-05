function jump(nums) {
  let jumps = 0 // Количество прыжков
  let currentEnd = 0 // Текущая граница, до которой можно добраться за текущее количество прыжков
  let farthest = 0 // Максимальная позиция, до которой можно добраться за текущее количество прыжков

  for (let i = 0; i < nums.length - 1; i++) {
    // Обновляем максимальную позицию, до которой можно добраться
    farthest = Math.max(farthest, i + nums[i])

    // Если достигли текущей границы, делаем прыжок
    if (i === currentEnd) {
      jumps++
      currentEnd = farthest

      // Если текущая граница уже достигла или превысила последний элемент, выходим
      if (currentEnd >= nums.length - 1) {
        break
      }
    }
  }

  return jumps
}
console.log(jump([1, 3, 2]))

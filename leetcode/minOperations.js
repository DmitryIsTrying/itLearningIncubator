var minOperations = function (grid, x) {
  const m = grid.length
  const n = grid[0].length
  const nums = []

  // Преобразуем сетку в одномерный массив
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      nums.push(grid[i][j])
    }
  }

  // Проверяем, возможна ли унификация
  const base = nums[0] % x
  for (const num of nums) {
    if (num % x !== base) {
      return -1
    }
  }

  // Приводим числа к "базовому" виду (упрощаем расчёты)
  const normalized = nums.map((num) => (num - base) / x)
  normalized.sort((a, b) => a - b)

  // Находим медиану (оптимальное k)
  const median = normalized[Math.floor(normalized.length / 2)]

  // Считаем количество операций
  let operations = 0
  for (const num of normalized) {
    operations += Math.abs(num - median)
  }

  return operations
}

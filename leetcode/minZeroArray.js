/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
  const n = nums.length
  let low = 0,
    high = queries.length
  let result = -1

  // Бинарный поиск по количеству запросов
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const diff = new Array(n + 1).fill(0)

    // Применяем первые mid запросов
    for (let i = 0; i < mid; i++) {
      const [l, r, val] = queries[i]
      diff[l] += val
      if (r + 1 < n) {
        diff[r + 1] -= val
      }
    }

    // Применяем изменения к nums
    let current = 0
    let isZeroArray = true
    for (let i = 0; i < n; i++) {
      current += diff[i]
      if (nums[i] - current > 0) {
        isZeroArray = false
        break
      }
    }

    // Если массив стал нулевым, обновляем результат и ищем меньшее k
    if (isZeroArray) {
      result = mid
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return result
}

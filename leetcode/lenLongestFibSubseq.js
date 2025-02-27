var lenLongestFibSubseq = function (arr) {
  const n = arr.length
  const indexMap = new Map() // Хранит индекс каждого числа в массиве
  for (let i = 0; i < n; i++) {
    indexMap.set(arr[i], i)
  }

  const dp = new Map() // Хранит длину последовательности для каждой пары (i, j)
  let max = 0

  // Перебираем все пары (i, j)
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < j; i++) {
      const diff = arr[j] - arr[i] // Ищем число, которое могло бы быть перед arr[i]
      if (diff < arr[i] && indexMap.has(diff)) {
        const k = indexMap.get(diff) // Индекс числа diff
        const length = (dp.get(k * n + i) || 2) + 1 // Обновляем длину последовательности
        dp.set(i * n + j, length) // Сохраняем длину для пары (i, j)
        max = Math.max(max, length) // Обновляем максимальную длину
      }
    }
  }

  return max >= 3 ? max : 0 // Возвращаем 0, если последовательность короче 3 элементов
}

console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8])) // 5
console.log(lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18])) // 3

//  *
// [1, 2, 3, 4, 5, 6, 7, 8]
//  *

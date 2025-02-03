var findMinArrowShots = function (points) {
  if (points.length === 0) return 0

  // Сортируем интервалы по конечной точке
  points.sort((a, b) => a[1] - b[1])

  let arrows = 1 // Минимум одна стрела нужна
  let end = points[0][1]

  for (let i = 1; i < points.length; i++) {
    // Если текущий интервал не пересекается с предыдущим, нужна новая стрела
    if (points[i][0] > end) {
      arrows++
      end = points[i][1]
    }
  }

  return arrows
}
const points = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
]
console.log(findMinArrowShots(points))

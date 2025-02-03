var insert = function (intervals, newInterval) {
  intervals.push(newInterval)
  if (intervals.length === 0) return []

  intervals.sort((a, b) => a[0] - b[0])

  const res = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    const last = res[res.length - 1]
    const current = intervals[i]

    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1])
    } else {
      res.push(current)
    }
  }

  return res
}
const intervals = [
    [1, 3],
    [6, 9],
  ],
  newInterval = [2, 5]
console.log(insert(intervals, newInterval))

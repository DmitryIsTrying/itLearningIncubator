var merge = function (intervals) {
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
  [2, 6],
  [8, 10],
  [15, 18],
]
console.log(merge(intervals))

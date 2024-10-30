String.prototype.timeTo = function () {
  return this.split(', ').map((time) => {
    return time
      .split('|')
      .map((el, i) => {
        if (i === 0) return Number(el) * 3600
        if (i === 1) return Number(el) * 60
        if (i === 2) return Number(el)
      })
      .reduce((acc, sec) => (acc += sec))
  })
}

Number.timeFrom = function (time) {
  let h = Math.floor(time / 3600)
  time -= h * 3600
  if (h.toString().length === 1) h = '0' + h
  let m = Math.floor(time / 60)
  time -= m * 60
  if (m.toString().length === 1) m = '0' + m
  let s = Math.floor(time)
  if (s.toString().length === 1) s = '0' + s
  return `${h}|${m}|${s}`
}

function stat(strg) {
  if (!strg) return strg
  const numsArr = strg.timeTo()
  const range = Math.max(...numsArr) - Math.min(...numsArr)
  const average = numsArr.reduce((acc, num) => (acc += num)) / numsArr.length
  numsArr.sort((a, b) => a - b)
  let median
  if (numsArr.length % 2 === 0) {
    median = (numsArr[numsArr.length / 2] + numsArr[numsArr.length / 2 - 1]) / 2
  } else {
    median = numsArr[Math.floor(numsArr.length / 2)]
  }

  return `Range: ${Number.timeFrom(range)} Average: ${Number.timeFrom(average)} Median: ${Number.timeFrom(median)}`
}

console.log(stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17'))

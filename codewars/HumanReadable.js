function formatDuration(seconds) {
  if (!seconds) return 'now'
  let years = 0
  let days = 0
  let hours = 0
  let minute = 0
  let sec = 0

  years = Math.floor(seconds / 31536000)

  const DHMS = seconds - years * 31536000

  days = Math.floor(DHMS / 86400)
  const HMS = DHMS - days * 86400
  hours = Math.floor(HMS / 3600)
  const MS = HMS - hours * 3600
  minute = Math.floor(MS / 60)
  sec = MS - minute * 60
  return readData(years, days, hours, minute, sec)
}

function readData(...times) {
  const arrayData = ['year', 'day', 'hour', 'minute', 'second']
  const newSortedData = []

  times = times.filter((num, i) => {
    if (num > 0) {
      newSortedData.push(arrayData[i])
      return true
    }
  })

  let resultStr = ''
  for (let i = 0; i < times.length; i++) {
    resultStr += times[i] + ' ' + newSortedData[i] + (times[i] > 1 ? 's' : '')
    resultStr += i + 2 === times.length ? ' and ' : i + 1 === times.length ? '' : ', '
  }
  return resultStr
}

// const arr = [1, 2, 3, 4, 5, 6]

// console.log(arr.filter((num) => 1))

console.log(foo)

var foo = () => {
  return 'test'
}

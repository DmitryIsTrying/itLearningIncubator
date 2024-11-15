String.prototype.myLocaleCompare = function (str) {
  switch (this[0] + str[0]) {
    case '2=': {
      return -1
    }
    case '1=': {
      return -1
    }
    case '=2': {
      return 1
    }
    case '=1': {
      return 1
    }
    default:
      return this.localeCompare(str)
  }
}

function mix(s1, s2) {
  const rS1 = getChars(s1)
  const rS2 = getChars(s2)
  const chars = [...new Set([...Object.keys(rS1), ...Object.keys(rS2)])]
  const result = chars.map((el) => {
    if (rS1[el] > rS2[el] || rS2[el] === undefined) {
      return '1:' + el.repeat(rS1[el])
    }
    if (rS1[el] < rS2[el] || rS1[el] === undefined) {
      return '2:' + el.repeat(rS2[el])
    }

    return '=:' + el.repeat(rS1[el] || rS2[el])
  })
  result.sort((a, b) => {
    if (a.length === b.length) {
      return a.myLocaleCompare(b)
    }
    return b.length - a.length
  })

  return result.join('/')
}

function getChars(str) {
  const objS1 = str.split('').reduce((acc, el) => {
    if (el.charCodeAt() > 96 && el.charCodeAt() < 123) {
      if (acc[el]) {
        acc[el]++
      } else {
        acc[el] = 1
      }
    }
    return acc
  }, {})
  const filterS1 = Object.entries(objS1).reduce((acc, el) => {
    if (el[1] !== 1) {
      acc[el[0]] = el[1]
    }
    return acc
  }, {})

  return filterS1
}

console.log(mix('looping is fun but dangerous', 'less dangerous than coding'))

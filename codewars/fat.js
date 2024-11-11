function orderWeight(strng) {
  const numbers = []
  strng.replace(/\d+/g, (str) => {
    numbers.push({
      str,
      num: str.split('').reduce((acc, n) => {
        return acc + +n
      }, 0),
    })
  })
  numbers.sort((a, b) => {
    if (a.num > b.num) return 1
    if (a.num === b.num) {
      if (a.str > b.str) return 1
    }
    return -1
  })
  return numbers.map((obj) => obj.str).join(' ')
}

console.log(orderWeight('56 65 74 100 99 68 86 180 90'))

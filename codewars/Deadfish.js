function parse(data) {
  const result = []
  data.split('').reduce((acc, el) => {
    if (el === 'i') return acc + 1
    if (el === 'd') return acc - 1
    if (el === 's') return acc ** 2
    if (el === 'o') result.push(acc)
    return acc
  }, 0)
  return result
}

console.log(parse('iiisdoso'))

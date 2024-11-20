function int32ToIp(int32) {
  const str = int32.toString(2).padStart(32, '0')
  let result = []
  str
    .split('')
    .reduce(
      (acc, el, i, arr) => {
        if (acc.counter > 7) {
          acc.result.push([...acc.template])

          acc.template.length = 0

          acc.counter = 1
        } else {
          acc.counter += 1
        }
        acc.template.push(el)
        if (i === arr.length - 1) {
          acc.result.push(acc.template)
        }
        return acc
      },
      { counter: 0, result: [], template: [] }
    )
    .result.forEach((arr) => {
      result.push(parseInt(arr.join(''), 2))
    })
  return result.join('.')
}
console.log(int32ToIp(2149583361))

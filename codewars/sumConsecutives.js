var sumConsecutives = (s) =>
  s.reduce(
    (acc, el) => {
      el === acc.prev ? (acc.result[acc.result.length - 1] += el) : acc.result.push(el)
      acc.prev = el
      return acc
    },
    { result: [], prev: null }
  ).result

console.time('Sum nums')
console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1]))
console.timeEnd('Sum nums')

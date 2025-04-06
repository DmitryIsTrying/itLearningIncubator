function solution(arr) {
  function inner(a1, a2) {
    const a = a1[0] || 0
    const b = a2[0] || 0

    if (a === b) {
      return inner(a1.slice(1), a2.slice(1))
    } else {
      return a - b
    }
  }

  arr.sort((a, b) => {
    const arr1 = a.split('.')
    const arr2 = b.split('.')

    return inner(arr1, arr2)
  })

  return arr
}

const e = ['1.1', '8.1', '8.3', '1.2', '2', '2.3.1', '2.5.1', '2.5', '1.2.1', '8']
console.log(solution(e))

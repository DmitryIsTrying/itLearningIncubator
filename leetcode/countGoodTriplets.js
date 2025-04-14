var countGoodTriplets = function (arr, a, b, c) {
  const result = []
  function backtrack(acc, start) {
    if (acc.length === 3) {
      result.push([...acc])
      return
    }

    for (let i = start; i < arr.length; i++) {
      acc.push(arr[i])
      backtrack(acc, i + 1)
      acc.pop()
    }
  }

  backtrack([], 0)
  let counter = 0
  for (const [x, y, z] of result) {
    if (Math.abs(x - y) <= a && Math.abs(y - z) <= b && Math.abs(x - z) <= c) {
      counter++
    }
  }

  return counter
}

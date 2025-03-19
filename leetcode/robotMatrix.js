function robotMatrix(n, m) {
  let uniqueComputations = 1

  function helper(n, m, cache) {
    if (n < 1 || m < 1) {
      return 0
    }

    if (n === 1 && m === 1) {
      return 1
    }

    if (cache[`${n}-${m}`] === undefined) {
      uniqueComputations++
      cache[`${n}-${m}`] = helper(n - 1, m, cache) + helper(n, m - 1, cache)
    }

    return cache[`${n}-${m}`]
  }

  const result = helper(n, m, {})
  console.log('UNIQUE COMPUTATIONS:', uniqueComputations)
  return result
}

console.log(robotMatrix(30, 30))

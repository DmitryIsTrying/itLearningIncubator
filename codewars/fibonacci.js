function nthFibo(n) {
  let result = [0, 1]
  for (let i = 0; i < n - 2; i++) {
    result.push(result[i] + result[i + 1])
  }
  return result[n - 1]
}

console.log(nthFibo(4))

function isPrime(num) {
  if (num <= 1) return false
  if (num === 2 || num === 3) return true
  if (num % 2 === 0 || num % 3 === 0) return false
  const sq = Math.sqrt(num)
  for (let i = 5; i <= sq; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false
  }
  return true
}

function minimumNumber(numbers) {
  console.log(numbers)

  const sum = numbers.reduce((acc, el) => acc + el)
  if (isPrime(sum)) return 0
  let leftNum = undefined
  let count = 1
  while (true) {
    if (isPrime(sum - count)) {
      leftNum = sum - count
      break
    }
    count++
  }
  count = 1
  let rightNum = undefined
  while (true) {
    if (isPrime(sum + count)) {
      rightNum = sum + count
      break
    }
    count++
  }
  if (sum - leftNum < sum - rightNum) {
    return sum - leftNum
  }
  if (sum - leftNum > sum - rightNum) {
    return rightNum - sum
  }
}
console.log(
  minimumNumber([
    24, 1, 5, 35, 47, 4, 9, 58, 5, 3, 686, 682, 6, 24, 142, 47, 3, 9, 94, 38, 10, 6, 5, 63, 160, 46, 892, 157, 64, 969,
    574, 674, 9, 61, 4, 7, 65, 62, 268, 23, 874, 515, 19, 5, 4, 1, 6, 2, 8, 29, 100, 289, 37, 91, 57, 30, 953, 607, 29,
    64, 2, 2, 10, 854, 7, 678, 10, 4, 157, 26, 9, 8, 27, 757, 3, 67, 6, 286, 40, 589, 6, 49, 9, 377, 29, 1, 1, 25, 17,
    775, 10,
  ])
)

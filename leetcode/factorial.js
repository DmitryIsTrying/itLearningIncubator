function test(n) {
  return n === 1 ? 1 : n * test(n - 1)
}
// console.log(test(5))

function test2(arr) {
  const n = arr.length + 1
  const sum = arr.reduce((acc, el) => acc + el)
  return (n * (n + 1)) / 2 - sum
}
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45
// console.log(test2([1, 2, 3, 4, 6, 7, 8, 9]))
function test3(arr) {
  let before = 1
  const result = Array(arr.length).fill(1)

  for (let i = 0; i < arr.length; i++) {
    result[i] *= before
    before *= arr[i]
  }
  let after = 1
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= after
    after *= arr[i]
  }
  return result
}

// console.log(test3([1, 2, 3, 4]))

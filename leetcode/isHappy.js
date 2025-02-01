var isHappy = function (n) {
  const set = new Set()
  let current = n
  while (true) {
    const num = next(current)
    if (num === 1) {
      return true
    }

    if (set.has(num)) {
      return false
    }

    set.add(num)
    current = num
  }
}

function next(n) {
  const nums = Array.from(n.toString(), Number)
  nums.forEach((_, i, arr) => {
    arr[i] = arr[i] ** 2
  })
  return nums.reduce((acc, num) => acc + num)
}
const n = 19
console.log(isHappy(n))

var nbrOfLaps = function (x, y) {
  console.log(x, y)

  if (x === y) return [1, 1]
  let result = []
  const check = x > y ? x : y
  for (let i = 2; i <= check; i++) {
    if (x % i === 0 && y % i === 0) {
      result = [y / i, x / i]
    }
  }
  return result.length ? result : [y, x]
}
console.log(nbrOfLaps(4, 6))

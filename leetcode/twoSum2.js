var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    const index = numbers.indexOf(target - numbers[i], i + 1)

    if (~index) {
      return [i + 1, index + 1]
    }
  }
}
console.log(twoSum([0, 0, 3, 4], 0))

function twosDifference(input) {
  let result = []
  for (let i = 0; i < input.length; i++) {
    if (input.includes(input[i] + 2)) {
      result.push([input[i], input[i] + 2])
    }
  }
  return result.sort((a, b) => a[0] - b[0])
}
console.log(twosDifference([4, 3, 1, 5, 6]))

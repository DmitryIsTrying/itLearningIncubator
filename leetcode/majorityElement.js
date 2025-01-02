var majorityElement = function (nums) {
  const ElementsInArray = nums.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++
    } else {
      acc[el] = 1
    }
    return acc
  }, {})
  let max = null
  let result = undefined
  for (const key in ElementsInArray) {
    if (ElementsInArray[key] > max) {
      max = ElementsInArray[key]
      result = key
    }
  }

  return Number(result)
}
console.log(majorityElement([3, 2, 3]))

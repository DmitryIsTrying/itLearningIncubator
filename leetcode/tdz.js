function solution(input) {
  const inputs = input.split('\n')
  let isLeftArr = true
  const left = []
  const right = []

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] === '') {
      isLeftArr = false
      continue
    }
    if (isLeftArr) {
      left.push(inputs[i])
    } else {
      right.push(inputs[i])
    }
  }

  const rules = left.map((rule) => rule.split('|'))

  function isValid(nums, rules) {
    const numList = nums.split(', ')
    const numToIndex = new Map()

    for (let i = 0; i < numList.length; i++) {
      numToIndex.set(numList[i], i)
    }

    for (const [first, second] of rules) {
      const indexOfFirst = numToIndex.get(first)
      const indexOfSecond = numToIndex.get(second)

      if (indexOfFirst !== undefined && indexOfSecond !== undefined) {
        if (indexOfFirst > indexOfSecond) {
          return false
        }
      }
    }
    return true
  }

  let result = 0

  for (const sequence of right) {
    if (isValid(sequence, rules)) {
      result++
    }
  }

  return result
}

module.exports = solution

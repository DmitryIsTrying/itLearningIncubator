function removeDuplicates(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    const index = Math.abs(arr[i]) - 1
    if (arr[index] > 0) {
      arr[index] = -arr[index]
      result.push(Math.abs(arr[i]))
    }
  }

  return result
}

const d = [1, 2, 1, 1, 7, 3, 6, 6]
console.log(removeDuplicates(d))

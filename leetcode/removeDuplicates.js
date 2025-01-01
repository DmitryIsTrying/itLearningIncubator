var removeDuplicates = function (nums) {
  const uniqArr = []
  const arr = [...nums]
  nums.length = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== uniqArr[arr[i]]) {
      nums.push(arr[i])
      uniqArr[arr[i]] = arr[i]
    }
  }

  return nums.length
}

console.log(removeDuplicates([1, 1, 2]))

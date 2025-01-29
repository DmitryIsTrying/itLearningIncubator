var maxSequence = function (arr) {
  if (!arr.length) return 0

  let maxEndingHere = arr[0]
  let maxSoFar = arr[0]

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i])
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
  }

  // If all numbers are negative, return 0 (assuming an empty subarray is allowed)
  return maxSoFar < 0 ? 0 : maxSoFar
}

console.log(maxSequence([-2, -1, -3, -4, 1, -2, -1, -5, -4])) // Output: 1

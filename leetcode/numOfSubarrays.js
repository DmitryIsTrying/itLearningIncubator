var numOfSubarrays = function (arr) {
  let prefix = 0
  let odd = 0
  let even = 1
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    prefix += arr[i]
    if (prefix % 2 !== 0) {
      result += even
      odd++
    } else {
      result += odd
      even++
    }
  }
  return result % (10 ** 9 + 7)
}
console.log(numOfSubarrays([1, 3, 5]))
// prefix 0 1 4 9
// odd 0 1 2
// even 1 1 2

// result 0 1 2 4

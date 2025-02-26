function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    console.log(mid)
    if (arr[mid] === target) {
      return mid
    }

    if (arr[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}
console.log(binarySearch([1, 5, 8, 9, 23, 45, 64, 69], 23))
// 3
// 5
// 4
// 4

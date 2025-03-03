function binary1(arr, target) {
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

function binary2(arr, target) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
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
const arr = [1, 5, 6, 8, 99, 124, 566]
console.log(binary1(arr, 124))
console.log(binary2(arr, 124))

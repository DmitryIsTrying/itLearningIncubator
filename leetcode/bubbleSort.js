function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        isSwapped = true
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    if (!isSwapped) {
      break
    }
  }
}
const arr = [2, 5, 1, 3, 8, 4, 6, 0]
bubbleSort(arr)
console.log(arr)

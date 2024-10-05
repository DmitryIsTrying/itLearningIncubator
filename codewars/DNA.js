const array = [1, 2, 1, 3, 45, 1, 42, 124, 9, 6]

array.map((_, i, _) => {
  console.log(arr)
})

// function bubbleSort(arr, isUp = false) {
//   const n = arr.length
//   let swapped

//   for (let j = 0; j < n - 1; j++) {
//     swapped = false
//     for (let i = 0; i < n - j - 1; i++) {
//       if (isUp ? arr[i] > arr[i + 1] : arr[i] < arr[i + 1]) {
//         ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//         swapped = true
//       }
//     }

//     if (!swapped) {
//       break
//     }
//   }
//   return arr
// }
// console.log(bubbleSort(array))

// let counter = 0

// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let swapped = false
//     for (let j = 0; j < array.length - i - 1; j++) {
//       counter++

//       if (array[j] > array[j + 1]) {
//         ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
//         swapped = true
//       }
//     }
//     if (!swapped) break
//   }
//   return array
// }

// console.log(bubbleSort([4, 5, 2, 1, 5, 0, 96, 6, 4, 643, 634]), counter)
const z = {
  value: 3,
  next: {
    value: 4,
    next: null,
  },
}
const list = {
  value: 1,
  next: {
    value: 2,
    next: z,
  },
}
list.next.next.next.next = null
console.log(z)
console.log(list)

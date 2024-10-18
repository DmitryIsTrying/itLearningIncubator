// snail = function (array) {
//   const result = []
//   for (let i = 0; i < array.length / 2; i++) {
//     // x direction
//     result.push(array[i].slice(i === 0 ? i : i - 1, array[i].length - i))
//     // y direction
//     let j = array.length - 1 - i
//     let reverseArr = []
//     while (j > i) {
//       reverseArr.push(array[j][array.length - 1 - i])

//       j--
//     }
//     result.push(reverseArr.reverse())
//     // x reverse direction
//     result.push(array[array.length - 1 - i].slice(i, array[i].length - i - 1).reverse())
//     // y reverse direction
//     let m = array.length - 2 - i
//     let arrY = []
//     while (m > i + 1) {
//       arrY.push(array[m][i])
//       m--
//     }
//     result.push(arrY)
//   }

//   return result.flat()
// }

// console.log(
//   snail([
//     [1, 2, 3, 4, 5, 6],
//     [20, 21, 22, 23, 24, 7],
//     [19, 32, 33, 34, 25, 8],
//     [18, 31, 36, 35, 26, 9],
//     [17, 30, 29, 28, 27, 10],
//     [16, 15, 14, 13, 12, 11],
//   ])
// )

function snail(array) {
  let result = []

  while (array.length) {
    // Берем и удаляем первый ряд
    result = result.concat(array.shift())

    // Берем последний элемент каждого из оставшихся рядов
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop())
    }

    // Берем и удаляем последний ряд в обратном порядке
    if (array.length) {
      result = result.concat(array.pop().reverse())
    }

    // Берем первый элемент каждого оставшегося ряда в обратном порядке
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift())
    }
  }

  return result
}

// Пример использования:
const array1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log(snail(array1)) // [1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log(array1)

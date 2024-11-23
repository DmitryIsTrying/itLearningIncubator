// function removeNb(n) {
//   const sum = (n * (n + 1)) / 2

//   const result = []

//   for (let a = 1; a <= n; a++) {
//     const b = (sum - a) / (a + 1)
//     if (Number.isInteger(b) && b >= 1 && b <= n) {
//       result.push([a, b])
//     }
//   }

//   return result
// }
// const pr2 = Promise.resolve(0)
// const pr1 = Promise.resolve(10)

// pr2
//   .then((res) => {
//     console.log(res)
//     return res + 2
//   })
//   .then((res) => {
//     console.log(res)
//     return res + 2
//   })
//   .then((res) => {
//     console.log(res)
//     return pr1
//   })

//   .then((res) => {
//     console.log(res)
//     return res + 1
//   })
//   .then((res) => {
//     console.log(res)
//     return res + 1
//   })
//   .then((res) => {
//     console.log(res)
//     return res + 1
//   })

// const pr = new Promise((res, rej) => {
//   res(2)
// }).then(console.log)
// setTimeout(() => {
//   console.log(1)
// })
//10 0 12 1 14 2

// const pr = new handlePromise()
// handlePromise['Create Promise']()
function isSymmetric(matrix) {
  const n = matrix.length

  // Проверяем, что матрица квадратная
  if (n !== matrix[0].length) {
    return false
  }

  // Проверяем симметричность
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j)

      if (matrix[i][j] !== matrix[j][i]) {
        return false
      }
    }
  }

  return true
}

const symmetricMatrix = [
  [23, 2, 3],
  [2, 4, 5],
  [3, 5, 42],
]
console.log(isSymmetric(symmetricMatrix))

// class Pascal {
//   static p(n, k) {
//     if (k < 0 || k > n) return 0

//     return this.factorial(n) / (this.factorial(k) * this.factorial(n - k))
//   }

//   static factorial(num) {
//     if (num === 0) return 1

//     return num * this.factorial(num - 1)
//   }

//   static triangle(num) {
//     if (num <= 0) return []

//     return Array.from({ length: num }, (_, i) => {
//       return Array.from({ length: i + 1 }, (_, k) => {
//         return this.p(i, k)
//       })
//     }).flat(Infinity)
//   }
// }

// function pascalsTriangle(n) {
//   return Pascal.triangle(n)
// }

// console.log(pascalsTriangle(6))

function pascalsTriangle(n) {
  let triangle = []
  for (let row = 0; row < n; row++) {
    let currentRow = []
    for (let col = 0; col <= row; col++) {
      if (col === 0 || col === row) {
        currentRow.push(1)
      } else {
        currentRow.push(triangle[row - 1][col - 1] + triangle[row - 1][col])
      }
    }
    triangle.push(currentRow)
  }
  return triangle.flat()
}

var rotate = function (matrix) {
  let res = []
  for (let i = 0; i < matrix.length; i++) {
    let box = []
    for (let j = matrix.length - 1; j >= 0; j--) {
      box.push(matrix[j][i])
    }
    res.push(box)
  }
  matrix.length = 0
  matrix.push(...res)
}
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
rotate(matrix)

console.log(matrix)

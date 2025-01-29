var setZeroes = function (matrix) {
  const rows = matrix.length
  const cols = matrix[0].length

  const zeroRows = new Array(rows).fill(false)
  const zeroCols = new Array(cols).fill(false)

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        zeroRows[i] = true
        zeroCols[j] = true
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (zeroRows[i] || zeroCols[j]) {
        matrix[i][j] = 0
      }
    }
  }
}
const matrix = [
  [0, 0, 0, 5],
  [4, 3, 1, 4],
  [0, 1, 1, 4],
  [1, 2, 1, 3],
  [0, 0, 1, 1],
]
console.log(setZeroes(matrix))
console.log(matrix)

function sudoku(puzzle) {
  const size = 9
  const boxSize = 3

  function isValid(board, row, col, num) {
    for (let i = 0; i < size; i++) {
      if (board[row][i] === num || board[i][col] === num) {
        return false
      }
    }

    const startRow = Math.floor(row / boxSize) * boxSize
    const startCol = Math.floor(col / boxSize) * boxSize

    for (let i = 0; i < boxSize; i++) {
      for (let j = 0; j < boxSize; j++) {
        if (board[startRow + i][startCol + j] === num) {
          return false
        }
      }
    }

    return true
  }

  function solve(board) {
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= size; num++) {
            if (isValid(board, row, col, num)) {
              board[row][col] = num

              if (solve(board)) {
                return true
              }

              board[row][col] = 0
            }
          }
          return false
        }
      }
    }
    return true
  }

  solve(puzzle)
  return puzzle
}

console.log(
  sudoku([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ])
)

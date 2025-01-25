var isValidSudoku = function (board) {
  //  isValidRows
  for (let i = 0; i < board.length; i++) {
    const filteredSpaces = board[i].filter((char) => char !== '.')
    if (filteredSpaces.length !== [...new Set(filteredSpaces)].length) {
      return false
    }
  }
  // isValidColumns

  for (let i = 0; i < board.length; i++) {
    let boardColumn = []
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] !== '.') {
        boardColumn.push(board[j][i])
      }
    }
    if (boardColumn.length !== [...new Set(boardColumn)].length) {
      return false
    }
  }

  // isValidSquare
  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      let boardSquare = []

      for (let i = row; i < row + 3; i++) {
        for (let j = col; j < col + 3; j++) {
          boardSquare.push(board[i][j])
        }
      }

      boardSquare = boardSquare.filter((char) => char !== '.')

      if (boardSquare.length !== [...new Set(boardSquare)].length) {
        return false
      }
    }
  }

  return true
}
const board = [
  ['.', '.', '.', '.', '.', '.', '5', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['9', '3', '.', '.', '2', '.', '4', '.', '.'],
  ['.', '.', '7', '.', '.', '.', '3', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '3', '4', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '3', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '5', '2', '.', '.'],
]
console.log(isValidSudoku(board))

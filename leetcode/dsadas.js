/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    if (!isValidRow(i)) {
      return false
    }
  }

  function isValidRow(i) {
    const row = board[i]

    const set = new Set()

    for (let j = 0; j < row.length; j++) {
      if (!isValid(row[j], set)) {
        return false
      }
    }
    return true
  }

  for (let i = 0; i < board[0].length; i++) {
    if (!isValidColumn(i)) {
      return false
    }
  }

  function isValidColumn(i) {
    const set = new Set()

    for (let j = 0; j < board.length; j++) {
      const column = board[j][i]

      if (!isValid(column, set)) {
        return false
      }
    }
    return true
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!isValidSquare(j * 3, i * 3)) {
        return false
      }
    }
  }

  function isValidSquare(startRow, starColumn) {
    const set = new Set()
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cell = board[i + starColumn][j + startRow]

        if (!isValid(cell, set)) {
          return false
        }
      }
    }

    return true
  }

  function isValid(cell, set) {
    if (cell === '.') {
      return true
    }

    if (set.has(cell)) {
      return false
    }

    set.add(cell)
    return true
  }

  return true
}

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '3', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

console.log(isValidSudoku(board))

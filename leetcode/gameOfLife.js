var gameOfLife = function (board) {
  const newState = []
  for (let i = 0; i < board.length; i++) {
    let row = []
    for (let j = 0; j < board[0].length; j++) {
      row.push(nextCellState(board, { i, j }))
    }
    newState.push(row)
  }
  board.length = 0
  board.push(...newState)
}

function nextCellState(board, { i, j }) {
  const roommates = []

  roommates.push(board[i - 1]?.[j - 1] || 0)
  roommates.push(board[i - 1]?.[j + 1] || 0)
  roommates.push(board[i - 1]?.[j] || 0)
  roommates.push(board[i]?.[j - 1] || 0)
  roommates.push(board[i]?.[j + 1] || 0)
  roommates.push(board[i + 1]?.[j - 1] || 0)
  roommates.push(board[i + 1]?.[j + 1] || 0)
  roommates.push(board[i + 1]?.[j] || 0)

  const allive = roommates.filter((num) => num === 1)
  if (allive.length < 2 || allive.length > 3) {
    return 0
  }

  if (allive.length === 3) return 1

  return board[i][j]
}
const board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
]
gameOfLife(board)
console.log(board)

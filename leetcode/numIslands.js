/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islands = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        deleteIsland(i, j)
        islands++
      }
    }
  }

  function deleteIsland(i, j) {
    if (grid[i]?.[j] === '1') {
      grid[i][j] = '0'
      deleteIsland(i - 1, j)
      deleteIsland(i + 1, j)
      deleteIsland(i, j - 1)
      deleteIsland(i, j + 1)
    }
  }

  return islands
}
const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
]
console.log(numIslands(grid))

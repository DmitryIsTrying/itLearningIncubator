class Solution {
  constructor(maze, directions) {
    this.maze = maze
    this.directions = directions
    this.access = {
      N: (arr) => {
        return [arr[0] - 1, arr[1]]
      },
      S: (arr) => {
        return [arr[0] + 1, arr[1]]
      },
      E: (arr) => {
        return [arr[0], arr[1] + 1]
      },
      W: (arr) => {
        return [arr[0], arr[1] - 1]
      },
    }
  }

  labirint() {
    let currentPosition = this.getStartPosition()
    let result = 'Lost'

    for (const direction of this.directions) {
      currentPosition = this.access[direction](currentPosition)
      const positionStatus = this.getPosition(currentPosition)
      console.log(positionStatus)

      if (positionStatus === 'Dead' || positionStatus === 'Finish') {
        result = positionStatus
        break
      }
    }

    return result
  }

  getPosition(currentPosition) {
    if (
      currentPosition[0] < 0 ||
      currentPosition[0] >= this.maze.length ||
      currentPosition[1] < 0 ||
      currentPosition[1] >= this.maze[0].length
    ) {
      return 'Dead'
    }

    const value = this.maze[currentPosition[0]][currentPosition[1]]
    console.log(value)

    switch (value) {
      case 1:
        return 'Dead'
      case 3:
        return 'Finish'
      default:
        return 'Next'
    }
  }

  getStartPosition() {
    for (let i = 0; i < this.maze.length; i++) {
      for (let j = 0; j < this.maze[i].length; j++) {
        if (this.maze[i][j] === 2) {
          return [i, j]
        }
      }
    }
    return null
  }
}

function mazeRunner(maze, directions) {
  const solution = new Solution(maze, directions)
  return solution.labirint()
}

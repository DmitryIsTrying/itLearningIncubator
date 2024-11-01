function matrixAddition(a, b) {
  const c = new Solution(a)

  return c.go(b)
}

class Solution {
  constructor(a) {
    this.a = a
  }
  go(b) {
    const rlyResult = []
    for (let i = 0; i < this.a.length; i++) {
      const result = []
      this.a[i].forEach((_, inx) => {
        result.push(this.a[i][inx] + b[i][inx])
      })
      rlyResult.push(result)
    }
    return rlyResult
  }
}

console.log(
  matrixAddition(
    [
      [1, 2, 3],
      [3, 2, 1],
      [1, 1, 1],
    ],
    [
      [2, 2, 1],
      [3, 2, 3],
      [1, 1, 3],
    ]
  )
)

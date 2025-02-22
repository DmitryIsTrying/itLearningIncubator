/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
  const stack = []
  let i = 0

  const getNumber = () => {
    let numStr = ''
    while (i < traversal.length && traversal[i] !== '-') {
      numStr += traversal[i]
      i++
    }
    return parseInt(numStr, 10)
  }

  const getDepth = () => {
    let depth = 0
    while (i < traversal.length && traversal[i] === '-') {
      depth++
      i++
    }
    return depth
  }

  const rootVal = getNumber()
  const root = new TreeNode(rootVal)
  stack.push(root)

  while (i < traversal.length) {
    const depth = getDepth()
    const val = getNumber()

    const newNode = new TreeNode(val)

    while (stack.length > depth) {
      stack.pop()
    }
    if (stack[stack.length - 1].left === null) {
      stack[stack.length - 1].left = newNode
    } else {
      stack[stack.length - 1].right = newNode
    }

    stack.push(newNode)
  }

  return root
}
// console.log(recoverFromPreorder('1-2--3--4-5--6--7'))

function xor(arr) {
  let result = 0

  for (const el of arr) {
    result ^= el
  }

  return result
}
// console.log(xor([1, 1, 1, 2, 2, 2, 3, 3]))

var sumNumbers = function (root, str = '') {
  if (!root) return 0

  str += root.val

  if (!root.left && !root.right) {
    return parseInt(str, 10)
  }

  return sumNumbers(root.left, str) + sumNumbers(root.right, str)
}

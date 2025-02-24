/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return []
  const queue = [{ node: root, lvl: 0 }]
  let prevLvl = null
  let prevNodeVal = null
  const result = []

  while (queue.length > 0) {
    const { node, lvl: currentLvl } = queue.shift()
    if (prevLvl < currentLvl) {
      result.push(prevNodeVal)
    }
    prevLvl = currentLvl
    prevNodeVal = node.val

    if (node.left) {
      queue.push({ node: node.left, lvl: currentLvl + 1 })
    }

    if (node.right) {
      queue.push({ node: node.right, lvl: currentLvl + 1 })
    }
  }
  result.push(prevNodeVal)
  return result
}

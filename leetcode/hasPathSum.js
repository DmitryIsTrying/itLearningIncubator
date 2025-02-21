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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum, counter = 0) {
  if (!root) {
    return false
  }

  counter += root.val

  if (!root.left && !root.right) {
    return counter === targetSum
  }

  return hasPathSum(root.left, targetSum, counter) || hasPathSum(root.right, targetSum, counter)
}

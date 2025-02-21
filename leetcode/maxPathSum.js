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
 * @return {number}
 */
const maxPathSum = function (root) {
  let maxSum = -Infinity

  const helper = (node) => {
    if (!node) return 0

    // Get the maximum sum from left and right subtrees
    // If it's negative, we don't include it (hence the Math.max with 0)
    const leftMax = Math.max(helper(node.left), 0)
    const rightMax = Math.max(helper(node.right), 0)

    // Calculate the max path sum at the current node
    const currentSum = node.val + leftMax + rightMax

    // Update the global maximum sum if necessary
    maxSum = Math.max(maxSum, currentSum)

    // Return the maximum sum of a path ending at the current node
    return node.val + Math.max(leftMax, rightMax)
  }

  helper(root)
  return maxSum
}

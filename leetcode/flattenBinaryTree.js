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
 * @return {void} Do not return anything, modify root in-place instead.
 */

let previous = null
var flatten = function (root) {
  if (!root) {
    return
  }

  const right = root.right

  if (previous) {
    previous.right = root
    previous.left = null
  }

  previous = root

  flatten(root.left)
  flatten(right)
}

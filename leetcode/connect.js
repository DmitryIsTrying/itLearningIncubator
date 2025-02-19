/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) return root

  let queue = [root]

  while (queue.length > 0) {
    let size = queue.length
    let prev = null

    for (let i = 0; i < size; i++) {
      let node = queue.shift()

      if (prev) {
        prev.next = node
      }
      prev = node

      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }

    // The last node in the level should point to null
    if (prev) {
      prev.next = null
    }
  }

  return root
}

class FindElements {
  #set = new Set([0])
  test = 1
  constructor(root) {
    root.val = 0
    this.aliveTree = root
  }

  set aliveTree(head) {
    if (head.left) {
      head.left.val = 2 * head.val + 1
      this.#set.add(head.left.val)
      this.aliveTree = head.left
    }

    if (head.right) {
      head.right.val = 2 * head.val + 2
      this.#set.add(head.right.val)
      this.aliveTree = head.right
    }
  }

  find(target) {
    return this.#set.has(target)
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

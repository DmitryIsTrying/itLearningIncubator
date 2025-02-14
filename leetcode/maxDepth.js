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
var maxDepth = function (root) {
  // Базовый случай: если дерево пустое, глубина равна 0
  if (root === null) {
    return 0
  }

  // Рекурсивно вычисляем глубину левого и правого поддеревьев
  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)

  // Возвращаем максимальную глубину из двух поддеревьев + 1 (текущий уровень)
  return Math.max(leftDepth, rightDepth) + 1
}

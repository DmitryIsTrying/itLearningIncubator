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
 * @return {boolean}
 */
function isSymmetric(root) {
  if (!root) return true // Если дерево пустое, оно симметрично

  function isMirror(left, right) {
    // Если оба поддерева пусты, они симметричны
    if (!left && !right) return true

    // Если одно из поддеревьев пусто, а другое нет, они не симметричны
    if (!left || !right) return false

    // Проверяем, что значения узлов равны и рекурсивно проверяем их поддеревья
    return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left)
  }

  // Начинаем проверку с левого и правого поддеревьев корня
  return isMirror(root.left, root.right)
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null
  }

  // Первый элемент в preorder - это корень дерева
  const rootVal = preorder[0]
  const root = new TreeNode(rootVal)

  // Находим индекс корня в inorder
  const mid = inorder.indexOf(rootVal)

  // Рекурсивно строим левое и правое поддеревья
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

  return root
}

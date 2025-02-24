var isValidBST = function (root) {
  if (!root) return true

  if (root.left?.val > root.val) return false
  if (root.right?.val < root.val) return false

  return isValidBST(root.right) || isValidBST(root.left)
}

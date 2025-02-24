var searchBST = function (root, val) {
  if (!root) return false

  if (root.val === val) return true

  if (root.val > val) {
    return searchBST(root.left, val)
  } else {
    return searchBST(root.right, val)
  }
}

//   2
// 1   3

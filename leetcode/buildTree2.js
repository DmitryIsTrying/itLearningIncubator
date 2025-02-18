var buildTree = function (inorder, postorder) {
  if (!postorder.length || !inorder.length) {
    return null
  }

  const rootVal = postorder.pop()
  const root = new TreeNode(rootVal)

  const mid = inorder.indexOf(rootVal)

  const leftInorder = inorder.slice(0, mid)
  const rightInorder = inorder.slice(mid + 1)

  const leftPostorder = postorder.slice(0, leftInorder.length)
  const rightPostorder = postorder.slice(leftInorder.length)

  root.left = buildTree(leftInorder, leftPostorder)
  root.right = buildTree(rightInorder, rightPostorder)

  return root
}

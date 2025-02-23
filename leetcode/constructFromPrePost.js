var constructFromPrePost = function (preorder, postorder) {
  if (!preorder.length) return null
  const rootVal = preorder[0]
  const root = new TreeNode(rootVal)
  if (preorder.length === 1) return root
  const leftRootVal = preorder[1]
  const leftRootIndex = postorder.indexOf(leftRootVal)
  const leftPostorder = postorder.slice(0, leftRootIndex + 1)
  const rightPostorder = postorder.slice(leftRootIndex + 1, postorder.length - 1)

  const leftPreorder = preorder.slice(1, leftPostorder.length + 1)
  const rightPreorder = preorder.slice(leftPostorder.length + 1)

  root.left = constructFromPrePost(leftPreorder, leftPostorder)
  root.right = constructFromPrePost(rightPreorder, rightPostorder)

  return root
}

function getNodes(tree, type) {
  const queue = [tree]
  const result = []
  while (queue.length > 0) {
    const root = queue.shift()
    const { type: nodeType, children } = root
    if (nodeType === type) {
      result.push(root)
    }

    for (const node of children) {
      queue.push(node)
    }
  }

  return result
}

// Необходимо написать функциб которая возврвщает все ноды в порядке следования, соответствубщие переданному типу. Глубина вложенности любая.

// return the sum of all values in the tree, including the root
function sumTheTreeValues(root, result = { res: 0 }) {
  result.res += root.value
  for (const key in root) {
    if (root[key]?.__proto__.constructor.name === 'Object') {
      sumTheTreeValues(root[key], result)
    }
  }
  return result.res
}
console.log(
  sumTheTreeValues({
    value: 10,
    left: { value: 1, left: null, right: null },
    right: { value: 2, left: null, right: null },
  })
)

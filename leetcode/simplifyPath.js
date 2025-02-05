var simplifyPath = function (path) {
  const filteredPath = path.split('/')
  let stack = []
  for (let i = 0; i < filteredPath.length; i++) {
    if (!filteredPath[i] || filteredPath[i] === '.') {
      continue
    }
    if (filteredPath[i] === '..') {
      stack.pop()
    } else {
      stack.push(filteredPath[i])
    }
  }
  return `/${stack.join('/')}`
}
const path = '/.../a/../b/c/../d/./'
console.log(simplifyPath(path))

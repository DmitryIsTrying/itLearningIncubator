const add = (x, y) => [].slice.constructor('x', 'y', `return ${x} ${String.fromCharCode(43)} ${y}`)()
const testAdd = (x, y) => {
  return new Function('x', 'y', `return ${x} ${String.fromCharCode(43)} ${y}`)()
}
console.log(testAdd(-5, 3))

const a = [1]
const b = [2]
const c = {}

c[a] = a // [object Object]

c[b] = b //

console.log(c[a][0], c[b][0])

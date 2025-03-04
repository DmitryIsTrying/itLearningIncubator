function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  const stack = [{ original: obj, copy: Array.isArray(obj) ? [] : {} }]
  const visited = new WeakMap()

  while (stack.length) {
    const { original, copy } = stack.pop()

    if (visited.has(original)) {
      continue
    }

    visited.set(original, copy)

    for (let key in original) {
      if (original.hasOwnProperty(key)) {
        const value = original[key]

        if (value === null || typeof value !== 'object') {
          copy[key] = value
        } else {
          if (visited.has(value)) {
            copy[key] = visited.get(value)
          } else {
            const newCopy = Array.isArray(value) ? [] : {}
            copy[key] = newCopy
            stack.push({ original: value, copy: newCopy })
          }
        }
      }
    }
  }

  return stack[0].copy
}

// Пример использования:
const original = {
  a: 1,
  b: [2, 3, { c: 4 }],
  d: { e: 5 },
}

const copied = deepCopy(original)
console.log(copied) // { a: 1, b: [2, 3, { c: 4 }], d: { e: 5 } }
console.log(copied.b !== original.b) // true
console.log(copied.d !== original.d) // true

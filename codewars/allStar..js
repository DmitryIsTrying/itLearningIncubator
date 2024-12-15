function rotate(str) {
  if (str.length === 0) return []

  let result = []

  for (let i = 0; i < str.length; i++) {
    str = str.slice(1) + str[0]
    result.push(str)
  }

  return result
}
console.log(rotate('Hello'))

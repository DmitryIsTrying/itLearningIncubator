function josephus(items, k) {
  const result = []
  let index = 0

  while (items.length > 0) {
    index = (index + k - 1) % items.length
    result.push(items.splice(index, 1)[0])
  }

  return result
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3))

multiplicationTable = function (size) {
  const result = []
  for (let i = 1; i <= size; i++) {
    const arr = Array(size).fill(1)
    arr.forEach((_, indx, array) => {
      array[indx] = i * (indx + 1)
    })
    result.push(arr)
  }
  return result
}

console.log(multiplicationTable(5))

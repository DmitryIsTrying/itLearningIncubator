function deleteDuplicate(arr) {
  const filteredArr = Object.keys(
    arr.reduce((acc, el) => {
      if (!(el in acc)) {
        acc[el] = true
      }
      return acc
    }, {})
  )
  return Array.from(filteredArr, Number)
}
console.log(deleteDuplicate([1, 1, 1, 2, 3, 4, 52, 32, 15, 52, 32, 15, 15, 2, 3, 4]))

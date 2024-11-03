Array.getMissArr = (arr) => {
  let result = 0
  const arrOfLength = arr.reduce((acc, el) => {
    acc.push(el.length)
    return acc
  }, [])
  if (!Math.min(...arrOfLength)) return 0
  for (let i = Math.min(...arrOfLength) + 1; i < Math.max(...arrOfLength); i++) {
    if (!arrOfLength.includes(i)) result = i
  }
  return result
}

function getLengthOfMissingArray(arrayOfArrays) {
  console.log(arrayOfArrays)
  if (!arrayOfArrays) return 0
  if (arrayOfArrays.includes(null)) return 0
  return Array.getMissArr(arrayOfArrays)
}
console.log(getLengthOfMissingArray(null))

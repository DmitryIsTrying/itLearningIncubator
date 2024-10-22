function upArray(arr) {
  if (!arr.length) return null
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== Math.abs(arr[i]) || arr[i].toString().length > 1) {
      return null
    }
  }
  let nullCount = 0
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 0) {
      nullCount++
    } else {
      break
    }
  }
  const numStr = (BigInt(arr.join('')) + BigInt(1)).toString()
  const resultNumStr = '0'.repeat(nullCount) + numStr
  return resultNumStr.split('').map(Number)
}

console.log(upArray([0, 7]))

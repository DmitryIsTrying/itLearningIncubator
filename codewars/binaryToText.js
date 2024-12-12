function binaryToString(binary, bits = 8) {
  const res = []
  let current = ''
  for (let i = 1; i <= binary.length; i++) {
    current += binary[i - 1]
    if (i % bits === 0) {
      res.push(current)
      current = ''
    }
  }
  return res
    .map((char) => {
      const num = Number.parseInt(char, 2)
      return String.fromCharCode(num)
    })
    .join('')
}
console.log(binaryToString('01001011010101000100100001011000010000100101100101000101'))

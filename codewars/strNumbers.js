function sumStrings(a, b) {
  const aInt = BigInt(a)
  const bInt = BigInt(b)
  return String(aInt + bInt)
}
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))

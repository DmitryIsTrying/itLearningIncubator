function alphanumeric(string) {
  if (!string) return false
  const newStr = string.replace(/[^a-zA-Z\d]/g, '')
  return newStr.length === string.length
}
console.log(alphanumeric('XmdCfG_NbuKDkY10Lqd90'))

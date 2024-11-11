function incrementString(str) {
  if (isNaN(str[str.length - 1])) return str + 1
  const arr = str.match(/\d+/g)
  const a = arr[arr.length - 1]
  const num = (+a + 1).toString()
  let secondParam
  if (a.length > num.length) {
    secondParam = -num.length
  } else {
    secondParam = -num.length + (num.length - a.length)
  }
  return str.slice(0, secondParam) + num
}

console.log(incrementString('foobar999'))

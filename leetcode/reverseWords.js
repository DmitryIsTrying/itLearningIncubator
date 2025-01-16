var reverseWords = function (s) {
  return s.trim().split(' ').filter(Boolean).reverse().join(' ')
}
console.log(reverseWords('a good   example'))

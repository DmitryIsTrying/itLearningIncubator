var isSubsequence = function (s, t) {
  let index = 0
  for (let i = 0; i < s.length; i++) {
    const inx = t.indexOf(s[i], index)
    if (!~inx) {
      return false
    }
    index = inx + 1
  }
  return true
}
const s = 'abc',
  t = 'ahbgdc'
console.log(isSubsequence(s, t))

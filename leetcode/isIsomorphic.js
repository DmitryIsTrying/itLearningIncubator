var isIsomorphic = function (s, t) {
  let alliances = {}
  for (let i = 0; i < s.length; i++) {
    if (alliances[s[i]]) {
      if (alliances[s[i]] !== t[i]) {
        return false
      }
    } else {
      alliances[s[i]] = t[i]
    }
  }
  const values = Object.values(alliances)
  if (values.length !== [...new Set(values)].length) {
    return false
  }
  return true
}
const s = 'badc',
  t = 'baba'
console.log(isIsomorphic(s, t))

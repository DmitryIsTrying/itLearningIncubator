var lengthOfLongestSubstring = function (s) {
  const lengths = []
  let result = ''
  for (let i = 0; i < s.length; i++) {
    const inx = result.indexOf(s[i])
    if (inx !== -1) {
      lengths.push(result.length)
      result = result.slice(inx + 1) + s[i]
    } else {
      result += s[i]
    }
  }
  lengths.push(result.length)
  return Math.max(...lengths, 0)
}
console.log(lengthOfLongestSubstring(' '))

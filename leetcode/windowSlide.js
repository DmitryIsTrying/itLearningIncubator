function window(str) {
  let left = 0
  let right = 0
  const set = new Set()
  let current = 0
  let max = 0
  while (right < str.length) {
    while (set.has(str[right])) {
      set.delete(str[left])
      current--
      left++
    }
    set.add(str[right])
    right++
    current++
    max = Math.max(max, current)
  }
  return max
}
console.log(window('abcbdsd'))

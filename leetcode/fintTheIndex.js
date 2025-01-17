var strStr = function (haystack, needle) {
  let count = 0
  while (haystack.slice(count) !== '') {
    if (haystack.slice(count).startsWith(needle)) {
      return count
    }
    count++
  }
  return -1
}
const haystack = 'leetcode',
  needle = 'code'
console.log(strStr(haystack, needle))

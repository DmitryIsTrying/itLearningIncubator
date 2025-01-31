var isAnagram = function (s, t) {
  const sortedS = s
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('')
  const sortedT = t
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('')

  return sortedS === sortedT
}
const s = 'anagram',
  t = 'nagaram'
console.log(isAnagram(s, t))

var lengthOfLastWord = function (s) {
  return s.trimEnd().split(' ').at(-1).length
}
console.log(lengthOfLastWord('   fly me   to   the moon  '))

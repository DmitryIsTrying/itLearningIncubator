function reverse(str) {
  return str
    .trim()
    .split(' ')
    .map((word, idx) => (idx % 2 ? word.split('').reverse().join('') : word))
    .join(' ')
}

console.log(reverse('Reverse this string, please!'))

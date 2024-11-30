function shiftedDiff(first, second) {
  if (first === second) return 0
  const arr2 = second.split('')
  const arr1 = first.split('')
  let count = 0

  while (true) {
    const char = arr1.pop()
    arr1.unshift(char)
    count++

    if (arr1.join('') === arr2.join('')) {
      break
    }
    if (arr1.join('') === first) return -1
  }
  return count
}
console.log(shiftedDiff('hoop', 'pooh'))

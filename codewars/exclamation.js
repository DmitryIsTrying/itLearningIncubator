function checkWight(str) {
  let count = 0
  for (const el of str) {
    if (el === '!') count += 2
    if (el === '?') count += 3
  }
  return count
}

function balance(left, right) {
  const l = checkWight(left)
  const r = checkWight(right)
  if (l > r) return 'Left'
  if (l < r) return 'Right'
  return 'Balance'
}
console.log(balance('!!???!????', '??!!?!!!!!!!'))

function add(a, b) {
  console.log(a, b)

  const newA = a.reverse()
  const newB = b.reverse()
  let result = ''
  const lng = newA.length > newB.length ? newA.length : newB.length
  let dec = 0
  for (let i = 0; i < lng; i++) {
    let a = newA[i]
    let b = newB[i]
    if (a === undefined) a = '0'
    if (b === undefined) b = '0'
    const num = Number(a) + Number(b) + dec
    if (num > 9) {
      result += num.toString()[1]
      dec = 1
    } else {
      result += num.toString()
      dec = 0
    }
  }
  if (dec > 0) result += dec
  return result.reverse()
}

String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}
console.log(add('123456789', '987654322'))

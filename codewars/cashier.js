function getOrder(input) {
  const arr = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke']
  return Object.entries(
    arr.reduce((acc, el) => {
      const l = input.match(new RegExp(el, 'g'))?.length
      if (l) {
        acc[el] = l
      } else {
        acc[el] = 0
      }
      return acc
    }, {})
  )
    .reduce((acc, el) => {
      while (el[1]) {
        acc += `${el[0][0].toUpperCase() + el[0].slice(1)} `
        el[1]--
      }
      return acc
    }, '')
    .trimEnd()
}
console.log(getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza'))

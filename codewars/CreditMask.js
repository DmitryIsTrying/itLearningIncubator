// return masked string
function maskify(cc) {
  if (cc.length <= 4) return cc
  return (
    Array(cc.length - 4)
      .fill('#')
      .join('') + cc.slice(-4)
  )
}
console.log(maskify('4556364607935616'))

function firstNonRepeatingLetter(s) {
  const arr = s.split('')

  for (let i = 0; i < arr.length; i++) {
    const ecr = arr[i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const reg = new RegExp(ecr, 'gi')

    if (s.match(reg).length === 1) return arr[i]
  }
  return ''
}

console.log(firstNonRepeatingLetter('z-O|(&kdTLle,7j )~ke-3mxT||jtUh(dkLzvTsOl&,7'))

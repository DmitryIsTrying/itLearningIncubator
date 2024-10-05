function dnaStrand(dna) {
  return dna
    .split('')
    .map(function (el) {
      if (el === 'A') return 'T'
      if (el === 'T') return 'A'
      if (el === 'C') return 'G'
      if (el === 'G') return 'C'
    })
    .join('')
}

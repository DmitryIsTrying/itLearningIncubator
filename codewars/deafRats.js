var countDeafRats = function (town) {
  console.log(town)
  const inx = town.indexOf('P')
  let rats = 0
  town.replace(/[~O][O~]/g, (rat, i) => {
    if (i < inx) {
      if (rat === 'O~') rats++
    } else {
      if (rat === '~O') rats++
    }
  })
  return rats
}

console.log(countDeafRats('~O~O~O~OP~O~OO~'))

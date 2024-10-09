function goodVsEvil(...goodAndEvil) {
  const goodPower = [1, 2, 3, 3, 4, 10]
  const evilPower = [1, 2, 2, 2, 3, 5, 10]

  good = goodAndEvil[0].split(' ')
  evil = goodAndEvil[1].split(' ')

  const allGood = good.reduce((acc, el, i) => {
    return (acc += Number(el) * goodPower[i])
  }, 0)
  const allEvil = evil.reduce((acc, el, i) => {
    return (acc += Number(el) * evilPower[i])
  }, 0)

  if (allGood > allEvil) {
    return 'Battle Result: Good triumphs over Evil'
  } else if (allGood < allEvil) {
    return 'Battle Result: Evil eradicates all trace of Good'
  }
  return 'Battle Result: No victor on this battle field'
}

console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'))

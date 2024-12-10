function alphabetWar(fight) {
  const leftChars = ['s', 'b', 'p', 'w']
  const rightChars = ['z', 'd', 'q', 'm']
  let leftPower = 0
  let rightPower = 0
  for (let i = 0; i < fight.length; i++) {
    if (fight[i - 1] !== '*' && fight[i + 1] !== '*' && fight[i] !== '*') {
      if (leftChars.includes(fight[i])) {
        leftPower += leftChars.indexOf(fight[i]) + 1
      }

      if (rightChars.includes(fight[i])) {
        rightPower += rightChars.indexOf(fight[i]) + 1
      }
    }
  }
  if (leftPower > rightPower) return 'Left side wins!'
  if (leftPower < rightPower) return 'Right side wins!'
  return "Let's fight again!"
}
console.log(alphabetWar('zz*kkz'))

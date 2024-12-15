function rot(strng) {
  let lines = strng.split('\n')
  let reversedLines = lines.map((line) => line.split('').reverse().join(''))
  return reversedLines.reverse().join('\n')
}

function selfieAndRot(strng) {
  let lines = strng.split('\n')
  let dots = '.'.repeat(lines[0].length)
  let originalWithDots = lines.map((line) => line + dots).join('\n')
  let rotated = rot(strng)
  let rotatedLines = rotated.split('\n')
  let rotatedWithDots = rotatedLines.map((line) => dots + line).join('\n')
  return originalWithDots + '\n' + rotatedWithDots
}

function oper(fct, s) {
  return fct(s)
}

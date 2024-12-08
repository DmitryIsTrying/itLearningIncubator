function isValidCoordinates(coordinates) {
  const arrCoors = coordinates.split(', ')

  if (arrCoors.length !== 2) return false

  for (let i = 0; i < 2; i++) {
    const coor = arrCoors[i]

    if (!/^-?\d+(\.\d+)?$/.test(coor)) return false

    const num = parseFloat(coor)

    if (i === 0) {
      if (num < -90 || num > 90) return false
    } else {
      if (num < -180 || num > 180) return false
    }
  }

  return true
}

console.log(isValidCoordinates('-23, 25'))
console.log(isValidCoordinates('24.53525235, 23.45235'))
console.log(isValidCoordinates('04, -23.234235'))
console.log(isValidCoordinates('43.91343345, 143'))
console.log(isValidCoordinates('4, -3'))
console.log(isValidCoordinates('23.234, - 23.4234'))

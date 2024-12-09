function averageString(str) {
  let resultNum =
    str.split(' ').reduce((acc, el) => {
      return acc + objNums[el]
    }, 0) / str.split(' ').length
  if (isNaN(resultNum)) return 'n/a'
  let result = null

  for (key in objNums) {
    console.log(key)

    if (objNums[key] === Math.floor(resultNum)) {
      result = key
    }
  }
  return result
}

const objNums = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
}

console.log(averageString('zero zero zero zero zero'))

const obj = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
}

function encode(string) {
  return string
    .split('')
    .map((char) => {
      if (obj[char]) {
        return obj[char]
      } else {
        return char
      }
    })
    .join('')
}

function decode(string) {
  return string
    .split('')
    .map((char) => {
      const indexChange = Object.values(obj).indexOf(+char) // 1 // -1
      if (~indexChange) {
        return Object.keys(obj)[indexChange]
      } else {
        return char
      }
    })
    .join('')
}

console.log(decode('h2ll4'))

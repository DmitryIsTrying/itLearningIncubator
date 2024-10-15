// function cleanString(s) {
//   return s
//     .split('')
//     .reduce((acc, char) => {
//       if (char === '#') {
//         acc.pop()
//       } else {
//         acc.push(char)
//       }
//       return acc
//     }, [])
//     .join('')
// }

// console.log(cleanString('abc#d##c'))

// let x = 3

// function fn() {
//   console.log(x)

//   x = 10
//   return
//   function x() {}
// }

// fn()
// console.log(x)

// let x = 3

// function fn() {
//   x = 10
//   return
//   function x() {}
// }

// fn()

// console.log(x)

const char = 'm'
// a - 97

// m - 109
// console.log(char.charCodeAt())

function printerError(s) {
  let errorChar = 0
  s.split('').forEach((char) => {
    // a
    if (!(char.charCodeAt() <= 109)) {
      errorChar++
    }
  })

  return `${errorChar}/${s.length}`
}

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'))

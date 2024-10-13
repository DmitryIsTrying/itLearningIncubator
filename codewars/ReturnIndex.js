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

let x = 3

function fn() {
  console.log(x)

  x = 10
  return
  function x() {}
}

fn()
console.log(x)

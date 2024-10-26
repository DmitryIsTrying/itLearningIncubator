// function playPass(s, n) {
//   return s
//     .split('')
//     .map((char, i) => {
//       if (char.charCodeAt() < 34) return char
//       if (/\d/.test(char)) {
//         return String(9 - parseInt(char))
//       }
//       if (/[A-Za-z]/.test(char)) {
//         const numOfChar = char.charCodeAt() + n
//         const newChar = String.fromCharCode(numOfChar > 90 && char === char.toUpperCase() ? numOfChar - 26 : numOfChar)
//         return i % 2 === 0 ? newChar : newChar.toLowerCase()
//       }
//       return char
//     })
//     .reverse()
//     .join('')
// }
// console.log(playPass('I LOVE YOU!!!', 1))

function factorial(num) {
  if (!num) return 1
  if (num > 1) {
    return num * factorial(num - 1)
  }
  return 1
}
console.log(factorial(0) === factorial(1))

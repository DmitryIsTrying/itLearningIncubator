// function rank(st, we, n) {
//   console.log(st, we, n)
//   if (st === '') return 'No participants'
//   const stArr = st.split(',')

//   if (stArr.length < n) return 'Not enough participants'
//   const numsObj = stArr.reduce((acc, name, inx) => {
//     let num = name
//       .toLowerCase()
//       .split('')
//       .reduce((acc, char) => {
//         acc += char.charCodeAt() - 96

//         return acc
//       }, 0)
//     num = (num + name.length) * we[inx]
//     acc.push({ num, name })
//     return acc
//   }, [])
//   return numsObj.sort((a, b) => {
//     if (a.num === b.num) {
//       return a.name.localeCompare(b.name)
//     } else {
//       return b.num - a.num
//     }
//   })[n - 1].name
// }
// console.log(rank('', [4, 2, 1, 4, 3, 1, 2], 6))

// const maximumTwo = (arr) => {
//   if (arr.length < 2) return null
//   return arr.reduce(
//     (acc, el, i) => {
//       if (!(el < acc[1])) {
//         if (!(el < acc[0])) {
//           acc = [el, acc[0], i, acc[2]]
//         } else {
//           acc[1] = el
//           acc[3] = i
//         }
//       }
//       return acc
//     },
//     [undefined, undefined, null, null]
//   )
// }

// const fn = function (weights) {
//   if (weights.length <= 1) {
//     return weights[0]
//   }

//   do {
//     const [x, y, xI, yI] = maximumTwo(weights)
//     console.log([x, y, xI, yI])

//     if (y === 0) {
//       return x
//     }

//     weights[xI] = 0
//     weights[yI] = x - y
//     console.log(weights)
//     console.log('-------------')
//   } while (true)
// }
// console.log(fn([2, 7, 4, 1, 8, 1]))

// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
// })

// let lines = []
// rl.on('line', (line) => {
//   lines.push(line)
// }).on('close', () => {
//   const [a, b] = lines[0].split(' ')

//   const result = BigInt(a) + BigInt(b)
//   process.stdout.write(result.toString())
// })

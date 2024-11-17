// String.prototype.timeTo = function () {
//   return this.split(', ').map((time) => {
//     return time
//       .split('|')
//       .map((el, i) => {
//         if (i === 0) return Number(el) * 3600
//         if (i === 1) return Number(el) * 60
//         if (i === 2) return Number(el)
//       })
//       .reduce((acc, sec) => (acc += sec))
//   })
// }

// Number.timeFrom = function (time) {
//   let h = Math.floor(time / 3600)
//   time -= h * 3600
//   if (h.toString().length === 1) h = '0' + h
//   let m = Math.floor(time / 60)
//   time -= m * 60
//   if (m.toString().length === 1) m = '0' + m
//   let s = Math.floor(time)
//   if (s.toString().length === 1) s = '0' + s
//   return `${h}|${m}|${s}`
// }

// function stat(strg) {
//   if (!strg) return strg
//   const numsArr = strg.timeTo()
//   const range = Math.max(...numsArr) - Math.min(...numsArr)
//   const average = numsArr.reduce((acc, num) => (acc += num)) / numsArr.length
//   numsArr.sort((a, b) => a - b)
//   let median
//   if (numsArr.length % 2 === 0) {
//     median = (numsArr[numsArr.length / 2] + numsArr[numsArr.length / 2 - 1]) / 2
//   } else {
//     median = numsArr[Math.floor(numsArr.length / 2)]
//   }

//   return `Range: ${Number.timeFrom(range)} Average: ${Number.timeFrom(average)} Median: ${Number.timeFrom(median)}`
// }

// console.log(stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17'))

// const arr = [1, 2, 2, 3, 3, 4, 5]
// arr['string'] = 'string'
// console.log(Object.entries(arr))

// arr.forEach((el, i) => {
//   console.log(i)
// })

// arr['puma'] = 'yes'
// console.log(arr)
// const promise = new Promise((resolve, reject) => {
//   reject(1)
// })
// promise
//   .catch((num) => {
//     console.log(num)

//     return new Promise((res, rej) => {
//       rej(2)
//     })
//   })
//   .catch((num) => {
//     console.log(num)
//   })
// function foo() {
//   console.log(1)
// }

// foo(console.log(2))

// const input = [
//   { value: 'abcd', order: 4, expired: false },
//   { value: 'qwer', order: 2, expired: true },
//   { value: 'xyz1', order: 1, expired: false },
//   { value: 'abx2', order: 3, expired: false },
// ]

// function getStrValues(arr) {
//   const copyArr = [...arr]
//   const str = copyArr
//     .sort((a, b) => a.order - b.order)
//     .reduce((acc, el) => {
//       if (!el.expired) {
//         acc += el.value.split('').reverse().join('')
//       }
//       return acc
//     }, '')

//   return [...new Set(str)].join('')
// }
// console.log(getStrValues(input))
// 1 promise 4 timout 777 then1 then2 timeout2
function Test() {
  this.a = 123
}
const test = Test()
console.log(test)

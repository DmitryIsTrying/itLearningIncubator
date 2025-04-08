// function wtf(s) {
//   return s
// }

// // console.log([...'test'])

// // meow meow undefined meow
// // 1 6 3 5 7 8 2 4

// // 5 20
// function delay(fn) {
//   setTimeout(fn, 1000)
// }
// const arr = [
//   new Promise((res) =>
//     delay(() => {
//       res(1)
//     })
//   ),
//   new Promise((res) =>
//     delay(() => {
//       res(2)
//     })
//   ),
//   new Promise((res) =>
//     delay(() => {
//       res(3)
//     })
//   ),
// ]
// async function test() {
//   for await (const item of arr) {
//     console.log(item)
//   }
// }
// test()

const pr1 = new Promise(() => {})

const pr2 = new Promise((res) => {
  setTimeout(() => {
    res(1)
  }, 1000)
})

pr1.then(() => {
  console.log('bingo')
})

pr2.then((data) => {
  console.log('worked', data)
})

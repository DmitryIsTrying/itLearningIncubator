// // const obj = {}
// // this.test = 13
// // let value = 5
// // Object.defineProperty(obj, 'a', {
// //   get: () => {
// //     console.log(this)

// //     return value++
// //   },
// // })

// // if (obj.a === 5 && obj.a === 6 && obj.a === 7) {
// //   console.log('bingo')
// // }
// 'use strict'
// const obj = {
//   a: 'test',
// }

// Object.defineProperty(obj, 'a', {
//   writable: false,
// })
// obj.a = 'super'
// console.log(obj)

// class Test {
//   constructor(speed) {
//     this.speed = speed
//   }
// }

// class ExTest extends Test {
//   model = 'haha'
// }

// const test = new ExTest(200)
// console.log(test)
// 'use strict'
// console.log(test)
// var test = 5
// var test = 3

// function Test() {
//   this.car = 5
//   this.brand = 10
// }
// const obj = {}
// const test = new Test.bind(obj)
// console.log(test)
// console.log(obj)
// for (let index = 0; index < 10; index++) {
//   console.log(index)
// }

// for (let index = 0; index < 10; ++index) {
//   console.log(index)
// }
// const obj = {
//   test: new Date(),
// }
// const json = JSON.stringify(obj)
// console.log(json)
// const unJson = JSON.parse(obj)
// console.log(unJson)

// function test(a, b, c) {
//   console.log(a, b, c)
// }
// const superTest = test.bind({}, 1, 2)
// superTest(3)

// ss se pr1 pr2 st

// ss se pr1 pr2 st 3 5

// APP useLayoutEffect uf2 uf1 App usL CLEAN useLayoutEffect uf2clean uf1clean uf2  uf1

// function test(arr) {
//   return arr.map((el) => el * 2)
// }
// 'use strict'
// if (true) {
//   function test() {
//     return 123
//   }
// }
// console.log(test())
for (var i = 0; i < 10; i++) {
  setTimeout(console.log, 100, i)
}

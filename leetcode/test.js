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
// for (var i = 0; i < 10; i++) {
//   setTimeout(console.log, 100, i)
// }

// class Test extends Object {
//   constructor() {
//     super()
//     this.car = 'bmw'
//     this.color = 'black'
//   }
// }

// const test = new Test()
// console.log(Test.keys(test))

// function doubleTriple(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       arr[i] = arr[i] * 2
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       arr[i] = arr[i] * 3
//     }
//   }
// }

// class Test extends Array {}
// const test = Test.from(5)
// console.log(test)
// const arr = []
// console.log(arr.__proto__.__proto__.__proto__ === null)
// const promise = new Promise(() => {
//   console.log('test')
// })
// promise.finally(() => {
//   console.log('FINAL')
// })
// function loop() {
//   new Promise((res) => {
//     res()
//   }).then(loop)
// }
// loop()
// const pr = Promise.any([])
// setTimeout(() => {
//   console.dir(pr)
// }, 1000)
//not once var
// test git command
//ups it's merge conflict
//just test merge conflict
// 'use strict'
// let x = 10
// function fn() {
//   console.log(x)

//   x = 3
//   return
//   if (true) {
//     function x() {}
//   }
// }
// fn()
// console.log(x)
// 'use strict'
// if (true) {
//   function test() {
//     console.log('bingo')
//   }
//   test()
// }

// let timeoutId = null

// return function (...args) {
//   if (timeoutId) {
//     clearTimeout(timeoutId)
//   }
//   timeoutId = setTimeout(() => {
//     fn(...args)
//   }, timer)
// }

// const debounce = (fn, timer) => {
//   // написать декоратор дебаунса
// }

// const printNumber = (number) => {
//   console.log(number)
// }

// const debouncedNumber = debounce(printNumber, 1000)

// const tick = (timer) =>
//   new Promise((res) => {
//     setTimeout(() => {
//       res()
//     }, timer)
//   })

// const testFoo = async () => {
//   debouncedNumber(1)
//   debouncedNumber(2)
//   await tick(500)

//   debouncedNumber(3)

//   await tick(1000)

//   debouncedNumber(4)
// }
// testFoo() // 3,4

// const object = {
//   persons: {
//     children: [
//       { name: 'zxc', address: { street: 'asd', num: 1 } },
//       { name: 'asd', address: { street: 'qwe', num: 2 } },
//     ],
//   },
// }

const object = {
  persons: {
    children: [
      { name: 'zxc', address: { street: 'asd', num: 1 } },
      { name: 'asd', address: { street: 'qwe', num: 2 } },
    ],
  },
}

function isObject(obj) {
  return obj.__proto__.constructor.name === 'Object'
}

function deep(obj) {
  if (Array.isArray(obj)) {
    return obj.map(deep)
  } else if (isObject(obj)) {
    const result = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = deep(obj[key])
      }
    }
    return result
  } else {
    return obj
  }
}
const copyObject = deep(object)
console.log(copyObject.persons.children[1].address === object.persons.children[1].address)

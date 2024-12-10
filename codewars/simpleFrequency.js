// function solve(arr) {
//   const obj = arr.reduce((acc, num) => {
//     if (acc[num]) {
//       acc[num] += 1
//     } else {
//       acc[num] = 1
//     }
//     return acc
//   }, {})
//   return arr.sort((a, b) => {
//     if (obj[a] === obj[b]) {
//       if (a === b) {
//         return 0
//       } else {
//         return a - b
//       }
//     } else {
//       return obj[b] - obj[a]
//     }
//   })
// }
// console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]))
// const obj1 = {
//   name: 'Dima',
//   showName() {
//     const arrow = () => {
//       console.log(this.name)
//     }
//     arrow()
//   },
// }
// const obj2 = {
//   name: 'Artem',
//   showName() {
//     const arrow = () => {
//       console.log(this.name)
//     }
//     arrow()
//   },
// }
// const foo = obj2.showName
// console.log(foo())
// Array.prototype.test = function () {
//   console.log(this)
// }
// const a = [1, 2, 3, 4]
// a.test()
// var a = 5
// console.log(this) // Выведет: {}
// console.log(global.a) // Выведет: 5
// console.log(window)
// const arrow = () => {}
// arrow.prototype.test = function () {
//   console.log('hello')
// }
// console.dir(arrow)

// const arr = [1, 2, 3, 4, 5]
// const objA = {
//   arr: arr,
//   foo() {
//     arr.reduce(function () {
//       console.log(this)
//     })
//   },
// }
// objA.foo()
// const obj = {
//   name: 'DIma',
// }
// function foo() {
//   return this
// }
// const myBind = function (foo, context, ...args) {
//   const originalFunction = foo

//   return function (...additionalArgs) {
//     return originalFunction.apply(context, [...args, ...additionalArgs])
//   }
// }
// const fooWithThis = myBind(foo, obj, 1, 2)
// console.log(fooWithThis())

function myFlat(arr, numberOfFlat = 1) {
  const stack = [...arr]
  const result = []
  let currentDepth = 0
  while (stack.length) {
    const next = stack.pop()
    if (Array.isArray(next) && currentDepth < numberOfFlat) {
      stack.push(...next)
      currentDepth++
    } else {
      result.push(next)
    }
  }

  return result.reverse()
}
const arr = [1, 2, 3, [1, 2, [4, 5]]]
console.log(arr.flat())

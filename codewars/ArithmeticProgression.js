// var findMissing = function (list) {
//   const count = (list[list.length - 1] - list[0]) / list.length
//   let result = list[0]

//   for (let index = 0; index < list.length; index++) {
//     result += count
//     if (result !== list[index + 1]) {
//       list.splice(index + 1, 0, result)
//       return list
//     }
//   }
// }
// console.log(findMissing([1, 3, 5, 9, 11]))
// console.log(
//   (function increment(a) {
//     if (typeof a === 'number') return a++
//     return 'no'
//   })(8)
// )

// const object = {
//   name: 'Dima',
//   age: 22,
//   birthYear: 2024 - this.age,
// }
// console.log(object)

// function test1() {
//   let num = 2
//   return num++
// }
// function test2() {
//   let num = 2
//   return (num = 2 + 1)
// }
// console.log(test1(), test2())

// const numTest = '40'
// console.log(numTest.repeat(3))

// console.log(parseInt('3ab2c'))
// console.log(Number('3ab2c'))
//    return this.birthYear
// const objectLearn = {
//   name: 'Dima',
//   age: 22,
//   birthYearCheck() {
//     this.birthYear = 2024 - this.age
//     return this.birthYear
//   },
//   resume: function () {
//     return `Hello, my name is ${this.name}. I'am ${this.age} years old, i was worn in ${this.birthYearCheck()}`
//   },
// }
// // console.log(objectLearn.resume())
// // objectLearn.birthYearCheck()
// console.log(objectLearn.resume())

const test = function (num) {
  return (num += 1)
}
console.log(test(5))

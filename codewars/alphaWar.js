// function alphabetWar(fight) {
//   const leftChars = ['s', 'b', 'p', 'w']
//   const rightChars = ['z', 'd', 'q', 'm']
//   let leftPower = 0
//   let rightPower = 0
//   for (let i = 0; i < fight.length; i++) {
//     if (fight[i - 1] !== '*' && fight[i + 1] !== '*' && fight[i] !== '*') {
//       if (leftChars.includes(fight[i])) {
//         leftPower += leftChars.indexOf(fight[i]) + 1
//       }

//       if (rightChars.includes(fight[i])) {
//         rightPower += rightChars.indexOf(fight[i]) + 1
//       }
//     }
//   }
//   if (leftPower > rightPower) return 'Left side wins!'
//   if (leftPower < rightPower) return 'Right side wins!'
//   return "Let's fight again!"
// }
// console.log(alphabetWar('zz*kkz'))
// 'use strict'
// function test() {
//   console.log(this)
// }
// console.log(global.crypto())
// class Workable {
//   work() {}
// }

// class Eatable {
//   eat() {}
// }

// class Robot extends Workable {
//   work() {
//     console.log('Робот работает')
//   }
// }

// class Human extends Workable {
//   work() {
//     console.log('Человек работает')
//   }

//   eat() {
//     console.log('Человек ест')
//   }
// }
// const obj = {
//   name: 'Victor',
// }
// Object.defineProperty(obj, 'age', {
//   value: 12,
//   enumerable: true,
//   writable: false,
//   configurable: true,
// })
// console.log(obj)

const array = [1, 2, 3, 4, 5]
const { 0: first, [array.length - 1]: last } = array
console.log(first, last)

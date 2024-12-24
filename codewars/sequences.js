// function getScore(n) {
//   if (n === 1) return 50
//   return getScore(n - 1) + n * 50
// }
// console.log(getScore(2))
// class Car {}

// const car1 = new Car()
// car1.__proto__ = {
//   test() {
//     console.log('its work')
//   },
// }
// console.log(car1.__proto__ === Car.prototype)
// car1.test()
// const test = new Array(3)
// console.log(test)
// console.log(NaN.toString())
// const foo = () => {}
// console.log(foo.__proto__ === Function.prototype)
// class Test {}
// // console.log(Test.prototype === new Test().__proto__)
// console.log(Test)

// Добавляем метод в Object.prototype
// Переопределяем Object.prototype
// const mmm = {
//   test() {
//     console.log('haha')
//   },
// }

// // Создаем новый объект
// const obj = {}

// // Устанавливаем прототип нового объекта вручную
// Object.setPrototypeOf(obj, mmm)

// // Теперь obj наследует метод test
// obj.test() // 'haha'
// console.log(typeof Promise)
// console.log(range([1, 4, 5, 2, 3, 9, 8, 11, 0]))

// console.log(range([1, 4, 3, 2]))

// function range(arr) {
//   const sortedArr = [...arr].sort((a, b) => a - b)
//   return sortedArr
//     .reduce(
//       (acc, el, i, arr) => {
//         if (acc.prev + 1 === el || acc.prev === undefined) {
//           acc.stack.push(el)
//         } else {
//           if (acc.stack.length > 1) {
//             acc.res.push(`${acc.stack[0]}-${acc.stack[acc.stack.length - 1]}`)
//           } else {
//             acc.res.push(`${acc.stack[0]}`)
//           }

//           acc.stack = [el]
//         }
//         acc.prev = el
//         if (i === arr.length - 1) {
//           if (acc.stack.length) {
//             if (acc.stack.length > 1) {
//               acc.res.push(`${acc.stack[0]}-${acc.stack[acc.stack.length - 1]}`)
//             } else {
//               acc.res.push(`${acc.stack[0]}`)
//             }
//           } else {
//             acc.res.push(acc.prev)
//           }
//         }
//         return acc
//       },
//       { stack: [], prev: undefined, res: [] }
//     )
//     .res.join(',')
// }

// function breakeas(str) {
//   // Если длина строки нечетная, скобки точно не сбалансированы
//   if (str.length % 2 !== 0) return false

//   const stack = [] // Стек для открывающих скобок
//   const obj = {
//     '[': ']',
//     '{': '}',
//     '(': ')',
//   }
//   for (const char of str) {
//     if (obj[char]) {
//       stack.push(char)
//     } else {
//       const lastCharArr = stack.pop()

//       if (obj[lastCharArr] !== char) {
//         return false
//       }
//     }
//   }
//   return !stack.length
// }
// console.log(breakeas('[]({}){}(){}(()){(})'))
// console.log(breakeas('[]({}){}(){}(())')) // true
// console.log(breakeas('[]({}){}(){}(()')) // false
// console.log(breakeas('[]({}){}(){}(()))')) // false
// class Test {}
// Test.prototype.hhh = 10
// const test = new Test()
// console.log(test.hhh)
// console.dir({}.constructor.prototype === {}.__proto__)
// let values = [1, 2, 3]
// let index = 0

// let proto = {
//   get a() {
//     return values[index++]
//   },
// }

// let obj = Object.create(proto)
// console.dir(obj)

// if (obj.a === 1 && obj.a === 2 && obj.a === 3) {
//   console.log('Bingo')
// }
Function.prototype.myBind = function (ctx, ...args) {
  ctx.ddd = this
  return function (...arg2) {
    return ctx.ddd(...args, ...arg2)
  }
}
const obj1 = { name: 'Dima' }
const obj2 = {
  name: 'Anton',
  hello() {
    console.log(this.name, ...arguments)
  },
}
const obj3 = { name: 'Bla' }
const test = obj2.hello.myBind(obj1, 50).myBind(obj3, 100).myBind(obj3, 200).myBind(obj3, 250)
test()
// max call stack

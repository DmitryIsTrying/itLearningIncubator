// function strjoin() {
//   return [...arguments].slice(1).join(arguments[0])
// }

// console.log(strjoin('.', 'a', 'b', 'c'))
// console.log(strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f'))

// function compose(...fns) {
//   return function (...args) {
//     return fns.reduceRight((acc, fn, i, arr) => {
//       return [fn(...acc)]
//     }, args)[0]
//   }
// }

// const square = (x) => x * x
// const time2 = (x) => x * 2
// const sum = (a, b) => a + b

// console.log(compose(square, time2)(2) === square(time2(2)))
// console.log(compose(square, time2, sum)(3, 4) === square(time2(sum(3, 4))))

// import asyncAuth from '.'

// function auth() {
//   return new Promise(async (res, rej) => {
//     await asyncAuth((err, data) => {
//       if (err) {
//         return rej(err)
//       }
//       res(data)
//     })
//   })
// }

// function tryAuth(n, err) {
//   return new Promise((res, rej) => {
//     auth()
//       .then((data) => {
//         res(data)
//       })
//       .catch((err) => {
//         let currentErr = err
//         function stillTry(n) {
//           if (n <= 0) {
//             return rej(currentErr)
//           }

//           auth()
//             .then((data) => {
//               res(data)
//             })
//             .catch((err) => {
//               currentErr = err
//               stillTry(n - 1)
//             })
//         }

//         stillTry(n)
//       })
//   })
// }

// async function tryAuth(maxAttempts) {
//   let lastError = null

//   for (let attempt = 0; attempt <= maxAttempts; attempt++) {
//     try {
//       const result = await auth()
//       return result // Успешная аутентификация
//     } catch (error) {
//       lastError = error // Сохраняем последнюю ошибку
//       if (attempt === maxAttempts) {
//         throw lastError // Все попытки исчерпаны, выбрасываем последнюю ошибку
//       }
//     }
//   }
// }

// function callLimit(fn, limit, callback) {
//   let counter = 0
//   function decoratorFn(...args) {
//     counter++
//     if (limit < counter) return
//     fn(...args)

//     if (limit === counter) {
//       if (typeof callback === 'function') {
//         callback()
//       }
//     }
//   }
//   decoratorFn.reset = function () {
//     counter = 0
//   }

//   return decoratorFn
// }

// function log(title, message) {
//   console.log(title + ': ' + message)
// }

// var logLimited = callLimit(log, 3, () => console.log('it was last'))

// logLimited('title', '1')
// //title: desc
// logLimited('title', '2')
// //title: desc
// logLimited('title', '3')
// //title: desc
// logLimited('title', '4')
// logLimited('title', '5')
// logLimited('title', '6')
// logLimited('title', '7')
// // В консоли ничего не вывелось

// logLimited.reset() // reset counter

// logLimited('title', '8')
// Promise.resolve(5).then(console.log)
// console.log('test')
// 2 undefined (another task)

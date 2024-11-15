// function findKeyValues(obj, k, result = []) {
//   for (const key in obj) {
//     console.log(key)

//     if (typeof obj[key] === 'object') {
//       findKeyValues(obj[key], k, result)
//     } else if (key === k) {
//       result.push(obj[key])
//     }
//   }
//   return result
// }
// function test(a, b, c) {}

// test.customProperty = 'Hello'
// test.anotherProperty = 'World'

// console.log(findKeyValues(test, 'city'))

// function startInterval(delay) {
//   setTimeout(() => {
//     console.log("I'm here")
//     startInterval(delay)
//   }, delay)
// }
// console.log(startInterval(2000))
const promise = new Promise((resolve, reject) => {
  reject()
})
promise
  .then(() => {
    console.log('1')
  })
  .catch(() => {
    console.log('2')
  })
  .finally(() => {
    console.log('3')
  })
  .then(() => {
    console.log('4')
  })

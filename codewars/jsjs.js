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
// const promise = new Promise((resolve, reject) => {
//   reject()
// })
// promise
//   .then(() => {
//     console.log('1')
//   })
//   .catch(() => {
//     console.log('2')
//   })
//   .finally(() => {
//     console.log('3')
//   })
//   .then(() => {
//     console.log('4')
//   })

// const foo = {
//   dima: 'smirnov',
// }
// Object.defineProperty(foo, 'dima', {
//   value: 'NEsmirnov',
// })
// console.log(foo)
// if (true) {
//   const a = 5
// }
// console.log(a)
// try {
//   const pr1 = Promise.resolve()
//   const pr3 = new Promise(() => {})
//   const pr2 = await Promise.reject()
// } catch (e) {
//   console.log(e)
// }
// const pr = Promise.all([pr1, pr2, pr3])
// console.log(pr)
function wait(ms) {
  return new Promise((res) => {
    setTimeout(() => {
      res()
    }, ms)
  })
}
async function run() {
  await wait(1000)
  console.log(1)
  await wait(1000)
  console.log(2)
  await wait(1000)
  console.log(3)
}
run()

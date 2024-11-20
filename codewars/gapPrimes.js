// function gap(g, m, n) {
//   console.log(g, m, n)

//   function isSimple(num) {
//     for (let j = 2; j <= Math.sqrt(num); j++) {
//       if (num % j === 0) {
//         return false
//       }
//     }
//     return true
//   }
//   let prev = undefined
//   for (let i = m; i <= n; i++) {
//     if (isSimple(i)) {
//       console.log(i)

//       if (i - prev === g) {
//         return [prev, i]
//       }
//       prev = i
//     }
//   }
//   return null
// }
// // console.log(gap(8, 300, 400))
// console.log(Math.sqrt(362))
// const name = 'Anton'
// const b = {
//   name: 'dima',
// }
// function a(age, c = 2, x) {
//   return `${age} ${c} ${x} ${this.name}`
// }

// console.log(a.apply(b, [22, undefined, 2]))
// let test
// const promise = new Promise((res, rej) => {
//   test = res(2)
// })
// promise
//   .then((data) => {
//     console.log(1)
//   })
//   .catch(() => {
//     console.log(2)
//   })
// console.log(test)
// setTimeout(() => {
//   console.log(1)
//   Promise.resolve().then(() => console.log('pr1'))
// }, 2000)
// const obj = {
//   dima: 'name',
// }
// const obj2 = {
//   dima: 'name',
// }
// const obj3 = {
//   dima: 'name',
// }
// const obj4 = {
//   dima: 'name',
// }
// setTimeout(() => {
//   console.log(2)
// }, 2000)
// setTimeout(() => {
//   console.log(3)
// }, 0)
// function test(t = undefined) {
//   const a = [1, 3, 2]
//   const b = {
//     name: 'dima',
//   }
//   b[a] = a
//   return b
// }
// console.log(test())
const promise1 = new Promise((res, rej) => {
  res(2) // Промис переходит в состояние fulfilled
})

promise1.rejected()

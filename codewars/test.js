// async function first() {
//   console.log(9)
//   await Promise.resolve(2).then((r) => console.log(r))
//   console.log(0)
//   await Promise.resolve(3).then((r) => console.log(r))
// }

// async function second() {
//   console.log(10)
//   await Promise.resolve(4).then((r) => console.log(r))
//   console.log(11)
//   await Promise.resolve(5).then((r) => console.log(r))
// }

// first()
// second()

// const promises = Promise.resolve('new Promise')
// promises.then((str) => console.log(str))
// // 2 4 new promise
// ;(async () => {
//   function getPromise() {
//     console.log(1)
//     return Promise.resolve()
//   }
//   const x = getPromise()
//   console.log(2)

//   console.log(x)
// })()

// class User {
//   test() {
//     console.log(this === User)
//   }
// }

// class Test extends User {
//   constructor() {}
// }
// const user = new Test('ddd')
// user.test()

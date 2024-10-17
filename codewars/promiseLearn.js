// console.log('Request data...')
// setTimeout(() => {
//   console.log('Preparing data...')
//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working',
//   }

//   setTimeout(() => {
//     backendData.modified = true
//     console.log('Data received', backendData)
//   }, 2000)
// }, 2000)

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log('Preparing data...')
//     const backendData = {
//       server: 'aws',
//       port: 2000,
//       status: 'working',
//     }
//     resolve(backendData)
//   }, 2000)
// })

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true
//       reject(data)
//     }, 2000)
//   })
// })
//   .catch((err) => console.log('Error', err))
//   .then((clientData) => {
//     console.log('Data received', clientData)
//     clientData.fromPromise = true
//     return clientData
//   })
//   .then((data) => {
//     console.log('Modified', data)
//   })

// let pr = new Promise((res) => {
//   let i = 0
//   setInterval(() => {
//     i++
//     res(i)
//   }, 5000)
// }).then(() => console.log('я сработал'))

// function testVar() {
//   a = 5
//   console.log(a) // 5
// }

// testVar()
// console.log(a) // 5 (глобальная переменная)

// function test() {
//   console.log('123')
// }

// test()

// const arr = [2, 7, 4, 10, 15, 20]
// function main(arr) {
//   setTimeout(() => {
//     console.log(arr[0])
//     arr.shift()
//     if (arr.length > 0) {
//       main(arr)
//     }
//   }, 1000)
// }
// console.log(main(arr))
// setTimeout(() => {
//   console.log(arr)
// }, 2000)

class BookShelf {
  book1 = 'Onegin'
  book2 = 'Daughter of capitan'
  takeBook(name) {
    return this[name]
  }
}

class Book extends BookShelf {
  constructor() {
    super()
    this.book3 = 'Azbuka'
  }
}

const book = new Book()
console.log(book.__proto__) // Это будет Book.prototype (пустой объект)
console.log(book.__proto__.__proto__)

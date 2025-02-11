// function delay(ms) {
//   return new Promise((res) => {
//     setTimeout(res, ms)
//   })
// }

// delay(3000).then(() => console.log('Выполнено через 3 секунды'))

// async function parallel(promises) {
//   const result = []

//   try {
//     // Используем цикл for...of для итерации по массиву промисов
//     for (let i = 0; i < promises.length; i++) {
//       // Ожидаем выполнение текущего промиса
//       result[i] = await promises[i]
//     }
//     return result // Возвращаем массив с результатами
//   } catch (err) {
//     // Если хотя бы один промис завершился с ошибкой, выбрасываем её
//     throw err
//   }
// }

// parallel([
//   new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
// ]).then(console.log) // [1, 2, 3]

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

// async function test() {
//   await Promise.resolve(5)
//   console.log('ggg')
// }
// test()
// console.log('gg')

async function test() {
  await 5
  console.log('1')
}
test()
console.log('2')

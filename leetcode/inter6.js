// let counter = 0
// function id() {
//   return counter++
// }

// function initId() {
//   let counter = 0
//   return function () {
//     return counter++
//   }
// }

// const id = initId()

// console.log(id()) // 0
// console.log(id()) // 1
// console.log(id()) // 2
// console.log(id()) // 3
// console.log(id()) // 4
// console.log(id()) // 5

// const arr = [1, 8, 9, 3, 5, 2, 6]

// function quickSort(arr, compareFunction) {
//     if (arr.length <= 1) return arr;

//     const pivot = arr[arr.length - 1]; // Выбираем pivot
//     const left = [];
//     const right = [];

//     for (let i = 0; i < arr.length - 1; i++) {
//         // Используем функцию сравнения для определения, куда отнести элемент
//         if (compareFunction(arr[i], pivot) < 0) {
//             left.push(arr[i]); // Элемент меньше pivot
//         } else {
//             right.push(arr[i]); // Элемент больше или равен pivot
//         }
//     }

//     // Рекурсивно сортируем левую и правую части
//     return [...quickSort(left, compareFunction), pivot, ...quickSort(right, compareFunction)];
// }

// function map(arr, fn) {
//   return arr.reduce((acc, el, index, array) => {
//     acc.push(fn(el, index, array))
//     return acc
//   }, [])
// }

// function filter(arr, fn) {
//   return arr.reduce((acc, el, index, array) => {
//     if (fn(el, index, array)) {
//       acc.push(el)
//     }

//     return acc
//   }, [])
// }
// function myPromiseAll(promises) {
//   const result = []
//   let counter = 0

//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < promises.length; i++) {
//       promises[i]
//         .then((res) => {
//           result[i] = res
//           counter++
//           if (counter === promises.length) {
//             resolve(result)
//           }
//         })
//         .catch((reason) => {
//           reject(reason)
//         })
//     }
//   })
// }

// const pr = myPromiseAll([Promise.resolve(5), Promise.resolve(10), Promise.resolve(15), Promise.resolve(20)])
// pr.then((result) => {
//   console.log(result)
// })

// const pr2 = myPromiseAll([Promise.resolve(5), Promise.resolve(10), Promise.reject(15), Promise.reject(20)])
// pr2.catch((reason) => {
//   console.log(reason)
// })

// function myPromiseAllSettled(promises) {
//   const result = []
//   let counter = 0

//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < promises.length; i++) {
//       promises[i]
//         .then((res) => {
//           result[i] = { status: 'fulfilled', value: res }
//           counter++
//           if (counter === promises.length) {
//             resolve(result)
//           }
//         })
//         .catch((reason) => {
//           result[i] = { status: 'rejected', reason: reason }
//           counter++
//           if (counter === promises.length) {
//             resolve(result)
//           }
//         })
//     }
//   })
// }

// const pr = myPromiseAllSettled([Promise.resolve(5), Promise.resolve(10), Promise.resolve(15), Promise.resolve(20)])
// pr.then((result) => {
//   console.log(result)
// })

// const pr2 = myPromiseAllSettled([Promise.resolve(5), Promise.resolve(10), Promise.reject(15), Promise.reject(20)])
// pr2.then((reason) => {
//   console.log(reason)
// })
const arr2 = Array(2)
arr2.map((el) => {
  console.log(el)
})
